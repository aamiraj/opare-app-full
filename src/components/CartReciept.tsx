import React from "react";

const CartReciept = () => {
  return (
    <div className="grid grid-cols-1 gap-1 p-4 text-md font-bold">
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
        <button type="button" className=" w-full btn btn-secondary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartReciept;
