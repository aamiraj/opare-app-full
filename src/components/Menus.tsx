import { menus } from "@/data/productsdata";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Menus = () => {
  return (
    <div className="w-full mx-auto bg-primary p-8 lg:p-4">
      <div className="flex flex-col lg:flex-row gap-3 lg:justify-between lg:items-center max-w-[1360px] mx-auto">
        {/** menus for large device */}
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal text-base-100">
            {menus.map((item, i) => (
              <li key={i}>
                <a>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/** mesnus for small devices */}

        <div className="block lg:hidden order-2">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="flex items-center text-white">
              Our Deals
              <span className="p-2">
                <FaAngleDown />
              </span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-10 menu menu-sm p-2 shadow bg-base-100 w-32"
            >
              {menus.map((item, i) => (
              <li key={i}>
                <a>{item.name}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>

        <form className="form-control lg:w-1/2 flex-row gap-2 order-1">
          <input
            type="text"
            placeholder="Search for products"
            className="input input-primary input-sm md:input-md w-full"
          />
          <button type="button" className="btn btn-sm md:btn-md btn-secondary">
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Menus;
