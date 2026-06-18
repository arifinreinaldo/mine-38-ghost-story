// Case 1 (free sample). All content original. Setting: Gunung Semeru.
export const mahameru = {
  id: 'mahameru',
  free: true,
  difficulty: 'Sedang',
  code: 'SM-2406',
  location: 'Gunung Semeru',
  scene: 'mountain',
  title: 'Maut di Mahameru',
  blurb:
    'Subuh di puncak Semeru, seorang pendaki ditemukan tewas. Kecelakaan atau pembunuhan?',
  disclaimer: {
    text: 'Kisah ini fiksi orisinal. Seluruh tokoh, nama, tempat, dan kejadian adalah rekaan.',
  },
  cover: {
    lead: 'Subuh, pukul 04.40. Seorang pendaki ditemukan tewas di pasir menjelang puncak. Polisi menutup kasusnya sebagai kecelakaan. Keluarganya tidak percaya.',
  },
  briefing: {
    paras: [
      'Tiga hari lalu, lima orang mendaki Gunung Semeru. Pada hari ketiga, dini hari, sebagian dari mereka melakukan summit attack dari pos terakhir, Kalimati, menembus dingin dan gelap menuju puncak Mahameru.',
      'Hanya satu yang tidak kembali. Arya Wibowo, 34 tahun — pendaki berpengalaman sekaligus pembuat konten dengan ratusan ribu pengikut — ditemukan tergeletak di lereng pasir curam, sekitar dua ratus meter di bawah puncak. Tim SAR menyimpulkan ia tergelincir dan jatuh. Kasus ditutup.',
      'Kakak korban menolak kesimpulan itu. Arya bukan pendaki sembarangan. Ia memanggil Anda.',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi keempat orang yang ada di gunung itu. Lalu ajukan satu tuduhan: jika ini memang pembunuhan, siapa pelakunya?',
  },
  victim: {
    init: 'AW',
    name: 'Arya Wibowo',
    meta: '34 tahun · pendaki & content creator',
    paras: [
      'Punya 490 ribu pengikut dan reputasi sebagai pendaki teknis yang teliti — orang yang memeriksa peralatannya dua kali sebelum berangkat. Bersama Dimas Pratama ia mendirikan merek perlengkapan gunung Rimbawan Gear.',
      'Ditemukan pukul 04.40 di lereng pasir di atas Kelik, headlamp dalam keadaan mati. Tidak ada luka selain akibat jatuh. Tim SAR mencatat: "tergelincir di medan pasir gelap".',
    ],
  },
  evidence: [
    {
      id: 'termos', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Termos kopi milik korban',
      summary: 'Ada residu obat penenang di sisa kopi.',
      detail:
        'Laboratorium menemukan jejak diazepam — obat penenang — pada termos Arya. Dalam dosis cukup, zat ini menimbulkan kantuk dan pusing berat: cukup untuk membuat seorang pendaki limbung di medan curam. Menurut keterangan, kopi untuk summit attack diseduh dan dibagikan oleh satu orang di tenda Kalimati malam itu.',
    },
    {
      id: 'headlamp', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Headlamp dalam keadaan mati',
      summary: 'Baterai habis — padahal Arya selalu pasang baterai baru.',
      detail:
        'Saat ditemukan, headlamp Arya mati total. Baterai di dalamnya sudah usang. Aneh: Arya dikenal selalu memasang baterai baru sebelum summit. Lebih aneh lagi, baterai usang itu berlabel stok internal \'Rimbawan Gear\' — bukan yang dijual bebas. Hanya orang dalam perusahaan yang memegang stok itu.',
    },
    {
      id: 'wa', icon: 'phone', tag: 'Ponsel Korban',
      title: 'Pesan terakhir ke Dimas',
      summary: 'Ancaman membubarkan usaha dan melapor ke polisi.',
      detail:
        'Dua hari sebelum pendakian, Arya mengirim pesan ke Dimas: ia menemukan selisih dana sponsor yang tidak bisa dijelaskan, berniat membubarkan Rimbawan Gear, dan akan melapor ke polisi bila uang itu tidak dikembalikan. Pesan dibalas singkat: \'kita bicara di gunung\'.',
    },
    {
      id: 'buff', icon: 'apparel', tag: 'Barang Bukti',
      title: 'Buff milik Sari di lereng atas',
      summary: 'Tersangkut di batu, beberapa meter dari jasad Arya.',
      herring: true,
      detail:
        'Sehelai buff bermotif khas milik Sari ditemukan tersangkut di batu, hanya beberapa meter dari tempat Arya jatuh — di lereng pasir atas yang menurut alibinya tak pernah ia datangi. Jika buff ini naik bersama pemiliknya, maka IG Story dari Kelik itu bohong, dan Sari justru berada tepat di lokasi kejadian. Untuk sesaat, semua mengarah pada sang kekasih.',
    },
    {
      id: 'posisi', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Posisi saat kejadian',
      summary: 'Hanya satu orang berada tepat di belakang Arya.',
      detail:
        'Di tanjakan pasir terakhir, Pak Bambang memimpin di depan membuka jalur, terpisah sekitar 30 meter. Sari dan Reza tidak ikut sampai sini. Yang berada persis di belakang Arya saat ia jatuh hanya satu orang: Dimas.',
    },
    {
      id: 'sari-ig', icon: 'social', tag: 'Media Sosial',
      title: 'IG Story Sari, 04.12',
      summary: 'Diunggah dari Kelik, jauh di bawah lokasi kejadian.',
      detail:
        'Sari mengunggah Story berisi keluhan pusing pukul 04.12, dengan penanda lokasi di Kelik — batas vegetasi, jauh di bawah lereng pasir tempat Arya jatuh pukul 04.40. Ia sudah dalam perjalanan turun saat kejadian. Tapi bila benar buff-nya ada di atas, salah satu dari dua hal ini pasti keliru.',
    },
    {
      id: 'reza-tl', icon: 'metadata', tag: 'Metadata',
      title: 'Timelapse sunrise Reza',
      summary: 'Direkam dari kamera statis di Kalimati.',
      detail:
        'Reza tidak ikut summit attack; ia memilih merekam timelapse matahari terbit. Metadata berkas: 03.50–05.30, dari kamera yang dipasang statis di camp Kalimati. Ia tidak pernah naik ke lereng atas malam itu.',
    },
    {
      id: 'foto', icon: 'photo', tag: 'Ponsel Korban',
      title: 'Foto terakhir di kamera Arya',
      summary: 'Pukul 02.50 — Arya mengenakan buff itu.',
      locked: true, twist: true,
      detail:
        'Di galeri ponsel Arya tersimpan selfie pukul 02.50 di Kalimati: Arya tersenyum, mengenakan buff Sari — yang dipinjamkannya agar Arya tak kedinginan sebelum ia sendiri memutuskan turun. Buff itu ikut naik bersama Arya, bukan bersama Sari. Petunjuk yang tadi memberatkan Sari justru membersihkannya. Dan di latar belakang foto, tertangkap satu detail kecil: tangan Dimas menyodorkan termos kopi.',
    },
  ],
  suspects: [
    {
      id: 'dimas', init: 'DP', name: 'Dimas Pratama', age: 36,
      role: 'Partner mendaki & co-founder Rimbawan Gear',
      statement:
        '“Arya tiba-tiba limbung di pasir. Aku coba raih, tapi gelap dan dia sudah meluncur ke bawah. Aku bukan apa-apa tanpa dia.”',
      motive: 'Arya mengancam membubarkan usaha mereka dan melaporkan dugaan penyelewengan dana sponsor.',
      alibi: "Mengaku berada di belakang Arya 'untuk menjaganya'. Tidak ada saksi lain di lereng itu.",
      interrogation: [
        { q: 'Siapa yang menyiapkan kopi summit malam itu?', a: 'Aku, seperti biasa. Itu rutinitas kami sebelum naik. Kenapa? Itu tidak ada hubungannya.' },
        { q: 'Apa isi pesan terakhir Arya kepadamu?', a: 'Ah, itu cuma salah paham soal pembukuan. Sudah kami selesaikan baik-baik.', requires: 'wa' },
        { q: 'Di mana posisimu saat Arya jatuh?', a: 'Tepat di belakangnya, menjaganya. Tapi gelap, dan semuanya terjadi begitu cepat.' },
        { q: 'Baterai headlamp Arya dari stok internal — kok bisa habis?', a: 'Mungkin dia lupa menggantinya. Aku tak mengurus headlamp orang lain. Lagipula, siapa yang menghitung baterai di tengah gunung?', requires: 'headlamp' },
      ],
    },
    {
      id: 'sari', init: 'SI', name: 'Sari Indrawati', age: 29,
      role: 'Pacar korban, sesama content creator',
      statement:
        '“Kami sempat ribut soal konten, ya. Tapi aku turun duluan, kepalaku mau pecah karena ketinggian.”',
      motive: 'Beredar kabar pertengkaran di antara mereka beberapa hari sebelumnya.',
      alibi: 'IG Story berpenanda lokasi Kelik pukul 04.12 — ia sudah turun saat kejadian.',
      interrogation: [
        { q: 'Kenapa kau turun lebih dulu?', a: 'Kepalaku seperti mau pecah. AMS. Aku tak sanggup lanjut ke atas.' },
        { q: 'Benarkah kalian bertengkar?', a: 'Soal jadwal konten, ya. Tapi aku mencintainya. Aku tak akan pernah menyakitinya.' },
        { q: 'Pukul berapa kau sampai Kelik?', a: 'Sebelum jam empat. Aku sempat unggah Story dari sana — kau bisa cek waktunya.' },
        { q: 'Buff-mu ditemukan di atas, dekat jasad. Bagaimana bisa?', a: 'Itu... astaga. Aku pinjamkan ke Arya sebelum turun — dia kedinginan, dan aku sudah mau balik. Periksa kameranya, pasti ada fotonya. Aku bersumpah tak pernah naik sejauh itu.', requires: 'buff', unlocks: 'foto' },
      ],
    },
    {
      id: 'reza', init: 'RM', name: 'Reza Mahendra', age: 31,
      role: 'Pendaki rival, diundang sponsor',
      statement:
        '“Kami memang sering ribut di internet. Tapi malam itu aku sibuk dengan kameraku, bukan dengan Arya.”',
      motive: 'Persaingan lama dan permusuhan terbuka di media sosial.',
      alibi: 'Tidak ikut summit. Timelapse-nya terekam dari camp Kalimati sepanjang malam.',
      interrogation: [
        { q: 'Kenapa kau tidak ikut summit?', a: 'Aku mau timelapse sunrise. Lagipula, naik bareng Arya? Tidak, terima kasih.' },
        { q: 'Kalian benar-benar bermusuhan?', a: 'Di internet, iya — itu konten. Di gunung, aku tak peduli soal dia.' },
        { q: 'Ada yang kau lihat dari camp?', a: 'Gelap. Cuma lampu-lampu headlamp jauh di atas. Lalu satu lampu padam, dan tak lama kemudian ribut.' },
      ],
    },
    {
      id: 'bambang', init: 'PB', name: 'Pak Bambang', age: 52,
      role: 'Porter & pemandu lokal dari Ranupani',
      statement:
        '“Saya di depan, membuka jalur. Saya dengar suara, menoleh — dia sudah jatuh. Saya yang lari turun memanggil tim SAR.”',
      motive: 'Sempat ada keluhan soal upah porter yang dianggap kurang.',
      alibi: 'Berada ~30 meter di depan korban dan menjadi orang pertama yang memberi alarm. Tak punya akses ke stok internal perusahaan.',
      interrogation: [
        { q: 'Apa yang kau lihat saat Arya jatuh?', a: 'Saya di depan. Dengar teriakan, menoleh — dia sudah meluncur. Cuma Pak Dimas yang dekat dengannya.' },
        { q: 'Benarkah soal upah porter?', a: 'Rezeki sudah ada yang mengatur. Saya tak pernah menyimpan dendam pada tamu.' },
        { q: 'Siapa yang membagikan kopi pagi itu?', a: 'Pak Dimas. Saya sendiri tak minum — perut saya tak cocok kopi.' },
      ],
    },
  ],
  timeline: [
    { t: '02.30', key: false, x: 'Summit attack dimulai dari Kalimati. Arya, Dimas, Sari, dan Pak Bambang berangkat. Reza memilih tinggal untuk merekam timelapse.' },
    { t: '02.50', key: false, x: 'Arya berfoto di Kalimati, mengenakan buff pinjaman dari Sari.' },
    { t: '~03.40', key: false, x: 'Sari kena gejala ketinggian (AMS) di Kelik dan memutuskan turun sendiri ke camp.' },
    { t: '04.12', key: false, x: 'Sari mengunggah IG Story dari Kelik.' },
    { t: '~04.30', key: true, x: 'Di lereng pasir terakhir: Bambang di depan, Arya di tengah, Dimas tepat di belakang.' },
    { t: '04.40', key: true, x: 'Arya jatuh. Headlamp-nya mati. Bambang menoleh, lalu lari turun memanggil SAR.' },
  ],
  solution: { killer: 'dimas', motive: ['wa'], means: ['termos', 'headlamp'], opportunity: ['posisi'] },
  reveal: {
    killerName: 'Dimas Pratama',
    sections: [
      { h: 'Pelakunya: Dimas Pratama', p: [
        'Arya tidak tergelincir. Ia dibunuh oleh partner usahanya sendiri.',
        'Pesan terakhir Arya membongkar motifnya: Arya menemukan selisih dana sponsor, hendak membubarkan Rimbawan Gear, dan mengancam melapor ke polisi. Bagi Dimas, itu berarti kehilangan segalanya sekaligus terancam pidana.',
        'Malam itu Dimas yang menyeduh dan membagikan kopi summit di Kalimati — kesempatan menyelipkan diazepam ke termos Arya. Pak Bambang tak ikut minum, dan Dimas mengakui sendiri bahwa ia yang membuat kopi. Dimas juga satu-satunya yang punya akses ke stok baterai internal perusahaan, yang dipakainya menukar baterai headlamp Arya dengan yang sudah habis.',
        'Hasilnya: di lereng pasir curam, dalam gelap total, dengan tubuh yang mengantuk berat, Arya kehilangan keseimbangan — persis seperti "kecelakaan" yang diharapkan Dimas. Dan ketika itu terjadi, hanya Dimas yang berada di belakangnya.',
      ] },
      { h: 'Jebakan: buff Sari', p: [
        'Buff Sari yang ditemukan di lereng atas sempat membuatnya tampak paling bersalah — seolah alibinya bohong. Padahal foto pukul 02.50 menunjukkan Arya yang meminjam dan memakainya. Petunjuk yang paling memberatkan justru jadi yang membebaskan. Pembunuh sungguhan tak pernah meninggalkan jejak semencolok itu.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Sari sudah turun ke Kelik saat kejadian — IG Story-nya pukul 04.12 membuktikannya. Reza tidak pernah ikut summit; timelapse-nya terekam dari camp sepanjang malam. Pak Bambang berada di depan dan justru menjadi orang yang memberi alarm — dan ia tak punya akses ke stok baterai perusahaan maupun kendali atas kopi summit.',
        'Tiga unsur hanya bertemu pada satu orang: motif (pesan ancaman), cara (kopi dan baterai), dan kesempatan (posisi di belakang Arya). Itu Dimas.',
      ] },
    ],
    rebuttals: {
      sari: 'Buff itu memang miliknya — tapi foto pukul 02.50 membuktikan Arya yang memakainya, dipinjami sebelum Sari turun. IG Story 04.12 dari Kelik menutup celah waktu. Sari memang sempat menjadi tersangka paling kuat; justru di situ jebakannya.',
      reza: 'Reza tak pernah menyentuh lereng atas. Timelapse-nya terekam dari kamera statis di Kalimati, 03.50–05.30, tanpa jeda. Permusuhan mereka nyata, tapi hanya di layar.',
      bambang: 'Pak Bambang berada ~30 meter di depan dan menjadi orang pertama yang berteriak memanggil SAR. Ia tak minum kopi summit dan tak punya akses ke stok baterai internal perusahaan. Tak satu pun dari tiga unsur itu menempel padanya.',
    },
  },
}
