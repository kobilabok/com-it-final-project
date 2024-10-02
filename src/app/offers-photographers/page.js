"use client";

import styles from "./page.module.css";
import Image from "next/image";
import starImage from "../assets/images/star.png";
import profilePhoto from "../assets/images/photographer-two.png";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect} from "react";
import { CartContext } from "@/_providers/cart-context-provider";

import db from '../db/firestore'
import { getDocs, collection } from 'firebase/firestore'

export default function ArtistOffers() {

  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [cart, addItemToCart, removeItemFromCart, getTotal, clearCart] = useContext(CartContext);

  useEffect(()=> {
    const fetchData = async () => {
      const snapshot = await getDocs((collection(db, 'photographers')));
      const documents = snapshot.docs.map(doc => doc.data());
      setData(documents);

      const snapshotPackages = await getDocs((collection(db, 'packages')));
      const packages = snapshotPackages.docs.map(doc => doc.data()).sort((a, b) => a.id - b.id);
      setPackagesData(packages);
    };
    
    fetchData()
      .catch(console.error);
  }, []); // code runs only once

  const display = () => {
    alert('This page is awesome! Keep up a great work!');
  }

  const router = useRouter();
  const navigateToShoppingCart = () => {
    router.push("/shopping-cart");
  };

  return (
    <div className={styles.content}>
      <main>
        <div className={styles.artist_description_tiles}>
          <div>
            <Image src={profilePhoto} alt="mark photographer" />
          </div>
          <div className={styles.artist_description}>
            {data.map(item => <div>
              <h3>{item.artistName}</h3>
              <p>Years of experience: {item.yearsOfExperience} YEARS</p>
            </div>)}
            <div className={styles.stars}>
              <Image src={starImage} alt="reviews star"/>
              <Image src={starImage} alt="reviews star"/>
              <Image src={starImage} alt="reviews star"/>
              <Image src={starImage} alt="reviews star"/>
              <Image src={starImage} alt="reviews star"/>
            </div>
            {data.map(item => <p>{item.artistDescription}<br /></p>)}
          </div>
        </div>
        <div className={styles.title}>
          <h2>Available Day and Time Slots</h2>
        </div>
        <div className={styles.tile_clickable}>
          <button className={styles.btn_timeslot_weekday}>
            MON
            <br />9
          </button>
          <button className={styles.btn_timeslot_weekday}>
            TUE
            <br />
            10
          </button>
          <button className={styles.btn_timeslot_weekday}>
            WED
            <br />
            11
          </button>
          <button className={styles.btn_timeslot_weekday}>
            THU
            <br />
            12
          </button>
          <button className={styles.btn_timeslot_weekday}>
            FRI
            <br />
            13
          </button>
          <button className={styles.btn_timeslot_weekday}>
            SAT
            <br />
            14
          </button>
          <button className={styles.btn_timeslot_weekday}>
            SUN
            <br />
            15
          </button>
        </div>
        <div className={styles.tile_clickable}>
          <button className={styles.btn_timeslot_time} onClick={() => display()}>click me!</button>
          <button className={styles.btn_timeslot_time}>8:00 am</button>
          <button className={styles.btn_timeslot_time}>11:00 am</button>
          <button className={styles.btn_timeslot_time}>2:00 pm</button>
          <button className={styles.btn_timeslot_time}>5:00 pm</button>
          <button className={styles.btn_timeslot_time}>8:00 pm</button>
        </div>
        <div className={styles.title}>
          <h2>Available services for you to select</h2>
        </div>
        <div className={styles.tile_clickable}>
          {packagesData.map(pkg => 
            <div>
              <div className={styles.service_tiles}>
                <p>{pkg.description}</p><br />
                <h3>${pkg.price}</h3>
                <ul>{pkg.listItems.map(item => <li>{ item }</li>)}</ul>
                <div>
                  <button onClick={() => addItemToCart(pkg)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            className={styles.btn_go_to_shopping_cart}
            onClick={ navigateToShoppingCart }>Go to Shopping Cart
          </button>
        </div>
      </main>
    </div>
  );
}
