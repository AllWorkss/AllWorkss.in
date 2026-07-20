import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ServiceDetail.module.css';

export default function FullStackDevelopment() {
  return (
    <>
      <Head>
        <title>Full Stack Development Services - AllWorkss</title>
        <meta name="description" content="Custom full-stack development services covering frontend, backend, and DevOps. Build scalable applications with AllWorkss." />
      </Head>

      <section className={styles.serviceHero}>
        <div className="container">
          <h1>Full Stack Development Services</h1>
          <p>Tailored software solutions to streamline operations, automate workflows, and enhance digital scalability</p>
        </div>
      </section>

      <section className={styles.serviceContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>What We Offer</h2>
              <p>
                AllWorkss delivers comprehensive full-stack development services that cover every layer of your application—from sleek user interfaces to robust backend systems and optimized deployment pipelines.
              </p>

              <h3>Frontend Development</h3>
              <ul>
                <li>React, Vue.js, and modern JavaScript frameworks</li>
                <li>Responsive and mobile-first design</li>
                <li>Progressive Web Applications (PWAs)</li>
                <li>Performance optimization</li>
                <li>State management solutions</li>
              </ul>

              <h3>Backend Development</h3>
              <ul>
                <li>Node.js, Python, and enterprise frameworks</li>
                <li>RESTful APIs and GraphQL</li>
                <li>Database design and optimization</li>
                <li>Authentication and security</li>
                <li>Scalable microservices architecture</li>
              </ul>

              <h3>DevOps & Deployment</h3>
              <ul>
                <li>Docker containerization</li>
                <li>Kubernetes orchestration</li>
                <li>CI/CD pipeline setup</li>
                <li>Cloud deployment (AWS, GCP, Azure)</li>
                <li>Monitoring and analytics</li>
              </ul>

              <h3>Key Features</h3>
              <ul>
                <li>✓ Custom Applications designed for your business</li>
                <li>✓ Seamless System Integration with existing tools</li>
                <li>✓ Cloud-Ready Solutions with scalability</li>
                <li>✓ Enterprise-Grade Architecture</li>
                <li>✓ 24/7 Support and Maintenance</li>
              </ul>

              <h2 style={{ marginTop: '40px' }}>Our Process</h2>
              <div className={styles.processSteps}>
                <div className={styles.step}>
                  <h4>1. Discovery & Planning</h4>
                  <p>Understanding your requirements, goals, and technical constraints</p>
                </div>
                <div className={styles.step}>
                  <h4>2. Design & Architecture</h4>
                  <p>Creating scalable, maintainable system design</p>
                </div>
                <div className={styles.step}>
                  <h4>3. Development</h4>
                  <p>Building robust, well-tested code with agile methodology</p>
                </div>
                <div className={styles.step}>
                  <h4>4. Testing & QA</h4>
                  <p>Comprehensive testing for quality and performance</p>
                </div>
                <div className={styles.step}>
                  <h4>5. Deployment</h4>
                  <p>Seamless launch with minimal downtime</p>
                </div>
                <div className={styles.step}>
                  <h4>6. Support</h4>
                  <p>Ongoing maintenance, updates, and optimization</p>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Ready to Build?</h3>
                <p>Get your custom application developed by our expert team.</p>
                <Link href="/booking" className="btn btn-primary">
                  Request Consultation
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919004246792&text=Hi! I am interested in Full Stack Development services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  💬 WhatsApp Us
                </a>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Technologies We Use</h3>
                <ul>
                  <li>React, Vue.js, Angular</li>
                  <li>Node.js, Python, Java</li>
                  <li>PostgreSQL, MongoDB</li>
                  <li>AWS, GCP, Docker</li>
                  <li>And more...</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Why AllWorkss?</h3>
                <ul>
                  <li>✓ 15+ Years Experience</li>
                  <li>✓ Expert Team</li>
                  <li>✓ Agile Methodology</li>
                  <li>✓ Quality Assured</li>
                  <li>✓ Post-Launch Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Transform Your Ideas Into Reality</h2>
          <p>Let's build something amazing together</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className="btn btn-primary">
              Start Your Project
            </Link>
            <a href="tel:+919004246792" className="btn btn-outline">
              Call +91 9004246792
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
