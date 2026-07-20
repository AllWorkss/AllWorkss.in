import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const COMPANY_INFO = {
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
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
            <h3>AllWorkss Consultancy</h3>
            <p>Empowering entrepreneurs through strategic branding, smart digital integration, and innovative e-commerce solutions.</p>
            <div className={styles.socialLinks}>
              <a href={`https://wa.me/${COMPANY_INFO.phone}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <span>📱</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} title="Email">
                <span>✉️</span>
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
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="/booking">Book Consultation</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#sap-consulting">SAP Consulting</a>
              </li>
              <li>
                <a href="#web-development">Web Development</a>
              </li>
              <li>
                <a href="#data-analytics">Data Analytics</a>
              </li>
              <li>
                <a href="#cloud-management">Cloud Management</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
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
          <p>&copy; {currentYear} AllWorkss Consultancy. All rights reserved.</p>
          <p>
            Designed & Developed with ❤️ | <Link href="/terms">Terms of Service</Link> | <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
