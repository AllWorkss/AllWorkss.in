import React, { useState } from 'react';
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
            
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Advanced Technical &amp; Programmatic SEO
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Core Web Vitals optimization, JSON-LD Schema markup, SSR indexation, high-intent keyword clustering, and white-hat PR backlink acquisition.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Core Web Vitals 95+ Score Audit</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Rich Snippets &amp; Schema Markup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> White-Hat PR Backlink Syndication</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Book Technical SEO Audit", "Advanced Technical SEO")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-700 hover:border-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Book SEO Strategy Audit <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Meta Ads Mastery &amp; CAPI Server Tracking
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Full-funnel Meta ad campaign architecture (TOF cold acquisition, MOF engagement, BOF retargeting) with CAPI server-side tracking and 100% pixel deduplication.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Meta CAPI Server-Side Tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-ROAS Lookalike Audiences</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> A/B UGC &amp; Motion Creative Testing</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Launch Meta Paid Ads Campaign", "Meta Ads & CAPI Tracking")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-700 hover:border-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Launch Ad Campaign <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Omnichannel Content &amp; Drip Email
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Viral short-form video scripting (Shorts, Reels, TikTok), B2B thought leadership whitepapers, and automated email marketing drip workflows.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Viral Short-Form Video Scripting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> B2B Technical Whitepapers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated Email Drip Sequences</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Inquire Content & Drip Email", "Omnichannel Content Strategy")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-700 hover:border-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Request Content Strategy <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: GOOGLE LOCAL MAP DOMINANCE */}
        {activeTab === 'google' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Google Business Profile (GBP) 360°
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Dominate local map-pack #1 rankings through strict NAP consistency, geotagged media uploads, category stacking, and citation building.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> #1 Local Map-Pack Ranking</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Geotagged Media &amp; Photos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Category Stacking &amp; Citations</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Optimize Google Profile for #1 Ranking", "Google Business Profile 360")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Claim Local #1 Spot <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Review Velocity &amp; Sentiment AI
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Automate positive review collection from happy clients while using AI auto-responders for instant, SEO-optimized sentiment handling.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated Review Requests</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Sentiment-Driven AI Auto-Replies</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Reputation Crisis Shielding</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Deploy Review Velocity AI Engine", "Review Velocity & Sentiment AI")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Automate Review Velocity <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Google Local Service Ads (LSA)
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Pay-per-lead Google Local Service Ads (LSA) and high-intent PPC search campaigns engineered for maximum inbound phone call volume.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Pay-Per-Lead Google LSA</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-Intent Search Bidding</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Call Tracking &amp; Attribution</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Setup Google LSA Pay-Per-Lead Ads", "Google Local Service Ads")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Launch Google LSA <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 3: WEB & CLOUD DEVOPS */}
        {activeTab === 'cloud' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Headless WP &amp; FastAPI Backends
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Ultra-fast decoupled web architectures combining GraphQL, Headless WP CMS, Python FastAPI microservices, and React/Next.js frontends.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Headless WP + Next.js Frontend</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Python FastAPI Microservices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Zero-Downtime Database Migration</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Deploy Headless Web Architecture", "Headless WP & FastAPI")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-700 hover:border-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Deploy Headless Stack <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  DNS, SSL &amp; Cloudflare Edge CDN
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Complete DNS management, SSL hardening, DDoS mitigation, and global edge caching via Cloudflare Enterprise setups.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> DNS Portfolio Management</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> SSL/TLS Hardening &amp; DNSSEC</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Cloudflare Edge CDN Caching</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Harden DNS & Cloudflare CDN", "DNS & Cloudflare CDN")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-700 hover:border-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Harden DNS &amp; Edge CDN <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Multi-Cloud DevOps &amp; Containerization
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Automated container deployments on Google Cloud Run, AWS ECS/Lambda, and Docker with zero-trust security and sub-second autoscaling.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Google Cloud Run Deployments</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> AWS Lambda &amp; Docker Containerization</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 99.99% Uptime Monitoring</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Deploy Cloud Run & DevOps", "Cloud Run & DevOps")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-700 hover:border-brand-cyan text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Deploy Cloud Container <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 4: CONVERSION FUNNEL ENGINEERING */}
        {activeTab === 'funnels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
            
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Conversion Funnel &amp; Lead Magnet Architecture
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  End-to-end design of high-converting lead magnet funnels, VSL (Video Sales Letter) pages, and dynamic 1-click upsell checkouts.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> VSL &amp; Lead Magnet Landing Pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Dynamic 1-Click Upsell Checkout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated Calendar Call Qualification</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Build High-Ticket Conversion Funnel", "Conversion Funnel Engineering")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-purple-600 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Build Conversion Funnel <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  SOP Design &amp; Enterprise CRM Automation
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Standard Operating Procedure (SOP) documentation integrated with HubSpot/Zoho CRM, Make.com, and Zapier webhook automation.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Standard Operating Procedure (SOP) Design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> HubSpot &amp; Zoho CRM Pipeline Setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Make.com &amp; Zapier Webhook Automation</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Automate SOPs & CRM Workflows", "SOP & CRM Automation")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-purple-600 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Automate SOPs &amp; CRM <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 5: SOFTWARE & MOBILE APP DEV */}
        {activeTab === 'software' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
            
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Native &amp; Cross-Platform Mobile Apps
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  High-performance iOS (Swift) and Android (Kotlin/Java) apps or cross-platform React Native &amp; Flutter frameworks with offline caching and Razorpay/Stripe integration.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> iOS Swift &amp; Android Kotlin Native</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> React Native &amp; Flutter Frameworks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Offline SQLite Caching &amp; Push Alerts</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Request Mobile App Development Quote", "Mobile App Development")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Request Custom App Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Custom Enterprise Microservices &amp; APIs
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Scalable microservice architectures, gRPC/REST API gateways, cross-platform desktop applications (Electron/Tauri), and database engines.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-Throughput REST &amp; gRPC APIs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Cross-Platform Desktop (Tauri/Electron)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Multi-Tenant Database Engines</li>
                </ul>
              </div>
              <button
                onClick={() => openLeadModal("Deploy Custom Enterprise Microservices", "Enterprise Software Engineering")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Build Enterprise Software <ArrowRight className="w-4 h-4" />
              </button>
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
