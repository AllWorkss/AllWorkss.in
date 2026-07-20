import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function WebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>Website Development Services - AllWorkss</title>
        <meta name="description" content="High-performance, responsive website development with SEO optimization. E-commerce and custom solutions." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Website Development Services</h1>
          <p>High-performance, visually cohesive websites that drive results and engage customers</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>What We Deliver</h2>
              <p>
                AllWorkss builds websites that combine stunning design with powerful functionality. From corporate sites to e-commerce platforms, we create digital experiences that convert.
              </p>

              <h3>Website Types</h3>
              <ul>
                <li>Corporate & Business Websites</li>
                <li>E-Commerce Platforms (Shopify, WooCommerce, Custom)</li>
                <li>Portfolio & Showcase Sites</li>
                <li>SaaS Platforms</li>
                <li>Blog & Content Platforms</li>
              </ul>

              <h3>Key Features</h3>
              <ul>
                <li>Responsive & Mobile-First Design</li>
                <li>SEO Optimization for Search Visibility</li>
                <li>Fast Loading Speeds & Performance</li>
                <li>Secure & Scalable Architecture</li>
                <li>User-Friendly CMS Management</li>
              </ul>

              <h3>Technical Excellence</h3>
              <ul>
                <li>Next.js, React, Vue.js frameworks</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>API Integration</li>
                <li>Payment Gateway Integration</li>
                <li>Analytics & Tracking Setup</li>
              </ul>

              <h2 style={{ marginTop: '40px' }}>Why Choose Our Websites?</h2>
              <ul>
                <li>✓ Conversion-Focused Design</li>
                <li>✓ Mobile Responsive on All Devices</li>
                <li>✓ SEO-Optimized from Day One</li>
                <li>✓ Fast Loading Speeds</li>
                <li>✓ Secure & Reliable Hosting</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Launch Your Website</h3>
                <p>Get a professional, high-performing website built for your business.</p>
                <Link href="/booking" className="btn btn-primary">
                  Get a Quote
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I need professional website development."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Popular Solutions</h3>
                <ul>
                  <li>E-Commerce Stores</li>
                  <li>Company Websites</li>
                  <li>SaaS Platforms</li>
                  <li>Booking Systems</li>
                  <li>Membership Sites</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Development Process</h3>
                <ul>
                  <li>Requirements Analysis</li>
                  <li>Wireframing & Design</li>
                  <li>Development & Testing</li>
                  <li>Launch & Optimization</li>
                  <li>Ongoing Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready for Your New Website?</h2>
          <p>Let's create something that stands out</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Schedule Consultation
            </Link>
            <a href="tel:+919004246792" className="btn btn-outline">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
