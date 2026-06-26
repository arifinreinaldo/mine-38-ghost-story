import { describe, it, expect } from 'vitest'
import {
  parseCoords,
  haversineKm,
  normalize,
  matchPlace,
  solveLock,
  mapsUrl,
} from '../src/lib/geo'

describe('parseCoords', () => {
  it('parses "lat, lng"', () => {
    expect(parseCoords('-7.9235, 112.4517')).toEqual({ lat: -7.9235, lng: 112.4517 })
  })
  it('tolerates degree symbols and spaces', () => {
    expect(parseCoords('-7.9235° 112.4517°')).toEqual({ lat: -7.9235, lng: 112.4517 })
  })
  it('returns null for non-coordinates', () => {
    expect(parseCoords('pesarean gunung kawi')).toBeNull()
    expect(parseCoords('')).toBeNull()
    expect(parseCoords(null)).toBeNull()
  })
  it('rejects out-of-range values', () => {
    expect(parseCoords('200, 10')).toBeNull() // lat > 90
    expect(parseCoords('10, 999')).toBeNull() // lng > 180
  })
})

describe('haversineKm', () => {
  it('is zero for identical points', () => {
    expect(haversineKm({ lat: -7.9, lng: 112.4 }, { lat: -7.9, lng: 112.4 })).toBe(0)
  })
  it('approximates ~111 km per degree of latitude', () => {
    const d = haversineKm({ lat: 0, lng: 0 }, { lat: 1, lng: 0 })
    expect(d).toBeGreaterThan(110)
    expect(d).toBeLessThan(112)
  })
})

describe('normalize', () => {
  it('lowercases, strips punctuation and collapses spaces', () => {
    expect(normalize('  Pesarean   Gunung Kawi! ')).toBe('pesarean gunung kawi')
  })
  it('handles empty/nullish', () => {
    expect(normalize('')).toBe('')
    expect(normalize(null)).toBe('')
  })
})

describe('matchPlace', () => {
  const accept = ['pesarean gunung kawi', 'pesarean kawi']
  it('matches case-insensitively', () => {
    expect(matchPlace('PESAREAN GUNUNG KAWI', accept)).toBe(true)
  })
  it('matches when input contains an accepted phrase', () => {
    expect(matchPlace('the pesarean kawi site', accept)).toBe(true)
  })
  it('rejects unrelated input and empties', () => {
    expect(matchPlace('gunung butak', accept)).toBe(false)
    expect(matchPlace('', accept)).toBe(false)
  })
})

describe('solveLock', () => {
  const lock = {
    target: { lat: -7.9235, lng: 112.4517, tolKm: 1.2 },
    accept: ['puncak gunung kawi', 'puncak kawi'],
  }
  it('accepts a coordinate within tolerance', () => {
    expect(solveLock('-7.9235, 112.4517', lock)).toBe(true)
    expect(solveLock('-7.925, 112.453', lock)).toBe(true) // a few hundred metres off
  })
  it('rejects a coordinate outside tolerance', () => {
    expect(solveLock('-8.05, 112.45', lock)).toBe(false) // ~14 km away
  })
  it('accepts a matching place name', () => {
    expect(solveLock('Puncak Kawi', lock)).toBe(true)
  })
  it('rejects wrong text', () => {
    expect(solveLock('gunung butak', lock)).toBe(false)
  })
  it('works for text-only locks (no target)', () => {
    expect(solveLock('makam kawi', { accept: ['makam kawi'] })).toBe(true)
    expect(solveLock('wrong', { accept: ['makam kawi'] })).toBe(false)
  })
})

describe('mapsUrl', () => {
  it('builds a coordinate query', () => {
    expect(mapsUrl('-7.9235, 112.4517')).toBe('https://www.google.com/maps?q=-7.9235%2C112.4517')
  })
  it('builds a place query', () => {
    expect(mapsUrl('Puncak Kawi')).toBe('https://www.google.com/maps?q=Puncak%20Kawi')
  })
})
