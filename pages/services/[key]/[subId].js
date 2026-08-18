import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { SERVICES_DATA } from '../../../lib/services-data';
import { generateInquiryMessages } from '../../../lib/inquiry-templates';

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

  const { whatsappUrl, mailtoUrl } = generateInquiryMessages(serviceKey, subService.id, pageH1);

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

      <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col relative overflow-hidden">
        {/* Background Radial Glow Lighting Beams */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none rounded-full" />
        
        <Navbar />

        {/* Breadcrumb Navigation */}
        <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3 text-xs text-slate-400 mt-16">
          <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href={`/services/${serviceKey}`} className="hover:text-white transition">{service.name}</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{subService.name}</span>
          </div>
        </div>

        {/* Anchor Pills Bar */}
        <div className="sticky top-[65px] z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-2">
          <div className="max-w-7xl mx-auto px-4 flex items-center space-x-4 overflow-x-auto text-xs no-scrollbar">
            <a href="#overview" className="px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full whitespace-nowrap">Overview</a>
            <a href="#deliverables" className="px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full whitespace-nowrap">Key Deliverables</a>
            <a href="#inquiry" className="px-3 py-1 bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40 rounded-full whitespace-nowrap">1-Click Dispatch</a>
          </div>
        </div>

        <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full space-y-16 relative z-10">
          {/* Hero Header Section */}
          <motion.div 
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center max-w-4xl mx-auto"
          >
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded-full uppercase tracking-wider">
              {service.name} — Thane, Mumbai &amp; MMR
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300">
              {pageH1}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {subService.description}
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <div id="deliverables" className="space-y-6">
            <h2 className="text-xl font-bold text-white text-center">Core Engineering &amp; Execution Deliverables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subService.features && subService.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition group"
                >
                  <div className="text-cyan-400 text-lg font-extrabold font-mono group-hover:scale-110 transition-transform">✓ 0{idx + 1}</div>
                  <h3 className="text-sm font-bold text-white">{feature}</h3>
                  <p className="text-xs text-slate-400">Directly supervised by Founder &amp; CTO Yasar Intakhab Khan.</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dual 1-Click WhatsApp & Gmail Inquiry Dispatch Box */}
          <motion.div 
            id="inquiry"
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl text-center sm:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-xl sm:text-3xl font-extrabold text-white">Ready to deploy {pageH1}?</h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
              Skip boring multi-step forms. Connect directly with Founder &amp; CTO Yasar Intakhab Khan for an instant strategy session.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              {/* 1-Click WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 transition transform hover:scale-105 text-xs uppercase tracking-wider"
              >
                <span className="text-lg">💬</span> Direct WhatsApp Inquiry
              </a>

              {/* 1-Click Direct Email Dispatch */}
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/20 transition transform hover:scale-105 text-xs uppercase tracking-wider"
              >
                <span className="text-lg">✉️</span> Send Direct Gmail Request
              </a>

              <a
                href="https://allworkss.space"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 font-bold rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                Explore ABIS SaaS ↗
              </a>
            </div>
          </motion.div>
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
