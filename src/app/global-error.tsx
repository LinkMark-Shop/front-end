"use client"

const GlobalErrorPage: React.FC<{
  error: Error & { digest?: string }
  reset: () => void
}> = ({ error, reset }) => {
  console.error("error:", error)
  return (
    <html lang="pt-BR">
      <body className="flex h-screen flex-col items-center justify-center gap-1">
        <p className="text-primary text-5xl font-medium sm:text-8xl">500</p>

        <h1 className="mb-4 text-xl sm:mb-8 sm:text-3xl">Algo deu errado!</h1>

        <button onClick={reset}>Tentar novamente</button>
      </body>
    </html>
  )
}

export default GlobalErrorPage
