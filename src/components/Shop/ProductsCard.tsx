import Image, { StaticImageData } from "next/image";
import React from "react";
import Spice from "../../assets/spice1.jpg";
import Link from "next/link";
import { ProductsType } from "@/data/productsdata";

const ProductsCard = ({ appProps }: { appProps: ProductsType }) => {
  const { id, title, category, price } = appProps;
  return (
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
        <p className="badge badge-info">{category}</p>
        <p>TK. {price}</p>
        <div className="card-actions">
          <Link href={`/productdetails/${id}`} className="btn btn-secondary">
            See this product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
