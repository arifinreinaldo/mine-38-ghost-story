// Case 6 (gated). Multi-killer mystery (Orient Express device) set on a
// Dutch colonial plantation in the Hindia Belanda, 1926. The culprits are
// FOUR people who conspired; the accusation must name the exact set.
export const tjandi = {
  id: 'tjandi',
  free: false,
  difficulty: 'Sulit',
  code: 'TS-1926',
  location: 'Onderneming Tjandi Saka, Priangan',
  scene: 'highland',
  title: 'Maut di Tjandi Saka',
  blurb:
    'Seorang administratur perkebunan yang kejam ditemukan tewas saat banjir mengurung onderneming. Lukanya datang dari banyak tangan.',
  disclaimer: {
    text: 'Kisah ini fiksi, berlatar Hindia Belanda era kolonial. Terinspirasi kekejaman sistem perkebunan kolonial (kerja paksa & poenale sanctie) dan pola "pembunuhan beramai-ramai" ala Agatha Christie. Seluruh tokoh, nama, dan kejadian rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
    source: {
      label: 'Terinspirasi: "Murder on the Orient Express" — Agatha Christie',
      url: 'https://en.wikipedia.org/wiki/Murder_on_the_Orient_Express',
    },
  },
  cover: {
    lead: 'Di sebuah perkebunan terpencil tahun 1926, sang tuan kebun yang ditakuti mati di malam banjir. Hukum kolonial pernah membebaskannya. Malam ini, ada hukum lain yang menemuinya.',
  },
  briefing: {
    paras: [
      'Tahun 1926, di Onderneming Tjandi Saka, sebuah perkebunan di pegunungan Priangan. Administratur-nya, Tuan Dirk Voss, terkenal kejam: cambuk dan poenale sanctie ia jatuhkan sesuka hati pada para kuli kontrak.',
      'Pada malam musim hujan, banjir memutus jembatan satu-satunya — onderneming terkurung hingga subuh. Pagi harinya, Voss ditemukan tewas di ruang kerjanya. Mula-mula diduga perampok; pintu memang berantakan seperti digeledah.',
      'Tapi tak ada perahu, tak ada jembatan, tak ada jejak dari luar. Kepada Anda diserahkan berkas ini sebelum kasus ditutup tergesa-gesa — di rumah yang terkunci oleh banjir, kebenaran tak punya tempat lari.',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi keenam penghuni onderneming. Lalu susun pembuktian dan ajukan tuduhan — ingat, pelaku belum tentu seorang diri.',
  },
  victim: {
    init: 'DV',
    name: 'Tuan Dirk Voss',
    meta: '54 tahun · administratur Onderneming Tjandi Saka',
    paras: [
      'Tuan kebun yang membangun keuntungan di atas punggung para kuli. Cambuknya melegenda; pengadilan kolonial — landraad — pernah membebaskannya dari kematian beberapa kuli yang ia hukum.',
      'Ditemukan tewas di ruang kerjanya pada subuh setelah banjir. Beberapa luka di tubuhnya, ruang kerja terkunci dari dalam, dan tak ada satu pun jejak orang luar di lumpur halaman.',
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Pola luka di tubuh Voss',
      summary: 'Beberapa senjata, beberapa ketinggian — beberapa tangan.',
      detail:
        'Luka di tubuh Voss tak berasal dari satu senjata: ada bekas parang, bilah tipis, dan benda tumpul berat — dengan sudut dan ketinggian yang berbeda-beda. Tak mungkin satu orang menorehkan semuanya. Ini bukan ulah seorang pembunuh, melainkan beberapa tangan sekaligus.',
    },
    {
      id: 'jamu', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Obat tidur di jamu malam',
      summary: 'Voss dibius lebih dulu sebelum diserang.',
      detail:
        'Sisa jamu malam Voss mengandung obat tidur dosis tinggi. Ia dilumpuhkan dulu agar tak melawan — sebuah rencana, bukan perkelahian. Jamu dan kopi malamnya selalu diantar oleh satu pelayan: Inem.',
    },
    {
      id: 'putusan', icon: 'doc', tag: 'Dokumen',
      title: 'Putusan landraad',
      summary: 'Voss dibebaskan atas kematian beberapa kuli yang ia cambuk.',
      detail:
        'Salinan putusan landraad: Voss dibebaskan dari tuduhan atas kematian beberapa kuli yang dicambuknya — disebut "pendisiplinan yang sah". Di antara yang mati: putra Mandor Karto dan saudari pembuku Wim. Bagi keluarga mereka, hukum kolonial sudah menutup pintu keadilan.',
    },
    {
      id: 'banjir', icon: 'metadata', tag: 'Rekonstruksi',
      title: 'Jembatan putus oleh banjir',
      summary: 'Tak ada yang masuk/keluar onderneming sejak senja.',
      detail:
        'Catatan mandor air: jembatan satu-satunya putus diterjang banjir pada senja, dan baru bisa dilintasi subuh. Sepanjang malam, tak seorang pun bisa masuk atau keluar. Siapa pun pelakunya, ia bermalam di dalam onderneming ini.',
    },
    {
      id: 'parang', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Luka parang & parang mandor',
      summary: 'Satu luka cocok dengan parang kerja Mandor Karto.',
      detail:
        'Salah satu luka cocok dengan mata parang lebar — jenis yang dipakai para mandor. Parang kerja Mandor Karto ditemukan baru saja dicuci, padahal malam itu tak ada pekerjaan kebun karena banjir.',
    },
    {
      id: 'gembok', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Ruang kerja terkunci dari dalam',
      summary: 'Ditata seperti perampokan — padahal tak ada jalan masuk.',
      herring: true,
      detail:
        'Ruang kerja diacak-acak seolah dirampok, tapi pintunya terkunci dari dalam dan jendelanya tergerendel. Tak ada jejak di lumpur halaman. "Perampokan" itu panggung. Hanya pemegang kunci cadangan yang bisa mengunci ruang itu kembali dari dalam lalu keluar — sang pembuku, Wim de Vries.',
    },
    {
      id: 'catatan', icon: 'ledger', tag: 'Dokumen',
      title: 'Logbuku yang diubah',
      summary: 'Jam "istirahat" Voss diubah untuk mengaburkan waktu.',
      detail:
        'Logbuku rumah tangga menunjukkan jam Voss "pamit tidur" telah ditimpa tulisan baru — oleh tangan pembuku, Wim. Sebuah usaha mengaburkan kapan sebenarnya Voss diserang.',
    },
    {
      id: 'jembatan', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Pieter terjebak di seberang',
      summary: 'Pieter Bakker terkurung di onderneming sebelah.',
      detail:
        'Asisten muda Pieter Bakker tengah berada di onderneming sebelah ketika jembatan putus. Catatan tetangga dan kusirnya memastikan ia baru menyeberang subuh — saat semuanya sudah terjadi.',
    },
    {
      id: 'barak', icon: 'doc', tag: 'Kesaksian',
      title: 'Said dikurung di barak',
      summary: 'Said & para kuli dijaga centeng sepanjang malam.',
      detail:
        'Siang itu Said, pemimpin kuli kontrak, mengancam Voss di depan umum. Justru karena itu Voss memerintahkan Said dan kuli lain dikurung di barak di bawah penjagaan centeng sepanjang malam. Sang penjaga bersaksi tak seorang pun keluar.',
    },
    {
      id: 'sumpah', icon: 'photo', tag: 'Temuan Tersembunyi',
      title: 'Janji yang disembunyikan',
      summary: 'Sehelai kain bersumpah darah — empat nama terikat.',
      locked: true, twist: true,
      detail:
        'Tersembunyi di bilik Nyai Sari: sehelai kain dengan empat cap jempol darah dan sebuah sumpah — janji mereka yang kehilangan untuk menuntaskan apa yang ditolak pengadilan. Empat yang terikat: Mandor Karto, Inem, Wim de Vries, dan Nyai Sari sendiri. Bukan satu pembunuh — sebuah persekongkolan.',
    },
  ],
  suspects: [
    {
      id: 'karto', init: 'MK', name: 'Mandor Karto', age: 51,
      role: 'Mandor (kepala kerja) kebun',
      statement: '“Anak saya mati di tiang cambuk itu. Pengadilan menyebutnya disiplin. Saya menyebutnya pembunuhan.”',
      motive: 'Putranya tewas dicambuk Voss; landraad membebaskan sang tuan.',
      alibi: 'Terkurung di dalam onderneming oleh banjir, seperti yang lain.',
      interrogation: [
        { q: 'Apa yang terjadi pada putramu?', a: 'Dicambuk sampai mati di tiang itu, dituduh mencuri segenggam biji kopi. Tuan tertawa. Pengadilan menyebutnya "pendisiplinan".' },
        { q: 'Di mana kau malam itu?', a: 'Banjir mengurung kami semua di dalam. Tak ada yang bisa keluar — termasuk aku.' },
        { q: 'Parangmu baru dicuci. Untuk apa?', a: 'Banyak mandor punya parang seperti itu... Saya tak akan bicara lagi sendirian. Tidak tanpa yang lain.', requires: 'parang' },
      ],
    },
    {
      id: 'inem', init: 'IN', name: 'Inem', age: 19,
      role: 'Pelayan rumah administratur',
      statement: '“Saya yang mengantar minumannya tiap malam. Malam itu pun begitu — hanya saja saya tak berani menatap matanya.”',
      motive: 'Berulang kali dilecehkan Voss di dalam rumah.',
      alibi: 'Di dalam rumah induk sepanjang malam.',
      interrogation: [
        { q: 'Kau yang menyajikan minuman malamnya?', a: 'Saya yang mengantar kopi dan jamu ke mejanya tiap malam. Seperti biasa. Malam itu... saya tak menatap matanya.', requires: 'jamu' },
        { q: 'Apa yang Voss lakukan padamu?', a: 'Hal-hal yang tak sanggup saya ucapkan. Nyai Sari yang melindungi saya. Di rumah ini, kami saling melindungi.' },
        { q: 'Kau sendirian malam itu?', a: 'Di rumah ini, malam itu, tak ada yang benar-benar sendirian.' },
      ],
    },
    {
      id: 'wim', init: 'WV', name: 'Wim de Vries', age: 40,
      role: 'Pembuku (boekhouder) onderneming',
      statement: '“Saya mengurus angka, bukan darah. Pintu itu terkunci dari dalam — kau sendiri yang bilang tak ada perampok.”',
      motive: 'Diperas Voss soal status "Indo"-nya; saudarinya tewas dicambuk.',
      alibi: 'Mengaku menutup pembukuan di kantor onderneming.',
      interrogation: [
        { q: 'Kau memegang kunci ruang kerja Voss?', a: 'Sebagai pembuku, ya. Dan pintu itu terkunci dari dalam — maka tak ada perampok dari luar. Kau sendiri yang menyimpulkannya.', requires: 'gembok' },
        { q: 'Logbuku jam istirahat Voss diubah. Kenapa?', a: 'Saya mencatat sesuai yang saya tahu. Mungkin... saya keliru soal jamnya.', requires: 'catatan' },
        { q: 'Voss memerasmu?', a: 'Ia tahu darahku campuran dan menahan upahku bertahun-tahun. Saudariku termasuk yang mati di tiang itu. Jadi ya — aku punya alasan. Kami semua punya.' },
      ],
    },
    {
      id: 'nyai', init: 'NS', name: 'Nyai Sari', age: 35,
      role: 'Nyai & pengurus rumah Voss',
      statement: '“Aku mengenal setiap sudut rumah ini, dan setiap luka penghuninya. Termasuk lukaku sendiri.”',
      motive: 'Anaknya bersama Voss dikirim pergi & disangkal sang tuan.',
      alibi: 'Mengurus rumah induk sepanjang malam.',
      interrogation: [
        { q: 'Kau yang mengurus rumah ini?', a: 'Aku nyai-nya. Aku tahu setiap sudut rumah ini. Anakku — anak kami — ia kirim entah ke mana. Aku tak pernah memaafkannya.' },
        { q: 'Kau tahu siapa yang membunuhnya?', a: 'Kau sudah lihat lukanya, bukan? Tak ada satu tangan yang sanggup. Ini keadilan yang tak pernah diberikan pengadilan kepada kami.', requires: 'putusan', unlocks: 'sumpah' },
        { q: 'Siapa "kami" itu?', a: 'Mereka yang kehilangan di bawah tangannya. Kalau kau sudah menemukan janji kami, kau sudah tahu nama-namanya.' },
      ],
    },
    {
      id: 'pieter', init: 'PB', name: 'Pieter Bakker', age: 28,
      role: 'Asisten administratur (Belanda)',
      statement: '“Aku muak pada caranya, dan aku melaporkannya. Tapi muak bukan berarti membunuh.”',
      motive: 'Berseberangan terbuka dengan Voss soal kekejamannya.',
      alibi: 'Terjebak di onderneming sebelah saat jembatan putus.',
      interrogation: [
        { q: 'Kau berseberangan dengan Voss?', a: 'Aku muak melihatnya memperlakukan manusia seperti ternak. Aku melaporkannya ke residen — sia-sia. Tapi aku tak akan menjadi seperti dia.' },
        { q: 'Di mana kau malam itu?', a: 'Terjebak di onderneming sebelah ketika jembatan putus. Aku baru menyeberang subuh, saat semuanya sudah terjadi.', requires: 'jembatan' },
        { q: 'Kau melihat sesuatu yang janggal?', a: 'Hanya bahwa paginya, tak seorang pun di rumah itu tampak benar-benar terkejut.' },
      ],
    },
    {
      id: 'said', init: 'SD', name: 'Said', age: 30,
      role: 'Pemimpin kuli kontrak',
      statement: '“Aku mengancamnya di depan semua orang, ya. Tapi malam itu aku dikurung — tanya penjaganya.”',
      motive: 'Memimpin kuli yang dicambuk; mengancam Voss terang-terangan.',
      alibi: 'Dikurung di barak di bawah penjagaan centeng sepanjang malam.',
      interrogation: [
        { q: 'Kau mengancam Voss?', a: 'Di depan semua orang, setelah ia mencambuk kawan-kawanku. Aku tak menyesalinya. Tapi aku tak menyentuhnya.' },
        { q: 'Di mana kau malam itu?', a: 'Dikurung di barak bersama kuli lain, dijaga centeng karena ancamanku tadi siang. Penjaga itu bisa bersaksi.', requires: 'barak' },
        { q: 'Kau tahu siapa pelakunya?', a: 'Kalaupun tahu, untuk apa kuserahkan mereka pada hukum yang sama yang membebaskan Voss? Tapi sungguh, bukan kami yang di barak.' },
      ],
    },
  ],
  timeline: [
    { t: 'Senja', key: false, x: 'Jembatan satu-satunya putus diterjang banjir; onderneming terkurung hingga subuh.' },
    { t: '20.00', key: false, x: 'Inem mengantar kopi & jamu malam ke ruang kerja Voss — kali ini dibubuhi obat tidur.' },
    { t: '~21.30', key: true, x: 'Voss yang terkulai diserang; luka datang dari beberapa tangan berbeda.' },
    { t: '~22.00', key: true, x: 'Ruang kerja dikunci dari dalam dan ditata seperti bekas perampokan.' },
    { t: '06.00', key: false, x: 'Jasad ditemukan; mula-mula diduga perampok dari luar.' },
  ],
  solution: {
    killers: ['karto', 'inem', 'wim', 'nyai'],
    motive: ['putusan'],
    means: ['luka', 'jamu'],
    opportunity: ['banjir'],
  },
  reveal: {
    sections: [
      { h: 'Pelakunya: bukan satu orang', p: [
        'Voss tidak dibunuh oleh satu tangan. Lukanya datang dari beberapa senjata, beberapa ketinggian, beberapa tangan — sebuah parang, sebuah bilah tipis, sebuah benda tumpul berat. Ini bukan seorang pembunuh; ini sebuah persekongkolan.',
        'Mereka membiusnya lebih dulu — jamu malam yang diantar Inem dibubuhi obat tidur — lalu, satu per satu, mereka yang pernah ia hancurkan menuntaskannya: Mandor Karto, Inem, Wim de Vries, dan Nyai Sari.',
      ] },
      { h: 'Keadilan yang ditolak pengadilan', p: [
        'Voss mencambuk mati beberapa kuli — termasuk putra Karto dan saudari Wim — atas tuduhan sepele. Landraad membebaskannya; hukum kolonial melindungi sang tuan. Yang tersisa bagi mereka yang kehilangan hanyalah satu sama lain, dan sebuah janji yang dicap dengan darah di bilik Nyai Sari.',
      ] },
      { h: 'Lingkaran yang terkurung', p: [
        'Banjir memutus jembatan sejak senja: tak ada yang masuk atau keluar hingga subuh. Pelakunya pasti penghuni rumah. Ruang kerja dikunci dari dalam oleh Wim, sang pemegang kunci, lalu ditata seperti perampokan; logbuku pun ia ubah untuk mengaburkan waktu. Nyai Sari, yang mengenal tiap sudut rumah, mengikat mereka dalam satu sumpah.',
      ] },
      { h: 'Mengapa bukan Pieter atau Said', p: [
        'Pieter Bakker membenci cara Voss dan melaporkannya — tapi ia terjebak di onderneming sebelah saat jembatan putus, baru menyeberang subuh. Said mengancam Voss terang-terangan siang itu — dan justru karena itu ia dikurung di barak di bawah penjagaan sepanjang malam. Yang paling lantang menentang, bukan mereka pelakunya.',
        'Tiga unsur bertemu bukan pada satu orang, melainkan pada empat: motif (keadilan yang ditolak pengadilan), cara (banyak tangan atas tubuh yang dibius), dan kesempatan (rumah yang terkurung banjir). Mereka melakukannya bersama.',
      ] },
    ],
    rebuttals: {
      pieter: 'Pieter melawan Voss secara terbuka dan melaporkannya ke residen — tapi banjir mengurungnya di onderneming sebelah; ia baru menyeberang subuh. Perlawanan terbuka bukan tangan yang membunuh.',
      said: 'Said mengancam Voss di depan umum siang itu — dan justru karena itu ia dikurung di barak di bawah penjagaan sepanjang malam. Kesaksian penjaga membersihkannya.',
    },
  },
}
