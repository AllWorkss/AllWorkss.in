import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BusinessHealthQuiz from '../../../components/interactive/BusinessHealthQuiz';
import LiveRoiCalculator from '../../../components/interactive/LiveRoiCalculator';
import SerpPreviewer from '../../../components/interactive/SerpPreviewer';
import { SERVICES_DATA } from '../../../lib/services-data';
import { generateInquiryMessages } from '../../../lib/inquiry-templates';
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ExternalLink,
  Activity,
  BarChart3,
  Server,
  Terminal,
  Award
} from 'lucide-react';

export default function SubServicePage({ service, subService, serviceKey }) {
  if (!service || !subService) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Service Page Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:underline inline-block">Return Home</Link>
        </div>
      </div>
    );
  }

  const pageTitle = subService.title || `${subService.h1 || subService.name} in Thane & Mumbai | AllWorkss`;
  const pageH1 = subService.h1 || subService.name;
  const canonicalUrl = `https://allworkss.in/services/${serviceKey}/${subService.id}`;

  const { whatsappUrl, mailtoUrl } = generateInquiryMessages(serviceKey, subService.id, pageH1);

  // Default Infographic Execution Stages if not explicitly defined
  const executionStages = subService.architectureSteps || [
    {
      step: '01',
      title: 'Discovery & System Audit',
      desc: 'Technical assessment, baseline metric gathering, and architecture blueprinting.',
      output: 'Audit Report & Scope Map',
      icon: Terminal
    },
    {
      step: '02',
      title: 'Core Infrastructure Setup',
      desc: 'Configuring cloud environments, microservices, APIs, and security protocols.',
      output: 'Staging Environment Live',
      icon: Server
    },
    {
      step: '03',
      title: 'High-Performance Execution',
      desc: 'Deploying optimized codebases, ad pipelines, SEO clusters, or CRM workflows.',
      output: 'Production Ready Release',
      icon: Cpu
    },
    {
      step: '04',
      title: 'Continuous Monitoring & SLA Scale',
      desc: 'Real-time telemetry, sub-second latency tuning, and automated growth scaling.',
      output: '24/7 SLA & Growth Dashboard',
      icon: Activity
    }
  ];

  // Default Metrics Infographic if not defined
  const benchmarkMetrics = subService.metrics || [
    { label: 'System Uptime Guarantee', value: '99.99%', change: 'Zero Downtime' },
    { label: 'Average Response Latency', value: '< 150ms', change: 'Sub-second SSR' },
    { label: 'Conversion & Signal Match', value: '100%', change: 'Pixel Deduplicated' },
    { label: 'Executive ROI / Performance', value: '3.5x - 5x', change: 'Enterprise Benchmark' }
  ];

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
          "name": "YARSA ALLWORKSS (OPC) PRIVATE LIMITED",
          "legalName": "YARSA ALLWORKSS (OPC) PRIVATE LIMITED",
          "vatID": "277AABCY875P1Z9",
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
        <meta name="keywords" content={`${subService.name}, ${service.name}, Thane SEO, Mumbai Digital Agency, Yasar Intakhab Khan, AllWorkss`} />
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
        <meta property="og:site_name" content="AllWorkss Digital Solutions" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <div className="min-h-screen bg-[#080D1A] text-white font-sans flex flex-col relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
        {/* Ambient Radial Background Glow Beams */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        
        <Navbar />

        {/* Breadcrumb Navigation Bar */}
        <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 py-3 text-xs text-slate-400 mt-16">
          <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href={`/services/${serviceKey}`} className="hover:text-white transition">{service.name}</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{subService.name}</span>
          </div>
        </div>

        {/* Anchor Pills Bar */}
        <div className="sticky top-[65px] z-40 bg-[#080D1A]/90 backdrop-blur-xl border-b border-slate-800/80 py-2.5">
          <div className="max-w-7xl mx-auto px-4 flex items-center space-x-3 overflow-x-auto text-xs no-scrollbar">
            <a href="#overview" className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full whitespace-nowrap transition">Overview</a>
            <a href="#deliverables" className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full whitespace-nowrap transition">Core Deliverables</a>
            <a href="#architecture" className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full whitespace-nowrap transition">Architecture &amp; Flow</a>
            <a href="#benchmarks" className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full whitespace-nowrap transition">Performance SLA</a>
            <a href="#inquiry" className="px-3.5 py-1.5 bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40 rounded-full whitespace-nowrap transition flex items-center gap-1">
              <span>📅</span> 1-Click Consult Dispatch
            </a>
          </div>
        </div>

        <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full space-y-20 relative z-10">
          
          {/* SECTION 1: HERO HEADER */}
          <motion.div 
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center max-w-4xl mx-auto pt-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <span>{service.icon || '⚡'}</span>
              <span>{service.name} — Thane, Mumbai &amp; MMR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300">
              {pageH1}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {subService.description}
            </p>

            {/* Quick Hero Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition transform hover:-translate-y-0.5 text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Schedule WhatsApp Consult</span>
              </a>

              <a
                href={mailtoUrl}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold rounded-xl flex items-center justify-center gap-2 transition text-xs uppercase tracking-wider"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Direct Gmail Inquiry</span>
              </a>
            </div>
          </motion.div>

          {/* SECTION 2: CORE ENGINEERING DELIVERABLES */}
          <div id="deliverables" className="space-y-8 pt-4 border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">Execution Scope</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Core Engineering Deliverables</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Directly supervised by Founder &amp; CTO Yasar Intakhab Khan for YARSA ALLWORKSS (OPC) PVT LTD.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subService.features && subService.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 text-sm font-extrabold font-mono group-hover:scale-110 transition-transform">✓ 0{idx + 1}</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">{feature}</h3>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                    <span>Quality Verified</span>
                    <span className="text-emerald-400">100% SLA</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION 3: INFOGRAPHIC ARCHITECTURE & SYSTEM FLOW DIAGRAM */}
          <div id="architecture" className="space-y-8 pt-8 border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">System Topology</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Execution Architecture &amp; Workflow Pipeline</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Structured 4-stage deployment model ensuring seamless compliance, high throughput, and maximum ROI.</p>
            </div>

            {/* Interactive Infographic Stage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {executionStages.map((stage, idx) => {
                const StageIcon = stage.icon || Layers;
                return (
                  <div 
                    key={idx}
                    className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-4 relative flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Step Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 font-bold">
                          <StageIcon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black font-mono text-slate-700">STAGE {stage.step}</span>
                      </div>

                      <div>
                        <h3 className="font-heading text-base font-bold text-white">{stage.title}</h3>
                        <p className="text-slate-300 text-xs leading-relaxed mt-2">{stage.desc}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Key Deliverable Output:</span>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{stage.output}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: PERFORMANCE BENCHMARKS INFOGRAPHIC GRID */}
          <div id="benchmarks" className="space-y-8 pt-8 border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">Quality Assurance</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Performance Metrics &amp; Benchmark SLA</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benchmarkMetrics.map((m, idx) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center space-y-2 hover:border-cyan-500/40 transition">
                  <span className="text-xs text-slate-400 font-mono font-semibold block">{m.label}</span>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-heading">
                    {m.value}
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                    {m.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4.5: INTERACTIVE DIAGNOSTIC & ROI SUITE */}
          <div id="interactive-tools" className="space-y-8 pt-8 border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">Client Interactive Suite</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Live Diagnostic &amp; Capital Calculator</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Estimate unlocked capital and diagnose system anomalies in real time.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <LiveRoiCalculator />
              <BusinessHealthQuiz />
            </div>
          </div>

          {/* SECTION 5: FOUNDER LEADERSHIP SEAL */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-black shadow-xl shrink-0">
                YK
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono">
                  <Award className="w-3.5 h-3.5" /> Direct Executive Supervision
                </div>
                <h3 className="text-xl font-extrabold text-white">Yasar Intakhab Khan</h3>
                <p className="text-xs text-slate-400 font-mono">Founder &amp; CTO — YARSA ALLWORKSS (OPC) PRIVATE LIMITED</p>
                <p className="text-slate-300 text-xs leading-relaxed max-w-xl pt-1">
                  AWS Certified Architect specializing in SAP ERP Consulting, Cloud Run Serverless, FastAPIs, Meta CAPI Signal Deduplication, and B2B Intelligence.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition text-xs uppercase tracking-wider shrink-0"
            >
              <span>💬</span> Direct WhatsApp Call
            </a>
          </div>

          {/* SECTION 6: DUAL 1-CLICK INQUIRY DISPATCH BOX */}
          <motion.div 
            id="inquiry"
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-slate-900 via-blue-950/50 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-cyan-500/40 shadow-2xl text-center sm:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3">
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded-full uppercase tracking-wider">
                Instant Onboarding
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Ready to deploy {pageH1}?</h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Skip boring multi-step forms. Connect directly with Founder &amp; CTO Yasar Intakhab Khan for an instant strategy session and project blueprinting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              {/* 1-Click WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 transition transform hover:scale-105 text-xs uppercase tracking-wider"
              >
                <span className="text-lg">💬</span> Direct WhatsApp Inquiry
              </a>

              {/* 1-Click Direct Email Dispatch */}
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/20 transition transform hover:scale-105 text-xs uppercase tracking-wider"
              >
                <span className="text-lg">✉️</span> Send Direct Gmail Request
              </a>

              <a
                href="https://allworkss.space"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 font-bold rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                Explore ABIS SaaS <ExternalLink className="w-4 h-4" />
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
        description: category.description,
        tagline: category.tagline
      },
      subService: subService,
      serviceKey: key
    }
  };
}
