// https://tailwindcss.com/docs/installation#create-your-configuration-file
module.exports = {
  content: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        margin: "auto",
        padding: "5%",
        screens: {
          DEFAULT: "100%",
        },
      },
      colors: {
        seafoam: "#c8eae8",
        ladgreen: "#4da698",
        offwhite: "#FAFAFA",
        black: "#161616",
        charcoal: "#53565A",
        gray: {
          100: "#757575",
        },
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    screens: {
      xs: "428px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
      "5xl": "2560px",
    },
    fontFamily: {
      rajdhani: ["Rajdhani", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
      "work-sans": ["Work Sans", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      17: ["1.0625rem", { lineHeight: "1.5rem" }], // 17px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      19: ["1.188rem", { lineHeight: "1.5" }], // 19px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      22: ["1.375rem", { lineHeight: "1.5" }], // 22px
      "2xl": ["1.438rem", { lineHeight: "2rem" }], // 23px
      24: ["1.5rem", { lineHeight: "1" }], // 24px
      "3xl": ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      29: ["1.813rem", { lineHeight: "1.25" }], // 29px
      30: ["1.875rem", { lineHeight: "1.5" }], // 30px
      alpha: ["2rem", { lineHeight: "1" }], // 32px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      42: ["2.625rem", { lineHeight: "1" }], // 42px
      46: ["2.875rem", { lineHeight: 1 }], // 46px
      "5xl": ["3rem", { lineHeight: "1" }], // 48px
      menu: ["3.25rem", { lineHeight: "1" }], // 52px
      "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
      "7xl": ["5rem", { lineHeight: "1" }], // 80px
      "8xl": ["6.188rem", { lineHeight: "1" }], // 99px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    fontWeight: {
      thin: 200,
      light: 200,
      normal: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  variants: {},
  plugins: [function () {}],
  safelist: [
    {
      pattern: /(bg|text|border)-(offwhite|seafoam)/,
    },
  ],
  future: {},
};
