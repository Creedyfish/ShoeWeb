"use client";
import { deleteCartItem, getCart } from "@/queries/apiQueries";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CartList from "./CartList";
import { addOrder } from "@/queries/apiQueries";
import Image from "next/image";

function CartPage({ session }: any) {
  const router = useRouter();
  const [Successs, setSuccess] = useState(false);

  const [formData, setFormData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  if (!session) {
    router.push("/signup");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const addRes = await addOrder(formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.log("ewrrrowe clinet");
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (session.user) {
        try {
          const data = await getCart(session.user.id);
          setFormData(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchCart();
  }, [session.user, isLoading]);
  const subtotal = formData
    .reduce((total, prod) => total + prod.Product.price * prod.quantity, 0)
    .toFixed(2);
  const tax = 50.0;

  return (
    <div className="w-full container mx-auto p-2 ">
      {Successs ? (
        <div className="fixed w-full h-auto animate-success-animation opacity-0">
          <div className="flex justify-center ">
            <div className="bg-slate-900 text-slate-50 flex gap-4 justify-center items-center p-4 rounded-full border-solid border-4 border-slate-50">
              <Image src={"/logo.svg"} alt="logo" height={75} width={75} />
              <div className="text-lg font-bold">
                <span className="font-2xl">Products Have been Ordered</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
                    <div className="flex justify-between" key={prod.product_id}>
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
                  <div className="">${Number(subtotal + tax).toFixed(2)}</div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <button
                    className="p-4 rounded-lg bg-slate-500 "
                    type="submit"
                  >
                    Checkout
                  </button>
                  <button className="p-4 rounded-lg bg-slate-500">
                    Purchase
                  </button>
                </form>
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
