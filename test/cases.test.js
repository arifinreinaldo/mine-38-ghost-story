import { describe, it, expect } from 'vitest'
import { caseList, getCase, freeCase, gatedCases } from '../src/cases'
import { localize } from '../src/i18n/L'
import { THEMES } from '../src/audio/themes'

const KNOWN_SCENES = new Set(['mountain', 'estate', 'coast', 'highland', 'toraja', 'kolonial', 'kawi', 'kota', 'distillery'])
const KNOWN_ICONS = new Set(['forensics', 'evidence', 'phone', 'apparel', 'recon', 'social', 'metadata', 'photo', 'doc', 'car', 'ledger', 'cup', 'cctv', 'ticket', 'key'])
const KNOWN_DIFF = new Set(['Mudah', 'Sedang', 'Sulit'])

const countL = (v) => {
  let n = 0
  const walk = (x) => {
    if (x && typeof x === 'object') {
      if (x.__l) n++
      else for (const k in x) walk(x[k])
    }
  }
  walk(v)
  return n
}

describe('case registry', () => {
  it('has 13 cases with unique ids', () => {
    expect(caseList).toHaveLength(13)
    const ids = caseList.map((c) => c.id)
    expect(new Set(ids).size).toBe(13)
  })
  it('has exactly one free case (the sample), the rest gated', () => {
    expect(caseList.filter((c) => c.free)).toHaveLength(1)
    expect(freeCase.free).toBe(true)
    expect(gatedCases).toHaveLength(12)
  })
  it('getCase resolves by id', () => {
    expect(getCase('mahameru')).toBe(freeCase)
    expect(getCase('nope')).toBeUndefined()
  })
})

describe.each(caseList.map((c) => [c.id, c]))('case "%s"', (id, c) => {
  it('has all required top-level fields', () => {
    for (const f of ['difficulty', 'code', 'location', 'scene', 'title', 'blurb', 'cover', 'briefing', 'victim', 'evidence', 'suspects', 'timeline', 'solution', 'reveal'])
      expect(c[f], f).not.toBeUndefined()
  })

  it('uses a known scene, difficulty and has an audio theme', () => {
    expect(KNOWN_SCENES.has(c.scene), `scene ${c.scene}`).toBe(true)
    expect(KNOWN_DIFF.has(c.difficulty), `difficulty ${c.difficulty}`).toBe(true)
    expect(THEMES[c.id], 'theme').toBeTruthy()
  })

  it('has well-formed evidence (unique ids, known icons, one twist + one herring)', () => {
    const ids = c.evidence.map((e) => e.id)
    expect(new Set(ids).size, 'unique evidence ids').toBe(ids.length)
    for (const e of c.evidence) {
      expect(KNOWN_ICONS.has(e.icon), `icon ${e.icon}`).toBe(true)
      for (const f of ['tag', 'title', 'summary', 'detail']) expect(e[f], `${e.id}.${f}`).not.toBeUndefined()
    }
    expect(c.evidence.filter((e) => e.twist).length, 'twist count').toBeGreaterThanOrEqual(1)
    expect(c.evidence.filter((e) => e.herring).length, 'herring count').toBeGreaterThanOrEqual(1)
  })

  it('has well-formed suspects with valid interrogation wiring', () => {
    const evIds = new Set(c.evidence.map((e) => e.id))
    const ids = c.suspects.map((s) => s.id)
    expect(new Set(ids).size, 'unique suspect ids').toBe(ids.length)
    for (const s of c.suspects) {
      for (const f of ['init', 'name', 'age', 'role', 'statement', 'motive', 'alibi', 'interrogation'])
        expect(s[f], `${s.id}.${f}`).not.toBeUndefined()
      for (const qa of s.interrogation) {
        expect(qa.q, 'q').not.toBeUndefined()
        expect(qa.a, 'a').not.toBeUndefined()
        if (qa.requires) expect(evIds.has(qa.requires), `requires ${qa.requires}`).toBe(true)
        if (qa.unlocks) expect(evIds.has(qa.unlocks), `unlocks ${qa.unlocks}`).toBe(true)
      }
    }
  })

  it('unlocks every locked piece of evidence', () => {
    const unlocks = c.suspects.flatMap((s) => s.interrogation.map((qa) => qa.unlocks).filter(Boolean))
    for (const e of c.evidence) if (e.locked) expect(unlocks, `locked ${e.id}`).toContain(e.id)
  })

  it('has a solvable solution (valid culprit/accident + proof evidence)', () => {
    const evIds = new Set(c.evidence.map((e) => e.id))
    const suspIds = new Set(c.suspects.map((s) => s.id))
    const sol = c.solution
    const killers = sol.killers || (sol.killer ? [sol.killer] : [])
    // either an accident (no culprit) or at least one valid culprit, not both
    expect(sol.accident === true || killers.length > 0).toBe(true)
    for (const k of killers) expect(suspIds.has(k), `culprit ${k}`).toBe(true)
    for (const slot of ['motive', 'means', 'opportunity']) {
      expect(Array.isArray(sol[slot]) && sol[slot].length > 0, `${slot} non-empty`).toBe(true)
      for (const eid of sol[slot]) expect(evIds.has(eid), `${slot} -> ${eid}`).toBe(true)
    }
  })

  it('provides a rebuttal for every non-culprit suspect', () => {
    const killers = c.solution.killers || (c.solution.killer ? [c.solution.killer] : [])
    const reb = c.reveal.rebuttals || {}
    for (const s of c.suspects) if (!killers.includes(s.id)) expect(reb[s.id], `rebuttal ${s.id}`).toBeTruthy()
  })

  it('has reveal sections', () => {
    expect(Array.isArray(c.reveal.sections) && c.reveal.sections.length > 0).toBe(true)
  })

  it('fully localizes in both languages (no unresolved L leaves)', () => {
    expect(countL(localize(c, 'en')), 'en leftovers').toBe(0)
    expect(countL(localize(c, 'id')), 'id leftovers').toBe(0)
  })
})
