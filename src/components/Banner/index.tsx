"use client"
import React, { useState } from "react"
import SearchInput from "../UI/Inputs/Search"

const Banner = () => {
  // const [value, setValue] = useState("")

  // function onChange(value: string): void {
  //   setValue(value)
  // }

  return (
    <div className="mt-[-24px] flex w-full max-w-[1200px] justify-between rounded-2xl bg-primary p-8">
      <div className="flex flex-col items-start justify-center gap-8">
        <h1 className="text-5xl font-extrabold">Compre seu sonho</h1>
        <div className=" flex flex-col items-start pl-4">
          <p className="text-xl font-semibold">Tudo o que precisa</p>
          {/* <div className="h-full border-r-2 border-black-40" /> */}
          <p className="pl-10 text-xl font-semibold">em um só lugar ;)</p>
        </div>
        <div className="w-full">
          {" "}
          <SearchInput />
        </div>
      </div>
      <div className="my-[-32px] mr-[-32px] h-full max-w-[550px]">
        <img
          src="/static/images/banner-image.png"
          alt="banner principal"
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Banner
