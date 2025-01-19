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
        primaryColor: "#004250",
        secondaryColor: "#88BBD8",
        thirdColor: "#F9C54B"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jacques: ['Jacques Francois Shadow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
