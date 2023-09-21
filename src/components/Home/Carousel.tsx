"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../styles/carousel.css";

const Carousel = ({ carousels }: { carousels: Array<StaticImageData> }) => {
  const indicators = (index: number | undefined) => (
    <div className="indicator"></div>
  );
  return (
    <div>
      <Fade indicators={indicators}>
        {carousels.map((caros, i) => (
          <div key={i} className="eachslide">
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
