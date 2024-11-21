/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            brown: "#a52a2a",
            "brown-dark": "#7a1f1f",
         },
         fontFamily: {
            Playwrite: "'Playwrite BE VLG', 'cursive'",
         },
      },
   },
   plugins: [],
};
