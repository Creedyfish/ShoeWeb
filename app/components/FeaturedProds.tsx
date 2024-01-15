import React from "react";
import Image from "next/image";

interface Props {
  product: {
    Featured_Products: {
      tagline: string;
      feat_image: string;
    };
    product_id: number;
    name: string;
    bgcolor: string;
  };
}

const FeaturedProds = (data: Props) => {
  return (
    <div className="bg-slate-700 h-full select-none font-raleway">
      <div className="relative flex-wrap md:flex">
        <div
          className="featured-item flex flex-1 flex-col items-center justify-center drag-none "
          id="featured-item"
        >
          <div className={`product-title `}>
            <h1
              className="flex md:text-7xl font-bold bg-clip-text text-red-700"
              style={{ color: data.product.bgcolor }}
            >
              {data.product.name}
            </h1>
          </div>
          <div className="product-tagline text-2xl text-slate-50 ">
            {data.product.Featured_Products?.tagline}
          </div>
        </div>
        <div className="flex flex-1 h-full justify-center">
          <div
            className="featured-item  flex justify-center rounded-full"
            style={{ backgroundColor: data.product.bgcolor }}
          >
            <Image
              className=" w-72 h-72 lg:h-[50vw] lg:w-[50vw] z-10 transition-all ease-in-out duration-300 md:translate-y-16 max-w-md max-h-[448px]"
              src={`/${data.product.Featured_Products?.feat_image}`}
              width={0}
              height={0}
              alt="sdasd"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProds;
