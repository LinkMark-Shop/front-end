"use client"
import React, { useState } from "react"
import { Input } from "../../Input"
import { Search } from "lucide-react"

const SearchInput = () => {
  const [value, setValue] = useState("")

  return (
    <div className="relative flex items-center">
      <Input
        type="text"
        placeholder="Busque aqui seu produto"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-14 pr-14"
      />
      <button
        // onClick={onSearch}
        className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary p-1"
      >
        <Search />
      </button>
    </div>
  )
}

export default SearchInput
