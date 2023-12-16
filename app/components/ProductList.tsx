"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { data } from "autoprefixer";

interface Props {
  data: {
    product_id: number;
    name: string;
    desc: string;
    image: string;
    price: number;
    bgcolor: string;
    isFeatured: boolean;
  };
}

function ProductList({ data }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="relative w-[200px] font-sans">
      <div className="flex flex-col p-6  relative rounded-xl overflow-clip bg-slate-50">
        <div className="relative  py-10 flex overflow-clip justify-center">
          <div className="w-[13vw] h-[8vw] max-w-[13rem] max-h-[7rem] min-w-[9rem] min-h-[5rem]  ">
            <Image
              className="group-hover:scale-110 transition-all ease-in-out duration-300 image"
              src={`/${data.image}`}
              alt={data.name}
              loading="lazy"
              width={208}
              height={112}
            />
            {data.isFeatured ? (
              <div className="absolute top-0 left-0 rounded-xl flex justify-center w-full items-center text-slate-50 bg-green-500">
                <div>Featured</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="z-10 text-left font-medium text-base flex flex-col">
          <div className="  text-slate-800">
            <span className="text-xs text-slate-500">ID: </span>
            {data.product_id}
          </div>
          <div className="  text-slate-800">
            <span className="text-xs text-slate-500">Name: </span>
            {data.name}
          </div>
          <div className="  text-slate-800">
            <span className="text-xs text-slate-500">Price: </span> $
            {data.price}
          </div>
          <div className="  text-slate-800">
            <span className="text-xs text-slate-500">Desc: </span> {data.desc}
          </div>
          <div className="flex pt-5 gap-4 text-slate-50  ">
            <button
              className="bg-slate-800 flex-1 "
              onClick={() =>
                router.push(`${pathname}/product/${data.product_id}`)
              }
            >
              Edit
            </button>
            <button
              className="bg-slate-800  flex-1 "
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this item?")
                ) {
                  // deleteProduct(data.product_id);
                  console.log("delete");
                }
              }}
            >
              Delete
            </button>
          </div>
          <div></div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-slate-600 to-black opacity-[0.15] group-hover:opacity-0 transition-all ease-in-out duration-300"></div>
      </div>
    </div>
  );
}

export default ProductList;
