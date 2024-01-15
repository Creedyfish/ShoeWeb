"use client";
import React from "react";
import Image from "next/image";

interface Props {
  data: {
    id: number;
    name: string;
    desc: string;
    image: string;
    price: number;
    bgcolor: string;
  };
}

function ProductCard({ data }: Props) {
  return (
    <button className="group relative no-drag">
      <div
        className="flex flex-col p-6  relative rounded-xl overflow-clip"
        style={{ backgroundColor: data.bgcolor }}
      >
        <div className="relative  py-10 flex overflow-clip justify-center no-drag">
          <div className="w-[13vw] h-[8vw] max-w-[13rem] max-h-[7rem] min-w-[9rem] min-h-[5rem]  group-hover:z-10 transition-all ease-in-out duration-300 ">
            <Image
              className="group-hover:scale-110 transition-all ease-in-out duration-300 image"
              src={`/${data.image}`}
              alt={data.name}
              width={208}
              height={112}
            />
          </div>
          <div className="absolute z-10 bottom-0 left-0 rounded-lg font-bold text-slate-50 bg-[#E7043C] px-3 py-1">
            ${data.price}
          </div>
        </div>
        <div className="py-2 z-10 text-left">
          <div className="font-bold text-base md:text-xl text-slate-50">
            {data.name}
          </div>
          <div className="font-normal text-base text-slate-50">
            Men & Women Running Shoes
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-slate-600 to-black opacity-[0.15] group-hover:opacity-0 transition-all ease-in-out duration-300"></div>
      </div>
    </button>
  );
}

export default ProductCard;
