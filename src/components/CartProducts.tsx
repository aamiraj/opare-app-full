"use client";

import Image from "next/image";
import React from "react";
import Spice from "../assets/spice1.jpg";
import {
  HiOutlineTrash,
  HiOutlineHeart,
  HiOutlineRefresh,
  HiOutlinePlus,
} from "react-icons/hi";

const CartProducts = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="flex flex-col border border-primary gap-1 pt-1 w-80 mx-auto bg-white">
      <div className="flex justify-evenly items-center gap-1 py-1">
        <figure className="border border-secondary-300">
          <Image src={Spice} alt="spice" width={128} height={128} />
        </figure>
        <div className="flex flex-col items-start gap-1 py-1">
          <h4>Spice 200g</h4>
          <p>Spice</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 py-1">
        <div className="grid grid-cols-2 gap-0 py-1">
          <div className="text-start">
            <p>Total:</p>
            <p>Item Price:</p>
            <p>Shipping Charge:</p>
          </div>
          <div className="text-end">
            <p>120 Tk.</p>
            <p>100 Tk.</p>
            <p>20 Tk.</p>
          </div>
        </div>
        <div className="join py-1">
          <button className="btn border join-item">-</button>
          <input
            defaultValue={1}
            name="quantity"
            type="number"
            className="input input-bordered rounded-none w-[75px] max-w-xs"
          />
          <button className="btn border join-item">+</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0 pt-1">
        {checked ? (
          <button
            type="button"
            className="flex justify-center items-center border-t border-gray-300"
          >
            <HiOutlineTrash style={{ margin: "8px" }} />
          </button>
        ) : (
          <button
            type="button"
            className="flex justify-center items-center border-t border-gray-300"
          >
            <HiOutlinePlus style={{ margin: "8px" }} />
          </button>
        )}
        <button
          type="button"
          className="flex justify-center items-center border-t border-x border-gray-300"
        >
          <HiOutlineRefresh style={{ margin: "8px" }} />
        </button>
        <button
          type="button"
          className="flex justify-center items-center border-t border-gray-300"
        >
          <HiOutlineHeart style={{ margin: "8px" }} />
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
