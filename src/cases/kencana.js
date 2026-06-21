import { L } from '../i18n/L'

// Case 2 (gated). Original content, inspired by Indonesia's "fake benefactor"
// con archetype. Harder: 5 suspects, 10 clues, layered twists.
export const kencana = {
  id: 'kencana',
  free: false,
  difficulty: 'Mudah',
  code: 'WK-1125',
  location: L('Wisma Kencana, Puncak', 'Wisma Kencana, Puncak'),
  scene: 'estate',
  title: L('Maut di Wisma Kencana', 'Death at Wisma Kencana'),
  blurb: L(
    'Sang dermawan ditemukan tewas di pesta pertunangannya sendiri. Serangan jantung — atau ada yang menyulapnya?',
    `The benefactor is found dead at his own engagement party. A heart attack — or did someone stage it?`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi. Terinspirasi dari fenomena viral di Indonesia — penipuan berkedok "dermawan / kakek miliarder" dengan mahar dan cek palsu. Seluruh tokoh, nama, tempat, dan kejadian adalah rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
      `This is a work of fiction. It is inspired by a viral phenomenon in Indonesia — cons fronted by a "benefactor / billionaire grandpa" using a fake dowry and forged checks. All characters, names, places, and events are invented; any resemblance to real persons or events is unintentional.`
    ),
    source: {
      label: L('Inspirasi: "Kebohongan Plot Twist di Indonesia" (YouTube)', `Inspiration: "Kebohongan Plot Twist di Indonesia" (YouTube)`),
      url: 'https://www.youtube.com/watch?v=_wkJoSaVwJM',
    },
  },
  cover: {
    lead: L(
      'Vila megah, mahar miliaran, dan seorang dermawan yang dicintai sekampung. Esok subuhnya ia tewas, kotak mahar dibobol. Tapi tak ada yang seperti tampaknya.',
      `A grand villa, a dowry worth billions, and a benefactor adored by the whole village. By the next dawn he is dead, the dowry box broken open. But nothing here is what it seems.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Selama enam bulan, satu nama mengubah Lembah Cikawari: Bagas Wirya. Dermawan yang datang entah dari mana — membangun masjid, menalangi utang warga, dan melamar gadis setempat dengan mahar yang membuat sekampung ternganga.',
        `For six months, one name transformed the Cikawari Valley: Bagas Wirya. A benefactor come from nowhere — building a mosque, settling the villagers' debts, and proposing to a local girl with a dowry that left the whole village agape.`
      ),
      L(
        'Malam itu, di Wisma Kencana, vila mewah yang ia sewa, digelar pesta pertunangan paling megah yang pernah ada: cek mahar Rp5 miliar dipamerkan, mobil mewah berpita, emas berkilau. Esok subuhnya Bagas ditemukan tewas di kamarnya. Dokter menduga serangan jantung; kotak mahar dibobol dan isinya raib, polisi menduga perampok.',
        `That night, at Wisma Kencana — the lavish villa he had rented — the grandest engagement party anyone had ever seen was thrown: a 5-billion-rupiah dowry check on display, a luxury car wrapped in ribbon, gleaming gold. By the next dawn Bagas was found dead in his room. The doctor suspected a heart attack; the dowry box had been forced open and its contents were gone, and the police suspected a burglar.`
      ),
      L(
        'Tapi terlalu banyak yang janggal. Keluarga calon mempelai memanggil Anda sebelum kasus ditutup sebagai "perampokan yang berujung maut".',
        `But too much does not add up. The bride-to-be's family calls you in before the case is closed as a "robbery that turned deadly."`
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi kelima orang terdekat sang dermawan. Lalu ajukan satu tuduhan — dan susun pembuktiannya. Di pesta ini, tak ada yang seperti tampaknya.',
      `Examine every piece of evidence. Question the five people closest to the benefactor. Then make a single accusation — and build the case for it. At this party, nothing is what it seems.`
    ),
  },
  victim: {
    init: 'BW',
    name: 'Bagas Wirya',
    meta: L('58 tahun · "sang dermawan" Lembah Cikawari', `58 · "the benefactor" of the Cikawari Valley`),
    paras: [
      L(
        'Muncul enam bulan lalu dengan mobil mewah dan dompet yang seolah tak berdasar. Ia menyantuni masjid, menalangi utang warga, dan menjanjikan "koperasi berkah" yang melipatgandakan tabungan. Semua memanggilnya Juragan.',
        `He appeared six months ago in a luxury car, with a purse that seemed bottomless. He gave to the mosque, settled the villagers' debts, and promised a "blessed cooperative" that would multiply their savings. Everyone called him Juragan.`
      ),
      L(
        'Ditemukan tewas pukul 06.30 di suite pribadinya, gelas tonik jantung kosong di nakas. Tak ada luka. Pintu suite terkunci dari dalam; hanya kotak mahar di sudut ruangan yang tampak dibobol paksa.',
        `Found dead at 06:30 in his private suite, an empty glass of heart tonic on the nightstand. No wounds. The suite door was locked from the inside; only the dowry box in the corner of the room appeared to have been forced open.`
      ),
    ],
  },
  evidence: [
    {
      id: 'tonik', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Gelas tonik jantung Bagas', `Bagas's glass of heart tonic`),
      summary: L('Residu digoksin jauh di atas dosis aman.', 'Digoxin residue far above the safe dose.'),
      detail: L(
        'Bagas rutin minum tonik jantung racikan tiap malam. Lab menemukan kadar digoksin — obat jantung — berkali lipat dosis mematikan pada sisa di gelas. Dalam takaran itu, jantung yang memang lemah berhenti dalam tidur, nyaris tanpa jejak. "Serangan jantung" itu disetel. Hanya satu orang yang mengurus dan menakar tonik malam Bagas.',
        `Bagas took a compounded heart tonic every night without fail. The lab found a level of digoxin — a cardiac drug — many times the lethal dose in what was left in the glass. At that measure, an already weak heart simply stops in sleep, leaving almost no trace. The "heart attack" was staged. Only one person prepared and measured out Bagas's nightly tonic.`
      ),
    },
    {
      id: 'cek', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Cek mahar Rp5 miliar', 'The 5-billion-rupiah dowry check'),
      summary: L('Bank memastikan rekening itu tak pernah ada.', 'The bank confirms the account never existed.'),
      detail: L(
        'Cek raksasa yang dipamerkan di panggung itu palsu. Bank tak mengenal nomor rekeningnya, tanda tangannya tiruan. Mahar Rp5 miliar yang membuat sekampung percaya pada Bagas tak pernah berisi satu rupiah pun.',
        `The giant check paraded on stage was a fake. The bank did not recognize its account number, and the signature was forged. The 5-billion-rupiah dowry that made the whole village believe in Bagas never held a single rupiah.`
      ),
    },
    {
      id: 'mobil', icon: 'car', tag: L('Barang Bukti', 'Evidence'),
      title: L('Mobil mewah mahar', 'The luxury dowry car'),
      summary: L('Mobil sewaan — sudah digadaikan diam-diam.', 'A rental car — already quietly pawned.'),
      detail: L(
        'Sedan mewah berpita merah di halaman bukan milik Bagas. Terdaftar atas nama rental di kota; STNK-nya bahkan sudah digadaikan tiga minggu lalu. Amplop-amplop yang ia bagikan ke tamu ditebus dari hasil gadai itu. Sang dermawan, nyatanya, bangkrut.',
        `The luxury sedan with a red ribbon in the yard was not Bagas's. It was registered to a rental agency in the city; its papers had even been pawned three weeks earlier. The envelopes he handed out to the guests were funded from that pawn. The benefactor, in truth, was bankrupt.`
      ),
    },
    {
      id: 'tkp', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Kotak mahar yang "dibobol"', `The "broken-into" dowry box`),
      summary: L('Dicongkel dari dalam; pintu & jendela utuh.', 'Pried open from within; door and windows intact.'),
      detail: L(
        'Kotak mahar memang dicongkel — tapi bekas paksaan mengarah dari dalam ruangan, bukan luar. Pintu suite terkunci dari dalam, jendela tergerendel, tak ada jejak di taman. Tak ada perampok yang masuk. "Perampokan" ini dipentaskan oleh seseorang yang sudah berada di dalam.',
        `The dowry box was indeed pried open — but the marks of force point from inside the room, not outside. The suite door was locked from within, the windows bolted, no tracks in the garden. No burglar ever got in. This "robbery" was staged by someone who was already inside.`
      ),
    },
    {
      id: 'arisan', icon: 'ledger', tag: L('Dokumen', 'Document'),
      title: L('Buku "Koperasi Berkah Kencana"', `The "Kencana Blessed Cooperative" ledger`),
      summary: L('Skema penggandaan uang — setoran besar baru masuk.', 'A money-doubling scheme — a large deposit just came in.'),
      detail: L(
        'Buku catatan menguak usaha asli Bagas: koperasi yang menjanjikan bunga mustahil, membayar anggota lama dengan uang anggota baru. Tiga hari sebelum pesta, satu setoran besar masuk tunai dari belasan anggota baru — uang inilah, bukan cek palsu itu, yang nyata. Dan uang itu kini lenyap.',
        `The ledger exposes Bagas's real business: a cooperative promising impossible returns, paying old members with the money of new ones. Three days before the party, one large cash deposit came in from a dozen-odd new members — this money, not the forged check, was the real thing. And now that money is gone.`
      ),
    },
    {
      id: 'lipstik', icon: 'cup', tag: L('Barang Bukti', 'Evidence'),
      title: L('Noda lipstik di gelas tonik', 'A lipstick mark on the tonic glass'),
      summary: L('Cap bibir Lila pada gelas terakhir Bagas.', `Lila's lip print on Bagas's last glass.`),
      herring: true,
      detail: L(
        'Di bibir gelas tonik menempel noda lipstik milik Lila, sang calon mempelai — ia memang yang biasa mengantar tonik malam Bagas. Sekilas, ini menaruhnya tepat di tangan racun. Tapi pertanyaannya bukan siapa yang memegang gelas, melainkan kapan dosis maut itu ditambahkan.',
        `On the rim of the tonic glass is a lipstick mark belonging to Lila, the bride-to-be — she was, after all, the one who usually brought Bagas his nightly tonic. At a glance, this puts the poison right in her hands. But the question is not who held the glass; it is when the deadly dose was added.`
      ),
    },
    {
      id: 'cctv', icon: 'cctv', tag: L('Metadata', 'Metadata'),
      title: L('Log CCTV gerbang & parkir', 'CCTV log of the gate & parking lot'),
      summary: L('Mobil Bu Hartini keluar 22.40; tak ada yang masuk sesudahnya.', `Bu Hartini's car leaves at 22:40; nothing comes in after that.`),
      detail: L(
        'Rekaman gerbang menunjukkan mobil Bu Hartini meninggalkan vila pukul 22.40 — jauh sebelum perkiraan waktu kematian (sekitar tengah malam). Setelah itu, hingga subuh, tak ada satu kendaraan pun masuk, tak ada sosok asing melompati pagar. Teori "perampok dari luar" runtuh di sini.',
        `The gate footage shows Bu Hartini's car leaving the villa at 22:40 — long before the estimated time of death (around midnight). After that, until dawn, not a single vehicle came in, no stranger's figure climbed the fence. The "burglar from outside" theory collapses right here.`
      ),
    },
    {
      id: 'live', icon: 'social', tag: L('Media Sosial', 'Social Media'),
      title: L('Livestream pesta oleh Reza', `Reza's livestream of the party`),
      summary: L('Siaran tanpa putus dari aula, 20.00–24.00.', 'An unbroken broadcast from the hall, 20:00–24:00.'),
      detail: L(
        'Reza, perias sekaligus content creator yang disewa, menyiarkan pesta tanpa jeda dari aula utama. Linimasa siarannya jadi jam paling jujur malam itu: pukul 23.30 Haji Darmo berpidato penutup, hampir semua tamu di aula. Hanya satu orang lingkaran dalam yang menghilang dari bingkai pada rentang itu — Surya.',
        `Reza — the hired makeup artist and content creator — streamed the party without a break from the main hall. His broadcast timeline became the most honest clock of the night: at 23:30 Haji Darmo gave his closing address, with nearly every guest in the hall. Only one person from the inner circle vanished from the frame during that stretch — Surya.`
      ),
    },
    {
      id: 'tiket', icon: 'ticket', tag: L('Temuan Tersembunyi', 'Hidden Find'),
      title: L('Tiket & tas tersembunyi', 'A hidden ticket & bag'),
      summary: L('Bagas memesan satu kursi keluar negeri, subuh itu — sendirian.', 'Bagas booked a single seat abroad, for that dawn — alone.'),
      locked: true, twist: true,
      detail: L(
        'Terselip di balik lemari suite: satu tiket penerbangan subuh atas nama samaran, sebuah paspor, dan tas berisi pakaian secukupnya. Bagas berniat menghilang saat fajar — sendirian, membawa seluruh uang koperasi. Partnernya tak diajak. Bagi orang yang menanggung semua risiko di belakang layar, ini bukan sekadar dikhianati: ini ditinggal jadi tumbal.',
        `Tucked behind the suite's wardrobe: a single dawn flight ticket under an alias, a passport, and a bag packed with just enough clothing. Bagas meant to vanish at first light — alone, taking all the cooperative's money. His partner was not invited along. For the man who bore every risk behind the scenes, this was more than betrayal: it was being left to take the fall.`
      ),
    },
    {
      id: 'kunci', icon: 'key', tag: L('Barang Bukti', 'Evidence'),
      title: L('Kunci suite & tas kosong', 'The suite key & empty bag'),
      summary: L('Hanya Surya pegang kunci serep; tas uang kosong di mobilnya.', `Only Surya held the spare key; an empty money bag in his car.`),
      detail: L(
        'Suite Bagas hanya punya dua kunci: satu di saku Bagas, satu dipegang Surya sebagai "manajer". Di bagasi mobil Surya ditemukan tas kanvas kosong yang seratnya cocok dengan serat di kotak mahar — wadah yang sama untuk mengangkut setoran tunai koperasi.',
        `Bagas's suite had only two keys: one in Bagas's pocket, one held by Surya as his "manager." In the trunk of Surya's car was an empty canvas bag whose fibers matched those found in the dowry box — the very container used to carry off the cooperative's cash deposits.`
      ),
    },
  ],
  suspects: [
    {
      id: 'lila', init: 'LA', name: 'Lila Andini', age: 23,
      role: L('Calon mempelai', 'The bride-to-be'),
      statement: L('“Aku tahu apa kata orang. Tapi aku tak pernah tahu soal uang itu, dan aku tak akan pernah menyakitinya.”', `“I know what people say. But I never knew anything about that money, and I would never have hurt him.”`),
      motive: L('Dijodohkan demi harta; bila tahu semuanya palsu, ia paling dirugikan.', 'Matched off for the wealth; had she known it was all a sham, she stood to lose the most.'),
      alibi: L('Mengantar tonik malam Bagas pukul 22.00, lalu kembali ke aula bersama tamu.', `Brought Bagas his nightly tonic at 22:00, then returned to the hall with the guests.`),
      interrogation: [
        { q: L('Kapan terakhir kau melihat Bagas?', 'When did you last see Bagas?'), a: L('Pukul sepuluh malam, saat kuantar toniknya seperti biasa. Setelah itu aku di aula sampai pesta bubar. Banyak yang melihatku.', 'At ten at night, when I brought his tonic as usual. After that I was in the hall until the party ended. Plenty of people saw me.') },
        { q: L('Kau tahu hartanya palsu?', 'Did you know his wealth was fake?'), a: L('Tidak. Aku baru tahu malam ini, dari kalian. Aku... aku tak tahu harus menangis atau marah.', `No. I only found out tonight, from you. I... I don't know whether to cry or to be furious.`), requires: 'cek' },
        { q: L('Lipstikmu ada di gelas tonik. Jelaskan.', 'Your lipstick was on the tonic glass. Explain.'), a: L('Karena aku yang menuangkannya, pukul sepuluh — aku selalu begitu. Kalau ada racun, itu ditambahkan setelah aku pergi. Periksa jam-nya.', 'Because I was the one who poured it, at ten — I always did. If there was poison, it was added after I left. Check the timing.'), requires: 'lipstik' },
      ],
    },
    {
      id: 'darmo', init: 'HD', name: 'Haji Darmo', age: 61,
      role: L('Ayah Lila, sesepuh kampung', `Lila's father, a village elder`),
      statement: L('“Saya yang membawa dia ke kampung ini. Saya pula yang dipermalukan. Tapi aib tak saya tebus dengan darah.”', `“I am the one who brought him to this village. I am also the one disgraced. But I do not pay for shame with blood.”`),
      motive: L('Mempertaruhkan nama baik dan tabungan warga pada Bagas; hancur bila penipuan terbongkar.', `Staked his good name and the villagers' savings on Bagas; ruined if the fraud came to light.`),
      alibi: L('Berpidato penutup di aula pukul 23.30 — terekam livestream.', 'Gave the closing address in the hall at 23:30 — captured on the livestream.'),
      interrogation: [
        { q: L('Benarkah Anda menalangi koperasi Bagas?', `Is it true you bankrolled Bagas's cooperative?`), a: L('Saya ikut, dan saya ajak warga. Beban itu akan saya tanggung seumur hidup. Tapi membunuhnya tak mengembalikan uang siapa pun.', 'I joined it, and I brought the villagers in. That burden I will carry for the rest of my life. But killing him returns no one their money.'), requires: 'arisan' },
        { q: L('Di mana Anda saat tengah malam?', 'Where were you at midnight?'), a: L('Di panggung, menutup acara dengan doa. Ratusan orang melihat — dan kamera anak itu merekam semuanya.', `On the stage, closing the event with a prayer. Hundreds of people saw — and that young man's camera recorded it all.`) },
        { q: L('Anda sempat mengancamnya?', 'Did you threaten him at some point?'), a: L('Saya bilang akan membawanya ke polisi bila ini penipuan. Itu ancaman saya — proses hukum, bukan racun.', 'I told him I would take him to the police if this was a fraud. That was my threat — the law, not poison.') },
      ],
    },
    {
      id: 'surya', init: 'SA', name: 'Surya Atmaja', age: 45,
      role: L('Manajer & "tangan kanan" Bagas', `Bagas's manager & "right-hand man"`),
      statement: L('“Saya urus semua untuk beliau — jadwal, obat, keuangan. Malam ini saya kehilangan majikan sekaligus sahabat.”', `“I managed everything for him — his schedule, his medicine, his finances. Tonight I lost both a master and a friend.”`),
      motive: L('Tampak paling setia. Tak punya alasan jelas — sampai uang koperasi dibahas.', 'Seemed the most loyal of all. With no clear reason — until the cooperative money came up.'),
      alibi: L('Mengaku "memeriksa keadaan Bagas" sebentar lalu kembali; tak ada yang mencatat kapan.', `Claims he "checked on Bagas" briefly and then returned; no one noted exactly when.`),
      interrogation: [
        { q: L('Siapa yang menakar tonik jantung Bagas?', `Who measured out Bagas's heart tonic?`), a: L('Saya yang menyiapkan kotak obatnya tiap hari. Tapi yang mengantar gelasnya Lila. Jadi... tanyakan padanya, bukan saya.', `I prepared his pill box every day. But it was Lila who carried the glass. So... ask her, not me.`), requires: 'tonik' },
        { q: L('Ke mana uang setoran koperasi?', `Where did the cooperative's deposits go?`), a: L('Uang? Beliau yang pegang semua. Mungkin dibawa perampok itu. Saya tak tahu apa-apa soal tas mana pun.', 'The money? He held all of it. Maybe the burglar took it. I know nothing about any bag.'), requires: 'arisan', unlocks: 'tiket' },
        { q: L('Di mana Anda saat pidato penutup?', 'Where were you during the closing address?'), a: L('Saya... mengecek Bagas sebentar. Dia minta tak diganggu. Saya cuma di depan pintu, sungguh.', 'I... checked on Bagas for a moment. He asked not to be disturbed. I was just outside the door, truly.') },
      ],
    },
    {
      id: 'hartini', init: 'BH', name: 'Bu Hartini', age: 52,
      role: L('Investor terbesar koperasi', `The cooperative's largest investor`),
      statement: L('“Saya menaruh seluruh uang pensiun di koperasinya. Malam itu saya datang menuntut, bukan membunuh.”', `“I put my entire pension into his cooperative. That night I came to demand it back, not to kill.”`),
      motive: L('Menanam seluruh hartanya di skema Bagas; mulai curiga ditipu dan menuntut uangnya di depan umum.', `Sank her whole fortune into Bagas's scheme; began to suspect she had been swindled and demanded her money back in public.`),
      alibi: L('Meninggalkan vila pukul 22.40 (terekam CCTV gerbang).', 'Left the villa at 22:40 (captured on the gate CCTV).'),
      interrogation: [
        { q: L('Anda bertengkar dengan Bagas malam itu?', 'Did you quarrel with Bagas that night?'), a: L('Saya menuntut uang saya di depan tamu. Dia menghindar dengan senyum. Saya muak, lalu pulang.', 'I demanded my money in front of the guests. He brushed me off with a smile. I was sick of it, so I went home.') },
        { q: L('Pukul berapa Anda meninggalkan vila?', 'What time did you leave the villa?'), a: L('Sebelum jam sebelas. Sopir dan kamera gerbang bisa memastikan. Saya tak pernah naik ke lantai kamarnya.', 'Before eleven. My driver and the gate camera can confirm it. I never went up to the floor of his room.'), requires: 'cctv' },
        { q: L('Anda tahu hartanya palsu?', 'Did you know his wealth was fake?'), a: L('Saya curiga. Tapi kalau saya bunuh dia, uang saya hilang selamanya. Saya justru butuh dia hidup untuk membayar.', 'I suspected it. But if I killed him, my money would be gone for good. I needed him alive, in fact, to pay me back.') },
      ],
    },
    {
      id: 'reza', init: 'RP', name: 'Reza Pratama', age: 29,
      role: L('Perias & content creator pesta', `The party's makeup artist & content creator`),
      statement: L('“Aku merekam semuanya malam itu. Ironisnya, kameraku yang jadi saksi paling jujur.”', `“I filmed everything that night. Ironically, my camera turned out to be the most honest witness.”`),
      motive: L('Bebas berkeliling dengan kamera; sempat dikira menyelinap.', 'Free to roam with his camera; was briefly thought to have slipped away.'),
      alibi: L('Livestream tanpa putus dari aula sepanjang pesta — ia sendiri di balik kamera.', 'An unbroken livestream from the hall throughout the party — he himself behind the camera.'),
      interrogation: [
        { q: L('Kau ke mana saja dengan kameramu?', 'Where all did you go with your camera?'), a: L('Aku tak ke mana-mana — aku di belakang kamera, siaran langsung dari aula, empat jam penuh. Cek saja rekamannya.', 'I went nowhere — I was behind the camera, streaming live from the hall, four hours straight. Just check the recording.') },
        { q: L('Ada yang kau tangkap di rekaman?', 'Did you catch anything on the recording?'), a: L('Pas Haji Darmo pidato, semua di aula. Cuma Pak Surya yang kulihat menyelinap ke arah suite — habis itu hilang dari frame agak lama.', `During Haji Darmo's speech, everyone was in the hall. The only one I saw slip off toward the suite was Pak Surya — after that he was gone from the frame for quite a while.`), requires: 'live' },
        { q: L('Siapa yang terakhir ke kamar Bagas?', `Who was the last to go to Bagas's room?`), a: L('Aku tak ikut naik. Tapi cuma satu orang yang pegang kuncinya, kan? Bukan aku.', `I didn't go up. But only one person held the key, didn't he? Not me.`) },
      ],
    },
  ],
  timeline: [
    { t: L('20.00', '20:00'), key: false, x: L('Pesta dimulai di Wisma Kencana. Reza memulai livestream dari aula.', 'The party begins at Wisma Kencana. Reza starts the livestream from the hall.') },
    { t: L('21.30', '21:30'), key: false, x: L('Bagas memamerkan cek mahar Rp5 miliar dan membagikan amplop ke tamu.', 'Bagas shows off the 5-billion-rupiah dowry check and hands out envelopes to the guests.') },
    { t: L('22.00', '22:00'), key: false, x: L('Lila mengantar tonik jantung ke suite Bagas, lalu kembali ke aula.', `Lila brings the heart tonic to Bagas's suite, then returns to the hall.`) },
    { t: L('22.40', '22:40'), key: false, x: L('Bu Hartini menuntut uangnya di depan tamu, lalu meninggalkan vila (CCTV gerbang).', 'Bu Hartini demands her money in front of the guests, then leaves the villa (gate CCTV).') },
    { t: L('23.30', '23:30'), key: true, x: L('Haji Darmo berpidato penutup di aula (terekam livestream). Surya menghilang dari bingkai.', 'Haji Darmo gives the closing address in the hall (captured on the livestream). Surya vanishes from the frame.') },
    { t: L('~23.45', '~23:45'), key: true, x: L('Seseorang masuk ke suite: dosis maut ditambahkan ke tonik, tas uang diangkut, kotak mahar dicongkel dari dalam.', 'Someone enters the suite: the lethal dose is added to the tonic, the money bag is carried off, the dowry box is pried open from within.') },
    { t: L('00.10', '00:10'), key: false, x: L('Bagas meminum tonik sebelum tidur.', 'Bagas drinks the tonic before sleep.') },
    { t: L('06.30', '06:30'), key: true, x: L('Bagas ditemukan tewas; kotak mahar bobol — dikira perampokan.', 'Bagas is found dead; the dowry box is broken open — taken for a robbery.') },
  ],
  solution: {
    killer: 'surya',
    motive: ['tiket', 'arisan'],
    means: ['tonik'],
    opportunity: ['live', 'kunci'],
  },
  reveal: {
    killerName: 'Surya Atmaja',
    sections: [
      { h: L('Pelakunya: Surya Atmaja', 'The killer: Surya Atmaja'), p: [
        L('Bagas tidak mati karena jantungnya. Ia diracun oleh orang yang paling ia percaya.', `Bagas did not die of his heart. He was poisoned by the man he trusted most.`),
        L(
          'Tonik jantung malamnya disusupi digoksin berlebih — dan hanya Surya yang menakar serta menyiapkan kotak obatnya tiap hari. Lila memang mengantar gelasnya pukul 22.00, tapi dosis maut ditambahkan jauh sesudahnya, saat hanya Surya yang punya akses ke suite.',
          `His nightly heart tonic was laced with an overdose of digoxin — and only Surya measured out and prepared his pill box each day. Lila did carry the glass at 22:00, but the lethal dose was added long afterward, when only Surya had access to the suite.`
        ),
        L(
          'Ketika Haji Darmo menutup pesta dengan doa pukul 23.30 dan seisi aula terekam kamera Reza, Surya menghilang dari bingkai. Ia memegang satu-satunya kunci serep suite. Di sanalah ia menambah racun, mengangkut tas berisi uang koperasi, lalu mencongkel kotak mahar dari dalam agar semua menyangka ada perampok.',
          `When Haji Darmo closed the party with a prayer at 23:30 and the whole hall was caught on Reza's camera, Surya vanished from the frame. He held the only spare key to the suite. There he added the poison, carried off the bag of cooperative money, then pried the dowry box open from within so everyone would assume a burglar had struck.`
        ),
      ] },
      { h: L('Sang dermawan yang palsu', 'The false benefactor'), p: [
        L(
          'Kekayaan Bagas hanyalah panggung: cek Rp5 miliar palsu, mobil mewahnya sewaan yang sudah digadaikan, amplopnya ditebus dari hasil gadai. Usaha sesungguhnya adalah koperasi penggandaan uang — membayar anggota lama dengan setoran anggota baru. Yang nyata hanya satu: tumpukan uang tunai yang baru masuk tiga hari sebelum pesta.',
          `Bagas's wealth was all stagecraft: the 5-billion-rupiah check was forged, his luxury car a rental already pawned, his envelopes funded from the pawn. His real business was a money-doubling cooperative — paying old members with the deposits of new ones. Only one thing was real: the pile of cash that had come in just three days before the party.`
        ),
      ] },
      { h: L('Pengkhianatan yang berbalik', 'The betrayal turned back'), p: [
        L(
          'Tiket subuh atas nama samaran dan tas terkemas yang tersembunyi di suite membongkar rencana Bagas: kabur sendirian saat fajar, membawa seluruh uang, meninggalkan Surya menanggung semua. Surya — otak di balik layar — mendahuluinya. Ia bukan tangan kanan yang setia; ia partner yang dicampakkan, dan ia membalas lebih dulu.',
          `The dawn ticket under an alias and the packed bag hidden in the suite lay bare Bagas's plan: to flee alone at first light, taking all the money, leaving Surya to carry the lot. Surya — the mastermind behind the scenes — got there first. He was no loyal right-hand man; he was the partner cast aside, and he struck back before he could be struck.`
        ),
      ] },
      { h: L('Jebakan: lipstik & perampokan', 'The misdirection: the lipstick & the robbery'), p: [
        L(
          'Dua umpan menyesatkan kasus ini. Noda lipstik Lila membuatnya tampak memegang racun — padahal ia menuang tonik pukul 22.00, dua jam sebelum dosis maut masuk. Dan "perampokan" itu palsu: kotak mahar dicongkel dari dalam ruangan yang terkunci rapat, sementara isi mahar — cek dan emas — memang tak pernah berharga. Tak ada yang dicuri perampok; yang raib hanya uang koperasi, dibawa orang dalam.',
          `Two baits lead this case astray. Lila's lipstick mark makes her look as if she held the poison — yet she poured the tonic at 22:00, two hours before the lethal dose went in. And the "robbery" was a sham: the dowry box was pried open inside a tightly locked room, while the dowry's contents — the check and the gold — were never worth anything to begin with. Nothing was stolen by a burglar; all that vanished was the cooperative's money, carried off by someone on the inside.`
        ),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L(
          'Lila tak tahu apa-apa soal uang dan menuang tonik jauh sebelum racun masuk. Haji Darmo sedang berpidato di panggung pukul 23.30, terekam livestream. Bu Hartini sudah keluar gerbang pukul 22.40 — dan ia justru butuh Bagas hidup untuk mengembalikan uangnya. Reza ada di balik kamera sepanjang malam; rekamannya sendiri yang membersihkannya.',
          `Lila knew nothing about the money and poured the tonic long before the poison went in. Haji Darmo was giving his address on the stage at 23:30, captured on the livestream. Bu Hartini had already left through the gate at 22:40 — and she needed Bagas alive to get her money back. Reza was behind the camera all night; his own recording is what clears him.`
        ),
        L(
          'Tiga unsur hanya bertemu pada satu orang: motif (dikhianati dan diincarnya uang koperasi), cara (tonik yang ia takar sendiri), dan kesempatan (kunci serep dan menghilang dari rekaman). Itu Surya.',
          `All three elements meet in only one person: motive (the betrayal and his eye on the cooperative's money), means (the tonic he measured out himself), and opportunity (the spare key and his disappearance from the recording). That's Surya.`
        ),
      ] },
    ],
    rebuttals: {
      lila: L(
        'Lipstiknya ada di gelas karena ia menuang tonik pukul 22.00 — dua jam sebelum dosis maut ditambahkan. Ia tak tahu hartanya palsu dan tak menyentuh uang koperasi. Tersangka yang paling mudah dituduh justru paling bersih.',
        `Her lipstick is on the glass because she poured the tonic at 22:00 — two hours before the lethal dose was added. She did not know his wealth was fake and never touched the cooperative's money. The easiest suspect to accuse turns out to be the cleanest.`
      ),
      darmo: L(
        'Pada waktu kematian, Haji Darmo berpidato penutup di aula — terekam livestream Reza, disaksikan ratusan tamu. Ia malu dan marah, tapi malu tak membobol kotak dari dalam kamar terkunci.',
        `At the time of death, Haji Darmo was giving the closing address in the hall — captured on Reza's livestream, witnessed by hundreds of guests. He was ashamed and angry, but shame does not break open a box inside a locked room.`
      ),
      hartini: L(
        'Mobil Bu Hartini keluar gerbang pukul 22.40, jauh sebelum tengah malam (CCTV). Lagipula membunuh Bagas berarti uangnya lenyap selamanya — ia justru butuh sang dermawan tetap hidup.',
        `Bu Hartini's car left through the gate at 22:40, long before midnight (CCTV). And besides, killing Bagas would mean her money was gone forever — she needed the benefactor to stay alive.`
      ),
      reza: L(
        'Reza di balik kamera, siaran langsung dari aula tanpa jeda empat jam. Rekamannya sendiri adalah alibinya — dan justru rekaman itu yang menangkap satu-satunya orang yang menyelinap ke suite.',
        `Reza was behind the camera, streaming live from the hall without a break for four hours. His own recording is his alibi — and it is that very recording which caught the only person who slipped away to the suite.`
      ),
    },
  },
}
