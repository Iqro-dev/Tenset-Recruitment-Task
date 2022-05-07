module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "900px" },
        md: { min: "901px" },
        xl: { min: "1400px" },
        lg: { min: "1200px" },
        "2xl": { min: "1800px" },
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
