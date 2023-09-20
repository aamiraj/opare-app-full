"use client";

import React from "react";

const MIN_PRICE = 0;
const MAX_PRICE = 10000;

const FilterByPrice = () => {
  const [price, setPrice] = React.useState(MAX_PRICE);

  function handleChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    if (value > MAX_PRICE) {
      setPrice(MAX_PRICE);
    } else if (value < MIN_PRICE) {
      setPrice(MIN_PRICE);
    } else {
      setPrice(value);
    }
  }
  return (
    <div className="my-2">
      <input
        type="range"
        min={MIN_PRICE}
        max={MAX_PRICE}
        value={price}
        className="range range-primary range-xs"
        step="100"
        onChange={handleChangePrice}
      />
      <input
        type="number"
        min={MIN_PRICE}
        max={MAX_PRICE}
        placeholder="Price"
        value={price}
        onChange={handleChangePrice}
        className="input input-primary w-full max-w-xs"
      />
    </div>
  );
};

export default FilterByPrice;
