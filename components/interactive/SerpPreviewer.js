import React, { useState } from 'react';
import { Search, MapPin, Star, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';

export default function SerpPreviewer() {
  const [businessName, setBusinessName] = useState('YARSA AllWorkss');
  const [cityLocality, setCityLocality] = useState('Thane, Mumbai MMR');
  const [targetCategory, setTargetCategory] = useState('SAP Consulting & Digital Growth');

  const defaultMsg = `Hello Yasar Sir, I am testing the Google SERP & Map 3-Pack Simulator on AllWorkss.in for my business: ${businessName} in ${cityLocality}. I would like to schedule a consultation to secure the #1 Local Map Rank.`;
  const whatsappUrl = `https://wa.me/919967376681?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <MapPin className="w-3.5 h-3.5" /> Local Map &amp; SERP Simulator
          </div>
          <h3 className="font-heading text-xl font-bold text-white tracking-tight">
            Google 3-Pack &amp; Local Map Dominance Previewer
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Rank #1 Geo Optimization
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300 font-semibold block">Business Name:</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g. Acme Enterprises"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs font-sans outline-none transition"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300 font-semibold block">City / Locality:</label>
          <input
            type="text"
            value={cityLocality}
            onChange={(e) => setCityLocality(e.target.value)}
            placeholder="e.g. Thane West / Mumbai"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs font-sans outline-none transition"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300 font-semibold block">Target Category:</label>
          <select
            value={targetCategory}
            onChange={(e) => setTargetCategory(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs font-sans outline-none transition"
          >
            <option value="SAP Consulting & Digital Growth">SAP Consulting &amp; Digital Growth</option>
            <option value="360° Technical SEO & Programmatic">360° Technical SEO &amp; Programmatic</option>
            <option value="Google Business Profile 360">Google Business Profile 360</option>
            <option value="Full-Stack Web & Cloud DevOps">Full-Stack Web &amp; Cloud DevOps</option>
            <option value="Conversion Funnel Engineering">Conversion Funnel Engineering</option>
          </select>
        </div>
      </div>

      {/* Live Google 3-Pack SERP Card Simulation */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 relative">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono text-slate-400 ml-2">google.com/search?q={encodeURIComponent(`${targetCategory} in ${cityLocality}`)}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold">
            #1 MAP PACK
          </span>
        </div>

        {/* Map Pack Result Item */}
        <div className="space-y-3 pt-1">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-blue-600/20 text-cyan-400 text-[10px] font-mono font-bold rounded">
                  #1 AD / MAP PACK
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition cursor-pointer">
                  {businessName || 'Your Business Name'}
                </h4>
              </div>

              {/* Stars & Reviews */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="text-slate-200 font-bold">4.9</span>
                <span className="text-slate-400">(148 Verified Reviews)</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{targetCategory}</span>
              </div>

              {/* Location & Details */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-400" /> {cityLocality || 'Thane, Mumbai'}</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">Open 24 Hours</span>
                <span>•</span>
                <span className="text-slate-400">NAP &amp; Schema Verified</span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0 text-center space-y-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-[10px] font-mono text-slate-300 font-bold">Verified</span>
            </div>
          </div>

          {/* Organic Snippet Preview */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs space-y-1">
            <div className="text-[11px] font-mono text-emerald-400 truncate">
              https://allworkss.in/services/{targetCategory.toLowerCase().replace(/[^a-z0-9]/g, '-')}
            </div>
            <div className="text-slate-200 font-semibold">
              {businessName} — {targetCategory} in {cityLocality}
            </div>
            <div className="text-slate-400 text-[11px] leading-relaxed">
              Official {targetCategory} solutions by YARSA ALLWORKSS (OPC) PRIVATE LIMITED. High-performance architecture, 100% NAP consistency, and sub-second load times.
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl text-center shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>Claim #1 Local Map Rank</span>
        </a>

        <a
          href="https://allworkss.in/services/google-ecosystem/gbp-360"
          className="w-full sm:flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1 uppercase tracking-wider"
        >
          <span>View GBP 360° Specs</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </a>
      </div>
    </div>
  );
}
