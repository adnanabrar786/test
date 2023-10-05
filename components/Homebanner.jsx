import React from 'react';
import Image from "next/image";
import hero from "../src/app/asserts/home/hero.png";
import styles from "../src/app/styles/Homebanner.module.scss";


const Homebanner = () => {
  return (
    <div className={styles.homebanner}>
      <div className={styles.details_wrapper}>
      <div className={styles.details_sub_wrapper}>
          <h6>99.00% natural. 100% you</h6>
          <h2>Radiant Beauty, Naturally.</h2>
          <p>Discover the science behind naturally effective ingredients for transformative results</p>
          <div>
            <button>SHOP NOW</button>
          </div>

        </div>

      </div>
      <div className={styles.image_div}>
        <Image
          className={styles.img}
          src={hero}
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Homebanner