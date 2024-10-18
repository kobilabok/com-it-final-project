"use client";
import styles from "@/_components/artist-page/page.module.css";
import profilePhoto from "../assets/images/painter-one.png";
import Artist from "@/_components/artist-page/artist";

export default function PainterOffers() {

  return (
    <div className={styles.content}>
      <main>
        <Artist artistTableName="artistsPainters" packageTableName="artistsPainters_packages" profileImg={profilePhoto}/>
      </main>
    </div>
  );
}
