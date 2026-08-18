from fastapi import APIRouter, Request, HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import os

router = APIRouter(tags=["Multi-Page Service & SaaS Modules SEO"])

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

MODULE_REGISTRY = {
    "business-auditor": {
        "title": "Module 1: Business Auditor — GST/MCA Anomaly Detection & ₹99 PDF Report | ABIS",
        "h1": "Module 1: Business Auditor (GST & MCA Anomaly Detection)",
        "price": "₹99 / Report",
        "description": "Automated GST 15-digit validation, MCA annual return anomaly scoring via IsolationForest, and Deloitte/EY-style 8-Page PDF Report."
    },
    "supply-chain": {
        "title": "Module 2: Supply Chain Logistics & Route Optimization | ABIS",
        "h1": "Module 2: Supply Chain & Multi-Carrier Route Mapping",
        "price": "₹199 / Report",
        "description": "Multi-carrier API integration (Shiprocket/Porter), dynamic route cost calculation, and freight optimization."
    },
    "smart-inventory": {
        "title": "Module 3: Smart Inventory Demand Forecasting (ARIMA/Prophet) | ABIS",
        "h1": "Module 3: Smart Inventory & Demand Forecasting",
        "price": "₹299 / Report",
        "description": "Time-series demand estimation via ARIMA & Facebook Prophet models, EOQ reorder point calculation, and zero stockout alerts."
    },
    "customer-intelligence": {
        "title": "Module 4: Customer Intelligence & Churn Prediction | ABIS",
        "h1": "Module 4: Customer Intelligence & RFM Segmentation",
        "price": "₹399 / Report",
        "description": "RFM (Recency, Frequency, Monetary) cohort analysis, churn probability scoring, and LTV optimization."
    },
    "financial-growth": {
        "title": "Module 5: Financial Growth Engine — Altman Z-Score & ₹499 PPTX Pitch Deck | ABIS",
        "h1": "Module 5: Financial Growth Engine & Boardroom PPTX Deck",
        "price": "₹499 / Report",
        "description": "Altman Z-Score bankruptcy assessment, 25 financial ratios, bank loan readiness score, and 12-Slide Dark PPTX presentation."
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

@router.get("/modules/{module_slug}", response_class=HTMLResponse)
async def get_saas_module_page(request: Request, module_slug: str):
    data = MODULE_REGISTRY.get(module_slug)
    if not data:
        if templates:
            return templates.TemplateResponse("404.html", {"request": request}, status_code=404)
        raise HTTPException(status_code=404, detail="SaaS Module not found")
    return HTMLResponse(f"""
    <!DOCTYPE html>
    <html lang="en" class="h-full bg-slate-950 text-white font-sans">
    <head>
      <meta charset="UTF-8">
      <title>{data['title']}</title>
      <meta name="description" content="{data['description']}">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="h-full flex flex-col justify-between p-8 max-w-4xl mx-auto">
      <header class="border-b border-slate-800 pb-4">
        <a href="https://allworkss.space" class="text-xl font-bold text-cyan-400">ABIS 360° AI Software Platform</a>
      </header>
      <main class="space-y-6 my-12">
        <span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded-full uppercase">{data['price']}</span>
        <h1 class="text-4xl font-extrabold text-white">{data['h1']}</h1>
        <p class="text-slate-300 text-base leading-relaxed">{data['description']}</p>
        <div class="pt-6">
          <a href="https://allworkss.space" class="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase text-xs rounded-xl shadow-lg shadow-cyan-500/20">
            Launch {data['h1']} on ABIS SaaS
          </a>
        </div>
      </main>
      <footer class="border-t border-slate-800 pt-4 text-xs text-slate-500 flex justify-between">
        <span>© 2026 YARSA ALLWORKSS (OPC) PRIVATE LIMITED</span>
        <a href="https://allworkss.in" class="text-blue-400 hover:underline">Allworkss Agency Portal ↗</a>
      </footer>
    </body>
    </html>
    """)

@router.get("/about", response_class=HTMLResponse)
@router.get("/about-founder", response_class=HTMLResponse)
async def get_founder_page(request: Request):
    if templates:
        return templates.TemplateResponse("about_founder.html", {"request": request})
    return HTMLResponse("<h1>Yasar Intakhab Khan — Founder & CTO</h1>")
