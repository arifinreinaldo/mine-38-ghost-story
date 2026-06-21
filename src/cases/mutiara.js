import { L } from '../i18n/L'

// Case 3 (gated). Original closed-circle mystery inspired by Indonesia's
// "false identity / infiltration for revenge" con archetype.
export const mutiara = {
  id: 'mutiara',
  free: false,
  difficulty: 'Mudah',
  code: 'PM-0226',
  location: L('Pulau Mutiara, Sulawesi', 'Mutiara Island, Sulawesi'),
  scene: 'coast',
  title: L('Maut di Pulau Mutiara', 'Death on Mutiara Island'),
  blurb: L(
    'Badai mengurung satu keluarga di pulau mutiara mereka. Saat fajar, sang patriark tewas di kaki mercusuar — dan tak ada perahu yang datang atau pergi.',
    `A storm seals one family on their pearl island. At dawn, the patriarch lies dead at the foot of the lighthouse — and not a single boat came or went.`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi. Terinspirasi dari fenomena penipuan identitas — seseorang memakai jati diri palsu untuk menyusup dan membalas dendam — yang sempat viral di Indonesia. Seluruh tokoh, nama, tempat, dan kejadian adalah rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
      `This is a work of fiction. It is inspired by the false-identity phenomenon — someone assuming a fabricated self to infiltrate and take revenge — that once went viral in Indonesia. All characters, names, places, and events are invented; any resemblance to real people or events is coincidental.`
    ),
    source: {
      label: L('Inspirasi: "Kebohongan Plot Twist di Indonesia" (YouTube)', `Inspiration: "Kebohongan Plot Twist di Indonesia" (YouTube)`),
      url: 'https://www.youtube.com/watch?v=_wkJoSaVwJM',
    },
  },
  cover: {
    lead: L(
      'Tiga generasi dinasti mutiara berkumpul di pulau mereka saat musim badai. Subuh itu, sang patriark tewas — dan pembunuhnya terkurung bersama yang lain.',
      `Three generations of a pearl dynasty gather on their island as storm season closes in. That dawn, the patriarch lies dead — and his killer is trapped here with everyone else.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Keluarga Lasaleo menguasai tambak mutiara terbaik di pesisir ini selama tiga generasi. Setiap awal musim badai, mereka berkumpul di rumah induk di Pulau Mutiara — pulau kecil milik keluarga, hanya dijangkau perahu.',
        `For three generations the Lasaleo family has owned the finest pearl beds on this coast. At the start of every storm season they gather at the main house on Mutiara Island — a small family-owned island reachable only by boat.`
      ),
      L(
        'Malam itu badai jauh lebih ganas dari ramalan. Gelombang memutus tambatan; tak ada perahu yang bisa keluar atau masuk hingga subuh. Saat langit terang, Haji Rustam Lasaleo, 67, sang patriark, ditemukan tewas di kaki tangga mercusuar. Polisi pesisir mencatat: terpeleset di anak tangga basah.',
        `That night the storm proved far fiercer than forecast. The waves tore the moorings loose; no boat could come or go until dawn. As the sky brightened, Haji Rustam Lasaleo, 67, the patriarch, was found dead at the foot of the lighthouse stairs. The coastal police recorded it: slipped on a wet step.`
      ),
      L(
        'Tapi tak ada perahu yang datang malam itu. Bila ini pembunuhan, pelakunya terkurung di pulau ini. Keluarga menolak kata "kecelakaan" dan memanggil Anda.',
        `But no boat came that night. If this was murder, the killer is sealed on this island. The family refuses the word "accident" and has called you in.`
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi kelima orang yang terkurung di pulau. Lalu susun pembuktian — motif, cara, kesempatan. Di pulau ini, bahkan nama pun bisa palsu.',
      `Examine every piece of evidence. Question the five people trapped on the island. Then build the case — motive, means, opportunity. On this island, even a name can be false.`
    ),
  },
  victim: {
    init: 'RL',
    name: 'Haji Rustam Lasaleo',
    meta: L('67 tahun · patriark dinasti mutiara Lasaleo', '67 · patriarch of the Lasaleo pearl dynasty'),
    paras: [
      L(
        'Membangun kerajaan mutiara dari satu sampan; dikenal keras dan disegani. Belakangan sakit-sakitan, ditemani seorang perawat pribadi setahun terakhir. Konon ia mulai bicara soal "menebus dosa lama" sebelum ajal.',
        `He built a pearl empire from a single dugout; known as hard and feared in equal measure. Of late he had grown sickly, attended by a private nurse this past year. They say he began speaking of "atoning for an old sin" before the end.`
      ),
      L(
        'Ditemukan subuh di kaki tangga mercusuar, tempat ia biasa memantau tambak. Luka di kepalanya dianggap akibat benturan tangga — meski air pasang malam itu tak setinggi anak tangga tempat ia tergeletak.',
        `Found at dawn at the foot of the lighthouse stairs, where he used to watch over the pearl beds. The wound to his head was put down to striking the steps — though that night's tide never rose as high as the step where he lay.`
      ),
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Luka di kepala Rustam', `The wound to Rustam's head`),
      summary: L('Bentuk luka tak cocok dengan benturan tangga.', `The wound's shape doesn't match a fall on the stairs.`),
      detail: L(
        'Luka di kepala Rustam lonjong dan dalam — dari satu pukulan benda tumpul berat, bukan benturan berulang khas orang menggelinding di tangga. Ia dipukul lebih dulu, baru direbahkan di kaki mercusuar. Tangga basah itu hanya panggung.',
        `The wound to Rustam's head is oval and deep — from a single blow with a heavy blunt object, not the repeated knocks of a man tumbling down stairs. He was struck first, then laid out at the foot of the lighthouse. The wet stairs were merely a stage.`
      ),
    },
    {
      id: 'pasang', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Ketinggian air pasang', 'The height of the tide'),
      summary: L('Air tak mencapai anak tangga tempat jasad ditemukan.', 'The water never reached the step where the body was found.'),
      detail: L(
        'Rekonstruksi pasang malam itu menunjukkan air laut berhenti dua anak tangga di bawah posisi jasad. Pasir basah di sepatu Rustam justru berasal dari jalur dermaga, bukan tangga. Tubuhnya dipindah setelah ia tewas.',
        `A reconstruction of that night's tide shows the sea stopped two steps below where the body lay. The wet sand on Rustam's shoes came from the path to the jetty, not the stairs. His body was moved after he was dead.`
      ),
    },
    {
      id: 'pemberat', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Pemberat selam yang hilang', 'A missing diving weight'),
      summary: L('Satu pemberat timah lenyap dari gudang; ada noda darah.', 'One lead weight vanished from the shed; there is a bloodstain.'),
      detail: L(
        'Dari rak alat selam, satu pemberat timah hilang. Di lantai gudang tambak ada tetesan darah samar yang cocok dengan golongan darah Rustam. Pemberat seberat itu, diayunkan sekali, sanggup menimbulkan luka tunggal yang dalam.',
        `One lead weight is gone from the diving rack. On the floor of the pearl-farm shed there are faint drops of blood matching Rustam's blood type. A weight that heavy, swung once, is enough to leave a single deep wound.`
      ),
    },
    {
      id: 'logbuku', icon: 'ledger', tag: L('Dokumen', 'Document'),
      title: L('Logbuku selam lama', 'An old diving logbook'),
      summary: L('Kematian penyelam Saleh, 18 tahun lalu — dipaksa menyelam saat badai.', 'The death of the diver Saleh, 18 years ago — forced to dive in a storm.'),
      detail: L(
        'Logbuku tua mencatat kematian Saleh, penyelam muda, 18 tahun silam: dikirim mengambil mutiara langka saat laut ganas, lalu pencariannya dihentikan terburu-buru. Yang mengesahkan "kecelakaan" itu: Rustam dan Yusuf. Sebuah rahasia yang dikubur keluarga.',
        `The old logbook records the death of Saleh, a young diver, 18 years past: sent to fetch a rare pearl while the sea raged, then the search for him called off in haste. Those who certified it an "accident": Rustam and Yusuf. A secret the family buried.`
      ),
    },
    {
      id: 'identitas', icon: 'photo', tag: L('Temuan', 'Discovery'),
      title: L('Dokumen tersembunyi Maya', `Maya's hidden documents`),
      summary: L('Akta & foto: "Maya" sebenarnya anak Saleh.', `Certificate & photos: "Maya" is in fact Saleh's child.`),
      herring: true,
      detail: L(
        'Di koper Maya tersimpan akta lahir, foto lama, dan kliping berita: "Maya Sari" adalah nama samaran. Ia anak Saleh — penyelam yang tewas itu. Setahun ini ia menyusup sebagai perawat untuk membongkar kebenaran. Sekilas, tak ada motif sekuat dendam darah; semua mata beralih padanya.',
        `In Maya's suitcase are a birth certificate, old photographs, and news clippings: "Maya Sari" is an assumed name. She is Saleh's child — the diver who died. For the past year she has infiltrated the household as a nurse to uncover the truth. At a glance, no motive runs deeper than a blood debt; every eye turns to her.`
      ),
    },
    {
      id: 'radio', icon: 'phone', tag: L('Metadata', 'Metadata'),
      title: L('Log radio panggil daratan', 'Radio log of calls to the mainland'),
      summary: L('Panggilan darurat 03.10–03.40 dari ruang radio.', 'Emergency calls 03:10–03:40 from the radio room.'),
      detail: L(
        'Log perangkat radio mencatat upaya panggilan ke pos pesisir daratan, 03.10–03.40 — persis rentang perkiraan waktu kematian. Suara pemanggil seorang perempuan, memohon bantuan medis untuk Rustam. Siapa pun yang di ruang radio saat itu, tak mungkin berada di mercusuar.',
        `The radio set's log records attempts to reach the mainland coastal post, 03:10–03:40 — exactly the estimated window of death. The caller's voice is a woman's, begging for medical help for Rustam. Whoever was in the radio room then could not have been at the lighthouse.`
      ),
    },
    {
      id: 'sepatu', icon: 'recon', tag: L('Barang Bukti', 'Evidence'),
      title: L('Jejak bot gudang → mercusuar', 'Boot tracks: shed → lighthouse'),
      summary: L('Jejak basah berlumpur tambak — hanya satu orang.', 'Wet tracks of pearl-farm mud — only one person.'),
      detail: L(
        'Jejak bot berlumpur tambak membentang dari gudang alat selam menuju mercusuar dan kembali — satu-satunya jejak yang melawan arah badai malam itu. Ukuran dan pola solnya cocok dengan bot kerja Fadhil, bukan sepatu tamu atau sandal rumah.',
        `Tracks of boots caked in pearl-farm mud run from the diving shed to the lighthouse and back — the only trail set against the teeth of the storm that night. Their size and sole pattern match Fadhil's work boots, not a guest's shoes or house sandals.`
      ),
    },
    {
      id: 'badai', icon: 'metadata', tag: L('Metadata', 'Metadata'),
      title: L('Catatan cuaca & tambatan', 'Weather & mooring records'),
      summary: L('Tak ada perahu keluar/masuk sejak pukul 19.00.', 'No boat in or out since 19:00.'),
      detail: L(
        'Catatan syahbandar kecil pulau: gelombang memutus dua tambatan pukul 19.00; tak ada perahu yang berani menyeberang hingga subuh. Lingkaran tertutup — siapa pun pelakunya, ia bermalam di pulau ini.',
        `The island's small harbormaster log: the waves tore two moorings loose at 19:00; no boat dared make the crossing until dawn. A closed circle — whoever the killer is, they spent the night on this island.`
      ),
    },
    {
      id: 'nota', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Nota sengketa mutiara', 'A disputed pearl invoice'),
      summary: L('Bram menuntut mutiara langka yang gagal diserahkan.', 'Bram is demanding the rare pearl that was never delivered.'),
      detail: L(
        'Nota dan pesan keras dari Bram: ia membayar uang muka besar untuk satu mutiara langka yang tak kunjung diserahkan Rustam. Malam itu mereka beradu mulut. Motif uang yang nyata — tapi membunuh Rustam justru mengubur mutiara dan uangnya selamanya.',
        `An invoice and a sharp message from Bram: he paid a large deposit for a rare pearl that Rustam kept failing to hand over. That night the two of them quarreled. A real money motive — yet killing Rustam buries both the pearl and his money forever.`
      ),
    },
    {
      id: 'wasiat', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Draf wasiat baru', 'A draft of a new will'),
      summary: L('Rustam hendak mengubah ahli waris & menebus "dosa lama".', `Rustam meant to change his heirs & atone for an "old sin."`),
      locked: true, twist: true,
      detail: L(
        'Tersembunyi di laci mercusuar: draf wasiat yang belum ditandatangani, bertanggal pekan ini. Rustam berniat menyisihkan bagian besar untuk "keluarga Saleh", mengakui kesalahan masa lalunya, dan memangkas warisan Fadhil. Bila draf ini sah, kerajaan mutiara — dan nama baik keluarga — runtuh di tangan Fadhil.',
        `Hidden in a drawer in the lighthouse: an unsigned draft of a will, dated this very week. Rustam intended to set aside a large share for "the Saleh family," to admit his past wrongdoing, and to cut Fadhil's inheritance. If this draft were to stand, the pearl empire — and the family's good name — collapses in Fadhil's hands.`
      ),
    },
  ],
  suspects: [
    {
      id: 'maya', init: 'MS', name: 'Maya Sari', age: 28,
      role: L('Perawat pribadi Rustam (1 tahun)', `Rustam's private nurse (1 year)`),
      statement: L('“Aku merawatnya tiap hari. Aku tahu kalian akan menatapku begitu — orang baru selalu paling mudah dicurigai.”', `“I cared for him every day. I knew you'd all look at me like this — the newcomer is always the easiest to suspect.”`),
      motive: L('Orang luar yang paling dekat dengan korban; masa lalunya kabur.', `The outsider closest to the victim; her past is murky.`),
      alibi: L('Mengaku berada di ruang radio mencoba memanggil daratan saat kejadian.', 'Claims she was in the radio room trying to reach the mainland when it happened.'),
      interrogation: [
        { q: L('Di mana kau saat Rustam tewas?', 'Where were you when Rustam died?'), a: L('Di ruang radio, mencoba memanggil daratan untuk bantuan medis. Cek log-nya — ada suaraku di sana, lewat jam tiga.', `In the radio room, trying to call the mainland for medical help. Check the log — my voice is on it, just past three.`) },
        { q: L('Siapa kau sebenarnya?', 'Who are you, really?'), a: L('Maya... itu nama yang kupakai. Ya, aku anak Saleh. Aku datang untuk kebenaran, bukan untuk darah. Membunuhnya justru mengubur semuanya.', `Maya... that's the name I took. Yes, I am Saleh's child. I came for the truth, not for blood. Killing him would only have buried everything.`), requires: 'identitas' },
        { q: L('Kau membenci Rustam?', 'Did you hate Rustam?'), a: L('Dulu. Tapi setahun merawatnya, ia mulai menyesal. Aku ingin ia mengakuinya hidup-hidup, bukan mati membawa rahasia.', 'Once. But over a year of caring for him, he began to repent. I wanted him to confess it alive, not die carrying the secret.') },
      ],
    },
    {
      id: 'fadhil', init: 'FL', name: 'Fadhil Lasaleo', age: 41,
      role: L('Anak sulung & ahli waris, mengelola bisnis', 'Eldest son & heir, runs the business'),
      statement: L('“Ayah keras kepala, naik ke mercusuar dalam badai. Sudah kularang. Sekarang semua menuding karena akulah yang mewarisi.”', `“Father was stubborn — climbing the lighthouse in a storm. I told him not to. Now everyone points at me because I'm the one who inherits.”`),
      motive: L('Tampak sebagai ahli waris yang berduka. Alasannya jelas hanya bila wasiat dibahas.', 'Appears to be the grieving heir. His reason becomes clear only once the will comes up.'),
      alibi: L('Mengaku di gudang tambak mengamankan peralatan dari badai; tanpa saksi tetap.', 'Claims he was in the pearl-farm shed securing equipment against the storm; no firm witness.'),
      interrogation: [
        { q: L('Di mana kau saat puncak badai?', 'Where were you at the height of the storm?'), a: L('Di gudang tambak, mengamankan alat. Sendirian. Siapa yang mau kuajak di tengah badai begitu?', 'In the pearl-farm shed, securing the gear. Alone. Who would I have brought along in a storm like that?') },
        { q: L('Kau tahu ayahmu hendak mengubah wasiat?', 'Did you know your father meant to change his will?'), a: L('Wasiat? Tidak. Ayah memang sering melantur soal "menebus dosa" belakangan. Itu cuma igauan orang sakit.', `A will? No. Father had been rambling about "atoning for sins" lately, true. Just the ravings of a sick man.`), requires: 'logbuku', unlocks: 'wasiat' },
        { q: L('Jejak bot gudang → mercusuar itu milik siapa?', 'Whose are the boot tracks from the shed to the lighthouse?'), a: L('Banyak yang pakai bot di pulau ini. Jangan asal tuduh. Aku mengamankan alat, wajar bolak-balik gudang.', 'Plenty of people wear boots on this island. Don\'t throw accusations around. I was securing the gear — of course I went back and forth to the shed.'), requires: 'sepatu' },
      ],
    },
    {
      id: 'ratna', init: 'RA', name: 'Ratna Lasaleo', age: 39,
      role: L('Istri kedua Rustam', `Rustam's second wife`),
      statement: L('“Hubungan kami dingin, kuakui. Tapi dingin bukan berarti membunuh.”', '“Our marriage was cold, I admit it. But cold is not the same as murderous.”'),
      motive: L('Pernikahan kedua yang dingin; bagian waris yang besar.', 'A cold second marriage; a large share of the inheritance.'),
      alibi: L('Mengaku di kamar utama sepanjang badai.', 'Claims she was in the master bedroom throughout the storm.'),
      interrogation: [
        { q: L('Di mana kau sepanjang badai?', 'Where were you all through the storm?'), a: L('Di kamar. Aku takut badai, tak keluar sama sekali.', 'In my room. I am afraid of storms; I never went out at all.') },
        { q: L('Soal warisan, bagianmu besar?', 'About the inheritance — is your share large?'), a: L('Aku istrinya, wajar diperhitungkan. Tapi aku tak butuh ia mati untuk itu.', `I was his wife; naturally I'm accounted for. But I didn't need him dead for that.`) },
        { q: L('Bagaimana hubunganmu dengan Rustam?', 'How were things between you and Rustam?'), a: L('Dingin. Kami menikah karena banyak hal, cinta bukan salah satunya. Tapi aku membiarkannya, bukan membunuhnya.', 'Cold. We married for many reasons, love not among them. But I let him be — I did not kill him.') },
      ],
    },
    {
      id: 'yusuf', init: 'YU', name: 'Yusuf', age: 58,
      role: L('Juru selam senior & mandor (30 tahun)', 'Senior diver & foreman (30 years)'),
      statement: L('“Saya mengabdi pada keluarga ini sejak muda. Beban masa lalu saya bawa — tapi tak akan saya tambah dengan darah tuan saya.”', `“I have served this family since I was young. I carry the burden of the past — but I would not add my master's blood to it.”`),
      motive: L('Ikut menutupi kematian Saleh; bisa terseret bila rahasia terbongkar.', `Helped cover up Saleh's death; could be dragged in if the secret breaks.`),
      alibi: L('Mengaku memeriksa tambatan perahu di dermaga saat badai.', 'Claims he was checking the boat moorings at the jetty during the storm.'),
      interrogation: [
        { q: L('Kau tahu soal kematian Saleh?', `Do you know about Saleh's death?`), a: L('Saya ikut menandatangani laporan itu. Beban yang saya pikul 18 tahun. Tapi saya tak akan menambah dosa dengan membunuh.', 'I signed that report too. A burden I have carried for 18 years. But I would not add to my sins by killing.'), requires: 'logbuku' },
        { q: L('Di mana kau saat kejadian?', 'Where were you when it happened?'), a: L('Di dermaga, mengikat ulang perahu yang lepas. Basah kuyup semalaman. Tanya siapa saja yang lihat senter saya di sana.', 'At the jetty, retying the boats that had broken loose. Soaked through all night. Ask anyone who saw my torch out there.') },
        { q: L('Kenapa Rustam tiba-tiba menyesal?', 'Why did Rustam suddenly repent?'), a: L('Penyakit membuat orang menengok ke belakang. Ia ingin bersih sebelum menghadap. Dan itu... membuat sebagian orang gusar.', 'Illness makes a man look back. He wanted to be clean before he met his Maker. And that... unsettled some people.') },
      ],
    },
    {
      id: 'bram', init: 'BW', name: 'Bram Wijaya', age: 46,
      role: L('Pembeli permata dari kota, terjebak badai', 'A gem buyer from the city, stranded by the storm'),
      statement: L('“Aku datang berdagang, lalu badai mengurungku. Salahku apa selain berada di tempat dan waktu yang keliru?”', `“I came to trade, and the storm shut me in. What am I guilty of besides being in the wrong place at the wrong time?”`),
      motive: L('Sengketa pembayaran besar atas mutiara langka yang tak kunjung diserahkan.', 'A large payment dispute over a rare pearl that was never delivered.'),
      alibi: L('Terjebak di pulau; mengaku menunggu badai reda di ruang tamu.', 'Stranded on the island; claims he waited out the storm in the sitting room.'),
      interrogation: [
        { q: L('Apa urusanmu dengan Rustam?', 'What was your business with Rustam?'), a: L('Bisnis. Aku bayar muka besar untuk satu mutiara langka. Ia menunda terus. Malam itu kami berdebat, ya.', 'Business. I paid a large deposit for a rare pearl. He kept stalling. That night we argued, yes.') },
        { q: L('Kau benar-benar terjebak di pulau?', 'Were you really trapped on the island?'), a: L('Badai mengurung kami semua. Aku orang kota — mana bisa menyeberang laut segila itu.', 'The storm shut us all in. I am a city man — how could I cross a sea gone that mad?'), requires: 'badai' },
        { q: L('Kau untung dari kematiannya?', 'Did you gain from his death?'), a: L('Justru rugi. Mutiaraku ikut mati bersamanya. Orang mati tak bisa menyerahkan apa-apa.', 'Quite the opposite — I lost. My pearl died with him. A dead man can hand over nothing.') },
      ],
    },
  ],
  timeline: [
    { t: L('19.00', '19:00'), key: false, x: L('Gelombang memutus tambatan; tak ada perahu keluar/masuk hingga subuh.', 'The waves tear the moorings loose; no boat in or out until dawn.') },
    { t: L('21.00', '21:00'), key: false, x: L('Makan malam keluarga tegang; Rustam menyinggung soal "menebus dosa lama".', `A tense family dinner; Rustam alludes to "atoning for an old sin."`) },
    { t: L('22.30', '22:30'), key: false, x: L('Bram berdebat dengan Rustam soal mutiara yang tertunda.', 'Bram argues with Rustam over the delayed pearl.') },
    { t: L('03.10', '03:10'), key: true, x: L('Suara perempuan memanggil daratan dari ruang radio (log 03.10–03.40).', `A woman's voice calls the mainland from the radio room (log 03:10–03:40).`) },
    { t: L('~03.20', '~03:20'), key: true, x: L('Seseorang masuk-keluar gudang alat selam (jejak basah berlumpur).', 'Someone goes in and out of the diving shed (wet, muddy tracks).') },
    { t: L('~03.30', '~03:30'), key: true, x: L('Rustam tewas; tubuhnya kemudian berada di kaki tangga mercusuar.', 'Rustam dies; his body later lies at the foot of the lighthouse stairs.') },
    { t: L('05.40', '05:40'), key: false, x: L('Jasad ditemukan; dianggap terpeleset di tangga basah.', 'The body is found; taken to be a slip on the wet stairs.') },
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
      { h: L('Pelakunya: Fadhil Lasaleo', 'The killer: Fadhil Lasaleo'), p: [
        L('Rustam tidak terpeleset. Ia dipukul satu kali dengan pemberat selam, lalu direbahkan di kaki mercusuar agar tampak jatuh dalam badai.', 'Rustam did not slip. He was struck once with a diving weight, then laid out at the foot of the lighthouse to look as if he had fallen in the storm.'),
        L(
          'Luka tunggal yang dalam itu tak cocok dengan orang menggelinding di tangga; air pasang pun tak pernah mencapai anak tangga tempat jasadnya. Tetes darah Rustam ada di gudang alat selam — tempat satu pemberat timah lenyap — dan jejak bot berlumpur membentang dari gudang ke mercusuar dan kembali. Bot itu milik Fadhil.',
          `That single deep wound does not fit a man tumbling down stairs; nor did the tide ever reach the step where his body lay. Drops of Rustam's blood are in the diving shed — where one lead weight has vanished — and muddy boot tracks run from the shed to the lighthouse and back. Those boots are Fadhil's.`
        ),
      ] },
      { h: L('Rahasia yang dikubur', 'The buried secret'), p: [
        L(
          'Delapan belas tahun lalu, Rustam mengirim penyelam muda bernama Saleh mengambil mutiara langka saat laut ganas, lalu menghentikan pencariannya terburu-buru. Kematian itu disahkan sebagai "kecelakaan" oleh Rustam dan Yusuf. Penyakit membuat Rustam ingin menebusnya: ia menyiapkan draf wasiat yang mengakui kesalahannya, menyisihkan bagian besar untuk keluarga Saleh, dan memangkas warisan Fadhil.',
          `Eighteen years ago, Rustam sent a young diver named Saleh to fetch a rare pearl while the sea raged, then called off the search in haste. That death was certified an "accident" by Rustam and Yusuf. Illness made Rustam want to atone: he prepared a draft will admitting his fault, setting aside a large share for the Saleh family, and cutting Fadhil's inheritance.`
        ),
      ] },
      { h: L('Motif sang ahli waris', `The heir's motive`), p: [
        L(
          'Bagi Fadhil, pengakuan ayahnya berarti dua kehancuran sekaligus: nama dinasti Lasaleo dan kerajaan mutiara yang ia kira miliknya. Selagi badai mengurung pulau dan tak seorang pun bisa pergi, ia membungkam ayahnya sebelum tinta wasiat itu sempat kering.',
          `For Fadhil, his father's confession meant two ruins at once: the Lasaleo name and the pearl empire he thought was his. While the storm sealed the island and no one could leave, he silenced his father before the ink of that will could dry.`
        ),
      ] },
      { h: L('Jebakan: si nama palsu', 'The misdirection: the false name'), p: [
        L(
          '"Maya" memang menyimpan rahasia: ia anak Saleh, menyusup setahun dengan nama samaran. Dendam darah membuatnya tampak paling bersalah. Tapi ia datang untuk kebenaran, bukan kematian — membunuh Rustam justru mengubur pengakuan yang ia tunggu seumur hidup. Saat Rustam tewas, suaranya terekam di radio pulau, memohon bantuan ke daratan.',
          `"Maya" did keep a secret: she is Saleh's child, infiltrating for a year under an assumed name. A blood debt made her look the guiltiest. But she came for the truth, not for death — killing Rustam would only have buried the confession she had waited a lifetime to hear. When Rustam died, her voice was recorded on the island radio, begging the mainland for help.`
        ),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L(
          'Maya di ruang radio (log 03.10–03.40). Yusuf basah kuyup mengikat perahu di dermaga, dan rahasia lama justru ingin ia tutup, bukan picu. Ratna tak beranjak dari kamar. Bram, sang pembeli, justru rugi besar bila Rustam mati — mutiaranya ikut lenyap. Dan badai memastikan tak ada pelaku dari luar.',
          `Maya was in the radio room (log 03:10–03:40). Yusuf was soaked through, lashing boats at the jetty, and the old secret was one he wanted kept shut, not set off. Ratna never stirred from her room. Bram, the buyer, stood to lose heavily if Rustam died — his pearl vanished with him. And the storm guaranteed there was no killer from outside.`
        ),
        L(
          'Tiga unsur bertemu pada satu orang: motif (wasiat dan rahasia yang mengancam warisannya), cara (pemberat selam dari gudang), dan kesempatan (jejak bot gudang→mercusuar). Itu Fadhil.',
          `All three elements meet in one person: motive (the will and the secret that threatened his inheritance), means (the diving weight from the shed), and opportunity (the boot tracks from shed to lighthouse). That is Fadhil.`
        ),
      ] },
    ],
    rebuttals: {
      maya: L(
        'Nama "Maya" palsu dan ia anak Saleh — itu membuatnya tampak paling pendendam. Tapi ia menyusup untuk membongkar kebenaran, bukan membunuh; kematian Rustam justru mengubur pengakuan yang ia tunggu. Log radio 03.10–03.40 merekam suaranya memanggil daratan saat Rustam tewas.',
        `The name "Maya" is false and she is Saleh's child — which made her seem the most vengeful. But she infiltrated to expose the truth, not to kill; Rustam's death would only have buried the confession she awaited. The radio log of 03:10–03:40 records her voice calling the mainland at the time Rustam died.`
      ),
      ratna: L(
        'Ratna mewarisi banyak dan hubungan mereka dingin, tapi ia tak beranjak dari kamar utama sepanjang badai — tak ada jejak maupun darah yang menautkannya ke gudang atau mercusuar.',
        `Ratna inherits a great deal and their marriage was cold, but she never left the master bedroom throughout the storm — no tracks and no blood tie her to the shed or the lighthouse.`
      ),
      yusuf: L(
        'Yusuf ikut menutupi kematian Saleh 18 tahun lalu — beban yang ingin ia kubur, bukan dipicu dengan membunuh. Malam itu ia basah kuyup mengikat perahu di dermaga. Rasa bersalah bukan motif membunuh tuannya.',
        `Yusuf helped cover up Saleh's death 18 years ago — a burden he wanted buried, not detonated by murder. That night he was soaked through, lashing boats at the jetty. Guilt is no motive to kill his own master.`
      ),
      bram: L(
        'Bram berdebat soal mutiara yang tertunda — motif uang yang nyata. Tapi membunuh Rustam berarti mutiara dan uang mukanya lenyap selamanya; ia justru paling butuh sang patriark tetap hidup.',
        `Bram argued over the delayed pearl — a real money motive. But killing Rustam meant the pearl and his deposit were gone for good; of all of them, he most needed the patriarch alive.`
      ),
    },
  },
}
