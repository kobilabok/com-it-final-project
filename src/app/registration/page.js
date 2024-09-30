"use client"
import styles from "./page.module.css";
import Link from "next/link";

export default function Registration() {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <h1>TalentHub</h1>
        <p>Please fill out the registration form</p>
        <form action="">
          <label for="first"> Username: </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your Username"
            required
          />
          <label for="first"> Your email address: </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your Email"
            required
          />
          <label for="password"> Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <label for="password"> Re-enter Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Re-enter your Password"
            required
          />
          <div class="wrap">
            <button className={styles.btn_submit} type="submit" onclick="solve()">
              Submit
            </button>
          </div>
        </form>
        <p>Already registered?<Link href="login"> Sign In </Link></p>
      </div>
    </div>
  );
}
