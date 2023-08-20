import Image from "next/image";
import React from "react";
import Spice from "../assets/spice.jpg";

const ProductsCard = () => {
  return (
    <>
      <div className="card w-80 mx-auto bg-white cursor-pointer hover:shadow-xl">
        <figure className="px-10 pt-10">
          <Image width={200} src={Spice} alt="Spice" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Tarmuric Powder 200gm</h2>
          <p>Spices</p>
          <p>TK. 100</p>
          <div className="card-actions">
            <button className="btn">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
