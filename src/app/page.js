import Image from "next/image";
import styles from "./page.module.css";
import starImage from "./assets/images/star.png";

export default function Home() {
  return (
      <div className={styles.content}>
        <main>
          <h1 className={styles.title}>Welcome to TalentHub</h1>
          <p>
            Check out our talented artist to bring the perfect touch of intimacy
            to your event. From accordions to ukuleles, from bagpipes to violins,
            you can find em all here! At TalentHub we have already compiled all
            the information transparently for you. Do you like one or more service
            providers? Request up to four comparison offers quickly, easily and
            free of charge.
          </p>
          <div>
            <select
              className={styles.select}
              name="artists"
              id="artists"
              onchange="navigateToPage(this.value)"
            >
              <option disabled selected>Please select an artist</option>
              <option value="about-us">Portrait Painter</option>
              <option value="painters">Painters</option>
              <option value="photographer">Photographer</option>
              <option value="/">DJ's</option>
              <option value="/">Web Developer</option>
            </select>
          </div>
          <div className={styles.reviews}>
            <h3>Reviews</h3>
          </div>
          <div className={styles.tiles}> 
            <div className={styles.tile}>
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
            <div className={styles.tile}>
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
            <div className={styles.tile}>
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
  );
}
