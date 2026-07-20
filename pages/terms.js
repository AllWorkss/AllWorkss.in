import React from 'react';
import Head from 'next/head';
import styles from '../styles/Legal.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - AllWorkss Consultancy</title>
        <meta name="description" content="Terms of service for AllWorkss Consultancy." />
      </Head>

      <div className={styles.legalContainer}>
        <div className="container">
          <h1>Terms of Service</h1>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software)
              on AllWorkss Consultancy's website for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2>3. Disclaimer</h2>
            <p>
              The materials on AllWorkss Consultancy's website are provided on an 'as is' basis.
              AllWorkss Consultancy makes no warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2>4. Limitations</h2>
            <p>
              In no event shall AllWorkss Consultancy or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on AllWorkss Consultancy's website,
              even if AllWorkss Consultancy or an authorized representative has been notified orally or in writing
              of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on AllWorkss Consultancy's website could include technical, typographical,
              or photographic errors. AllWorkss Consultancy does not warrant that any of the materials on its website
              are accurate, complete, or current. AllWorkss Consultancy may make changes to the materials contained
              on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2>6. Links</h2>
            <p>
              AllWorkss Consultancy has not reviewed all of the sites linked to its website and is not responsible
              for the contents of any such linked site. The inclusion of any link does not imply endorsement by
              AllWorkss Consultancy of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2>7. Modifications</h2>
            <p>
              AllWorkss Consultancy may revise these terms of service for its website at any time without notice.
              By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India,
              and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2>9. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
