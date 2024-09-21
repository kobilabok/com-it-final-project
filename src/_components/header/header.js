import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
    return (
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logo}><Link href="/"><h3>TalentHub</h3></Link></div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about-us">About Us</Link></li>
                        <li><Link href="shopping-cart">Cart</Link></li>
                    </ul>
                    <button className={styles.btn_login}>Login</button>
                </nav>
            </header>
    );
}
