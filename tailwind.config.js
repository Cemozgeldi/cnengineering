/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      colors: {
        primaryBtn: "#4A5C7A",
        secondaryBtn: "#2F627E",
        textColor: "#20201E",
      },
      fontFamily: {
        titilum: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
