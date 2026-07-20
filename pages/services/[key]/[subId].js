import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SERVICES_DATA, getServiceByKey, getAllSubServices } from '../../../lib/services-data';
import styles from '../../../styles/SubServiceDetail.module.css';

export default function SubServicePage({ service, subService, serviceKey }) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

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
          <Link href="/services">Services</Link>
          <span>/</span>
          <Link href={`/services/${serviceKey}`}>{service.name}</Link>
          <span>/</span>
          <span>{subService.name}</span>
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
          <div className={styles.mainContent}>
            <h2>Overview</h2>
            <p>{subService.description}</p>

            <h2 style={{ marginTop: '40px' }}>Key Features & Benefits</h2>
            <div className={styles.featuresList}>
              {subService.features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: '40px' }}>Why Choose This Service?</h2>
            <ul>
              <li>Expert implementation and support</li>
              <li>Customized to your specific needs</li>
              <li>Proven track record of success</li>
              <li>Ongoing optimization and improvement</li>
              <li>Competitive pricing and flexible terms</li>
            </ul>

            <h2 style={{ marginTop: '40px' }}>Implementation Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h4>Assessment</h4>
                <p>Analyze your requirements</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h4>Planning</h4>
                <p>Create implementation plan</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h4>Execution</h4>
                <p>Deploy the solution</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h4>Support</h4>
                <p>Ongoing maintenance</p>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.card}>
              <h3>Ready to Implement?</h3>
              <p>Get expert guidance on this service</p>
              <Link href="/booking" className="btn btn-primary">
                Book Now
              </Link>
              <a
                href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(subService.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '10px' }}
              >
                💬 WhatsApp
              </a>
            </div>

            <div className={styles.card}>
              <h3>Quick Facts</h3>
              <ul>
                <li>✓ Expert Team</li>
                <li>✓ Proven Solution</li>
                <li>✓ Fast Implementation</li>
                <li>✓ 24/7 Support</li>
                <li>✓ Custom Approach</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Benefits</h3>
              <ul>
                <li>Improved Efficiency</li>
                <li>Cost Reduction</li>
                <li>Better Insights</li>
                <li>Scalable Growth</li>
                <li>Competitive Edge</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Contact Us</h3>
              <p>📞 +91 9004246792</p>
              <p>📧 theallworkss@gmail.com</p>
              <p>💬 WhatsApp Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Transform Your Business Today</h2>
          <p>Schedule a free consultation and discover how {subService.name.toLowerCase()} can help</p>
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

  Object.entries(SERVICES_DATA).forEach(([serviceKey, service]) => {
    service.subServices.forEach((subService) => {
      paths.push({
        params: {
          key: serviceKey,
          subId: subService.id
        }
      });
    });
  });

  return {
    paths,
    fallback: 'blocking'
  };
}
