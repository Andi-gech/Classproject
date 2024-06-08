/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "j": "Roboto, sans-serif"
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(26, 26, 26, 0.7360119047619048) 4%, rgba(0, 0, 0, 0.699334733893557) 15%, rgba(0, 212, 255, 0) 100%)",
        lightgrad:
          "linear-gradient(180deg,rgba(247, 244, 244, 0.736) 4%,rgba(224, 222, 222, 0.699) 15%,rgba(238, 240, 240, 0) 100%)",

        cuspage:
          " background: linear-gradient(45.75deg,rgba(0, 0, 0, 0.47) 34.31%,rgba(61, 61, 61, 0.787) 98.11%)",
        nightnavcovergrad:
          "  linear-gradient(180deg,rgba(26, 26, 26, 0.7360119047619048) 100%,rgba(0, 0, 0, 0.699334733893557) 15%,rgba(0, 212, 255, 0) 4%)",
        lightnavcovergrad:
          " linear-gradient(180deg,rgba(139, 137, 137, 0.736) 4%,rgba(167, 164, 164, 0.699) 15%,rgb(236, 233, 233) 100%)",
      },
    },
  },
  plugins: [],
}

