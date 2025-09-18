/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // 👈 add here
  ],
};
