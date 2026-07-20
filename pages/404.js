import React from 'react';
import Link from 'next/link';
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container404}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>

        <div className={styles.suggestions}>
          <h3>Here are some helpful links instead:</h3>
          <div className={styles.links}>
            <Link href="/" className="btn btn-primary">
              🏠 Go Home
            </Link>
            <Link href="#services" className="btn btn-outline">
              📋 View Services
            </Link>
            <Link href="/booking" className="btn btn-secondary">
              📅 Book Consultation
            </Link>
          </div>
        </div>

        <p style={{ marginTop: '40px', color: 'var(--text-light)' }}>
          If you believe this is a mistake, please contact us at{' '}
          <a href="mailto:theallworkss@gmail.com">theallworkss@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
