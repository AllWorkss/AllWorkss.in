import React from 'react';
import { ShieldCheck, Cpu, Code2, Server, Award, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ExecutiveLeadership() {
  const whatsappUrl = "https://wa.me/919967376681?text=Hello%20Yasar%20Intakhab%20Khan%2C%20I%20would%20like%20to%20schedule%20an%20Executive%20Tech%20Consultation.";

  return (
    <section id="leadership" className="py-24 bg-[#050914] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase">
            <Award className="w-3.5 h-3.5" /> Founder &amp; Executive Leadership Track Record
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Architected by Senior <span className="text-gradient-cyan">Engineering &amp; Growth Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Expert-led technical direction replacing non-technical sales reps with direct principal-level architecture and execution.
          </p>
        </div>

        {/* Founder Card Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-950/80 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Avatar & Badges */}
            <div className="lg:col-span-4 space-y-4 text-center">
              <div className="relative w-36 h-36 mx-auto rounded-3xl bg-gradient-to-tr from-brand-blue via-brand-cyan to-emerald-400 p-[2px] shadow-cyan-glow">
                <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center overflow-hidden font-heading font-extrabold text-4xl text-brand-cyan">
                  YIK
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Yasar Intakhab Khan
                </h3>
                <p className="text-brand-cyan font-mono text-xs font-semibold mt-1">
                  Founder &amp; Chief Technology Officer
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  YARSA ALLWORKSS (OPC) PRIVATE LIMITED
                </p>
              </div>

              <div className="pt-2 flex justify-center flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                  ⚡ GCP &amp; AWS Certified
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                  🐍 Python FastAPI Lead
                </span>
              </div>
            </div>

            {/* Founder Credentials & Track Record */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-3">
                <h4 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-cyan" /> Executive Engineering &amp; Growth Track Record
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Full-Stack AI &amp; Cloud Systems Architect behind the <strong>AllWorkss Business Intelligence Suite (ABIS)</strong>. Engineered multi-module enterprise platforms spanning automated financial compliance (GST/MCA), ML demand forecasting, and predictive analytics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand-cyan" /> Cloud &amp; AI Microservices
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Deep technical expertise across Python FastAPI, Cloud Containerization (Google Cloud Run/Docker), REST/gRPC API Gateways, and Gemini RAG search engines.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" /> Performance Marketing Infra
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Meta CAPI server-side tracking, Google Local Service Ads (LSA), automated review velocity engines, and scalable enterprise growth pipelines.
                  </p>
                </div>

              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Server className="w-4 h-4 text-brand-cyan" />
                  <span>Direct Principal Access — Zero Middlemen</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-blue/20 hover:shadow-cyan-glow transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Schedule CTO Consult <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
