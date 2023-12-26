"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage("Wrong Password or Email");
    } else {
      const session = await getSession();
      console.log(session?.user?.role);
      if (session?.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }

    setLoading(false);
  };
  return (
    <div className="flex justify-center font-sans">
      <div className="p-5 md:p-20 w-full bg-slate-500 rounded-lg">
        <div className="pb-10 flex justify-center">
          <Image
            className="h-24 w-24"
            src={"/logo.svg"}
            width={0}
            height={0}
            alt="Logo"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-medium text-base min-w-[15rem] w-[50vw]  md:w-96"
          autoComplete="off"
        >
          <div>EMAIL</div>
          <input
            className="p-2 rounded-lg"
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            required={true}
            placeholder="Email"
          />
          <div>PASSWORD</div>
          <input
            className="p-2 rounded-lg"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
            required={true}
            placeholder="Password"
          />

          <div className="text-red-600 text-lg">{errorMessage}</div>
          <button
            className="bg-slate-800 mt-5 p-2 rounded-lg text-slate-50 hover:bg-slate-700 transition-all ease-in-out duration-300"
            type="submit"
            disabled={loading}
          >
            Login
          </button>
          <div></div>
          <Link
            className="bg-slate-800 flex justify-center mt-3 p-2 rounded-lg text-slate-50 hover:bg-slate-700 transition-all ease-in-out duration-300"
            href={"/signup"}
          >
            Create a New Account
          </Link>
        </form>
      </div>
    </div>
    //    <div>
    //    <form onSubmit={handleSubmit}>
    //      <input
    //        className="outline-none"
    //        id="email"
    //        name="email"
    //        type="email"
    //        value={formData.email}
    //        placeholder="Email"
    //        onChange={handleChange}
    //      />
    //      <input
    //        onChange={handleChange}
    //        id="password"
    //        name="password"
    //        type="password"
    //        value={formData.password}
    //        placeholder="Password"
    //        className="outline-none"
    //      />
    //      <button disabled={loading} type="submit">
    //        Login
    //      </button>
    //    </form>
    //    <div>{errorMessage}</div>

    //  </div>
  );
}

export default LoginForm;
