from fastapi import FastAPI
from app.api.chatbot_routes import chat_router

app = FastAPI(title="Allworkss Business Intelligence Suite (ABIS) API", version="1.0.0")

app.include_router(chat_router)

@app.get("/")
async def root():
    return {"status": "operational", "suite": "AllWorkss ABIS AI Engine"}
