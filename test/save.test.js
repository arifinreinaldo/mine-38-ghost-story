import { describe, it, expect, vi } from 'vitest'
import {
  loadSave,
  writeSave,
  clearSave,
  hasProgress,
  hydrateSave,
  listSaves,
  setSyncHandler,
} from '../src/lib/save'
import { setIntent, getIntent, clearIntent } from '../src/lib/intent'

describe('save (per-case progress)', () => {
  it('round-trips data (timestamped) and clears it', () => {
    expect(loadSave('mahameru')).toEqual({})
    writeSave('mahameru', { screen: 'accuse', examined: ['termos'] })
    const s = loadSave('mahameru')
    expect(s).toMatchObject({ screen: 'accuse', examined: ['termos'] })
    expect(typeof s._ts).toBe('number')
    clearSave('mahameru')
    expect(loadSave('mahameru')).toEqual({})
  })
  it('keeps slots independent per case id', () => {
    writeSave('a', { examined: ['x'] })
    writeSave('b', { examined: ['y'] })
    expect(loadSave('a').examined).toEqual(['x'])
    expect(loadSave('b').examined).toEqual(['y'])
  })
  it('detects progress from examined / interrogated / accused', () => {
    expect(hasProgress('c')).toBe(false)
    writeSave('c', { examined: ['x'] })
    expect(hasProgress('c')).toBe(true)
    clearSave('c')
    writeSave('c', { interrogated: { dimas: [0] } })
    expect(hasProgress('c')).toBe(true)
    clearSave('c')
    writeSave('c', { accused: [] })
    expect(hasProgress('c')).toBe(true)
  })
  it('survives corrupt JSON', () => {
    localStorage.setItem('mdm-save:bad', '{not json')
    expect(loadSave('bad')).toEqual({})
  })
  it('notifies the sync handler on write and clear', () => {
    const calls = []
    setSyncHandler((action, id, data) => calls.push([action, id, data]))
    writeSave('x', { examined: ['z'] })
    clearSave('x')
    setSyncHandler(null)
    expect(calls[0][0]).toBe('write')
    expect(calls[0][1]).toBe('x')
    expect(calls[0][2]).toMatchObject({ examined: ['z'] })
    expect(calls[1]).toEqual(['clear', 'x', undefined])
  })
  it('hydrateSave writes without notifying the handler', () => {
    const handler = vi.fn()
    setSyncHandler(handler)
    hydrateSave('h', { examined: ['k'], _ts: 5 })
    setSyncHandler(null)
    expect(handler).not.toHaveBeenCalled()
    expect(loadSave('h')).toEqual({ examined: ['k'], _ts: 5 })
  })
  it('listSaves enumerates all saved cases', () => {
    writeSave('one', { examined: ['a'] })
    writeSave('two', { examined: ['b'] })
    const ids = listSaves().map((s) => s.id).sort()
    expect(ids).toEqual(['one', 'two'])
  })
})

describe('intent (resume-after-login)', () => {
  it('sets, gets and clears', () => {
    expect(getIntent()).toBeNull()
    setIntent('next')
    expect(getIntent()).toBe('next')
    clearIntent()
    expect(getIntent()).toBeNull()
  })
})
