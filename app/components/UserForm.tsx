"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
function UserForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    setLoading(true);
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage("Passwords do not match");
      setLoading(false);
      return false;
    }
    const formDataToSubmit = {
      email: formData.email.toLowerCase(),
      password: formData.password,
    };

    const res = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToSubmit),
    });
    const result = await res.json();

    if (!res.ok) {
      console.log(result);
      setErrorMessage(result.message);
      setLoading(false);
    } else {
      router.refresh();
      router.push("/");
      setLoading(false);
    }
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
          method="post"
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
          <div>CONFIRM PASSWORD</div>
          <input
            className="p-2 rounded-lg"
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            onChange={handleChange}
            value={formData.passwordConfirm}
            required={true}
            placeholder="Confirm Password"
          />
          <div className="text-red-600 text-lg">{errorMessage}</div>
          <button
            className="bg-slate-800 mt-5 p-2 rounded-lg text-slate-50 hover:bg-slate-700 transition-all ease-in-out duration-300"
            type="submit"
            disabled={loading}
          >
            Create New Account
          </button>
          {/* <input type="submit" value="Create User" /> */}
        </form>
      </div>
    </div>
  );
}

export default UserForm;
