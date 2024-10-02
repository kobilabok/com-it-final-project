"use client";
import styles from "./page.module.css";
import { useContext } from "react";
import { CartContext } from "@/_providers/cart-context-provider";

export default function Payment() {

  const [cart, removeItemFromCart, clearCart] = useContext(CartContext);

  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div>
          <h1>TalentHub</h1>
        </div>
        <div>
          <p>Enter your information and card details to pay</p>
        </div>
        <div>
          <form className={styles.payment_form} action="/url" method="GET">
            <label for="nameOnCard"></label>
            <input
              type="text"
              id={styles.nameOnCard}
              name="nameOnCard"
              placeholder="Name on card"
              required
            />
            <label for="cardNumber" required></label>
            <input
              type="text"
              id={styles.cardNumber}
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              required
            />
          </form>
          <form>
            <div className={styles.wrap}>
              <input type="text" placeholder="MM / YY" required />
              <input type="text" placeholder="CVT" required />
            </div>
            <div className={styles.required_fields_text}>
              <p>all fields are required***</p>
            </div>
            <div>
              <button
                className={styles.btn_pay_total_amount}
                type="submit"
                onclick="{displayText}"
                disabled={cart.length === 0}
              >
                Pay ${cart.reduce((total, item) => total + item.price, 0)}
              </button>
            </div>
          </form>
        </div>
        <div className={styles.purchase_text}>
          <p>
            Thank you for doing business with us! Once you paid, a confirmation email
            will be sent to you shortly after your payment has been processed.
            <br />
            <br />
            Please check your inbox for details on your order and any additional
            information. If you have any questions or need further assistance,
            feel free to contact us.
          </p>
        </div>
      </main>
    </div>
  );
}
