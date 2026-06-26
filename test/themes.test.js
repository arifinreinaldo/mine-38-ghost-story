import { describe, it, expect } from 'vitest'
import { THEMES, DEFAULT_KEY } from '../src/audio/themes'
import { caseList } from '../src/cases'

describe('audio themes', () => {
  it('has a default lobby theme', () => {
    expect(THEMES[DEFAULT_KEY]).toBeTruthy()
  })
  it('defines a theme for every case id', () => {
    for (const c of caseList) expect(THEMES[c.id], `theme for ${c.id}`).toBeTruthy()
  })
  it('gives each case a distinct root pitch', () => {
    const roots = caseList.map((c) => THEMES[c.id].root)
    expect(new Set(roots).size).toBe(roots.length)
  })
  it('each theme has the fields the engine reads', () => {
    for (const key of Object.keys(THEMES)) {
      const t = THEMES[key]
      expect(typeof t.root, key).toBe('number')
      expect(typeof t.cutoff, key).toBe('number')
      expect(typeof t.level, key).toBe('number')
      expect(Array.isArray(t.stack), key).toBe(true)
      expect(Array.isArray(t.scale), key).toBe(true)
      expect(t.stack.length).toBeGreaterThan(0)
    }
  })
})
