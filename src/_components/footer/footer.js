
import styles from "./component.module.css";

export default function Header() {
    return (
        <footer>
        <div className={styles.footer}>
          <h2>Questions or Concerns? Call 1800-678-2233</h2>
  
          <div className={styles.row}>
            <div className={styles.col}>
              <a href="#">© 2024</a>
              <a href="#">Talenthub.com Global Limited.</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div className={styles.col}>
              <a href="mailto: info@talentHub.com">info@talentHub.com</a>
              <a href="#">Corporate Information</a>
              <a href="#">Investor Relations</a>
            </div>
            <div className={styles.col}>
              <a href="#">Help Center</a>
              <a href="#">Legal Notice</a>
              <a href="#">Privacy</a>
            </div>
            <div className={styles.col}>
              <a href="#">FAQ</a>
              <a href="#">Account</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    );
}