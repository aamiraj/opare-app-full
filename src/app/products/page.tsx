import React from "react";
import { products } from "@/data/productsdata";
import ProductsCard from "@/components/ProductsCard";

const page = () => {
  return (
    <section>
      <h1>Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {products.map((prod, i) => (
          <ProductsCard key={i} appProps={prod} />
        ))}
      </div>
    </section>
  );
};

export default page;
