"use client";

import { products } from "@/data/productsdata";
import { useParams } from "next/navigation";
import StarRating from "@/components/StarRating";
import React from "react";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
;

const ProductDetails = () => {
  const { id } = useParams();
  const foundProd = products.find((prod) => id === prod.id);
  return (
    <div>
      <div className="min-h-screen max-w-[1080px] mx-auto bg-base-100 p-12">
        <div className="grid grid-cols-2 gap-4">
          <ProductCarousel carousels={foundProd?.img ? foundProd.img : []} />
          <div className="">
            <h2 className="text-5xl font-bold">
              {foundProd?.title ? foundProd.title : "No data."}
            </h2>
            <p className="badge block my-2">
              {foundProd?.category ? foundProd.category : "No data."}
            </p>
            <StarRating
              stars={parseInt(foundProd?.rating ? foundProd.rating : "0")}
            />
            <p className="text-3xl text-error my-2">
              TK.{" "}
              <span className="font-extrabold">
                {foundProd?.price ? foundProd.price : "No data."}
              </span>
            </p>
            <button className="btn btn-primary">Add to cart</button>
            <p>{foundProd?.price ? foundProd.price : "No data."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
