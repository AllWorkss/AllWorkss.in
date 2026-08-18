from fastapi import APIRouter, Response
from datetime import datetime

seo_router = APIRouter(tags=["SEO Engine"])

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
    urls = [
        "https://allworkss.in/",
        "https://allworkss.in/about-founder",
        "https://allworkss.in/services/google-business-profile-optimization",
        "https://allworkss.in/services/custom-website-development",
        "https://allworkss.in/services/technical-seo-programmatic",
        "https://allworkss.in/services/meta-ads-performance-marketing",
        "https://allworkss.in/services/cloud-infrastructure-devops",
        "https://allworkss.in/services/b2b-sales-funnels-automation",
        "https://allworkss.in/services/domain-dns-brand-security",
        "https://allworkss.in/services/omnichannel-content-creation",
        "https://allworkss.space/",
        "https://allworkss.space/modules/business-auditor",
        "https://allworkss.space/modules/supply-chain",
        "https://allworkss.space/modules/smart-inventory",
        "https://allworkss.space/modules/customer-intelligence",
        "https://allworkss.space/modules/financial-growth"
    ]
    xml_items = "\n".join([f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>{'1.0' if url in ['https://allworkss.in/', 'https://allworkss.space/'] else '0.9'}</priority>
  </url>""" for url in urls])
    
    return Response(
        content=f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{xml_items}\n</urlset>',
        media_type="application/xml"
    )
