"use client"

import React, { useEffect, useState } from "react"

const Input = () => {
  const [value, setValue] = useState(true)
  const [number, setNumber] = useState<number>(0)
  const [saldo, setSaldo] = useState()

  const lista = [1, 2, 3, 4, 5, 6]
  console.log("value", value)

  return (
    <div>
      {value && lista.map((item, id) => <div key={id}>{item}</div>)}
      <button
        className="border-white-100 mt-4 rounded-sm border-2 p-2"
        onClick={() => setValue((value) => !value)}
      >
        Clique Aqui
      </button>
      <br />
      <button onClick={() => setNumber((value) => value + 1)}>
        Clique agora
      </button>
      <p>{number}</p>
    </div>
  )
}

export default Input
