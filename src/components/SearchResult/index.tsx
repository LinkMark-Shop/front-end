import React, { useCallback, useEffect, useRef, useState } from "react"
import cn from "@/utils/classnames"

import { ProductProps } from "@/utils/types"
import useWindowSize from "@/hooks/useWindowSize"

type SearchResultProps = {
  data: ProductProps[]
  handleClick: (item: ProductProps) => void
  onFocus?: (item: ProductProps) => void
}

const SearchResult: React.FC<SearchResultProps> = ({
  data,
  handleClick,
  onFocus,
}) => {
  const ref = useRef(null)
  const itemsRefs = useRef([])
  const [focused, setFocused] = useState(-1)
  const { screenWidth } = useWindowSize()
  const isMobile = screenWidth < 1024

  function isFocused(focused: boolean): string | null {
    return focused ? "bg-primary-60" : null
  }

  useEffect(() => {
    if (focused >= 0) {
      //@ts-expect-error
      itemsRefs.current[focused]?.current?.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "start",
      })
    }
  }, [focused, data])

  const handleKeyboardEvent = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e
      if (key === "ArrowDown") {
        setFocused((prev) => (prev === data.length - 1 ? 0 : prev + 1))
      }
      if (key === "ArrowUp") {
        setFocused((prev) => (prev <= 0 ? data.length - 1 : prev - 1))
      }
      if (key === "Escape") {
        setFocused(-1)
      }
      if (key === "Enter") {
        if (focused >= 0) handleClick(data[focused])
      }
    },
    [focused, data, handleClick],
  )

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener("keydown", handleKeyboardEvent)

      return () => document.removeEventListener("keydown", handleKeyboardEvent)
    }
  }, [handleKeyboardEvent, isMobile])

  return (
    <div ref={ref} className="absolute top-16 w-full">
      {data?.length > 0 ? (
        <ul className="m-0 max-h-[40vh] list-none rounded-md bg-white p-0 shadow-[1px_1px_5px_1px_rgba(0,0,0,0.3)]">
          {data?.map((item, id) => (
            <li
              className={cn(
                isFocused(focused === id),
                "cursor-pointer px-6 py-4",
              )}
              key={`result ${id}`}
              onMouseEnter={(): void => setFocused(id)}
              onClick={(): void => handleClick(item)}
              onMouseDown={(e: React.MouseEvent): void => e.preventDefault()}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-md bg-white px-6 py-4">
          Nenhum resultado encontrado!
        </div>
      )}
    </div>
  )
}

export default SearchResult
