"use client";

import { products } from "@/data/productsdata";
import { useParams } from "next/navigation";
import StarRating from "@/components/StarRating";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import Link from "next/link";

const initialState = { quantity: 1 };
const Min = 1;
const Max = 5;

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "onchange"; payload: number };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  console.log(state.quantity, action.type);
  switch (action.type) {
    case "increment":
      if (state.quantity + action.payload > Max) {
        return { quantity: Max };
      }
      return { quantity: state.quantity + action.payload };
    case "decrement":
      if (state.quantity - action.payload < Min) {
        return { quantity: Min };
      }
      return { quantity: state.quantity - action.payload };
    case "onchange":
      if (action.payload < Min) {
        return { quantity: Min };
      }
      if (action.payload > Max) {
        return { quantity: Max };
      }
      return { quantity: action.payload };
    default:
      return state;
  }
};

const ProductDetails = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { id } = useParams();
  const foundProd = products.find((prod) => id === prod.id);

  if (typeof foundProd === undefined) {
    return <h1>No Products Found.</h1>;
  }

  if (foundProd) {
    return (
      <>
        <div className="min-h-[90vh]bg-base-100 p-12">
          <div className="hidden md:block text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <a href={"#" + foundProd.title}>{foundProd.title}</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProductCarousel carousels={foundProd.img} />
            <div className="">
              <h2 className="text-3xl font-bold">{foundProd.title}</h2>
              <p>
                <span className="badge bg-info m-2">{foundProd.category}</span>
                <span
                  className={`badge m-2 ${
                    foundProd.stock ? "bg-success" : "bg-error"
                  }`}
                >
                  {foundProd.stock ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <StarRating stars={parseInt(foundProd.avgRating)} />
              <div className="divider"></div>
              <p className="text-2xl text-error my-2">
                TK. <span className="font-extrabold">{foundProd.price}</span>
                <span className="text-sm text-black italic p-2">
                  (*excluding Shipping charge and other fees)
                </span>
              </p>
              <div className="flex flex-col lg:flex-row justify-start items-center gap-4">
                <div className="join">
                  <button
                    onClick={() => dispatch({ type: "decrement", payload: 1 })}
                    className="btn join-item"
                  >
                    -
                  </button>
                  <input
                    name="quantity"
                    type="number"
                    value={state.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "onchange",
                        payload: parseInt(e.target.value),
                      })
                    }
                    className="input input-bordered rounded-none w-full lg:w-[75px] max-w-xs"
                  />
                  <button
                    onClick={() => dispatch({ type: "increment", payload: 1 })}
                    className="btn join-item"
                  >
                    +
                  </button>
                </div>

                <button className="btn btn-primary w-full max-w-xs lg:w-auto">
                  Add to cart
                </button>
                <button className="btn btn-secondary w-full max-w-xs lg:w-auto">
                  Order Now
                </button>
              </div>
              <div className="divider"></div>
              <h3 className="font-bold my-2">About this product</h3>
              <p className="my-2">
                {foundProd?.description ? foundProd.description : "No data."}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProductDetails;
