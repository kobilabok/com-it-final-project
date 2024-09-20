import Image from "next/image";
import styles from "./page.module.css";
import starImage from "./assets/images/star.png";
import Link from "next/link";

export default function Home() {
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
          <h1>Welcome to TalentHub</h1>
          <p>
            Check out our talented artist to bring the perfect touch of intimacy
            to your event. From accordions to ukuleles, from bagpipes to violins,
            you can find em all here! At TalentHub we have already compiled all
            the information transparently for you. Do you like one or more service
            providers? Request up to four comparison offers quickly, easily and
            free of charge.
          </p>
          <div class="dropdown">
            <select
              class={styles.select}
              name="artists"
              id="artists"
              onchange="window.location.href=this.value;"
            >
              <option disabled selected>Please select an artist</option>
              <option value={<Link href="about-us"></Link>}>Portrait Painter</option>
              <option value=""><Link href="about-us">Portrait Painter</Link></option>
              <option value="artists">Portrait Painter</option>
              <option value="/">Painters</option>
              <option value="/">Photographer</option>
              <option value="/">DJ's</option>
              <option value="/">Web Developer</option>
            </select>
          </div>
          <div class={styles.reviews}>
            <h3>Reviews</h3>
          </div>
          <div class={styles.tiles}> 
            <div class={styles.tile}>
              <p>
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" /><br />
                  Eileen contacted me right away and I was so happy with the budget and she is able to 
                  paint my portrait!
                <br /><br /><b>02 Jun 2024</b>
              </p>
            </div>
            <div class={styles.tile}>
              <p>
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" /><br />
                Will Reeb is ABSOLUTELY the BEST! He is not only incredibly talented, his costume and show 
                are top notch. He interacts with his audience and truly gives them the best entertainment. 
                <br /><br /><b>28 May 2024</b>
                </p>
            </div>  
            <div class={styles.tile}>
              <p>
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" />
                <Image src={starImage} alt="reviews star" /><br />
                Very professional, punctual, knows his stuff, good listener. He is an amazing person and we at Newport Harbour cannot WAIT to have him back here! We would give him 10 stars if we could!
              <br /><br /><b>26 Oct 2023</b>
              </p>
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
