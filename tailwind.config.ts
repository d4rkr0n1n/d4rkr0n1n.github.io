import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      void: "#080b0b",
      surface: "#0e1312",
      line: "#23302b",
      phosphor: "#b5f66a",
      faded: "#89998e",
      cream: "#eaf0e7",
    },
    extend: {
      borderColor: {
        line: "#23302b",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: { glow: "0 0 44px rgba(181,246,106,.12)" },
      keyframes: {
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
        rise: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        scan: { from: { transform: "translateY(-100%)" }, to: { transform: "translateY(100%)" } },
      },
      animation: { blink: "blink 1s step-end infinite", rise: "rise .65s ease both", scan: "scan 8s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
