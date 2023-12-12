/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter"],
    },
    colors: {
      transparent: "transparent",
      Onyx: "#474448",
      RaisinBlack: "#2D232E",
      Bone: "#E0DDCF",
      Wenge: "#534B52",
      BurntSienna: "#F17249",
    },
  },
  plugins: [],
};
