"use client";
import styles from "@/_components/artist-page/page.module.css";
import profilePhoto from "../assets/images/photographer-two.png";
import Artist from "@/_components/artist-page/artist";

export default function PhotographerOffers() {

  return (
    <div className={styles.content}>
      <main>
        <Artist artistTableName="photographers" packageTableName="packages" profileImg={profilePhoto}/>
      </main>
    </div>
  );
}
