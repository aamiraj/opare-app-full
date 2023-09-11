import AddressCard from "@/components/AddressCard";
import CartReciept from "@/components/CartReciept";
import PaymentOption from "@/components/PaymentOption";
import React from "react";

const page = () => {
  return (
    <section className="max-w-[1360px] mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-[320px] lg:w-[512px] mx-auto">
          <AddressCard />
          <PaymentOption />
        </div>
        <div>
          <CartReciept />
          <div className="flex justify-center items-center">
          <button type="button" className="btn btn-secondary">Confirm your order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
