import React from 'react';
import { Activity, Github, ShieldCheck, Zap, Server, RefreshCw } from 'lucide-react';

export default function EcosystemPulse() {
  // Generate fake contribution matrix data (52 weeks x 7 days simulated activity)
  const commitDays = Array.from({ length: 112 }, (_, i) => {
    const level = (i % 7 === 0 || i % 5 === 0) ? 3 : (i % 3 === 0) ? 2 : (i % 2 === 0) ? 1 : 0;
    return level;
  });

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Ecosystem Health &amp; GitHub Pulse
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Live Monitor for AllWorkss/* Repositories
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          🟢 360° AI &amp; Cloud Gateways Operational
        </div>
      </div>

      {/* Latency & Node Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="text-slate-400 text-[10px]">Cloud Run Latency</div>
          <div className="text-emerald-400 font-bold text-sm mt-0.5">14ms (asia-south1)</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="text-slate-400 text-[10px]">Active Microservices</div>
          <div className="text-brand-cyan font-bold text-sm mt-0.5">12 Serverless Nodes</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="text-slate-400 text-[10px]">AI RAG Engine</div>
          <div className="text-purple-300 font-bold text-sm mt-0.5">Gemini 1.5 Pro Sync</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="text-slate-400 text-[10px]">Delivery Success Rate</div>
          <div className="text-emerald-400 font-bold text-sm mt-0.5">100% (50+ Projects)</div>
        </div>
      </div>

      {/* GitHub Contribution Heatmap Simulation */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub Activity Matrix (@AllWorkss)
          </span>
          <span>1,420 Commits Past Year</span>
        </div>

        {/* Heatmap Grid Cells */}
        <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 overflow-x-auto">
          <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[500px]">
            {commitDays.map((lvl, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-xs ${
                  lvl === 3
                    ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50'
                    : lvl === 2
                    ? 'bg-emerald-600'
                    : lvl === 1
                    ? 'bg-emerald-900/80'
                    : 'bg-slate-900'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
