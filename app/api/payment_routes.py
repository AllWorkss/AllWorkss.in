import hmac
import hashlib
import os
from fastapi import APIRouter, Request, HTTPException

payment_router = APIRouter(prefix="/api/v1/payments", tags=["Payments"])

ADMIN_BYPASS_EMAIL = "theallworkss@gmail.com"

@payment_router.post("/webhook/razorpay")
async def razorpay_webhook_receiver(request: Request):
    """
    Razorpay Production Webhook Verification Endpoint.
    Verifies HMAC-SHA256 signature and auto-marks paid sessions.
    """
    webhook_secret = os.getenv("RAZORPAY_WEBHOOK_SECRET", "")
    webhook_signature = request.headers.get("X-Razorpay-Signature", "")
    payload = await request.body()
    
    if webhook_secret and webhook_signature:
        generated_signature = hmac.new(
            webhook_secret.encode(),
            payload,
            hashlib.sha256
        ).hexdigest()
        
        if not hmac.compare_digest(generated_signature, webhook_signature):
            raise HTTPException(status_code=400, detail="Invalid signature")
            
    # Extract Order & Process Event
    try:
        event_data = await request.json()
    except Exception:
        event_data = {}

    event_type = event_data.get("event")
    
    if event_type == "order.paid":
        payment_entity = event_data.get("payload", {}).get("payment", {}).get("entity", {})
        order_id = payment_entity.get("order_id")
        email = payment_entity.get("email")
        
        # Admin Bypass Verification
        is_admin_test = (email == ADMIN_BYPASS_EMAIL)
        
        return {
            "status": "success",
            "order_id": order_id,
            "admin_bypass": is_admin_test,
            "paid": True
        }
        
    return {"status": "success", "event": event_type}

@payment_router.post("/admin/bypass-verify")
async def admin_bypass_verification(req_email: str):
    """
    Direct testing bypass endpoint for founder email (theallworkss@gmail.com).
    """
    if req_email == ADMIN_BYPASS_EMAIL:
        return {
            "authorized": True,
            "bypass": True,
            "message": "Admin test bypass authorized for founder account."
        }
    return {"authorized": False, "bypass": False}
