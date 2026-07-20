import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function BusinessConsultancy() {
  return (
    <>
      <Head>
        <title>Business Consultancy Services - AllWorkss</title>
        <meta name="description" content="Strategic business consulting for startups, SMEs, and growth ventures. Strategy, finance, operations consulting." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Business Consultancy Services</h1>
          <p>Strategic, operational, and digital guidance for startups, SMEs, and growth-stage ventures</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Comprehensive Consulting</h2>
              <p>
                Yarsa AllWorkss (OPC) Pvt Ltd provides multi-disciplinary consulting services that align strategy, operations, and technology with your business goals.
              </p>

              <h3>Strategy Consulting</h3>
              <ul>
                <li>Define long-term business goals</li>
                <li>Competitive positioning</li>
                <li>Market entry strategies</li>
                <li>Growth pathways</li>
                <li>Partnership opportunities</li>
              </ul>

              <h3>Financial Consulting</h3>
              <ul>
                <li>Financial health assessment</li>
                <li>Forecasting & budgeting</li>
                <li>Investment decisions</li>
                <li>Cost optimization</li>
                <li>Fundraising strategy</li>
              </ul>

              <h3>Operations Consulting</h3>
              <ul>
                <li>Process improvement</li>
                <li>Efficiency optimization</li>
                <li>Cost reduction</li>
                <li>Scalability planning</li>
                <li>Supply chain optimization</li>
              </ul>

              <h3>Our Approach</h3>
              <ul>
                <li>✓ Data-Driven Analysis</li>
                <li>✓ Customized Solutions</li>
                <li>✓ Implementation Support</li>
                <li>✓ Change Management</li>
                <li>✓ Ongoing Advisory</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Expert Guidance</h3>
                <p>Transform your business with strategic consulting.</p>
                <Link href="/booking" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need business consultancy services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Consulting Focus</h3>
                <ul>
                  <li>Strategy Development</li>
                  <li>Financial Planning</li>
                  <li>Operations Design</li>
                  <li>Digital Transformation</li>
                  <li>Market Expansion</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Client Types</h3>
                <ul>
                  <li>Startups</li>
                  <li>SMEs</li>
                  <li>Growth-Stage Ventures</li>
                  <li>Scale-ups</li>
                  <li>Enterprises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Unlock Your Business Potential</h2>
          <p>Expert guidance for sustainable growth</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Begin Consultation
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
