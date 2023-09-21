import React from "react";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Reviews from "@/components/ProductDetails/Reviews";

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
