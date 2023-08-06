/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    /*  fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.75rem",
    }, */
    extend: {
      fontFamily: {
        /*### Headings*/
        dm_Serif: ["DM Serif Display", "serif"],
        /*### Body*/
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        /*  ### Primary */
        dark_Violet: "hsl(256, 26%, 20%)",
        grayish_Blue: "hsl(216, 30%, 68%)",

        /* ### Neutral */

        very_Dark_Violet: "hsl(270, 9%, 17%)",
        dark_Grayish_Violet: "hsl(273, 4%, 51%)",
        very_light_gray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
