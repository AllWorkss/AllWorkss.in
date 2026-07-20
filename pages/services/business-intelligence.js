import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function BusinessIntelligence() {
  return (
    <>
      <Head>
        <title>Business Intelligence Services - AllWorkss</title>
        <meta name="description" content="Business Intelligence solutions with customer, financial, and operations intelligence dashboards." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Business Intelligence Services</h1>
          <p>Turn raw data into actionable insights that drive smarter decisions and growth</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Intelligence Solutions</h2>
              <p>
                AllWorkss leverages Business Intelligence to transform your data into strategic assets that fuel decision-making and competitive advantage.
              </p>

              <h3>Customer Intelligence</h3>
              <ul>
                <li>Customer Segmentation by behavior, geography, value</li>
                <li>Retention & Satisfaction Tracking</li>
                <li>Lifetime Value Analysis</li>
                <li>Churn Prediction</li>
              </ul>

              <h3>Financial Intelligence</h3>
              <ul>
                <li>Cash Flow & Profitability Tracking</li>
                <li>Expense Breakdown by Department</li>
                <li>Budget Variance Analysis</li>
                <li>Financial Forecasting</li>
              </ul>

              <h3>Operations Intelligence</h3>
              <ul>
                <li>Inventory & Supply Chain Optimization</li>
                <li>Process Efficiency Metrics</li>
                <li>Resource Utilization</li>
                <li>Performance KPIs</li>
              </ul>

              <h3>Sales Intelligence</h3>
              <ul>
                <li>✓ Sales Performance Tracking</li>
                <li>✓ Revenue Growth Analysis</li>
                <li>✓ Marketplace Performance Comparison</li>
                <li>✓ Conversion Rate Optimization</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Implement BI Today</h3>
                <p>Gain the intelligence you need to lead your market.</p>
                <Link href="/booking" className="btn btn-primary">
                  Get Started
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need business intelligence solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Intelligence Areas</h3>
                <ul>
                  <li>Customer Intelligence</li>
                  <li>Financial Intelligence</li>
                  <li>Operations Intelligence</li>
                  <li>Sales Intelligence</li>
                  <li>Market Intelligence</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Implementation</h3>
                <ul>
                  <li>Data Integration</li>
                  <li>Dashboard Development</li>
                  <li>Report Automation</li>
                  <li>User Training</li>
                  <li>Ongoing Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Make Smarter Decisions with BI</h2>
          <p>Intelligence-driven growth starts here</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Start Implementation
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
