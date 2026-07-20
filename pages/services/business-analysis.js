import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function BusinessAnalysis() {
  return (
    <>
      <Head>
        <title>Business Analysis Services - AllWorkss</title>
        <meta name="description" content="Strategic business analysis including SWOT analysis, process optimization, and operational efficiency." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Business Analysis Services</h1>
          <p>Bridge data, strategy, and execution—ensuring every decision is backed by insight</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Our Analytical Approach</h2>
              <p>
                AllWorkss uses business analysis to identify inefficiencies, uncover opportunities, and drive strategic growth across your organization.
              </p>

              <h3>Services Offered</h3>
              <ul>
                <li>SWOT Analysis (Internal & External Evaluation)</li>
                <li>Cash Flow & Profitability Modeling</li>
                <li>Operational Bottleneck Detection</li>
                <li>Market Analysis & Competitor Research</li>
                <li>Process Mapping & Optimization</li>
              </ul>

              <h3>Strategic Focus Areas</h3>
              <ul>
                <li>Align data insights with branding & positioning</li>
                <li>Identify operational inefficiencies</li>
                <li>Optimize supply chain & logistics</li>
                <li>Improve sales & revenue channels</li>
                <li>Enhance customer experience</li>
              </ul>

              <h3>Expected Outcomes</h3>
              <ul>
                <li>✓ Clear Strategic Direction</li>
                <li>✓ Improved Operational Efficiency</li>
                <li>✓ Cost Reduction Opportunities</li>
                <li>✓ Growth Pathways Identified</li>
                <li>✓ Risk Mitigation Strategies</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Start Your Analysis</h3>
                <p>Get insights that drive strategic decisions and growth.</p>
                <Link href="/booking" className="btn btn-primary">
                  Schedule Analysis
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need business analysis services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Analysis Types</h3>
                <ul>
                  <li>SWOT Analysis</li>
                  <li>Financial Modeling</li>
                  <li>Process Analysis</li>
                  <li>Market Research</li>
                  <li>Competitor Analysis</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Deliverables</h3>
                <ul>
                  <li>Detailed Analysis Report</li>
                  <li>Strategic Recommendations</li>
                  <li>Action Plan</li>
                  <li>KPI Dashboard</li>
                  <li>Implementation Roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Unlock Your Business Potential</h2>
          <p>Data-driven insights for strategic growth</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Begin Analysis
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
