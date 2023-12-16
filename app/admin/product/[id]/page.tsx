import { getProdById } from "@/app/queries/apiQueries";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

async function page({ params }: Props) {
  const product = await getProdById(params.id);
  console.log(product);
  return <div className="text-white">{product.name}</div>;
}

export default page;
