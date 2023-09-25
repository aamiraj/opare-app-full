"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export interface InputType {
  title: string;
  img: Array<string>;
  price: number | string;
  quantity: number | string;
  unit: string;
  stock: boolean | string;
  category: Array<string>;
  description: string;
}

const page = () => {
  const { register, handleSubmit } = useForm<InputType>();
  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);

  return (
    <div>
      <div>
        <h1>Add a product</h1>
      </div>
      <div className="w-11/12 mx-auto p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-start gap-8 flex-col lg:flex-row"
        >
          <div className="w-full">
            {/* {product title } */}
            <label className="label" htmlFor="title">
              Title of your product
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="Type here"
              className="input input-secondary input-bordered w-full"
            />
            {/* product image  */}
            <label className="label" htmlFor="img">
              Product images
            </label>
            <input
              type="file"
              {...register("img")}
              className="file-input file-input-secondary file-input-bordered w-full"
              multiple
            />
            {/* product price  */}
            <label className="label" htmlFor="price">
              Product price
            </label>
            <input
              type="number"
              {...register("price")}
              placeholder="Type here"
              className="input input-secondary input-bordered w-full"
            />
            {/* product quantity */}
            <label className="label" htmlFor="quantity">
              Product quantity
            </label>
            <input
              type="number"
              {...register("quantity")}
              placeholder="Type here"
              className="input input-secondary input-bordered w-full"
            />
            {/* product unit  */}
            <label className="label" htmlFor="unot">
              Product unit
            </label>
            <select
              {...register("unit")}
              className="select select-secondary select-bordered w-full"
            >
              <option disabled>
                Choose product unit
              </option>
              <option>gm</option>
              <option>kg</option>
            </select>
            {/* product stock  */}
            <label className="label" htmlFor="stock">
              Product stock
            </label>
            <select
              {...register("stock")}
              className="select select-secondary select-bordered w-full"
            >
              <option disabled>
                Is this product in stock?
              </option>
              <option>In stock</option>
              <option>Out stock</option>
            </select>
          </div>
          <div className="w-full">
            {/* product description */}
            <label className="label" htmlFor="desc">
              Product description
            </label>
            <textarea
              {...register("description")}
              className="w-full min-h-[200px] textarea textarea-secondary textarea-bordered"
              placeholder="Description"
            ></textarea>
            {/* product category */}
            <label className="label" htmlFor="category">
              Product category
            </label>
            <input
              {...register("category")}
              type="text"
              placeholder="Type here"
              className="input input-secondary input-bordered w-full"
            />
            <br />
            <br />
            <button type="submit" className="btn btn-secondary">
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
