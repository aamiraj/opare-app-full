"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CartReciept = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1 p-4 text-md font-bold">
      <div className="flex items-center justify-between">
        <p>Subtotal</p>
        <p>Tk. 400</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Shipping</p>
        <p>Tk. 60</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Offer(-10%)</p>
        <p>- Tk. 40</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Promo code</p>
        <p>- Tk. 50</p>
      </div>
      <div className="divider m-0"></div>
      <div className="flex items-center justify-between text-secondary">
        <p>Total</p>
        <p>Tk. 370</p>
      </div>
      <div className="flex justify-center items-center mt-8">
        {pathname === "/cart" ? (
          <Link href="/checkout" className="w-full btn btn-secondary">
            Checkout
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CartReciept;
