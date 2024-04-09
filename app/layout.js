"use client";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";
import { useEffect } from "react";

const inter = Lora({ subsets: ["latin"] });

// export const metadata = {
//   title: "The Infinity Solutions",
//   description: "The Infinity Solutions",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Navbar />
        <div className="bg-black min-h-screen flex flex-col">
          {/* <div className="absolute flex flex-col w-full h-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5581d466] via-[#5581d413] to-[#5581d400]"></div> */}

          <div className="w-full mt-[90px]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
