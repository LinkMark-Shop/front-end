import ProductTemplate from "@/templates/ProductPage"

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <ProductTemplate params={params} />
    </div>
  )
}
