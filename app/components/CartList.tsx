"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { deleteCartItem } from "@/queries/apiQueries";
import { format } from "path";

function CartList({ prod, setFormData, setIsLoading }: any) {
  const [quantity, setQuantity] = useState(prod.quantity);

  const updateQuantity = (prodId: number, newQuantity: number) => {
    setFormData((prevData: any) =>
      prevData.map((item: any) =>
        item.product_id === prodId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity((prev: number) => (prev = Number(e.target.value)));
      updateQuantity(prod.product_id, value);
    }
  };

  const addQauntity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((prev: number) => prev + 1);
    updateQuantity(prod.product_id, quantity + 1);
  };

  const subtractQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : prev));
    updateQuantity(prod.product_id, Math.max(1, quantity - 1));
  };
  const handleDeleteCartItem = () => {
    alert("do you wish to delete Item");
    deleteCartItem(prod.user_id, prod.product_id);
    setFormData((prevFormData: { product_id: number }[]) =>
      prevFormData.filter((item) => item.product_id !== prod.product_id)
    );
  };

  return (
    <div className="flex w-full bg-gradient-to-b from-slate-50 rounded-lg">
      <div className="flex w-1/4 p-1 justify-center h-full ">
        <div className="p-6 bg-gradient-to-b  from-slate-500 to-slate-50 rounded-lg">
          <Image
            src={`/${prod.Product.image}`}
            height={400}
            width={400}
            alt="ProductImage"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/4 p-2 text-slate-950  ">
        <div className="h-full text-2xl font-medium">{prod.Product.name}</div>
        <div className="h-full flex flex-col gap-2">
          <div className="text-slate-50 text-base">Quantity :</div>
          <div className="flex gap-2">
            <form className="flex">
              <div className="flex justify-center items-center gap-2">
                <button
                  className="bg-slate-300 w-6 h-6 flex text-base items-center justify-center font-bold  rounded-md"
                  onClick={subtractQuantity}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-slate-950"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <input
                  className="w-6 py-1 text-xs font-medium text-slate-950  bg-slate-300 rounded-md flex justify-center tems-center text-center"
                  type="number"
                  id="quantity"
                  inputMode="numeric"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                />
                <button
                  className="bg-slate-300 w-6 h-6 flex text-base items-center justify-center font-bold  rounded-md"
                  onClick={addQauntity}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-slate-950"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <button className="" onClick={handleDeleteCartItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-red-500 stroke-slate-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-1/4 p-2 justify-end ">
        <div className="text-lg flex text-slate-950 font-medium">
          $ {prod.Product.price}
        </div>
      </div>
    </div>
  );
}

export default CartList;
