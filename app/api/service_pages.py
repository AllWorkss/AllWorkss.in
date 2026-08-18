from fastapi import APIRouter, Request, HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import os

router = APIRouter(tags=["Multi-Page Service SEO"])

# Setup Jinja2 Templates if templates directory exists
templates_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "templates")
if os.path.exists(templates_dir):
    templates = Jinja2Templates(directory=templates_dir)
else:
    templates = None

SERVICE_REGISTRY = {
    "google-business-profile-optimization": {
        "title": "#1 Google Business Profile (GBP) & Local 3-Pack Map Optimization Thane, Mumbai | Allworkss",
        "description": "Dominate Google Local Search & Maps in Mumbai & Thane. Guaranteed 3-Pack rankings, automated review funnels, and 100% NAP consistency.",
        "h1": "Google Business Profile (GBP) & Local Map 3-Pack Dominance",
        "canonical": "https://allworkss.in/services/google-business-profile-optimization",
        "template": "services/gbp.html",
        "service_type": "Local SEO & Map Optimization"
    },
    "custom-website-development": {
        "title": "Custom Website Development & Fast Full-Stack Engineering Mumbai | Allworkss",
        "description": "High-speed, responsive enterprise websites built with FastAPI, Tailwind CSS, WordPress & React. Sub-1s load speed and built-in funnels.",
        "h1": "Custom Web Engineering, Headless WordPress & High-Performance Websites",
        "canonical": "https://allworkss.in/services/custom-website-development",
        "template": "services/web_dev.html",
        "service_type": "Web Engineering"
    },
    "technical-seo-programmatic": {
        "title": "Enterprise Technical SEO & Programmatic Search Ranking Agency India | Allworkss",
        "description": "Rank #1 on Google with advanced technical SEO, programmatic content clusters, Schema markup, and Core Web Vitals engineering.",
        "h1": "Enterprise Technical SEO, Semantic Clustering & Programmatic Search Dominance",
        "canonical": "https://allworkss.in/services/technical-seo-programmatic",
        "template": "services/seo.html",
        "service_type": "Search Engine Optimization"
    },
    "meta-ads-performance-marketing": {
        "title": "High-ROAS Meta Ads Agency & Server-Side CAPI Tracking Mumbai | Allworkss",
        "description": "Scale revenue with high-converting Facebook & Instagram Meta Ad campaigns. Full TOF/MOF/BOF funnels and server-side CAPI tracking.",
        "h1": "High-ROAS Meta Ads, Server-Side CAPI Tracking & Paid Acquisition",
        "canonical": "https://allworkss.in/services/meta-ads-performance-marketing",
        "template": "services/meta_ads.html",
        "service_type": "Paid Media & Performance Marketing"
    },
    "cloud-infrastructure-devops": {
        "title": "Cloud Architecture, Serverless DevOps & Google Cloud Run Setup | Allworkss",
        "description": "Enterprise Cloud migration, Docker containerization, Google Cloud Run, AWS infrastructure, and 99.99% uptime monitoring.",
        "h1": "Cloud Systems Architecture, Docker Containerization & Serverless DevOps",
        "canonical": "https://allworkss.in/services/cloud-infrastructure-devops",
        "template": "services/cloud.html",
        "service_type": "Cloud Systems & DevOps"
    },
    "b2b-sales-funnels-automation": {
        "title": "High-Converting B2B Sales Funnels & Workflow Automation | Allworkss",
        "description": "Turn visitors into paying clients with high-ticket sales funnels, CRM workflows (HubSpot/Zoho), and Make.com/Zapier automation.",
        "h1": "B2B Conversion Funnels, Enterprise CRM & Workflow Automation",
        "canonical": "https://allworkss.in/services/b2b-sales-funnels-automation",
        "template": "services/funnels.html",
        "service_type": "B2B Sales Automation"
    },
    "domain-dns-brand-security": {
        "title": "Enterprise Domain Portfolio, DNS Management & Cloudflare Security | Allworkss",
        "description": "Protect your corporate identity with professional DNS routing, Cloudflare edge caching, SSL encryption, and DMARC/DKIM setups.",
        "h1": "Enterprise Domain Portfolio, DNS Hardening & Edge Security",
        "canonical": "https://allworkss.in/services/domain-dns-brand-security",
        "template": "services/domains.html",
        "service_type": "Domain & Brand Security"
    },
    "omnichannel-content-creation": {
        "title": "B2B Content Strategy, Video Scriptwriting & Thought Leadership | Allworkss",
        "description": "Drive organic enterprise authority with viral video scripts, B2B whitepapers, technical documentation, and LinkedIn thought leadership.",
        "h1": "Omnichannel Brand Content Creation & B2B Thought Leadership",
        "canonical": "https://allworkss.in/services/omnichannel-content-creation",
        "template": "services/content.html",
        "service_type": "Content Strategy & Copywriting"
    }
}

@router.get("/services/{service_slug}", response_class=HTMLResponse)
async def get_service_landing_page(request: Request, service_slug: str):
    data = SERVICE_REGISTRY.get(service_slug)
    if not data:
        if templates:
            return templates.TemplateResponse("404.html", {"request": request}, status_code=404)
        raise HTTPException(status_code=404, detail="Service landing page not found")
    if templates:
        return templates.TemplateResponse(data["template"], {"request": request, "page": data})
    return HTMLResponse(f"<h1>{data['h1']}</h1><p>{data['description']}</p>")

@router.get("/about", response_class=HTMLResponse)
@router.get("/about-founder", response_class=HTMLResponse)
async def get_founder_page(request: Request):
    if templates:
        return templates.TemplateResponse("about_founder.html", {"request": request})
    return HTMLResponse("<h1>Yasar Intakhab Khan — Founder & CTO</h1>")
