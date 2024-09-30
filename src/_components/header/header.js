"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useContext } from "react";
import { CartContext } from "@/_providers/cart-context-provider";

export default function Header() {

    const [cart, setCart] = useContext(CartContext);

    return (
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logo}><Link href="/"><h3>TalentHub</h3></Link></div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about-us">About Us</Link></li>
                        <li><Link href="shopping-cart">Cart {cart.length}
                        </Link></li>
                    </ul>
                    <button className={styles.btn_login}><a href="login">Login</a></button>
                </nav>
            </header>
    );
}
