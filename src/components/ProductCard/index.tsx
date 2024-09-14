import parseNumberToPrice from "@/utils/helpers/parseNumberToPrice"
import { productsList } from "@/utils/products"
import Link from "next/link"
import React from "react"

type ProductCardProps = {
  product: {
    name: string
    img: string
    price: number
    id: number
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, img, price, id } = product

  return (
    <div className="relative flex w-[300px] flex-col gap-4 overflow-hidden rounded-xl">
      <div className="h-[350px] w-full overflow-hidden">
        <img
          src={img}
          alt={`produto: ${name}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Link
          href={`/products/${id}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          <h3 className="font-semibold">{name}</h3>
        </Link>

        <p className="text-black-60">{parseNumberToPrice(price)}</p>
      </div>
    </div>
  )
}

export default ProductCard
