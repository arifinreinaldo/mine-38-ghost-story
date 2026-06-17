import { mahameru } from './mahameru'
import { kencana } from './kencana'

export const cases = { mahameru, kencana }
export const caseList = [mahameru, kencana]
export const freeCase = mahameru
export const gatedCase = kencana
export const getCase = (id) => cases[id]
