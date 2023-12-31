/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "'Inter Tight', 'SF Pro Display', -apple-system, BlinkMacSystemFont, Inter, 'Segoe UI', 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "2xl": ["3.5rem", "1"],
      "3xl": ["6rem", "1"],
      "5xl": ["8rem", "1"],
    },
    colors: {
      transparent: "transparent",
      white: "#FFF",
      "white-a08": "rgba(255, 255, 255, 0.08)",
      offwhite: "#e8e8e8",
      background: "#0D0A13",
      "background-grad-second": "#0f081d",
      primary: "#591ADE",
      "primary-shadow": "#381792",
      primaryLight: "#8850FE",
      primaryDark: "#222326",
      grey: "rgb(133, 134, 153)",
      "grey-a038": "rgba(255, 255, 255, 0.66)",
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2.0rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4.0rem",
      11: "4.4rem",
      12: "4.8rem",
      xl: "10rem",
      "navigation-height": "var(--navigation-height)",
    },
    boxShadow: {
      primary: "#2f1074 0 5px 35px",
    },
    gridTemplateColumns: {
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      projectCard: "70% 30%",
      accordionTrigger: "1fr 1fr",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [],
}
