"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
function UserForm() {
  const router = useRouter();
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
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage("Passwords do not match");
      return false;
    }
    const formDataToSubmit = {
      email: formData.email,
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

    if (result.status !== 200) {
      console.log(result);
      setErrorMessage(result.message);
    } else {
      router.refresh();
      // router.push('/')
      console.log("failed yu burs");
    }
  };

  return (
    <div className="pt-28">
      <form onSubmit={handleSubmit} method="post">
        <input
          id="email"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          required={true}
        />
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          value={formData.passwordConfirm}
          required={true}
        />
        <button type="submit">Create User</button>
        {/* <input type="submit" value="Create User" /> */}
      </form>
      <div className="text-red-500">{errorMessage}</div>
    </div>
  );
}

export default UserForm;
