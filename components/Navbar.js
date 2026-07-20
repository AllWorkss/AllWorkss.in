import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>AllWorkss</span>
            <span className={styles.logoSubtext}>Consultancy</span>
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="/booking">Book Consultation</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          <Link href="/booking" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
