import { setSyncHandler, hydrateSave, loadSave, listSaves } from './save'
import { loadCloudProgress, upsertCloudProgress, deleteCloudProgress } from './cloud'

// Local-first cloud sync for per-case progress. localStorage stays the
// immediate, offline source of truth; this mirrors it to the database for the
// signed-in user (debounced) and merges cloud progress back on login, using a
// last-write-wins rule keyed on each save's timestamp.

let currentUser = null
const timers = {}
const DEBOUNCE = 1500

const ms = (iso) => {
  const t = Date.parse(iso)
  return Number.isNaN(t) ? 0 : t
}

// Mirror local writes/clears up to the database (writes debounced). Call once.
export function attachProgressSync() {
  setSyncHandler((action, id, data) => {
    if (!currentUser) return
    if (action === 'clear') {
      clearTimeout(timers[id])
      delete timers[id]
      deleteCloudProgress(currentUser, id)
      return
    }
    clearTimeout(timers[id])
    timers[id] = setTimeout(() => {
      delete timers[id]
      upsertCloudProgress(currentUser, id, data)
    }, DEBOUNCE)
  })
}

export function setProgressUser(user) {
  currentUser = user || null
}

// Merge cloud <-> local for this user. Returns true if local changed (so the
// caller can re-render screens that read progress).
export async function syncProgress(user) {
  currentUser = user || null
  if (!user) return false

  const cloud = await loadCloudProgress(user)
  const cloudById = {}
  for (const row of cloud) cloudById[row.story_id] = row
  let changed = false

  // cloud -> local where cloud is at least as new (or local is missing)
  for (const row of cloud) {
    if (!row.state) continue
    const localTs = loadSave(row.story_id)._ts || 0
    if (ms(row.updated_at) >= localTs) {
      hydrateSave(row.story_id, row.state)
      changed = true
    }
  }

  // local -> cloud where local is newer (or cloud is missing)
  for (const { id, state } of listSaves()) {
    const row = cloudById[id]
    if (!row || (state._ts || 0) > ms(row.updated_at)) {
      upsertCloudProgress(user, id, state)
    }
  }

  return changed
}
