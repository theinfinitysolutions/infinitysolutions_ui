import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";
import "normalize.css/normalize.css";
import Head from "next/head";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "The Infinity Solutions",
  description:
    "The Infinity Solutions - Best Tech Consultancy in India - Website,  Mobile App, & Custom Tech Solutions | Data Analysis | Data Mining",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          The Infinity Solutions - Best Tech Consultancy in India - Website,
          Mobile App, & Custom Tech Solutions | Data Analysis | Data Mining
        </title>
        <meta
          name="description"
          content="The Infinity Solutions is a tech consultancy in India that provides website, mobile app, and custom tech solutions, data analysis, and data mining services."
        />
        <meta property="og:title" content="The Infinity Solutions" />
        <meta
          property="og:description"
          content="The Infinity Solutions is a tech consultancy in India that provides website, mobile app, and custom tech solutions, data analysis, and data mining services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theinfinitysolutions.net" />
        <meta property="og:image" content="/opengraph-image.png" />
      </Head>
      <body
        className={`${inter.className} bg-black max-w-screen overflow-x-hidden`}
      >
        <Cursor />
        <Navbar />
        <div className="bg-black min-h-screen flex flex-col">
          {/* <div className="absolute flex flex-col w-full h-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5581d466] via-[#5581d413] to-[#5581d400]"></div> */}
          <div className="w-screen mt-[90px]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
