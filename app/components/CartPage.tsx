"use client";
import { getCart } from "@/queries/apiQueries";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CartList from "./CartList";
useRouter;

function CartPage({ session }: any) {
  const router = useRouter();

  const [formData, setFormData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  if (!session) {
    router.push("/signup");
  }
  useEffect(() => {
    const fetchCart = async () => {
      if (session.user) {
        try {
          const data = await getCart(session.user.id);
          setFormData(data);
          setIsLoading(false);
          console.log(formData);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchCart();
  }, [session.user.id, isLoading]);
  const subtotal = formData
    .reduce((total, prod) => total + prod.Product.price * prod.quantity, 0)
    .toFixed(2);
  const tax = 50.0;
  return (
    <div className="w-full container mx-auto p-2 ">
      <div className="flex gap-4">
        <div className="w-4/6  ">
          <div className="flex flex-col gap-4 ">
            {formData && isLoading === false ? (
              formData.map((prod: any) => {
                return (
                  <div
                    className="text-slate-50 font-sans w-full flex "
                    key={prod.product_id}
                  >
                    <CartList
                      prod={prod}
                      setFormData={setFormData}
                      setIsLoading={setIsLoading}
                    />
                  </div>
                );
              })
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
        <div className="w-2/6 font-sans font-medium text-lg">
          <div className=" p-4 bg-white flex-col flex gap-4 rounded-lg">
            <div className="text-2xl">Summary</div>
            <div className="flex flex-col">
              {formData &&
                formData.map((prod: any) => {
                  return (
                    <div className="flex justify-between">
                      <div>{prod.Product.name}</div>
                      <div>$ {prod.quantity * prod.Product.price}</div>
                    </div>
                  );
                })}
            </div>
            {isLoading ? (
              <div>Loading</div>
            ) : formData && formData.length > 0 ? (
              <>
                <div className="">
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>$ {subtotal}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">Estimated Tax</div>
                    <div className="">$ {tax}</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">Total</div>
                  <div className="">$ {subtotal + tax}</div>
                </div>
                <button className="p-4 rounded-lg bg-slate-500">
                  Checkout
                </button>
                <button className="p-4 rounded-lg bg-slate-500">
                  Purchase
                </button>
              </>
            ) : (
              <div>No Products in your cart</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
