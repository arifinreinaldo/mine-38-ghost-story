// UI chrome strings, by language. Both objects share the same shape; a
// component reads the active language's tree via useUI(). Story content lives
// in the case files (wrapped with L()); this file is only the app shell:
// buttons, labels, hints, and a few templated lines.

const id = {
  common: {
    home: 'Beranda',
    backHome: '← Beranda',
    back: '← Kembali',
  },

  // shared difficulty + proof labels (used as fallbacks across screens)
  difficulty: { Mudah: 'Mudah', Sedang: 'Sedang', Sulit: 'Sulit' },
  proofDefault: { motive: 'Motif', means: 'Cara', opportunity: 'Kesempatan' },

  cover: {
    aria: 'Sampul kasus',
    caseFile: 'Berkas Kasus',
    open: 'Buka Berkas →',
    resume: 'Lanjutkan Investigasi →',
    replay: 'Ulangi kasus',
    signIn: 'Masuk',
    signOut: 'Keluar',
    install: 'Pasang aplikasi',
  },

  next: {
    aria: 'Kasus terkunci',
    eyebrow: 'Arsip Kasus',
    heading: 'Kasus lainnya',
    introUser: 'Akunmu aktif. Pilih kasus untuk membukanya.',
    introGuest:
      'Masuk atau daftar gratis untuk membuka kasus-kasus ini — kamu langsung kembali ke sini setelahnya.',
    introPreview: 'Kasus lanjutan akan terbuka begitu pendaftaran aktif.',
    comingSoon: 'Segera hadir',
    signInToOpen: 'Masuk untuk membuka →',
    resume: 'Lanjutkan →',
    start: 'Mulai Kasus →',
    level: (d) => `Tingkat ${d}`,
    locked: (n) => `${n} kasus terkunci`,
    saved: 'tersimpan',
  },

  briefing: {
    aria: 'Pengarahan',
    eyebrow: 'Pengarahan',
    heading: 'Apa yang kita tahu',
    start: 'Mulai Investigasi →',
    fiction: 'Cerita fiksi. Tokoh, nama, dan kejadian sepenuhnya rekaan.',
  },

  investigation: {
    aria: 'Investigasi',
    segAria: 'Bagian berkas',
    tabs: {
      korban: 'Korban',
      bukti: 'Bukti',
      saksi: 'Saksi & Tersangka',
      linimasa: 'Linimasa',
    },
    victim: 'Korban',
    evidenceHint: 'Bukti — ketuk untuk memeriksa',
    witnesses: 'Saksi & Tersangka',
    timeline: 'Linimasa',
    newBadge: 'Baru',
    motive: 'Motif',
    alibi: 'Alibi',
    interrogation: 'Interogasi',
    suspected: 'Dicurigai',
    mark: 'Tandai mencurigakan',
    marked: '✓ Ditandai mencurigakan',
    unlockNote: 'Bukti baru terbuka — periksa tab “Bukti”.',
    hiddenHint: 'Pertanyaan lain bisa terbuka begitu kau menemukan bukti terkait.',
    meta: (age, role) => `${age} tahun · ${role}`,
    progress: (e, et, i, it) =>
      `Bukti diperiksa: ${e}/${et} · Saksi diinterogasi: ${i}/${it}`,
    accuse: 'Ajukan Tuduhan →',
    gate: 'Periksa semua bukti dan interogasi setiap saksi sebelum menuduh.',
  },

  accuse: {
    aria: 'Tuduhan',
    eyebrow: 'Tuduhan',
    heading: 'Siapa pembunuhnya?',
    lead1: 'Pilih tersangka — ',
    leadStrong: 'bisa lebih dari satu',
    lead2: ' — atau simpulkan bahwa ini bukan pembunuhan. Lalu susun pembuktianmu.',
    accident: 'Bukan pembunuhan — kematian ini sebuah kecelakaan',
    buildEyebrow: 'Susun pembuktian',
    buildLead:
      'Tunjuk satu bukti untuk tiap unsur. Inilah yang membedakan tebakan dari deduksi.',
    pickEvidence: '— pilih bukti —',
    reexamine: '← Periksa lagi',
    lock: 'Kunci Tuduhan',
    gate: 'Lengkapi ketiga unsur pembuktian sebelum mengunci tuduhan.',
    proof: {
      motive: { label: 'Motif', hint: 'Apa yang mendorong mereka?' },
      means: { label: 'Cara', hint: 'Bagaimana ia dilakukan?' },
      opportunity: { label: 'Kesempatan', hint: 'Siapa yang bisa?' },
    },
    treasureEyebrow: 'Bonus · Teka-teki Harta',
    treasureLead1: (robber) =>
      `Konon ${robber} menyembunyikan hartanya di salah satu puncak Putri Tidur. Tebak yang benar untuk membuka `,
    treasureHunt: 'Perburuan Harta',
    treasureLead2: '. (opsional — tak memengaruhi tuduhanmu)',
  },

  reveal: {
    aria: 'Pengungkapan',
    eyebrowRight: 'Pengungkapan · Kasus terpecahkan',
    eyebrowWrong: 'Pengungkapan · Tuduhan salah',
    verdictRight: 'Tepat.',
    verdictWrong: 'Belum tepat.',
    conclLead: 'Kesimpulan Anda: ',
    conclRightTail: ' — dan Anda benar.',
    conclWrongTail: '. Tapi kebenarannya berbeda.',
    whatHappened: 'Inilah yang sebenarnya terjadi.',
    chosenAccident: 'sebuah kecelakaan — bukan pembunuhan',
    chosenNone: '— (tak ada)',
    proofRecap: 'Pembuktianmu',
    shareText: (title, rank) =>
      `Aku menuntaskan "${title}" — peringkat: ${rank}. Berani memecahkan kasusnya?`,
    share: 'Bagikan hasil',
    shareCopied: '✓ Tautan disalin',
    restart: '↺ Ulangi dari awal',
    treasureEyebrow: (robber) => `Teka-teki Harta · ${robber}`,
    peakRightLead: 'Tebakan gunungmu tepat: ',
    badgeFoundNote: 'Harta sang Macan telah kau temukan.',
    viewHuntAgain: '🗺️ Lihat lagi Perburuan Harta',
    openHunt: '🗺️ Buka Perburuan Harta',
    sealed:
      'Petunjuk harta tetap terkubur. Tebak gunung yang tepat saat mengulang kasus untuk membuka Perburuan Harta.',
  },

  treasure: {
    aria: 'Perburuan Harta',
    eyebrow: (robber) => `Perburuan Harta · ${robber}`,
    mapTitle: 'Peta Sang Macan',
    huntTitle: 'Perburuan Harta',
    legendDefault: 'Angka legenda',
    lockedPrev: 'Selesaikan kunci sebelumnya untuk membukanya.',
    placeholderCoord: 'nama tempat atau “-7.9xxx, 112.4xxx”',
    placeholderAnswer: 'tulis jawabanmu',
    maps: 'Lihat di Google Maps ↗',
    unlock: 'Buka Kunci',
    wrong: 'Belum tepat. Periksa lagi peta sang Macan.',
    found: 'Harta ditemukan',
    backReveal: '← Kembali ke pengungkapan',
  },

  auth: {
    aria: 'Masuk',
    eyebrow: 'Akun',
    signin: 'Masuk',
    signup: 'Daftar',
    lead: 'Daftar gratis untuk membuka kasus berikutnya begitu rilis.',
    preview:
      'Mode pratinjau: autentikasi belum dikonfigurasi (atur VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY).',
    email: 'Email',
    password: 'Kata sandi',
    busy: '…',
    magic: 'Kirim tautan masuk (tanpa sandi)',
    noAccount: 'Belum punya akun?',
    haveAccount: 'Sudah punya akun?',
    confirmEmail: 'Cek email untuk konfirmasi akun, lalu masuk.',
    fillEmail: 'Isi email dulu.',
    magicSent: 'Tautan masuk dikirim ke emailmu.',
  },

  pwa: {
    offline: 'Mode luring — progres tetap tersimpan di perangkat.',
  },
}

