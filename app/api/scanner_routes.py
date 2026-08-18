from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

scanner_router = APIRouter(prefix="/api/v1/scanners", tags=["Live Audit Scanners"])

class ScanRequest(BaseModel):
    target: str
    location: Optional[str] = "Thane, Mumbai"
    audit_type: str  # "maps", "instagram", "youtube", "seo", "tally"

@scanner_router.post("/run-instant-scan")
@scanner_router.post("/run-audit")
async def run_instant_scan(req: ScanRequest):
    """
    Executes instant lightweight scans consuming open-source wrappers (Maps, Instagram, YouTube, SEO, Tally XML).
    """
    audit_type = req.audit_type.lower()

    if audit_type == "maps":
        from app.services.scanners.maps_scanner import run_maps_audit
        return await run_maps_audit(req.target, req.location)

    elif audit_type in ["instagram", "social"]:
        from app.services.scanners.social_scanner import run_social_audit
        return await run_social_audit(req.target)

    elif audit_type == "youtube":
        from app.services.scanners.youtube_scanner import run_youtube_audit
        return await run_youtube_audit(req.target)

    elif audit_type == "seo":
        from app.services.scanners.seo_scanner import run_seo_audit
        return await run_seo_audit(req.target)

    elif audit_type == "tally":
        from app.services.scanners.tally_parser import parse_tally_xml
        return await parse_tally_xml(req.target)

    raise HTTPException(status_code=400, detail="Invalid audit scanner type. Supported: 'maps', 'instagram', 'youtube', 'seo', 'tally'")
