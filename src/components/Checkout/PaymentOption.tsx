"use client"
import React from "react";
import Cash from "../../assets/cashondelivery.png";
import Bkash from "../../assets/bkash.jpg";
import Image from "next/image";

const PaymentOption = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div className="bg-white p-8">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="flex justify-center items-center gap-2 text-xl font-semibold">
            <Image src={Cash} alt="cash on delivery" width={100} />
            Cash on delivery
          </span>
          <input
            onChange={handleChange}
            type="radio"
            value="cash"
            name="paymentoption"
            className="radio radio-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="flex justify-center items-center gap-2 text-xl font-semibold">
            <Image src={Bkash} alt="bkash" width={100} />
            {"bKash (coming soon)"}
          </span>
          <input
            onChange={handleChange}
            type="radio"
            value="bkash"
            name="paymentoption"
            className="radio radio-primary"
            disabled
          />
        </label>
      </div>
    </div>
  );
};

export default PaymentOption;
