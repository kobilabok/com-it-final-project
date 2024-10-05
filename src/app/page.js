"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import starImage from "./assets/images/star.png";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  
  const { data } = useSession();

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
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Please select an artist</button>
          <div className={styles.dropdown_content}>
            <Link href="artists-portrait-painters">Portrait Painter</Link>
            <Link href="artists-painters">Painters</Link>
            <Link href="artists-photographers">Photographer</Link>
            <Link href="artists-portrait-painters">Accordions</Link>
            <Link href="artists-painters">Ukuleles</Link>
            <Link href="artists-photographers">Bagpipes and violins</Link>
          </div>
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
              <Image src={starImage} alt="reviews star" />
              <br />
              Eileen contacted me right away and I was so happy with the budget
              and she is able to paint my portrait!
              <br />
              <br />
              <b>02 Jun 2024</b>
            </p>
          </div>
          <div className={styles.tile}>
            <p>
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <br />
              Will Reeb is ABSOLUTELY the BEST! He is not only incredibly
              talented, his costume and show are top notch. He interacts with
              his audience and truly gives them the best entertainment.
              <br />
              <br />
              <b>28 May 2024</b>
            </p>
          </div>
          <div className={styles.tile}>
            <p>
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <br />
              Very professional, punctual, knows his stuff, good listener. He is
              an amazing person and we at Newport Harbour cannot WAIT to have
              him back here! We would give him 10 stars if we could!
              <br />
              <br />
              <b>26 Oct 2023</b>
            </p>
          </div>
        </div>
        {/* {data ? (
          <div className={styles.login_google}>
            <p>Welcome, {data.user.name} </p>{" "}
            <Image src={data.user.image} width={20} height={20} alt="image" />
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <div>
            <Link href="/api/auth/signin">Login</Link>
          </div>
        )} */}
      </main>
    </div>
  );
}
