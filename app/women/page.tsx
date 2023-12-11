"use client";
import React from "react";

export const postProd = async () => {
  const res = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email: "testing2@gmail.com" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw await res.json();
  return res.json();
};

function page() {
  return (
    <div className="pt-28">
      <button onClick={postProd}>POST</button>
    </div>
  );
}

export default page;
