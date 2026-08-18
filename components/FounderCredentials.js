import React from 'react';
import { Award, ShieldCheck, CheckCircle2, MapPin, Clock, Building2, UserCheck, Briefcase } from 'lucide-react';

export default function FounderCredentials() {
  const metrics = [
    { label: "Projects Delivered", value: "50+", sub: "Production Implementations" },
    { label: "Implementation Success", value: "100%", sub: "Zero-Downtime Guarantee" },
    { label: "Technical Leadership", value: "15+ Yrs", sub: "Cumulative Domain Mastery" },
    { label: "Cloud Certifications", value: "AWS / GCP", sub: "Certified Cloud Architect" },
  ];

  return (
    <section id="credentials" className="py-24 bg-[#080D1A] relative overflow-hidden">
      {/* Background Backlit Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-brand-cyan" />
            Proof of Execution & Leadership
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Founder Leadership & <span className="text-gradient-cyan">Corporate Trust</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Led by senior software architects and data scientists committed to technical rigor, absolute transparency, and enterprise success.
          </p>
        </div>

        {/* Quantifiable Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white text-gradient-cyan">
                {m.value}
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main 2-Column Section: Founder Profile & Corporate Transparency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Founder Profile Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
                {/* Founder Avatar Placeholder / Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-blue via-brand-cyan to-indigo-500 p-[2px] shadow-cyan-glow shrink-0">
                  <div className="w-full h-full bg-[#0B132B] rounded-[14px] flex items-center justify-center text-brand-cyan font-heading font-black text-2xl">
                    YK
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Yasar Intakhab Khan
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                      Founder & Lead Architect
                    </span>
                  </div>
                  <p className="text-brand-cyan text-xs font-mono font-semibold">
                    Full Stack Developer • Data Scientist • Cloud Architect
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    M.Sc. Data Science & Information Technology
                  </p>
                </div>
              </div>

              {/* Bio & Leadership philosophy */}
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Specializing in complex enterprise transformations, AI/ML costing engines, and high-performance cloud architectures. With a deep background in advanced data science, predictive financial modeling, and cloud systems, Yasar leads AllWorkss with a focus on code quality, scalability, and measurable business ROI.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>AWS Certified Cloud Architecture & Security</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>End-to-End Enterprise SAP & Web ERP Execution</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Primary Tech: Next.js 14, Python, FastAPI, Gemini API, Cloud Run</span>
            </div>
          </div>

          {/* Right: Corporate Transparency Box (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between relative bg-slate-950/60">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Corporate Entity Information
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Registered Indian Private Limited
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-slate-400 font-mono text-[11px]">Legal Entity Name</div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    YARSA ALLWORKSS (OPC) PRIVATE LIMITED
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan" /> Registered Corporate Address
                  </div>
                  <div className="text-slate-300 leading-relaxed mt-1">
                    The Universe, Kalsekar College, Thane, Maharashtra, 400612, India
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> Operational Support Hours
                  </div>
                  <div className="text-slate-300 font-semibold mt-1">
                    Monday – Sunday: 9:00 AM – 5:00 PM IST
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-slate-400 font-mono text-[11px]">Direct Support Line</div>
                  <div className="text-brand-cyan font-mono font-bold text-sm mt-0.5">
                    +91 99673 76681 / +91 90042 46792
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 text-center">
              <span className="text-[11px] text-slate-400 font-mono">
                100% Tax Compliant & Registered OPC Private Limited
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
