import { useEffect } from 'react'
import { useAppLocation } from '../../../routes/Router'

export function ScrollManager() {
  const { hash, pathname } = useAppLocation()

  useEffect(() => {
    let attempts = 0
    let timeoutId: number | undefined

    function restoreFocusAndScroll() {
      const main = document.getElementById('main-content')

      if (!main && attempts < 20) {
        attempts += 1
        timeoutId = window.setTimeout(restoreFocusAndScroll, 25)
        return
      }

      main?.focus({ preventScroll: true })

      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
      } else {
        window.scrollTo({ left: 0, top: 0 })
      }
    }

    timeoutId = window.setTimeout(restoreFocusAndScroll, 0)

    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [hash, pathname])

  return null
}
