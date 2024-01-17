"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {!isOpen ? null : (
        <div className="fixed z-50 flex w-full h-full justify-center items-center select-none bg-slate-950 bg-opacity-50">
          <div className="mx-auto container">
            <div className="bg-slate-50 p-10 rounded-xl flex flex-col justify-center gap-5">
              <div className="flex justify-center items-center">
                <Image src={"/logo.svg"} height={100} width={100} alt="logo" />
                <div className="text-7xl flex">SHOEFITZ</div>
              </div>
              <div className="text-4xl text-black font-bold">Disclaimer</div>
              <div className="text-2xl text-black">
                All assets, including images, featured on this platform are
                intended solely for mock-up purposes and are not authorized for
                commercial or business use. The content presented here is
                created and provided for portfolio-building purposes only. Any
                resemblance to real products, brands, or copyrighted materials
                is coincidental. Users are advised to exercise discretion and
                respect intellectual property rights when using these assets for
                non-commercial, personal, or portfolio purposes. The platform
                and its contributors do not endorse or encourage any
                unauthorized business use of the showcased content.
              </div>
              <div className="flex justify-center">
                <button
                  onClick={(prev) => setIsOpen(!isOpen)}
                  className="p-4 bg-brandColor text-xl rounded-lg font-medium text-slate-50"
                >
                  I Understand the Disclaimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Disclaimer;
