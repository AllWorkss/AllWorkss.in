from fastapi import APIRouter, Response
from datetime import datetime

seo_router = APIRouter(tags=["SEO & Web Crawlers"])

@seo_router.get("/robots.txt", response_class=Response)
async def get_robots_txt():
    content = """User-agent: *
Allow: /
Allow: /templates/
Allow: /static/
Disallow: /tmp/
Disallow: /api/v1/internal/
Disallow: /admin/

Sitemap: https://allworkss.space/sitemap.xml
Host: https://allworkss.space
"""
    return Response(content=content, media_type="text/plain")

@seo_router.get("/sitemap.xml", response_class=Response)
async def get_sitemap_xml():
    today = datetime.now().strftime("%Y-%m-%d")
    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://allworkss.space/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://allworkss.space/services/digital-marketing</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://allworkss.space/services/cloud-infrastructure</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://allworkss.space/services/business-funnels</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>"""
    return Response(content=sitemap, media_type="application/xml")
