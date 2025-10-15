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
            Phone: <a href="tel:0522-4321718">0522-4321718</a>
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
