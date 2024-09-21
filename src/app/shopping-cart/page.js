
import styles from "./page.module.css";

export default function ShoppingCart() {
  return (
      <div className={styles.content}>
        <main>
          <div className={styles.title}> 
            <h1>Shopping Cart</h1>
          </div>
          <div>
            <table className={styles.selected_services}>
              <>
                <tr id="tableHeader">
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
              </>
            </table>
          </div>
          <div>
            <button className={styles.btn_pay_for_order} onclick="window.open('./payment.html', '_self');">Checkout</button>
          </div>
        </main>
      </div>
  );
}
