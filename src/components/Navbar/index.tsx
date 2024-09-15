"use client"
import Link from "next/link"
import React from "react"
import ShoppingCart from "@material-symbols/svg-400/rounded/shopping_cart.svg"
import Person from "@material-symbols/svg-400/rounded/person.svg"

const NAVIGATIONS = [
  { name: "Home", link: "/" },
  { name: "Produtos", link: "/products" },
  { name: "Contato", link: "/contacts" },
]

const Navbar: React.FC = () => {
  return (
    <nav className="flex h-[80px] w-full items-center px-4 shadow-[1px_1px_5px_-2px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex w-full max-w-[1200px] justify-between">
        <ul className="flex gap-4">
          {NAVIGATIONS.map((item, id) => (
            <li key={id}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link href="/checkout">
            <div>
              <ShoppingCart className="h-6 w-6" />
            </div>
          </Link>
          <Link href="/login">
            <Person className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
