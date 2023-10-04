/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: ".5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1160px",
      },
    },
    extend: {},
  },
  plugins: [],
};
