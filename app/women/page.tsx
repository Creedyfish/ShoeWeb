// "use client";
// import React from "react";
// import API_URL from "@/utils/constants";

// export const postProd = async () => {
//   const res = await fetch(`${API_URL}/auth/signup`, {
//     method: "POST",
//     body: JSON.stringify({ email: "testing2@gmail.com" }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!res.ok) throw await res.json();
//   return res.json();
// };

// function page() {
//   return (
//     <div className="pt-28">
//       <button onClick={postProd}>POST</button>
//     </div>
//   );
// }

// export default page;
import React from "react";

function page() {
  return <div>page</div>;
}

export default page;
