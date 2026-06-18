import { mahameru } from './mahameru'
import { kencana } from './kencana'
import { mutiara } from './mutiara'

export const cases = { mahameru, kencana, mutiara }
export const caseList = [mahameru, kencana, mutiara]
export const freeCase = mahameru
export const gatedCases = caseList.filter((c) => !c.free)
export const gatedCase = gatedCases[0] // first locked case (teaser fallback)
export const getCase = (id) => cases[id]
