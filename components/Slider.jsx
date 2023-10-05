"use client"

import React, { useState } from "react";
import Image from "next/image";
// import "../src/app/styles/slider.css";
import styles from "../src/app/styles/Slider.module.scss";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import pOne from "../src/app/asserts/home/pOne.png";
import pTwo from "../src/app/asserts/home/pTwo.png";
import pThree from "../src/app/asserts/home/pThree.png";

const items = [
    <div className={styles.slider_card_wrapper}>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pOne}
                    alt="logo"
                />
                <h2>Add To Cart</h2>
            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>

        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pOne}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>

        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pOne}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>

        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pOne}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>

        </div>
    </div>,

    <div className={styles.slider_card_wrapper}>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pTwo}
                    alt="logo"
                />
                <h2>Add To Cart</h2>
            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pTwo}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pTwo}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pTwo}
                    alt="logo"
                />
                <h2>Add To Cart</h2>
            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>

    </div>,
    <div className={styles.slider_card_wrapper}>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pThree}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pThree}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pThree}
                    alt="logo"
                />
                <h2>Add To Cart</h2>

            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>
        <div className={styles.slider_card}>
            <div className={styles.slider_image}>
                <Image
                    className={styles.img}
                    src={pThree}
                    alt="logo"
                />
                <h2>Add To Cart</h2>
            </div>
            <p>
                06 - Facial Exfoliant
            </p>
            <p>
                AED 39,00
            </p>
        </div>

    </div>
];



const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slider_sub_container}>
                <div className={styles.slider_heading_div}>
                    <h2>BEST SELLER</h2>
                    <div>
                        <button>
                            View All
                        </button>
                    </div>
                </div>
                <div className={styles.slider_item} >{items[currentIndex]}</div>
                <div className={styles.below_slider_item}>
                    <div className={styles.sucess_btn_wrapper}>
                        <button className={styles.slider_button} onClick={handlePrevious}>
                            <FaLongArrowAltLeft className={styles.arrow_icon} />
                        </button>
                        <button className={styles.slider_button} onClick={handleNext}>
                            <FaLongArrowAltRight className={styles.arrow_icon} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider