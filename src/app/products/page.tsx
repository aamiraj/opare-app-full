import OurProducts from "@/components/OurProducts";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1360px] mx-auto z-10">
      <div className="drawer lg:drawer-open">
        <input id="appdrawer2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <OurProducts />
          <label
            htmlFor="appdrawer2"
            className="btn btn-primary my-4 w-[90%] drawer-button lg:hidden"
          >
            Filter and Categories
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="appdrawer2" className="drawer-overlay"></label>
          <div className="p-4 w-56 h-full bg-base-100 text-base-content">
            <div className="grid place-content-start font-bold text-2xl">Products</div>
            <div className="grid place-content-start font-bold">Spices</div>
            <div className="grid  place-content-start font-bold">Mustard Oil</div>
            <div className="grid  place-content-start font-bold">Honey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
