"use client";
import styles from "./page.module.css";
import Image from "next/image";
import starImage from "../assets/images/star.png";
import profilePhoto from "../assets/images/photographer-four.png";
import { useRouter } from "next/navigation";
import { useContext, useState} from "react";
import { CartContext } from "@/_providers/cart-context-provider";
import offer from "../photographers-data-local/page"

export default function ArtistOffers() {
  
  const [days, selectDay] = useState();
  const [timeSlot, selectTimeSlot] = useState();
  const [cart, addItemToCart, removeItemFromCart, getTotal, clearCart] = useContext(CartContext);

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
            <h3>Mark Wahlberg</h3>
            <p>Years of experience: 4 YEARS</p>
            <div className={styles.stars}>
              <Image src={starImage} />
              <Image src={starImage} />
              <Image src={starImage} />
              <Image src={starImage} />
              <Image src={starImage} />
            </div>
            <p>{offer.artistDescription}<br /></p>
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
          {offer.packages.map(pkg => 
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
            onClick={navigateToShoppingCart}
          >
            Go to Shopping Cart
          </button>
        </div>
      </main>
    </div>
  );
}
