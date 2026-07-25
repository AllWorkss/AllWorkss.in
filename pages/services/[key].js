import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SERVICES_DATA, getServiceByKey, getAllSubServices } from '../../lib/services-data';
import styles from '../../styles/ServiceDetail.module.css';

export default function ServicePage({ service, subServices, serviceKey }) {
  const [selectedSubService, setSelectedSubService] = useState(null);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919004246792';

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Head>
        <title>{service.name} - AllWorkss</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.name}, consulting, services`} />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h1>{service.name}</h1>
              <p className={styles.tagline}>{service.tagline}</p>
              <p className={styles.description}>{service.description}</p>
              <div className={styles.heroCTA}>
                <Link href={`/booking?service=${serviceKey}`} className="btn btn-primary">
                  📅 Book Consultation
                </Link>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            <div className={styles.heroEmoji}>
              {service.heroImage}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className={styles.highlightsSection}>
        <div className="container">
          <h2>Key Highlights</h2>
          <div className={styles.highlightsGrid}>
            {service.keyHighlights.map((highlight, idx) => (
              <div key={idx} className={styles.highlightCard}>
                <span className={styles.checkmark}>✓</span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Services */}
      {subServices.length > 0 && (
        <section className={styles.subServicesSection}>
          <div className="container">
            <h2>Our {service.name} Details</h2>
            <p className={styles.sectionSubtitle}>Comprehensive and custom solutions tailored to your organization</p>

            <div className={styles.subServicesGrid}>
              {subServices.map((subService) => (
                <Link href={`/services/${serviceKey}/${subService.id}`} key={subService.id} className={styles.subServiceCard}>
                  <h3>{subService.name}</h3>
                  <p>{subService.description}</p>
                  <div className={styles.featuresList}>
                    {subService.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <h2>Why Choose AllWorkss for {service.name}?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✓</div>
              <h4>Expert Lead</h4>
              <p>Direct guidance from founder Yasar Intakhab Khan</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✓</div>
              <h4>Custom Architectures</h4>
              <p>Designed precisely around your operational scale</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✓</div>
              <h4>Data & AI Driven</h4>
              <p>Enabling modern ML pipelines and analytics</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✓</div>
              <h4>Direct Support</h4>
              <p>Ongoing post-delivery updates and revisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's plan how {service.name.toLowerCase()} can drive operational excellence in your organization.</p>
          <div className={styles.ctaButtons}>
            <Link href={`/booking?service=${serviceKey}`} className="btn btn-accent">
              📅 Schedule Consultation
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

export async function getStaticProps({ params }) {
  const { key } = params;
  const service = getServiceByKey(key);
  const subServices = getAllSubServices(key);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: {
      service,
      subServices,
      serviceKey: key
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const services = Object.keys(SERVICES_DATA);
  const paths = services.map((key) => ({
    params: { key }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}
