/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-50": "#BEADFF",
        "purple-10": "#EFEBFF",
        grey: "#333333",
        "grey-50": "#737373",
        "grey-10": "#D9D9D9",
        "grey-light": "#FAFAFA",
        white: "#FFFFFF",
        error: "#FF3939",
      },
      boxShadow: {
        btn: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
