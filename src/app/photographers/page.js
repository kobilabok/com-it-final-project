import styles from "./page.module.css";
import Image from "next/image";
import imageOne from "../assets/images/photographer-one.png";
import imageTwo from "../assets/images/photographer-two.png";
import imageThree from "../assets/images/photographer-three.png";
import imageFour from "../assets/images/photographer-four.png";
import imageFive from "../assets/images/photographer-five.png";

export default function Photographers() {
  return (
      <div class={styles.content}>
        <main>
          <div class={styles.title}>
            <h1>The most popular Photographers in your area</h1>
          </div>
          <div class={styles.tile_clickable}>
            <div>
              <a href="./artist-offers.html">
                <div class={ styles.artist_tiles }>
                  <div>
                    <Image
                    src={imageOne} alt="photographer-one"
                    />
                  </div>
                  <p>
                    My portrait painting service is dedicated to capturing the essence
                    and personality of individuals through exquisite, handcrafted
                    portraits.<br />
                  </p>
                </div>
                </a>
              </div>
              <div>
                <a href="./artist-offers.html">
                  <div class={ styles.artist_tiles }>
                    <div>
                      <Image
                      src={imageTwo} alt="photographer-two"
                      />
                    </div>
                    <p>
                      Whether you're looking for a timeless family heirloom, a
                      professional likeness, or a unique gift, our portraits are crafted
                      to be treasured for generations.<br />
                    </p>
                  </div>
                  </a>
              </div>
              <div>
                <a href="./artist-offers.html">
                  <div class={ styles.artist_tiles }>
                    <div>
                      <Image
                      src={imageThree} alt="photographer-three"
                      />
                    </div>
                    <p>
                      Hello! I am Mark! I am very unique! My service extends to beloved
                      pets, capturing their unique personalities and charm in a portrait
                      that celebrates their place in your life.<br />
                    </p>
                  </div>
                  </a>
              </div>
              <div>
                <a href="./artist-offers.html">
                  <div class={ styles.artist_tiles }>
                    <div>
                      <Image
                      src={ imageFour } alt="photographer-four"
                      />
                    </div>
                    <p>
                      My portrait painting service is dedicated to capturing the essence
                      and personality of individuals through exquisite, handcrafted
                      portraits.<br />
                    </p>
                  </div>
                  </a>
              </div>
              <div>
                <a href="./artist-offers.html">
                  <div class={ styles.artist_tiles }>
                    <div>
                      <Image
                      src={ imageFive } alt="photographer-five"
                      />
                    </div>
                    <p>
                      My portrait painting service is dedicated to capturing the essence
                      and personality of individuals through exquisite, handcrafted
                      portraits.<br />
                    </p>
                  </div>
                  </a>
              </div>
          </div>
        </main>
      </div>
  );
}
