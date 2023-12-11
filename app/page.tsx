import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { promises as fs } from "fs";
import { useState } from "react";
import HeroSelection from "./components/HeroSelection";
import Slider from "./components/Slider";
import { cookies } from "next/headers";
import { getfeatProds } from "./queries/apiQueries";

export default async function Home() {
  // const data = await getfeatProds();

  return (
    <main className="pt-20  container top-0 left-0 w-full h-full mx-auto bg-slate-700">
      <div className="">
        <section className="hero-section w-full py-6 overflow-visible">
          {/* <Slider data={data} /> */}
        </section>
        <section className="featured-prods ">
          {/* <div className="flex flex-wrap lg:flex-nowrap p-10 gap-4 justify-center no-drag">
            {data
              ? data.product.map(
                  (prod: {
                    product_id: number;
                    product_name: string;
                    product_tagline: string;
                    product_image: string;
                    product_price: number;
                    bgcolor: string;
                  }) => <ProductCard key={prod.product_id} data={prod} />
                )
              : ""}
          </div> */}
        </section>

        <section className="categories  p-10 text-slate-50 text-2xl font-medium">
          <div className="flex flex-wrap justify-center gap-4 md:justify-evenly lg::gap-px md:flex-nowrap no-drag">
            <button className="relative group flex rounded-xl justify-center overflow-hidden ">
              <Image
                className="group-hover:scale-110 transition-all ease-in-out duration-300"
                src="/men.webp"
                width={373}
                height={464}
                alt=""
              />
              <div className="absolute bg-black opacity-50 group-hover:opacity-40 flex w-full h-full transition-all ease-in-out duration-300"></div>
              <div className="absolute group-hover:translate-x-5 bottom-[10%]  left-5 bg-rose-600 transition-all ease-in-out duration-300">
                <p className="translate-x-5 group-hover:translate-x-0 transition-all ease-in-out duration-300">
                  MEN&apos;S
                </p>
              </div>
            </button>
            <button className="relative group flex rounded-xl justify-center overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all ease-in-out duration-300"
                src="/women.webp"
                width={373}
                height={464}
                alt=""
              />
              <div className="absolute bg-black opacity-50 group-hover:opacity-40 flex w-full h-full transition-all ease-in-out duration-300"></div>

              <div className="absolute group-hover:translate-x-5 bottom-[10%] left-5 bg-rose-600 transition-all ease-in-out duration-300">
                <p className="translate-x-5 group-hover:translate-x-0  transition-all ease-in-out duration-300">
                  WOMEN&apos;S
                </p>
              </div>
            </button>
            <button className="relative group flex rounded-xl justify-center overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all ease-in-out duration-300"
                src="/kids.webp"
                width={373}
                height={464}
                alt=""
              />
              <div className="absolute bg-black opacity-50 group-hover:opacity-40 flex w-full h-full transition-all ease-in-out duration-300 "></div>
              <div className="absolute group-hover:translate-x-5 bottom-[10%] left-5 bg-rose-600 transition-all ease-in-out duration-300">
                <p className="translate-x-5 group-hover:translate-x-0 transition-all ease-in-out duration-300">
                  KID&apos;S
                </p>
              </div>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
