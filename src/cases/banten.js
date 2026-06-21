// Case 10 (gated). Language-gated mystery: the decisive clues are written in
// Dutch. A reader who knows Dutch can solve it almost at a glance (the clue
// SUMMARIES are in Dutch); a reader who doesn't must work through each one via
// the Indonesian gloss in the details — and one clue explicitly tells them to.
// Set in the early Dutch trading era at Banten (~1605), pepper trade, VOC vs.
// English. Single killer; the foreign-language barrier is the difficulty.
export const banten = {
  id: 'banten',
  free: false,
  difficulty: 'Sulit',
  code: 'BTN-1605',
  location: 'Loji dagang Belanda · Banten, sekitar 1605',
  scene: 'kolonial',
  title: 'Maut di Gudang Lada',
  blurb:
    'Di loji dagang Belanda yang baru berdiri di Banten, sang juru buku ditemukan tewas di antara karung lada. Bukti-bukti penentu ditulis dalam bahasa Belanda — dan pembunuhnya mengira tak seorang pun akan membacanya.',
  disclaimer: {
    text:
      'Kisah ini fiksi, berlatar awal kedatangan pedagang Belanda di Nusantara — masa loji dagang dan perniagaan lada di Banten sekitar awal 1600-an, ketika VOC baru berdiri (1602) dan bersaing dengan Inggris. Seluruh tokoh, nama, dan peristiwa rekaan belaka; kemiripan dengan orang atau peristiwa nyata tidak disengaja. Kutipan bahasa Belanda sengaja dibiarkan tanpa terjemahan langsung pada ringkasannya — itulah bagian dari teka-tekinya.',
    source: {
      label: 'Latar sejarah: “Dutch East India Company (VOC)” (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Dutch_East_India_Company',
    },
  },
  cover: {
    lead:
      'Banten, awal 1600-an. Kapal-kapal Belanda baru berlabuh memburu lada. Di gudang loji yang pengap, juru buku Kompeni terbujur kaku di antara karung-karung lada — dan semua jawabannya tertulis dalam bahasa yang hampir tak seorang pun di pelabuhan ini bisa baca.',
  },
  briefing: {
    paras: [
      'Banten, sekitar tahun 1605. Pedagang-pedagang Belanda baru saja datang memburu lada, mendirikan loji — pos dagang berbenteng — di tepi pelabuhan yang ramai, bersaing ketat dengan orang Inggris. Di dalamnya, Kompeni (VOC) menimbang, mencatat, dan menggudangkan lada dalam karung demi karung.',
      'Pagi ini, Joost van Aken — boekhouder, juru buku loji — ditemukan tewas di antara karung lada di dalam gudang (pakhuis). Tak ada tanda perampokan. Yang tertinggal justru tumpukan kertas: buku besar, surat-surat, dan secarik catatan terakhir — hampir semuanya dalam bahasa Belanda.',
      'Para tuan Belanda hendak buru-buru menyebutnya ulah pencuri pribumi. Tapi van Aken seorang pencatat; ia meninggalkan kata-kata. Periksa setiap bukti, interogasi keenam orang di sekitarnya — dan pahami betul apa yang tertulis dalam bahasa Belanda itu. Di sanalah pembunuhnya bersembunyi.',
    ],
    taskTitle: 'Tugas Anda',
    task:
      'Periksa tiap bukti, interogasi keenam orang. Bila Anda paham bahasa Belanda, jawabannya hampir terang-benderang; bila tidak, baca tiap kutipan satu per satu lewat keterangannya. Lalu tunjuk pembunuhnya dan susun pembuktianmu.',
  },
  victim: {
    init: 'JA',
    name: 'Joost van Aken',
    meta: '37 tahun · boekhouder (juru buku loji VOC)',
    paras: [
      'Juru buku Kompeni: ia menimbang, menghitung, dan mencatat tiap karung lada yang masuk dan keluar gudang. Teliti sampai menjengkelkan, dan tak mau berkompromi dengan angka yang tak cocok.',
      'Ditemukan pada fajar, terbujur di antara karung lada di dalam gudang, wajah membiru dan berbusa. Di dekatnya: dua cawan jenever dan setumpuk kertas berbahasa Belanda. Para tuan loji bergegas menyebutnya perbuatan pencuri — tapi tak ada satu karung pun yang hilang malam itu.',
    ],
  },
  evidence: [
    {
      id: 'mayat', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Jasad van Aken',
      summary: 'Wajah membiru, mulut berbusa — tanda diracun, bukan dirampok.',
      detail:
        'Bibir membiru, busa di mulut, kejang sebelum mati: gejala keracunan, bukan luka senjata atau jejak perkelahian. Tak ada barang hilang, tak ada karung lenyap. Ini bukan perampokan yang berakhir maut — ini pembunuhan yang dirancang tenang, lewat racun.',
    },
    {
      id: 'beker', icon: 'cup', tag: 'Barang Bukti',
      title: 'Dua cawan jenever',
      summary: 'Dua cawan di gudang; satu diseka bersih sampai tak bersisa.',
      detail:
        'Dua cawan timah berisi jenever di lantai gudang. Cawan van Aken penuh sisa minuman beracun; cawan satunya diseka bersih sampai kering — tak meninggalkan ampas, tak meninggalkan jejak. Van Aken minum berdua dengan seseorang malam itu, dan orang itu membersihkan bekas dirinya sendiri.',
    },
    {
      id: 'gif', icon: 'evidence', tag: 'Temuan Tersembunyi',
      title: 'Botol rattenkruit',
      summary: '‘Rattenkruit’ — botol arsenik, tersembunyi di peti sang opperkoopman.',
      detail:
        'Sebotol kecil bertuliskan “rattenkruit” — dalam bahasa Belanda, arsenik, racun tikus — ditemukan terselip di dasar peti pribadi Hendrick Janszoon, sang opperkoopman. Isinya cocok dengan racun pada cawan dan tubuh van Aken. Racun gudang yang lazim, di tangan yang tak lazim.',
    },
    {
      id: 'briefje', icon: 'doc', tag: 'Dokumen · Belanda',
      title: 'Secarik pesan undangan',
      summary: '“Kom vanavond alleen naar het pakhuis. — H.”',
      detail:
        'Secarik pesan dalam bahasa Belanda di saku van Aken: “Van Aken — kom vanavond alleen naar het pakhuis. Wij moeten de boeken bespreken. — H.” Artinya: “Van Aken — datanglah malam ini sendirian ke gudang. Kita harus membahas pembukuan. — H.” Sebuah pancingan ke gudang, larut malam, seorang diri — ditandatangani “H”.',
    },
    {
      id: 'grootboek', icon: 'ledger', tag: 'Dokumen · Belanda',
      title: 'Buku besar (grootboek)',
      summary: '“1200 zakken ontvangen, 900 verscheept, 300 vermist.”',
      detail:
        'Buku besar Kompeni, dalam bahasa Belanda: “Peper: 1200 zakken ontvangen, 900 verscheept, 300 vermist.” Artinya: “Lada: 1200 karung diterima, 900 dikapalkan, 300 hilang.” Tiga ratus karung lada raib dari pembukuan — bukan dicuri massal, melainkan menguap dari catatan. Seseorang merapikan selisihnya.',
    },
    {
      id: 'weegschaal', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Timbangan yang dicurangi',
      summary: 'Timbangan gudang menyembunyikan pemberat — tiap penimbangan meleset.',
      detail:
        'Timbangan besar di gudang menyimpan pemberat tersembunyi di bawah piringnya. Tiap karung lada tampak lebih ringan dari sebenarnya, hingga selisihnya bisa “dihilangkan” dari catatan tanpa ada karung yang benar-benar lenyap dari rak. Pemegang kunci timbangan inilah yang menikmati selisihnya.',
    },
    {
      id: 'dagboek', icon: 'doc', tag: 'Dokumen · Belanda',
      title: 'Buku harian rahasia (dagboek)',
      summary: '“De opperkoopman laat de weegschaal vervalsen…”',
      locked: true, twist: true,
      detail:
        'Buku harian pribadi van Aken, disembunyikan di balik papan lantai kantornya, ditulis dalam bahasa Belanda: “De opperkoopman laat de weegschaal vervalsen en verkoopt de vermiste peper in het geheim aan de Engelsen. Merkt hij dat ik dit weet, dan ben ik een dood man.” Artinya: “Sang opperkoopman (kepala pedagang) memalsukan timbangan dan menjual lada yang hilang itu diam-diam kepada orang Inggris. Bila ia tahu aku mengetahuinya, matilah aku.” Bukan onderkoopman, bukan nakhoda — opperkoopman.',
    },
    {
      id: 'engelsen', icon: 'doc', tag: 'Dokumen · Belanda',
      title: 'Surat kepada orang Inggris',
      summary: '“Betaal in zilver, buiten de boeken om. — H.J.”',
      detail:
        'Sobekan surat berbahasa Belanda yang ditujukan ke loji Inggris: “Aan de Engelse heren: de partij peper ligt klaar. Betaal in zilver, buiten de boeken om. — H.J.” Artinya: “Kepada tuan-tuan Inggris: partai lada sudah siap. Bayar dengan perak, di luar pembukuan. — H.J.” Inisial penanda tangan: H.J. — Hendrick Janszoon.',
    },
    {
      id: 'woorden', icon: 'doc', tag: 'Pesan Terakhir · Belanda',
      title: 'Catatan terakhir van Aken',
      summary: '“De waarheid staat in mijn woorden. Lees het Nederlands.”',
      detail:
        'Tergenggam di tangan van Aken, secarik pesan: “De waarheid staat in mijn woorden. Lees het Nederlands.” Artinya: “Kebenaran ada pada kata-kataku. Bacalah bahasa Belandanya.” Ini petunjuk untukmu, sang penyidik: jangan lewatkan satu pun kutipan Belanda di berkas ini. Pahami artinya satu per satu — pembunuhnya menyebut dirinya sendiri di sana, mengira tak ada yang bisa membacanya.',
    },
    {
      id: 'wachtlog', icon: 'metadata', tag: 'Dokumen · Belanda',
      title: 'Catatan jaga gerbang (wachtlog)',
      summary: '“Opperkoopman H.J. — uit om 9 uur, naar het pakhuis.”',
      detail:
        'Catatan jaga gerbang loji, dalam bahasa Belanda: “Opperkoopman H.J. — uit om 9 uur in de avond, naar het pakhuis. Pas na middernacht terug.” Artinya: “Kepala pedagang H.J. — keluar pukul 9 malam menuju gudang. Baru kembali lewat tengah malam.” Padahal ia bersumpah berada di biliknya sepanjang malam.',
    },
    {
      id: 'kris', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Keris Ki Wirasaba',
      summary: 'Keris saudagar lada lokal, ditemukan dekat gudang — tampak memberatkan.',
      herring: true,
      detail:
        'Sebilah keris milik Ki Wirasaba, saudagar lada Banten, tergeletak tak jauh dari gudang — seakan menuding sang pemasok yang sering bersitegang dengan van Aken. Tapi bilahnya bersih tanpa darah, dan van Aken mati diracun, bukan ditikam. Keris itu tertinggal saat pengantaran lada siang harinya. Petunjuk yang menyesatkan.',
    },
  ],
  suspects: [
    {
      id: 'hendrick', init: 'HJ', name: 'Hendrick Janszoon', age: 44,
      role: 'Opperkoopman (kepala pedagang loji VOC)',
      statement:
        '“Aku kepala pedagang di sini, bukan tukang racun. Van Aken juru bukuku — kematiannya kerugian bagi Kompeni. Pasti ulah pencuri pribumi yang menyelinap ke gudang.”',
      motive: 'Memalsukan timbangan dan menjual lada Kompeni diam-diam ke Inggris; van Aken nyaris membongkarnya.',
      alibi: 'Mengaku di biliknya semalaman — dibantah catatan jaga gerbang.',
      interrogation: [
        { q: 'Apa hubungan Anda dengan van Aken?', a: 'Ia juru bukuku, itu saja. Hubungan kerja biasa. Aku tak sempat mengurus tiap angka — untuk itulah ada juru buku.' },
        { q: 'Buku besar mencatat 300 karung lada hilang. Ke mana?', a: 'Penyusutan. Lembap, tikus, kuli yang menggerogoti. Lada menguap, Tuan. Jangan mencari kejahatan di tempat yang hanya ada kelalaian.', requires: 'grootboek' },
        { q: 'Catatan jaga menyebut Anda keluar ke gudang pukul sembilan.', a: 'Itu... aku sekadar memeriksa muatan sebentar. Penjaga pasti salah catat jamnya. Aku kembali tidur, dan tahu kabar ini pagi tadi seperti yang lain.', requires: 'wachtlog' },
      ],
    },
    {
      id: 'sastra', init: 'ST', name: 'Sastra', age: 29,
      role: 'Juru bahasa (penerjemah Melayu–Belanda)',
      statement:
        '“Tuan van Aken mempercayaiku menerjemahkan, tapi rahasianya ia simpan dalam tulisan Belandanya sendiri. Ia berpesan: jangan percaya lidah, percayalah pada kata-katanya.”',
      motive: 'Mengenal bahasa Belanda dan rahasia loji — tapi setia pada van Aken.',
      alibi: 'Menerjemahkan surat di rumah syahbandar hingga larut, di depan banyak saksi.',
      interrogation: [
        { q: 'Kau paham tulisan Belanda Tuan van Aken?', a: 'Cukup paham. Dan Tuan van Aken berpesan keras: “kebenaran ada pada kata-kataku dalam bahasa Belanda — pahami sendiri.” Ia tak percaya lidah penerjemah, hanya tintanya. Bacalah tiap tulisan Belanda di berkas itu, Tuan; di sanalah pelakunya menyebut dirinya.' },
        { q: 'Apakah van Aken menyimpan catatan rahasia?', a: 'Ya. Sebuah dagboek — buku harian — yang ia sembunyikan di balik papan lantai kantornya, terpisah dari buku Kompeni. Ia ketakutan pada seseorang berpangkat. Akan kutunjukkan tempatnya.', unlocks: 'dagboek' },
        { q: 'Di mana kau malam itu?', a: 'Di rumah syahbandar, menerjemahkan surat-surat dagang sampai dini hari, ditemani banyak orang. Aku baru mendengar kabar duka itu saat fajar.' },
      ],
    },
    {
      id: 'maerten', init: 'MV', name: 'Maerten de Vries', age: 31,
      role: 'Onderkoopman (pedagang muda)',
      statement:
        '“Aku berselisih dengan van Aken soal angka, ya. Tapi aku onderkoopman — pedagang muda. Yang memegang kunci timbangan dan gudang besar bukanlah aku.”',
      motive: 'Ambisius; bisa naik pangkat bila atasannya jatuh.',
      alibi: 'Di kapal mencatat muatan bersama nakhoda hingga dini hari.',
      interrogation: [
        { q: 'Anda berselisih dengan van Aken?', a: 'Soal angka, sering. Ia kaku pada pembukuan. Tapi adu mulut dagang bukanlah racun di cawan.' },
        { q: 'Anda diuntungkan bila atasan jatuh?', a: 'Mungkin aku naik pangkat. Tapi camkan: aku onderkoopman, bukan opperkoopman. Timbangan dan kunci gudang besar ada di tangan atasanku, bukan tanganku.' },
        { q: 'Di mana Anda malam itu?', a: 'Di kapal, mencatat muatan bersama Nakhoda Pieter sampai dini hari. Tanyakan padanya.' },
      ],
    },
    {
      id: 'pieter', init: 'PS', name: 'Pieter Schenck', age: 38,
      role: 'Schipper (nakhoda kapal)',
      statement:
        '“Aku mengangkut lada sesuai surat jalan. Apa yang ditimbang dan dicatat di darat, itu urusan orang darat, bukan urusanku di laut.”',
      motive: 'Mengangkut lada; bisa saja terlibat penyelundupan.',
      alibi: 'Di kapal bersama de Vries sepanjang malam.',
      interrogation: [
        { q: 'Anda yang mengangkut lada itu?', a: 'Ke kapal, sesuai daftar muat yang diserahkan padaku. Yang menentukan berat dan jumlah adalah timbangan darat, bukan geladakku.' },
        { q: 'Jika 300 karung hilang, bukankah lewat kapal Anda?', a: 'Aku memuat persis sesuai surat jalan dari loji. Kalau selisihnya muncul, itu lahir di timbangan darat — sebelum sampai ke tanganku.', requires: 'grootboek' },
        { q: 'Di mana Anda malam itu?', a: 'Di kapal bersama de Vries, mencatat muatan. Kami tak turun ke darat sampai pagi.' },
      ],
    },
    {
      id: 'wirasaba', init: 'KW', name: 'Ki Wirasaba', age: 50,
      role: 'Saudagar lada Banten (pemasok loji)',
      statement:
        '“Juru buku itu menuduh timbanganku curang, padahal timbangan merekalah yang ganjil. Aku marah, ya — tapi aku tak meracuni siapa pun, dan aku tak bisa baca coretan Belanda mereka.”',
      motive: 'Bersitegang dengan van Aken soal penimbangan; merasa dipersalahkan atas selisih lada.',
      alibi: 'Di kampungnya bersama keluarga; tak bisa membaca bahasa Belanda.',
      interrogation: [
        { q: 'Anda memasok lada ke loji ini?', a: 'Bertahun-tahun. Lalu juru buku itu menuduh timbanganku curang di depan umum. Aku tersinggung, tapi tersinggung tak sama dengan membunuh.' },
        { q: 'Keris Anda ditemukan dekat gudang.', a: 'Tertinggal saat aku mengantar lada siang harinya. Lihat, bilahnya bersih. Lagipula kudengar van Aken diracun, bukan ditikam. Keris tak menuang racun ke cawan.', requires: 'kris' },
        { q: 'Anda bisa membaca tulisan Belanda mereka?', a: 'Tidak sepatah pun. Bagiku coretan itu cuma cakar ayam. Kalau rahasia mereka tersimpan di situ, akulah orang terakhir yang bisa mengetahuinya.' },
      ],
    },
    {
      id: 'inten', init: 'IN', name: 'Inten', age: 22,
      role: 'Pelayan loji (penyaji minuman)',
      statement:
        '“Aku hanya menuang dan mengantar minuman. Malam itu Tuan Hendrick menyuruhku menyiapkan dua cawan jenever untuk dibawa ke gudang, lalu melarangku ikut masuk.”',
      motive: 'Tak punya alasan; sekadar penyaji minuman yang menyentuh cawan.',
      alibi: 'Disuruh kembali ke dapur dan dilarang mendekati gudang.',
      interrogation: [
        { q: 'Kau yang menyajikan minuman di loji?', a: 'Ya, Tuan. Aku menuang jenever untuk para tuan Belanda. Malam itu Tuan Hendrick memintaku menyiapkan dua cawan untuk dibawa ke gudang — katanya ia menerima tamu.' },
        { q: 'Dua cawan ditemukan di gudang, satu diseka bersih.', a: 'Aku hanya menuang dan meletakkannya. Tuan Hendrick sendiri yang membawanya masuk ke gudang dan melarangku ikut. Apa yang terjadi di dalam, aku tak tahu.', requires: 'beker' },
        { q: 'Lalu kau ke mana?', a: 'Disuruh kembali ke dapur dan tidur. Aku tak diizinkan mendekat gudang malam itu, jadi tak kulihat siapa pun keluar-masuk.' },
      ],
    },
  ],
  timeline: [
    { t: 'Berbulan ini', key: false, x: 'Hendrick memalsukan timbangan gudang dan menjual lada Kompeni yang “hilang” diam-diam kepada orang Inggris.' },
    { t: 'Siang itu', key: false, x: 'Van Aken merampungkan hitungan: 300 karung lada hilang dari catatan. Ia menuliskan kebenarannya dalam dagboek berbahasa Belanda.' },
    { t: 'Pukul 9 malam', key: true, x: 'Hendrick memancing van Aken ke gudang lewat secarik pesan Belanda, dan menyuruh Inten menyiapkan dua cawan jenever.' },
    { t: 'Tengah malam', key: true, x: 'Di gudang, Hendrick membubuhkan rattenkruit (arsenik) ke cawan van Aken, lalu menyeka bersih cawannya sendiri.' },
    { t: 'Fajar', key: false, x: 'Jasad van Aken ditemukan di antara karung lada; para tuan loji bergegas menyebutnya ulah pencuri.' },
  ],
  solution: {
    killer: 'hendrick',
    proofLabels: {
      motive: { label: 'Motif', hint: 'Rahasia apa yang van Aken ancam bongkar?' },
      means: { label: 'Cara', hint: 'Bagaimana van Aken dibungkam?' },
      opportunity: { label: 'Kesempatan', hint: 'Siapa yang memikatnya ke gudang malam itu?' },
    },
    motive: ['grootboek', 'weegschaal', 'dagboek', 'engelsen'],
    means: ['beker', 'mayat', 'gif'],
    opportunity: ['briefje', 'wachtlog'],
  },
  reveal: {
    sections: [
      { h: 'Bahasa yang membongkar', p: [
        'Pembunuhnya bertaruh pada satu hal: bahwa di pelabuhan ini hampir tak ada yang bisa membaca bahasa Belanda. Maka ia leluasa menuliskan kejahatannya — dan menyebut dirinya sendiri — di atas kertas.',
        'Tapi van Aken seorang pencatat. Pesan terakhirnya jelas: “De waarheid staat in mijn woorden. Lees het Nederlands.” — Kebenaran ada pada kata-kataku; bacalah bahasa Belandanya. Siapa pun yang menerjemahkan kertas-kertas itu akan menemukan pelakunya tanpa ragu.',
      ] },
      { h: 'Apa yang dikatakan kata-kata Belanda itu', p: [
        'Buku besar: 300 karung lada “vermist” — hilang dari catatan, bukan dari rak; selisih yang lahir di timbangan yang dicurangi. Buku harian rahasia menyebut pelakunya terang-terangan: “de opperkoopman” memalsukan timbangan dan menjual lada gelap kepada orang Inggris — bukan onderkoopman, bukan nakhoda. Surat ke loji Inggris ditandatangani “H.J.”. Pesan pancingan ke gudang ditandatangani “H”. Dan catatan jaga gerbang mencatat “opperkoopman H.J.” keluar ke gudang pukul sembilan malam.',
        'Setiap kutipan menunjuk satu orang yang sama: Hendrick Janszoon, sang opperkoopman.',
      ] },
      { h: 'Malam di gudang', p: [
        'Van Aken menemukan selisih 300 karung dan menuliskan kebenarannya. Sebelum ia sempat membongkarnya, Hendrick memancingnya ke gudang lewat pesan Belanda, menyuruh Inten menyiapkan dua cawan jenever, lalu melarang siapa pun ikut masuk. Di antara karung lada, ia membubuhkan rattenkruit — arsenik dari petinya sendiri — ke cawan van Aken, dan menyeka bersih cawannya sendiri agar tak meninggalkan jejak. Catatan jaga gerbang membongkar jam-jamnya; botol racun di petinya membongkar tangannya.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'De Vries memang ambisius — tapi ia onderkoopman, bukan opper-; tulisan Belanda itu menyebut pangkat yang lebih tinggi, dan malam itu ia di kapal. Pieter mengangkut lada tapi tak memegang timbangan darat tempat selisih dilahirkan. Ki Wirasaba bersitegang dengan van Aken dan kerisnya tergeletak dekat gudang — tapi van Aken diracun bukan ditikam, dan ia bahkan tak bisa membaca rahasia yang tersimpan dalam bahasa Belanda. Inten menyentuh cawan, tapi atas perintah Hendrick, yang lalu melarangnya masuk dan menyeka cawannya sendiri. Sastra sang juru bahasa justru orang yang menuntunmu kepada kebenaran. Hanya satu nama yang ditulis berulang dalam bahasa Belanda itu: Hendrick Janszoon, opperkoopman.',
      ] },
    ],
    rebuttals: {
      sastra: 'Sastra paham bahasa Belanda dan tahu banyak rahasia loji — tapi justru ialah yang menuntunmu ke buku harian van Aken dan menyuruhmu membaca kata-katanya. Malam itu ia menerjemahkan surat di rumah syahbandar di depan banyak saksi.',
      maerten: 'Maerten de Vries ambisius dan bisa naik pangkat bila atasan jatuh — tapi tulisan Belanda menyebut “opperkoopman”, bukan “onderkoopman”, dan malam itu ia mencatat muatan di kapal bersama nakhoda.',
      pieter: 'Pieter Schenck mengangkut lada dan bisa saja menyelundupkan — tapi selisih 300 karung lahir di timbangan darat yang dicurangi, bukan di geladaknya; malam itu ia di kapal bersama de Vries.',
      wirasaba: 'Ki Wirasaba bersitegang dengan van Aken dan kerisnya ada di dekat gudang — tapi keris itu bersih dan tertinggal sejak siang, sedang van Aken mati diracun. Ia pun tak bisa membaca sepatah pun bahasa Belanda tempat rahasia itu tersimpan.',
      inten: 'Inten menyiapkan dan menyentuh cawan — tapi atas perintah Hendrick, yang membawanya sendiri ke gudang, melarang Inten masuk, lalu menyeka cawannya sendiri. Ia penyaji, bukan peracun.',
    },
  },
}
