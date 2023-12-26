import { getProdById } from "@/queries/apiQueries";
import React from "react";
import EditProductForm from "@/app/components/EditProductForm";
import ProductCard from "@/app/components/ProductCard";

interface Props {
  params: {
    id: string;
  };
}

async function page({ params }: Props) {
  const product = await getProdById(params.id);
  return (
    <div className="text-white w-full flex flex-col gap-2">
      <div className="flex w-full">
        <EditProductForm product={product} />
      </div>
    </div>
  );
}
export default page;
