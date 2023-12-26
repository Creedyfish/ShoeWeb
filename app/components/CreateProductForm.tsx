"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { upsertProduct } from "@/queries/apiQueries";

function CreateProductForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: 0,
    image: "",
    bgcolor: "#000000",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await upsertProduct(formData);

      alert("Product has been created");
      setLoading(false);
      router.refresh();
      router.push("/admin");
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred while creating the product");
    }
  };
  return (
    <div className="flex justify-center font-sans">
      <div className="p-5 md:p-20 w-full bg-slate-500 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-medium text-base min-w-[15rem] w-[50vw]  md:w-96"
          autoComplete="off"
        >
          <div>Name</div>
          <input
            className="p-2 rounded-lg"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required={true}
            placeholder="name"
          />
          <div>desc</div>
          <input
            className="p-2 rounded-lg"
            id="desc"
            name="desc"
            type="text"
            onChange={handleChange}
            value={formData.desc}
            required={false}
            placeholder="desc"
          />
          <div>PRICE</div>
          <input
            className="p-2 rounded-lg"
            id="price"
            name="price"
            type="number"
            onChange={handleChange}
            value={formData.price}
            required={true}
            placeholder=""
          />
          <div>IMAGE</div>
          <input
            className="p-2 rounded-lg"
            id="image"
            name="image"
            type="text"
            onChange={handleChange}
            value={formData.image}
            required={true}
            placeholder="insert only available image routes"
          />
          <div>Color</div>
          <div className="flex gap-2 items-center">
            <input
              className=" p-2 rounded-lg"
              id="bgcolortext"
              name="bgcolor"
              type="text"
              value={formData.bgcolor}
              onChange={handleChange}
              required={false}
            />
            <input
              className=""
              id="bgcolorgradient"
              name="bgcolor"
              type="color"
              value={formData.bgcolor}
              onChange={handleChange}
              required={false}
            />
          </div>

          <div className="text-red-600 text-lg">{errorMessage}</div>
          <button
            className="bg-slate-800 mt-5 p-2 rounded-lg text-slate-50 hover:bg-slate-700 transition-all ease-in-out duration-300"
            type="submit"
            disabled={loading}
          >
            Create Product
          </button>
          <div></div>
        </form>
      </div>
    </div>
    //    <div>
    //    <form onSubmit={handleSubmit}>
    //      <input
    //        className="outline-none"
    //        id="name"
    //        name="name"
    //        type="name"
    //        value={formData.name}
    //        placeholder="name"
    //        onChange={handleChange}
    //      />
    //      <input
    //        onChange={handleChange}
    //        id="desc"
    //        name="desc"
    //        type="desc"
    //        value={formData.desc}
    //        placeholder="desc"
    //        className="outline-none"
    //      />
    //      <button disabled={loading} type="submit">
    //        Login
    //      </button>
    //    </form>
    //    <div>{errorMessage}</div>

    //  </div>
  );
}

export default CreateProductForm;
