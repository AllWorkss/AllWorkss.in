import React from 'react';
import { Cpu, Server, FileText, CheckCircle2, ArrowUpRight, ShieldCheck, Database, Zap } from 'lucide-react';

export default function ServicesMatrix() {
  const services = [
    {
      icon: Server,
      title: "SAP ERP & Legacy Transformation",
      tag: "Enterprise Core",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description: "Modernizing legacy SAP architectures, ECC/S4HANA data integration, and building high-throughput microservice API bridges for enterprise business units.",
      capabilities: [
        "SAP ECC & S/4HANA Module Consulting & Integration",
        "Legacy Database Migration to Cloud Warehouses",
        "Custom RFC & REST API Middleware Development",
        "Real-Time Enterprise ERP Data Pipeline Sync"
      ]
    },
    {
      icon: Cpu,
      title: "Custom Cloud & Full-Stack AI Pipelines",
      tag: "AI Architecture",
      badgeColor: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30",
      description: "Architecting serverless microservices on Google Cloud Run & AWS, integrating Gemini LLM RAG engines, XGBoost forecasting, and high-concurrency Node/Python services.",
      capabilities: [
        "Google Cloud Run & AWS Serverless Infrastructure",
        "Gemini API & Custom RAG Vector Search Systems",
        "XGBoost & Prophet Machine Learning Pipelines",
        "Docker, Kubernetes & Microservice Orchestration"
      ]
    },
    {
      icon: FileText,
      title: "Compliance & BI Automation Engine",
      tag: "Financial Tech",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description: "Automated business auditor & compliance suite. Delivers GSTIN e-invoicing reconciliations, multi-ledger Khata balances, supply chain analytics, and live KPI dashboards.",
      capabilities: [
        "Automated GSTIN Reporting & Reconciliations",
        "Multi-Ledger Khata & Split Debt Audit Engine",
        "Inventory Demand Forecasting & Supply Intelligence",
        "Live Executive Dashboards & Automated PDF Dispatch"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#050914] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            High-Ticket Enterprise Services
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SAP ERP & <span className="text-gradient-blue">Cloud AI Architecture</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging complex enterprise legacy systems with modern serverless cloud infrastructure, AI models, and real-time compliance automation.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative group"
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-brand-cyan shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-mono font-semibold ${srv.badgeColor}`}>
                      {srv.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mt-2">
                      {srv.description}
                    </p>
                  </div>

                  {/* Capability List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Core Deliverables:
                    </span>
                    {srv.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800/80">
                  <a
                    href="https://wa.me/919967376681?text=Hello%20AllWorkss%20Team%2C%20I%20would%20like%20to%20consult%20regarding%20your%20Enterprise%20SAP%20%26%20Cloud%20AI%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue border border-slate-800 hover:border-brand-blue text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    Consult Strategy
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
