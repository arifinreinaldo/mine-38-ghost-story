// All case content is original. Setting: Gunung Semeru (Mahameru), Indonesia.

export const KILLER = "dimas";

export const evidence = [
  {
    id: "termos",
    tag: "Lab Forensik",
    title: "Termos kopi milik korban",
    summary: "Ada residu obat penenang di sisa kopi.",
    detail:
      "Laboratorium menemukan jejak diazepam — obat penenang — pada termos Arya. Dalam dosis cukup, zat ini menimbulkan kantuk dan pusing berat: cukup untuk membuat seorang pendaki limbung di medan curam. Menurut keterangan, kopi untuk summit attack diseduh dan dibagikan oleh satu orang di tenda Kalimati malam itu.",
  },
  {
    id: "headlamp",
    tag: "Barang Bukti",
    title: "Headlamp dalam keadaan mati",
    summary: "Baterai habis — padahal Arya selalu pasang baterai baru.",
    detail:
      "Saat ditemukan, headlamp Arya mati total. Baterai di dalamnya sudah usang. Aneh: Arya dikenal selalu memasang baterai baru sebelum summit. Lebih aneh lagi, baterai usang itu berlabel stok internal 'Rimbawan Gear' — bukan yang dijual bebas. Hanya orang dalam perusahaan yang memegang stok itu.",
  },
  {
    id: "wa",
    tag: "Ponsel Korban",
    title: "Pesan terakhir ke Dimas",
    summary: "Ancaman membubarkan usaha dan melapor ke polisi.",
    detail:
      "Dua hari sebelum pendakian, Arya mengirim pesan ke Dimas: ia menemukan selisih dana sponsor yang tidak bisa dijelaskan, berniat membubarkan Rimbawan Gear, dan akan melapor ke polisi bila uang itu tidak dikembalikan. Pesan dibalas singkat: 'kita bicara di gunung'.",
  },
  {
    id: "posisi",
    tag: "Rekonstruksi",
    title: "Posisi saat kejadian",
    summary: "Hanya satu orang berada tepat di belakang Arya.",
    detail:
      "Di tanjakan pasir terakhir, Pak Bambang memimpin di depan membuka jalur, terpisah sekitar 30 meter. Sari dan Reza tidak ikut sampai sini. Yang berada persis di belakang Arya saat ia jatuh hanya satu orang: Dimas.",
  },
  {
    id: "sari-ig",
    tag: "Media Sosial",
    title: "IG Story Sari, 04.12",
    summary: "Diunggah dari Kelik, jauh di bawah lokasi kejadian.",
    detail:
      "Sari mengunggah Story berisi keluhan pusing pukul 04.12, dengan penanda lokasi di Kelik — batas vegetasi, jauh di bawah lereng pasir tempat Arya jatuh pukul 04.40. Ia sudah dalam perjalanan turun saat kejadian.",
  },
  {
    id: "reza-tl",
    tag: "Metadata",
    title: "Timelapse sunrise Reza",
    summary: "Direkam dari kamera statis di Kalimati.",
    detail:
      "Reza tidak ikut summit attack; ia memilih merekam timelapse matahari terbit. Metadata berkas: 03.50–05.30, dari kamera yang dipasang statis di camp Kalimati. Ia tidak pernah naik ke lereng atas malam itu.",
  },
];

