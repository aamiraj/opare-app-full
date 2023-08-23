import Image, { StaticImageData } from "next/image";
import React from "react";
import { Fade } from "react-slideshow-image";
import "../styles/carousel.css";

const ProductCarousel = ({
  carousels,
}: {
  carousels: Array<StaticImageData>;
}) => {
  return (
    <div className="p-2 border border-red-200">
      <div>
        <Fade indicators={false} arrows={true} canSwipe={true}>
          {carousels.map((caros, i) => (
            <div key={i} className="eachslide">
              <div style={{ width: "100%" }}>
                <Image src={caros} alt="Carousel" width={400} height={400} />
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {carousels.map((caros, i) => (
          <div key={i}>
            <Image alt="Carousel products" src={caros} width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
