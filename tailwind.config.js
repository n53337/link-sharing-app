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
        "grey-placeholder": "#EEEEEE",
        white: "#FFFFFF",
        error: "#FF3939",
      },
      boxShadow: {
        btn: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
        "drop-down": "0px 0px 32px 0px rgba(0, 0, 0, 0.10)",
      },
      width: {
        120: "42rem",
      },
      borderRadius: {
        mobile: "70px",
      },
      scale: {
        "-100": "-1",
      },
      animation: {
        "slide-up": "slide-up 0.5s ease",
        "loop-opacity": "loopOpacity 2s ease-out infinite",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        loopOpacity: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
