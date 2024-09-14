"use client"
import React from "react"
import StoreFront from "@material-symbols/svg-400/rounded/storefront.svg"
import Package from "@material-symbols/svg-400/rounded/package_2.svg"
import PhoneMessage from "@material-symbols/svg-400/rounded/perm_phone_msg.svg"

const CARDS_ABOUT_US = [
  {
    title: "Grande variedade",
    icon: <StoreFront className="h-8 w-8 text-black-80" />,
    description:
      "Oferecemos muitos tipos diferentes de produtos com menos variações em cada categoria.",
  },
  {
    title: "Envio rápido e gratuito ⃰",
    icon: <Package className="h-8 w-8 text-black-80" />,
    description:
      "Prazo de entrega de 4 dias ou menos, frete grátis e opção de entrega expressa.",
  },
  {
    title: "Suporte 24h/7",
    icon: <PhoneMessage className="h-8 w-8 text-black-80" />,
    description:
      "respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana e em tempo real.",
  },
]

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold">Sobre nós</h3>
        <p className="text-sm text-black-60">
          Peça agora e aprecie a beleza do seu produto
        </p>
      </div>

      <div className="flex items-center justify-between">
        {CARDS_ABOUT_US.map((card, id) => (
          <div className="flex flex-col items-center gap-2" key={id}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2">
              {card.icon}
            </div>
            <h4>{card.title}</h4>
            <p className="max-w-[350px] text-center text-sm text-black-60">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs
