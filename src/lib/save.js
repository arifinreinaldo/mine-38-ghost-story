// Per-case progress in localStorage — the synchronous, offline source of truth.
// An optional sync handler mirrors writes to a database (see progressSync.js)
// when the player is signed in; without it, behaviour is exactly as before.
const PREFIX = 'mdm-save:'
const key = (id) => `${PREFIX}${id}`

let syncHandler = null
// Register a (action, id, data) callback invoked on write/clear (cloud sync).
export const setSyncHandler = (fn) => {
  syncHandler = fn
}

export const loadSave = (id) => {
  try {
    return JSON.parse(localStorage.getItem(key(id))) || {}
  } catch {
    return {}
  }
}

// Write + stamp a timestamp (for last-write-wins merges) + notify the handler.
export const writeSave = (id, data) => {
  const stamped = { ...data, _ts: Date.now() }
  try {
    localStorage.setItem(key(id), JSON.stringify(stamped))
  } catch {
    /* ignore */
  }
  if (syncHandler) {
    try { syncHandler('write', id, stamped) } catch { /* ignore */ }
  }
}

// Write straight to localStorage WITHOUT notifying the handler — used when
// hydrating from the database, so it doesn't echo straight back up.
export const hydrateSave = (id, data) => {
  try {
    localStorage.setItem(key(id), JSON.stringify(data))
  } catch {
    /* ignore */
  }
}

export const clearSave = (id) => {
  try {
    localStorage.removeItem(key(id))
  } catch {
    /* ignore */
  }
  if (syncHandler) {
    try { syncHandler('clear', id) } catch { /* ignore */ }
  }
}

// Every saved case on this device: [{ id, state }].
export const listSaves = () => {
  const out = []
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && k.startsWith(PREFIX)) {
        const id = k.slice(PREFIX.length)
        out.push({ id, state: loadSave(id) })
      }
    }
  } catch {
    /* ignore */
  }
  return out
}

export const hasProgress = (id) => {
  const s = loadSave(id)
  return (
    (s.examined && s.examined.length > 0) ||
    (s.interrogated && Object.keys(s.interrogated).length > 0) ||
    s.accused != null
  )
}
