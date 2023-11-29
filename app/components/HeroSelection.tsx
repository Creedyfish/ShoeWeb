"use client";
import React, { lazy } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  data: {
    product_id: number;
    product_name: string;
    product_tagline: string;
    product_image: string;
    bgcolor: string;

    // Add other properties as needed

    // Add other properties as needed
  }[];
}

function HeroSelection({ data }: Props) {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    console.log("addded fade left");
    setIndex((prev) => (prev + 1) % data.length);
    const element = document.querySelectorAll(".featured-item");
    element.forEach((element) => {
      element.classList.add("fade-left");
    });
  };

  const handlePrevClick = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
    const element = document.querySelectorAll(".featured-item");
    element.forEach((element) => {
      element.classList.add("fade-right");
    });
  };

  useEffect(() => {
    // Remove the "fade-left" class after a delay
    const timeoutId = setTimeout(() => {
      const element = document.querySelectorAll(".featured-item");
      element.forEach((element) => {
        element.classList.remove("fade-left", "fade-right");
      });
    }, 300); // Adjust the duration to match the CSS animation duration

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex-wrap md:flex ">
        <button
          className="absolute z-50 top-1/2 -right-5 bg-red-700 hidden md:flex"
          onClick={handleNextClick}
        >
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src="/uiw_left.svg"
            alt=""
          />
        </button>
        <button
          className="absolute z-50 top-1/2 -left-5 bg-red-700 hidden md:flex"
          onClick={handlePrevClick}
        >
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src="/uiw_right.svg"
            alt=""
          />
        </button>
        <div
          className="featured-item flex flex-1 flex-col items-center justify-center fade-left"
          id="featured-item"
        >
          <div className={`product-title `}>
            <h1 className="flex md:text-7xl font-bold bg-clip-text text-red-700">
              {data[index].product_name}
            </h1>
          </div>
          <div className="product-tagline text-lg">
            {data[index].product_tagline}
          </div>
        </div>
        <div className="flex flex-1 justify-center relative">
          <div className="featured-item h-[50vh] flex justify-center fade-left">
            <div
              className={`absolute rounded-full transition-all ease-out duration-300 z-0 w-52 h-52 md:w-[25vw] md:h-[25vw] translate-y-5`}
              style={{ backgroundColor: data[index].bgcolor }}
            ></div>

            <Image
              className="w-60 h-60 md:h-[50vh] md:w-[50vh] z-10 transition-all ease-in-out duration-300 md:translate-y-16"
              src={`/${data[index].product_image}`}
              width={0}
              height={0}
              alt="sdasd"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="slider flex justify-center py-4">
        {data.map((product) => (
          <div
            key={product.product_id}
            className={`${
              product.product_id !== data[index].product_id
                ? "bg-white"
                : "bg-slate-800"
            } rounded-full w-4 h-4 mx-1 transition-all ease-in-out duration-300 border-2 border-slate-800`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroSelection;
