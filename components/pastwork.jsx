import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import ImgBox from "./ImgBox";
import useIntersect from "./IsIntersect";

let section2 = "Our Projects";

const PastWork = () => {
  const [fixed, setFixed] = React.useState(false);
  const elementRef = useRef(null);
  const [state, setState] = React.useState("nothing is visible");
  const onScreen = useIntersect(elementRef);

  useEffect(() => {
    return onScreen ? setFixed(true) : setFixed(false);
  }, [onScreen]);

  return (
    <div ref={elementRef} className={" w-full overflow-y-hidden relative"}>
      <section
        // onMouseEnter={() => {
        //   setFixed(true);
        // }}
        // onMouseLeave={() => {
        //   setFixed(false);
        // }}
        className="hidden md:flex flex-col h-[150vh] w-full relative z-0 overflow-hidden px-[10vw]"
      >
        <div
          id="section1"
          className={` ${
            fixed ? "fixed  animate-slideUpSmall" : "hidden"
          } left-[40vw] top-[50vh] z-50`}
        >
          <div className="flex flex-col justify-between items-center w-[20vw] bg-black hover:bg-primaryColor transition-all px-4 py-2 rounded-xl border-[1px] group border-primaryColor hover:border-white">
            <span className="text-xl md:text-4xl font-bold text-[#0097b2] group-hover:text-[#fff] before:translate-z-[10rem]">
              The Infinity
            </span>
            <span className="text-xl md:text-4xl font-bold text-[#0097b2] group-hover:text-[#fff] before:translate-z-[10rem] -mt-[2.5%]">
              Solutions
            </span>
          </div>
        </div>

        <div className="flex flex-col  select-none	 items-start mt-[5%] ">
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

        <div className="absolute h-[50vh] w-[80vh] -right-[20vh] top-[40vh] -z-0">
          <ImgBox
            image={"/aceresumes.png"}
            title="Ace Resumes"
            link={"http://144.24.111.231:7003/"}
          />
        </div>

        <div className="absolute h-[30vh] w-[50vh] right-[50vh] top-[100vh] -z-0">
          <ImgBox
            image={"/mahakali.png"}
            link="https://mahakalisarees.com/"
            title="Mahakali Sarees"
          />
        </div>
        <div className="absolute h-[30vh] w-[50vh] left-[15vh] top-[120vh] -z-0">
          <ImgBox
            image={"/sgt.png"}
            link="https://www.shreegovindtourism.com/"
            title="Shree Govind Tourism"
          />
        </div>
        <div className="absolute h-[40vh] w-[80vh] left-[10vh] top-[30vh] -z-0">
          <ImgBox
            image={"/raksheet.png"}
            link="http://144.24.111.231:7005/home"
            title="Raksheet Hospital"
          />
        </div>
        <div className="absolute h-[50vh] w-[30vh] left-[30vh] top-[60vh] z-10">
          <ImgBox
            image={"/raksheetmobile.jpeg"}
            link="http://144.24.111.231:7005/home"
            title="Raksheet Hospital"
          />
        </div>
        <div className="absolute h-[50vh] w-[30vh] right-[5vh] top-[100vh] z-10">
          <ImgBox
            image={"/acemobile.jpeg"}
            title="Ace Resumes"
            link={"http://144.24.111.231:7003/"}
          />
        </div>
      </section>
      <section
        onMouseEnter={() => {
          setFixed(true);
        }}
        onMouseLeave={() => {
          setFixed(false);
        }}
        className="flex md:hidden  flex-col md:h-[150vh] w-full relative z-0 overflow-hidden px-[10vw]"
      >
        <div className="flex flex-col  items-start mt-[5%] ">
          <h1 className="overflow-hidden text-[2rem] md:text-[3rem] text-start font-bold leading-[6rem] text-[#0097b2]">
            {section2.split("").map((char, index) => (
              <span
                className="animate-slideUpSlow inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        <div className="  h-[30vh] w-full mb-8  top-[40vh] -z-0">
          <ImgBox
            image={"/aceresumes.png"}
            title="Ace Resumes"
            link={"http://144.24.111.231:7003/"}
          />
        </div>

        <div className="h-[30vh] w-full mb-8 right-[50vh] top-[100vh] -z-0">
          <ImgBox
            image={"/mahakali.png"}
            link="https://mahakalisarees.com/"
            title="Mahakali Sarees"
          />
        </div>
        <div className="h-[30vh] w-full mb-8 left-[15vh] top-[120vh] -z-0">
          <ImgBox
            image={"/sgt.png"}
            link="https://www.shreegovindtourism.com/"
            title="Shree Govind Tourism"
          />
        </div>
        <div className=" h-[30vh] w-full mb-8 left-[10vh] top-[30vh] -z-0">
          <ImgBox
            image={"/raksheet.png"}
            link="http://144.24.111.231:7005/home"
            title="Raksheet Hospital"
          />
        </div>
      </section>
    </div>
  );
};

export default PastWork;
