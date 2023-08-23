"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";

// const indicators = (index: number | undefined) => (
//   <button type="button" className={styles.indicator}></button>
// );

const Carousel = ({ carousels }: { carousels: Array<StaticImageData> }) => {
  return (
    <div>
      <Fade indicators={true} arrows={false}>
        {carousels.map((caros, i) => (
          <div key={i} className={styles.eachslide}>
            <div>
              <Image src={caros} alt="Carousel" width={1000} height={1000} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Carousel;
