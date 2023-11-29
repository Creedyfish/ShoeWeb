import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter, Raleway } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata = {
  title: "SHOEFITZ",
  description: " A shoe e-commerce platform built with Nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable} `}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={` bg-slate-800 ${raleway.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
