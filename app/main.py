from fastapi import FastAPI
from app.api.chatbot_routes import chat_router
from app.api.seo_routes import seo_router
from app.api.payment_routes import payment_router
from app.api.service_pages import router as service_router

app = FastAPI(
    title="Allworkss Business Intelligence Suite (ABIS) & Digital Agency API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Register All Routers
app.include_router(chat_router)
app.include_router(seo_router)
app.include_router(payment_router)
app.include_router(service_router)

@app.get("/api/v1/health")
async def health_check():
    return {
        "status": "healthy",
        "suite": "AllWorkss ABIS 360° AI",
        "domains": ["https://allworkss.in", "https://allworkss.space", "https://yarsa.store"],
        "founder": "Yasar Intakhab Khan",
        "legal_entity": "YARSA ALLWORKSS (OPC) PRIVATE LIMITED",
        "gstin": "277AABCY875P1Z9"
    }

@app.get("/")
async def root():
    return {
        "status": "operational",
        "suite": "AllWorkss ABIS AI Engine & Digital Agency",
        "legal_entity": "YARSA ALLWORKSS (OPC) PRIVATE LIMITED"
    }
