import React from "react";
import styles from "../Styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand & Address */}
        <div className={styles.section}>
          <h2 className={styles.logo}>CDSPL World</h2>
          <p>
            324 B
            <br />
            Sahara Shopping Center, Faizabad Road, Indira Nagar, Lucknow, 226016
            <br />
            India
            <br />
            Email:{" "}
            <a href="mailto:chhayaholidaysinfo@gmail.com">
              chhayaholidaysinfo@gmail.com
            </a>
            <br />
            Phone: 
    <span className={styles.phoneGroup}>
      <span className={styles.phoneIcon}><i className="fas fa-phone-alt"></i></span>
      <a href="tel:0522-4321718">0522-4321718</a>
    </span>
    <br />
    <span className={styles.phoneGroup}>
      <span className={styles.phoneIcon}><i className="fas fa-mobile-alt"></i></span>
      <a href="tel:+918090754036">+91-8090754036</a> / 
      <a href="tel:+918090754037">+91-8090754037</a> / 
      <a href="tel:+918090754038">+91-8090754038</a> / 
      <a href="tel:+918090754039">+91-8090754039</a>
    </span>
          </p>
        </div>
        {/* Quick Links */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Destinations</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.socials}>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className={`fab fa-facebook-f ${styles.icon}`}></i>
            </a> */}
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className={`fab fa-twitter ${styles.icon}`}></i>
            </a> */}
            <a
              href="https://www.instagram.com/cdsplworld"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className={`fab fa-instagram ${styles.icon}`}></i>
            </a>

            <a
              href="https://wa.me/918090754040" // yahan apna WhatsApp number dalen (country code ke saath, bina "+" ke)
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className={`fab fa-whatsapp ${styles.icon}`}></i>
            </a>

            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className={`fab fa-youtube ${styles.icon}`}></i>
            </a> */}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} CDSPL World. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
