import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import InquiryForm from "./InquiryForm";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            {/* Shorter, punchy heading */}
            <h1>Let's Create</h1>
            <p className="lead">
              Whether you have a specific vision or need creative inspiration,
              we’ll bring your event dreams to life.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <div className="section-header">
                <h2>Get in Touch</h2>
                <p className="section-subtitle">
                  Fill out the form below and our team will get back to you
                  within 24 hours to discuss your event requirements.
                </p>
              </div>
              <InquiryForm />
            </div>

            <div className="contact-info">
              <div className="quick-contact card">
                <h3>Connect With Us</h3>
                <div className="contact-links">
                  <a href="tel:+918355846853" className="contact-link">
                    <FaPhoneAlt className="icon" />
                    <div>
                      <strong>Phone</strong>
                      <span>+91 83558 46853</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918355846853"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <FaWhatsapp className="icon" />
                    <div>
                      <strong>WhatsApp</strong>
                      <span>Message us directly</span>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/plan_o_mania"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <FaInstagram className="icon" />
                    <div>
                      <strong>Instagram</strong>
                      <span>@plan_o_mania</span>
                    </div>
                  </a>
                </div>

                <div className="contact-features">
                  <div className="feature">
                    <FaMapMarkerAlt className="icon" />
                    <div>
                      <h4>Service Areas</h4>
                      <p>Mumbai and surrounding regions</p>
                    </div>
                  </div>

                  <div className="feature">
                    <FaClock className="icon" />
                    <div>
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                    </div>
                  </div>

                  <div className="feature">
                    <FaHandshake className="icon" />
                    <div>
                      <h4>Our Promise</h4>
                      <p>
                        Personalized planning, timely execution, and transparent
                        communication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-benefits">
            <div className="benefit-item">
              <h3>Personalized Service</h3>
              <p>
                Every event is unique — get customized solutions that match your
                vision and budget.
              </p>
            </div>

            <div className="benefit-item">
              <h3>Expert Team</h3>
              <p>
                Work with experienced professionals who understand planning and
                management.
              </p>
            </div>

            <div className="benefit-item">
              <h3>End-to-End Support</h3>
              <p>
                From concept to execution, we handle all aspects so you can
                enjoy the moment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
