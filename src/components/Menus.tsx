"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/logo_big.png";
import {
  HiMenuAlt2,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineSearch,
} from "react-icons/hi";

const Menus = () => {
  const [user] = React.useState(false);

  return (
    <div className="w-full mx-auto p-8 lg:p-4">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-3 lg:justify-between max-w-[1360px] mx-auto">
        <div className="flex-none absolute top-8 left-8 lg:hidden">
          <label
            htmlFor="appdrawer"
            className="btn btn-circle btn-secondary text-xl"
          >
            <HiMenuAlt2 />
          </label>
        </div>
        <div className="flex w-[120px] md:w-[200px]">
          <Link href="/">
            <Image src={Logo} alt="Opare logo" width={120} quality={100} />
          </Link>
        </div>

        <div className="join w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search for products"
            className="input input-primary rounded-none w-full"
          />
          <button type="button" className="btn btn-secondary rounded-none">
            <HiOutlineSearch />
          </button>
        </div>

        <div className="gap-2 hidden lg:flex">
          <label className="avatar placeholder">
            <div className="rounded-full w-8">
              <Link href="/cart">
                <HiOutlineShoppingCart />
              </Link>
            </div>
          </label>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span className="text-xl">S</span>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-10 p-2 shadow menu menu-md dropdown-content bg-base-100 w-28"
              >
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/dashboard">dashboard</Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => console.log("Logged out")}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar placeholder">
                <div className="rounded-full w-8">
                  <span>
                    <HiOutlineUserCircle />
                  </span>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-10 p-2 shadow menu menu-md dropdown-content bg-base-100 w-28"
              >
                <li>
                  <Link href="/log-in">Log In</Link>
                </li>
                <li>
                  <Link href="/sign-up">Sign Up</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menus;
