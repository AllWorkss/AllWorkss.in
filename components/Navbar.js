import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, ShieldCheck, Cpu, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/919967376681?text=Hello%20AllWorkss%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20Enterprise%20SAP%20Consulting%20%26%20Cloud%20AI%20Solutions.";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080D1A]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue via-brand-cyan to-indigo-500 p-[1.5px] shadow-cyan-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B132B] rounded-[10.5px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* SVG Logo Mark representing growth chart & AI node */}
                <svg className="w-6 h-6 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                  <circle cx="19" cy="9" r="1.5" fill="#00C6FF" />
                  <circle cx="14" cy="14" r="1.5" fill="#0066FF" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                ALLWORKSS
                <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                Business Intelligence Suite
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#ecosystem" className="hover:text-brand-cyan transition-colors py-1">
              Products &amp; Sandboxes
            </a>
            <a href="#agency-solutions" className="hover:text-brand-cyan transition-colors py-1 text-brand-cyan font-bold">
              ⚡ Agency &amp; Growth
            </a>
            <a href="#services" className="hover:text-brand-cyan transition-colors py-1">
              SAP &amp; Cloud AI
            </a>
            <a href="#leadership" className="hover:text-brand-cyan transition-colors py-1">
              Leadership
            </a>
            <a href="#connect" className="hover:text-brand-cyan transition-colors py-1">
              Contact Us
            </a>
          </div>

          {/* Status Indicator & Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">360° AI Active</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-cobalt hover:to-brand-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-blue/20 hover:shadow-cyan-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              Schedule Consult
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B]/95 border-b border-slate-800 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-4 animate-fadeIn">
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-brand-cyan font-medium py-2 border-b border-slate-800/50"
          >
            Products & Ecosystem
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-brand-cyan font-medium py-2 border-b border-slate-800/50"
          >
            SAP & Consulting
          </a>
          <a
            href="#credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-brand-cyan font-medium py-2 border-b border-slate-800/50"
          >
            Trust & Founder
          </a>
          <a
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-brand-cyan font-medium py-2 border-b border-slate-800/50"
          >
            Contact Us
          </a>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Schedule WhatsApp Consult
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
