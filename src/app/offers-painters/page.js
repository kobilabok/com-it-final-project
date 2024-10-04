"use client";

import styles from "./page.module.css";
import Image from "next/image";
import starImage from "../assets/images/star.png";
import profilePhoto from "../assets/images/painter-one.png";
import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "@/_providers/cart-context-provider";

import db from "../db/firestore";
import { getDocs, collection } from "firebase/firestore";

export default function PainterOffers() {
  const [data, setData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);

  const [cart, addItemToCart, removeItemFromCart, getTotal, clearCart] =
    useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "photographers"));
      const documents = snapshot.docs.map((doc) => doc.data());
      setData(documents);

      const snapshotPackages = await getDocs(collection(db, "packages"));
      const packages = snapshotPackages.docs
        .map((doc) => doc.data())
        .sort((a, b) => a.id - b.id);
      setPackagesData(packages);
    };

    fetchData().catch(console.error);
  }, []); // code runs only once

  // lets try this #1
  const service = {
    day: null,
    time: null,
    package: null,
  };

  // function handleDayPicker(e) {
  //   console.log(service);
  //   service.day = e;
  //   console.log(service);
  // }

  // function handleTimePicker(e) {
  //   service.time = e;
  //   console.log(service);
  // }

  // function handlePackagePicker(e) {
  //   service.package = e;
  //   console.log(service);
  // }

  // lets try this #2
  const [selection, setSelection] = useState({
    day: '',
    time: '',
    package: null
  });

  function handleDayPicker(e) {
    setSelection({ ...selection, day: e }); //... spread operator 
    console.log(e);
    console.log(selection);
  }

  function handleTimePicker(e) {
    setSelection({ ...selection, time: e });
    console.log(selection);
  }

  function handlePackagePicker(e) {
    setSelection({ ...selection, package: e });
    console.log(selection);
  }

  function resetUserSelection() {
    document.getElementById("offer-form").reset();
  }

  // const input = document.getElementById("offer-form");
  // input.addEventListener({

  // });

  // function resetUserSelection(name) {
  //   const radio = document.querySelectorAll(input[type='radio'][name='"+name+"']);
  //   radio.forEach(btn => {
  //     if(btn.checked===true)
  //       btn.checked = false;
  //   });
  // }

  // const [selectedOption, setSelectedOption] = useState("");
  // const formRef = useRef();

  // const handleRadioChange = () => {
  //   formRef.current.reset();
  // };

  return (
    <div className={styles.content}>
      <main>
        <div className={styles.artist_description_tiles}>
          <div>
            <Image src={profilePhoto} alt="mark photographer" />
          </div>
          <div className={styles.artist_description}>
            {data.map((item) => (
              <div key={item}>
                <h3>{item.artistName}</h3>
                <p>Years of experience: {item.yearsOfExperience} YEARS</p>
              </div>
            ))}
            <div className={styles.stars}>
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
              <Image src={starImage} alt="reviews star" />
            </div>
            {data.map((item) => (
              <p key={item}>
                {item.artistDescription}
                <br />
              </p>
            ))}
          </div>
        </div>
        <div className={styles.title}>
          <h2>Please select a day and the time</h2>
        </div>
        <form id="offer-form">
          <div className={styles.tile_clickable}>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="radio-button"
                name="day"
                value={selection.day}
                onChange={() => handleDayPicker("Tuesday")}
              />
              <label htmlFor="day">Tuesday</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="day"
                name="day"
                value={selection.day}
                onChange={() => handleDayPicker("Wednsday")}
              />
              <label htmlFor="day">Wednsday</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="day"
                name="day"
                value="Thursday"
                onChange={() => handleDayPicker("Thursday")}
              />
              <label htmlFor="day">Thursday</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="day"
                name="day"
                value="Friday"
                onChange={() => handleDayPicker("Friday")}
              />
              <label htmlFor="day">Friday</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="day"
                name="day"
                value="Saturday"
                onChange={() => handleDayPicker("Saturday")}
              />
              <label htmlFor="day">Saturday</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="day"
                name="day"
                value="Sunday"
                onChange={() => handleDayPicker("Sunday")}
              />
              <label htmlFor="day">Sunday</label>
            </div>
          </div>

          <div className={styles.tile_clickable}>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="radio-button"
                name="time"
                value="8:00 am"
                onChange={() => handleTimePicker("8:00 am")}
              />
              <label htmlFor="time"> 8:00 am</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="time"
                name="time"
                value="11:00 am"
                onChange={() => handleTimePicker("11:00 am")}
              />
              <label htmlFor="time"> 11:00 am</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="time"
                name="time"
                value="2:00 pm"
                onChange={() => handleTimePicker("2:00 pm")}
              />
              <label htmlFor="time"> 2:00 pm</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="time"
                name="time"
                value="5:00 pm"
                onChange={() => handleTimePicker("5:00 pm")}
              />
              <label htmlFor="time"> 5:00 pm</label>
            </div>
            <div className={styles.btn_timeslot_time}>
              <input
                type="radio"
                id="time"
                name="time"
                value="8:00 pm"
                onChange={() => handleTimePicker("8:00 pm")}
              />
              <label htmlFor="time"> 8:00 pm</label>
            </div>
          </div>
        </form>
        <div className={styles.title}>
          <h2>Please select a package</h2>
        </div>
        <div className={styles.tile_clickable}>
          {packagesData.map((pkg) => (
            <div key={pkg.id}>
              <div className={styles.service_tiles}>
                <p>{pkg.description}</p>
                <br />
                <h3>${pkg.price}</h3>
                <ul>
                  {pkg.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {/* <form id="package-form"> */}
                <div className={styles.package_radio_btn}>
                  {" "}
                  <input
                    type="radio"
                    id="radio-button"
                    name="package"
                    value="Select this package"
                    onChange={() => handlePackagePicker(pkg)}
                  />
                  <label htmlFor="package"> Select</label>
                </div>
                {/* </form> */}
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className={styles.btn_go_to_shopping_cart}
            onClick={() => {
              console.log(service);
              // addItemToCart(service);
              // resetUserSelection();
            }}
            disabled={selection.day==='' || selection.time==='' || selection.package===null}
          >
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}
