/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'B8B': '#B8B8B8',
      'FFF': '#FFFFFF',
      '232': '#232323',
      '7A7': '#7A7A7A',
      'DED': '#DEDEDE',
      'F1F': '#F1F1F1',
      '111': '#111111',
      '454': '#454545',
      '464': '#464646',
      'D9D': '#D9D9D9',
      '1D1': '#1D1D1D',
      '414': '#414141',
      'B51': '#B5179E',
      '000-0cc': '#000000cc',
      'rgba-35': '#2323234d',
      'rgba-65': '#414141a6',
    },

    extend: {},
  },
  plugins: [],
}

