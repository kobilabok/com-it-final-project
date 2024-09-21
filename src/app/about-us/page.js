import styles from "./page.module.css";

export default function About() {
  return (
      <div className={styles.content}>
        <main>
          <h1 className={styles.title}>About Us</h1>
          <p>
            Welcome to TalentHub, the premier platform dedicated to connecting local
            artists with vibrant communities and art enthusiasts like you. Our mission
            is simple: to foster a thriving local art scene by making it easier for
            artists to showcase their work and for people to discover and support
            unique, creative talent right in their own neighborhoods.
          </p>
          <h1 className={styles.title}>Our Values</h1>
          <p>
            At TalentHub, we are guided by values that reflect our commitment 
            to supporting local artists and enriching communities through 
            meaningful connections. These values help create a positive, 
            thriving environment where local artists can flourish and the community can actively engage with 
            and support the arts.
          </p>
        <div className={styles.reviews_tile}>
          <div className={styles.tile}>
            <h2>Creativity</h2>
            <p>
              Embracing and fostering artistic expression in all forms, 
              supporting innovation, and celebrating the unique contributions of each artist.          </p>
          </div>
          <div className={styles.tile}>
            <h2>Community Engagement</h2>
            <p>
              Building strong relationships between artists and local residents, 
              and actively working to enhance community cohesion and cultural vibrancy.
            </p>
          </div>
          <div className={styles.tile}>
            <h2>Inclusivity</h2>
            <p>
              Encouraging partnerships and cooperative efforts among artists, businesses, 
              and community organizations to create shared value and opportunities.
            </p>
          </div>
          <div className={styles.tile}>
            <h2>Sustainability</h2>
            <p>
              Promoting practices that support long-term artistic and community growth, 
              and being mindful of environmental and economic impacts.
            </p>
          </div>
          <div className={styles.tile}>
            <h2>Empowerment</h2>
            <p>
              Providing artists with the tools, resources, and support they need to thrive, 
              and enabling the community to actively participate in and benefit from the arts.
            </p>
          </div>        
        </div>
      </main>
    </div>
  );
}
