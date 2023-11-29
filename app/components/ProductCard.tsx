"use client";
import React from "react";
import Image from "next/image";

interface Props {
  data: {
    product_id: number;
    product_name: string;
    product_tagline: string;
    product_image: string;
    product_price: number;
  };
}

function ProductCard({ data }: Props) {
  return (
    <div>
      <div className="flex flex-col bg-slate-800 p-6 rounded-xl">
        <div className="relative py-10">
          <img
            className=" w-52 h-28"
            src={`/${data.product_image}`}
            alt={data.product_name}
          />
          <div className="absolute bottom-0 rounded-lg font-bold text-slate-800 bg-slate-300 px-3 py-1">
            ${data.product_price}
          </div>
        </div>
        <div className="py-2">
          <div className="font-bold text-xl text-slate-50">
            {data.product_name}
          </div>
          <div className="font-normal text-base text-slate-50">
            Men & Women Running Shoes
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
