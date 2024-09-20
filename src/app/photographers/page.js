import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import imageOne from "../assets/images/photographer-one.png";
import imageTwo from "../assets/images/photographer-two.png";
import imageThree from "../assets/images/photographer-three.png";
import imageFour from "../assets/images/photographer-four.png";
import imageFive from "../assets/images/photographer-five.png";

export default function Photographers() {
  return (
    <div class="container">
      <header class="header">
        <nav>
          <div class="logo"><Link href="/"><h3>TalentHub</h3></Link></div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="about-us">About Us</Link></li>
            <li><Link href="shopping-cart">Cart</Link></li>
          </ul>
          <button class="btn-login" onclick="window.open('./login.html', '_self');">Login</button>
        </nav>
      </header>
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
      <footer>
        <div class="footer">
          <h2>Questions or Concerns? Call 1800-678-2233</h2>
  
          <div class="row">
            <div class="col">
              <a href="#">© 2024</a>
              <a href="#">Talenthub.com Global Limited.</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div class="col">
              <a href="mailto: info@talentHub.com">info@talentHub.com</a>
              <a href="#">Corporate Information</a>
              <a href="#">Investor Relations</a>
            </div>
            <div class="col">
              <a href="#">Help Center</a>
              <a href="#">Legal Notice</a>
              <a href="#">Privacy</a>
            </div>
            <div class="col">
              <a href="#">FAQ</a>
              <a href="#">Account</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
