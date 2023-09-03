"use client"
import Link from "next/link";
import React from "react";
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from "react-icons/hi";
const BottomNav = () => {
  const [user] = React.useState(false);

  return (
    <div className="block m-16 lg:hidden">
      <div className="btm-nav bg-white border border-t">
        <Link href="/" type="button">
          <HiOutlineHome />
          <span className="btm-nav-label">Home</span>
        </Link>
        <Link href="/cart" type="button">
          <HiOutlineShoppingCart />
          <span className="btm-nav-label">Cart</span>
        </Link>
        {user ? (
          <Link href="/profile" type="button">
            <HiOutlineUserCircle />
            <span className="btm-nav-label">My Account</span>
          </Link>
        ) : (
          <Link href="/log-in" type="button">
            <HiOutlineUserCircle />
            <span className="btm-nav-label">Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
