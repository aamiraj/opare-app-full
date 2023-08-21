import React from "react";

const Menus = () => {
  return (
    <div className="w-full mx-auto bg-primary py-8 lg:py-4">
      <div className="flex justify-around lg:justify-between items-center max-w-[1360px] mx-auto">
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

        <div className="block lg:hidden">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={1} className="text-white">
              Our Products
            </label>
            <ul
              tabIndex={1}
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

        <form className="form-control flex-row gap-2">
          <input
            type="text"
            placeholder="Search for products"
            className="input input-primary input-sm md:input-md w-full max-w-sm"
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
