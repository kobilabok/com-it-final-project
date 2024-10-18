"use client";
import styles from "@/_components/artist-page/page.module.css";
import profilePhoto from "../assets/images/portrait-painter-five.png";
import Artist from "@/_components/artist-page/artist"; 

export default function PortraitPaintersOffers() {

  return (
    <div className={styles.content}>
      <main>
        <Artist artistTableName="artistsPortraitPainters" packageTableName="artistsPortraitPainters_packages" profileImg={profilePhoto}/>
      </main>
    </div>
  );
}
