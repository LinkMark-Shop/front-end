/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.[jt]s?(x)"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      text: "#1E1E1E",
      primary: {
        140: "#76acac",
        100: "#C1DCDC",
        60: "#c1dcdc99",
      },
      black: {
        100: "#000000",
        80: "#1E1E1E",
        60: "rgba(30, 30, 30, 0.75)",
        40: "rgba(30, 30, 30, 0.5)",
      },
      white: "#FFFFFF",
      yellow: {
        100: "#FFD400",
        80: "#FFDC33",
        60: "#FFE566",
        40: "#FFEE99",
        20: "#FFF6CC",
      },
      green: {
        100: "#28CC00",
        80: "#49CC29",
        60: "#6ACC52",
        40: "#8ACC7A",
        20: "#ABCCA3",
      },
      red: {
        100: "#E52421",
        80: "#E5312E",
        60: "#E55E5C",
        40: "#E58B89",
        20: "#E5B8B7",
      },
      border: "#dcdfe4",
      ring: "#C1DCDC",
    },
    extend: {
      fontSize: {
        inherit: ["inherit", "normal"],
      },
      textUnderlinePosition: {
        auto: "auto",
        under: "under",
        left: "left",
        right: "right",
        above: "above",
      },
    },
  },
  plugins: [
    function ({
      addComponents,
      addUtilities,
    }: {
      addComponents: Function
      addUtilities: Function
    }) {
      addComponents({
        ".hyperlink": {
          "@apply text-primary-100 underline transition-colors duration-300 underline-under hover:bg-primary-100 hover:text-white hover:decoration-primary-100":
            {},
        },
      })

      const newUtilities = {
        ".underline-auto": {
          "text-underline-position": "auto",
        },
        ".underline-under": {
          "text-underline-position": "under",
        },
        ".underline-left": {
          "text-underline-position": "left",
        },
        ".underline-right": {
          "text-underline-position": "right",
        },
        ".underline-above": {
          "text-underline-position": "above",
        },
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
}
