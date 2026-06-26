import { describe, it, expect } from 'vitest'
import { RANKS, TREASURE_BADGE } from '../src/lib/ranks'
import { localize } from '../src/i18n/L'

describe('ranks', () => {
  it('defines the four detective ranks', () => {
    expect(Object.keys(RANKS).sort()).toEqual(['inspektur', 'magang', 'muda', 'utama'])
  })
  it('localizes label and note to plain strings', () => {
    const en = localize(RANKS.utama, 'en')
    const id = localize(RANKS.utama, 'id')
    expect(typeof en.label).toBe('string')
    expect(typeof en.note).toBe('string')
    expect(en.label).not.toBe(id.label) // genuinely translated
  })
  it('localizes the treasure badge', () => {
    const en = localize(TREASURE_BADGE, 'en')
    expect(en.label).toBe('Treasure Hunter')
    expect(typeof en.note).toBe('string')
  })
})
