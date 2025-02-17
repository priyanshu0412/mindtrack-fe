/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#DCE1DE",
        secondaryColor: "#216869",
        thirdColor: "#1F2421"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jacques: ['Jacques Francois Shadow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
