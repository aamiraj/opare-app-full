import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Menus = () => {
  return (
    <div className="w-full mx-auto bg-primary p-8 lg:p-4">
      <div className="flex flex-col lg:flex-row gap-3 lg:justify-between lg:items-center max-w-[1360px] mx-auto">
        {/** menus for large device */}
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal text-base-100">
            <li>
              <a>Spices</a>
            </li>
            <li>
              <a>Mustard Oil</a>
            </li>
            <li>
              <a>Honey</a>
            </li>
          </ul>
        </div>
        {/** mesnus for small devices */}

        <div className="block lg:hidden order-2">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="flex items-center text-white">
              Our Products <span className="p-1">
                <FaAngleDown />
              </span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-10 menu menu-sm p-2 shadow bg-base-100 w-32"
            >
              <li>
                <a>Spices</a>
              </li>
              <li>
                <a>Mustard Oil</a>
              </li>
              <li>
                <a>Honey</a>
              </li>
            </ul>
          </div>
        </div>

        <form className="form-control flex-row gap-2 order-1">
          <input
            type="text"
            placeholder="Search for products"
            className="input input-primary input-sm md:input-md w-full max-w-xs"
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
