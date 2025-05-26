/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
    ],
    theme: {
      extend: {
        colors: {
          'pure': {
            DEFAULT: '#00847C',
            light: '#00A99D',
            dark: '#006C66'
          }
        }
      },
    },
    plugins: [],
  };