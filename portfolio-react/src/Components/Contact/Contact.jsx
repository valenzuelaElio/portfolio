
import React, { useState } from 'react';
import './Contact.css';

import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  const [result, setResult] = useState('');
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setResult('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      'access_key',
      '92f1fdfa-cd31-4ada-9e5a-e40f6428555b'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setResult('success');
        form.reset();
      } else {
        setResult('error');
      }
    } catch (error) {
      setResult('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>{t('NavBar_ContactMe')}</h1>
      </div>

      <div className="contact-grid">
        {/* Información de contacto */}
        <div className="contact-card-wrapper contact-info-wrapper">
          <div className="contact-card-shadow" />

          <div className="contact-card contact-info">
            <span className="contact-eyebrow">{t("contact_get_in_touch")}</span>

            <h2>{t('contact_talk')}</h2>

            <p className="contact-description">
              {t('contact_status')}
            </p>

            <div className="contact-details">
              <a
                className="contact-detail"
                href="mailto:valenzuela.eliogd@gmail.com"
              >
                <FaEnvelope />
                <span>valenzuela.eliogd@gmail.com</span>
              </a>

              <a
                className="contact-detail"
                href="tel:+56962514590"
              >
                <FaPhoneAlt />
                <span>+56 9 6251 4590</span>
              </a>

              <div className="contact-detail">
                <FaMapMarkerAlt />
                <span>Talca, Chile</span>
              </div>
            </div>

            <div className="contact-availability">
              <span className="contact-status-dot" />
              {t("contact_availibity")}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact-card-wrapper contact-form-wrapper">
          <div className="contact-card-shadow" />

          <form onSubmit={onSubmit} className="contact-card contact-form">
            <div className="contact-form-heading">
              <h2>{t("contact_send")}</h2>
              <FaPaperPlane />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-name">
                {t('contact_your_name')}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t('contact_name_placeholder')}
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                {t('contact_your_email')}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t('contact_email_placeholder')}
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                {t('contact_your_message')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder={t('contact_text_placeholder')}
                required
              />
            </div>

            <div className="contact-submit-wrapper">
              <div className="contact-submit-shadow" />

              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : t('contact_send')}
                <FaPaperPlane />
              </button>
            </div>

            {result === 'success' && (
              <p className="contact-result success" role="status">
                Message sent successfully!
              </p>
            )}

            {result === 'error' && (
              <p className="contact-result error" role="alert">
                Could not send the message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
