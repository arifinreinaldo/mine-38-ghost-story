// Per-case progress in localStorage.
const key = (id) => `mdm-save:${id}`

export const loadSave = (id) => {
  try {
    return JSON.parse(localStorage.getItem(key(id))) || {}
  } catch {
    return {}
  }
}

export const writeSave = (id, data) => {
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
}

export const hasProgress = (id) => {
  const s = loadSave(id)
  return (
    (s.examined && s.examined.length > 0) ||
    (s.interrogated && Object.keys(s.interrogated).length > 0) ||
    s.accused != null
  )
}
