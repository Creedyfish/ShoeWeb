import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { promises as fs } from "fs";
import { useState } from "react";
import HeroSelection from "./components/HeroSelection";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data = JSON.parse(file);
  console.log(data);

  return (
    <main className="pt-12 bg-red-600 container top-0 left-0 w-full h-full mx-auto">
      <div className="">
        <section className="hero-section w-full bg-blue-400 py-6">
          <HeroSelection data={data.featured_product} />
        </section>
        <section className="featured-prods">
          <div className="flex flex-wrap md:flex-nowrap p-10 gap-4 justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <section className="categories bg-amber-800 px-2">
          <div className="">Men</div>
          <div className="">Women</div>
          <div className="">Kids</div>
        </section>
      </div>
    </main>
  );
}
