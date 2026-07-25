import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SERVICES_DATA } from '../lib/services-data';
import styles from '../styles/Booking.module.css';

// Dynamically generate services list from the single source of truth SERVICES_DATA
const SERVICES = Object.entries(SERVICES_DATA).map(([key, val]) => ({
  id: key,
  name: val.name.replace(' Services', ''), // clean up the title for form options
  duration: key.includes('consult') || key.includes('analysis') ? '60 mins' : '90 mins'
}));

const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
];

export default function BookingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pre-fill service type if passed in query string (e.g. /booking?service=software-development)
  useEffect(() => {
    if (router.isReady && router.query.service) {
      const serviceQuery = router.query.service;
      if (SERVICES.some(s => s.id === serviceQuery)) {
        setFormData(prev => ({
          ...prev,
          service: serviceQuery
        }));
      }
    }
  }, [router.isReady, router.query.service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          date: '',
          time: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedService = SERVICES.find((s) => s.id === formData.service);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919004246792';
  const whatsappMessage = `Hi Yasar! I would like to book a consultation for ${selectedService?.name || 'AllWorkss services'}. Here are my details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nMessage: ${formData.message}`;

  return (
    <>
      <Head>
        <title>Book Consultation - AllWorkss</title>
        <meta name="description" content="Schedule a free consultation with our expert consultants." />
        <meta name="keywords" content="booking, consultation, schedule, appointment" />
      </Head>

      <section className={styles.bookingSection}>
        <div className="container">
          <div className={styles.bookingContent}>
            {/* Left Side - Info */}
            <div className={styles.bookingInfo}>
              <h1>Book Your Consultation</h1>
              <p>Schedule an appointment with our lead architect, Yasar Intakhab Khan, to analyze your tech stack, system requirements, or business roadmap.</p>

              <div className={styles.infoBox}>
                <h3>Why Consult With Us?</h3>
                <ul>
                  <li>
                    <span className={styles.icon}>✓</span> Direct session with Owner & Founder Yasar Intakhab Khan
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Strategic architecture & AI/ML integration advice
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Comprehensive project scoping & pricing clarity
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Clean roadmap for digital conversion & SAP execution
                  </li>
                </ul>
              </div>

              <div className={styles.contactBox}>
                <h4>Need Immediate Help?</h4>
                <p>Reach out directly via phone or WhatsApp for quick response times:</p>
                <a href="tel:+919004246792" className="btn btn-outline" style={{ display: 'flex', width: '100%', marginBottom: '12px', justifyContent: 'center' }}>
                  📞 Call +91 9004246792
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hi%20Yasar!%20I%20would%20like%20to%20book%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  💬 WhatsApp Now
                </a>
              </div>

              <div className={styles.availability}>
                <h4>Business Hours</h4>
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (IST)
                </p>
                <p>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM (IST)
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className={styles.bookingForm}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Appointment Requested!</h3>
                  <p>Thank you for choosing AllWorkss. We have received your booking details.</p>
                  <p>Our founder Yasar Intakhab Khan will get in touch with you shortly to confirm the scheduled slot.</p>
                  <Link href="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
                    Return Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@company.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +91 9004246792"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your organization"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Type *</label>
                    <select name="service" id="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Choose a service to book</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="date">Preferred Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="time">Preferred Time *</label>
                      <select name="time" id="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Select time slot</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message / Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Yasar about your project or consultation goal..."
                      rows="4"
                    />
                  </div>

                  <button type="submit" className="btn btn-accent btn-block" disabled={loading}>
                    {loading ? 'Submitting...' : '📅 Schedule Appointment'}
                  </button>

                  {formData.name && formData.email && formData.phone && formData.service && formData.date && formData.time && (
                    <a
                      href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappSubmitBtn}
                    >
                      💬 Quick Confirm via WhatsApp
                    </a>
                  )}

                  <p className={styles.requiredNote}>* Fields marked with asterisks are required</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
