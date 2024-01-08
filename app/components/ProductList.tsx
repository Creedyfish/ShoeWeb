import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { data } from "autoprefixer";
import { deleteProduct } from "@/queries/apiQueries";
import ProductDetails from "./ProductDetails";
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

async function ProductList({ data }: Props) {
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
        <ProductDetails data={data} />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-slate-600 to-black opacity-[0.15] group-hover:opacity-0 transition-all ease-in-out duration-300"></div>
      </div>
    </div>
  );
}

export default ProductList;
