import React from "react";
import { orders } from "@/data/orderedProducts";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold lg:text-4xl text-2xl">Orders are here</h1>
      </div>
      <div className="w-full lg:w-11/12 overflow-x-auto mx-auto">
        <div className="flex flex-col gap-4">
          {/* head */}
          <div className="divider"></div>
          <div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
              <h4>Id</h4>
              <h4>Customer</h4>
              <h4 className="hidden lg:block">Method</h4>
              <h4>Price</h4>
              <h4 className="hidden lg:block">Status</h4>
              <h4 className="hidden lg:block">Address</h4>
            </div>
          </div>
          <div>
            {/* row */}
            {orders.map((prod, i) => (
              <div key={i} className="hover:bg-base-300">
                <div className="divider h-0 m-0"></div>
                <Link href={`orders/${prod.id}`}>
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 p-2">
                    <p className=" text-center">{prod.id}</p>
                    <p className="flex flex-col gap-0 justify-start items-start text-center">
                      {prod.customer.name}
                      <span className="text-xs font-thin italic lg:hidden">{prod.method}</span>
                      <span className="text-xs font-thin italic lg:hidden">{prod.status}</span>
                      </p>
                    <p className="hidden lg:block text-center">{prod.method}</p>
                    <p className=" text-center">Tk. 
                      {prod.subTotal + prod.shippingCost - prod.discount}
                    </p>
                    <p className="hidden lg:block text-center">{prod.status}</p>
                    <p className="hidden lg:block text-center">
                      {prod.customer.address.district}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
