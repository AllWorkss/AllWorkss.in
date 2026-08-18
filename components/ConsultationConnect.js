import React, { useState } from 'react';
import { MessageSquare, PhoneCall, Send, ShieldCheck, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';

export default function ConsultationConnect() {
  const [selectedService, setSelectedService] = useState('sap');
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientNote, setClientNote] = useState('');

  const services = [
    { id: 'sap', name: 'SAP ERP & Legacy Transformation' },
    { id: 'costflow', name: 'CostFlow AI Costing Setup' },
    { id: 'smartparchi', name: 'SmartParchi Clinic EMR Deployment' },
    { id: 'custom_ai', name: 'Custom Cloud & Gemini AI Pipeline' },
    { id: 'quant_algo', name: 'ZenithAlgo Pro Algorithmic Setup' }
  ];

  const handleWhatsAppDispatch = (e) => {
    e.preventDefault();
    const serviceName = services.find(s => s.id === selectedService)?.name || selectedService;
    const text = `Hello AllWorkss Team,%0A%0AMy Name: ${encodeURIComponent(clientName || 'Partner')}%0ACompany: ${encodeURIComponent(clientCompany || 'N/A')}%0AService Interested In: ${encodeURIComponent(serviceName)}%0ANotes: ${encodeURIComponent(clientNote || 'I would like to schedule a strategy consultation.')}`;
    window.open(`https://wa.me/919967376681?text=${text}`, '_blank');
  };

  return (
    <section id="connect" className="py-24 bg-[#050914] relative overflow-hidden">
      {/* Ambient glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-blue/15 to-brand-cyan/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-brand-cyan" />
            Instant Connect Engine
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Schedule an <span className="text-gradient-cyan">Enterprise Consultation</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Directly connect with our Lead Software Architects via WhatsApp API or SMS Gateway for instant project scoping and strategic analysis.
          </p>
        </div>

        {/* 2-Column Grid: Form & Quick Dispatch Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Booking Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Real-Time Inquiry Dispatcher
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Direct routing to +91 99673 76681
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                Instant Response
              </span>
            </div>

            <form onSubmit={handleWhatsAppDispatch} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium">Your Name / Organization</label>
                  <input 
                    type="text" 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Yasar Khan" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium">Company / Industry</label>
                  <input 
                    type="text" 
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder="e.g. Manufacturing Ltd" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium">Select Service Interest</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:outline-none focus:border-brand-cyan transition-colors font-mono"
                >
                  {services.map(s => (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium">Project Notes / Requirements (Optional)</label>
                <textarea 
                  rows="3"
                  value={clientNote}
                  onChange={(e) => setClientNote(e.target.value)}
                  placeholder="Briefly describe your requirements or timeline..." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-cobalt hover:to-brand-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-blue/20 hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Dispatch WhatsApp Inquiry (+91 99673 76681)
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column: Direct Quick Connect Gateways (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Gateway Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Direct WhatsApp API
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Instant 1-on-1 Chat Gateway
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our Lead Architect for quick quotes, technical questions, or architecture reviews.
              </p>

              <a
                href="https://wa.me/919967376681?text=Hello%20AllWorkss%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Open WhatsApp (+91 99673 76681)
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct SMS Gateway Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Direct SMS Gateway
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Mobile SMS Dispatch
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Send an immediate cellular SMS to our secondary corporate dispatch line.
              </p>

              <a
                href="sms:+919004246792?body=Hello%20AllWorkss%20Team%2C%20I%20want%20to%20inquire%20about%20your%20services."
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Send Direct SMS (+91 90042 46792)
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
