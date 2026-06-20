// Case 8 (gated). The twist: there is NO murderer — the death was an
// accident, and every suspect is innocent. Set during the Japanese
// occupation of Indonesia (1944). Hardest case.
export const sumur = {
  id: 'sumur',
  free: false,
  difficulty: 'Sangat Sulit',
  code: 'PJ-1944',
  location: 'Kota kecil di Jawa · Pendudukan Jepang, 1944',
  scene: 'highland',
  title: 'Maut di Sumur Tua',
  blurb:
    'Seorang kolaborator yang dibenci sekota ditemukan tewas di dasar sumur tua, pagi setelah serangan udara. Semua orang punya alasan membunuhnya.',
  disclaimer: {
    text: 'Kisah ini fiksi, berlatar masa Pendudukan Jepang di Indonesia (1942–1945). Latarnya meminjam sejarah era itu — Kempeitai, tonarigumi (kumico), romusha, kelangkaan beras, dan serangan udara Sekutu. Seluruh tokoh, nama, dan kejadian rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
    source: {
      label: 'Latar sejarah: "Japanese occupation of the Dutch East Indies" (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Japanese_occupation_of_the_Dutch_East_Indies',
    },
  },
  cover: {
    lead: 'Di kota yang kelaparan di bawah pendudukan, lelaki paling dibenci mati di dasar sumur. Semua menuding pembunuhan. Tapi kebenaran lebih dingin daripada dendam.',
  },
  briefing: {
    paras: [
      'Tahun 1944. Di sebuah kota kecil di Jawa di bawah pendudukan Jepang, Pak Wirjo — sang kumico, kepala tonarigumi — menjadi orang paling dibenci. Ia melaporkan tetangga ke Kempeitai dan menimbun jatah beras saat rakyat kelaparan.',
      'Pada malam serangan udara Sekutu, sirene meraung dan kota gelap gulita. Pagi harinya, Pak Wirjo ditemukan tewas di dasar sumur tua di belakang rumahnya, kepala luka. Hampir setiap orang di kota ini punya alasan menginginkannya mati.',
      'Polisi militer hendak menutupnya sebagai pembunuhan oleh "pemberontak". Sebelum ada yang diseret ke Kempeitai untuk kejahatan yang mungkin tak pernah terjadi, keluarga yang ketakutan memanggil Anda. Periksa baik-baik: apakah ini benar-benar pembunuhan?',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi keenam orang yang paling membencinya. Lalu simpulkan: siapa pembunuhnya — atau adakah pembunuh sama sekali? Susun pembuktianmu.',
  },
  victim: {
    init: 'PW',
    name: 'Pak Wirjo',
    meta: '56 tahun · kumico (kepala tonarigumi)',
    paras: [
      'Tangan kanan pendudukan di kota ini: melaporkan siapa saja yang dicurigai ke Kempeitai, dan menimbun jatah beras untuk dijual gelap saat tetangganya mati kelaparan. Tak ada yang menangisi kepergiannya.',
      'Ditemukan di dasar sumur tua di belakang rumahnya pada subuh setelah serangan udara, dengan luka di kepala. Sumur itu sudah lama tak terpakai, tutupnya terbuka.',
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Luka di kepala Pak Wirjo',
      summary: 'Satu benturan ke bawah — cocok dengan bibir batu sumur.',
      detail:
        'Luka tunggal di kepala, dengan arah benturan ke bawah dan lengkung yang pas dengan bibir batu sumur — bukan pukulan dari benda yang diayunkan seseorang. Tak ada luka pertahanan, tak ada bekas dipukul berulang. Bentuknya bentuk orang yang jatuh, bukan yang dibunuh.',
    },
    {
      id: 'sumur', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Mulut sumur tua',
      summary: 'Tutup terbuka, bibir licin berlumut, hanya satu set tapak.',
      detail:
        'Tutup sumur terbuka, bibirnya basah dan berlumut. Di tanah becek sekelilingnya hanya ada satu set tapak kaki — milik Pak Wirjo sendiri. Tak ada tapak kedua, tak ada bekas seret, tak ada tanda pergumulan. Tak seorang pun berdiri di tepi sumur itu bersamanya.',
    },
    {
      id: 'serangan', icon: 'metadata', tag: 'Catatan',
      title: 'Malam serangan udara',
      summary: 'Sirene & pemadaman total; semua berlarian ke tempat perlindungan.',
      detail:
        'Malam itu sirene serangan udara Sekutu meraung dan seluruh kota wajib gelap gulita. Dalam kepanikan dan kegelapan pekat, semua orang berhamburan ke lubang perlindungan. Dalam kekacauan seperti itu, setiap orang tampak "berkeliaran" — dan tak seorang pun bisa melihat apa pun.',
    },
    {
      id: 'sake', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Sake dalam tubuhnya',
      summary: 'Mabuk berat malam itu — dari simpanan gelapnya sendiri.',
      detail:
        'Tubuh Pak Wirjo penuh alkohol — sake simpanan hasil pasar gelapnya. Dalam keadaan mabuk berat, di tengah gelap total dan sirene yang meraung, langkahnya pasti limbung di tanah becek dekat sumur terbuka.',
    },
    {
      id: 'segel', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Stempel & kunci kumico',
      summary: 'Dikira dirampok — ternyata ada di dasar sumur bersamanya.',
      detail:
        'Stempel jabatan dan kunci-kunci Pak Wirjo mula-mula disangka dicuri — petunjuk perampokan dan pembunuhan. Nyatanya semuanya ditemukan di dasar sumur, di sakunya, ikut jatuh bersamanya. Tak ada yang dicuri. Tak ada perampokan.',
    },
    {
      id: 'ancaman', icon: 'phone', tag: 'Dokumen',
      title: 'Surat ancaman lama',
      summary: 'Surat kaleng "kau akan terima balasanmu" — bertanggal pekan lalu.',
      herring: true,
      detail:
        'Sepucuk surat kaleng ditemukan di rumahnya: "kau akan terima balasanmu". Tampak seperti petunjuk pembunuhan — sampai diperiksa tanggalnya: ditulis berminggu lalu, dan nadanya umum. Sekota ini membencinya; ancaman seperti ini sudah biasa ia terima. Tak ada kaitannya dengan malam itu.',
    },
    {
      id: 'saksi', icon: 'recon', tag: 'Saksi',
      title: 'Anak kecil yang melihat',
      summary: 'Melihat Pak Wirjo terhuyung ke sumur — seorang diri.',
      detail:
        'Seorang anak yang bersembunyi ketakutan saat sirene berbunyi melihat Pak Wirjo terhuyung-huyung sendirian ke arah sumur dalam gelap, sambil menggumam soal "simpananku". Tak ada yang mengikutinya, tak ada yang mendorongnya. Hanya dia, kegelapan, dan sumur menganga.',
    },
    {
      id: 'tempat', icon: 'metadata', tag: 'Catatan',
      title: 'Daftar hadir tempat perlindungan',
      summary: 'Penjaga mencatat para tetangga di lubang perlindungan.',
      detail:
        'Penjaga pertahanan udara (keibodan) mencatat siapa yang berlindung di lubang-lubang perlindungan selama serangan. Hampir semua nama yang dicurigai tercatat di sana sepanjang waktu kejadian — jauh dari rumah Pak Wirjo.',
    },
    {
      id: 'parang', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Parang Sukarni dekat sumur',
      summary: 'Tampak memberatkan — tapi bersih, tanpa darah.',
      detail:
        'Sebilah parang milik Sukarni ditemukan tergeletak tak jauh dari sumur — petunjuk yang seakan menudingnya. Tapi parang itu bersih, tanpa setitik darah; ia hanyalah alat tani yang terjatuh saat Sukarni berlari menuntun tetangga ke tempat perlindungan dalam gelap.',
    },
    {
      id: 'harta', icon: 'photo', tag: 'Temuan Tersembunyi',
      title: 'Simpanan di dasar sumur',
      summary: 'Emas & beras timbunan — alasan ia ke sumur malam itu.',
      locked: true, twist: true,
      detail:
        'Di dasar sumur, bersama jasadnya: buntalan emas dan beras timbunan hasil pasar gelap, serta coretan tangannya sendiri tentang "menyembunyikannya di sumur". Saat sirene meraung dan kota gelap, ia bergegas mabuk ke sumur untuk menjaga hartanya dari penjarah — dan terjatuh ke dalamnya. Itulah sebabnya ia ada di sana, sendirian.',
    },
  ],
  suspects: [
    {
      id: 'sukarni', init: 'SK', name: 'Sukarni', age: 24,
      role: 'Pemuda; ayahnya dibawa Kempeitai',
      statement: '“Wirjo melaporkan ayahku. Ayahku tak pernah pulang dari Kempeitai. Ya, aku membencinya — tapi aku tak membunuhnya.”',
      motive: 'Ayahnya hilang setelah dilaporkan Wirjo ke Kempeitai.',
      alibi: 'Menuntun tetangga ke tempat perlindungan saat serangan.',
      interrogation: [
        { q: 'Apa yang Wirjo lakukan pada keluargamu?', a: 'Ia tunjuk ayahku sebagai "mata-mata". Kempeitai membawanya. Itu setahun lalu. Kami tak pernah lihat ayah lagi.' },
        { q: 'Parangmu ada di dekat sumur. Jelaskan.', a: 'Itu parang taniku. Pasti terjatuh waktu aku berlari menuntun orang ke lubang perlindungan dalam gelap. Periksa — tak ada darah.', requires: 'parang' },
        { q: 'Di mana kau saat sirene berbunyi?', a: 'Membantu nenek-nenek turun ke lubang perlindungan. Penjaga mencatat namaku di sana. Banyak yang melihatku.', requires: 'tempat' },
      ],
    },
    {
      id: 'inah', init: 'MI', name: 'Mbok Inah', age: 43,
      role: 'Penjual; berasnya dirampas',
      statement: '“Anakku mati lapar sementara dia menimbun beras kami. Tapi mendoakannya celaka berbeda dengan mendorongnya ke sumur.”',
      motive: 'Beras keluarganya dirampas; anaknya mati kelaparan.',
      alibi: 'Bersama perempuan lain di tempat perlindungan.',
      interrogation: [
        { q: 'Wirjo merampas berasmu?', a: 'Atas nama "jatah", ya. Lalu ia jual gelap. Anakku... anakku tak bertahan. Tapi air mataku bukan racun.' },
        { q: 'Di mana kau malam itu?', a: 'Berdesakan di lubang perlindungan bersama ibu-ibu sekampung, memeluk yang menangis. Tanya siapa saja di sana.', requires: 'tempat' },
        { q: 'Kau pernah mengancamnya?', a: 'Aku memakinya di depan umum, ya. Tapi memaki tak menjatuhkan orang ke sumur.' },
      ],
    },
    {
      id: 'hadi', init: 'GH', name: 'Pak Guru Hadi', age: 50,
      role: 'Guru; pernah disiksa Kempeitai',
      statement: '“Aku dilaporkan karena mengajar cinta tanah air. Aku kembali dari Kempeitai tanpa beberapa kuku. Tapi aku guru, bukan pembunuh.”',
      motive: 'Disiksa Kempeitai setelah dilaporkan Wirjo.',
      alibi: 'Merawat yang terluka saat serangan udara.',
      interrogation: [
        { q: 'Kenapa Wirjo melaporkanmu?', a: 'Karena di kelas aku menyebut kata "merdeka". Itu cukup baginya. Aku diseret, disiksa, lalu dilepas sebagai peringatan.' },
        { q: 'Di mana kau saat kejadian?', a: 'Di pos darurat, membalut luka orang-orang yang panik dan jatuh dalam gelap. Tanganku penuh kerja malam itu.', requires: 'tempat' },
        { q: 'Kau yakin ini pembunuhan?', a: 'Semua ingin ia mati, itu benar. Tapi keinginan bukan perbuatan. Periksa lukanya baik-baik.', requires: 'luka' },
      ],
    },
    {
      id: 'lim', init: 'BL', name: 'Babah Lim', age: 52,
      role: 'Pemilik kedai; diperas Wirjo',
      statement: '“Tiap bulan ia memerasku. Aku benci membayarnya — tapi aku lebih takut keluar saat bom berjatuhan.”',
      motive: 'Diperas rutin oleh Wirjo.',
      alibi: 'Berlindung di bawah kedainya saat serangan.',
      interrogation: [
        { q: 'Wirjo memerasmu?', a: 'Tiap bulan, "uang keamanan". Kalau tidak, ia lapor aku ke Kempeitai. Begitulah hidup orang sepertiku di sini.' },
        { q: 'Di mana kau malam itu?', a: 'Meringkuk di gudang bawah kedaiku saat bom jatuh. Aku tak berani keluar sejengkal pun.' },
        { q: 'Menurutmu siapa pelakunya?', a: 'Entah. Tapi kalau ada yang merampoknya, kenapa stempel dan kuncinya masih ada padanya?', requires: 'segel' },
      ],
    },
    {
      id: 'karsono', init: 'KS', name: 'Karsono', age: 31,
      role: 'Anggota PETA',
      statement: '“Aku sering bentrok dengan Wirjo soal caranya menindas rakyat. Tapi malam itu aku bertugas di pos, bukan di sumurnya.”',
      motive: 'Berkali bentrok dengan Wirjo soal penindasannya.',
      alibi: 'Bertugas jaga di pos PETA saat serangan.',
      interrogation: [
        { q: 'Apa masalahmu dengan Wirjo?', a: 'Ia memperlakukan rakyat seperti ternak dan berlindung di balik Jepang. Aku menentangnya terang-terangan.' },
        { q: 'Di mana kau saat serangan udara?', a: 'Bertugas jaga di pos bersama anggota lain sepanjang alarm. Komandan dan kawan-kawan bisa bersaksi.', requires: 'tempat' },
        { q: 'Kau lihat sesuatu malam itu?', a: 'Gelap total. Hanya sirene dan ledakan jauh. Tak ada yang bisa kulihat di kebun belakang rumahnya.' },
      ],
    },
    {
      id: 'tarno', init: 'TR', name: 'Tarno', age: 35,
      role: 'Keponakan Wirjo (calon pewaris)',
      statement: '“Orang akan bilang aku mengincar simpanannya. Tapi justru aku yang tahu ke mana ia lari malam itu.”',
      motive: 'Akan mewarisi harta timbunan pamannya.',
      alibi: 'Tertidur mabuk di rumahnya saat serangan.',
      interrogation: [
        { q: 'Kau akan mewarisi hartanya?', a: 'Kalau ada yang tersisa, mungkin. Tapi membunuhnya tak masuk akal — aku bahkan tak tahu persis di mana ia simpan semuanya. Hampir.' },
        { q: 'Apa yang dijaga pamanmu di sumur itu?', a: 'Sumur? ...Astaga. Itu tempat ia sembunyikan emas dan beras timbunannya. Begitu sirene bunyi, ia pasti lari ke sana menjaganya. Ia selalu lebih sayang hartanya daripada nyawanya.', requires: 'sumur', unlocks: 'harta' },
        { q: 'Di mana kau saat kejadian?', a: 'Tertidur mabuk di rumah. Memalukan, tapi benar. Tetangga mendengar aku mendengkur sepanjang serangan.' },
      ],
    },
  ],
  timeline: [
    { t: 'Senja', key: false, x: 'Pak Wirjo minum sake simpanannya; kota mulai mencekam.' },
    { t: 'Malam', key: true, x: 'Sirene serangan udara meraung; kota gelap total, semua berlari ke tempat perlindungan.' },
    { t: 'Saat gelap', key: true, x: 'Pak Wirjo terhuyung sendirian ke sumur tua untuk menjaga simpanannya.' },
    { t: 'Saat gelap', key: true, x: 'Ia terpeleset di bibir sumur yang licin dan jatuh ke dalam; tak ada yang bersamanya.' },
    { t: 'Subuh', key: false, x: 'Jasadnya ditemukan; semua langsung menduga pembunuhan.' },
  ],
  solution: {
    accident: true,
    proofLabels: {
      motive: { label: 'Penyebab sebenar', hint: 'Apa yang sebenarnya terjadi?' },
      means: { label: 'Bukti bukan pembunuhan', hint: 'Apa yang menyangkal adanya pelaku?' },
      opportunity: { label: 'Sumber salah sangka', hint: 'Mengapa tampak seperti dibunuh?' },
    },
    motive: ['sumur', 'harta', 'sake'],
    means: ['luka', 'segel', 'saksi'],
    opportunity: ['serangan', 'ancaman', 'tempat', 'parang'],
  },
  reveal: {
    sections: [
      { h: 'Tidak ada pembunuh', p: [
        'Pak Wirjo tidak dibunuh. Ia mati karena kecelakaan — dan setiap tersangka tak bersalah.',
        'Malam serangan udara, mabuk berat oleh sake simpanannya dan dalam gelap total, ia terhuyung ke sumur tua di belakang rumahnya. Lukanya pas dengan bibir batu sumur, bukan pukulan. Di tanah becek hanya ada tapaknya sendiri. Stempel dan kuncinya jatuh bersamanya — tak ada yang dicuri. Seorang anak melihatnya pergi ke sumur seorang diri.',
      ] },
      { h: 'Kenapa ia ada di sumur', p: [
        'Di dasar sumur, bersama jasadnya, tersembunyi emas dan beras timbunan hasil pasar gelapnya — beserta catatannya sendiri. Begitu sirene meraung dan kota gelap, ia bergegas menjaga hartanya dari penjarah. Ia lebih menyayangi simpanannya daripada nyawanya, dan itulah yang membawanya ke bibir sumur yang licin.',
      ] },
      { h: 'Mengapa semua mengira pembunuhan', p: [
        'Ia lelaki paling dibenci di kota — pelapor Kempeitai dan penimbun beras — jadi setiap orang punya alasan. Pemadaman serangan udara menebar semua orang ke dalam gelap. Sepucuk surat ancaman lama dan sebilah parang yang terjatuh melengkapi ilusi itu. Genre menuntut pembunuh; kenyataan tak selalu menyediakannya.',
      ] },
      { h: 'Mengapa bukan mereka', p: [
        'Dendam mereka nyata — ayah yang hilang, anak yang mati lapar, kuku yang dicabut, kedai yang diperas. Tapi daftar hadir penjaga menempatkan mereka semua di lubang perlindungan saat kejadian. Tak ada tapak kedua di tepi sumur. Tiga "unsur" tak bertemu pada siapa pun: yang ada hanyalah penyebab (sumur & hartanya), bukti tiada pelaku (luka jatuh, tiada yang dicuri), dan sumber salah sangka (kegelapan & kebencian sekota). Lelaki yang diinginkan mati oleh semua, mati oleh ketamakannya sendiri dan kegelapan.',
      ] },
    ],
    rebuttals: {
      sukarni: 'Dendam Sukarni paling dalam, dan parangnya memang dekat sumur — tapi parang itu bersih tanpa darah, terjatuh saat ia menuntun tetangga ke perlindungan. Daftar penjaga mencatatnya di sana. Luka Wirjo pun luka jatuh, bukan bacokan.',
      inah: 'Kepedihan Mbok Inah nyata, tapi ia berdesakan di lubang perlindungan bersama ibu-ibu lain sepanjang serangan. Wirjo jatuh ke sumur sendiri; tak ada tangan yang mendorongnya.',
      hadi: 'Pak Guru Hadi disiksa karena laporan Wirjo — motif yang pahit. Tapi malam itu ia merawat korban di pos darurat, dan lukanya korban adalah luka jatuh, bukan pukulan.',
      lim: 'Babah Lim diperas bertahun-tahun, tapi ia meringkuk di gudang kedainya saat bom jatuh — dan tak ada perampokan: stempel serta kunci Wirjo ikut jatuh bersamanya.',
      karsono: 'Karsono menentang Wirjo terang-terangan, tapi ia bertugas jaga di pos PETA sepanjang alarm, disaksikan rekan-rekannya. Tak ada jejaknya di sumur.',
      tarno: 'Tarno memang calon pewaris, tapi justru ia yang menunjukkan ke mana pamannya berlari malam itu — dan tak ada yang dicuri dari sumur. Wirjo cuma terjatuh menjaga hartanya sendiri.',
    },
  },
}
