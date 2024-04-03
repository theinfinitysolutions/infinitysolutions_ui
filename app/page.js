import Image from "next/image";
import Navbar from "@/components/navbar";
import React from "react";

export default function Home() {
  return (
    <main className="flex h-[90vh] flex-col items-center justify-between">
      <section className="flex flex-col h-[90vh] items-center w-full relative z-0">
        <div className="absolute z-100 flex flex-col w-full bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#5581d466] via-[#5581d413] to-[#5581d400] "></div>
        <div className="absolute z-50 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
        <div className="flex flex-col justify-center items-center h-[70vh] w-11/12 md:w-8/12">
          <p className="text-[32px] md:text-[54px] font-bold text-white text-center">
            The Infinity Solutions
          </p>
          <p className="text-[16px] text-center text-white mt-4">
            {
              "The Infinity Solutions is a leading software development company that specializes in building exceptional software solutions. We deliver innovative and reliable applications tailored to meet our clients' unique needs. "
            }
          </p>
          <div className="md:w-3/12 xl:w-2/12 mt-8 flex max-w-lg items-center justify-center">
            <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-[#5581d455] p-[1.5px] shadow-[0_8px_48px_4px_rgba(85,129,212,0.5)]">
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#5581d4_20deg,transparent_120deg)]"></div>
              <div className="relative z-20 flex flex-row justify-center w-full items-center rounded-[0.60rem] bg-black hover:bg-[#121212] px-4 py-2">
                <p className="relative z-50 w-full block rounded-lg border border-black bg-black  text-center text-sm text-white shadow-2xl transition duration-200">
                  Contact Us
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
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
      </section>
    </main>
  );
}
