import React from "react";

const StatCard = () => {
  return (
    <div className="my-2 bg-white p-8 ">
      <div className="grid grid-cols-2 gap-2">
        <a className="link hover:link-secondary">My Orders</a>
        <p className="text-lg text-secondary">10</p>
        <a className="link hover:link-secondary">My Cancels</a>
        <p className="text-lg text-secondary">3</p>
        <a className="link hover:link-secondary">My Reviews</a>
        <p className="text-lg text-secondary">8</p>
        <a className="link hover:link-secondary">My Wishlists</a>
        <p className="text-lg text-secondary">17</p>
      </div>
    </div>
  );
};

export default StatCard;
