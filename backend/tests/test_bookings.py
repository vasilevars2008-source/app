"""Backend API tests for ArtJoga booking endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://kundalini-flow-2.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
def test_root(api_client):
    r = api_client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json().get("message") == "ArtJoga API"


# Booking creation - happy path
def test_create_booking_returns_expected_shape(api_client):
    payload = {
        "name": "TEST_User",
        "phone": "+1234567890",
        "email": "test_user@example.com",
        "message": "TEST booking message",
    }
    r = api_client.post(f"{API}/bookings", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data and isinstance(data["created_at"], str)
    assert data.get("email_sent") is False  # Resend not configured
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["message"] == payload["message"]


# Persistence check via GET
def test_booking_persisted_in_get(api_client):
    payload = {
        "name": "TEST_PersistUser",
        "phone": "+19998887777",
        "email": "persist_test@example.com",
        "message": "TEST persistence",
    }
    cr = api_client.post(f"{API}/bookings", json=payload)
    assert cr.status_code == 200
    created_id = cr.json()["id"]

    gr = api_client.get(f"{API}/bookings")
    assert gr.status_code == 200
    items = gr.json()
    assert isinstance(items, list)
    ids = [i["id"] for i in items]
    assert created_id in ids
    found = next(i for i in items if i["id"] == created_id)
    assert found["email"] == payload["email"]
    assert found["name"] == payload["name"]
    assert found["email_sent"] is False


# Invalid email rejection
def test_create_booking_invalid_email(api_client):
    payload = {
        "name": "TEST_Bad",
        "phone": "+1234567890",
        "email": "not-an-email",
        "message": "bad email",
    }
    r = api_client.post(f"{API}/bookings", json=payload)
    assert r.status_code == 422


# Missing required fields
def test_create_booking_missing_fields(api_client):
    r = api_client.post(f"{API}/bookings", json={"email": "x@y.com"})
    assert r.status_code == 422


# Optional message
def test_create_booking_optional_message(api_client):
    payload = {
        "name": "TEST_NoMsg",
        "phone": "+10000000000",
        "email": "no_msg_test@example.com",
    }
    r = api_client.post(f"{API}/bookings", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["message"] == ""
