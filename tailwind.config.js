module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        roverNeutral: "#F7F4E5",
        roverGold: "#DBB13B",
        roverNavy: "#2D325A",
        roverBlue: "#333333",
        roverAqua: "#56BDA2"
      },
      fontFamily: {
        brand: ['"Baloo 2"']
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}