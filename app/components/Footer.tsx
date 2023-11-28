import React from "react";

function Footer() {
  return (
    <footer className="w-full top-0 left-0 bg-slate-800 text-slate-200">
      <div className="container flex flex-col mx-auto px-2 py-4">
        <div className="top-layer flex">
          <div className="flex flex-wrap gap-4 flex-1 w-full justify-center md:justify-around md:gap-0 ">
            <div className="flex-1">
              <div>Products</div>
              <ul>
                <li>Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className="flex-1">
              <div>Account</div>
              <ul>
                <li>Login</li>
                <li>SignUp</li>
              </ul>
            </div>
            <div className="flex-1">
              <div>Company</div>
              <ul>
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1">right</div>
        </div>
        <div className="bottom-layer flex justify-evenly p-4">
          <div className="flex text-base">© 2023 ISE. All Rights Reserved.</div>
          <div className="">right</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
