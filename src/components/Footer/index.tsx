import React from "react"

const Footer = () => {
  return (
    <footer className="bg-primary-100 w-full p-4">
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-bold">Link-Mark Shop</h3>

        <p>
          © {new Date().getFullYear()} • all Right Reserved Term of use
          LinkMark Shop
        </p>
      </div>
    </footer>
  )
}

export default Footer
