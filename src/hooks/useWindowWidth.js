import { useLayoutEffect, useState } from "react"

export function useWindowWidth() {
  const [size, setSize] = useState(0)

  useLayoutEffect(() => {
    function updateSize() {
      setSize(
        document.documentElement.clientWidth
      )
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}
