"use client"

import React, { useState } from 'react';
import Image from "next/image";
import logo from "../src/app/asserts/navbar/logo.png";
import cart from "../src/app/asserts/navbar/cart.png";
import profile from "../src/app/asserts/navbar/profile.png";
import search from "../src/app/asserts/navbar/search.png";
import styles from "../src/app/styles/Navbar.module.scss";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [toggleMenubar, setToggleMenubar] = useState(false);


    return (
        <div className={styles.navbar_wrapper}>

            <ul className={styles.hamberger} onClick={() => setToggleMenubar(!toggleMenubar)}>
                <AiOutlineMenu className={styles.hamberger_icon} />
            </ul>

            <ul className={styles.left_ul}>
                <li>Best Sellers</li>
                <li>Skincare</li>
                <li>Body & hand</li>
                <li>Hair</li>
            </ul>
            <div className={styles.image_div}>
                <Image
                    src={logo}
                    alt="logo"
                    className={styles.img}
                />
            </div>
            <ul className={styles.right_ul}>
                <li className={styles.display_no}>AED | د.</li>
                <li className={styles.display_no}>Blog</li>
                <l className={styles.display_no}>About</l>
                <li className={styles.display_no}>
                    <Image
                        src={search}
                        alt="logo"
                    />
                </li>
                <li className={styles.display_no}>
                    <Image
                        src={profile}
                        alt="logo"
                    />
                </li>
                <li>
                    <Image
                        src={cart}
                        alt="logo"
                    />
                </li>
            </ul>


            {
                toggleMenubar ?
                    <div className={styles.menubar}>

                        <div className={styles.search_div_wrapper}>
                            <input type="text" placeholder='Search' />
                            <div className={styles.search_icon_div}>
                                <Image
                                    src={search}
                                    alt="logo"
                                    className={styles.img}
                                />
                            </div>
                        </div>
                        <ul className={styles.link}>
                            <li>Best Sellers</li>
                            <li>Skincare</li>
                            <li>Body & hand</li>
                            <li>Hair</li>
                        </ul>

                        <div className={styles.account_div}>
                            <p className={styles.margin_right}>
                                <span className={styles.word}> My account</span>
                                <span className={styles.line}> |</span>
                            </p>
                            <p className={styles.margin_left}>
                                AED
                            </p>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default Navbar