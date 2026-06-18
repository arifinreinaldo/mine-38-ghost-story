// Case 3 (gated). Original closed-circle mystery inspired by Indonesia's
// "false identity / infiltration for revenge" con archetype.
export const mutiara = {
  id: 'mutiara',
  free: false,
  difficulty: 'Mudah',
  code: 'PM-0226',
  location: 'Pulau Mutiara, Sulawesi',
  scene: 'coast',
  title: 'Maut di Pulau Mutiara',
  blurb:
    'Badai mengurung satu keluarga di pulau mutiara mereka. Saat fajar, sang patriark tewas di kaki mercusuar — dan tak ada perahu yang datang atau pergi.',
  disclaimer: {
    text: 'Kisah ini fiksi. Terinspirasi dari fenomena penipuan identitas — seseorang memakai jati diri palsu untuk menyusup dan membalas dendam — yang sempat viral di Indonesia. Seluruh tokoh, nama, tempat, dan kejadian adalah rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
    source: {
      label: 'Inspirasi: "Kebohongan Plot Twist di Indonesia" (YouTube)',
      url: 'https://www.youtube.com/watch?v=_wkJoSaVwJM',
    },
  },
  cover: {
    lead: 'Tiga generasi dinasti mutiara berkumpul di pulau mereka saat musim badai. Subuh itu, sang patriark tewas — dan pembunuhnya terkurung bersama yang lain.',
  },
  briefing: {
    paras: [
      'Keluarga Lasaleo menguasai tambak mutiara terbaik di pesisir ini selama tiga generasi. Setiap awal musim badai, mereka berkumpul di rumah induk di Pulau Mutiara — pulau kecil milik keluarga, hanya dijangkau perahu.',
      'Malam itu badai jauh lebih ganas dari ramalan. Gelombang memutus tambatan; tak ada perahu yang bisa keluar atau masuk hingga subuh. Saat langit terang, Haji Rustam Lasaleo, 67, sang patriark, ditemukan tewas di kaki tangga mercusuar. Polisi pesisir mencatat: terpeleset di anak tangga basah.',
      'Tapi tak ada perahu yang datang malam itu. Bila ini pembunuhan, pelakunya terkurung di pulau ini. Keluarga menolak kata "kecelakaan" dan memanggil Anda.',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi kelima orang yang terkurung di pulau. Lalu susun pembuktian — motif, cara, kesempatan. Di pulau ini, bahkan nama pun bisa palsu.',
  },
  victim: {
    init: 'RL',
    name: 'Haji Rustam Lasaleo',
    meta: '67 tahun · patriark dinasti mutiara Lasaleo',
    paras: [
      'Membangun kerajaan mutiara dari satu sampan; dikenal keras dan disegani. Belakangan sakit-sakitan, ditemani seorang perawat pribadi setahun terakhir. Konon ia mulai bicara soal "menebus dosa lama" sebelum ajal.',
      'Ditemukan subuh di kaki tangga mercusuar, tempat ia biasa memantau tambak. Luka di kepalanya dianggap akibat benturan tangga — meski air pasang malam itu tak setinggi anak tangga tempat ia tergeletak.',
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Luka di kepala Rustam',
      summary: 'Bentuk luka tak cocok dengan benturan tangga.',
      detail:
        'Luka di kepala Rustam lonjong dan dalam — dari satu pukulan benda tumpul berat, bukan benturan berulang khas orang menggelinding di tangga. Ia dipukul lebih dulu, baru direbahkan di kaki mercusuar. Tangga basah itu hanya panggung.',
    },
    {
      id: 'pasang', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Ketinggian air pasang',
      summary: 'Air tak mencapai anak tangga tempat jasad ditemukan.',
      detail:
        'Rekonstruksi pasang malam itu menunjukkan air laut berhenti dua anak tangga di bawah posisi jasad. Pasir basah di sepatu Rustam justru berasal dari jalur dermaga, bukan tangga. Tubuhnya dipindah setelah ia tewas.',
    },
    {
      id: 'pemberat', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Pemberat selam yang hilang',
      summary: 'Satu pemberat timah lenyap dari gudang; ada noda darah.',
      detail:
        'Dari rak alat selam, satu pemberat timah hilang. Di lantai gudang tambak ada tetesan darah samar yang cocok dengan golongan darah Rustam. Pemberat seberat itu, diayunkan sekali, sanggup menimbulkan luka tunggal yang dalam.',
    },
    {
      id: 'logbuku', icon: 'ledger', tag: 'Dokumen',
      title: 'Logbuku selam lama',
      summary: 'Kematian penyelam Saleh, 18 tahun lalu — dipaksa menyelam saat badai.',
      detail:
        'Logbuku tua mencatat kematian Saleh, penyelam muda, 18 tahun silam: dikirim mengambil mutiara langka saat laut ganas, lalu pencariannya dihentikan terburu-buru. Yang mengesahkan "kecelakaan" itu: Rustam dan Yusuf. Sebuah rahasia yang dikubur keluarga.',
    },
    {
      id: 'identitas', icon: 'photo', tag: 'Temuan',
      title: 'Dokumen tersembunyi Maya',
      summary: 'Akta & foto: "Maya" sebenarnya anak Saleh.',
      herring: true,
      detail:
        'Di koper Maya tersimpan akta lahir, foto lama, dan kliping berita: "Maya Sari" adalah nama samaran. Ia anak Saleh — penyelam yang tewas itu. Setahun ini ia menyusup sebagai perawat untuk membongkar kebenaran. Sekilas, tak ada motif sekuat dendam darah; semua mata beralih padanya.',
    },
    {
      id: 'radio', icon: 'phone', tag: 'Metadata',
      title: 'Log radio panggil daratan',
      summary: 'Panggilan darurat 03.10–03.40 dari ruang radio.',
      detail:
        'Log perangkat radio mencatat upaya panggilan ke pos pesisir daratan, 03.10–03.40 — persis rentang perkiraan waktu kematian. Suara pemanggil seorang perempuan, memohon bantuan medis untuk Rustam. Siapa pun yang di ruang radio saat itu, tak mungkin berada di mercusuar.',
    },
    {
      id: 'sepatu', icon: 'recon', tag: 'Barang Bukti',
      title: 'Jejak bot gudang → mercusuar',
      summary: 'Jejak basah berlumpur tambak — hanya satu orang.',
      detail:
        'Jejak bot berlumpur tambak membentang dari gudang alat selam menuju mercusuar dan kembali — satu-satunya jejak yang melawan arah badai malam itu. Ukuran dan pola solnya cocok dengan bot kerja Fadhil, bukan sepatu tamu atau sandal rumah.',
    },
    {
      id: 'badai', icon: 'metadata', tag: 'Metadata',
      title: 'Catatan cuaca & tambatan',
      summary: 'Tak ada perahu keluar/masuk sejak pukul 19.00.',
      detail:
        'Catatan syahbandar kecil pulau: gelombang memutus dua tambatan pukul 19.00; tak ada perahu yang berani menyeberang hingga subuh. Lingkaran tertutup — siapa pun pelakunya, ia bermalam di pulau ini.',
    },
    {
      id: 'nota', icon: 'doc', tag: 'Dokumen',
      title: 'Nota sengketa mutiara',
      summary: 'Bram menuntut mutiara langka yang gagal diserahkan.',
      detail:
        'Nota dan pesan keras dari Bram: ia membayar uang muka besar untuk satu mutiara langka yang tak kunjung diserahkan Rustam. Malam itu mereka beradu mulut. Motif uang yang nyata — tapi membunuh Rustam justru mengubur mutiara dan uangnya selamanya.',
    },
    {
      id: 'wasiat', icon: 'doc', tag: 'Dokumen',
      title: 'Draf wasiat baru',
      summary: 'Rustam hendak mengubah ahli waris & menebus "dosa lama".',
      locked: true, twist: true,
      detail:
        'Tersembunyi di laci mercusuar: draf wasiat yang belum ditandatangani, bertanggal pekan ini. Rustam berniat menyisihkan bagian besar untuk "keluarga Saleh", mengakui kesalahan masa lalunya, dan memangkas warisan Fadhil. Bila draf ini sah, kerajaan mutiara — dan nama baik keluarga — runtuh di tangan Fadhil.',
    },
  ],
  suspects: [
    {
      id: 'maya', init: 'MS', name: 'Maya Sari', age: 28,
      role: 'Perawat pribadi Rustam (1 tahun)',
      statement: '“Aku merawatnya tiap hari. Aku tahu kalian akan menatapku begitu — orang baru selalu paling mudah dicurigai.”',
      motive: 'Orang luar yang paling dekat dengan korban; masa lalunya kabur.',
      alibi: 'Mengaku berada di ruang radio mencoba memanggil daratan saat kejadian.',
      interrogation: [
        { q: 'Di mana kau saat Rustam tewas?', a: 'Di ruang radio, mencoba memanggil daratan untuk bantuan medis. Cek log-nya — ada suaraku di sana, lewat jam tiga.' },
        { q: 'Siapa kau sebenarnya?', a: 'Maya... itu nama yang kupakai. Ya, aku anak Saleh. Aku datang untuk kebenaran, bukan untuk darah. Membunuhnya justru mengubur semuanya.', requires: 'identitas' },
        { q: 'Kau membenci Rustam?', a: 'Dulu. Tapi setahun merawatnya, ia mulai menyesal. Aku ingin ia mengakuinya hidup-hidup, bukan mati membawa rahasia.' },
      ],
    },
    {
      id: 'fadhil', init: 'FL', name: 'Fadhil Lasaleo', age: 41,
      role: 'Anak sulung & ahli waris, mengelola bisnis',
      statement: '“Ayah keras kepala, naik ke mercusuar dalam badai. Sudah kularang. Sekarang semua menuding karena akulah yang mewarisi.”',
      motive: 'Tampak sebagai ahli waris yang berduka. Alasannya jelas hanya bila wasiat dibahas.',
      alibi: 'Mengaku di gudang tambak mengamankan peralatan dari badai; tanpa saksi tetap.',
      interrogation: [
        { q: 'Di mana kau saat puncak badai?', a: 'Di gudang tambak, mengamankan alat. Sendirian. Siapa yang mau kuajak di tengah badai begitu?' },
        { q: 'Kau tahu ayahmu hendak mengubah wasiat?', a: 'Wasiat? Tidak. Ayah memang sering melantur soal "menebus dosa" belakangan. Itu cuma igauan orang sakit.', requires: 'logbuku', unlocks: 'wasiat' },
        { q: 'Jejak bot gudang → mercusuar itu milik siapa?', a: 'Banyak yang pakai bot di pulau ini. Jangan asal tuduh. Aku mengamankan alat, wajar bolak-balik gudang.', requires: 'sepatu' },
      ],
    },
    {
      id: 'ratna', init: 'RA', name: 'Ratna Lasaleo', age: 39,
      role: 'Istri kedua Rustam',
      statement: '“Hubungan kami dingin, kuakui. Tapi dingin bukan berarti membunuh.”',
      motive: 'Pernikahan kedua yang dingin; bagian waris yang besar.',
      alibi: 'Mengaku di kamar utama sepanjang badai.',
      interrogation: [
        { q: 'Di mana kau sepanjang badai?', a: 'Di kamar. Aku takut badai, tak keluar sama sekali.' },
        { q: 'Soal warisan, bagianmu besar?', a: 'Aku istrinya, wajar diperhitungkan. Tapi aku tak butuh ia mati untuk itu.' },
        { q: 'Bagaimana hubunganmu dengan Rustam?', a: 'Dingin. Kami menikah karena banyak hal, cinta bukan salah satunya. Tapi aku membiarkannya, bukan membunuhnya.' },
      ],
    },
    {
      id: 'yusuf', init: 'YU', name: 'Yusuf', age: 58,
      role: 'Juru selam senior & mandor (30 tahun)',
      statement: '“Saya mengabdi pada keluarga ini sejak muda. Beban masa lalu saya bawa — tapi tak akan saya tambah dengan darah tuan saya.”',
      motive: 'Ikut menutupi kematian Saleh; bisa terseret bila rahasia terbongkar.',
      alibi: 'Mengaku memeriksa tambatan perahu di dermaga saat badai.',
      interrogation: [
        { q: 'Kau tahu soal kematian Saleh?', a: 'Saya ikut menandatangani laporan itu. Beban yang saya pikul 18 tahun. Tapi saya tak akan menambah dosa dengan membunuh.', requires: 'logbuku' },
        { q: 'Di mana kau saat kejadian?', a: 'Di dermaga, mengikat ulang perahu yang lepas. Basah kuyup semalaman. Tanya siapa saja yang lihat senter saya di sana.' },
        { q: 'Kenapa Rustam tiba-tiba menyesal?', a: 'Penyakit membuat orang menengok ke belakang. Ia ingin bersih sebelum menghadap. Dan itu... membuat sebagian orang gusar.' },
      ],
    },
    {
      id: 'bram', init: 'BW', name: 'Bram Wijaya', age: 46,
      role: 'Pembeli permata dari kota, terjebak badai',
      statement: '“Aku datang berdagang, lalu badai mengurungku. Salahku apa selain berada di tempat dan waktu yang keliru?”',
      motive: 'Sengketa pembayaran besar atas mutiara langka yang tak kunjung diserahkan.',
      alibi: 'Terjebak di pulau; mengaku menunggu badai reda di ruang tamu.',
      interrogation: [
        { q: 'Apa urusanmu dengan Rustam?', a: 'Bisnis. Aku bayar muka besar untuk satu mutiara langka. Ia menunda terus. Malam itu kami berdebat, ya.' },
        { q: 'Kau benar-benar terjebak di pulau?', a: 'Badai mengurung kami semua. Aku orang kota — mana bisa menyeberang laut segila itu.', requires: 'badai' },
        { q: 'Kau untung dari kematiannya?', a: 'Justru rugi. Mutiaraku ikut mati bersamanya. Orang mati tak bisa menyerahkan apa-apa.' },
      ],
    },
  ],
  timeline: [
    { t: '19.00', key: false, x: 'Gelombang memutus tambatan; tak ada perahu keluar/masuk hingga subuh.' },
    { t: '21.00', key: false, x: 'Makan malam keluarga tegang; Rustam menyinggung soal "menebus dosa lama".' },
    { t: '22.30', key: false, x: 'Bram berdebat dengan Rustam soal mutiara yang tertunda.' },
    { t: '03.10', key: true, x: 'Suara perempuan memanggil daratan dari ruang radio (log 03.10–03.40).' },
    { t: '~03.20', key: true, x: 'Seseorang masuk-keluar gudang alat selam (jejak basah berlumpur).' },
    { t: '~03.30', key: true, x: 'Rustam tewas; tubuhnya kemudian berada di kaki tangga mercusuar.' },
    { t: '05.40', key: false, x: 'Jasad ditemukan; dianggap terpeleset di tangga basah.' },
  ],
  solution: {
    killer: 'fadhil',
    motive: ['wasiat', 'logbuku'],
    means: ['pemberat'],
    opportunity: ['sepatu'],
  },
  reveal: {
    killerName: 'Fadhil Lasaleo',
    sections: [
      { h: 'Pelakunya: Fadhil Lasaleo', p: [
        'Rustam tidak terpeleset. Ia dipukul satu kali dengan pemberat selam, lalu direbahkan di kaki mercusuar agar tampak jatuh dalam badai.',
        'Luka tunggal yang dalam itu tak cocok dengan orang menggelinding di tangga; air pasang pun tak pernah mencapai anak tangga tempat jasadnya. Tetes darah Rustam ada di gudang alat selam — tempat satu pemberat timah lenyap — dan jejak bot berlumpur membentang dari gudang ke mercusuar dan kembali. Bot itu milik Fadhil.',
      ] },
      { h: 'Rahasia yang dikubur', p: [
        'Delapan belas tahun lalu, Rustam mengirim penyelam muda bernama Saleh mengambil mutiara langka saat laut ganas, lalu menghentikan pencariannya terburu-buru. Kematian itu disahkan sebagai "kecelakaan" oleh Rustam dan Yusuf. Penyakit membuat Rustam ingin menebusnya: ia menyiapkan draf wasiat yang mengakui kesalahannya, menyisihkan bagian besar untuk keluarga Saleh, dan memangkas warisan Fadhil.',
      ] },
      { h: 'Motif sang ahli waris', p: [
        'Bagi Fadhil, pengakuan ayahnya berarti dua kehancuran sekaligus: nama dinasti Lasaleo dan kerajaan mutiara yang ia kira miliknya. Selagi badai mengurung pulau dan tak seorang pun bisa pergi, ia membungkam ayahnya sebelum tinta wasiat itu sempat kering.',
      ] },
      { h: 'Jebakan: si nama palsu', p: [
        '"Maya" memang menyimpan rahasia: ia anak Saleh, menyusup setahun dengan nama samaran. Dendam darah membuatnya tampak paling bersalah. Tapi ia datang untuk kebenaran, bukan kematian — membunuh Rustam justru mengubur pengakuan yang ia tunggu seumur hidup. Saat Rustam tewas, suaranya terekam di radio pulau, memohon bantuan ke daratan.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Maya di ruang radio (log 03.10–03.40). Yusuf basah kuyup mengikat perahu di dermaga, dan rahasia lama justru ingin ia tutup, bukan picu. Ratna tak beranjak dari kamar. Bram, sang pembeli, justru rugi besar bila Rustam mati — mutiaranya ikut lenyap. Dan badai memastikan tak ada pelaku dari luar.',
        'Tiga unsur bertemu pada satu orang: motif (wasiat dan rahasia yang mengancam warisannya), cara (pemberat selam dari gudang), dan kesempatan (jejak bot gudang→mercusuar). Itu Fadhil.',
      ] },
    ],
    rebuttals: {
      maya: 'Nama "Maya" palsu dan ia anak Saleh — itu membuatnya tampak paling pendendam. Tapi ia menyusup untuk membongkar kebenaran, bukan membunuh; kematian Rustam justru mengubur pengakuan yang ia tunggu. Log radio 03.10–03.40 merekam suaranya memanggil daratan saat Rustam tewas.',
      ratna: 'Ratna mewarisi banyak dan hubungan mereka dingin, tapi ia tak beranjak dari kamar utama sepanjang badai — tak ada jejak maupun darah yang menautkannya ke gudang atau mercusuar.',
      yusuf: 'Yusuf ikut menutupi kematian Saleh 18 tahun lalu — beban yang ingin ia kubur, bukan dipicu dengan membunuh. Malam itu ia basah kuyup mengikat perahu di dermaga. Rasa bersalah bukan motif membunuh tuannya.',
      bram: 'Bram berdebat soal mutiara yang tertunda — motif uang yang nyata. Tapi membunuh Rustam berarti mutiara dan uang mukanya lenyap selamanya; ia justru paling butuh sang patriark tetap hidup.',
    },
  },
}
