/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },

          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20vh)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUpSmall: {
          "0%": { opacity: 0, transform: "translateY(5vh)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        textTransform: {
          "0%": {
            transform: " translateZ(0px)  ",
          },
          "100%": {
            transform: " translateZ(-50vh) ",
          },
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "radar-spin": {
          from: {
            transform: "rotate(20deg)",
          },
          to: {
            transform: "rotate(380deg)",
          },
        },
      },
      animation: {
        rotate: "rotate 6s linear infinite",
        slideUp: "slideUp 1s ease-in-out forwards",
        slideUpSlow: "slideUp 2s ease-in-out forwards",
        slideUpSmall: "slideUpSmall 0.5s ease-in-out forwards",
        textTransform: "textTransform 2s ease-in-out forwards",
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "radar-spin": "radar-spin 4s linear infinite",
      },
      colors: {
        primaryColor: "#0097b2",
        primaryText: "#e6e6e6",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
