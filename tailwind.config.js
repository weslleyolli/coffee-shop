/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purplelight: "#EBE5F9",
        purpleMedium: "#8047F8",
        purpledark: "#4B2995",
        yellowlight: "#F1E9C9",
        yellowmedium: "#DBAC2C",
        yellowdark: "#C47F17",
        baseTitle: "#272221",
        baseSubtitle: "#403937",
        baseText: "#574F4D",
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        baloo: 'var(--font-baloo)',
      }
    },
  },
  plugins: [],
}
