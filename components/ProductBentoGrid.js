import React, { useState } from 'react';
import { 
  FileSpreadsheet, Stethoscope, Bot, TrendingUp, Smartphone, Terminal, 
  ArrowUpRight, CheckCircle2, Zap, ShieldCheck, Database, FileText, Send, Lock
} from 'lucide-react';

export default function ProductBentoGrid() {
  const [selectedTooth, setSelectedTooth] = useState(14);
  const [grifCommand, setGrifCommand] = useState("Email bhej client@company.com with project proposal PDF");

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-[#080D1A]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-brand-cyan" />
            Proprietary SaaS & Software Products
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The <span className="text-gradient-cyan">AllWorkss Enterprise</span> Ecosystem
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Battle-tested, production-grade SaaS platforms, financial costing engines, EMR suites, and algorithmic trading tools built with modern Next.js and Python architectures.
          </p>
        </div>

        {/* Bento Grid Layout (Multi-column responsive grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1: CostFlow (Large Featured Card - Spans 2 cols on lg) */}
          <div className="lg:col-span-2 glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden border border-slate-800">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-blue/15 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan shadow-cyan-glow">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  Live Production SaaS
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                  CostFlow (CSF Costing)
                </h3>
                <p className="text-brand-cyan text-xs font-semibold tracking-wide uppercase mt-0.5">
                  Universal Multi-Industry AI/ML Powered Costing Platform
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Production-grade costing sheet generator dynamically adapting to Manufacturing, Education, Retail, D2C, and Construction domains. Exports downloadable <code>.xlsx</code> spreadsheets with real formula cells, interactive node modeling, and AI anomaly detection.
              </p>

              {/* Presets & Feature Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Manufacturing', 'Education', 'Retail', 'D2C/E-Com', 'Construction'].map((preset) => (
                  <span key={preset} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
                    Preset: {preset}
                  </span>
                ))}
              </div>

              {/* Interactive Formula Mockup Widget */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
                  <span>Excel Cell Formula Engine</span>
                  <span className="text-emerald-400 font-bold">100% Native Formula Output</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Raw Mat + Scrap %</div>
                    <div className="text-white font-bold text-xs mt-1">=A1*(1+B1)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Shift Labor Rate</div>
                    <div className="text-emerald-400 font-bold text-xs mt-1">=SUM(C1:C8)*D1</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-cyan/40">
                    <div className="text-[10px] text-brand-cyan font-bold">AI Price Recommender</div>
                    <div className="text-brand-cyan font-bold text-xs mt-1">₹1,840.50 / Unit</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 mt-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Next.js 14</span> • <span>React Flow</span> • <span>ExcelJS</span> • <span>Zustand</span>
              </div>
              <a 
                href="https://github.com/AllWorkss/CostFlow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-white transition-colors"
              >
                View Repository <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CARD 2: SmartParchi (OPD & EMR Suite) */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                  &lt; 5s Token Speed
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  SmartParchi (स्मार्टपर्ची)
                </h3>
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  OPD & Loose Dispensary EMR
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Ultra-fast Electronic Medical Record software for single-doctor clinics & polyclinics. Features sub-5s daily token generation, loose tablet "pudiya" calculator, and split Udhar/Khata debt ledger.
              </p>

              {/* Interactive Dental SVG Canvas Mockup */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Specialty Dental 32-Teeth Canvas</span>
                  <span className="text-brand-cyan font-mono font-bold">Tooth #{selectedTooth} Selected</span>
                </div>
                {/* SVG 32 Teeth representation */}
                <div className="flex items-center justify-between gap-1 py-2">
                  {[11, 12, 13, 14, 15, 16, 17, 18].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTooth(t)}
                      className={`w-6 h-7 rounded-md text-[10px] font-mono font-bold transition-all ${
                        selectedTooth === t 
                          ? 'bg-brand-cyan text-slate-950 scale-110 shadow-cyan-glow' 
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1">
                  <span>Pudiya Calculator: 9 Tab (Paracetamol)</span>
                  <span className="text-emerald-400">Inventory Sync</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 mt-6 text-xs">
              <span className="text-slate-400 font-mono">Next.js • SVG Canvas • WhatsApp</span>
              <a 
                href="https://github.com/AllWorkss/smartparchi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-cyan font-bold hover:text-white flex items-center gap-1"
              >
                Repo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 3: GRIF Executive AI */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                  29+ PC Tools
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  GRIF — Personal AI Executive
                </h3>
                <p className="text-purple-300 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Telegram Bot & PC Command Center
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Operates via Telegram in Hinglish, Hindi, and English. Executes voice note OCR, PDF analysis, SMTP email dispatch, WhatsApp messaging, and multi-PC remote agent automation.
              </p>

              {/* Telegram Simulator Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-purple-300">
                    <Send className="w-3 h-3" /> @GRIF_Executive_Bot
                  </span>
                  <span className="text-emerald-400">Gemini 1.5 Pro RAG</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/90 text-[11px] text-slate-200 font-mono">
                  &quot;Haa Sir, Email dispatch ho gaya aur WhatsApp reminder ready hai.&quot;
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 mt-6 text-xs">
              <span className="text-slate-400 font-mono">Python • Gemini API • Telegram</span>
              <a 
                href="https://github.com/AllWorkss/grif_assistant" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-cyan font-bold hover:text-white flex items-center gap-1"
              >
                Repo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 4: ZenithAlgo Pro Terminal */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-brand-cyan shadow-cyan-glow">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[11px] font-mono">
                  Dad's Safety Guard 1.5%
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  ZenithAlgo Pro Terminal
                </h3>
                <p className="text-brand-cyan text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Algorithmic Trading & Indicator Studio
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Institutional-grade algorithmic trading terminal for Upstox v2 & ICICI Breeze. Features live candlestick canvas, Supertrend, EMA 9/21, RSI sub-charts, and strict 1.5% position risk management.
              </p>

              {/* Signals Badge Grid */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[10px]">
                  <span>Live NIFTY Indicator Signals</span>
                  <span className="text-emerald-400 font-bold">Win Rate: 78.4%</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400 font-bold bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                  <span>EMA (9,21) Cross: BUY ▲</span>
                  <span className="text-white text-[11px]">VWAP: ₹24,480</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 mt-6 text-xs">
              <span className="text-slate-400 font-mono">Python • Upstox v2 • Breeze</span>
              <a 
                href="https://github.com/AllWorkss/zenith_algo_terminal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-cyan font-bold hover:text-white flex items-center gap-1"
              >
                Repo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 5: ABIS Mobile App */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-mono">
                  Android Native Java
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  ABIS Mobile App
                </h3>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Secure Android Gateway for ABIS SaaS
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Native Android WebView wrapper for <code>allworkss.space</code>. Supports Google OAuth, Razorpay web checkout, Android Download Manager for PDFs, and custom offline screens.
              </p>

              {/* Smartphone Viewport Simulation */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span>com.allworkss.abis</span>
                  <span className="text-emerald-400">Min SDK 23 / Target 35</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>Google OAuth 2.0 Direct</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 mt-6 text-xs">
              <span className="text-slate-400 font-mono">Java • Android Studio</span>
              <a 
                href="https://github.com/AllWorkss/ABIs-Mobile-App" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-cyan font-bold hover:text-white flex items-center gap-1"
              >
                Repo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 6: GitHub Brand Engine & Shell Automation */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white shadow-lg">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono">
                  CLI Automation
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  GitHub Brand & Shell Engine
                </h3>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Developer Brand & Contribution Automation
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Automated SVG contribution heatmaps, dynamic bio card rendering, and shell scripts powering the official AllWorkss GitHub profile identity.
              </p>

              {/* CLI Command Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-brand-cyan">$ AllWorkss@github ~ ./contributions.sh</div>
                <div className="text-emerald-400 text-[10px]">&gt; Heatmap SVG generated: 100% Active</div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 mt-6 text-xs">
              <span className="text-slate-400 font-mono">Shell • SVG • Markdown</span>
              <a 
                href="https://github.com/AllWorkss/AllWorkss" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-cyan font-bold hover:text-white flex items-center gap-1"
              >
                Repo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
