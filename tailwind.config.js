/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        1: "0.0625rem", // 1px
        2: "0.125rem", // 2px
        4: "0.25rem", // 4px
        8: "0.5rem", // 8px
        12: "0.75rem", // 12px
        14: "0.875rem", // 14px
        16: "1rem", // 16px
        20: "1.25rem", // 20px
        24: "1.5rem", // 24px
        32: "2rem", // 32px
        40: "2.5rem", // 40px
        48: "3rem", // 48px
        56: "3.5rem", // 56px
        64: "4rem", // 64px
        72: "4.5rem", // 72px
        80: "5rem", // 80px
        96: "6rem", // 96px
      },
      colors: {
        neutral: {
          0: "#ffffff",
          1: "#FDFDFD",
          2: "#FCFCFB",
          3: "#FAFAFA",
          4: "#F9F9F8",
          5: "#F7F7F6",
          10: "#DFDEDD",
          20: "#C6C5C3",
          30: "#AEADAA",
          40: "#969491",
          50: "#7D7B77",
          60: "#65625E",
          70: "#4D4A45",
          80: "#34312B",
          90: "#1C1812",
          100: "#000000",
        },
        tan: {
          lighter: "#F1ECE1",
          light: "#E4D9C3",
          default: "#DDCFB4",
          dark: "#B1A690",
          darker: "#857C6C",
        },
        brown: {
          lighter: "#978F84",
          light: "#74695B",
          default: "#514432",
          dark: "#31291E",
          darker: "#201B14",
        },
      },
    },
  },
  plugins: [],
};
