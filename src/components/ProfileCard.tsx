import React from "react";

const ProfileCard = () => {
  return (
    <div className="my-2 bg-white p-8 ">
      <div>
        <h3 className="text-xl">Personal information</h3>
        <h4>John Doe</h4>
        <p>john@gmail.com</p>
        <p>+8801XXXXXXXXX</p>
        <a className="link link-secondary">Edit</a>
      </div>
    </div>
  );
};

export default ProfileCard;
