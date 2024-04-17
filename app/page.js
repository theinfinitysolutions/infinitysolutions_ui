"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import React, { useLayoutEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
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
import { CgWebsite } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { GiMining } from "react-icons/gi";
import { SiAzurepipelines } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import Delivery from "@/components/Delivery";
import Lifecycle from "@/components/Lifecycle";

const rotatingText = ["Possibilities", "Ideas", "Innovations", "Solutions"];
const constantText = "Infinite";
const fontSize = 64;

const text1 = "Infinite Possibilities, Infinite Solutions.";
const text2 = "Bringing the best technological solutions for your business.";

const section2 = "Our Services";
const section3 = "The Infinity Solutions";
const section4 = "Contact Us";
const iconClass = "w-4 h-4 md:h-8 md:w-8 text-primaryColor";

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
  const radarRef = useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const [selectedHover, setSelectedHover] = React.useState(0);
  const [showSideCard, setShowSideCard] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(64);
  const [mobile, setMobile] = React.useState(false);

  useLayoutEffect(() => {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (height > width) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useLayoutEffect(() => {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (height > width) {
      setFontSize(36);
    } else {
      setFontSize(64);
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

  return (
    <main
      ref={mobile ? radarRef : null}
      className="flex min-h-screen max-w-[100vw] overflow-x-hidden flex-col items-center justify-between"
    >
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-0 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>

      <RevealOnScroll threshold={0.55}>
        <section
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col items-center justify-between w-full  relative z-0 "
        >
          <div className="flex flex-col w-10/12 mt-[10vh] md:mt-[7.5vh] md:mb-0 md:w-[80vw] items-start md:items-center ">
            <div className="flex flex-row text3d items-start mt-8 md:mt-0 md:items-center justify-between mr-[30vw] md:mr-64  md:-ml-[3vw]">
              <p
                style={{ fontSize: `${fontSize}px` }}
                className={`text-[#c7c7c7] font-bold`}
              >
                {constantText}
              </p>
              <div className="relative ml-2 md:ml-4 ">
                {rotatingText.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="absolute left-0  "
                      animate={{
                        y:
                          index != rotatingText.length - 1
                            ? [fontSize, -fontSize * 0.5, -fontSize - 10]
                            : [fontSize, mobile ? 0 : -fontSize * 0.55],
                        opacity:
                          index != rotatingText.length - 1 ? [0, 1, 0] : [0, 1],
                        transition: {
                          times: [0, 0.8, 1],
                          duration: 1.5,
                          repeatDelay: 1.5 * (rotatingText.length - 1),
                          delay: 1.5 * index,
                        },
                      }}
                    >
                      <p
                        style={{ fontSize: `${fontSize}px` }}
                        className={`text-primaryColor font-bold`}
                      >
                        {item}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            {/* <h1 className="overflow-hidden text-[3rem] text3d text-center font-bold leading-[3rem] text-[#ffffffcc]">
              {text1.split("").map((char, index) => (
                <span
                  className={`animate-slideUp inline-block  [animation-fill-mode:backwards]`}
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1> */}
            <h1 className="overflow-hidden text-[1.25rem] md:text-[1rem] text-start md:text-center text3d text-primaryText">
              {text2}
            </h1>
          </div>
          <motion.div
            style={{ y: y }}
            transition={{ duration: 3 }}
            className="w-10/12  relative"
          >
            <div className="relative flex h-[50vh] md:h-[65vh] 2xl:-[60vh] w-full flex-col items-center justify-center space-y-4  px-4">
              <div className="mx-auto w-full max-w-xl mt-[10vh] md:mt-[5vh]">
                <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                  <IconContainer
                    text={`Web Development`}
                    icon={<CgWebsite className={iconClass} />}
                    delay={0.2}
                  />
                  <IconContainer
                    delay={0.4}
                    text="Mobile apps"
                    icon={<FaMobile className={iconClass} />}
                  />
                  <IconContainer
                    text="Custom Softwares"
                    delay={0.3}
                    icon={<SiBmcsoftware className={iconClass} />}
                  />
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                  <IconContainer
                    text="Data Mining"
                    delay={0.5}
                    icon={<GiMining className={iconClass} />}
                  />
                  <IconContainer
                    text="ETL Pipelines"
                    icon={<SiAzurepipelines className={iconClass} />}
                    delay={0.8}
                  />
                </div>
              </div>
              <div className="mx-auto w-full max-w-xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                  <IconContainer
                    delay={0.6}
                    text="Data Analytics"
                    icon={<LuLayoutDashboard className={iconClass} />}
                  />
                  <IconContainer
                    delay={0.7}
                    text="ERP Development"
                    icon={<MdOutlineManageAccounts className={iconClass} />}
                  />
                </div>
              </div>

              <Radar className="absolute md:-bottom-12 2xl:-bottom-8" />
              {/* <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" /> */}
            </div>
          </motion.div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll
        threshold={mobile ? 1 : 0.35}
        addedClasses={" w-full flex flex-col items-center"}
      >
        <section
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="  relative flex flex-col w-10/12 md:w-[80vw] z-0 overflow-hidden"
        >
          <div className="flex flex-col  items-center">
            <h1 className="overflow-hidden text-[2rem] md:text-[3rem] text3d text-center font-bold leading-[3rem] text-primaryColor">
              {section2.split("").map((char, index) => (
                <span
                  className={`animate-slideUpSlow inline-block  [animation-fill-mode:backwards]`}
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>
          <div className="w-full flex flex-row justify-between items-start md:mt-4">
            <div
              className={`hidden md:flex flex-col w-[55%] items-center justify-center `}
            >
              <div
                onMouseEnter={() => {
                  setShowSideCard(true);
                }}
                onMouseLeave={() => {
                  debounce(() => {
                    setShowSideCard(false);
                  }, 5000)();
                }}
                class={`[border-image:linear-gradient(to_right,#0087B2,#FFFFFF,#043357)_2] bg-primaryColor/10  w-full min-h-[50vh] border-[2px] p-8 ${
                  selectedHover > 0 || selectedHover < 10
                    ? "animate-slideUp"
                    : null
                }`}
              >
                <h1 className="text-primaryColor/90 text-2xl animate-slideUpSmall">
                  {serviceList[selectedHover]?.title}
                </h1>
                <p className="text-md text-[#c7c7c7aa] mt-4 animate-slideUpSmall">
                  {serviceList[selectedHover]?.description}
                </p>
                <p className="text-primaryColor mt-4">Applications</p>
                <div className="grid grid-cols-4 gap-x-2 gap-y-2 mt-2">
                  {serviceList[selectedHover]?.applications.map(
                    (item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#383e48] py-2 flex justify-center items-center rounded-3xl"
                        >
                          <p className="text-[10px] text-[#c7c7c7]">{item}</p>
                        </div>
                      );
                    }
                  )}
                </div>
                <p className="text-primaryColor mt-4">Tech Stack</p>
                <div className="flex flex-row overflow-scroll mt-2">
                  {serviceList[selectedHover].techStack.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col px-4 py-4 items-center border-[1px] rounded-xl mr-2 border-[#383e48]"
                      >
                        <div className="h-[7.5vh] w-[7.5vh] relative">
                          <Image src={item.image} layout="fill" />
                        </div>
                        <p className="text-[#383e48] mt-2 text-md">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              onMouseLeave={() => {}}
              className="flex flex-col w-full md:w-[40%] group items-center justify-center"
            >
              {serviceList.map((item, index) => {
                return (
                  <a
                    key={item.index}
                    onMouseEnter={() => {
                      debounce(() => {
                        setSelectedHover(index);
                        setShowSideCard(true);
                      }, 300)();
                    }}
                    className="flex  text-[#fff] group-hover:text-[#c7c7c755]   justify-start w-full  border-b-[1px] border-[#ffffff22] hover:border-[#ffffff44] transition-all duration-300 ease-in-out"
                  >
                    <div className="hover:text-primaryText flex group/text flex-row items-start space-x-4 py-1">
                      <p className="text-[0.75rem] ">0{index + 1}</p>
                      <h1 className=" text-xl leading-[1.25rem] group-hover/text:translate-x-[20px] duration-200">
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
        threshold={0.35}
        addedClasses={" w-10/12 mt-[10vh] animate-slideUp"}
      >
        <div className="circle2 absolute left-1/2 top-1/2" />
        <section className="flex flex-col w-full relative z-0 overflow-hidden">
          <div className="flex flex-col md:flex-row w-full h-full justify-between items-center">
            <div className="flex flex-col w-full md:w-[40%] md:h-[80vh]  items-start justify-center">
              <p className="text-primaryText text-xl md:text-2xl animate-slideUp">
                Why?
              </p>
              <h1 className=" text-[1.5rem] md:text-[2rem] text-start font-bold leading-[2rem] overflow-hidden text-[#0097b2]">
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
              <p className="text-[#c7c7c7aa] text-md animate-slideUp delay-1000">
                The Infinity Solutions is a technology company that provides
                software development services to enterprises and startups. We
                specialize in web and mobile app development, UI/UX design, and
                server management.
              </p>
              <button className="bg-primaryColor text-primaryText px-4 py-2 mt-8">
                Contact Us
              </button>
            </div>
            <div className="flex w-full md:w-[60%] md:h-[80vh] px-0 md:px-[10%] relative flex-row justify-center items-center">
              {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b222] via-[#0097b211] to-[#000000] "></div> */}
              {/* <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_90%,transparent_100%)]"></div> */}
              <div className="flex flex-col mr-4 mt-[10vh]">
                <div className=" border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-lg text-primaryColor">
                    {"Tailored Solutions"}
                  </h2>
                  <p className="text-sm mt-4 text-primaryText/60">
                    {
                      "We prioritize understanding your needs to deliver customized, innovative solutions that drive business growth."
                    }
                  </p>
                </div>
                <div className=" border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-lg text-primaryColor">
                    {"Comprehensive Expertise"}
                  </h2>
                  <p className="text-sm mt-4 text-primaryText/60">
                    {
                      "We excel in web, mobile, and custom software development, alongside robust data management solutions."
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col -mt-[10vh]">
                <div className=" border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-lg text-primaryColor">
                    {"Cutting-Edge Solutions"}
                  </h2>
                  <p className="text-sm mt-4 text-primaryText/60">
                    {
                      "Our experienced team leverages the latest technologies to deliver solutions that exceed expectations."
                    }
                  </p>
                </div>
                <div className=" border-primaryColor/45 border-[1px] rounded-xl mb-4 animate-slideUpSmall flex flex-col justify-center items-start p-4">
                  <h2 className="text-lg text-primaryColor">
                    {"Reliable Support"}
                  </h2>
                  <p className="text-sm mt-4 text-primaryText/60">
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
      <Delivery />
      <Lifecycle />
      <PastWork />
      <ContactUs />
    </main>
  );
}
