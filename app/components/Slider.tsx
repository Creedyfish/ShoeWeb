"use client";
interface Props {
  data: {
    product_id: number;
    product_name: string;
    product_tagline: string;
    product_image: string;
    bgcolor: string;
  }[];
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import FeaturedProds from "./FeaturedProds";

function Slider({ data }: Props) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="md:h-[55vh] bg-sl"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={
          {
            "--swiper-pagination-color": "rgb(248, 250, 252)",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": ".5",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as React.CSSProperties
        }
      >
        {data
          ? data.map(
              (prod: {
                product_id: number;
                product_name: string;
                product_tagline: string;
                product_image: string;
                bgcolor: string;
              }) => (
                <SwiperSlide key={prod.product_id} className=" ">
                  <FeaturedProds data={prod} />
                </SwiperSlide>
              )
            )
          : ""}
      </Swiper>
    </>
  );
}

export default Slider;
