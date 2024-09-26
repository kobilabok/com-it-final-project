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
            <h1>Shopping Cart</h1>
          </div>
          <div className={styles.shopping_cart_tile}>
            <div>
              <table className={styles.selected_services}>
                <tbody>
                  <tr>
                    <th>Selected Services</th>
                    <th>Qty</th>
                    <th>Price $</th>
                  </tr>
                  <tr>
                    <td>Portrait by Emma - Custom Portrait, size 24 x 24
                      <br/>$129.99
                      </td>
                    <td>
                      <div className={styles.quantity}>
                        <input id={styles.input} min="0" value="0" type="number" />
                      </div>
                    </td>
                    <td>
                      <div className={styles.price}>
                        <strong>$129.99</strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Portrait by Emma - Family Portrait, size 18 x 24
                      <br/>$99.99
                      </td>
                    <td>
                      <div className={styles.quantity}>
                        <input id={styles.input} min="0" value="0" type="number" />
                      </div>
                    </td>
                    <td>
                      <div className={styles.price}>
                        <strong>$199.98</strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Portrait by Emma - Pet Portrait, size 30 x 24
                      <br/>$159.99
                      </td>
                    <td>
                      <div className={styles.quantity}>
                        <input id={styles.input} min="0" value="0" type="number" />
                      </div>
                    </td>
                    <td>
                      <div className={styles.price}>
                        <strong>$159.99</strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <div className={styles.price}>
                        <strong>Total</strong>
                      </div>
                    </td>
                    <td>
                      <div className={styles.price}>
                        <strong>$489.99</strong>
                      </div>
                    </td>
                  </tr>
                </tbody>  
              </table>
            </div>
          </div>
          <div>
            <button className={styles.btn_pay_for_order} onClick={navigateToCheckout}>Checkout</button>
          </div>
        </main>
      </div>
  );
}
