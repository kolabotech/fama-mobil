/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,sets,tsx}", "./components/**/*.{js,jsx,sets,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // colors: {
      //   blue: '#0047D1',
      //   blueDark: '#001b4f',
      //   green: '#0A9D0E',
      // },
    },
  },
  plugins: [],
}