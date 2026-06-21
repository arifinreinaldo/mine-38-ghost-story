// Geo helpers for the treasure-hunt stage: parse user-entered coordinates,
// measure distance to a target, and fuzzy-match place names.
export function parseCoords(str) {
  if (!str) return null
  const cleaned = String(str).replace(/[°]/g, ' ')
  const m = cleaned.match(/(-?\d{1,3}(?:\.\d+)?)\s*[,\s]\s*(-?\d{1,3}(?:\.\d+)?)/)
  if (!m) return null
  const lat = parseFloat(m[1])
  const lng = parseFloat(m[2])
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return null
  return { lat, lng }
}

export function haversineKm(a, b) {
  const R = 6371
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(s))
}

export function normalize(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function matchPlace(input, accept = []) {
  const n = normalize(input)
  if (!n) return false
  return accept.some((a) => {
    const na = normalize(a)
    return !!na && (n === na || n.includes(na))
  })
}

// A lock is solved if the input lands within tolerance of the target
// coordinate, OR matches one of the accepted place names.
export function solveLock(input, lock) {
  if (lock.target) {
    const p = parseCoords(input)
    if (p && haversineKm(p, lock.target) <= (lock.target.tolKm || 1)) return true
  }
  return matchPlace(input, lock.accept)
}

export function mapsUrl(input) {
  const p = parseCoords(input)
  const q = p ? `${p.lat},${p.lng}` : String(input || '').trim()
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}`
}
