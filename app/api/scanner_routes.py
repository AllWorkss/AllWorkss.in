from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List

scanner_router = APIRouter(prefix="/api/v1/scanners", tags=["Live Audit Scanners"])

class ScanRequest(BaseModel):
    target: str
    location: Optional[str] = "Thane, Mumbai"
    audit_type: str  # "maps", "instagram", "youtube", "seo", "tally", "crawl", "trends", "dns"

class TrendsRequest(BaseModel):
    keywords: List[str]
    geo: Optional[str] = "IN-MH"

class DomainRequest(BaseModel):
    domain: str

@scanner_router.post("/run-instant-scan")
@scanner_router.post("/run-audit")
async def run_instant_scan(req: ScanRequest):
    """
    Executes instant lightweight scans consuming open-source wrappers.
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

    elif audit_type == "crawl":
        from app.services.scanners.crawl_ai_engine import run_crawl_audit
        return await run_crawl_audit(req.target)

    elif audit_type == "dns":
        from app.services.scanners.domain_security_scanner import run_dns_security_audit
        return await run_dns_security_audit(req.target)

    raise HTTPException(status_code=400, detail="Invalid audit scanner type. Supported: 'maps', 'instagram', 'youtube', 'seo', 'tally', 'crawl', 'dns'")

@scanner_router.post("/crawl-audit")
async def crawl_audit_endpoint(req: DomainRequest):
    """
    Crawls target URL and extracts Markdown for LLM evaluation.
    """
    from app.services.scanners.crawl_ai_engine import run_crawl_audit
    return await run_crawl_audit(req.domain)

@scanner_router.post("/trends-velocity")
async def trends_velocity_endpoint(req: TrendsRequest):
    """
    Queries search query velocity across Thane, Mumbai & Maharashtra (IN-MH).
    """
    from app.services.scanners.trends_engine import run_trends_analysis
    return await run_trends_analysis(req.keywords, req.geo or "IN-MH")

@scanner_router.post("/dns-security")
async def dns_security_endpoint(req: DomainRequest):
    """
    Audits DNS records (MX, SPF, DMARC) and WHOIS expiration status.
    """
    from app.services.scanners.domain_security_scanner import run_dns_security_audit
    return await run_dns_security_audit(req.domain)
