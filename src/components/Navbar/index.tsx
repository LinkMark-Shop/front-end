import Link from "next/link"
import React from "react"
import { ShoppingCartIcon, UserRound } from "lucide-react"
const NAVIGATIONS = [
  { name: "Home", link: "/" },
  { name: "Produtos", link: "/products" },
  { name: "Contato", link: "/contacts" },
]

const Navbar: React.FC = () => {
  return (
    <nav className="fixed flex h-[80px] w-full items-center justify-between px-4 ">
      <ul className="flex gap-4">
        {NAVIGATIONS.map((item, id) => (
          <li key={id}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <Link href="/checkout">
          <ShoppingCartIcon />
        </Link>
        <Link href="/login">
          <UserRound />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
