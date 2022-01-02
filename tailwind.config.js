module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#46178F'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
