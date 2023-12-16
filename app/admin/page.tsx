import ProductList from "@/app/components/ProductList";
import { getProducts } from "@/app/queries/apiQueries";
import { useEffect } from "react";

async function page() {
  const product = await getProducts();
  // const product = null;
  console.log(product);
  return (
    <div className="flex flex-wrap justify-center md:justify-normal gap-4">
      {product
        ? product.map((prod: any) => (
            <ProductList key={prod.product_id} data={prod} />
          ))
        : ""}
    </div>

    // <div className="container mx-auto flex justify-center">
    //   <div className="pt-28">
    //     {product
    //         ? product.map((prod: any) => (
    //             <ProductList key={prod.product_id} data={prod} />
    //           ))
    //         : ""}

    //   </div>
    // </div>
  );
}

export default page;
