import React, { useState } from 'react';
import { Server, Cpu, Database, FileText, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TopologyGraph() {
  const [activeNode, setActiveNode] = useState('sap');

  const nodes = [
    {
      id: 'sap',
      name: 'Legacy SAP ERP Core',
      type: 'Source System',
      protocol: 'RFC / SOAP / ABAP',
      latency: '32ms',
      role: 'Enterprise Master Data, Ledger & Order Processing Core',
      icon: Server,
      status: 'Active'
    },
    {
      id: 'cloud',
      name: 'AWS / GCP Cloud Gateway',
      type: 'Serverless Middleware',
      protocol: 'REST / gRPC / Kafka',
      latency: '14ms',
      role: 'Google Cloud Run Container Microservice Cluster',
      icon: Cpu,
      status: 'Active'
    },
    {
      id: 'ai',
      name: 'Gemini AI & ML Anomaly Engine',
      type: 'AI Intelligence',
      protocol: 'Async HTTP / RAG Vector',
      latency: '180ms',
      role: 'XGBoost Forecasting & Gemini LLM Automated Business Auditor',
      icon: Zap,
      status: 'Active'
    },
    {
      id: 'dashboard',
      name: 'Real-Time GSTIN & BI Dashboard',
      type: 'Executive Frontend',
      protocol: 'WebSocket / HTTPS',
      latency: '8ms',
      role: 'Live GSTIN e-invoicing compliance & automated PDF reporting',
      icon: FileText,
      status: 'Active'
    }
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[0];
  const CurrentIcon = currentNode.icon;

  return (
    <section className="py-20 bg-[#050914] relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-semibold uppercase">
            <Zap className="w-3.5 h-3.5" /> Live Enterprise Topology
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            360° AI &amp; <span className="text-gradient-blue">SAP Integration Canvas</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any node in the data pipeline to inspect protocol specs, microservice latency, and architecture roles.
          </p>
        </div>

        {/* Node Pipeline Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
          
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = node.id === activeNode;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                <button
                  onClick={() => setActiveNode(node.id)}
                  className={`w-full glass-panel p-5 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                    isSelected 
                      ? 'border-brand-cyan bg-slate-900 shadow-cyan-glow scale-105' 
                      : 'border-slate-800 hover:border-slate-700 bg-slate-950/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-brand-cyan text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Step {idx + 1}
                    </span>
                  </div>

                  <div className="font-heading font-bold text-sm text-white group-hover:text-brand-cyan transition-colors">
                    {node.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">
                    {node.type}
                  </div>
                </button>

                {/* Arrow Connector for Desktop */}
                {idx < nodes.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-brand-cyan animate-pulse">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Node Glassmorphic Popover Details */}
        <div className="glass-panel p-6 rounded-3xl border border-brand-cyan/30 bg-slate-950/90 max-w-3xl mx-auto space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">{currentNode.name}</h4>
                <span className="text-slate-400 text-[11px]">{currentNode.type}</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              Latency: {currentNode.latency}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-slate-400 text-[11px]">Communication Protocol:</div>
              <div className="text-brand-cyan font-bold mt-0.5">{currentNode.protocol}</div>
            </div>
            <div>
              <div className="text-slate-400 text-[11px]">Architecture Role:</div>
              <div className="text-slate-200 mt-0.5">{currentNode.role}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
