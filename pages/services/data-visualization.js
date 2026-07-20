import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function DataVisualization() {
  return (
    <>
      <Head>
        <title>Data Visualization & Reporting - AllWorkss</title>
        <meta name="description" content="Transform data into interactive dashboards using Power BI and Tableau. Custom analytics reports." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Data Visualization Reports</h1>
          <p>Transform raw data into clear, interactive, decision-ready visual reports</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Services Included</h2>
              <p>
                AllWorkss transforms your business data into powerful visual dashboards that tell your story and drive informed decision-making.
              </p>

              <h3>Dashboard & Report Types</h3>
              <ul>
                <li>Sales & Revenue Analysis</li>
                <li>Executive Summaries</li>
                <li>Inventory & Supply Chain</li>
                <li>Financial Intelligence</li>
                <li>Customer Analytics</li>
                <li>Operations Metrics</li>
              </ul>

              <h3>Tools & Technologies</h3>
              <ul>
                <li>Power BI</li>
                <li>Tableau</li>
                <li>Google Data Studio</li>
                <li>Advanced Excel Analytics</li>
                <li>Custom Web Dashboards</li>
              </ul>

              <h3>Key Benefits</h3>
              <ul>
                <li>✓ Real-Time Data Updates</li>
                <li>✓ Interactive & User-Friendly</li>
                <li>✓ Mobile-Responsive Design</li>
                <li>✓ Automated Report Generation</li>
                <li>✓ Data-Driven Insights</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Dashboard</h3>
                <p>Start making data-driven decisions with custom dashboards.</p>
                <Link href="/booking" className="btn btn-primary">
                  Request a Demo
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need data visualization and reporting solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Dashboard Examples</h3>
                <ul>
                  <li>Sales Performance</li>
                  <li>Inventory Levels</li>
                  <li>Customer Metrics</li>
                  <li>Financial Reports</li>
                  <li>Operations KPIs</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Process</h3>
                <ul>
                  <li>Data Audit</li>
                  <li>Metric Definition</li>
                  <li>Dashboard Design</li>
                  <li>Implementation</li>
                  <li>Training & Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>See Your Data Come Alive</h2>
          <p>Beautiful dashboards that drive decisions</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Start Visualization Project
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
