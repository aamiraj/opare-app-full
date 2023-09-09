import React from "react";

const AddressCard = () => {
  return (
    <div className="my-2 bg-white p-8 ">
      <div>
        <h3 className="text-xl">Address information</h3>
        <p>Bangabandhu Avenue</p>
        <p>Motijheel - 1215</p>
        <p>Dhaka</p>
        <a className="link link-secondary">Edit</a>
      </div>
    </div>
  );
};

export default AddressCard;
