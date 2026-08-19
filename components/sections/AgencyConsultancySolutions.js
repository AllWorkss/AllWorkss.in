import React, { useState } from 'react';
import Link from 'next/link';
import { Rocket, MapPin, Cloud, Filter, Smartphone, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import LeadCaptureModal from '../interactive/LeadCaptureModal';

export default function AgencyConsultancySolutions() {
  const [activeTab, setActiveTab] = useState('marketing');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const openLeadModal = (title, service) => {
    setModalTitle(title);
    setSelectedService(service);
    setModalOpen(true);
  };

  const createWhatsappUrl = (title) => {
    return `https://wa.me/919967376681?text=${encodeURIComponent(
      `Hello Yasar Sir, I would like to schedule a strategic consultation for: ${title}.`
    )}`;
  };

  const tabs = [
    { id: 'marketing', label: '360° Digital Marketing', icon: Rocket },
    { id: 'google', label: 'Google Local Map Dominance', icon: MapPin },
    { id: 'cloud', label: 'Web & Cloud DevOps', icon: Cloud },
    { id: 'funnels', label: 'Conversion Funnel Engineering', icon: Filter },
    { id: 'software', label: 'Software & Mobile Apps', icon: Smartphone },
  ];

  return (
    <section id="agency-solutions" className="py-24 bg-[#080D1A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-blue/15 via-brand-cyan/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum Growth &amp; Tech Engineering
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Agency &amp; Enterprise <span className="text-gradient-cyan">Consultancy Solutions</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            High-performance marketing, serverless cloud DevOps, lead conversion funnels, and mobile application engineering engineered to scale your revenue.
          </p>
        </div>

        {/* Mega-Tabs Controls */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-heading font-bold shadow-2xl overflow-x-auto max-w-full no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: 360° DIGITAL MARKETING */}
        {activeTab === 'marketing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Advanced Technical &amp; Programmatic SEO
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Core Web Vitals optimization, JSON-LD Schema markup, SSR indexation, high-intent keyword clustering, and white-hat PR backlink acquisition.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Core Web Vitals 95+ Score Audit</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Rich Snippets &amp; Schema Markup</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> White-Hat PR Backlink Syndication</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Advanced Technical & Programmatic SEO")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/digital-marketing/advanced-seo"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Meta Ads Mastery &amp; CAPI Server Tracking
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Full-funnel Meta ad campaign architecture (TOF cold acquisition, MOF engagement, BOF retargeting) with CAPI server-side tracking and 100% pixel deduplication.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Meta CAPI Server-Side Tracking</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> High-ROAS Lookalike Audiences</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> A/B UGC &amp; Motion Creative Testing</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Meta Ads Mastery & CAPI Server Tracking")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/digital-marketing/meta-paid-ads"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Omnichannel Content &amp; Drip Email
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Viral short-form video scripting (Shorts, Reels, TikTok), B2B thought leadership whitepapers, and automated email marketing drip workflows.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Viral Short-Form Video Scripting</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> B2B Technical Whitepapers</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Automated Email Drip Sequences</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Omnichannel Content & Drip Email")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/digital-marketing/omnichannel-content"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: GOOGLE LOCAL MAP DOMINANCE */}
        {activeTab === 'google' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Google Business Profile (GBP) 360°
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Dominate local map-pack #1 rankings through strict NAP consistency, geotagged media uploads, category stacking, and citation building.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> #1 Local Map-Pack Ranking</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Geotagged Media &amp; Photos</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Category Stacking &amp; Citations</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Google Business Profile 360")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/google-ecosystem/gbp-360"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Review Velocity &amp; Sentiment AI
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Automate positive review collection from happy clients while using AI auto-responders for instant, SEO-optimized sentiment handling.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Automated Review Requests</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Sentiment-Driven AI Auto-Replies</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Reputation Crisis Shielding</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Review Velocity & Sentiment AI")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/google-ecosystem/review-velocity-ai"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Google Local Service Ads (LSA)
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Pay-per-lead Google Local Service Ads (LSA) and high-intent PPC search campaigns engineered for maximum inbound phone call volume.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Pay-Per-Lead Google LSA</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> High-Intent Search Bidding</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Call Tracking &amp; Attribution</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Google Local Service Ads")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/google-ecosystem/google-lsa"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: WEB & CLOUD DEVOPS */}
        {activeTab === 'cloud' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Headless WP &amp; FastAPI Backends
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Ultra-fast decoupled web architectures combining GraphQL, Headless WP CMS, Python FastAPI microservices, and React/Next.js frontends.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Headless WP + Next.js Frontend</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Python FastAPI Microservices</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Zero-Downtime Database Migration</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Headless WP & FastAPI Backends")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/web-engineering-cloud/custom-web-architectures"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  DNS, SSL &amp; Cloudflare Edge CDN
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Complete DNS management, SSL hardening, DDoS mitigation, and global edge caching via Cloudflare Enterprise setups.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> DNS Portfolio Management</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> SSL/TLS Hardening &amp; DNSSEC</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Cloudflare Edge CDN Caching</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("DNS, SSL & Cloudflare Edge CDN")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/web-engineering-cloud/domain-dns-cdn"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Multi-Cloud DevOps &amp; Containerization
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Automated container deployments on Google Cloud Run, AWS ECS/Lambda, and Docker with zero-trust security and sub-second autoscaling.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Google Cloud Run Deployments</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> AWS Lambda &amp; Docker Containerization</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> 99.99% Uptime Monitoring</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Multi-Cloud DevOps & Containerization")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/web-engineering-cloud/cloud-run-devops"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: CONVERSION FUNNEL ENGINEERING */}
        {activeTab === 'funnels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
            
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-sm">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Conversion Funnel &amp; Lead Magnet Architecture
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  End-to-end design of high-converting lead magnet funnels, VSL (Video Sales Letter) pages, and dynamic 1-click upsell checkouts.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> VSL &amp; Lead Magnet Landing Pages</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Dynamic 1-Click Upsell Checkout</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Automated Calendar Call Qualification</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Conversion Funnel & Lead Magnet Architecture")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/business-funnels/funnel-engineering"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  SOP Design &amp; Enterprise CRM Automation
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Standard Operating Procedure (SOP) documentation integrated with HubSpot/Zoho CRM, Make.com, and Zapier webhook automation.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Standard Operating Procedure (SOP) Design</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> HubSpot &amp; Zoho CRM Pipeline Setup</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Make.com &amp; Zapier Webhook Automation</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("SOP Design & Enterprise CRM Automation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/business-funnels/sop-crm-automation"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: SOFTWARE & MOBILE APP DEV */}
        {activeTab === 'software' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
            
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Native &amp; Cross-Platform Mobile Apps
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  High-performance iOS (Swift) and Android (Kotlin/Java) apps or cross-platform React Native &amp; Flutter frameworks with offline caching and Razorpay/Stripe integration.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> iOS Swift &amp; Android Kotlin Native</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> React Native &amp; Flutter Frameworks</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Offline SQLite Caching &amp; Push Alerts</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Native & Cross-Platform Mobile Apps")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/software-mobile-dev/mobile-app-development"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  Custom Enterprise Microservices &amp; APIs
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Scalable microservice architectures, gRPC/REST API gateways, cross-platform desktop applications (Electron/Tauri), and database engines.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> High-Throughput REST &amp; gRPC APIs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Cross-Platform Desktop (Tauri/Electron)</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✔</span> Multi-Tenant Database Engines</li>
                </ul>
              </div>

              {/* DUAL ACTION BUTTON BAR */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={createWhatsappUrl("Custom Enterprise Microservices & APIs")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1.5"
                >
                  <span>📅</span> Schedule Consult
                </a>
                <Link
                  href="/services/software-mobile-dev/enterprise-software-engineering"
                  className="w-full sm:flex-1 py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1"
                >
                  See More <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Global Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTitle={modalTitle}
        defaultService={selectedService}
      />
    </section>
  );
}
