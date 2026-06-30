from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
import resend
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
STUDIO_EMAIL = os.environ.get('STUDIO_EMAIL', '')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: EmailStr
    message: Optional[str] = ""
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    email_sent: bool = False


class BookingCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    message: Optional[str] = ""


def build_email_html(b: BookingCreate) -> str:
    return f"""
    <div style="font-family: Arial, sans-serif; background:#FAF7F2; padding:32px; color:#2A2522;">
      <table width="100%" style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;">
        <tr><td>
          <h2 style="font-weight:600;color:#C27B66;margin:0 0 16px;">ArtJoga — Новая заявка</h2>
          <p style="margin:8px 0;"><strong>Имя:</strong> {b.name}</p>
          <p style="margin:8px 0;"><strong>Телефон:</strong> {b.phone}</p>
          <p style="margin:8px 0;"><strong>Email:</strong> {b.email}</p>
          <p style="margin:8px 0;"><strong>Сообщение:</strong><br/>{b.message or '—'}</p>
        </td></tr>
      </table>
    </div>
    """


async def send_booking_email(b: BookingCreate) -> bool:
    if not RESEND_API_KEY or not STUDIO_EMAIL:
        logger.warning("Resend not configured; skipping email send.")
        return False
    params = {
        "from": SENDER_EMAIL,
        "to": [STUDIO_EMAIL],
        "subject": f"ArtJoga — заявка от {b.name}",
        "html": build_email_html(b),
        "reply_to": b.email,
    }
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        return False


@api_router.get("/")
async def root():
    return {"message": "ArtJoga API"}


@api_router.post("/bookings", response_model=Booking)
async def create_booking(input: BookingCreate):
    sent = await send_booking_email(input)
    booking = Booking(**input.model_dump(), email_sent=sent)
    await db.bookings.insert_one(booking.model_dump())
    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def get_bookings():
    docs = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Booking(**d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
