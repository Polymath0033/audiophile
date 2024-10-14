/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#D87D4A",
        secondary: "#101010",
        grey: "#F1F1F1",
        black: "#000000",
        // #FBAF85
        "light-primary": "#FBAF85",
        "light-grey": "#FAFAFA",
      },
      fontSize: {
        h1: [
          "56px",
          { lineHeight: "103.571%", fontWeight: 700, letterSpacing: "2px" },
        ],
        h2: [
          "40px",
          { lineHeight: "110%", fontWeight: 700, letterSpacing: "1.429px" },
        ],
        h3: [
          "36px",
          { lineHeight: "112.5%", fontWeight: 700, letterSpacing: "1.143px" },
        ],
        h4: ["28px", { fontWeight: 700, letterSpacing: "2px" }],
        h5: ["24px", { fontWeight: 700, letterSpacing: " 1.714px" }],
        h6: ["18px", { fontWeight: 700, letterSpacing: "1.286px" }],
        overline: ["14px", { fontWeight: 400, letterSpacing: "10px" }],
        subtitle: [
          "13px",
          {
            fontWeight: 400,
            letterSpacing: "0.929px",
            lineHeight: "192.308% ",
          },
        ],
        body: ["15px", { fontWeight: 400, lineHeight: "166.667%" }],
      },
    },
  },
  plugins: [],
};
