import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8CC63F",
          secondary: "#0071BC",
          accent: "#E6FAFC",
          neutral: "#58595B",
          "base-100": "#f1f1f1",
          info: "#8CB8EE",
          success: "#1C7D51",
          warning: "#F6AA1C",
          error: "#EE1C11",
        },
      },
    ],
  },
};
export default config;
