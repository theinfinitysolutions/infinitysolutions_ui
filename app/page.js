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
import { serviceList } from "@/utils/consts";
import PastWork from "@/components/pastwork";
import ContactUs from "@/components/contactus";

const text1 = "Infinite Possibilities, Infinite Solutions";
const text2 = "Bringing the best technological solutions for your business.";

const section2 = "Our Services";
const section3 = "The Infinity Solutions";
const section4 = "Contact Us";

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default function Home() {
  const [hovered, setHovered] = React.useState(false);
  const [selectedHover, setSelectedHover] = React.useState(0);
  const [showSideCard, setShowSideCard] = React.useState(false);
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
      <RevealOnScroll threshold={0.55} addedClasses={" w-full md:w-10/12"}>
        <section
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col h-[90vh] w-full relative z-0 overflow-hidden"
        >
          <div className="flex flex-col  items-start mt-[5%]">
            <h1 className="overflow-hidden text-[48px] text-start font-bold leading-[6rem] text-[#0097b2]">
              {section2.split("").map((char, index) => (
                <span
                  className="animate-slideUp inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>
          <div className="w-full flex flex-row justify-between items-start mt-4">
            <div
              className={`flex flex-col w-[55%] items-center justify-center `}
            >
              {showSideCard ? (
                <div
                  onMouseEnter={() => {
                    setShowSideCard(true);
                  }}
                  onMouseLeave={() => {
                    debounce(() => {
                      setShowSideCard(false);
                    }, 1000)();
                  }}
                  class={`[border-image:linear-gradient(to_right,#0087B2,#FFFFFF,#043357)_2] bg-primaryColor/10  w-full min-h-[60vh] border-[2px] p-8 ${
                    selectedHover > 0 || selectedHover < 10
                      ? "animate-slideUp"
                      : null
                  }`}
                >
                  <h1 className="text-primaryColor/90 text-2xl animate-slideUpSmall">
                    {serviceList[selectedHover - 1]?.title}
                  </h1>
                  <p className="text-md text-[#c7c7c7aa] mt-4 animate-slideUpSmall">
                    {serviceList[selectedHover - 1]?.description}
                  </p>
                  <p className="text-primaryColor mt-8">Applications</p>
                  <div className="grid grid-cols-4 gap-x-2 gap-y-2 mt-2">
                    {serviceList[selectedHover - 1]?.applications.map(
                      (item, index) => {
                        return (
                          <div
                            key={index}
                            className="bg-[#383e48] py-3 flex justify-center items-center rounded-3xl"
                          >
                            <p className="text-xs text-[#c7c7c7]">{item}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <p className="text-primaryColor mt-8">Tech Stack</p>
                  <div className="flex flex-row overflow-scroll mt-2">
                    {[1, 2, 4, 5].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col px-4 py-4 items-center border-[1px] rounded-xl mr-2 border-[#383e48]"
                        >
                          <div className="h-[10vh] w-[10vh] relative">
                            <Image src={"/nextjs.png"} layout="fill" />
                          </div>
                          <p className="text-[#383e48] mt-2 text-md">Nextjs</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <div
              onMouseLeave={() => {
                debounce(() => {
                  setShowSideCard(false);
                }, 1000)();
              }}
              className="flex flex-col w-[40%] group items-center justify-center"
            >
              {serviceList.map((item, index) => {
                return (
                  <a
                    key={item.index}
                    onMouseEnter={() => {
                      debounce(() => {
                        setSelectedHover(index + 1);
                        setShowSideCard(true);
                      }, 300)();
                    }}
                    className="flex  text-[#fff] group-hover:text-[#c7c7c755]   justify-start w-full  border-b-[1px] border-[#ffffff22] hover:border-[#ffffff44] transition-all duration-300 ease-in-out"
                  >
                    <div className="hover:text-white flex group/text flex-row items-start space-x-4 py-4">
                      <p className="text-[12px] ">0{index + 1}</p>
                      <h1 className=" text-2xl group-hover/text:translate-x-[20px] duration-200">
                        {item.title}
                      </h1>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll
        threshold={0.65}
        addedClasses={" w-full md:w-10/12 animate-slideUp"}
      >
        <section className="flex flex-col h-[90vh] w-full relative z-0 overflow-hidden">
          <div className="flex flex-row w-full h-full justify-between items-center">
            <div className="flex flex-col w-[40%] h-[80vh]  items-start justify-center">
              <p className="text-white/90 text-2xl animate-slideUp">Why?</p>
              <h1 className="text-[36px] text-start font-bold leading-[4rem] overflow-hidden text-[#0097b2]">
                {section3.split("").map((char, index) => (
                  <span
                    className="animate-slideUp inline-block [animation-fill-mode:backwards]"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <p className="text-[#c7c7c7aa] text-md mt-4 animate-slideUp delay-1000">
                The Infinity Solutions is a technology company that provides
                software development services to enterprises and startups. We
                specialize in web and mobile app development, UI/UX design, and
                server management.
              </p>
              <button className="bg-primaryColor text-white px-4 py-2 mt-8">
                Contact Us
              </button>
            </div>
            <div className="flex w-[60%] h-[80vh] relative flex-row justify-center items-center">
              {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b222] via-[#0097b211] to-[#000000] "></div> */}
              {/* <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_90%,transparent_100%)]"></div> */}
              <div className="flex flex-col mr-4 mt-[10vh]">
                <div className="w-[30vh] h-[30vh] border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-xl text-primaryColor">
                    {"Tailored Solutions"}
                  </h2>
                  <p className="text-md mt-4 text-white/60">
                    {
                      "We prioritize understanding your needs to deliver customized, innovative solutions that drive business growth."
                    }
                  </p>
                </div>
                <div className="w-[30vh] h-[30vh] border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-xl text-primaryColor">
                    {"Comprehensive Expertise"}
                  </h2>
                  <p className="text-md mt-4 text-white/60">
                    {
                      "We excel in web, mobile, and custom software development, alongside robust data management solutions."
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col -mt-[10vh]">
                <div className="w-[30vh] h-[30vh] border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-xl text-primaryColor">
                    {"Cutting-Edge Solutions"}
                  </h2>
                  <p className="text-md mt-4 text-white/60">
                    {
                      "Our experienced team leverages the latest technologies to deliver solutions that exceed expectations."
                    }
                  </p>
                </div>
                <div className="w-[30vh] h-[30vh] border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-xl text-primaryColor">
                    {"Reliable Support"}
                  </h2>
                  <p className="text-md mt-4 text-white/60">
                    {
                      "Count on us for ongoing support and partnership, ensuring your software solutions evolve with your business."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <PastWork />
      <ContactUs />
    </main>
  );
}
