"use client";

import styles from "./page.module.css";

import db from "../db/firestore";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "about-us"));
      const documents = snapshot.docs.map((doc) => doc.data());
      setData(documents);
    };

    fetchData().catch(console.error);
  }, []); // code runs only once

  return (
    <div className={styles.content}>
      <main>
        {data.map((item) => (
          <div>
            <h1 className={styles.title}>{item.about_us_title}</h1>
            <p>{item.about_us_text}</p>
            <h1 className={styles.title}>{item.our_values}</h1>
            <p>{item.our_values_text}</p>
            <div className={styles.reviews_tile}>
              <div className={styles.tile}>
                <h2>{item.creativity_title}</h2>
                <p>{item.creativity_text}</p>
              </div>
              <div className={styles.tile}>
                <h2>{item.community_engagement_title}</h2>
                <p>{item.community_engagement_text}</p>
              </div>
              <div className={styles.tile}>
                <h2>{item.inclusivity_title}</h2>
                <p>{item.inclusivity_text}</p>
              </div>
              <div className={styles.tile}>
                <h2>{item.sustainability_title}</h2>
                <p>{item.sustainability_text}</p>
              </div>
              <div className={styles.tile}>
                <h2>{item.empowerment_title}</h2>
                <p>{item.empowerment_text}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
