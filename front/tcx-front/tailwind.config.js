/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "bg":"#F2FFFC",
        "vert-foncé-1":"#3A6158",
        "vert-foncé-0":"#3B947F",
        "vert-clair-1":"#28C7A2",
        "vert-clair-0":"#00FABE",
      }
    },
  },
  plugins: [],
};