export const suspects = [
  {
    id: "dimas",
    init: "DP",
    name: "Dimas Pratama",
    age: 36,
    role: "Partner mendaki & co-founder Rimbawan Gear",
    statement:
      "\u201CArya tiba-tiba limbung di pasir. Aku coba raih, tapi gelap dan dia sudah meluncur ke bawah. Aku bukan apa-apa tanpa dia.\u201D",
    motive:
      "Arya mengancam membubarkan usaha mereka dan melaporkan dugaan penyelewengan dana sponsor.",
    alibi:
      "Mengaku berada di belakang Arya 'untuk menjaganya'. Tidak ada saksi lain di lereng itu.",
    interrogation: [
      { q: "Siapa yang menyiapkan kopi summit malam itu?", a: "Aku, seperti biasa. Itu rutinitas kami sebelum naik. Kenapa? Itu tidak ada hubungannya." },
      { q: "Apa isi pesan terakhir Arya kepadamu?", a: "Ah, itu cuma salah paham soal pembukuan. Sudah kami selesaikan baik-baik." },
      { q: "Di mana posisimu saat Arya jatuh?", a: "Tepat di belakangnya, menjaganya. Tapi gelap, dan semuanya terjadi begitu cepat." },
    ],
  },
  {
    id: "sari",
    init: "SI",
    name: "Sari Indrawati",
    age: 29,
    role: "Pacar korban, sesama content creator",
    statement:
      "\u201CKami sempat ribut soal konten, ya. Tapi aku turun duluan, kepalaku mau pecah karena ketinggian.\u201D",
    motive: "Beredar kabar pertengkaran di antara mereka beberapa hari sebelumnya.",
    alibi:
      "IG Story berpenanda lokasi Kelik pukul 04.12 — ia sudah turun saat kejadian.",
    interrogation: [
      { q: "Kenapa kau turun lebih dulu?", a: "Kepalaku seperti mau pecah. AMS. Aku tak sanggup lanjut ke atas." },
      { q: "Benarkah kalian bertengkar?", a: "Soal jadwal konten, ya. Tapi aku mencintainya. Aku tak akan pernah menyakitinya." },
      { q: "Pukul berapa kau sampai Kelik?", a: "Sebelum jam empat. Aku sempat unggah Story dari sana — kau bisa cek waktunya." },
    ],
  },
  {
    id: "reza",
    init: "RM",
    name: "Reza Mahendra",
    age: 31,
    role: "Pendaki rival, diundang sponsor",
    statement:
      "\u201CKami memang sering ribut di internet. Tapi malam itu aku sibuk dengan kameraku, bukan dengan Arya.\u201D",
    motive: "Persaingan lama dan permusuhan terbuka di media sosial.",
    alibi:
      "Tidak ikut summit. Timelapse-nya terekam dari camp Kalimati sepanjang malam.",
    interrogation: [
      { q: "Kenapa kau tidak ikut summit?", a: "Aku mau timelapse sunrise. Lagipula, naik bareng Arya? Tidak, terima kasih." },
      { q: "Kalian benar-benar bermusuhan?", a: "Di internet, iya — itu konten. Di gunung, aku tak peduli soal dia." },
      { q: "Ada yang kau lihat dari camp?", a: "Gelap. Cuma lampu-lampu headlamp jauh di atas. Lalu satu lampu padam, dan tak lama kemudian ribut." },
    ],
  },
  {
    id: "bambang",
    init: "PB",
    name: "Pak Bambang",
    age: 52,
    role: "Porter & pemandu lokal dari Ranupani",
    statement:
      "\u201CSaya di depan, membuka jalur. Saya dengar suara, menoleh — dia sudah jatuh. Saya yang lari turun memanggil tim SAR.\u201D",
    motive: "Sempat ada keluhan soal upah porter yang dianggap kurang.",
    alibi:
      "Berada ~30 meter di depan korban dan menjadi orang pertama yang memberi alarm. Tak punya akses ke stok internal perusahaan.",
    interrogation: [
      { q: "Apa yang kau lihat saat Arya jatuh?", a: "Saya di depan. Dengar teriakan, menoleh — dia sudah meluncur. Cuma Pak Dimas yang dekat dengannya." },
      { q: "Benarkah soal upah porter?", a: "Rezeki sudah ada yang mengatur. Saya tak pernah menyimpan dendam pada tamu." },
      { q: "Siapa yang membagikan kopi pagi itu?", a: "Pak Dimas. Saya sendiri tak minum — perut saya tak cocok kopi." },
    ],
  },
];

export const timeline = [
  { t: "02.30", key: false, x: "Summit attack dimulai dari Kalimati. Arya, Dimas, Sari, dan Pak Bambang berangkat. Reza memilih tinggal untuk merekam timelapse." },
  { t: "~03.40", key: false, x: "Sari kena gejala ketinggian (AMS) di Kelik dan memutuskan turun sendiri ke camp." },
  { t: "04.12", key: false, x: "Sari mengunggah IG Story dari Kelik." },
  { t: "~04.30", key: true, x: "Di lereng pasir terakhir: Bambang di depan, Arya di tengah, Dimas tepat di belakang." },
  { t: "04.40", key: true, x: "Arya jatuh. Headlamp-nya mati. Bambang menoleh, lalu lari turun memanggil SAR." },
];
