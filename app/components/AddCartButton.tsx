"use client";
import React, { use } from "react";

const AddCartButton = () => {
  return (
    <div>
      <button onClick={() => console.log("Add to cart Clicked.")}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddCartButton;
