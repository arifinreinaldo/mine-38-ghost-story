import { usePwa } from '../pwa/usePwa'

// Global, unobtrusive PWA status: an offline notice when the network drops.
export default function PwaBar() {
  const { offline } = usePwa()
  if (!offline) return null
  return (
    <div className="offline-bar" role="status">
      Mode luring — progres tetap tersimpan di perangkat.
    </div>
  )
}
