module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        150: "150%",
      },
      animation: {
        "fade-in": "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "swirl-in-fwd": "swirl-in-fwd 0.7s ease-out both",
        "puff-in-center":
          "puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "swirl-in-fwd": {
          "0%": {
            transform: "rotate(-540deg) scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "rotate(0) scale(1)",
            opacity: "1",
          },
        },
        "puff-in-center": {
          "0%": {
            transform: "scale(2)",
            filter: "blur(4px)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
