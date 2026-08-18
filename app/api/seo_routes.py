from fastapi import APIRouter, Response
from datetime import datetime

seo_router = APIRouter(tags=["Robots and Sitemaps"])

@seo_router.get("/robots.txt", response_class=Response)
async def serve_robots_txt():
    content = """User-agent: *
Allow: /
Allow: /services/
Allow: /about-founder
Allow: /static/
Disallow: /tmp/
Disallow: /api/v1/internal/
Disallow: /admin/

Sitemap: https://allworkss.in/sitemap.xml
Sitemap: https://allworkss.space/sitemap.xml
Host: https://allworkss.in
"""
    return Response(content=content, media_type="text/plain")

@seo_router.get("/sitemap.xml", response_class=Response)
async def serve_sitemap_xml():
    today = datetime.now().strftime("%Y-%m-%d")
    urls = [
        {"loc": "https://allworkss.in/", "priority": "1.0", "changefreq": "daily"},
        {"loc": "https://allworkss.in/about-founder", "priority": "0.95", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/google-business-profile-optimization", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/custom-website-development", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/technical-seo-programmatic", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/meta-ads-performance-marketing", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/cloud-infrastructure-devops", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/b2b-sales-funnels-automation", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/domain-dns-brand-security", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.in/services/omnichannel-content-creation", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "https://allworkss.space/", "priority": "1.0", "changefreq": "daily"}
    ]
    
    entries = "\n".join([f"""  <url>
    <loc>{u['loc']}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{u['changefreq']}</changefreq>
    <priority>{u['priority']}</priority>
  </url>""" for u in urls])

    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
{entries}
</urlset>"""
    return Response(content=xml_content, media_type="application/xml")
