"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useContext } from "react";
import { CartContext } from "@/_providers/cart-context-provider";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Header() {
  const [cart, setCart] = useContext(CartContext);
  const { data } = useSession();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <h3>TalentHub</h3>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about-us">About Us</Link>
          </li>
          <li>
            <Link href="shopping-cart">
              Cart <span className={styles.cart_count}>{cart.length}</span>
            </Link>
          </li>
        </ul>
        {data ? (
          <div>
            <button className={styles.btn_sign_out} onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <div className={styles.btn_login}>
            <Link href="/api/auth/signin">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
}