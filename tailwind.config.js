/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palegray: "#D9D9D9",
        paleyellow: "#F4F4DC",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        inder: ["Inder", "sans-serif"],
      },
    },
  },
  plugins: [],
}

