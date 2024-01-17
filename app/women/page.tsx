import React from "react";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { getProducts } from "@/queries/apiQueries";
import Image from "next/image";
async function page() {
  const productData = await getProducts();
  return (
    <div className="flex flex-col gap-6">
      <section className="group relative select-none overflow-hidden">
        <div className="absolute w-full h-full bg-opacity-60 bg-black z-20 group-hover:bg-opacity-40 transition-colors duration-300 ease-in-out"></div>
        <div className="absolute z-30 w-full h-full   ">
          <div className="container w-full h-full mx-auto ">
            <div className="absolute bottom-14 flex flex-col  ">
              <div className="text-7xl font-bold text-brandColor ">
                Run with Style
              </div>
              <div className="text-3xl flex font-medium">
                <div className="bg-slate-400 px-2">Women's Shoes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-[25rem]">
          <Image
            src="/womanPage.webp"
            alt="womanHero"
            height={1000}
            width={2000}
            loading="lazy"
            className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </section>
      <section className="featured-prods container mx-auto">
        <div className="md:grid md:grid-cols-4 flex flex-wrap justify-center gap-4 no-drag">
          {productData
            ? productData.map((prod: any) => (
                <Link
                  className="flex md:w-full"
                  key={prod.product_id}
                  href={`/product/${prod.product_id}`}
                >
                  <ProductCard
                    data={{
                      id: prod.id,
                      name: prod.name,
                      desc: prod.tagline,
                      image: prod.image,
                      price: prod.price,
                      bgcolor: prod.bgcolor,
                      category: "Women's Shoes",
                    }}
                  />
                </Link>
              ))
            : ""}
        </div>
      </section>
    </div>
  );
}

export default page;
