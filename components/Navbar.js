import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logoContainer}>
            <img src="/logo.png" alt="AllWorkss Logo" className={styles.logoImage} />
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoText}>AllWorkss</span>
              <span className={styles.logoSubtext}>Consultancy</span>
            </div>
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }}></span>
          </button>

          <ul className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>Book Appointment</Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>

          <div className={styles.navCTA}>
            <Link href="/booking" className="btn btn-primary">
              📅 Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
