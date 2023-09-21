import Link from "next/link";
import React from "react";

const AddressCard = () => {
  return (
    <div className="my-2 bg-white p-8 ">
      <div>
        <h3 className="text-2xl font-bold">Shipping Address</h3>
        <p>John Doe</p>
        <p>+8801XXXXXXXXX</p>
        <p>Holding #2, Boro bazar road</p>
        <p>Debidwar</p>
        <p>Comilla</p>
        <p>Chattagram</p>
        <Link className="link link-secondary" href="/shipping-address-form">Edit</Link>
      </div>
    </div>
  );
};

export default AddressCard;
