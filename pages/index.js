import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../lib/services-data';
import styles from '../styles/Home.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const MAIN_SERVICES = Object.entries(SERVICES_DATA).map(([key, service]) => ({
  id: key,
  icon: service.icon,
  title: service.name,
  description: service.description,
  features: service.keyHighlights,
  link: `/services/${key}`,
  whatsappMessage: service.whatsappMessage,
  tagline: service.tagline,
}));

export default function Home() {
  return (
    <>
      <Head>
        <title>YARSA AllWorkss (OPC) Pvt Ltd - Premium Cloud Solutions, SAP & AI/ML Consulting</title>
        <meta name="description" content="YARSA AllWorkss (OPC) Private Limited delivers premium cloud architecture, SAP ERP implementation, custom software development, and AI/ML consulting led by Yasar Intakhab Khan." />
        <meta name="keywords" content="YARSA ALLWORKSS, OPC PRIVATE LIMITED, full stack development, SAP consulting, web development, data analytics, business intelligence, cloud architecture, AI consultant, Thane Maharashtra" />
        <meta name="author" content="Yasar Intakhab Khan - AllWorkss" />
        <link rel="canonical" href="https://allworkss.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://allworkss.in/" />
        <meta property="og:title" content="YARSA AllWorkss - Transform Your Business Digitally" />
        <meta property="og:description" content="Expert solutions in full stack development, SAP ERP consulting, cloud architecture, and AI/ML by YARSA AllWorkss (OPC) Private Limited." />
        <meta property="og:image" content="https://allworkss.in/logo.png" />
        <meta property="og:site_name" content="AllWorkss Consultancy" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://allworkss.in/" />
        <meta property="twitter:title" content="YARSA AllWorkss - Transform Your Business Digitally" />
        <meta property="twitter:description" content="Expert solutions in full stack development, SAP ERP consulting, cloud architecture, and AI/ML." />
        <meta property="twitter:image" content="https://allworkss.in/logo.png" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div 
              className={styles.heroText}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                High-Performance <span className={styles.highlight}>Digital Solutions</span> & Consultancy
              </motion.h1>
              <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
                AllWorkss transforms raw business data, complex architecture, and AI models into highly scalable, intelligent solutions that power enterprise success.
              </motion.p>
              <motion.div className={styles.heroCTA} variants={fadeInUp}>
                <Link href="/booking" className="btn btn-primary">
                  📅 Schedule Consultation
                </Link>
                <Link href="/portfolio" className="btn btn-outline">
                  View Portfolio →
                </Link>
              </motion.div>
              <motion.div className={styles.stats} variants={fadeInUp}>
                <div className={styles.statsItem}>
                  <strong className={styles.statsNumber}>50+</strong>
                  <span className={styles.statsLabel}>Projects Delivered</span>
                </div>
                <div className={styles.statsItem}>
                  <strong className={styles.statsNumber}>15+</strong>
                  <span className={styles.statsLabel}>Years Experience</span>
                </div>
                <div className={styles.statsItem}>
                  <strong className={styles.statsNumber}>100%</strong>
                  <span className={styles.statsLabel}>Success Rate</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className={styles.heroImageContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.heroGlobe}>
                <img src="/logo.png" alt="AllWorkss Logo" className={styles.heroGlobeImage} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className={styles.founderSection} id="about">
        <div className="container">
          <div className={styles.founderContent}>
            <div className={styles.founderImage}>
              <div className={styles.profileCard}>
                <div className={styles.avatarContainer}>👨‍💼</div>
                <h3 className={styles.founderName}>Yasar Intakhab Khan</h3>
                <p className={styles.founderTitle}>Founder & CEO</p>
                <div className={styles.founderMeta}>
                  <span>💼 SAP Business Consultant</span>
                  <span>🎓 M.Sc. Data Science & IT</span>
                </div>
              </div>
            </div>
            <div className={styles.founderText}>
              <h2>Meet the Visionary Behind AllWorkss</h2>
              <p>
                Yasar Intakhab Khan is a Full Stack Developer, Data Scientist, Business Strategist, AI/ML Consultant, and Cloud Architect with a Master's degree in Data Science and IT.
              </p>
              <p>
                With 15+ years of expertise in digital consultancy, product cataloging, AI/ML integration, and cloud architecture, Yasar founded AllWorkss to deliver scalable, intelligent solutions that serve both business and nation.
              </p>
              <div className={styles.expertise}>
                <h4>Core Expertise:</h4>
                <ul className={styles.expertiseList}>
                  <li className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>✓</span> Full Stack Development (Frontend, Backend, DevOps)
                  </li>
                  <li className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>✓</span> Data Science & Machine Learning Integration
                  </li>
                  <li className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>✓</span> SAP & ERP Business Processes
                  </li>
                  <li className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>✓</span> Cloud Infrastructure (AWS, GCP, Railway)
                  </li>
                  <li className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>✓</span> Business Intelligence & Big Data Analytics
                  </li>
                  <li className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>✓</span> Strategic Enterprise Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">
            From modern cloud architectures to custom ERP implementations, we design robust software pipelines aligned to your business growth.
          </p>

          <motion.div 
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {MAIN_SERVICES.map((service) => (
              <motion.div key={service.id} className={styles.serviceCard} variants={fadeInUp}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.serviceHighlights}>
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>✓</span> {feature}
                    </span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <Link href={`/booking?service=${service.id}`} className="btn btn-primary">
                    Book Session
                  </Link>
                  <Link href={service.link} className="btn btn-outline" style={{ flexGrow: 0, padding: '10px 14px' }}>
                    Detail
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=919004246792&text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappIcon}
                    title="Send message on WhatsApp"
                  >
                    💬
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <h2 className="section-title">Why Choose AllWorkss?</h2>
          <p className="section-subtitle">We merge cutting-edge technology stacks with real-world enterprise business vision.</p>
          <motion.div 
            className={styles.benefitsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className={styles.benefitCard} variants={scaleUp}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3>Strategic Focus</h3>
              <p>Every line of code and structural deployment is aligned with your business roadmap and ROI.</p>
            </motion.div>
            <motion.div className={styles.benefitCard} variants={scaleUp}>
              <div className={styles.benefitIcon}>🛠️</div>
              <h3>Full-Stack Expertise</h3>
              <p>Complete end-to-end capabilities spanning frontend engineering, robust APIs, and cloud deployments.</p>
            </motion.div>
            <motion.div className={styles.benefitCard} variants={scaleUp}>
              <div className={styles.benefitIcon}>📊</div>
              <h3>Data-Driven Solutions</h3>
              <p>Decisions backed by state-of-the-art data collection, predictive ML models, and analytics dashboards.</p>
            </motion.div>
            <motion.div className={styles.benefitCard} variants={scaleUp}>
              <div className={styles.benefitIcon}>🚀</div>
              <h3>Innovation First</h3>
              <p>Continuous integration of AI and smart features to keep you ahead of the digital curve.</p>
            </motion.div>
            <motion.div className={styles.benefitCard} variants={scaleUp}>
              <div className={styles.benefitIcon}>💼</div>
              <h3>15+ Years Experience</h3>
              <p>Proven execution across complex custom systems, corporate platforms, and cloud integrations.</p>
            </motion.div>
            <motion.div className={styles.benefitCard} variants={scaleUp}>
              <div className={styles.benefitIcon}>🤝</div>
              <h3>Partnership Mindset</h3>
              <p>We work as your remote CTO/developer partner, dedicating our resources to your sustained success.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="section" style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Discover Our Cloud Infrastructure & Software Portfolio</h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            We don't just consult; we build. Explore our ecosystem of production-ready SaaS platforms, AI-driven intelligence suites, and scalable microservices deployed on Google Cloud.
          </p>
          <Link href="/portfolio" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            🚀 View Enterprise Portfolio
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Schedule a consult directly with founder Yasar Intakhab Khan to outline your technical or operational scope.</p>
            <div className={styles.ctaButtons}>
              <Link href="/booking" className="btn btn-accent">
                📅 Book Free Consultation
              </Link>
              <a href="tel:+919004246792" className="btn btn-outline">
                📞 Call +91 9004246792
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
