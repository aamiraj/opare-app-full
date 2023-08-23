"use client";

import { products } from "@/data/productsdata";
import { useParams } from "next/navigation";
import StarRating from "@/components/StarRating";
import React from "react";
import ProductCarousel from "./ProductCarousel";
const ProductDetails = () => {
  const { id } = useParams();
  const foundProd = products.find((prod) => id === prod.id);
  return (
    <div>
      <div className="min-h-screen max-w-[1080px] mx-auto bg-base-100 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProductCarousel carousels={foundProd?.img ? foundProd.img : []} />
          <div className="">
            <h2 className="text-3xl font-bold">
              {foundProd?.title ? foundProd.title : "No data."}
            </h2>
            <p className="badge block my-2">
              {foundProd?.category ? foundProd.category : "No data."}
            </p>
            <StarRating
              stars={parseInt(foundProd?.rating ? foundProd.rating : "0")}
            />
            <div className="divider"></div>
            <p className="text-2xl text-error my-2">
              TK.{" "}
              <span className="font-extrabold">
                {foundProd?.price ? foundProd.price : "No data."}
              </span>
              <span className="text-sm text-black italic p-2">
                (*excluding Shipping charge and other fees)
              </span>
            </p>
            <div className="flex justify-start items-center gap-4">
              <button className="btn btn-primary">Add to cart</button>
              <button className="btn btn-secondary">Order Now</button>
            </div>
            <div className="divider"></div>
            <h3 className="font-bold my-2">About this product</h3>
            <p className="my-2">
              {foundProd?.description ? foundProd.description : "No data."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
