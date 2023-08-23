import Image, { StaticImageData } from "next/image";
import React from "react";

const ProductCarousel = ({
  carousels,
}: {
  carousels: Array<StaticImageData>;
}) => {
  return (
    <div className="p-2 border border-red-200">
      <div className="carousel w-full">
        {carousels.map((cars, i) => (
          <div key={i} id={"item" + i} className="carousel-item w-full">
            <Image alt="Carousel products" src={cars} width={400} height={400} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {carousels.map((cars, i) => (
          <a key={i} href={"#item" + i}>
            <Image alt="Carousel products" src={cars} width={50} height={50} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
