/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.[jt]s?(x)"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      text: "#1E1E1E",
      primary: {
        100: "#C1DCDC",
      },
      white: {
        100: "#FFFFFF",
      },
      black: {
        100: "#000000",
        80: "#1E1E1E",
        60: "rgba(30, 30, 30, 0.75)",
        40: "rgba(30, 30, 30, 0.5)",
      },
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
