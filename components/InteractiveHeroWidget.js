import React, { useState } from 'react';
import { Cpu, FileSpreadsheet, TrendingUp, Zap, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function InteractiveHeroWidget() {
  const [activeTab, setActiveTab] = useState('cloud');

  return (
    <div className="w-full glass-panel rounded-2xl p-4 sm:p-6 border border-slate-700/60 shadow-2xl relative overflow-hidden group">
      {/* Background Backlit Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-blue/30 transition-all duration-700"></div>

      {/* Header & Tabs Selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">
            allworkss-preview-terminal v2.4
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800/80 text-xs w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('cloud')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'cloud'
                ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            Cloud Arch
          </button>

          <button
            onClick={() => setActiveTab('costflow')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'costflow'
                ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            AI Costing Flow
          </button>

          <button
            onClick={() => setActiveTab('algo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'algo'
                ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Algo Signals
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="pt-4 min-h-[300px] flex flex-col justify-between">
        
        {/* TAB 1: Live Cloud Architecture */}
        {activeTab === 'cloud' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                GCP Cloud Run (asia-south1)
              </span>
              <span>Latency: 14ms</span>
            </div>

            {/* Architecture Node Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 font-mono">Gateway API</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-blue/20 text-brand-cyan">FastAPI</span>
                </div>
                <div className="text-[11px] text-slate-400">OAuth 2.0 Auth + Rate Limiting</div>
                <div className="text-[10px] text-emerald-400 font-mono">Status: 200 OK</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-brand-cyan/40 shadow-cyan-glow flex flex-col justify-between space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-cyan font-mono">Gemini AI Engine</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan">LLM RAG</span>
                </div>
                <div className="text-[11px] text-slate-300">Automated Audit & Supply Forecasting</div>
                <div className="text-[10px] text-brand-cyan font-mono">Latency: 180ms</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 font-mono">PostgreSQL / Redis</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Encrypted</span>
                </div>
                <div className="text-[11px] text-slate-400">ACID Multi-Tenant Store</div>
                <div className="text-[10px] text-emerald-400 font-mono">Replica Active</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">&gt; gcloud run deploy --region=asia-south1 --min-instances=1</span>
              <span className="text-emerald-400 font-bold">READY</span>
            </div>
          </div>
        )}

        {/* TAB 2: AI Costing Flow */}
        {activeTab === 'costflow' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-brand-cyan font-bold">CostFlow Engine (CSF Costing)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                .XLSX Live Formula Enabled
              </span>
            </div>

            {/* Costing Node Block Mockup */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="text-slate-300 font-semibold">Manufacturing Preset Block</span>
                <span className="font-mono text-brand-cyan font-bold">=SUM(A1:A5)*(1+B1)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded bg-slate-800/60">
                  <div className="text-[10px] text-slate-400">Raw Material</div>
                  <div className="font-mono text-white font-bold">₹1,450 / Kg</div>
                </div>
                <div className="p-2 rounded bg-slate-800/60">
                  <div className="text-[10px] text-slate-400">Scrap %</div>
                  <div className="font-mono text-emerald-400 font-bold">3.5% Recaptured</div>
                </div>
                <div className="p-2 rounded bg-slate-800/60">
                  <div className="text-[10px] text-slate-400">Machine Wear</div>
                  <div className="font-mono text-white font-bold">₹85 / Hr</div>
                </div>
                <div className="p-2 rounded bg-slate-800/60 border border-brand-cyan/40 bg-brand-cyan/5">
                  <div className="text-[10px] text-brand-cyan font-bold">AI Optimal Price</div>
                  <div className="font-mono text-brand-cyan font-bold">₹1,840.50</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800 font-mono">
              <span className="text-amber-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                AI Anomaly Detector: 0 pricing leaks detected
              </span>
              <span className="text-slate-300">5 Presets Ready</span>
            </div>
          </div>
        )}

        {/* TAB 3: Algorithmic Signals */}
        {activeTab === 'algo' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-white font-bold">ZenithAlgo Pro — NIFTY 50 Terminal</span>
              <span className="text-emerald-400 font-bold">Win Rate: 78.4%</span>
            </div>

            {/* Candlestick / Signal Graphic Simulator */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">NIFTY_AUG_FUT</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px]">
                    BUY ▲ 24,480.00
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Upstox API v2 / Breeze</span>
              </div>

              {/* Simulated Candlestick Bar Row */}
              <div className="h-20 flex items-end justify-between gap-1.5 pt-2 px-2 border-b border-slate-800/80">
                <div className="w-3 bg-rose-500/80 h-10 rounded-xs"></div>
                <div className="w-3 bg-emerald-500/80 h-14 rounded-xs"></div>
                <div className="w-3 bg-emerald-500/80 h-16 rounded-xs relative">
                  <span className="absolute -top-5 -left-1 text-[9px] font-bold text-emerald-400">▲BUY</span>
                </div>
                <div className="w-3 bg-emerald-500/90 h-20 rounded-xs"></div>
                <div className="w-3 bg-rose-500/70 h-12 rounded-xs"></div>
                <div className="w-3 bg-emerald-500/90 h-18 rounded-xs"></div>
                <div className="w-3 bg-emerald-500/90 h-22 rounded-xs"></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>EMA (9,21) Cross: BULLISH</span>
                <span className="text-emerald-400">VWAP: Above (+1.2%)</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono flex items-center justify-between">
              <span className="text-rose-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                Dad's Safety Guard: Circuit Breaker Max Risk 1.5% Enabled
              </span>
              <span className="text-slate-400">Auto-Hedge</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
