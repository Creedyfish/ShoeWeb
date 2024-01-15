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
    updateQuantity(prod.product_id, quantity - 1);
  };
  const handleDeleteCartItem = () => {
    // alert("do you wish to delete Item");
    // deleteCartItem(prod.user_id, prod.product_id);
    // setFormData((prevFormData: { product_id: number }[]) =>
    //   prevFormData.filter((item) => item.product_id !== prod.product_id)
    // );
  };

  return (
    <div className="flex w-full bg-gradient-to-b from-slate-50 rounded-lg">
      <div className="flex w-1/4 p-1 justify-center h-full ">
        <div className="p-6 bg-gradient-to-b from-slate-500 to-slate-50 rounded-lg">
          <Image
            src={`/${prod.Product.image}`}
            height={400}
            width={400}
            alt="ProductImage"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/4 p-2 bg-yellow-500">
        <div className="h-full">{prod.Product.name}</div>
        <div className="h-full flex flex-col">
          <div>Quanity :</div>
          <div>
            <form className="flex gap-4">
              <div className="flex justify-center  gap-2">
                <button
                  className="bg-slate-400 flex text-base items-center text-center justify-center font-bold px-3 rounded-md"
                  onClick={subtractQuantity}
                >
                  -
                </button>
                <input
                  className="w-10 text-xs p-2 bg-slate-400 rounded-md flex justify-center tems-center text-center"
                  type="number"
                  id="quantity"
                  inputMode="numeric"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                />
                <button
                  className="bg-slate-400 text-base font-bold items-center text-center px-3 rounded-md"
                  onClick={addQauntity}
                >
                  +
                </button>
              </div>
            </form>
            <button className="bg-red-500" onClick={handleDeleteCartItem}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-1/4 p-2  bg-blue-500">
        <div></div>
      </div>
    </div>
  );
}

export default CartList;
