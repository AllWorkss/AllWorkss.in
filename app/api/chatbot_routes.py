from fastapi import APIRouter
from pydantic import BaseModel
import os

try:
    import google.generativeai as genai
    GENAI_AVAILABLE = True
except ImportError:
    GENAI_AVAILABLE = False

chat_router = APIRouter(prefix="/api/v1/bot", tags=["AI Assistant"])

# System knowledge prompt for ABIS & Consultancy
SYSTEM_PROMPT = """
You are the official AI Business Assistant for Allworkss Business Intelligence Suite (ABIS) & Consultancy.
Founder & CTO: Yasar Intakhab Khan.
Legal Entity: YARSA ALLWORKSS (OPC) PRIVATE LIMITED (GSTIN: 277AABCY875P1Z9).

Platform Capabilities:
1. Module 1: Business Auditor (GST/MCA validation, Anomaly detection, 8-page PDF & 12-slide PPTX audit reports).
2. Module 2: Supply Chain (Logistics route optimization via Shiprocket/Porter, vendor risk).
3. Module 3: Smart Inventory (ARIMA/Prophet demand forecasting, EOQ reordering, dead stock).
4. Module 4: Customer Intelligence (RFM segmentation, churn prediction, LTV forecast).
5. Module 5: Financial Growth Engine (Altman Z-Score, 25 ratios, bank-loan readiness).
Agency & Tech Services: Full-Stack Web, Cloud Infrastructure (GCP/AWS), Meta Ads & CAPI, Advanced Technical SEO, Google Business Profile #1 Map Ranking, and High-Converting Business Funnels.

Rules:
- Be professional, concise, encouraging, and sharp.
- Guide users to run free audits or book a consultancy strategy call.
- If user provides phone/email, confirm that a senior consultant will reach out.
"""

class ChatMessage(BaseModel):
    message: str

@chat_router.post("/chat")
async def handle_ai_chat(req: ChatMessage):
    try:
        api_key = os.getenv("GEMINI_API_KEY", "")
        if not api_key or not GENAI_AVAILABLE:
            return {
                "reply": "Hi! I am the Allworkss AI Assistant. How can I help you scale your business, run an audit, or launch campaigns today?"
            }
        
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(
            model_name="gemini-2.0-flash",
            system_instruction=SYSTEM_PROMPT
        )
        response = model.generate_content(req.message)
        return {"reply": response.text}
    except Exception as e:
        return {
            "reply": "Thank you for reaching out! You can run our instant business audit from the dashboard or drop your WhatsApp number to connect directly."
        }
