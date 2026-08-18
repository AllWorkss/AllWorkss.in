from fastapi import APIRouter, Response
from datetime import datetime

seo_router = APIRouter(tags=["SEO & Crawlers"])

@seo_router.get("/robots.txt", response_class=Response)
async def get_robots_txt():
    content = """User-agent: *
Allow: /
Allow: /services/
Allow: /about-founder
Allow: /static/
Disallow: /tmp/
Disallow: /api/v1/internal/

Sitemap: https://allworkss.in/sitemap.xml
Sitemap: https://allworkss.space/sitemap.xml
Sitemap: https://yarsa.store/sitemap.xml
Host: https://allworkss.in
"""
    return Response(content=content, media_type="text/plain")

@seo_router.get("/sitemap.xml", response_class=Response)
async def get_sitemap():
    today = datetime.now().strftime("%Y-%m-%d")
    urls = [
        "https://allworkss.in/",
        "https://allworkss.in/services/google-business-profile-optimization",
        "https://allworkss.in/services/custom-website-development",
        "https://allworkss.in/services/technical-seo-programmatic",
        "https://allworkss.in/services/meta-ads-performance-marketing",
        "https://allworkss.in/services/cloud-infrastructure-devops",
        "https://allworkss.in/services/b2b-sales-funnels-automation",
        "https://allworkss.in/services/domain-dns-brand-security",
        "https://allworkss.in/services/omnichannel-content-creation",
        "https://allworkss.in/about-founder",
        "https://allworkss.space/",
        "https://yarsa.store/"
    ]

    xml_items = "\n".join([
        f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>""" for url in urls
    ])

    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{xml_items}
</urlset>"""
    return Response(content=xml, media_type="application/xml")