const en = {
  common: {
    home: 'Home',
    backHome: '← Home',
    back: '← Back',
  },

  difficulty: { Mudah: 'Easy', Sedang: 'Medium', Sulit: 'Hard' },
  proofDefault: { motive: 'Motive', means: 'Means', opportunity: 'Opportunity' },

  cover: {
    aria: 'Case cover',
    caseFile: 'Case File',
    open: 'Open the File →',
    resume: 'Resume Investigation →',
    replay: 'Replay case',
    signIn: 'Sign in',
    signOut: 'Sign out',
    install: 'Install app',
  },

  next: {
    aria: 'Locked cases',
    eyebrow: 'Case Archive',
    heading: 'More cases',
    introUser: 'Your account is active. Pick a case to open it.',
    introGuest:
      'Sign in or register free to unlock these cases — you’ll come right back here afterward.',
    introPreview: 'Further cases unlock once registration is enabled.',
    comingSoon: 'Coming soon',
    signInToOpen: 'Sign in to open →',
    resume: 'Resume →',
    start: 'Start Case →',
    level: (d) => `Level ${d}`,
    locked: (n) => `${n} ${n === 1 ? 'case' : 'cases'} locked`,
    saved: 'saved',
  },

  briefing: {
    aria: 'Briefing',
    eyebrow: 'Briefing',
    heading: 'What we know',
    start: 'Begin Investigation →',
    fiction: 'A work of fiction. Characters, names, and events are entirely invented.',
  },

  investigation: {
    aria: 'Investigation',
    segAria: 'Case sections',
    tabs: {
      korban: 'Victim',
      bukti: 'Evidence',
      saksi: 'Witnesses & Suspects',
      linimasa: 'Timeline',
    },
    victim: 'Victim',
    evidenceHint: 'Evidence — tap to examine',
    witnesses: 'Witnesses & Suspects',
    timeline: 'Timeline',
    newBadge: 'New',
    motive: 'Motive',
    alibi: 'Alibi',
    interrogation: 'Interrogation',
    suspected: 'Suspected',
    mark: 'Mark as suspicious',
    marked: '✓ Marked suspicious',
    unlockNote: 'New evidence unlocked — check the “Evidence” tab.',
    hiddenHint: 'More questions may open once you uncover related evidence.',
    meta: (age, role) => `${age} years old · ${role}`,
    progress: (e, et, i, it) =>
      `Evidence examined: ${e}/${et} · Witnesses questioned: ${i}/${it}`,
    accuse: 'Make an Accusation →',
    gate: 'Examine all evidence and question every witness before you accuse.',
  },

  accuse: {
    aria: 'Accusation',
    eyebrow: 'Accusation',
    heading: 'Who is the killer?',
    lead1: 'Choose a suspect — ',
    leadStrong: 'you can pick more than one',
    lead2: ' — or conclude this was no murder. Then build your case.',
    accident: 'Not a murder — this death was an accident',
    buildEyebrow: 'Build your case',
    buildLead:
      'Pin one piece of evidence to each element. This is what separates a guess from a deduction.',
    pickEvidence: '— choose evidence —',
    reexamine: '← Examine again',
    lock: 'Lock In Accusation',
    gate: 'Complete all three elements of proof before locking in your accusation.',
    proof: {
      motive: { label: 'Motive', hint: 'What drove them?' },
      means: { label: 'Means', hint: 'How was it done?' },
      opportunity: { label: 'Opportunity', hint: 'Who could have?' },
    },
    treasureEyebrow: 'Bonus · Treasure Puzzle',
    treasureLead1: (robber) =>
      `Legend says ${robber} hid the loot on one of the peaks of Putri Tidur. Guess the right one to unlock the `,
    treasureHunt: 'Treasure Hunt',
    treasureLead2: '. (optional — it does not affect your accusation)',
  },

  reveal: {
    aria: 'The reveal',
    eyebrowRight: 'The Reveal · Case solved',
    eyebrowWrong: 'The Reveal · Wrong accusation',
    verdictRight: 'Correct.',
    verdictWrong: 'Not quite.',
    conclLead: 'Your conclusion: ',
    conclRightTail: ' — and you were right.',
    conclWrongTail: '. But the truth is different.',
    whatHappened: 'Here is what really happened.',
    chosenAccident: 'an accident — not a murder',
    chosenNone: '— (none)',
    proofRecap: 'Your case',
    shareText: (title, rank) =>
      `I cracked "${title}" — rank: ${rank}. Think you can solve it?`,
    share: 'Share result',
    shareCopied: '✓ Link copied',
    restart: '↺ Start over',
    treasureEyebrow: (robber) => `Treasure Puzzle · ${robber}`,
    peakRightLead: 'Your mountain guess is right: ',
    badgeFoundNote: 'You have found the Tiger’s treasure.',
    viewHuntAgain: '🗺️ Revisit the Treasure Hunt',
    openHunt: '🗺️ Open the Treasure Hunt',
    sealed:
      'The treasure’s clues stay buried. Guess the right mountain on a replay to unlock the Treasure Hunt.',
  },

  treasure: {
    aria: 'Treasure Hunt',
    eyebrow: (robber) => `Treasure Hunt · ${robber}`,
    mapTitle: 'The Tiger’s Map',
    huntTitle: 'Treasure Hunt',
    legendDefault: 'Legend numbers',
    lockedPrev: 'Solve the previous lock to open this one.',
    placeholderCoord: 'place name or “-7.9xxx, 112.4xxx”',
    placeholderAnswer: 'type your answer',
    maps: 'View on Google Maps ↗',
    unlock: 'Unlock',
    wrong: 'Not quite. Check the Tiger’s map again.',
    found: 'Treasure found',
    backReveal: '← Back to the reveal',
  },

  auth: {
    aria: 'Sign in',
    eyebrow: 'Account',
    signin: 'Sign in',
    signup: 'Register',
    lead: 'Register free to unlock the next cases as they release.',
    preview:
      'Preview mode: authentication is not configured yet (set VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY).',
    email: 'Email',
    password: 'Password',
    busy: '…',
    magic: 'Send a sign-in link (no password)',
    noAccount: 'No account yet?',
    haveAccount: 'Already have an account?',
    confirmEmail: 'Check your email to confirm the account, then sign in.',
    fillEmail: 'Enter your email first.',
    magicSent: 'A sign-in link is on its way to your inbox.',
  },

  pwa: {
    offline: 'Offline mode — your progress stays saved on this device.',
  },
}

export const UI = { id, en }
