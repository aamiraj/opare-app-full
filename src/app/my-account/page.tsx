import AddressCard from "@/components/Checkout/AddressCard";
import ProfileCard from "@/components/MyAccount/ProfileCard";
import StatCard from "@/components/MyAccount/StatCard";
import React from "react";

const page = () => {
  return (
    <section className="max-w-[1360px] mx-auto z-10">
      <div className="drawer lg:drawer-open">
        <input id="profile-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          {/* Page content here */}
          <label
            htmlFor="profile-sidebar"
            className="btn btn-secondary my-4 w-72 drawer-button lg:hidden"
          >
            Account management
          </label>

          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <ProfileCard />
            <AddressCard />
            <StatCard />
            <div></div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="profile-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 min-h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <p className="font-semibold text-2xl">Account management</p>
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <a>My Address</a>
            </li>
            <li>
              <a>My Orders</a>
            </li>
            <li>
              <a>My Cancels</a>
            </li>
            <li>
              <a>My Reviews</a>
            </li>
            <li>
              <a>My Wishlist</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
