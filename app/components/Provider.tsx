"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";
import Navbar from "./Navbar";
interface Props {
  children: ReactNode;
  session: Session | null;
}

const Provider = ({ children, session }: Props) => (
  <SessionProvider>
    <Navbar session={session} />
    {children}
  </SessionProvider>
);

export default Provider;
