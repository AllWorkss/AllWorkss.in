import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050914] border-t border-slate-800/80 text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-brand-blue/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0B132B] rounded-[7.5px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                ALLWORKSS
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              High-Performance Digital Solutions, SAP ERP Consulting, and Cloud AI Architecture Built to Power Enterprise Transformation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                🟢 All Cloud Gateways Operational
              </span>
            </div>
          </div>

          {/* Software Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Software Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://github.com/AllWorkss/CostFlow" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  CostFlow (CSF Costing) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://github.com/AllWorkss/smartparchi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  SmartParchi EMR <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://github.com/AllWorkss/grif_assistant" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  GRIF Executive AI <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://github.com/AllWorkss/zenith_algo_terminal" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  ZenithAlgo Pro Terminal <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://github.com/AllWorkss/ABIs-Mobile-App" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  ABIS Mobile App <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Consulting Capabilities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Enterprise Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">SAP ERP Modernization</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Custom Cloud & RAG AI</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">GSTIN & BI Automation</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Supply Chain Analytics</a></li>
              <li><a href="#credentials" className="hover:text-brand-cyan transition-colors">Founder Leadership</a></li>
            </ul>
          </div>

          {/* Registered Office & Corporate Transparency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Registered Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">
                YARSA ALLWORKSS (OPC) PRIVATE LIMITED
              </p>
              <div className="inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-brand-cyan/40 font-mono text-[10px] text-brand-cyan font-bold">
                GSTIN: 277AABCY875P1Z9
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>The Universe, Kalsekar College, Thane, Maharashtra, 400612, India</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sun: 9:00 AM – 5:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong className="text-slate-300">YARSA ALLWORKSS (OPC) PRIVATE LIMITED</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/AllWorkss" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg> GitHub @AllWorkss
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
