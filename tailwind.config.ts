import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#F1F8E9",
          100: "#E8F5E9",
          200: "#C8E6C9",
          300: "#A5D6A7",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#2E7D32",
          700: "#1B5E20",
          800: "#145214",
          900: "#0D3B0D",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card:  "0 4px 24px 0 rgba(46, 125, 50, 0.08)",
        "card-hover": "0 8px 32px 0 rgba(46, 125, 50, 0.14)",
        btn:   "0 4px 14px 0 rgba(46, 125, 50, 0.25)",
        "btn-hover": "0 6px 20px 0 rgba(46, 125, 50, 0.35)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease both",
        "fade-in":    "fadeIn 0.5s ease both",
        "pulse-green": "pulseGreen 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.4)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(76, 175, 80, 0)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #E8F5E9 0%, #FFFFFF 50%, #F1F8E9 100%)",
        "green-gradient":
          "linear-gradient(to right, #1B5E20, #2E7D32)",
      },
    },
  },
  plugins: [],
};

export default config;