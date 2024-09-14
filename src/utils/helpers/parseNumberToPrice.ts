type ParseNumberToPriceOptions = {
  currency?: "BRL" | "EUR" | "USD"
  hideCents?: boolean
}

const parseNumberToPrice = (
  value: number,
  options?: ParseNumberToPriceOptions,
): string => {
  if (typeof value !== "number") {
    throw new Error("O valor precisa ser um número")
  }

  const val = options?.hideCents ? Math.floor(value) : value

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: options?.currency || "BRL",
    maximumFractionDigits: options?.hideCents ? 0 : 2,
  })

  return formatter.format(val)
}

export default parseNumberToPrice
