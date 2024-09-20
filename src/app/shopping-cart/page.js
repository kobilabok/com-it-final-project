
import styles from "./page.module.css";
import Link from "next/link";

export default function ShoppingCart() {
  return (
    <div class="container">
      <header class="header">
        <nav>
          <div class="logo"><Link href="/"><h3>TalentHub</h3></Link></div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="about-us">About Us</Link></li>
            <li><Link href="shopping-cart">Cart</Link></li>
          </ul>
          <button class="btn-login" onclick="window.open('./login.html', '_self');">Login</button>
        </nav>
      </header>
      <div class={styles.content}>
        <main>
          <div class={styles.title}> 
            <h1>Shopping Cart</h1>
          </div>
          
          <div>
            <table class={styles.selected_services}>
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
                    <div class={styles.quantity}>
                      <input id={styles.input} min="0" value="0" type="number" />
                    </div>
                  </td>
                  <td>
                    <div class={styles.price}>
                      <strong>$129.99</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Portrait by Emma - Family Portrait, size 18 x 24
                    <br/>$99.99
                    </td>
                  <td>
                    <div class={styles.quantity}>
                      <input id={styles.input} min="0" value="0" type="number" />
                    </div>
                  </td>
                  <td>
                    <div class={styles.price}>
                      <strong>$199.98</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Portrait by Emma - Pet Portrait, size 30 x 24
                    <br/>$159.99
                    </td>
                  <td>
                    <div class={styles.quantity}>
                      <input id={styles.input} min="0" value="0" type="number" />
                    </div>
                  </td>
                  <td>
                    <div class={styles.price}>
                      <strong>$159.99</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div class={styles.price}>
                      <strong>Total</strong>
                    </div>
                  </td>
                  <td>
                    <div class={styles.price}>
                      <strong>$489.99</strong>
                    </div>
                  </td>
                </tr>
              </>
            </table>
          </div>

          <div>
            <button class={styles.btn_pay_for_order} onclick="window.open('./payment.html', '_self');">Checkout</button>
          </div>
        </main>
      </div>
      <footer>
        <div class="footer">
          <h2>Questions or Concerns? Call 1800-678-2233</h2>
          <div class="row">
            <div class="col">
              <a href="#">© 2024</a>
              <a href="#">Talenthub.com Global Limited.</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div class="col">
              <a href="mailto: info@talentHub.com">info@talentHub.com</a>
              <a href="#">Corporate Information</a>
              <a href="#">Investor Relations</a>
            </div>
            <div class="col">
              <a href="#">Help Center</a>
              <a href="#">Legal Notice</a>
              <a href="#">Privacy</a>
            </div>
            <div class="col">
              <a href="#">FAQ</a>
              <a href="#">Account</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
