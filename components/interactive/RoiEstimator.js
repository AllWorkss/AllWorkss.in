import React, { useState } from 'react';
import { Calculator, MessageSquare, PhoneCall, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

export default function RoiEstimator() {
  const [industry, setIndustry] = useState('manufacturing');
  const [modules, setModules] = useState(['ai', 'sap']);
  const [scale, setScale] = useState(2); // 1 = Startup, 2 = Mid-Market, 3 = Enterprise

  const toggleModule = (mod) => {
    if (modules.includes(mod)) {
      setModules(modules.filter((m) => m !== mod));
    } else {
      setModules([...modules, mod]);
    }
  };

  // Timeline calculation heuristic
  const baseWeeks = scale * 2;
  const moduleWeeks = modules.length * 2.5;
  const totalWeeks = Math.ceil(baseWeeks + moduleWeeks);

  const complexityTier = totalWeeks > 12 ? 'Tier 3: Enterprise High-Concurrency' : totalWeeks > 6 ? 'Tier 2: Advanced Cloud Suite' : 'Tier 1: Fast Launch MVP';

  const handleExportWhatsApp = () => {
    const scopeStr = `Hello AllWorkss Team,%0A%0AI used the ROI & Scope Estimator on AllWorkss.in:%0A- Industry: ${industry.toUpperCase()}%0A- Modules: ${modules.join(', ').toUpperCase()}%0A- Scale: ${scale === 1 ? 'Startup' : scale === 2 ? 'Mid-Market' : 'Enterprise'}%0A- Estimated Timeline: ~${totalWeeks} Weeks (%${complexityTier})%0A%0AAvailable for consultation?`;
    window.open(`https://wa.me/919967376681?text=${scopeStr}`, '_blank');
  };

  const handleExportSMS = () => {
    const scopeStr = `Hello AllWorkss Scope: ${industry.toUpperCase()}, Modules: ${modules.join('/')}, Est: ${totalWeeks}wks.`;
    window.open(`sms:+919004246792?body=${encodeURIComponent(scopeStr)}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#080D1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase">
            <Calculator className="w-3.5 h-3.5" /> Project Cost &amp; Timeline Estimator
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Dynamic ROI &amp; <span className="text-gradient-cyan">Scope Calculator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Select your industry, desired modules, and cloud scale to generate an instant timeline estimate and export the scope directly to our lead architects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Wizard Controls (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            {/* Step 1: Industry */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                1. Select Target Industry Domain:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'manufacturing', label: 'Manufacturing' },
                  { id: 'healthcare', label: 'Healthcare & EMR' },
                  { id: 'fintech', label: 'FinTech & Trading' },
                  { id: 'retail', label: 'Retail & E-Com' },
                  { id: 'enterprise', label: 'Enterprise Services' },
                ].map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustry(ind.id)}
                    className={`py-2.5 px-3 rounded-xl border font-medium text-center transition-all ${
                      industry === ind.id 
                        ? 'bg-brand-blue border-brand-cyan text-white shadow-md' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Modules */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                2. Select Required Architectural Modules:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'ai', label: '360° AI & Gemini RAG' },
                  { id: 'sap', label: 'SAP ERP & Middleware' },
                  { id: 'saas', label: 'Custom Web SaaS Platform' },
                  { id: 'mobile', label: 'Native Mobile Gateway' },
                ].map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`py-2.5 px-3 rounded-xl border font-medium text-left flex items-center justify-between transition-all ${
                      modules.includes(mod.id)
                        ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{mod.label}</span>
                    {modules.includes(mod.id) && <CheckCircle2 className="w-4 h-4 text-brand-cyan" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: SLA & Cloud Scale */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-300 font-bold uppercase">
                <span>3. SLA &amp; Cloud Capacity Scale:</span>
                <span className="text-brand-cyan">
                  {scale === 1 ? 'Startup MVP' : scale === 2 ? 'Mid-Market Regional' : 'Enterprise Multi-Region'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full accent-brand-cyan cursor-pointer"
              />
            </div>

          </div>

          {/* Right Column: Output & Export Actions (5 Cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 bg-slate-950/80">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Calculated Scope Summary</span>
              <div className="font-heading text-3xl font-extrabold text-white text-gradient-cyan mt-1">
                ~{totalWeeks} Weeks
              </div>
              <div className="text-xs text-emerald-400 font-mono font-bold mt-1">
                {complexityTier}
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-mono">
              <div className="flex justify-between">
                <span>Domain:</span>
                <span className="text-white font-bold">{industry.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>Active Modules:</span>
                <span className="text-brand-cyan font-bold">{modules.length} Selected</span>
              </div>
              <div className="flex justify-between">
                <span>Guaranteed SLA Uptime:</span>
                <span className="text-emerald-400 font-bold">99.9% Cloud Run</span>
              </div>
            </div>

            {/* Direct Export Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleExportWhatsApp}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-glow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Export Scope to WhatsApp (+91 99673 76681)
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleExportSMS}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Export via Cellular SMS (+91 90042 46792)
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
