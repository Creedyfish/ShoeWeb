"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { addCart } from "@/queries/apiQueries";
function ProductPreview({ product }: { product: any }) {
  const router = useRouter();
  const session = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selected, setSelected] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [popUp, setPopUp] = useState(false);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prev: string) => (prev = e.target.value));
  };
  const handleHover = (e: React.MouseEvent<HTMLInputElement>) => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity((prev) => (prev = Number(e.target.value)));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      if (session.status === "authenticated") {
        addCart({ ...product, quantity, session: session?.data?.user });
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        setPopUp(true);
      }
    } catch (error) {}
  };

  const addQauntity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((prev) => prev + 1);
  };
  const subtractQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div>
      {popUp ? (
        <div
          className="fixed top-0 z-50 w-full h-full justify-center items-center bg-slate-900 bg-opacity-30 select-none flex "
          onClick={() => setPopUp(false)}
        >
          <div
            className="bg-slate-700 p-4 w-1/4 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col text-lg text-slate-50 gap-5">
              <div className="flex justify-center">
                <Image src={"/logo.svg"} alt="logo" height={50} width={50} />
              </div>
              <span>To add products to your cart you must have an account</span>
              <Link
                href={"/login"}
                className="bg-slate-50 text-slate-900 px-4 py-2 rounded-lg"
              >
                Login
              </Link>
              <span className="text-sm">
                you dont have an account?{" "}
                <Link className=" hover:text-blue-500" href={"/signup"}>
                  Sign Up.
                </Link>
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <div className="container mx-auto w-full text-slate-900 flex gap-4">
        <div className="w-full h-full bg-slate-200 rounded-lg flex flex-col gap-2 p-4">
          <div className="w-full h-full bg-yellow-500 rounded-lg flex justify-center">
            <Image
              className="p-10"
              src={`/${selected}`}
              width={1000}
              height={1000}
              alt="sdsd"
            />
          </div>

          <div className="relative w-full h-full bg-slate-200 rounded-lg flex justify-center">
            <div className="absolute text-white bg-black -right-4 top-1/3 rounded-full w-10 h-10 flex justify-center items-center">
              {">"}
            </div>
            <div className="absolute text-white bg-black -left-4 top-1/3 rounded-full w-10 h-10 flex justify-center items-center">
              {"<"}
            </div>
            <form className="flex gap-2 w-full">
              <div className=" bg-slate-500 rounded-lg w-1/3 ">
                <label className="flex justify-center">
                  <input
                    className="hidden"
                    type="radio"
                    id="html"
                    name="fav_language"
                    value={"redz.webp"}
                    onChange={handleClick}
                    onMouseOver={handleHover}
                  />
                  <Image
                    className="select-none"
                    src={"/redz.webp"}
                    height={200}
                    width={200}
                    alt="kids"
                  />
                </label>
              </div>
              <div className=" bg-slate-500 rounded-lg w-1/3">
                <label className="flex justify-center">
                  <input
                    className="hidden"
                    type="radio"
                    id="css"
                    name="fav_language"
                    value={"hunter.webp"}
                    onMouseOver={handleHover}
                    onChange={handleClick}
                  />
                  <Image
                    className="select-none"
                    src={"/hunter.webp"}
                    height={200}
                    width={200}
                    alt="hunder"
                  />
                </label>
              </div>
              <div className=" bg-slate-500 rounded-lg w-1/3">
                <label className="flex justify-center">
                  <input
                    className="hidden"
                    type="radio"
                    id="css"
                    name="fav_language"
                    value={"orange.webp"}
                    onMouseOver={handleHover}
                    onChange={handleClick}
                  />
                  <Image
                    className="select-none"
                    src={"/orange.webp"}
                    height={200}
                    width={200}
                    alt="hunder"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="w-2/4  bg-white rounded-lg p-4 flex flex-col gap-4">
          <div className="text-4xl font-bold">{product.name}</div>
          <div className="text-lg font-bold">${product.price}</div>
          <div className="text-lg">{product.description}</div>
          <div className="text-xs">
            Deals and Discounts are treated as the same reductions to products.
          </div>
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              Quantity
              <div className="flex mx-auto justify-center items-center gap-4">
                <button
                  className="bg-slate-400 text-base font-bold px-2 rounded-sm"
                  onClick={subtractQuantity}
                >
                  -
                </button>
                <input
                  className="w-10 p-2 bg-slate-400 rounded-md flex justify-center items-center text-center"
                  type="number"
                  id="quantity"
                  inputMode="numeric"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                />
                <button
                  className="bg-slate-400 text-base font-bold px-2 rounded-sm"
                  onClick={addQauntity}
                >
                  +
                </button>
              </div>
              <button
                className={`bg-slate-400 p-4 rounded-lg`}
                type="submit"
                disabled={isSubmitting}
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
