module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      mont: ["Montserrat"],
    },
    screens: {
      xs: { min: "0px" },
      sm: { min: "769px" },
      md: { min: "1025px" },
      lg: { min: "1281px" },
      xl: { min: "1367px" },
    },
    extend: {
      colors: {
        cta: "#FEC004",
        input: "#2274A5",
        "trading-long": "#17C3B2",
        "trading-short": "#D74E09",
        white: "#E9EAE9",
        "dark-white": "#d9d9d9",
        black: "#000000",
        overlay: "#333333",
        "dapp-background": "#191919",
        "warning-red": "#A52222",
        "box-background": "#101010",
        "box-border": "#575757",
        "light-gray": "#686868",
        "dark-gray": "#383838",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
      borderRadius: ["first", "last"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
