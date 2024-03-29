/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'navbar-bg-mobile': "url('./public/assets/images/bg-sidebar-mobile.svg')",
        'navbar-bg-desktop': "url('./public/assets/images/bg-sidebar-desktop.svg')",
      })
    },
  },
  plugins: [],
}