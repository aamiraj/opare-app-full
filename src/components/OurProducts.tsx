import React from "react";
import ProductsCard from "./ProductsCard";

const OurProducts = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
};

export default OurProducts;
