import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/Home.module.css';

const SERVICES = [
  {
    id: 'sap-consulting',
    icon: '📊',
    title: 'SAP Consulting',
    description: 'Expert SAP business consulting for enterprise resource planning optimization and digital transformation.',
    features: [
      'SAP Implementation',
      'System Configuration',
      'Process Optimization',
      'Staff Training',
    ],
    whatsappMessage: 'Hi! I am interested in SAP Consulting services for our business.',
  },
  {
    id: 'web-development',
    icon: '🌐',
    title: 'Web & Software Development',
    description: 'Custom web and software solutions including e-commerce platforms, UI/UX design, and integration services.',
    features: [
      'E-commerce Solutions',
      'UI/UX Design',
      'Custom Development',
      'Platform Integration',
    ],
    whatsappMessage: 'Hello! I need web development and software solutions for my business.',
  },
  {
    id: 'business-consulting',
    icon: '💼',
    title: 'Business Consulting',
    description: 'Strategic business consulting for operations, finance, and competitive positioning.',
    features: [
      'Operations Consulting',
      'Financial Planning',
      'Strategy Development',
      'Market Analysis',
    ],
    whatsappMessage: 'Hi! I would like to discuss business consulting services.',
  },
  {
    id: 'cloud-management',
    icon: '☁️',
    title: 'Cloud Management',
    description: 'AWS and Google Cloud infrastructure management, optimization, and security.',
    features: [
      'Cloud Infrastructure',
      'Security & Compliance',
      'Cost Optimization',
      '24/7 Support',
    ],
    whatsappMessage: 'Hello! I need cloud management and infrastructure services.',
  },
  {
    id: 'data-analytics',
    icon: '📈',
    title: 'Data & Analytics',
    description: 'Business intelligence, data visualization, and advanced analytics for data-driven decisions.',
    features: [
      'Data Analytics',
      'BI Dashboards',
      'Data Visualization',
      'Predictive Analysis',
    ],
    whatsappMessage: 'Hi! I am interested in data analytics and business intelligence services.',
  },
  {
    id: 'inventory-management',
    icon: '📦',
    title: 'Inventory Management',
    description: 'Cloud-based inventory solutions for multi-location tracking and automated stock management.',
    features: [
      'Real-time Sync',
      'Multi-Location Tracking',
      'Automated Alerts',
      'Integration Ready',
    ],
    whatsappMessage: 'Hello! I need inventory management solutions for my business.',
  },
  {
    id: 'marketing-branding',
    icon: '🎨',
    title: 'Marketing & Branding',
    description: 'Complete branding, digital marketing, SEO, and social media management services.',
    features: [
      'Brand Identity',
      'SEO Optimization',
      'Social Media',
      'Content Creation',
    ],
    whatsappMessage: 'Hi! I am interested in marketing and branding services.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AllWorkss Consultancy - SAP & Business Solutions</title>
        <meta name="description" content="Professional SAP consulting, web development, and business solutions for entrepreneurs and enterprises." />
        <meta name="keywords" content="SAP, consulting, web development, business solutions, cloud management, data analytics" />
        <meta name="author" content="Yasar Intakhab Khan - AllWorkss Consultancy" />
        <meta property="og:title" content="AllWorkss Consultancy - Expert Business Solutions" />
        <meta property="og:description" content="Professional consulting and digital solutions for modern businesses." />
        <meta property="og:type" content="business.business" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Transform Your Business with <span className={styles.highlight}>Expert Solutions</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Strategic SAP consulting, digital transformation, and innovative business solutions for modern entrepreneurs and enterprises.
              </p>
              <div className={styles.heroCTA}>
                <Link href="/booking" className="btn btn-primary">
                  🎯 Book Free Consultation
                </Link>
                <a href="#services" className="btn btn-outline">
                  Explore Services →
                </a>
              </div>
              <div className={styles.stats}>
                <div>
                  <strong>50+</strong>
                  <p>Successful Projects</p>
                </div>
                <div>
                  <strong>15+</strong>
                  <p>Years Experience</p>
                </div>
                <div>
                  <strong>100%</strong>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.illustrationBox}>
                <span className={styles.emoji}>🚀</span>
                <div className={styles.floatingElements}>
                  <div className={styles.element1}>📊</div>
                  <div className={styles.element2}>💼</div>
                  <div className={styles.element3}>🌐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to meet your business needs and drive growth.
          </p>

          <div className="grid grid-3" style={{ marginTop: '50px' }}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>About AllWorkss Consultancy</h2>
              <p>
                <strong>AllWorkss (OPC) Pvt Ltd</strong> is a modern business solutions hub empowering entrepreneurs through strategic branding, smart digital integration, and innovative e-commerce tools.
              </p>
              <p>
                <strong>Founder & Lead Consultant:</strong> Yasar Intakhab Khan
              </p>
              <p>
                With a Master's degree in Data Science and IT, combined with extensive SAP business consulting expertise, we help businesses optimize operations, implement cutting-edge technology, and achieve sustainable growth.
              </p>
              <div className={styles.aboutStats}>
                <div>
                  <h4>Our Expertise</h4>
                  <ul>
                    <li>SAP ERP Systems</li>
                    <li>Cloud Solutions (AWS, GCP)</li>
                    <li>Data Science & Analytics</li>
                    <li>Web Development</li>
                    <li>Business Strategy</li>
                  </ul>
                </div>
                <div>
                  <h4>Our Values</h4>
                  <ul>
                    <li>Excellence & Quality</li>
                    <li>Customer Success</li>
                    <li>Innovation First</li>
                    <li>Transparency</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.certificateBox}>
                <div>🎓</div>
                <h3>Master's Degree</h3>
                <p>Data Science & IT</p>
              </div>
              <div className={styles.certificateBox}>
                <div>💼</div>
                <h3>SAP Certified</h3>
                <p>Business Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our solutions can help you achieve your goals.</p>
            <div className={styles.ctaButtons}>
              <Link href="/booking" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
                Schedule Consultation
              </Link>
              <a href="tel:+919004246792" className="btn btn-outline" style={{ fontSize: '1.1rem' }}>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
