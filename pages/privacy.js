import React from 'react';
import Head from 'next/head';
import styles from '../styles/Legal.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - AllWorkss Consultancy</title>
        <meta name="description" content="Privacy policy for AllWorkss Consultancy." />
      </Head>

      <div className={styles.legalContainer}>
        <div className="container">
          <h1>Privacy Policy</h1>

          <section>
            <h2>1. Introduction</h2>
            <p>
              AllWorkss Consultancy ("we", "us", "our", or "Company") operates the www.allworkss.in website
              (the "Service"). This page informs you of our policies regarding the collection, use, and
              disclosure of personal data when you use our Service and the choices you have associated with
              that data.
            </p>
          </section>

          <section>
            <h2>2. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

            <h3>Types of Data Collected:</h3>
            <ul>
              <li>
                <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to contact or identify you ("Personal
                Data"). This may include, but is not limited to:
                <ul>
                  <li>Name and Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Service preferences</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on how the Service is accessed
                and used ("Usage Data"). This may include information such as your computer's Internet
                Protocol address (e.g. IP address), browser type, browser version, the pages of our Service
                that you visit, the time and date of your visit, and other diagnostic data.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Use of Data</h2>
            <p>AllWorkss Consultancy uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical and security issues</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies</h2>
            <p>
              Our Service uses cookies (small files placed on your device) to enhance your experience.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              If you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2>5. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over
              the Internet or method of electronic storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: theallworkss@gmail.com</li>
              <li>By phone: +91 9004246792</li>
              <li>By address: Shop 19, Noori Bella Vista, Mumbra, Mumbai, Maharashtra 400612</li>
            </ul>
          </section>

          <p style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
            Last updated: July 20, 2026
          </p>
        </div>
      </div>
    </>
  );
}
