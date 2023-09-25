"use client";

import React from "react";
import "../../styles/navbar.css";
import { menus } from "@/data/menus";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="drawer">
      <input className="drawer-toggle" id="appdrawer" type="checkbox" />
      <div className="drawer-content hidden lg:block">
        {/* navbar*/}
        <div className="navbar justify-between bg-primary">
          <div className="hidden lg:block max-w-[1360px] mx-auto">
            {/** menus for large device */}

            <ul className="menu menu-horizontal">
              {menus.map((item, i) => (
                <li key={i}>
                  <Link className="link text-white no-underline" href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/**drawer side */}
      <div className="drawer-side z-50">
        <label htmlFor="appdrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-56 h-full bg-base-100">
          {/* Sidebar content here */}
          {menus.map((item, i) => (
            <li key={i}>
              <Link className="link no-underline" href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
