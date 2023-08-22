"use client";

import { products } from "@/data/productsdata";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Spice from "../../../assets/spice.jpg";
import StarRating from "@/components/StarRating";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const foundProd = products.find((prod) => id === prod.id);

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={Spice}
            width={500}
            height={500}
            alt={foundProd?.title ? foundProd.title : "No data."}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-5xl font-bold">
              {foundProd?.title ? foundProd.title : "No data."}
            </h2>
            <p className="badge block my-2">
              {foundProd?.category ? foundProd.category : "No data."}
            </p>
            <StarRating stars={parseInt(foundProd?.rating ? foundProd.rating : "0")} />
            <p className="text-3xl text-error my-2">
              TK. <span className="font-extrabold">{foundProd?.price ? foundProd.price : "No data."}</span>
            </p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
