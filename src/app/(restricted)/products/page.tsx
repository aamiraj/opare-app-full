import React from "react";
import { products } from "@/data/productsdata";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold lg:text-4xl text-2xl">
          All of your products are here
        </h1>
      </div>
      <div className="w-11/12 overflow-x-auto p-4 mx-auto">
        <div className="flex flex-col gap-4">
          {/* head */}
          <div className="divider"></div>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-2">
              <h4>Id</h4>
              <h4 className="block lg:hidden">Product</h4>
              <h4 className="hidden lg:block">Image</h4>
              <h4 className="hidden lg:block">Name</h4>
              <h4 className="hidden lg:block">Price{"(Tk.)"}</h4>
              <h4 className="hidden lg:block">Category</h4>
              <h4 className="hidden lg:block">Avg.Rating</h4>
              <h4 className="hidden lg:block">Stock</h4>
            </div>
          </div>
          <div>
            {/* row */}
            {products.map((prod, i) => (
              <div key={i} className="hover:bg-base-300">
                <div className="divider h-0 m-0"></div>
                <Link href={`products/${prod.id}`}>
                  <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 p-2">
                    <p className=" text-center">{prod.id}</p>
                    <div className="block lg:hidden">
                      <figure className="flex justify-center items-center">
                        <Image
                          src={prod.img[0]}
                          alt="product"
                          width={50}
                          height={50}
                        />
                      </figure>
                      <div className="flex flex-col gap-0 justify-start items-start">
                        <p className="text-sm font-bold">{prod.title}</p>
                        <span className="text-sm">Regular:{prod.price}Tk.</span>
                        <span className="text-sm">
                          Discounted:{prod.price - prod.discount * prod.price}Tk.
                        </span>
                        <span className="text-xs font-thin italic">
                          {prod.category}
                        </span>
                        <span className="text-xs font-thin italic">
                          {prod.stock}
                        </span>
                      </div>
                    </div>
                    <figure className="hidden lg:flex justify-center items-center">
                      <Image
                        src={prod.img[0]}
                        alt="product"
                        width={50}
                        height={50}
                      />
                    </figure>
                    <p className="hidden lg:block">{prod.title}</p>
                    <p className="hidden lg:flex flex-col gap-0 justify-start items-start text-center">
                      <span className="text-sm">Regular:{prod.price}</span>
                      <span className="text-sm">
                        Discounted:{prod.price - prod.discount * prod.price}
                      </span>
                    </p>
                    <p className="hidden lg:block text-center">
                      {prod.category}
                    </p>
                    <p className="hidden lg:block text-center">
                      {prod.avgRating}
                    </p>
                    <p className="hidden lg:block text-center">{prod.stock}</p>
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
