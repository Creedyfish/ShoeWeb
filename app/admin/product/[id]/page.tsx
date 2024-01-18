/**
 * Imports the function `getProdById` from "@/queries/apiQueries".
 * This function is used to fetch a product by its ID.
 */
import { getProdById } from "@/queries/apiQueries";

/**
 * Imports the `React` library.
 */
import React from "react";

/**
 * Imports the `EditProductForm` component from "@/app/components/EditProductForm".
 * This component is used to edit the details of a product.
 */
import EditProductForm from "@/app/components/EditProductForm";

/**
 * Defines the `Props` interface.
 * This interface is used to type the props of the `page` function.
 */
interface Props {
  params: {
    id: string;
  };
}

/**
 * Defines the `page` function.
 * This function fetches a product by its ID and returns a JSX element that displays the product details and an edit form.
 */
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

/**
 * Exports the `page` function as a default export.
 */
export default page;
