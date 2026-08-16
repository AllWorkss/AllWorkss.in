import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../lib/portfolio-data';
import styles from '../styles/Portfolio.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Enterprise Software & Cloud Portfolio | AllWorkss Consultancy</title>
        <meta name="description" content="Discover AllWorkss' ecosystem of production-grade SaaS platforms, AI-driven intelligence suites, and microservices deployed on Google Cloud." />
        <meta name="keywords" content="AllWorkss portfolio, Cloud Run, FastAPI, Next.js SaaS, AI software, Indian SME intelligence" />
        <link rel="canonical" href="https://allworkss.in/portfolio" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://allworkss.in/portfolio" />
        <meta property="og:title" content="Enterprise Software & Cloud Portfolio - AllWorkss" />
        <meta property="og:description" content="Discover our ecosystem of high-performance SaaS platforms, data-driven intelligence suites, and scalable microservices." />
        <meta property="og:image" content="https://allworkss.in/logo.png" />
      </Head>

      <div className={styles.portfolioContainer}>
        {/* Hero Section */}
        <section className={styles.portfolioHero}>
          <div className="container">
            <motion.div 
              className={styles.portfolioHeroText}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className={styles.portfolioHeroTitle} variants={fadeInUp}>
                Enterprise Software & <span className={styles.highlight}>Cloud Infrastructure</span>
              </motion.h1>
              <motion.p className={styles.portfolioHeroSubtitle} variants={fadeInUp}>
                Discover our production-ready ecosystem of high-performance SaaS platforms, AI-driven intelligence suites, and scalable microservices deployed across Google Cloud Platform.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Grid Showcase */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.portfolioGrid}>
              {PORTFOLIO_DATA.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className={styles.portfolioCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div>
                      <h2 className={styles.cardTitle}>{item.name}</h2>
                      <p className={styles.cardTagline}>{item.tagline}</p>
                    </div>
                    <div>
                      <span className={`${styles.statusBadge} ${item.status === 'Production' ? styles.statusProduction : styles.statusBeta}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className={styles.cardDescription}>
                    {item.description}
                  </p>

                  <div className={styles.detailsGrid}>
                    <div className={styles.detailBox}>
                      <h4 className={styles.detailBoxTitle}>Technical Architecture</h4>
                      <p className={styles.detailText}><strong>Architecture:</strong> {item.architecture}</p>
                      <p className={styles.detailText}><strong>Infrastructure:</strong> {item.cloudInfrastructure}</p>
                      <div className={styles.techTags}>
                        {item.techStack.map(tech => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.detailBox}>
                      <h4 className={styles.detailBoxTitle}>Enterprise & Business Impact</h4>
                      <ul className={styles.impactList}>
                        {item.businessImpact.map((impact, idx) => (
                          <li key={idx} className={styles.impactItem}>
                            <span className={styles.checkIcon}>✓</span> {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div>
                      {item.liveDemoUrl !== '#' ? (
                        <a href={item.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          🌐 Launch Application
                        </a>
                      ) : (
                        <span className="btn btn-outline" style={{ opacity: 0.7, cursor: 'default' }}>
                          🔒 Enterprise Deployment
                        </span>
                      )}
                    </div>
                    <div className={styles.repoBadge}>
                      <span>📦 Repo:</span> <strong>{item.githubRepo}</strong>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
