/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      borderImageSource: {
        "custom-gradient": "linear-gradient(180deg, #7184FD 0%, #2D83EE 100%)",
      },
    },
    listStyleType: {
      decimal: "decimal",
      disc: "disc",
      circle: "circle",
      alpha: "lower-alpha",
    },
  },
  plugins: [],
};
