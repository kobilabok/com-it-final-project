import styles from "./page.module.css";
import Image from "next/image";
import starImage from "../assets/images/star.png";
import profilePhoto from "../assets/images/photographer-four.png";


export default function ArtistOffers() {
  return (
      <div className={styles.content}>
        <main>
          <div className={styles.title}>
            <h1>Provided Services by the selected artist</h1>
          </div>
          <div className={styles.artist_description_tiles}>
            <div>
              <Image
                src= {profilePhoto} alt="mark photographer"
              />
            </div>
            <div className={styles.artist_description}>
              <h3>Mark Wahlberg</h3>
              <p>Years of experience: 4 YEARS</p>
                <div className={styles.stars}>
                  <Image src= {starImage} />
                  <Image src= {starImage} />
                  <Image src= {starImage} />
                  <Image src= {starImage} />
                  <Image src= {starImage} />
                </div>
              <p>
                My service extends to beloved pets, capturing their unique personalities and charm in a portrait
                that celebrates their place in your life. My portrait painting service 
                is dedicated to capturing the essence and personality of individuals through exquisite,
                handcrafted portraits. Whether you're looking for a timeless
                family heirloom, a professional likeness, or a unique gift, our
                portraits are crafted to be treasured for generations. My portrait painting service 
                is dedicated to capturing the essence and personality of individuals through exquisite,
                handcrafted portraits.<br />
              </p>
            </div>
          </div>
          <div className={styles.tile_clickable}>
            <div>
                <div className={styles.service_tiles}>
                  <p>Starter</p><br />
                  <h3>$99.99</h3>
                  <ul>
                    <li>Photography</li>
                    <li>Family Photos</li>
                    <li>Individual Photos</li>
                    <li>Portrait Photos</li>
                    <li>Pets Photos</li>
                    <li>50 pieces</li>
                    <li>Size up to 12x18 inch</li>
                  </ul>
                  <div>
                    <button>Add To Cart</button>
                  </div>
                </div>
            </div>
            <div>
                <div className={styles.service_tiles}>
                  <p>Basic</p><br />
                  <h3>$299.99</h3>
                  <ul>
                    <li>Photography</li>
                    <li>Family Photos</li>
                    <li>Individual Photos</li>
                    <li>Portrait Photos</li>
                    <li>Pets Photos</li>
                    <li>100 pieces</li>
                    <li>Size up to 18x24 inch</li>
                  </ul>
                  <div>
                    <button>Add To Cart</button>
                  </div>
                </div>
            </div>
            <div>
                <div className={styles.service_tiles}>
                  <p>Advanced</p><br />
                  <h3>$499.99</h3>
                  <ul>
                    <li>Events Photography</li>
                    <li>Birthday Parties</li>
                    <li>Fashion Photography</li>
                    <li>Creative Photography</li>
                    <li>Weddings</li>
                    <li>250 pieces</li>
                    <li>Size up to 24x36 inch</li>
                  </ul>
                  <div>
                    <button>Add To Cart</button>
                  </div>
                </div>
            </div>
            <div>
                <div className={styles.service_tiles}>
                  <p>Premium</p><br />
                  <h3>$699.99</h3>
                  <ul>
                    <li>Commercial</li>
                    <li>Fashion photography</li>
                    <li>Architectural</li>
                    <li>Fine-Art photography</li>
                    <li>Food photography</li>
                    <li>500 pieces</li>
                    <li>4K any size</li>
                  </ul>
                  <div>
                    <button>Add To Cart</button>
                  </div>
                </div>
            </div>
          </div>
          <div>
        </div>
          <div className={styles.title}>
            <h2>Available Day and Time Slots</h2>
          </div>
          <div className={styles.tile_clickable}>
              <button className={styles.btn_timeslot_weekday}>MON<br />9</button>
              <button className={styles.btn_timeslot_weekday}>TUE<br />10</button>
              <button className={styles.btn_timeslot_weekday}>WED<br />11</button>
              <button className={styles.btn_timeslot_weekday}>THU<br />12</button>
              <button className={styles.btn_timeslot_weekday}>FRI<br />13</button>
              <button className={styles.btn_timeslot_weekday}>SAT<br />14</button>
              <button className={styles.btn_timeslot_weekday}>SUN<br />15</button>
          </div>
          <div className={styles.tile_clickable}>
            <button className={styles.btn_timeslot_time}>8:00 am</button>
            <button className={styles.btn_timeslot_time}>10:00 am</button>
            <button className={styles.btn_timeslot_time}>12:00 pm</button>
            <button className={styles.btn_timeslot_time}>2:00 pm</button>
            <button className={styles.btn_timeslot_time}>4:00 pm</button>
            <button className={styles.btn_timeslot_time}>6:00 pm</button>
          </div>
          <div>
            <button className={styles.btn_go_to_shopping_cart} onclick="window.open('./shopping-cart.html', '_self');">Go to Shopping Cart</button>
          </div>
        </main>
      </div>
  );
}
