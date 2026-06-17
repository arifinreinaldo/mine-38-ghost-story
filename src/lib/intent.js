// Remembers where the user was headed when they hit a login wall, so we can
// resume there after sign-in — including after a full reload from a magic link.
const KEY = 'mdm-intent'

export const setIntent = (dest) => {
  try {
    localStorage.setItem(KEY, dest)
  } catch {
    /* ignore */
  }
}

export const getIntent = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export const clearIntent = () => {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}
