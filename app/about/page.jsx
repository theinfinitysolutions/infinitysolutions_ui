import React from "react";

let section = "About Us";
const AboutUs = () => {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-between">
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-0 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="flex flex-col z-0 w-10/12 items-center">
        <div className="flex flex-col  items-center mt-[10vh] w-11/12 md:w-8/12 md:mt-[7.5vh]">
          <h1 className="overflow-hidden text-[2rem] md:text-[3rem] text3d text-center font-bold leading-[3rem] text-primaryColor">
            {section.split("").map((char, index) => (
              <span
                className={`animate-slideUpSlow inline-block  [animation-fill-mode:backwards]`}
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-lg ext-primaryText/80 text-center">
            {
              "Welcome to The Infinity Solutions - where innovation meets excellence in IT consultancy services. We are a team of passionate individuals, dedicated to crafting bespoke solutions for your digital needs. We combine cutting-edge technology with user-friendly design to create seamless experiences that resonate with your audience. Whether it's developing intuitive websites, engaging mobile apps, or powerful software solutions, we prioritize usability and accessibility without compromising on functionality or performance."
            }
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-[10vh]">
          <p className="text-sm text-center text-primaryText/80 md:text-2xl">
            {
              "Like our work ? , reach out to us and let us build the best solution for your product"
            }
          </p>
          <div className=" flex w-full md:max-w-lg items-center justify-center mt-4">
            <div className="relative z-10 flex w-[35vw] md:w-[10vw] cursor-pointer items-center overflow-hidden rounded-full border border-[#0097b255] p-[1.5px] shadow-[0_8px_48px_4px_rgba(0,151,178,0.2)]">
              <div className=" animate-rotate absolute inset-0 h-full w-full rounded-full  bg-[conic-gradient(#0097b2_20deg,transparent_120deg)]"></div>
              <div className="relative z-20 flex flex-row justify-center w-full items-center rounded-full bg-black hover:bg-[#121212] px-2 py-2 md:px-4 md:py-2">
                <p className="relative z-50 w-full block rounded-lg border border-black bg-black  text-center text-[12px] md:text-sm text-primaryText/80 shadow-2xl transition duration-200">
                  Contact Us
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primaryText/80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
