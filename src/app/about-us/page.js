import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
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
        <div class="content">
        <h1 class={styles.title}>About Us</h1>
        <p>
          Welcome to TalentHub, the premier platform dedicated to connecting local
          artists with vibrant communities and art enthusiasts like you. Our mission
          is simple: to foster a thriving local art scene by making it easier for
          artists to showcase their work and for people to discover and support
          unique, creative talent right in their own neighborhoods.
        </p>
        <h1 class={styles.title}>Our Values</h1>
        <p>
          At TalentHub, we are guided by values that reflect our commitment 
          to supporting local artists and enriching communities through 
          meaningful connections. These values help create a positive, 
          thriving environment where local artists can flourish and the community can actively engage with 
          and support the arts.
        </p>
      </div>
      <div class={styles.reviews_tile}>
        <div class={styles.tile}>
          <h2>Creativity</h2>
          <p>
            Embracing and fostering artistic expression in all forms, 
            supporting innovation, and celebrating the unique contributions of each artist.          </p>
        </div>
        <div class={styles.tile}>
          <h2>Community Engagement</h2>
          <p>
            Building strong relationships between artists and local residents, 
            and actively working to enhance community cohesion and cultural vibrancy.
          </p>
        </div>
        <div class={styles.tile}>
          <h2>Inclusivity</h2>
          <p>
            Encouraging partnerships and cooperative efforts among artists, businesses, 
            and community organizations to create shared value and opportunities.
          </p>
        </div>
        <div class={styles.tile}>
          <h2>Sustainability</h2>
          <p>
            Promoting practices that support long-term artistic and community growth, 
            and being mindful of environmental and economic impacts.
          </p>
        </div>
        <div class={styles.tile}>
          <h2>Empowerment</h2>
          <p>
            Providing artists with the tools, resources, and support they need to thrive, 
            and enabling the community to actively participate in and benefit from the arts.
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
