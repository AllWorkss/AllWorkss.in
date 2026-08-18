import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChatbot from '../components/interactive/FloatingChatbot';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />

        {/* Geo & Regional Targeting (Thane, Mumbai, India) */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Thane, Mumbai" />
        <meta name="geo.position" content="19.2183;72.9781" />
        <meta name="ICBM" content="19.2183, 72.9781" />

        {/* JSON-LD Multi-Entity Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://allworkss.space/#software",
                  "name": "Allworkss Business Intelligence Suite (ABIS)",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "All Cloud & Modern Web Browsers",
                  "offers": [
                    {
                      "@type": "Offer",
                      "name": "Module 1 Business Auditor",
                      "price": "99.00",
                      "priceCurrency": "INR"
                    },
                    {
                      "@type": "Offer",
                      "name": "Module 5 Financial Growth Engine",
                      "price": "499.00",
                      "priceCurrency": "INR"
                    }
                  ],
                  "author": {
                    "@type": "Person",
                    "name": "Yasar Intakhab Khan",
                    "jobTitle": "Founder & Chief Technology Officer"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://allworkss.space/#business",
                  "name": "Allworkss Consultancy & Digital Solutions",
                  "url": "https://allworkss.space",
                  "telephone": "+91-9967376681",
                  "priceRange": "₹₹",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Thane",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Yasar Intakhab Khan"
                  },
                  "knowsAbout": [
                    "GST & MCA Compliance Auditing",
                    "Technical SEO & Programmatic Indexing",
                    "Meta Ads CAPI & Conversion Optimization",
                    "Cloud Serverless Architecture (GCP & Docker)",
                    "B2B Sales Funnel Architecture"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://allworkss.space/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How does the ABIS Business Auditor validate GST & MCA filings?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The platform analyzes official MCA data structures, validates 15-digit GSTIN formats, and uses statistical Isolation Forest anomaly algorithms to detect operational and compliance discrepancies instantly."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What reports are generated after the AI analysis?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Users receive an instant 8-page Deloitte/EY style enterprise PDF audit report alongside a 12-slide dark-themed boardroom PPTX presentation deck."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <FloatingChatbot />
      <Footer />
    </>
  );
}

export default MyApp;
