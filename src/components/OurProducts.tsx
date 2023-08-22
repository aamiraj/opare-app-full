import React from "react";
import ProductsCard from "./ProductsCard";
import { products } from "@/data/productsdata";

const OurProducts = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {products.map((prod, i) => (
          <ProductsCard key={i} appProps={prod} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
