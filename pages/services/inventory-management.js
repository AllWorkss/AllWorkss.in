import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function InventoryManagement() {
  return (
    <>
      <Head>
        <title>Inventory Management Solutions - AllWorkss</title>
        <meta name="description" content="Cloud-based inventory management for online and offline operations. Real-time tracking and Yarsa Store integration." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Inventory Management Solutions</h1>
          <p>Dual-mode system supporting both digital marketplace and physical product operations</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Two Operational Modes</h2>
              <p>
                AllWorkss provides a comprehensive inventory system designed to support businesses operating across both digital marketplaces and physical retail/warehouses.
              </p>

              <h3>Online Inventory Management</h3>
              <ul>
                <li>Partner with companies for marketplace selling</li>
                <li>Manage multiple vendor accounts</li>
                <li>Yarsa Store seller account integration</li>
                <li>Cross-platform listing synchronization</li>
                <li>Order management & fulfillment</li>
              </ul>

              <h3>Offline Inventory Management</h3>
              <ul>
                <li>Direct supplier procurement</li>
                <li>End-to-end product lifecycle management</li>
                <li>Branding & packaging</li>
                <li>Warehouse management</li>
                <li>Delivery & customer fulfillment</li>
              </ul>

              <h3>Key Features</h3>
              <ul>
                <li>✓ Real-Time Inventory Sync</li>
                <li>✓ Multi-Location Tracking</li>
                <li>✓ Automated Stock Alerts</li>
                <li>✓ Integration Ready</li>
                <li>✓ Scalable Architecture</li>
              </ul>

              <h3>Technology Stack</h3>
              <ul>
                <li>Cloud-based infrastructure</li>
                <li>API integrations with marketplaces</li>
                <li>Barcode & RFID tracking</li>
                <li>Mobile app for operations</li>
                <li>Analytics dashboards</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Optimize Your Inventory</h3>
                <p>Streamline operations with intelligent inventory management.</p>
                <Link href="/booking" className="btn btn-primary">
                  Request Demo
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need inventory management solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Management Features</h3>
                <ul>
                  <li>Real-time Tracking</li>
                  <li>Stock Forecasting</li>
                  <li>Automated Reordering</li>
                  <li>Multi-location Support</li>
                  <li>Supplier Management</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Benefits</h3>
                <ul>
                  <li>Reduce Stockouts</li>
                  <li>Lower Carrying Costs</li>
                  <li>Improve Accuracy</li>
                  <li>Faster Fulfillment</li>
                  <li>Better Insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Perfect Your Inventory Operations</h2>
          <p>Smart systems for seamless supply chain management</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Get Your System
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
