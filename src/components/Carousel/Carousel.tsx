"use client";

import React from "react";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
import Carousel1 from "../../assets/1.png";
import Carousel2 from "../../assets/2.png";
import Carousel3 from "../../assets/3.png";

// const indicators = (index: number | undefined) => (
//   <button type="button" className={styles.indicator}></button>
// );

const Carousel = () => {
  return (
    <div>
      <Fade indicators={true} arrows={false}>
        <div className={styles.eachslide}>
          <div>
            <Image src={Carousel1} alt="Carousel" width={1000} />
          </div>
        </div>
        <div className={styles.eachslide}>
          <div>
            <Image src={Carousel3} alt="Carousel" width={1000} />
          </div>
        </div>
        <div className={styles.eachslide}>
          <div>
            <Image src={Carousel2} alt="Carousel" width={1000} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Carousel;
