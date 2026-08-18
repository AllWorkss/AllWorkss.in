import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { SERVICES_DATA } from '../../../lib/services-data';

export default function SubServicePage({ service, subService, serviceKey }) {
  if (!service || !subService) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service Page Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline mt-4 inline-block">Return Home</Link>
        </div>
      </div>
    );
  }

  const pageTitle = subService.title || `${subService.h1 || subService.name} in Thane & Mumbai | Allworkss`;
  const pageH1 = subService.h1 || subService.name;
  const canonicalUrl = `https://allworkss.in/services/${serviceKey}/${subService.id}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": pageH1,
        "serviceType": service.name,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Allworkss Consultancy & Digital Solutions",
          "telephone": "+91-9967376681",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Thane",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        },
        "description": subService.description,
        "url": canonicalUrl
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allworkss.in/" },
          { "@type": "ListItem", "position": 2, "name": service.name, "item": `https://allworkss.in/services/${serviceKey}` },
          { "@type": "ListItem", "position": 3, "name": pageH1, "item": canonicalUrl }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={subService.description} />
        <meta name="keywords" content={`${subService.name}, ${service.name}, Thane SEO, Mumbai Digital Agency, Yasar Intakhab Khan, Allworkss`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Geo Targeting */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Thane, Mumbai Metropolitan Region" />
        <meta name="geo.position" content="19.2183;72.9781" />
        <meta name="ICBM" content="19.2183, 72.9781" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={subService.description} />
        <meta property="og:image" content="https://allworkss.in/static/images/og-allworkss-preview.webp" />
        <meta property="og:site_name" content="Allworkss Digital Solutions" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
        <Navbar />

        {/* Breadcrumb Navigation */}
        <div className="bg-slate-900 border-b border-slate-800 py-3 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={`/services/${serviceKey}`} className="hover:text-white">{service.name}</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{subService.name}</span>
          </div>
        </div>

        <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full space-y-12">
          {/* Top Fold Hero Header */}
          <div className="space-y-4 text-center max-w-4xl mx-auto">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded-full uppercase">
              {service.name} — Thane, Mumbai &amp; MMR
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {pageH1}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {subService.description}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subService.features && subService.features.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2 hover:border-cyan-500/50 transition">
                <div className="text-cyan-400 text-lg font-bold">✓ 0{idx + 1}</div>
                <h3 className="text-sm font-bold text-white">{feature}</h3>
                <p className="text-xs text-slate-400">Directly supervised by Founder &amp; CTO Yasar Intakhab Khan.</p>
              </div>
            ))}
          </div>

          {/* Interactive Conversion Callout Box */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Get a Custom Proposal &amp; Instant Audit</h2>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Ready to scale your digital presence with enterprise web engineering, performance marketing, and local SEO?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/919967376681?text=${encodeURIComponent(subService.whatsappMessage || `Hi Allworkss, I want a proposal for ${pageH1}`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase text-xs rounded-xl shadow-lg shadow-cyan-500/20"
              >
                Instant WhatsApp Quote ↗
              </a>
              <a
                href="https://allworkss.space"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-slate-950 border border-slate-800 hover:border-slate-700 text-cyan-400 font-bold uppercase text-xs rounded-xl"
              >
                Explore ABIS 360° AI SaaS ↗
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [];

  Object.keys(SERVICES_DATA).forEach((key) => {
    const category = SERVICES_DATA[key];
    if (category.subServices) {
      category.subServices.forEach((sub) => {
        paths.push({
          params: { key: key, subId: sub.id }
        });
      });
    }
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { key, subId } = params;
  const category = SERVICES_DATA[key];

  if (!category) {
    return { notFound: true };
  }

  const subService = category.subServices.find((s) => s.id === subId);

  if (!subService) {
    return { notFound: true };
  }

  return {
    props: {
      service: {
        name: category.name,
        icon: category.icon || '🚀',
        description: category.description
      },
      subService: subService,
      serviceKey: key
    }
  };
}
