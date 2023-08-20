"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo_big.png";
import { BsCart3, BsPersonCircle } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [user] = React.useState(true);

  return (
    <div className="drawer">
      <input className="drawer-toggle" id="appdrawer" type="checkbox" />
      <div className="drawer-content animate__animated animate__fadeInDown">
        {/* navbar*/}
        <div className="navbar justify-between bg-base-100">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="appdrawer"
              className="btn btn-circle btn-ghost text-xl"
            >
              <HiMenuAlt2 />
            </label>
          </div>

          <div className="flex">
            <Link href="/">
              <Image src={Logo} alt="Opare logo" width={170} quality={100} />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal gap-1">
              <li>
                <Link className="active" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <label className="avatar placeholder">
              <div className="rounded-full w-8">
                <Link href="/cart">
                  <BsCart3 />
                </Link>
              </div>
            </label>

            {user ? (
              <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-xl">K</span>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-10 p-2 shadow menu menu-xs dropdown-content bg-base-100 w-28"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <label className="avatar placeholder">
                  <div className="rounded-full w-8">
                    <Link href="/cart">
                      <BsPersonCircle />
                    </Link>
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      {/**drawer side */}
      <div className="drawer-side z-50">
        <label htmlFor="appdrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
