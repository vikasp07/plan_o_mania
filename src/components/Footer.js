import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  {
    href: "https://instagram.com/plan_o_mania",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://wa.me/918355846853", icon: FaWhatsapp, label: "WhatsApp" },
];

const quickLinks = [
  { to: "/events", text: "Our Services" },
  { to: "/gallery", text: "Gallery" },
  { to: "/vidhi", text: "Vidhi Services" },
  { to: "/contact", text: "Contact Us" },
];

const services = [
  { to: "/events", text: "Birthday Parties" },
  { to: "/events", text: "Corporate Events" },
  { to: "/vidhi", text: "Wedding Functions" },
  { to: "/events", text: "Festive Celebrations" },
];

const contactInfo = [
  { icon: FaMapMarkerAlt, content: <p>Ahmedabad, Gujarat</p> },
  {
    icon: FaPhoneAlt,
    content: <a href="tel:+918355846853">+91 83558 46853</a>,
  },
  {
    icon: FaEnvelope,
    content: <a href="mailto:info@planomania.com">info@planomania.com</a>,
  },
];

const bottomLinks = [
  { to: "/privacy", text: "Privacy Policy" },
  { to: "/terms", text: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="footer-info">
              <Link to="/" className="footer-logo mb-4">
                <img src="/logo.png" alt="Plan-O-Mania Logo" />
              </Link>
              <div className="social-links">
                {socialLinks.map(({ href, icon: Icon, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              {services.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="contact-info">
              {contactInfo.map(({ icon: Icon, content }, index) => (
                <li key={index}>
                  <Icon />
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
