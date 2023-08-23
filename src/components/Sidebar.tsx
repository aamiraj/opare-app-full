import React from "react";
import { amounts, categories } from "@/data/productsdata";
import FilterByPrice from "./FilterByPrice";

const Sidebar = ({ Appprops }: { Appprops: React.ReactNode }) => {
  return (
    <div className="max-w-[1360px] mx-auto z-10">
      <div className="drawer lg:drawer-open">
        <input id="appdrawer2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="appdrawer2"
            className="btn btn-secondary my-4 w-[90%] drawer-button lg:hidden"
          >
            Filter and Categories
          </label>
          {/* Page content here */}
          {Appprops}
        </div>
        <div className="drawer-side">
          <label htmlFor="appdrawer2" className="drawer-overlay"></label>
          <div className="p-4 w-56 h-full bg-base-100 text-base-content">
            {/** by category products */}
            <div className="grid place-content-start font-bold text-2xl">
              By Category
            </div>
            {categories.map((cat) => (
              <div key={cat.id} className="grid place-content-start font-bold">
                <a className="p-1 m-1 cursor-pointer hover:text-primary">
                  {cat.categoryName}
                </a>
              </div>
            ))}
            <div className="divider"></div> 
            {/** by amount products */}
            <div className="grid place-content-start font-bold text-2xl">
              By Amount
            </div>
            {amounts.map((amnt) => (
              <div key={amnt.id} className="grid place-content-start font-bold">
                <a className="p-1 m-1 cursor-pointer hover:text-primary">
                  {amnt.amount}
                </a>
              </div>
            ))}
            <div className="divider"></div> 
            {/** by price products */}
            <div className="grid place-content-start font-bold text-2xl">
              By Price
            </div>
            <FilterByPrice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
