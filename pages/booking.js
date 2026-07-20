import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Booking.module.css';

const SERVICES = [
  { id: 'sap-consulting', name: 'SAP Consulting', duration: '60 mins' },
  { id: 'web-development', name: 'Web Development', duration: '90 mins' },
  { id: 'business-consulting', name: 'Business Consulting', duration: '60 mins' },
  { id: 'cloud-management', name: 'Cloud Management', duration: '60 mins' },
  { id: 'data-analytics', name: 'Data & Analytics', duration: '60 mins' },
  { id: 'inventory-management', name: 'Inventory Management', duration: '60 mins' },
  { id: 'marketing-branding', name: 'Marketing & Branding', duration: '60 mins' },
];

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
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedService = SERVICES.find((s) => s.id === formData.service);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = `Hi! I would like to book a consultation for ${selectedService?.name || 'your services'}. Here are my details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}`;

  return (
    <>
      <Head>
        <title>Book Consultation - AllWorkss Consultancy</title>
        <meta name="description" content="Schedule a free consultation with our expert consultants." />
        <meta name="keywords" content="booking, consultation, schedule, appointment" />
      </Head>

      <section className={styles.bookingSection}>
        <div className="container">
          <div className={styles.bookingContent}>
            {/* Left Side - Info */}
            <div className={styles.bookingInfo}>
              <h1>Book Your Consultation</h1>
              <p>Schedule a free consultation with our expert consultants and discuss your business needs.</p>

              <div className={styles.infoBox}>
                <h3>Why Book With Us?</h3>
                <ul>
                  <li>
                    <span className={styles.icon}>✓</span> Free initial consultation
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Expert consultants with 15+ years experience
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Flexible scheduling options
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Personalized solutions
                  </li>
                  <li>
                    <span className={styles.icon}>✓</span> Quick response time
                  </li>
                </ul>
              </div>

              <div className={styles.contactBox}>
                <h4>Can't Wait?</h4>
                <p>Contact us directly:</p>
                <a href="tel:+919004246792" className="btn btn-primary">
                  📞 Call Us
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hi!%20I%20would%20like%20to%20book%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  💬 WhatsApp Us
                </a>
              </div>

              <div className={styles.availability}>
                <h4>Hours of Operation</h4>
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
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
                  <h3>Consultation Booked Successfully!</h3>
                  <p>Thank you for booking with us. We've sent a confirmation email to your inbox.</p>
                  <p>Our team will reach out to you shortly to confirm the appointment details.</p>
                  <Link href="/" className="btn btn-primary">
                    Back to Home
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
                      placeholder="Your full name"
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
                      placeholder="your@email.com"
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
                      placeholder="+91 XXXXX XXXXX"
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
                      placeholder="Your company name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Type *</label>
                    <select name="service" id="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Select a service</option>
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
                        <option value="">Select time</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements..."
                      rows="4"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Booking...' : '📅 Confirm Booking'}
                  </button>

                  {selectedService && formData.date && formData.time && (
                    <a
                      href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappSubmitBtn}
                    >
                      💬 Send via WhatsApp
                    </a>
                  )}

                  <p className={styles.requiredNote}>* Required fields</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
