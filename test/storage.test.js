import { describe, it, expect } from 'vitest'
import { loadSave, writeSave, clearSave, hasProgress } from '../src/lib/save'
import { setIntent, getIntent, clearIntent } from '../src/lib/intent'

describe('save (per-case progress)', () => {
  it('round-trips data and clears it', () => {
    expect(loadSave('mahameru')).toEqual({})
    writeSave('mahameru', { screen: 'accuse', examined: ['termos'] })
    expect(loadSave('mahameru')).toEqual({ screen: 'accuse', examined: ['termos'] })
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
    writeSave('c', { accused: [] }) // accused present (even empty) counts
    expect(hasProgress('c')).toBe(true)
  })
  it('survives corrupt JSON', () => {
    localStorage.setItem('mdm-save:bad', '{not json')
    expect(loadSave('bad')).toEqual({})
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
