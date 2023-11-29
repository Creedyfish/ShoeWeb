/**
 * Navbar Component
 *
 * A responsive navigation bar component for the website.
 *
 * @component
 * @example
 * // Example usage of the Navbar component
 * <Navbar />
 */
"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

/**
 * Functional component representing the main navigation bar.
 *
 * @returns {React.JSX.Element} The JSX for the Navbar.
 */
function Navbar() {
  return (
    <div className="fixed text-white w-full top-0 left-0 z-50 ">
      <nav className="bg-slate-800">
        <div className="container mx-auto hidden md:flex justify-evenly items-center px-2 py-4 ">
          <div className="logo">
            <Image
              className="w-10 h-10"
              src={"/logo.svg"}
              alt=""
              width={0}
              height={0}
              priority={true}
            />
          </div>

          <div className="navmenu">
            <ul className="flex gap-4">
              <li>Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </div>
          <div className="search">
            <input
              className="rounded-2xl outline-none text-slate-800 px-2 py-1"
              type="search"
              name=""
              id=""
              placeholder="Search for product"
            />
          </div>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
}

/**
 * MobileMenu Component
 *
 * A component representing the mobile menu of the website.
 *
 * @component
 * @example
 * // Example usage of the MobileMenu component
 * <MobileMenu />
 */
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden ">
      <div
        className={`absolute top-0 -z-10 bg-slate-800 w-full transition-all ease-in-out duration-300 ${
          isOpen ? "translate-y-14 " : "-translate-y-full "
        }`}
      >
        <ul className="flex flex-col items-center">
          <li className="p-2">Featured</li>
          <li className="p-2">Men</li>
          <li className="p-2">Women</li>
          <li className="p-2">Kids</li>
        </ul>
      </div>
      <div className="container mx-auto flex justify-between min-[425px]:justify-around px-2 py-4 w-full ">
        <div className="logo">logo</div>

        <button className="btn bg-red-700" onClick={() => setIsOpen(!isOpen)}>
          asdads
        </button>
      </div>
    </div>
  );
};

export default Navbar;
