"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { IconContainer } from "@/components/iconcontainer";
import { Radar } from "@/components/radar";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { HiDocumentReport } from "react-icons/hi";
import { RiFilePaper2Fill } from "react-icons/ri";

const text1 = "Infinite Possibilities, Infinite Solutions";
const text2 = "Bringing the best technological solutions for your business.";

export default function Home() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-0 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>

      <RevealOnScroll threshold={0.55}>
        <section
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col h-[90vh] items-center justify-between w-full  relative z-0 overflow-hidden"
        >
          <div className="flex flex-col w-[80vw] items-center mt-[10%]">
            <h1 className="overflow-hidden text-[56px] text-center font-bold leading-[6rem] text-[#ffffffcc]">
              {text1.split("").map((char, index) => (
                <span
                  className="animate-slideUp inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <h1 className="overflow-hidden text-[24px] text-center leading-[2rem] text-white">
              {text2}
            </h1>
          </div>
          <div className="relative flex h-[50vh] w-10/12 mt-[4rem] flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer text="Web Development" delay={0.2} />
                <IconContainer
                  delay={0.4}
                  text="Mobile apps"
                  icon={
                    <AiFillDollarCircle className=" h-8 w-8 text-primaryColor" />
                  }
                />
                <IconContainer
                  text="Designing"
                  delay={0.3}
                  icon={
                    <BsClipboardDataFill className=" h-8 w-8 text-primaryColor" />
                  }
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  text="Maintenence"
                  delay={0.5}
                  icon={
                    <BiSolidReport className=" h-8 w-8 text-primaryColor" />
                  }
                />
                <IconContainer
                  text="Server management"
                  icon={
                    <HiMiniDocumentArrowUp className=" h-8 w-8 text-primaryColor" />
                  }
                  delay={0.8}
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.6}
                  text="GitHub Integration"
                  icon={
                    <HiDocumentReport className=" h-8 w-8 text-primaryColor" />
                  }
                />
                <IconContainer
                  delay={0.7}
                  text="CMS Integration"
                  icon={
                    <RiFilePaper2Fill className=" h-8 w-8 text-primaryColor" />
                  }
                />
              </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </section>
      </RevealOnScroll>
    </main>
  );
}
