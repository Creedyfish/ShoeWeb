import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { promises as fs } from "fs";
import { useState } from "react";
import HeroSelection from "./components/HeroSelection";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="pt-12  container top-0 left-0 w-full h-full mx-auto bg-slate-700">
      <div className="">
        <section className="hero-section w-full py-6 ">
          <HeroSelection data={data.featured_product} />
        </section>
        <section className="featured-prods ">
          <div className="flex flex-wrap md:flex-nowrap p-10 gap-4 justify-center">
            {data
              ? data.product.map(
                  (prod: {
                    product_id: number;
                    product_name: string;
                    product_tagline: string;
                    product_image: string;
                    product_price: number;
                  }) => <ProductCard key={prod.product_id} data={prod} />
                )
              : "sd"}
          </div>
        </section>
        <section className="categories  p-10 text-slate-50 text-2xl font-medium">
          <div className="flex flex-wrap justify-center gap-4 md:justify-evenly md:flex-nowrap">
            <div className="relative flex rounded-xl overflow-hidden">
              <Image src="/men.svg" width={373} height={464} alt="" />
              <div className="absolute bg-black opacity-50 flex w-full h-full"></div>
              <div className="absolute bottom-[10%] left-5 bg-rose-600">
                <p className="translate-x-5">MEN'S</p>
              </div>
            </div>
            <div className="relative flex rounded-xl overflow-hidden">
              <Image src="/women.svg" width={373} height={464} alt="" />
              <div className="absolute bg-black opacity-50 flex w-full h-full"></div>

              <div className="absolute bottom-[10%] left-5 bg-rose-600">
                <p className="translate-x-5">WOMEN'S</p>
              </div>
            </div>
            <div className="relative flex rounded-xl overflow-hidden">
              <Image src="/kids.svg" width={373} height={464} alt="" />
              <div className="absolute bg-black opacity-50 flex w-full h-full"></div>
              <div className="absolute bottom-[10%] left-5 bg-rose-600">
                <p className="translate-x-5">KID'S</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
