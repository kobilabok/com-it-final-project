"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useContext } from "react";
import { CartContext } from "@/_providers/cart-context-provider";

import { useSession } from "next-auth/react";
import { signOut, signIn } from "next-auth/react";

// google sign in
// import React, { useEffect, useState } from "react";
// import { auth } from "@/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import GoogleSignIn from "../google-sign-in/google-sign-in";

export default function Header() {
  const [cart, setCart] = useContext(CartContext);
  const { data } = useSession();

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);

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
          <li>
          {data ? (<div className={styles.user_name}>
            <p>Welcome, {data.user.name} </p>
            </div>) : ("")}
          </li>
          {/* <li>
            <GoogleSignIn user={user} setUser={setUser} />
          </li> */}
        </ul>
        {data ? (
          <div>
            <button className={styles.btn_sign_out} onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <div>
            <button className={styles.btn_login} onClick={signIn}>Login</button>
          </div>
        )}
      </nav>
    </header>
  );
}