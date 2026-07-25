import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SERVICES_DATA, getServiceByKey, getAllSubServices } from '../../../lib/services-data';
import styles from '../../../styles/SubServiceDetail.module.css';

export default function SubServicePage({ service, subService, serviceKey }) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919004246792';

  if (!service || !subService) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Head>
        <title>{subService.name} - {service.name} - AllWorkss</title>
        <meta name="description" content={subService.description} />
      </Head>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/services/${serviceKey}`}>{service.name}</Link>
          <span>/</span>
          <span className={styles.activeBreadcrumb}>{subService.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{subService.name}</h1>
          <p className={styles.subtitle}>{service.name}</p>
          <p className={styles.description}>{subService.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Overview</h2>
              <p>{subService.description}</p>

              <h2 style={{ marginTop: '40px' }}>Key Features & Offerings</h2>
              <div className={styles.featuresList}>
                {subService.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '40px' }}>Our Delivery Guarantee</h2>
              <ul className={styles.benefitsList}>
                <li>Expert execution directly supervised by founder Yasar Intakhab Khan</li>
                <li>Tailored and scalable architectures suited for long-term growth</li>
                <li>Comprehensive QA checks and post-deployment reviews</li>
                <li>Transparent timeline progression and milestone alerts</li>
                <li>Flexible and competitive pricing plans</li>
              </ul>

              <h2 style={{ marginTop: '40px' }}>Process Workflow</h2>
              <div className={styles.processSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <h4>Assessment</h4>
                  <p>Understand goals</p>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <h4>Planning</h4>
                  <p>Design blueprint</p>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <h4>Execution</h4>
                  <p>Deliver cleanly</p>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <h4>Support</h4>
                  <p>Maintain stack</p>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                <h3>Ready to Launch?</h3>
                <p>Schedule a consulting call to plan out the scope of {subService.name.toLowerCase()}.</p>
                <Link href={`/booking?service=${serviceKey}`} className="btn btn-primary btn-block" style={{ marginBottom: '12px' }}>
                  📅 Book Consultation
                </Link>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(subService.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-block"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  💬 WhatsApp Discuss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { key, subId } = params;
  const service = getServiceByKey(key);
  const subServices = getAllSubServices(key);
  const subService = subServices.find((s) => s.id === subId);

  if (!service || !subService) {
    return { notFound: true };
  }

  return {
    props: {
      service,
      subService,
      serviceKey: key
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = [];

  Object.entries(SERVICES_DATA).forEach(([key, service]) => {
    if (service.subServices) {
      service.subServices.forEach((subService) => {
        paths.push({
          params: { key, subId: subService.id }
        });
      });
    }
  });

  return {
    paths,
    fallback: 'blocking'
  };
}
