import AddressCard from "@/components/Checkout/AddressCard";
import CartReciept from "@/components/Cart/CartReciept";
import PaymentOption from "@/components/Checkout/PaymentOption";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

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
          <div className="flex justify-start items-center gap-4 p-4">
            <button type="button" className="btn btn-error">
              <FaArrowLeft/>
              Back to shop
            </button>
            <button type="button" className="btn btn-secondary">
            <FaListCheck />
              Confirm your order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
