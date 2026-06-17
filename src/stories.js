// Catalog of cases. The free sample is bundled; gated cases live behind
// registration (and later, a paywall) — their content is fetched from Supabase.
export const stories = [
  {
    id: 'mahameru',
    title: 'Maut di Mahameru',
    blurb: 'Subuh di puncak Semeru, seorang pendaki ditemukan tewas. Kecelakaan atau pembunuhan?',
    free: true,
  },
  {
    id: 'next',
    title: 'Kasus Berikutnya',
    blurb: 'Sebuah berkas baru sedang disiapkan. Daftar untuk membukanya lebih dulu.',
    free: false,
    comingSoon: true,
  },
]

export const nextStory = stories.find((s) => !s.free)
