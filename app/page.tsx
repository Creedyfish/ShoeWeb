import Image from "next/image";
import ProductCard from "./components/ProductCard";
import Slider from "./components/FeaturedProdSlider";
import { getfeatProds } from "@/queries/apiQueries";
import Link from "next/link";
import { getProducts } from "@/queries/apiQueries";

export default async function Home() {
  // const [productData, featuredData] = await Promise.all([
  //   getProducts(),
  //   getfeatProds(),
  // ]);
  return (
    <main className="container top-0 left-0 w-full h-full mx-auto bg-slate-700">
      <div className="">
        <section className="hero-section w-full py-6 overflow-visible">
          {/* <Slider product={featuredData} /> */}
        </section>
        <section className="featured-prods ">
          <div className="flex flex-wrap lg:flex-nowrap p-10 gap-4 justify-center no-drag">
            {/* {productData
              ? productData.map((prod: any) => (
                  <Link
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
                        category: null,
                      }}
                    />
                  </Link>
                ))
              : ""} */}
          </div>
        </section>

        <section className="categories  p-10 text-slate-50 text-2xl font-medium">
          <div className="flex flex-wrap justify-center gap-4 md:justify-evenly lg::gap-px md:flex-nowrap no-drag">
            <Link
              href={"/men"}
              className="relative group flex rounded-xl justify-center overflow-hidden "
            >
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
            </Link>
            <Link
              href={"/women"}
              className="relative group flex rounded-xl justify-center overflow-hidden"
            >
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
            </Link>
            <Link
              href={"/kids"}
              className="relative group flex rounded-xl justify-center overflow-hidden"
            >
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
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
