import React from "react";
import { getProdById } from "@/queries/apiQueries";
import Image from "next/image";
import ProductPreview from "@/app/components/ProductPreview";

async function page({ params }: { params: { slug: string } }) {
  const product = await getProdById(params.slug);
  return <ProductPreview product={product} />;
}

export default page;
