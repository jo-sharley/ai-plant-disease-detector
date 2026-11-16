export default {
  darkMode: "class",
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        canvas: "#fafaf5",
        warn: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          500: "#f59e0b",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        severe: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          400: "#f87171",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
        },
        night: {
          DEFAULT: "#0b120e",
          800: "#121b16",
          700: "#1a2620",
          600: "#26352d",
          500: "#344a3e",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 83, 45, 0.05), 0 4px 14px rgba(20, 83, 45, 0.06)",
        lifted: "0 2px 4px rgba(20, 83, 45, 0.06), 0 16px 40px rgba(20, 83, 45, 0.12)",
        phone: "0 4px 8px rgba(15, 23, 42, 0.08), 0 30px 60px rgba(20, 83, 45, 0.22)",
      },
      transitionProperty: {
        interactive: "color, background-color, border-color, box-shadow, transform, opacity",
      },
      transitionTimingFunction: {
        snappy: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
};
