"use client"

import SearchInput from "../UI/Inputs/Search"

const Banner = () => {
  return (
    <div className="bg-primary-100 mt-[-24px] flex w-full max-w-[1200px] justify-between rounded-2xl p-8">
      <div className="flex flex-col items-start justify-center gap-8">
        <h1 className="text-5xl font-extrabold">Compre seu sonho</h1>
        <div className=" flex flex-col items-start pl-4">
          <p className="text-xl font-semibold">Tudo o que precisa</p>

          <p className="pl-12 text-xl font-semibold">em um só lugar ;)</p>
        </div>
        <div className="w-full">
          {" "}
          <SearchInput />
        </div>
      </div>
      <div className="my-[-32px] mr-[-32px] hidden h-full max-w-[550px] md:block">
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
