import React, { useState } from 'react';
import { Database, ShieldCheck, Layers, TrendingUp, FileText, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PipelineBeamVisualizer() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: 1,
      name: 'Data Ingest',
      short: 'MCA & GST Sync',
      icon: Database,
      status: 'Live API Feed',
      metric: '100% Real-Time Parsing',
      desc: 'Ingests official MCA records, 15-digit GSTIN formats, bank statements, and multi-channel inventory logs.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      name: 'GST & Compliance Audit',
      short: 'Isolation Forest AI',
      icon: ShieldCheck,
      status: '0.04s Anomaly Scan',
      metric: '0 False Positives',
      desc: 'Executes automated GST reconciliation and detects filing discrepancy anomalies using machine learning.',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 3,
      name: 'Inventory & Supply Sync',
      short: 'Deadstock Recovery',
      icon: Layers,
      status: 'Multi-Marketplace',
      metric: '65% Loss Recovery',
      desc: 'Synchronizes stock levels across Shopify, Amazon, and ERP backends to stop overstock capital drag.',
      color: 'from-blue-600 to-indigo-500'
    },
    {
      id: 4,
      name: 'Financial Growth Model',
      short: 'Margin Optimization',
      icon: TrendingUp,
      status: '4.5% Profit Surge',
      metric: 'Automated Cashflow',
      desc: 'Generates predictive P&L projections, tax structuring strategies, and working capital optimization.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 5,
      name: 'Report & Deck Delivery',
      short: 'PDF & PPTX Engine',
      icon: FileText,
      status: 'Instant Download',
      metric: '8-Page PDF + 12-Slide Deck',
      desc: 'Builds enterprise 8-page Deloitte/EY style PDF reports and 12-slide dark-themed boardroom PPTX decks.',
      color: 'from-purple-500 to-emerald-400'
    }
  ];

  const current = nodes[activeNode];
  const CurrentIcon = current.icon;

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> ABIS Automated Pipeline Graph
          </div>
          <h3 className="font-heading text-xl font-bold text-white tracking-tight">
            5-Stage AI Intelligence &amp; Report Beam Visualizer
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Zero-Latency Execution Pipeline
        </div>
      </div>

      {/* Node Graph Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10">
        {nodes.map((node, idx) => {
          const NodeIcon = node.icon;
          const isActive = activeNode === idx;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(idx)}
              onMouseEnter={() => setActiveNode(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between space-y-3 group ${
                isActive
                  ? 'bg-slate-950 border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-105 z-20'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold transition ${
                  isActive ? 'bg-gradient-to-br ' + node.color + ' text-white shadow' : 'bg-slate-900 text-slate-400 group-hover:text-cyan-400'
                }`}>
                  <NodeIcon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                  0{node.id}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white tracking-tight">{node.name}</h4>
                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{node.short}</span>
              </div>

              {/* Status Bar */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span className="truncate">{node.status}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Animated Electric Beam Connector Bar */}
      <div className="relative h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 transition-all duration-500 rounded-full"
          style={{ width: `${((activeNode + 1) / nodes.length) * 100}%` }}
        />
      </div>

      {/* Node Detail Preview Box */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${current.color} flex items-center justify-center text-white font-bold shrink-0`}>
              <CurrentIcon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{current.name}</h4>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold">{current.metric}</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shrink-0">
            {current.status}
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          {current.desc}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <a
          href="https://allworkss.space"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          <span>Launch ABIS Platform</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </a>

        <a
          href="https://wa.me/919967376681?text=Hello%20Yasar%20Sir,%20I%20tested%20the%20ABIS%205-Stage%20Pipeline%20Visualizer%20on%20AllWorkss.in%20and%20want%20to%20schedule%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1 uppercase tracking-wider"
        >
          <span>Consult CTO Yasar Khan</span>
        </a>
      </div>
    </div>
  );
}
