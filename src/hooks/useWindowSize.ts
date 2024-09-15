import { useEffect, useState } from "react"

type ScreenSize = {
  screenWidth: number
  screenHeight: number
}

function useWindowSize(): ScreenSize {
  const isWindowClient = typeof window === "object"
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    screenWidth: 1024,
    screenHeight: 768,
  })

  const setSize = (): void => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    if (!isWindowClient) return
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    })
    window.addEventListener("resize", setSize)
    return () => window.removeEventListener("resize", setSize)
  }, [isWindowClient])

  return screenSize
}

export default useWindowSize
