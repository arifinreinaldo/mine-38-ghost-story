// Bilingual content helper.
//
// Case data is authored once. Every translatable string is wrapped with
// L('teks Indonesia', 'English text') — a tagged leaf the resolver swaps for
// the chosen language. Structural fields (ids, icons, scene keys, solution
// ids, coordinates, flags, numbers) are left as plain values and pass through
// untouched, so there is no risk of drift between languages.
//
// `localize(case, lang)` is run once at the boundary (App/Cover/NextCase), so
// every component keeps reading `caseData.title` etc. with zero changes. The
// same shape works for Supabase-stored content later.

export const L = (id, en) => ({ __l: true, id, en })

export function localize(value, lang = 'id') {
  if (value == null) return value
  if (Array.isArray(value)) return value.map((v) => localize(v, lang))
  if (typeof value === 'object') {
    if (value.__l === true) return value[lang] ?? value.id
    const out = {}
    for (const k in value) out[k] = localize(value[k], lang)
    return out
  }
  return value
}
