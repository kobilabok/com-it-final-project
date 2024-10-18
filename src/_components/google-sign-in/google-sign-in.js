// google sign in
import styles from "./page.module.css";
import React from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const GoogleSignIn = ({ user, setUser }) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div className={styles.user_name}>
          <ul>
            <li>
              <h3>Welcome, {user.displayName}</h3>
            </li>
            <li>
              <button className={styles.btn_login} onClick={handleSignOut}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <button className={styles.btn_login} onClick={handleGoogleSignIn}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default GoogleSignIn;
