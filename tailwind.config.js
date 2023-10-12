/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
  plugins: [require("flowbite/plugin")],
};
