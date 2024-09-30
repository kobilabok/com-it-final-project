"use client"
import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <h1>TalentHub</h1>
        <p>Please enter your login credentials</p>
        <form>
          <label for="first">Username:</label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your Username"
            required
          />
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <div className={styles.wrap}>
            <button className={styles.btn_submit} type="submit" onclick="solve()">
              Submit
            </button>
          </div>
        </form>
        <p>Not registered?<Link href="registration"
            >Create an account</Link></p>
      </div>
    </div>
  );
}
