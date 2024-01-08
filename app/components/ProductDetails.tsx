"use client";
import React from "react";
import { deleteProduct } from "@/queries/apiQueries";
import { useRouter } from "next/navigation";
function ProductDetails(data: any) {
  const router = useRouter();
  return (
    <div className="z-10 text-left font-medium text-base flex flex-col">
      <div className="  text-slate-800">
        <span className="text-xs text-slate-500">ID: </span>
        {data.data.product_id}
      </div>
      <div className="  text-slate-800">
        <span className="text-xs text-slate-500">Name: </span>
        {data.data.name}
      </div>
      <div className="  text-slate-800">
        <span className="text-xs text-slate-500">Price: </span> $
        {data.data.price}
      </div>

      <div className="flex pt-5 gap-4 text-slate-50  ">
        <button
          className="bg-slate-800 flex-1 "
          onClick={() => router.push(`/admin/product/${data.data.product_id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-800  flex-1 "
          onClick={async () => {
            if (window.confirm("Are you sure you want to delete this item?")) {
              await deleteProduct(data.data.product_id);
              alert("Product deleted successfully");
              router.refresh();
            }
          }}
        >
          Delete
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetails;
