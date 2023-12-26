"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProds from "./FeaturedProds";
import { upsertProduct } from "@/queries/apiQueries";
import ProductCard from "@/app/components/ProductCard";
import ToggleSwitch from "./ToggleSwitch";
import { deleteFeaturedProduct } from "@/queries/apiQueries";

interface Props {
  product: {
    Featured_Products: {
      tagline: string;
      feat_image: string;
    };
    product_id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    bgcolor: string;
  };
}

function EditProductForm(data: Props) {
  const [isChecked, setIsChecked] = useState(!!data.product?.Featured_Products);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [featuredData, setFeaturedData] = useState(
    data.product?.Featured_Products || null
  );
  const [formData, setFormData] = useState({
    product_id: data.product?.product_id || -1,
    name: data.product?.name || "",
    desc: data.product?.description || "",
    price: data.product?.price || 0,
    image: data.product?.image || "",
    bgcolor: data.product?.bgcolor || "#000000",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFeaturedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const revertChanges = () => {
    setFormData({
      product_id: data.product?.product_id || -1,
      name: data.product?.name || "",
      desc: data.product?.description || "",
      price: data.product?.price || 0,
      image: data.product?.image || "",
      bgcolor: data.product?.bgcolor || "#000000",
    });
    setFeaturedData(data.product?.Featured_Products || null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // console.log({
    //   ...formData,
    //   Featured_Products: featuredData,
    // });
    try {
      if (!isChecked && data.product.Featured_Products) {
        await upsertProduct({ formData });
        await deleteFeaturedProduct(formData.product_id);
        alert("Product has been edited and removed from featured");
        setLoading(false);
      } else if (isChecked && featuredData) {
        await upsertProduct({ ...formData, Featured_Products: featuredData });
        alert("Product has been edited");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred while creating the product");
    }
  };

  return (
    <div>
      <div className="flex w-full">
        <div className="flex justify-center font-sans text-black">
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
                Edit Product
              </button>
              <button
                type="button"
                className="bg-slate-800 mt-5 p-2 rounded-lg text-slate-50 hover:bg-slate-700 transition-all ease-in-out duration-300"
                onClick={() => revertChanges()}
              >
                Revert Changes
              </button>
              <div></div>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <ProductCard
            data={{
              ...formData,
              id: Number(formData.product_id),
              price: Number(formData.price),
            }}
          />
        </div>
      </div>
      <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
      {isChecked ? (
        <div>
          <input
            id="tagline"
            name="tagline"
            type="text"
            value={featuredData?.tagline ?? ""}
            onChange={handleFeaturedChange}
            className="text-black"
          />
          <input
            id="feat_image"
            name="feat_image"
            type="text"
            value={featuredData?.feat_image ?? ""}
            onChange={handleFeaturedChange}
            className="text-black"
          />

          <FeaturedProds
            product={{
              ...formData,
              Featured_Products: featuredData,
            }}
          />
        </div>
      ) : (
        <div>Add to Featured</div>
      )}
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

export default EditProductForm;
