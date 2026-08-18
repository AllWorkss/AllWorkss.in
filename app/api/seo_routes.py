from fastapi import APIRouter, Response
from datetime import datetime

seo_router = APIRouter(tags=["SEO & Crawlers"])

@seo_router.get("/robots.txt", response_class=Response)
async def get_robots_txt():
    content = """User-agent: *
Allow: /
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
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://allworkss.in/</loc>
    <lastmod>{today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://allworkss.space/</loc>
    <lastmod>{today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yarsa.store/</loc>
    <lastmod>{today}</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>"""
    return Response(content=xml, media_type="application/xml")
