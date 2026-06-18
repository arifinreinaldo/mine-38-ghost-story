import { mahameru } from './mahameru'
import { kencana } from './kencana'
import { mutiara } from './mutiara'
import { garut } from './garut'

export const cases = { mahameru, kencana, mutiara, garut }
export const caseList = [mahameru, kencana, mutiara, garut]
export const freeCase = mahameru
export const gatedCases = caseList.filter((c) => !c.free)
export const gatedCase = gatedCases[0] // first locked case (teaser fallback)
export const getCase = (id) => cases[id]
