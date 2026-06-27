import { describe, it, expect, vi, beforeEach } from 'vitest'

// Supabase layer is mocked — these tests verify the local-first merge/mirror
// logic, not a live database round-trip.
vi.mock('../src/lib/cloud', () => ({
  loadCloudProgress: vi.fn(async () => []),
  upsertCloudProgress: vi.fn(async () => {}),
  deleteCloudProgress: vi.fn(async () => {}),
}))

import * as cloud from '../src/lib/cloud'
import { writeSave, clearSave, loadSave } from '../src/lib/save'
import { attachProgressSync, setProgressUser, syncProgress } from '../src/lib/progressSync'

const user = { id: 'u1' }

beforeEach(() => {
  localStorage.clear()
  vi.clearAllMocks()
  setProgressUser(null) // suppress write-through while arranging
})

describe('syncProgress (merge cloud <-> local)', () => {
  it('hydrates local from cloud when cloud is newer / local is missing', async () => {
    cloud.loadCloudProgress.mockResolvedValueOnce([
      { story_id: 'mahameru', state: { examined: ['x'], _ts: 1000 }, updated_at: new Date(1000).toISOString() },
    ])
    const changed = await syncProgress(user)
    expect(changed).toBe(true)
    expect(loadSave('mahameru').examined).toEqual(['x'])
  })

  it('pushes local-only progress up to the cloud', async () => {
    writeSave('ciu', { examined: ['a'] })
    cloud.loadCloudProgress.mockResolvedValueOnce([])
    await syncProgress(user)
    expect(cloud.upsertCloudProgress).toHaveBeenCalledWith(
      user,
      'ciu',
      expect.objectContaining({ examined: ['a'] })
    )
  })

  it('keeps newer local over older cloud, and pushes it up', async () => {
    writeSave('ciu', { examined: ['new'] }) // _ts ~ now (large)
    cloud.loadCloudProgress.mockResolvedValueOnce([
      { story_id: 'ciu', state: { examined: ['old'], _ts: 1 }, updated_at: new Date(1).toISOString() },
    ])
    await syncProgress(user)
    expect(loadSave('ciu').examined).toEqual(['new'])
    expect(cloud.upsertCloudProgress).toHaveBeenCalledWith(
      user,
      'ciu',
      expect.objectContaining({ examined: ['new'] })
    )
  })

  it('is a no-op without a signed-in user', async () => {
    const changed = await syncProgress(null)
    expect(changed).toBe(false)
    expect(cloud.loadCloudProgress).not.toHaveBeenCalled()
  })
})

describe('attachProgressSync (write-through)', () => {
  it('debounce-upserts writes and deletes immediately — only when signed in', async () => {
    vi.useFakeTimers()
    attachProgressSync()
    setProgressUser(user)

    writeSave('ciu', { examined: ['a'] })
    expect(cloud.upsertCloudProgress).not.toHaveBeenCalled() // debounced
    await vi.advanceTimersByTimeAsync(1600)
    expect(cloud.upsertCloudProgress).toHaveBeenCalledTimes(1)

    clearSave('ciu')
    expect(cloud.deleteCloudProgress).toHaveBeenCalledWith(user, 'ciu')
    vi.useRealTimers()
  })

  it('does not mirror anything when signed out', async () => {
    vi.useFakeTimers()
    attachProgressSync()
    setProgressUser(null)
    writeSave('ciu', { examined: ['a'] })
    await vi.advanceTimersByTimeAsync(1600)
    expect(cloud.upsertCloudProgress).not.toHaveBeenCalled()
    vi.useRealTimers()
  })
})
