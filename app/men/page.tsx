import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(options);
  if (session?.user?.role !== "user") {
    redirect("/");
  }
  return <div className="pt-28">sheeesh</div>;
}

export default page;
