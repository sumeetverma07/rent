import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#64748b",
        ocean: "#2563eb",
        aqua: "#06b6d4",
        mint: "#10b981"
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 70px rgba(37, 99, 235, 0.16)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.10)"
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.8s ease-in-out infinite",
        "marquee": "marquee 28s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" }
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0.24)" },
          "50%": { boxShadow: "0 0 0 12px rgba(16,185,129,0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
