import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function PromotionBranding() {
  return (
    <>
      <Head>
        <title>Brand Building & Marketing Services - AllWorkss</title>
        <meta name="description" content="End-to-end brand development, visual branding, and promotional strategies. ML-powered marketing solutions." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Promotion & Brand Building Services</h1>
          <p>End-to-end brand development and promotional strategies for lasting impact</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Complete Brand Solutions</h2>
              <p>
                AllWorkss delivers comprehensive branding and promotional strategies that build trust, visibility, and scalability across platforms.
              </p>

              <h3>Visual Branding Assets</h3>
              <ul>
                <li>Logo & Iconography Design</li>
                <li>Brochures & Marketing Collateral</li>
                <li>Social Media Templates (LinkedIn, Instagram, WhatsApp)</li>
                <li>Product Imagery & Catalog Design</li>
                <li>Brand Style Guides</li>
              </ul>

              <h3>Digital Marketing</h3>
              <ul>
                <li>SEO Optimization</li>
                <li>Social Media Marketing</li>
                <li>Content Marketing</li>
                <li>Email Campaigns</li>
                <li>PPC Advertising</li>
              </ul>

              <h3>Machine Learning Marketing</h3>
              <ul>
                <li>Product Categorization & Tagging Automation</li>
                <li>Inventory Forecasting Models</li>
                <li>Customer Segmentation</li>
                <li>Price Optimization</li>
                <li>Marketing Automation</li>
              </ul>

              <h3>Our Approach</h3>
              <ul>
                <li>✓ Strategy-Driven Design</li>
                <li>✓ Data-Powered Decisions</li>
                <li>✓ Multi-Channel Integration</li>
                <li>✓ ROI Focused</li>
                <li>✓ Continuous Optimization</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Build Your Brand</h3>
                <p>Stand out with a cohesive, powerful brand presence.</p>
                <Link href="/booking" className="btn btn-primary">
                  Start Branding
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need brand building and marketing services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Services</h3>
                <ul>
                  <li>Brand Strategy</li>
                  <li>Visual Design</li>
                  <li>Digital Marketing</li>
                  <li>Content Creation</li>
                  <li>Analytics & Reporting</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Use Cases</h3>
                <ul>
                  <li>New Product Launch</li>
                  <li>Rebranding</li>
                  <li>Market Expansion</li>
                  <li>Startup Branding</li>
                  <li>Enterprise Refresh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Create a Brand That Lasts</h2>
          <p>Strategic branding for lasting market impact</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Start Branding Journey
            </Link>
            <a href="tel:+919004246792" className="btn btn-outline">
              📞 Call +91 9004246792
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
