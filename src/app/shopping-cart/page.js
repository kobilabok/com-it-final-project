"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/_providers/cart-context-provider";

export default function ShoppingCart() {
  const [cart, addItemToCart, removeItemFromCart, clearCart] =
    useContext(CartContext);

  const router = useRouter();
  const navigateToCheckout = () => {
    router.push("/payment");
  };

  return (
    <div className={styles.content}>
      <main id="main">
        <div className={styles.title}>
          <h1>Shopping Cart</h1>
        </div>
        <div className={styles.shopping_cart_tile}>
          <div>
            <table className={styles.selected_services}>
              <tbody className={styles.cart_table} id="tbody">
                <tr>
                  <th>Selected Services</th>
                  <th>Qty</th>
                  <th>Price $</th>
                </tr>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="3">
                      <p>Your cart is empty! Please start adding items!</p>
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => (
                    <tr key={item}>
                      <td>
                        {item.pkg.description} package with {item.pkg.artistName}
                        <br />${item.pkg.price} on {item.day} at {item.time}
                      </td>
                      <td>
                        <div className={styles.quantity}>
                          <input
                            id={styles.input}
                            min="0"
                            value="1"
                            type="number"
                            disabled
                          />
                        </div>
                      </td>
                      <td>
                        <div className={styles.price}>
                          <strong>${item.pkg.price}</strong>
                          <span className={styles.bnt_remove}>
                            {" "}
                            <button onClick={() => removeItemFromCart(item.pkg.id)}>
                              X
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
                {cart.length === 0 ? (
                  ""
                ) : (
                  <tr>
                    <td></td>
                    <td>
                      <div className={styles.price}>
                        <strong>Total</strong>
                      </div>
                    </td>
                    <td>
                      <div className={styles.price}>
                        <strong>
                          $
                          {cart
                            .reduce((total, item) => total + item.pkg.price, 0)
                            .toFixed(2)}
                        </strong>
                        <span className={styles.bnt_remove}>
                          {" "}
                          <button onClick={() => clearCart()}>Clear</button>
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <button
            className={styles.btn_pay_for_order}
            onClick={navigateToCheckout}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}
