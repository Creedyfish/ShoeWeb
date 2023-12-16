"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface Props {
  children: ReactNode;
  session: Session | null;
}

const Provider = ({ children, session }: Props) => (
  <SessionProvider>
    <Navbar />
    <div className="pt-24">{children}</div>
    <Footer />
  </SessionProvider>
);

export default Provider;
