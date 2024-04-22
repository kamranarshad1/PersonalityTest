/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#8d8d8d",
          200: "#011c2a",
          300: "#0b0f27",
          400: "#03071c",
          500: "rgba(0, 0, 0, 0.25)",
        },
        white: "#fff",
        black: "#000",
        silver: "#c9c9c9",
        steelblue: "#505887",
        dimgray: "#616161",
        darkgray: "#a5a5a5",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        urbanist: "Urbanist",
        "arima-madurai": "'Arima Madurai'",
        poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
        "201xl": "220px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      mini: "15px",
      "3xl": "22px",
      "5xl": "24px",
      "6xl": "25px",
      "9xl": "28px",
      "11xl": "30px",
      "14xl": "33px",
      "21xl": "40px",
      "31xl": "50px",
      "36xl": "55px",
      "91xl": "110px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
