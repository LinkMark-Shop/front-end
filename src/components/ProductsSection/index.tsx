import { productsList } from "@/utils/products"
import React from "react"
import ProductCard from "../ProductCard"

const ProductsSection = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {productsList.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsSection
