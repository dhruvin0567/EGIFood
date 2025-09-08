/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Componets/**/*.{js,ts,jsx,tsx}",
  ],
  // Make Tailwind utilities take precedence over global CSS
  important: true,
  theme: {
    extend: {
      colors: {
        brand: "#980b15",
        brandLight: "#b31a20",
        brandDark: "#7e0a12",
        neutralText: "#222222",
        neutralMuted: "#6b7280",
        surface: "#ffffff",
        surfaceAlt: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
