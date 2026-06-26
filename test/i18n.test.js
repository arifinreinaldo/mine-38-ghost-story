import { describe, it, expect } from 'vitest'
import { L, localize } from '../src/i18n/L'
import { UI } from '../src/i18n/strings'

describe('L()', () => {
  it('tags a bilingual leaf', () => {
    expect(L('halo', 'hello')).toEqual({ __l: true, id: 'halo', en: 'hello' })
  })
})

describe('localize()', () => {
  it('picks the requested language', () => {
    expect(localize(L('halo', 'hello'), 'en')).toBe('hello')
    expect(localize(L('halo', 'hello'), 'id')).toBe('halo')
  })
  it('falls back to id when the target is missing', () => {
    expect(localize(L('halo', undefined), 'en')).toBe('halo')
  })
  it('recurses into objects and arrays, resolving only L leaves', () => {
    const tree = {
      id: 'keep-me',
      flag: true,
      n: 7,
      title: L('judul', 'title'),
      list: [L('satu', 'one'), { x: L('dua', 'two') }],
    }
    expect(localize(tree, 'en')).toEqual({
      id: 'keep-me',
      flag: true,
      n: 7,
      title: 'title',
      list: ['one', { x: 'two' }],
    })
  })
  it('preserves primitives and null untouched', () => {
    expect(localize(null, 'en')).toBeNull()
    expect(localize(42, 'en')).toBe(42)
    expect(localize('plain', 'en')).toBe('plain')
  })
  it('does not mutate the source object', () => {
    const src = { title: L('judul', 'title') }
    localize(src, 'en')
    expect(src.title).toEqual({ __l: true, id: 'judul', en: 'title' })
  })
})

// Same shape (keys + value types) in both languages, or a lookup is undefined at runtime.
function shape(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) => {
    if (typeof v === 'function') return [`${prefix}${k}:function`]
    if (v && typeof v === 'object' && !Array.isArray(v)) return shape(v, `${prefix}${k}.`)
    return [`${prefix}${k}:${typeof v}`]
  })
}

describe('UI strings parity', () => {
  it('id and en have identical shapes', () => {
    expect(shape(UI.id).sort()).toEqual(shape(UI.en).sort())
  })
  it('templated strings render with their argument', () => {
    expect(UI.en.next.locked(3)).toContain('3')
    expect(UI.id.next.locked(3)).toContain('3')
    expect(UI.en.investigation.progress(1, 2, 3, 4)).toMatch(/1.*2.*3.*4/)
  })
})
