import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="pt-12 bg-red-600">
      <section className="hero-section w-full bg-blue-400 py-6">
        <div className="flex flex-col w-full">
          <div className="flex-wrap md:flex bg-slate-500">
            <div className="featured-item flex-1">
              <div className="product-title">sda</div>
            </div>
            <div className="flex flex-1 featured-prod justify-center">
              <div className="h-[50vw] relative ">
                <img
                  className="h-[50vw] transition-all ease-in-out duration-300 md:translate-y-16"
                  src="/featProd1.svg"
                  alt="sdasd"
                />
              </div>
            </div>
          </div>
          <div className="slider flex justify-center py-4">sdasd</div>
        </div>
      </section>
      <section className="featured-prods">
        <div className="flex flex-wrap p-10 gap-4 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className="categories bg-amber-800">
        <div className="">Men</div>
        <div className="">Women</div>
        <div className="">Kids</div>
      </section>
    </main>
  );
}
