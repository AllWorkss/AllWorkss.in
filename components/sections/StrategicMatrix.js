import React from 'react';
import { ShieldCheck, Zap, Sparkles, TrendingUp, ShoppingBag, Building2, CheckCircle2 } from 'lucide-react';

export default function StrategicMatrix() {
  const pillars = [
    {
      icon: Building2,
      title: 'Versatility',
      desc: 'End-to-end multi-industry coverage spanning technical SAP consultancy, custom AI software, and retail merchandise supply.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'Native adoption of Large Language Models (Gemini RAG), custom Machine Learning engines (XGBoost/Prophet), and Cloud Run infrastructure.'
    },
    {
      icon: Sparkles,
      title: 'Branding Excellence',
      desc: 'Premium visual identity design, custom packaging assets, high-conversion UI/UX, and data-backed digital marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Strategy',
      desc: 'Deep data analysis, real-time interactive business visualization, and predictive AI financial reporting.'
    },
    {
      icon: ShoppingBag,
      title: 'Consumer Focus',
      desc: 'Dynamic retail and wholesale supply lines engineered for rapid scaling, high quality, and customer satisfaction.'
    },
    {
      icon: ShieldCheck,
      title: 'B2B Services',
      desc: 'Tailored operational, technical, and strategic acceleration for business clients, medical clinics, and enterprise clients.'
    }
  ];

  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" /> Strategic Differentiation Matrix
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Sets <span className="text-gradient-cyan">YARSA ALLWORKSS</span> Apart
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered for direct, expert-led execution replacing bloated consulting firms—bridging raw data, legacy SAP ERP frameworks, and artificial intelligence.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
