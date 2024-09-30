"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {

  const router = useRouter();
  const navigateToCheckout = () => {
    router.push('/payment');
  }

  return (
      <div className={styles.content}>
        <main>
          <div className={styles.title}> 
            <h1>GET IN TOUCH</h1>
          </div>
          <div className={styles.phone_tile}>
            <div>
              <p>Call Us! The wait time is less than a minute</p>
              <p><b>1800-678-2233</b></p>
            </div>
          </div>
          <div className={styles.email_tile}>
            <div>
              <h3>Email Us</h3>
              <div>
                <form className={styles.contact_us} action="/url" method="GET">
                  <label for="name"></label>
                  <input type="text" id={styles.name} name="name" placeholder="Enter your Name" required />
                  <label for="emailAddress"></label>
                  <input type="text" id={styles.emailAddress} name="emailAddress" placeholder="Enter your email address" required />
                  <label for="message"><p>Enter your message:</p></label>
                  <textarea type="texbox" id={styles.message} name="message" placeholder="" required />
                </form>
              </div>
              <div>
                <button className={styles.btn_send_email} type="submit" onclick="{displayText}">Send</button>
              </div>  
            </div>
          </div>
        </main>
      </div>
  );
}
