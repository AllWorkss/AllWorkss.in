from fastapi import APIRouter, Response
from datetime import datetime

seo_router = APIRouter(tags=["SEO Engine"])

PROGRAMMATIC_SUB_SERVICES = [
    # Pillar 1
    "google-ecosystem-local-seo/gmb-3pack-ranking-thane",
    "google-ecosystem-local-seo/gmb-optimization-mumbai",
    "google-ecosystem-local-seo/automated-review-funnels",
    "google-ecosystem-local-seo/google-local-service-ads",
    "google-ecosystem-local-seo/local-citation-audit",

    # Pillar 2
    "custom-web-engineering/fastapi-python-web-development",
    "custom-web-engineering/headless-wordpress-tailwind",
    "custom-web-engineering/enterprise-react-nextjs-portals",
    "custom-web-engineering/ecommerce-razorpay-integration",
    "custom-web-engineering/core-web-vitals-speed-optimization",

    # Pillar 3
    "enterprise-technical-seo/programmatic-seo-architecture",
    "enterprise-technical-seo/multi-entity-jsonld-schema-audit",
    "enterprise-technical-seo/crawl-budget-canonical-cleanup",
    "enterprise-technical-seo/b2b-semantic-keyword-clustering",
    "enterprise-technical-seo/international-hreflang-seo",

    # Pillar 4
    "performance-meta-ads/conversions-api-capi-server-side",
    "performance-meta-ads/b2b-lead-generation-funnels",
    "performance-meta-ads/high-roas-ecommerce-catalog-ads",
    "performance-meta-ads/dynamic-retargeting-pixel-fix",
    "performance-meta-ads/ugc-motion-creative-testing",

    # Pillar 5
    "cloud-devops-infrastructure/google-cloud-run-containerization",
    "cloud-devops-infrastructure/docker-multi-stage-deployment",
    "cloud-devops-infrastructure/cloudflare-enterprise-edge-dns",
    "cloud-devops-infrastructure/zero-trust-ssl-api-gateway",
    "cloud-devops-infrastructure/cloud-cost-latency-optimization",

    # Pillar 6
    "b2b-funnels-workflow-automation/high-ticket-consultancy-funnels",
    "b2b-funnels-workflow-automation/make-zapier-webhook-integrations",
    "b2b-funnels-workflow-automation/automated-whatsapp-lead-alerts",
    "b2b-funnels-workflow-automation/crm-hubspot-zoho-pipelines",
    "b2b-funnels-workflow-automation/tripwire-webinar-conversion-flows",

    # Pillar 7
    "domain-dns-brand-protection/spf-dkim-dmarc-email-deliverability",
    "domain-dns-brand-protection/corporate-domain-portfolio-management",
    "domain-dns-brand-protection/zero-downtime-dns-migration",

    # Pillar 8
    "omnichannel-content-brand/viral-video-reels-scriptwriting",
    "omnichannel-content-brand/technical-b2b-whitepapers-casestudies",
    "omnichannel-content-brand/linkedin-thought-leadership-growth",

    # Pillar 9 (SaaS Modules)
    "abis-ai-business-suite/gst-mca-anomaly-audit-report",
    "abis-ai-business-suite/supply-chain-logistics-optimization",
    "abis-ai-business-suite/arima-prophet-inventory-forecasting",
    "abis-ai-business-suite/rfm-customer-churn-intelligence",
    "abis-ai-business-suite/altman-zscore-financial-growth-deck",

    # Direct Agency Services
    "google-business-profile-optimization",
    "custom-website-development",
    "technical-seo-programmatic",
    "meta-ads-performance-marketing",
    "cloud-infrastructure-devops",
    "b2b-sales-funnels-automation",
    "domain-dns-brand-security",
    "omnichannel-content-creation"
]

@seo_router.get("/robots.txt", response_class=Response)
async def serve_robots():
    return Response(
        content="""User-agent: *
Allow: /
Allow: /services/
Allow: /modules/
Allow: /about-founder
Disallow: /tmp/
Disallow: /api/v1/internal/

Sitemap: https://allworkss.in/sitemap.xml
Sitemap: https://allworkss.space/sitemap.xml
Host: https://allworkss.in
""",
        media_type="text/plain"
    )

@seo_router.get("/sitemap.xml", response_class=Response)
async def serve_sitemap():
    today = datetime.now().strftime("%Y-%m-%d")
    
    base_urls = [
        "https://allworkss.in/",
        "https://allworkss.in/about-founder",
        "https://allworkss.space/",
        "https://allworkss.space/modules/business-auditor",
        "https://allworkss.space/modules/supply-chain",
        "https://allworkss.space/modules/smart-inventory",
        "https://allworkss.space/modules/customer-intelligence",
        "https://allworkss.space/modules/financial-growth"
    ]

    programmatic_urls = [f"https://allworkss.in/services/{path}" for path in PROGRAMMATIC_SUB_SERVICES]
    
    all_urls = base_urls + programmatic_urls

    xml_items = "\n".join([f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>{'1.0' if url in ['https://allworkss.in/', 'https://allworkss.space/'] else '0.9'}</priority>
  </url>""" for url in all_urls])
    
    return Response(
        content=f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{xml_items}\n</urlset>',
        media_type="application/xml"
    )
