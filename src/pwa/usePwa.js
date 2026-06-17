import { useEffect, useState } from 'react'
import { subscribe, canInstall, isStandalone, promptInstall } from './pwa'

export function usePwa() {
  const [installable, setInstallable] = useState(canInstall())
  const [offline, setOffline] = useState(
    typeof navigator !== 'undefined' && navigator.onLine === false
  )

  useEffect(() => subscribe(() => setInstallable(canInstall())), [])

  useEffect(() => {
    const goOnline = () => setOffline(false)
    const goOffline = () => setOffline(true)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return { canInstall: installable, standalone: isStandalone(), offline, promptInstall }
}
