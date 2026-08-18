from fastapi import FastAPI
from app.api.chatbot_routes import chat_router
from app.api.seo_routes import seo_router

app = FastAPI(
    title="Allworkss Business Intelligence Suite (ABIS) & Digital Agency API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Register Routers
app.include_router(chat_router)
app.include_router(seo_router)

@app.get("/api/v1/health")
async def health_check():
    return {
        "status": "healthy",
        "suite": "AllWorkss ABIS 360° AI",
        "domain": "https://allworkss.space",
        "founder": "Yasar Intakhab Khan"
    }

@app.get("/")
async def root():
    return {"status": "operational", "suite": "AllWorkss ABIS AI Engine & Digital Agency"}
