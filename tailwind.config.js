/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
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
