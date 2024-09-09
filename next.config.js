/**
 * @type {import('next').NextConfig}
 */

const path = require("path")

const nextConfig = {
  webpack: (config) => {
    // Adiciona regra para tratar arquivos SVG
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",

          options: {
            svgo: false, // Desativa otimização do SVGO
            svgProps: {
              fill: "currentColor", // Adiciona a propriedade 'fill' nos ícones
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
