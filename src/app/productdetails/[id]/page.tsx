import React from "react";
import ProductDetails from "@/components/ProductDetails";
import Reviews from "@/components/Reviews";

const ProductDetail = () => {
  return (
    <section className=" max-w-[1080px] mx-auto ">
      <ProductDetails />
      <div className="divider"></div>
      <Reviews />
    </section>
  );
};

export default ProductDetail;
