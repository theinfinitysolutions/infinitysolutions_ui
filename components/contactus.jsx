import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const section4 = "Contact Us";

const ContactUs = () => {
  return (
    <RevealOnScroll threshold={0.65} addedClasses={" w-10/12 animate-slideUp"}>
      <section className="flex flex-col items-center w-full relative z-0 ">
        <div className="flex flex-col md:flex-row w-full h-full relative justify-between items-center my-[10vh] rounded-xl overflow-hidden [border-image:linear-gradient(to_right,#0087B2,#FFFFFF,#043357)_1] border-[1px]">
          <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="flex flex-col w-full md:w-[50%] items-start justify-center px-8">
            <h1 className="overflow-hidden text-[3rem] text-start font-bold leading-[3rem] text-[#0097b2]">
              {section4.split("").map((char, index) => (
                <span
                  className="animate-slideUp inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="text-lg text-white/60 animate-slideUpSmall">
              {
                "Have a question or want to discuss a project? We'd love to hear from you. Fill out the form below and we'll get back to you within 4 hours."
              }
            </p>
          </div>
          <div className="flex flex-col w-full md:w-[50%] items-center md:items-end justify-center px-0 md:px-8 my-[7.5vh]">
            <div className="flex flex-col w-10/12 space-y-4 animate-slideUpSmall">
              <div className="flex flex-col items-start">
                <label className="text-white/80">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md text-white/80 focus:outline-none focus:border-primaryColor"
                  label="Name"
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="text-white/80">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md text-white/80 focus:outline-none focus:border-primaryColor"
                  label="Email"
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="text-white/80">Phone Number</label>
                <input
                  type="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md text-white/80 focus:outline-none focus:border-primaryColor"
                  label="Email"
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="text-white/80">Message</label>
                <textarea
                  placeholder="Message"
                  className="w-full px-4 h-[15vh] py-2 bg-transparent border border-white/30 rounded-md text-white/80 focus:outline-none focus:border-primaryColor"
                  label="Message"
                ></textarea>
              </div>
              <button className="px-6 py-2  bg-primaryColor text-white/90 rounded-md hover:bg-primaryColor/90 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default ContactUs;
