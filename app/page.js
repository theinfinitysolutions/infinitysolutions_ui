"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <main className="flex h-[90vh] flex-col items-center justify-between">
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-10 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col h-[80vh] items-center justify-center w-full  relative z-0 overflow-hidden"
      >
        <div className="flex flex-col w-[80vw]">
          <p className=" text-[64px] font-bold text-white">
            Building Solutions for you
          </p>
        </div>
      </section>
    </main>
  );
}
