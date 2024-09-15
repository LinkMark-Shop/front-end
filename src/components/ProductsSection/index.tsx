"use client"

import React, { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import { ProductProps } from "@/utils/types"
import { Spinner } from "../UI/Spinner"

const ProductsSection = () => {
  const [data, setData] = useState<ProductProps[] | null>(null)

  useEffect(() => {
    async function product() {
      try {
        const response = await fetch("http://localhost:3001/api/products")

        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error(error)
      }
    }
    product()
  }, [])

  return (
    <div className="my-8 flex min-h-[500px] flex-col gap-8">
      <h3 className="text-center text-2xl font-bold md:text-left">
        Veja nossa seleção de produtos
      </h3>
      <div className="flex max-w-[1050px] flex-wrap justify-center gap-8">
        {data ? (
          data
            .slice(0, 6)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsSection
