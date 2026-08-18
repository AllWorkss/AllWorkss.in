import React, { useState } from 'react';
import { Cpu, ShoppingBag, CheckCircle2, Zap, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';

export default function DualBrandEcosystem() {
  const [activeBrand, setActiveBrand] = useState('allworkss');

  return (
    <section className="py-24 bg-[#080D1A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase">
            <Building2 className="w-3.5 h-3.5" /> Corporate Entity &amp; Dual-Brand Architecture
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Parent Company: <span className="text-gradient-cyan">YARSA ALLWORKSS</span> (OPC) PVT LTD
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Operating two high-impact corporate divisions spanning Enterprise Technology/Consultancy and Consumer Lifestyle/B2B Wholesale Supply.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-brand-cyan/40 text-brand-cyan text-xs font-mono font-bold">
              GSTIN: 277AABCY875P1Z9
            </span>
          </div>
        </div>

        {/* Dual-Brand Toggle Controls */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-heading font-bold shadow-2xl">
            <button
              onClick={() => setActiveBrand('allworkss')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeBrand === 'allworkss'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              Brand A: AllWorkss (Tech &amp; AI)
            </button>

            <button
              onClick={() => setActiveBrand('yarsa')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeBrand === 'yarsa'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Brand B: YARSA STORE (Retail &amp; B2B)
            </button>
          </div>
        </div>

        {/* BRAND A DISPLAY: AllWorkss */}
        {activeBrand === 'allworkss' && (
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
                  Technology, AI &amp; SAP ERP Consultancy
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  AllWorkss Digital Solutions
                </h3>
                <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                  High-performance digital solutions, SAP ERP consulting, and cloud AI architecture built to power enterprise transformation.
                </p>
              </div>
              <a
                href="https://wa.me/919967376681?text=Hello%20AllWorkss%20Tech%20Team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-cobalt text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Inquire Tech Services <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Offerings Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-cyan" /> Digital &amp; AI Engineering
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Custom Web &amp; Software Development</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 360° AI &amp; Machine Learning Engines</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google Cloud &amp; AWS Infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Customer Database &amp; EMR Suites</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-cyan" /> Strategic Analytics
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Business Visualization Reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Predictive Financial Data Analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> GSTIN &amp; Compliance Automation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Multi-Ledger Split Khata Reconciliation</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-cyan" /> Brand &amp; Visual Assets
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Premium Logo &amp; Identity Design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Promotional Banners &amp; Posters</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Visiting Cards &amp; Custom Hang Tags</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Digital Marketing &amp; Outbound Campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* BRAND B DISPLAY: YARSA STORE */}
        {activeBrand === 'yarsa' && (
          <div className="glass-panel rounded-3xl p-8 border border-amber-500/30 bg-slate-950/90 space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Consumer Lifestyle &amp; B2B Wholesale Supply
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  YARSA STORE
                </h3>
                <p className="text-amber-300 font-heading italic text-sm mt-0.5">
                  &quot;Where Style, Service &amp; Scale Unite&quot;
                </p>
              </div>
              <a
                href="https://wa.me/919967376681?text=Hello%20YARSA%20STORE%20Team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Inquire Wholesale <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-amber-400" /> Consumer Retail Verticals
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Fashion accessories, lifestyle merchandise, stationery, school pouches, men&apos;s jewelry, trending gift items, and everyday essentials.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" /> B2B Enterprise &amp; Wholesale Solutions
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Bulk wholesale supply, custom corporate branding, white-label packaging, global product sourcing, and end-to-end retail business support.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
