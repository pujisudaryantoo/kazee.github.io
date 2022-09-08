/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px -8px 11px -1px rgba(150,150,150,0.75);',
      }
    },
  plugins: [],
}
}
