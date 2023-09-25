import CartLarge from "@/components/Cart/CartLarge";
import CartReciept from "@/components/Cart/CartReciept";
import CartSmall from "@/components/Cart/CartSmall";
import React from "react";

const page = () => {
  return (
    <section className="max-w-[1360px] mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="hidden md:block md:col-span-2">
        <CartLarge />
      </div>
      <div className="block md:hidden">
        <CartSmall />
      </div>
      <div className="w-full h-full bg-white p-8">
        <CartReciept />
      </div>
    </section>
  );
};

export default page;
