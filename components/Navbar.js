import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, Sparkles, MessageSquare, ChevronDown, Bot, Code, Search, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/919967376681?text=Hello%20Yasar%20Sir%2C%20I%20visited%20Allworkss.in%20and%20want%20to%20inquire%20about%20your%20Digital%20Agency%20%26%20AI%20Solutions.";

  const serviceCategories = [
    { key: "google-ecosystem-local-seo", label: "Google Local SEO & GBP 3-Pack", icon: <Search className="w-4 h-4 text-cyan-400" /> },
    { key: "custom-web-engineering", label: "Custom Web Engineering & Next.js", icon: <Code className="w-4 h-4 text-blue-400" /> },
    { key: "enterprise-technical-seo", label: "Enterprise Technical & Programmatic SEO", icon: <Globe className="w-4 h-4 text-indigo-400" /> },
    { key: "performance-meta-ads", label: "Performance Meta Ads & CAPI Tracking", icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { key: "cloud-devops-infrastructure", label: "Cloud Run & DevOps Infrastructure", icon: <Layers className="w-4 h-4 text-emerald-400" /> },
    { key: "domain-dns-brand-protection", label: "Domain, DNS & Brand Security", icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
    { key: "abis-ai-business-suite", label: "ABIS 360° AI Software Suite", icon: <Bot className="w-4 h-4 text-cyan-300" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-slate-950/50 backdrop-blur-md py-4 border-b border-slate-900/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 p-[1.5px] shadow-cyan-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10.5px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                  <circle cx="19" cy="9" r="1.5" fill="#06b6d4" />
                  <circle cx="14" cy="14" r="1.5" fill="#3b82f6" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
                ALLWORKSS
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[9px] tracking-wider uppercase font-semibold text-slate-400">
                Digital Agency &amp; AI Suite
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links & Mega Menu */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors py-1">
                Agency Services <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-slate-900/95 border border-slate-800 backdrop-blur-2xl rounded-2xl shadow-2xl p-3 space-y-1 animate-fadeIn">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1 border-b border-slate-800/60 mb-1">
                    60+ Programmatic Services Matrix
                  </div>
                  {serviceCategories.map((cat) => (
                    <Link 
                      key={cat.key} 
                      href={`/services/${cat.key}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 text-xs transition"
                    >
                      {cat.icon}
                      <span className="truncate">{cat.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://allworkss.space"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold hover:bg-cyan-500/20 transition shadow-sm shadow-cyan-500/10"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              ABIS 360° AI SaaS
              <span className="text-[10px] bg-cyan-400 text-slate-950 px-1.5 py-0.2 rounded-full font-extrabold">space</span>
            </a>

            <Link href="/about-founder" className="hover:text-cyan-400 transition-colors py-1">
              Founder &amp; CTO
            </Link>
            <Link href="/portfolio" className="hover:text-cyan-400 transition-colors py-1">
              Case Studies
            </Link>
            <Link href="/booking" className="hover:text-cyan-400 transition-colors py-1">
              Book Call
            </Link>
          </div>

          {/* Status Indicator & Primary WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">Gemini 2.0 Flash Online</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              1-Click WhatsApp
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
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <a
            href="https://allworkss.space"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              ABIS 360° AI Software Platform
            </span>
            <span className="text-xs uppercase bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-full font-black">allworkss.space</span>
          </a>

          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase px-1 py-1">Services Navigation</div>
            {serviceCategories.map((cat) => (
              <Link
                key={cat.key}
                href={`/services/${cat.key}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 font-medium py-2 px-2 border-b border-slate-900 text-xs"
              >
                {cat.icon}
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
