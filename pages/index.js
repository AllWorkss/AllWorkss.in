import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InteractiveHeroWidget from '../components/InteractiveHeroWidget';
import ProductBentoGrid from '../components/ProductBentoGrid';
import ServicesMatrix from '../components/ServicesMatrix';
import FounderCredentials from '../components/FounderCredentials';
import ConsultationConnect from '../components/ConsultationConnect';

// New Interactive & Corporate Components
import CommandPalette from '../components/interactive/CommandPalette';
import TopologyGraph from '../components/interactive/TopologyGraph';
import RoiEstimator from '../components/interactive/RoiEstimator';
import EcosystemPulse from '../components/interactive/EcosystemPulse';
import AgencyConsultancySolutions from '../components/sections/AgencyConsultancySolutions';
import ExecutiveLeadership from '../components/sections/ExecutiveLeadership';
import DualBrandEcosystem from '../components/sections/DualBrandEcosystem';
import StrategicMatrix from '../components/sections/StrategicMatrix';

// Sandboxes
import CostFlowSandbox from '../components/interactive/sandboxes/CostFlowSandbox';
import SmartParchiSandbox from '../components/interactive/sandboxes/SmartParchiSandbox';
import GrifTerminalSandbox from '../components/interactive/sandboxes/GrifTerminalSandbox';
import ZenithAlgoSandbox from '../components/interactive/sandboxes/ZenithAlgoSandbox';
import AbisMobileSandbox from '../components/interactive/sandboxes/AbisMobileSandbox';

import { ArrowUpRight, MessageSquare, ShieldCheck, Zap, Server, ChevronRight, Cpu, Layers } from 'lucide-react';

export default function Home() {
  const [activeSandbox, setActiveSandbox] = useState('costflow');
  const whatsappUrl = "https://wa.me/919967376681?text=Hello%20AllWorkss%20Team%2C%20I%20would%20like%20to%20schedule%20an%20Enterprise%20Consultation.";

  return (
    <>
      <Head>
        <title>AllWorkss — Enterprise Intelligence, SAP ERP Consulting & Dual-Brand Ecosystem</title>
        <meta name="description" content="High-Performance Digital Solutions, SAP ERP Consulting, and Cloud AI Architecture Built to Power Enterprise Transformation. YARSA ALLWORKSS (OPC) PRIVATE LIMITED. GSTIN: 277AABCY875P1Z9." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AllWorkss — Enterprise Intelligence & Cloud AI Ecosystem" />
        <meta property="og:description" content="SaaS Platforms, SAP ERP Transformation, YARSA STORE B2B Retail, AI Costing Engines, and Cloud Microservices." />
      </Head>

      <div className="min-h-screen bg-[#080D1A] text-white selection:bg-brand-cyan selection:text-slate-950 font-body">
        
        {/* Global Navbar */}
        <Navbar />

        {/* Command Palette (Cmd + K Search & CLI) */}
        <CommandPalette />

        {/* SECTION 1: HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#080D1A]">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[140px] animate-pulse-slow"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[140px] animate-pulse-slow"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-brand-cyan/40 shadow-cyan-glow text-xs font-mono text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
                  <span className="text-brand-cyan font-bold">⚡ 360° AI Business Intelligence &amp; Cloud ERP Architecture</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Architecting the Future of <span className="text-gradient-cyan">Enterprise Intelligence</span> &amp; Digital Execution.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  High-Performance Digital Solutions, SAP ERP Consulting, and Cloud AI Architecture Built to Power Enterprise Transformation for YARSA ALLWORKSS (OPC) PRIVATE LIMITED (GSTIN: 277AABCY875P1Z9).
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href="#sandboxes"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-cobalt hover:to-brand-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-blue/25 hover:shadow-cyan-glow transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Test Live Product Sandboxes
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-brand-cyan text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Schedule WhatsApp Consult
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                    <span>AWS Certified Architect</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span>Google Cloud Run Serverless</span>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-5 w-full">
                <InteractiveHeroWidget />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: LIVE ECOSYSTEM HEALTH & GITHUB PULSE */}
        <section className="py-12 bg-[#050914] border-t border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EcosystemPulse />
          </div>
        </section>

        {/* SECTION 3: PRODUCT ECOSYSTEM BENTO GRID */}
        <ProductBentoGrid />

        {/* SECTION 4: IN-BROWSER PRODUCT SANDBOXES (INTERACTIVE MINI-SIMULATORS) */}
        <section id="sandboxes" className="py-24 bg-[#080D1A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-semibold uppercase">
                <Layers className="w-3.5 h-3.5" /> In-Browser Mini Sandboxes
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Live Interactive <span className="text-gradient-cyan">Product Sandboxes</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Test-drive our core SaaS engines directly inside your browser with live calculations, SVG canvas interactions, and real-time outputs.
              </p>
            </div>

            {/* Sandbox Selector Tabs */}
            <div className="flex justify-center flex-wrap gap-2">
              {[
                { id: 'costflow', label: 'CostFlow AI Costing' },
                { id: 'smartparchi', label: 'SmartParchi EMR' },
                { id: 'grif', label: 'GRIF Executive AI' },
                { id: 'zenith', label: 'ZenithAlgo Terminal' },
                { id: 'abis', label: 'ABIS Mobile Gateway' },
              ].map((sb) => (
                <button
                  key={sb.id}
                  onClick={() => setActiveSandbox(sb.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeSandbox === sb.id 
                      ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-cyan-glow scale-105' 
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {sb.label}
                </button>
              ))}
            </div>

            {/* Sandbox Viewport Display */}
            <div className="max-w-5xl mx-auto">
              {activeSandbox === 'costflow' && <CostFlowSandbox />}
              {activeSandbox === 'smartparchi' && <SmartParchiSandbox />}
              {activeSandbox === 'grif' && <GrifTerminalSandbox />}
              {activeSandbox === 'zenith' && <ZenithAlgoSandbox />}
              {activeSandbox === 'abis' && <AbisMobileSandbox />}
            </div>

          </div>
        </section>

        {/* SECTION 5: AGENCY & CONSULTANCY SOLUTIONS (360° DIGITAL MARKETING, TECH, CLOUD & FUNNELS) */}
        <AgencyConsultancySolutions />

        {/* SECTION 6: DUAL-BRAND CORPORATE ECOSYSTEM (ALLWORKSS + YARSA STORE) */}
        <DualBrandEcosystem />

        {/* SECTION 7: STRATEGIC DIFFERENTIATION MATRIX (WHAT SETS YARSA APART) */}
        <StrategicMatrix />

        {/* SECTION 8: EXECUTIVE FOUNDER & CTO LEADERSHIP TRACK RECORD */}
        <ExecutiveLeadership />

        {/* SECTION 9: 360° AI & SAP TOPOLOGY CANVAS */}
        <TopologyGraph />

        {/* SECTION 10: DYNAMIC ROI & SCOPE CALCULATOR */}
        <RoiEstimator />

        {/* SECTION 11: ENTERPRISE CONSULTING & SAP SERVICES MATRIX */}
        <ServicesMatrix />

        {/* SECTION 12: FOUNDER CREDENTIALS & CORPORATE TRUST */}
        <FounderCredentials />

        {/* SECTION 13: INSTANT CONNECT ENGINE */}
        <ConsultationConnect />

        {/* SECTION 12: ENTERPRISE FOOTER */}
        <Footer />

      </div>
    </>
  );
}
