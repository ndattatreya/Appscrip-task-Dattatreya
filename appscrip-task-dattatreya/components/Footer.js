import styles from "../styles/footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className={styles.footer}>
      {/* TOP */}
      <div className={styles.top}>
        <div>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>

          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className={styles.currencyTitle}>CURRENCY</h4>
          <div className={styles.currency}>
            <img src="/images/usFLAG.png" alt="USD currency" />
            <span>USD</span>
          </div>

          <p className={styles.note}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <div className={styles.section}>
          <h5 onClick={() => toggleSection('about')} className={styles.dropdownHeader}>
            mettā muse <span className={styles.arrow}>{openSections.about ? '▲' : '▼'}</span>
          </h5>
          <div className={`${styles.links} ${openSections.about ? styles.open : ''}`}>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
        </div>

        <div className={styles.section}>
          <h5 onClick={() => toggleSection('links')} className={styles.dropdownHeader}>
            QUICK LINKS <span className={styles.arrow}>{openSections.links ? '▲' : '▼'}</span>
          </h5>
          <div className={`${styles.links} ${openSections.links ? styles.open : ''}`}>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className={styles.section}>
          <h5 onClick={() => toggleSection('follow')} className={styles.dropdownHeader}>
            FOLLOW US <span className={styles.arrow}>{openSections.follow ? '▲' : '▼'}</span>
          </h5>
          <div className={`${styles.links} ${openSections.follow ? styles.open : ''}`}>
            <div className={styles.socials}>
              <img src="/images/Insta.png" alt="Instagram" />
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h5 onClick={() => toggleSection('accepts')} className={styles.dropdownHeader}>
            mettā muse ACCEPTS <span className={styles.arrow}>{openSections.accepts ? '▲' : '▼'}</span>
          </h5>
          <div className={`${styles.links} ${openSections.accepts ? styles.open : ''}`}>
            <div className={styles.payments}>
              <img src="/images/g-pay.png" alt="Google Pay" />
              <img src="/images/mastercard.png" alt="Mastercard" />
              <img src="/images/paypal.png" alt="PayPal" />
              <img src="/images/amex.png" alt="American Express" />
              <img src="/images/a-pay.png" alt="Apple Pay" />
              <img src="/images/d-pay.png" alt="Diners Club" />
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copy}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
