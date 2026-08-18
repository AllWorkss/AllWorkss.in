import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutFounder() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://allworkss.in/about-founder#person",
        "name": "Yasar Intakhab Khan",
        "jobTitle": "Founder & Chief Technology Officer",
        "worksFor": {
          "@type": "Organization",
          "name": "YARSA ALLWORKSS (OPC) PRIVATE LIMITED",
          "url": "https://allworkss.in"
        },
        "url": "https://allworkss.in/about-founder",
        "sameAs": [
          "https://github.com/AllWorkss",
          "https://allworkss.in",
          "https://allworkss.space",
          "https://yarsa.store"
        ],
        "knowsAbout": [
          "Python FastAPI Microservices",
          "Enterprise Business Intelligence & Financial Scoring",
          "Machine Learning Anomaly Detection (IsolationForest)",
          "Performance Marketing & Meta Conversions API (CAPI)",
          "Google Cloud Run Containerization & Serverless Infrastructure"
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Yasar Intakhab Khan — Founder &amp; Chief Technology Officer | Allworkss</title>
        <meta name="description" content="Official biography and executive track record of Yasar Intakhab Khan, Founder &amp; CTO of Allworkss and Chief Architect of ABIS 360° AI Suite." />
        <meta name="keywords" content="Yasar Intakhab Khan, Founder of Allworkss, AI systems architect Mumbai, CTO Allworkss ABIS, Yasar Khan Thane tech entrepreneur" />
        <link rel="canonical" href="https://allworkss.in/about-founder" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="h-24 w-24 rounded-2xl bg-blue-600 text-white font-black text-4xl flex items-center justify-center shadow-xl border border-blue-400/30">
                YK
              </div>
              <div>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono rounded-full uppercase">Executive Biography</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Yasar Intakhab Khan</h1>
                <p className="text-sm font-semibold text-blue-400">Founder &amp; Chief Technology Officer — YARSA ALLWORKSS (OPC) PVT LTD</p>
                <p className="text-xs text-slate-400 mt-1">Thane, Mumbai Metropolitan Region (MMR), Maharashtra, India</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
              <p>
                Yasar Intakhab Khan is a Full-Stack AI Systems Architect, Cloud Infrastructure Engineer, and Performance Marketing Strategist. He is the founder of <strong>YARSA ALLWORKSS (OPC) PRIVATE LIMITED</strong> and Chief Architect behind the <strong>Allworkss Business Intelligence Suite (ABIS)</strong>.
              </p>
              <p>
                With expertise spanning pure Python FastAPI backend engineering, ReportLab PDF generators, IsolationForest financial anomaly engines, Meta Conversions API (CAPI) integrations, and Google Cloud Run containerization, Yasar has engineered robust digital ecosystems powering both B2B SaaS and high-converting enterprise agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs font-semibold">
              <a href="https://github.com/AllWorkss" target="_blank" rel="noreferrer" className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 hover:text-white flex items-center justify-between">
                <span>GitHub Org</span>
                <span>↗</span>
              </a>
              <a href="https://allworkss.in" className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-blue-400 hover:underline flex items-center justify-between">
                <span>Agency Portal</span>
                <span>↗</span>
              </a>
              <a href="https://allworkss.space" target="_blank" rel="noreferrer" className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-cyan-400 hover:underline flex items-center justify-between">
                <span>ABIS SaaS</span>
                <span>↗</span>
              </a>
              <a href="https://yarsa.store" target="_blank" rel="noreferrer" className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-amber-400 hover:underline flex items-center justify-between">
                <span>YARSA STORE</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
