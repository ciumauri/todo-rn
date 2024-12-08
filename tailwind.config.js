/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      width: {
        '9/10': '90%',
        '3/10': '30%',
        '1/10': '10%',
      },
      colors: {
        'primary': {
          500: '#7A5CFA',
        }
      },
    },
  },
  plugins: [],
}