"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function ShoppingCart() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === "" || name.length < 3) {
      newErrors.name = "*name is required and should be at least 3 characters long";
    }
    if (email.trim() === "") {
      newErrors.email = "*email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "*invalid email format";
    }
    if (message.trim() === "") {
      newErrors.message = "*message is required";
    }
    if (message.length < 3){
      newErrors.message = "*message is too short";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      // Here you can handle form submission (e.g., sending data to a server)

      setName("");
      setEmail("");
      setMessage("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className={styles.content}>
      <main>
        <div className={styles.title}>
          <h1>GET IN TOUCH</h1>
        </div>
        <div className={styles.phone_tile}>
          <div>
            <p>Call Us! The wait time is less than a minute</p>
            <p>
              <b>1800-678-2233</b>
            </p>
          </div>
        </div>
        <div className={styles.email_tile}>
          <div>
            <h3>Email Us</h3>
            <div>
              <form
                className={styles.contact_us}
                action="/url"
                method="GET"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    // required
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleChange}
                    // required
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div>
                  <label htmlFor="message" className={styles.lbl}>
                    <p>Enter your message:</p>
                  </label>
                  <textarea
                    id="message"
                    maxLength="255"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    // required
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                  <button className={styles.btn_send_email} type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
            {/* <div>
              <button
                className={styles.btn_send_email}
                type="submit" >Send</button>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
