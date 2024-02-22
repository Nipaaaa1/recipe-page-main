/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          nutmeg: "hsl(14, 45%, 36%)",
          darkRaspberry: "hsl(332, 51%, 32%)",
        },
        neutral: {
          roseWhtie: "hsl(330, 100%, 98%)",
          eggshel: "hsl(30, 54%, 90%)",
          lightGrey: "hsl(30, 18%, 87%)",
          wengeBrown: "hsl(30, 10%, 34%)",
          darkCharcoal: "hsl(24, 5%, 18%)",
        },
      },
      fontFamily: {
        youngSerif: ["Young Serif", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
