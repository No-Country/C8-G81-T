module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      // serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        "dark-text": "#232323",
        "light-grey": "#f1f3f3",
        "dark-blue": "#1d3096",
        "purple-normal": "#7b7bf3",
        "sky-fluor": "#4edcdd",
        "sky-light": "#7dd6f8",
        "sky-normal": "#1aa7ec",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4060ab",
          secondary: "#646FD4",
          accent: "#FFD24C",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
  require("daisyui"), 
  require("tw-elements/dist/plugin")],
};
