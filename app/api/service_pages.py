from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import os

router = APIRouter(tags=["Service Landing Pages"])

# Setup Jinja2 Templates if templates directory exists
templates_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "templates")
if os.path.exists(templates_dir):
    templates = Jinja2Templates(directory=templates_dir)
else:
    templates = None

SERVICES = [
    {
        "slug": "google-business-profile",
        "title": "Google Business Profile & Local 3-Pack Map Optimization",
        "h1": "Google Business Profile (GBP) & Local 3-Pack Map Optimization",
        "meta_desc": "Dominate local search rankings in Thane & Mumbai. Google Business Profile 360° management, geotagging, category stacking, and review velocity AI.",
        "template": "services/gbp.html"
    },
    {
        "slug": "technical-seo",
        "title": "Enterprise Technical SEO & Programmatic Indexing",
        "h1": "Enterprise Technical SEO & Semantic Search Dominance",
        "meta_desc": "Enterprise Technical SEO, Core Web Vitals 95+ optimization, JSON-LD Schema markup, SSR indexation, and programmatic keyword clustering.",
        "template": "services/seo.html"
    },
    {
        "slug": "meta-ads-marketing",
        "title": "Performance Meta Ads & CAPI Server-Side Marketing",
        "h1": "Performance Meta Ads & Server-Side CAPI Marketing",
        "meta_desc": "High-ROAS Meta paid ads, TOF/MOF/BOF campaign architecture, Conversions API (CAPI) server-side tracking, and Lookalike audience targeting.",
        "template": "services/meta_ads.html"
    },
    {
        "slug": "cloud-infrastructure",
        "title": "Cloud Architecture & Google Cloud Run DevOps",
        "h1": "Cloud Architecture, DevOps & Google Cloud Run Deployment",
        "meta_desc": "Serverless containerization, Google Cloud Run, AWS Docker orchestration, sub-second autoscaling, and zero-trust Cloudflare edge security.",
        "template": "services/cloud.html"
    },
    {
        "slug": "web-engineering",
        "title": "Full-Stack Web Engineering & Headless WordPress",
        "h1": "Full-Stack Web Development, WordPress & Domain Management",
        "meta_desc": "Ultra-fast Headless WordPress, Python FastAPI microservices, Next.js web applications, DNS portfolio hardening, and Cloudflare CDN.",
        "template": "services/web_dev.html"
    },
    {
        "slug": "business-funnels",
        "title": "B2B Sales Funnels & Workflow Automation Agency",
        "h1": "B2B Conversion Funnels & Enterprise Workflow Automation",
        "meta_desc": "High-ticket sales funnel engineering, VSL landing pages, 1-click upsells, automated calendar qualification, and Make.com/Zapier CRM pipelines.",
        "template": "services/funnels.html"
    },
    {
        "slug": "content-creation",
        "title": "Brand Content Creation & Omnichannel B2B Growth",
        "h1": "Omnichannel Brand Content Creation & B2B Thought Leadership",
        "meta_desc": "Viral short-form video scripting (Reels, Shorts), B2B technical whitepapers, automated email drip pipelines, and omnichannel brand scaling.",
        "template": "services/content.html"
    }
]

@router.get("/services/{service_slug}", response_class=HTMLResponse)
async def serve_service_page(request: Request, service_slug: str):
    service = next((s for s in SERVICES if s["slug"] == service_slug), None)
    if not service:
        if templates:
            return templates.TemplateResponse("404.html", {"request": request}, status_code=404)
        return HTMLResponse("<h1>404 Page Not Found</h1>", status_code=404)
    if templates:
        return templates.TemplateResponse(service["template"], {"request": request, "service": service})
    return HTMLResponse(f"<h1>{service['h1']}</h1><p>{service['meta_desc']}</p>")

@router.get("/about", response_class=HTMLResponse)
@router.get("/about-founder", response_class=HTMLResponse)
async def serve_about_founder(request: Request):
    if templates:
        return templates.TemplateResponse("about_founder.html", {"request": request})
    return HTMLResponse("<h1>Yasar Intakhab Khan — Founder & CTO</h1>")
