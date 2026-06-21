import { usePwa } from '../pwa/usePwa'
import { useUI } from '../i18n/LangProvider'

// Global, unobtrusive PWA status: an offline notice when the network drops.
export default function PwaBar() {
  const { offline } = usePwa()
  const ui = useUI()
  if (!offline) return null
  return (
    <div className="offline-bar" role="status">
      {ui.pwa.offline}
    </div>
  )
}
