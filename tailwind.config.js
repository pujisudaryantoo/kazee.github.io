/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px -8px 11px -1px rgba(150,150,150,0.75);',
        'side': '100px 0px 100px 0px rgba(97,97,97,0.69);',
        'sideurutan': '1px 0px 15px 800px rgba(97,97,97,0.69);',
        'sidefilter': '1px 0px 15px 100px rgba(97,97,97,0.69);',
        'sidewaktu': '1px 0px 15px 600px rgba(97,97,97,0.69);',
        'sidetanggal': '1px 0px 15px 600px rgba(97,97,97,0.69);',
        'sidesumber': '1px 0px 15px 300px rgba(97,97,97,0.69);',
        'sidebagikan': '1px 0px 15px 800px rgba(97,97,97,0.69);',
        'sideaksi': '1px 0px 15px 700px rgba(97,97,97,0.69);',
        'sidekeyword': '1px 0px 15px 600px rgba(97,97,97,0.69);',
        'sidemindata': '1px 0px 15px 400px rgba(97,97,97,0.69);'
      }
    },
  plugins: [],
}
}
