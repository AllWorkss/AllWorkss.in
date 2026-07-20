import React from 'react';
import Link from 'next/link';
import styles from '../styles/ServiceCard.module.css';

export default function ServiceCard({ id, icon, title, description, features, whatsappMessage, className }) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`${styles.serviceCard} ${className || ''}`}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>

      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>

      {features && features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature, idx) => (
            <li key={idx}>
              <span className={styles.checkmark}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.actions}>
        <Link href="/booking" className="btn btn-primary" style={{ flex: 1 }}>
          Book Now
        </Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.whatsappBtn} btn`}>
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
