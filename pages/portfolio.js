import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../lib/portfolio-data';
import styles from '../styles/Home.module.css';

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
        <title>Our Portfolio & Cloud Infrastructure | AllWorkss Consultancy</title>
        <meta name="description" content="Explore AllWorkss' portfolio of enterprise software, cloud infrastructure, and AI-driven platforms deployed on Google Cloud." />
      </Head>

      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '4rem' }}>
        <section className={styles.hero} style={{ padding: '6rem 0 3rem' }}>
          <div className="container">
            <motion.div 
              className={styles.heroText}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}
            >
              <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                Enterprise Software & <span className={styles.highlight}>Cloud Infrastructure</span>
              </motion.h1>
              <motion.p className={styles.heroSubtitle} variants={fadeInUp} style={{ marginTop: '1.5rem' }}>
                Discover our ecosystem of high-performance SaaS platforms, data-driven intelligence suites, and scalable microservices deployed across Google Cloud.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {PORTFOLIO_DATA.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>{item.name}</h2>
                      <p style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>{item.tagline}</p>
                    </div>
                    <div>
                      <span style={{ 
                        background: item.status === 'Production' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: item.status === 'Production' ? '#34d399' : '#fbbf24',
                        padding: '0.4rem 1rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        border: `1px solid ${item.status === 'Production' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(251, 191, 36, 0.3)'}`
                      }}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Technical Architecture</h4>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Architecture:</strong> {item.architecture}</p>
                      <p style={{ color: 'var(--text-secondary)' }}><strong>Infrastructure:</strong> {item.cloudInfrastructure}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                        {item.techStack.map(tech => (
                          <span key={tech} style={{ background: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Enterprise Impact</h4>
                      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {item.businessImpact.map((impact, idx) => (
                          <li key={idx} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>✓</span> {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    {item.liveDemoUrl !== '#' && (
                      <a href={item.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        🌐 Live Demo
                      </a>
                    )}
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '0.5rem' }}>📦</span> {item.githubRepo}
                    </span>
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
