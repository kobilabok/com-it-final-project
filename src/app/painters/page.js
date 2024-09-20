import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import painterOne from "../assets/images/painter-one.png";
import painterTwo from "../assets/images/painter-two.png";
import painterThree from "../assets/images/painter-three.png";
import painterFour from "../assets/images/painter-four.png";
import painterFive from "../assets/images/painter-five.png";
import painterSix from "../assets/images/painter-six.png";

export default function PortraitArtists() {
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
            <h1>The most popular Painters in your area</h1>
          </div>
          <div class={styles.tile_clickable}>
            <div>
              <a href="./artist-offers.html">
                <div class={ styles.artist_tiles }>
                  <div>
                    <Image
                    src={painterOne} alt="portrait-painter-one"
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
                      src={ painterThree } alt="portrait-painter-three"
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
                      src={ painterTwo } alt="portrait-painter-two"
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
                      src={ painterFour } alt="portrait-painter-four"
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
                      src={ painterFive } alt="portrait-painter-five"
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
                      src={ painterSix } alt="portrait-painter-six"
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
