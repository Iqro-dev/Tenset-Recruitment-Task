module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767px" },
        xl: { min: "1400px" },
        lg: { min: "1250px" },
        "4k": { min: "1921px" },
      },
      colors: {
        pink: "#fd62d5",
        gray: "#acacac",
      },
    },
  },
  plugins: [],
};
