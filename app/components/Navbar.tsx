"use client";
import React from "react";
import { useState } from "react";
//add documents later
function Navbar() {
  return (
    <div className="fixed text-white w-full top-0 left-0 ">
      <nav className="bg-slate-800">
        <div className="container mx-auto hidden md:flex justify-evenly px-2 py-4 ">
          <div className="logo">logo</div>

          <div className="navmenu">
            <ul className="flex gap-4">
              <li>Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </div>
          <div className="search">asdads</div>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
}

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
