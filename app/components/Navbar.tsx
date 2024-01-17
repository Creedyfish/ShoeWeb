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
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Disclaimer from "./Disclaimer";
import { signIn, signOut, useSession } from "next-auth/react";

/**
 * Functional component representing the main navigation bar.
 *
 * @returns {React.JSX.Element} The JSX for the Navbar.
 */

function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <nav className="fixed text-white w-full top-0 left-0 z-50 ">
        <div className="bg-slate-800 flex justify-center">
          <div className="container m x-auto hidden md:flex items-center px-2 py-4 ">
            <div className="logo flex-1">
              <Image
                className="w-10 h-10"
                src={"/logo.svg"}
                alt=""
                width={0}
                height={0}
                priority={true}
              />
            </div>

            <div className="navmenu flex flex-1 justify-center">
              <ul className="flex gap-4">
                {session?.user?.role === "admin" ? (
                  <li>
                    <Link href="/admin">Admin</Link>
                  </li>
                ) : null}
                <li>
                  <Link href="/">Featured</Link>
                </li>
                <li>
                  <Link href="/men">Men</Link>
                </li>
                <li>
                  <Link href="/women">Women</Link>
                </li>
                <li>
                  <Link href="/kids">Kids</Link>
                </li>
              </ul>
            </div>
            <div className="right-side flex flex-1 items-center justify-end gap-2">
              <div>
                <input
                  className="flex items-center rounded-2xl outline-none text-slate-800 px-2 py-1"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for product"
                />
              </div>
              <div>
                {session ? (
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex gap-2 justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-brandColor"
                      >
                        <title />
                        <circle cx="12" cy="8" r="4" />
                        <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" />
                      </svg>
                      <span>{session.user?.email.split("@")[0]}</span>
                    </div>
                    <button
                      onClick={() =>
                        signOut({
                          callbackUrl: "/",
                        })
                      }
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <button onClick={() => signIn()}>Login</button>
                  </div>
                )}
              </div>
              <div>
                <Link
                  href={{
                    pathname: "/cart",
                  }}
                >
                  <svg
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-50 h-6 w-6 cart"
                  >
                    <path d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <MobileMenu session={session} />
        </div>
      </nav>
      <Disclaimer />
    </>
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
const MobileMenu = ({ session }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden w-full">
      <div
        className={`absolute top-0 left-0 -z-10 bg-slate-800 w-full transition-all ease-in-out duration-300 ${
          isOpen ? "translate-y-16 " : "-translate-y-full "
        }`}
      >
        <ul className="flex flex-col items-center">
          {session?.user?.role === "admin" ? (
            <li className="p-2">
              <Link href="/admin">Admin</Link>
            </li>
          ) : null}
          <li className="p-2">
            <Link href="/">Featured</Link>
          </li>
          <li className="p-2">
            <Link href="/men">Men</Link>
          </li>
          <li className="p-2">
            <Link href="/women">Women</Link>
          </li>
          <li className="p-2">
            <Link href="/kids">Kids</Link>
          </li>

          {session?.user ? (
            <li className="p-2">
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Sign Out
              </button>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="container mx-auto flex justify-between items-center px-2 py-4 w-full ">
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
        <div>
          {session ? (
            <div className="flex justify-center items-center gap-2">
              <div className="flex gap-2 justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-brandColor"
                >
                  <title />
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" />
                </svg>
                <span>{session.user?.email.split("@")[0]}</span>
              </div>
            </div>
          ) : (
            <div className="flex gap-1">
              <button onClick={() => signIn()}>Login</button>
            </div>
          )}
        </div>
        <button className="btn " onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
