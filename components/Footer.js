import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const COMPANY_INFO = {
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '9004246792',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'theallworkss@gmail.com',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Mumbai, Maharashtra, India',
  cin: 'U70200MH2024OPC428841',
  gstin: '27AABCY875P1Z9',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogoContainer}>
              <img src="/logo.png" alt="AllWorkss Logo" className={styles.footerLogo} />
              <h3>AllWorkss</h3>
            </div>
            <p>Empowering startups and enterprises through premium software architecture, strategic SAP consulting, and data-driven intelligence.</p>
            <div className={styles.socialLinks}>
              <a href={`https://wa.me/91${COMPANY_INFO.phone}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <span>💬</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} title="Email">
                <span>✉️</span>
              </a>
              <a href={`tel:+91${COMPANY_INFO.phone}`} title="Call Us">
                <span>📞</span>
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#about">About Founder</Link>
              </li>
              <li>
                <Link href="/booking">Book Appointment</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="/services/software-development">Software Development</Link>
              </li>
              <li>
                <Link href="/services/website-development">Website Development</Link>
              </li>
              <li>
                <Link href="/services/data-visualization">Data Visualization</Link>
              </li>
              <li>
                <Link href="/services/business-consultancy">Business Consultancy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Details</h4>
            <div className={styles.contactInfo}>
              <p>
                <strong>Phone:</strong> +91 {COMPANY_INFO.phone}
              </p>
              <p>
                <strong>Email:</strong> {COMPANY_INFO.email}
              </p>
              <p>
                <strong>Address:</strong> {COMPANY_INFO.address}
              </p>
              <p>
                <strong>CIN:</strong> {COMPANY_INFO.cin}
              </p>
              <p>
                <strong>GSTIN:</strong> {COMPANY_INFO.gstin}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} AllWorkss. All rights reserved.</p>
          <p>
            Designed & Developed by <a href="#about">Yasar Intakhab Khan</a> | <Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
