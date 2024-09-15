import parseNumberToPrice from "@/utils/helpers/parseNumberToPrice"

import Link from "next/link"
import React from "react"

type ProductCardProps = {
  product: {
    name: string
    img: string
    price: string
    id: number
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, img, price, id } = product

  return (
    <div className="border-primary-60/50 relative mt-2 flex w-[300px] flex-col gap-4 overflow-hidden rounded-xl border">
      <div className="bg flex h-[230px] w-full items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={`produto: ${name}`}
          className=" max-h-[300px] w-auto max-w-[300px] align-middle"
        />
      </div>
      <div className="flex flex-col items-start gap-2 p-2">
        <Link
          href={`/produtos/${id}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          <h3 className="font-semibold">{name}</h3>
        </Link>

        <p className="text-black-60">{parseNumberToPrice(parseFloat(price))}</p>
      </div>
    </div>
  )
}

export default ProductCard
