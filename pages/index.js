import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const MAIN_SERVICES = [
  {
    id: 'full-stack-development',
    icon: '💻',
    title: 'Full Stack Development',
    description: 'Tailored software solutions to streamline operations, automate workflows, and enhance digital scalability.',
    features: ['Custom Applications', 'System Integration', 'Cloud-Ready Solutions', 'Scalable Architecture'],
    link: '/services/full-stack-development',
    whatsappMessage: 'Hi! I am interested in Full Stack Development services.',
  },
  {
    id: 'website-development',
    icon: '🌐',
    title: 'Website Development',
    description: 'High-performance, visually cohesive websites with seamless user experience and scalable infrastructure.',
    features: ['Responsive Design', 'SEO Optimized', 'E-commerce Ready', 'Mobile-First'],
    link: '/services/website-development',
    whatsappMessage: 'Hello! I need professional website development services.',
  },
  {
    id: 'data-visualization',
    icon: '📊',
    title: 'Data Visualization Reports',
    description: 'Transform raw data into clear, interactive, decision-ready reports using Power BI and Tableau.',
    features: ['Power BI Dashboards', 'Tableau Reports', 'Real-time Analytics', 'Custom Visualizations'],
    link: '/services/data-visualization',
    whatsappMessage: 'Hi! I need data visualization and reporting services.',
  },
  {
    id: 'business-analysis',
    icon: '📈',
    title: 'Business Analysis',
    description: 'Bridge data, strategy, and execution—ensuring every decision is backed by insight and aligned with growth.',
    features: ['SWOT Analysis', 'Process Optimization', 'Operational Efficiency', 'Risk Assessment'],
    link: '/services/business-analysis',
    whatsappMessage: 'Hi! I would like business analysis services.',
  },
  {
    id: 'business-intelligence',
    icon: '🧠',
    title: 'Business Intelligence',
    description: 'Turn raw data into actionable insights that drive smarter decisions and operational efficiency.',
    features: ['Customer Intelligence', 'Financial Intelligence', 'Operations Intelligence', 'Sales Analytics'],
    link: '/services/business-intelligence',
    whatsappMessage: 'Hello! I need business intelligence solutions.',
  },
  {
    id: 'inventory-management',
    icon: '📦',
    title: 'Inventory Management',
    description: 'Dual-mode system supporting both digital marketplace and physical product handling with real-time tracking.',
    features: ['Real-time Sync', 'Multi-Channel Support', 'Automated Alerts', 'Yarsa Store Integration'],
    link: '/services/inventory-management',
    whatsappMessage: 'Hi! I need inventory management solutions.',
  },
  {
    id: 'business-consultancy',
    icon: '💼',
    title: 'Business Consultancy',
    description: 'Strategic, operational, and digital guidance for startups, SMEs, and growth-stage ventures.',
    features: ['Strategy Consulting', 'Financial Planning', 'Operations Consulting', 'Market Entry'],
    link: '/services/business-consultancy',
    whatsappMessage: 'Hi! I would like business consultancy services.',
  },
  {
    id: 'promotion-branding',
    icon: '🎨',
    title: 'Promotion & Brand Building',
    description: 'End-to-end brand development and promotional strategies for manufacturing and digital enterprises.',
    features: ['Logo Design', 'Brand Strategy', 'Marketing Campaigns', 'Social Media Management'],
    link: '/services/promotion-branding',
    whatsappMessage: 'Hello! I am interested in brand building services.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AllWorkss - Full Stack Development, SAP & Business Solutions</title>
        <meta name="description" content="AllWorkss delivers full-stack development, SAP consulting, data analytics, and business solutions for startups and enterprises." />
        <meta name="keywords" content="full stack development, SAP consulting, web development, data analytics, business intelligence, inventory management" />
        <meta name="author" content="Yasar Intakhab Khan - AllWorkss" />
        <meta property="og:title" content="AllWorkss - Transform Your Business Digitally" />
        <meta property="og:description" content="Expert solutions in development, consulting, and digital transformation." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Your Partner in <span className={styles.highlight}>Digital Transformation</span>
              </h1>
              <p className={styles.heroSubtitle}>
                AllWorkss transforms raw business data, strategy, and technology into scalable, intelligent solutions that reshape industries and uplift communities.
              </p>
              <div className={styles.heroCTA}>
                <Link href="/booking" className="btn btn-primary">
                  📅 Schedule Consultation
                </Link>
                <a href="#services" className="btn btn-outline">
                  Explore Services →
                </a>
              </div>
              <div className={styles.stats}>
                <div>
                  <strong>50+</strong>
                  <p>Projects Delivered</p>
                </div>
                <div>
                  <strong>15+</strong>
                  <p>Years Experience</p>
                </div>
                <div>
                  <strong>100%</strong>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.illustrationBox}>
                <span className={styles.emoji}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.founderContent}>
            <div className={styles.founderImage}>
              <div className={styles.profileCard}>
                <div className={styles.placeholder}>👨‍💼</div>
                <h3>Yasar Intakhab Khan</h3>
                <p>Founder & Chief Strategist</p>
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
                <ul>
                  <li>Full Stack Development (Frontend, Backend, DevOps)</li>
                  <li>Data Science & Machine Learning</li>
                  <li>SAP & ERP Implementation</li>
                  <li>Cloud Architecture (AWS, GCP)</li>
                  <li>Business Intelligence & Analytics</li>
                  <li>Strategic Business Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Comprehensive Services</h2>
          <p className="section-subtitle">
            From software development to strategic consulting—AllWorkss delivers end-to-end solutions
          </p>

          <div className={styles.servicesGrid}>
            {MAIN_SERVICES.map((service) => (
              <Link href={service.link} key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.serviceFeatures}>
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx}>✓ {feature}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <button className="btn btn-primary" style={{ flex: 1 }}>
                    Learn More
                  </button>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=919004246792&text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappIcon}
                    onClick={(e) => e.preventDefault()}
                  >
                    💬
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <h2 className="section-title">Why Choose AllWorkss?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3>Strategic Focus</h3>
              <p>Every solution aligned with your business goals and growth trajectory</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🛠️</div>
              <h3>Full-Stack Expertise</h3>
              <p>Complete end-to-end solutions from concept to deployment and beyond</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>📊</div>
              <h3>Data-Driven</h3>
              <p>Decisions backed by insights, analytics, and proven methodologies</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🚀</div>
              <h3>Innovation First</h3>
              <p>Cutting-edge technologies and forward-thinking approaches</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>💼</div>
              <h3>Industry Experience</h3>
              <p>15+ years serving startups, SMEs, and enterprises</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.benefitIcon}>🤝</div>
              <h3>Partnership Mindset</h3>
              <p>We succeed when your business succeeds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how AllWorkss can drive your success</p>
            <div className={styles.ctaButtons}>
              <Link href="/booking" className="btn btn-primary">
                Book Free Consultation
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
