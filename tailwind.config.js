/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0a",
        slate: {
          950: "#0f172a",
          900: "#0f1419",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          400: "#94a3b8",
          300: "#cbd5e1",
        },
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "JetBrains Mono", "monospace"],
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "heading-xl": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "heading-lg": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-md": ["1.875rem", { lineHeight: "1.3", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
