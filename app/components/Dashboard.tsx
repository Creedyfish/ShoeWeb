import React from "react";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="w-1/3 top-0 left-0">
      <div className=" bg-slate-50 flex flex-col items-center h-full text-xl rounded-lg overflow-hidden">
        <div className="font-bold bg-slate-300 w-full flex justify-center p-4">
          Admin Dashboard
        </div>
        <ul className="items-center text-center w-full">
          <Link href="/admin">
            <li className="hover:bg-slate-500 p-4">Products</li>
          </Link>
          <Link href="/admin/product/create">
            <li className="hover:bg-slate-500 p-4">Add New Product</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
