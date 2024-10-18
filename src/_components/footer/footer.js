"use client"

import styles from "./component.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <footer>
        <div className={styles.footer}>
          <h3>Questions or Concerns? Call 1800-678-2233</h3>
  
          <div className={styles.row}>
            <div className={styles.col}>
              <Link href="#">© 2024</Link>
              <Link href="#">Talenthub.com Global Limited.</Link>
            </div>
            <div className={styles.col}>
              <Link href="mailto: info@talentHub.com">info@talentHub.com</Link>
              <Link href="#">Corporate Information</Link>
            </div>
            <div className={styles.col}>
              <Link href="#">Legal Notice</Link>
              <Link href="#">Careers</Link>
            </div>
            <div className={styles.col}>
              <Link href="contact-us">Contact Us</Link>
              <Link href="#">Account</Link>
            </div>
          </div>
        </div>
      </footer>
    );
}