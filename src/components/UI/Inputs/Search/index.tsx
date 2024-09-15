"use client"
import React, { useEffect, useState } from "react"
import { Input } from "../../Input"
import { Search } from "lucide-react"
import SearchResult from "@/components/SearchResult"
import { ProductProps } from "@/utils/types"
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"

const SearchInput = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [showResultList, setShowResultList] = useState(false)
  const [data, setData] = useState<ProductProps[]>([])

  useEffect(() => {
    async function product() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/products/search?name=${searchValue}`,
        )

        const json = await response.json()

        setData(json)
        setShowResultList(true)
      } catch (error) {
        console.error(error)
      }
    }
    if (searchValue) {
      product()
    }
  }, [searchValue])

  function handleClick(item: ProductProps): void {
    const url = `http://localhost:3000/produtos/${item.id}`

    setShowResultList(false)
    router.push(url)
  }

  return (
    <div
      className="relative flex flex-col gap-2"
      onBlur={(): void => setShowResultList(false)}
    >
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Busque aqui seu produto"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="h-14 pr-14"
        />
        <button
          // onClick={onSearch}
          className="bg-primary-100 absolute right-2 flex h-10 w-10 items-center justify-center rounded-md p-1"
        >
          <Search />
        </button>
      </div>
      {showResultList && <SearchResult data={data} handleClick={handleClick} />}
    </div>
  )
}

export default SearchInput
