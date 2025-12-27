/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/ayuAtama/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/ayuAtama/*.{js,ts,jsx,tsx,mdx}",
    "./components/ayuAtama/*.{js,ts,jsx,tsx,mdx}",
    "./components/ayuAtama/**/*.{js,ts,jsx,tsx,mdx}",

    //    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    //    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    //    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: {
          50: "#fff1f6",
          100: "#ffe4ec",
          200: "#fecddf",
          300: "#fda4c7",
          400: "#fb6fa5",
          500: "#f43f8a",
          600: "#e11d74",
        },
      },
    },
  },
  plugins: [],
};
