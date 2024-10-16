import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import painterOne from "../assets/images/painter-one.png";
import painterTwo from "../assets/images/painter-two.png";
import painterThree from "../assets/images/painter-three.png";
import painterFour from "../assets/images/painter-four.png";
import painterSix from "../assets/images/painter-six.png";

export default function PainterArtists() {
  return (
    <div className={styles.content}>
      <main>
        <div className={styles.title}>
          <h1>The most popular Painters in your area</h1>
        </div>
        <div className={styles.tile_clickable}>
          <div>
            <Link href="offers-painters">
              <div className={styles.artist_tiles}>
                <div>
                  <Image src={painterOne} alt="painter-one" />
                </div>
                <p>
                  My portrait painting service is dedicated to capturing the
                  essence and personality of individuals through exquisite,
                  handcrafted portraits.
                  <br />
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="offers-painters">
              <div className={styles.artist_tiles}>
                <div>
                  <Image src={painterThree} alt="painter-three" />
                </div>
                <p>
                  Whether you're looking for a timeless family heirloom, a
                  professional likeness, or a unique gift, our portraits are
                  crafted to be treasured for generations.
                  <br />
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="offers-painters">
              <div className={styles.artist_tiles}>
                <div>
                  <Image src={painterTwo} alt="painter-two" />
                </div>
                <p>
                  Hello! I am Mark! I am very unique! My service extends to
                  beloved pets, capturing their unique personalities and charm
                  in a portrait that celebrates their place in your life.
                  <br />
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="offers-painters">
              <div className={styles.artist_tiles}>
                <div>
                  <Image src={painterSix} alt="painter-six" />
                </div>
                <p>
                  My portrait painting service is dedicated to capturing the
                  essence and personality of individuals through exquisite,
                  handcrafted portraits.
                  <br />
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="offers-painters">
              <div className={styles.artist_tiles}>
                <div>
                  <Image src={painterFour} alt="painter-four" />
                </div>
                <p>
                  My portrait painting service is dedicated to capturing the
                  essence and personality of individuals through exquisite,
                  handcrafted portraits.
                  <br />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
