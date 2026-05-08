/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        bg: {
          primary: "#080c14",
          secondary: "#0d1321",
          card: "#111827",
          glass: "rgba(17, 24, 39, 0.7)",
        },
        accent: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          green: "#10b981",
          purple: "#a78bfa",
        },
        border: {
          subtle: "rgba(34,211,238,0.15)",
          glow: "rgba(34,211,238,0.4)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "slide-in": "slideIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(34,211,238,0.15), 0 0 60px rgba(34,211,238,0.05)",
        "glow-lg": "0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(34,211,238,0.08)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
        "cyan-gradient": "linear-gradient(135deg, #22d3ee, #3b82f6)",
        "card-gradient": "linear-gradient(135deg, rgba(17,24,39,0.9), rgba(8,12,20,0.9))",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [],
};
