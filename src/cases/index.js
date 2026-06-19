import { mahameru } from './mahameru'
import { kencana } from './kencana'
import { mutiara } from './mutiara'
import { garut } from './garut'
import { anggrek } from './anggrek'
import { tjandi } from './tjandi'

export const cases = { mahameru, kencana, mutiara, garut, anggrek, tjandi }
export const caseList = [mahameru, kencana, mutiara, garut, anggrek, tjandi]
export const freeCase = mahameru
export const gatedCases = caseList.filter((c) => !c.free)
export const gatedCase = gatedCases[0] // first locked case (teaser fallback)
export const getCase = (id) => cases[id]
