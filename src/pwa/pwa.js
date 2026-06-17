// Tiny singleton around install + standalone state. Imported for its side
// effect in main.jsx so the install event is captured as early as possible.
let deferred = null
const subs = new Set()
const emit = () => subs.forEach((fn) => fn())

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferred = e
    emit()
  })
  window.addEventListener('appinstalled', () => {
    deferred = null
    emit()
  })
}

export const subscribe = (fn) => {
  subs.add(fn)
  return () => subs.delete(fn)
}

export const canInstall = () => deferred !== null

export const isStandalone = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(display-mode: standalone)').matches ||
    window.navigator.standalone === true)

export async function promptInstall() {
  if (!deferred) return false
  deferred.prompt()
  const res = await deferred.userChoice.catch(() => ({ outcome: 'dismissed' }))
  deferred = null
  emit()
  return res.outcome === 'accepted'
}
