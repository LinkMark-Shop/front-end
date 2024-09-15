"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/UI/Button"
import { Spinner } from "@/components/UI/Spinner"
import parseNumberToPrice from "@/utils/helpers/parseNumberToPrice"
import { ProductProps } from "@/utils/types"

import React, { useEffect, useState } from "react"

const ProductTemplate = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<ProductProps | null>(null)

  useEffect(() => {
    async function product() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/products/${params?.id}`,
        )

        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error(error)
      }
    }
    product()
  }, [])

  return (
    <div className="flex flex-col items-center gap-12">
      <Navbar />
      <div className="flex min-h-[77.5vh] w-full flex-col items-center justify-center px-4">
        {data ? (
          <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
            <div>
              <div className="bg flex max-h-[430px] max-w-[520px] items-center justify-center overflow-hidden ">
                <img
                  src={data.img}
                  alt={`produto: ${data.name}`}
                  className="h-auto w-auto rounded-md align-middle"
                />
              </div>
            </div>
            <div className="my-10 flex flex-col items-center gap-4">
              <div className="justify-start-start flex w-full flex-col">
                <h3 className="text-start text-xl font-bold">{data.name}</h3>
                <p className="text-black-40">
                  {parseFloat(data.evaluation).toFixed(1)}/5{" "}
                  <b className="text-black-100">⭐</b>
                </p>
              </div>

              <div className="flex w-full justify-between gap-4">
                <div className="flex flex-col items-center">
                  <p className="text-primary-140 text-lg font-bold">
                    {parseNumberToPrice(parseFloat(data.price))}
                  </p>
                  <div>Quantidade</div>
                </div>

                <div>
                  <p>
                    Em Estoque: <b>{data.stock}</b>
                  </p>
                </div>
              </div>
              <Button className="w-full">+ Adicionar ao Carrinho</Button>
              <div className="border-primary-60 overflow-y max-h-[175px] max-w-[350px] overflow-y-auto rounded-md border p-4">
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default ProductTemplate
