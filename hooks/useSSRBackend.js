// hooks/useSSRBackend.js
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { useMemo } from "react"

export default function useSSRBackend() {
  const Backend = useMemo(() => {
    if (typeof window === "undefined") {
      // Return a default backend for SSR
      return HTML5Backend
    } else {
      // Client-side logic for detecting touch support
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )
      return isMobile ? TouchBackend : HTML5Backend
    }
  }, [])

  return Backend
}
