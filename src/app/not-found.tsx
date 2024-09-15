import Link from "next/link"

import { ArrowLeft } from "lucide-react"

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-1">
      <p className="text-primary-100 text-5xl font-medium sm:text-8xl">404</p>

      <h1 className="mb-4 text-xl sm:mb-8 sm:text-3xl">
        Página não encontrada
      </h1>

      <button className="gap-2">
        <Link href="/" className="flex items-center justify-center">
          <ArrowLeft /> Voltar para a página incial
        </Link>
      </button>
    </div>
  )
}

export default NotFoundPage
