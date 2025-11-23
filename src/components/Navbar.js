import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Vidhi", path: "/vidhi" }, // removed trailing space
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const toggleDropdown = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsDropdownOpen((s) => !s);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`main-header ${isScrolled ? "scrolled" : ""}`}
      aria-hidden={false}
    >
      <div className="navbar-container">
        {/* Left Menu */}
        <nav className="nav-left" aria-label="Primary left navigation">
          <ul>
            {mainLinks.slice(0, 2).map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="nav-logo" aria-label="Logo">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src="/logo.png"
              alt="Plan-O-Mania Logo"
              className="nav-logo-img"
            />
          </Link>
        </div>

        {/* Right Menu */}
        <nav className="nav-right" aria-label="Primary right navigation">
          <ul>
            <li className="dropdown-root">
              <NavLink
                to="/events"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {/* use inline-flex and glyph so spacing is controlled by CSS gap */}
                <span className="nav-link-inner">
                  Our Services
                  <span className="chevron" aria-hidden="true">
                    ▾
                  </span>
                </span>
              </NavLink>
            </li>

            {mainLinks.slice(2).map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {/* keep consistent inner span so gap/align works */}
                  <span className="nav-link-inner">{link.name}</span>
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="contact-btn"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {mainLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} onClick={handleLinkClick}>
                {link.name}
              </NavLink>
            </li>
          ))}

          <li style={{ paddingTop: 12 }}>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="contact-btn"
              style={{ display: "inline-block" }}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
