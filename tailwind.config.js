/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cream': '#f3e0e2',
      'white': '#ffffff',
      'gray': '#333333',
      'orange': '#ff583b',
      'orange-active': '#ff2600',
      'red': '#dd4e40',
      'red-active': '#ed3c2b',
      'blue': '#179afe',
      'blue-active': '#0091ff',
    },
    fontWeight: {
      thin: '200',
      normal: '400',
      medium: '500',
      bold: '600',
    },
    extend: {
      spacing: {
        'icon-size': '1.375rem',
      }
    }
  },
  plugins: [],
}

