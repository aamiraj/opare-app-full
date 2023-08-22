import Image from "next/image";
import React from "react";
import Spice from "../assets/spice.jpg";
import Link from "next/link";

interface Details {
  id: string;
  title: string;
  img: string;
  quantity: string | number;
  price: string | number;
  description: string;
  category: string;
  reviews: Array<{}>;
  rating: string;
}

const ProductsCard = ({ appProps }: { appProps: Details }) => {
  const { id, title, category, price } = appProps;
  return (
    <Link href={`/productdetails/${id}`}>
      <div className="card rounded-none w-72 lg:w-64 mx-auto bg-white cursor-pointer hover:shadow-xl">
        <figure className="px-8 pt-8 border border-blue-900 transition ease-out hover:scale-90">
          <Image
            width={200}
            height={200}
            src={Spice}
            alt="Spice"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center font-bold">
          <h2 className="">{title}</h2>
          <p className="badge">{category}</p>
          <p>TK. {price}</p>
          <div className="card-actions">
            <button className="btn">Order Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
