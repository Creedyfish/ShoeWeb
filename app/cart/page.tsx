import React from "react";
import CartPage from "../components/CartPage";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getCart } from "@/queries/apiQueries";
async function page() {
  const session = await getServerSession(options);

  return (
    <>
      <CartPage session={session} />
    </>
  );
}

export default page;
