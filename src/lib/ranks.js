import { L } from '../i18n/L'

// Detective ranks shared across all cases (best to worst). Labels/notes are
// bilingual; resolve with localize(RANKS[key], lang) at the use site.
export const RANKS = {
  utama: {
    label: L('Detektif Utama', 'Lead Detective'),
    note: L(
      'Pelaku tepat, pembuktian sempurna, dan kau membongkar jebakannya.',
      'Right culprit, flawless proof, and you saw through the misdirection.'
    ),
  },
  inspektur: {
    label: L('Inspektur', 'Inspector'),
    note: L('Pelaku tepat dan pembuktian kuat.', 'Right culprit and solid proof.'),
  },
  muda: {
    label: L('Detektif Muda', 'Junior Detective'),
    note: L(
      'Tuduhanmu benar, tapi rangkaian buktimu belum rapi.',
      'Your accusation was right, but your chain of proof was shaky.'
    ),
  },
  magang: {
    label: L('Masih Magang', 'Still an Intern'),
    note: L(
      'Kau menuduh orang yang salah. Kasus ditutup keliru.',
      'You accused the wrong person. The case closed on a mistake.'
    ),
  },
}

// Awarded for cracking the hidden treasure hunt (a separate achievement
// from the detective rank).
export const TREASURE_BADGE = {
  label: L('Pemburu Harta', 'Treasure Hunter'),
  note: L(
    'Kau memecahkan sandi, melacak peta, dan menemukan harta Si Macan Kawi.',
    'You broke the cipher, followed the map, and found the Macan Kawi treasure.'
  ),
}
