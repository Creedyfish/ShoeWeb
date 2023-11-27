"use client";
import React from "react";
import Image from "next/image";

function ProductCard() {
  return (
    <div>
      <div className="flex flex-col bg-slate-700 p-2">
        <div className="relative">
          <img
            className="flex"
            src="https://placehold.co/400x400/000000/FFF"
            alt="picture"
            placeholder="empty"
          />
          <div className="absolute bottom-0 text-white p-2">Price</div>
        </div>
        asdasd
      </div>
    </div>
  );
}

export default ProductCard;
