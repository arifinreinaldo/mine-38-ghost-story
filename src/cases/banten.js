import { L } from '../i18n/L'

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
  location: L('Loji dagang Belanda · Banten, sekitar 1605', 'A Dutch trading post · Banten, around 1605'),
  scene: 'kolonial',
  title: L('Maut di Gudang Lada', 'Death in the Pepper Warehouse'),
  blurb: L(
    'Di loji dagang Belanda yang baru berdiri di Banten, sang juru buku ditemukan tewas di antara karung lada. Bukti-bukti penentu ditulis dalam bahasa Belanda — dan pembunuhnya mengira tak seorang pun akan membacanya.',
    `At a newly established Dutch trading post in Banten, the bookkeeper is found dead among the sacks of pepper. The decisive clues are written in Dutch — and the killer was certain no one would ever read them.`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi, berlatar awal kedatangan pedagang Belanda di Nusantara — masa loji dagang dan perniagaan lada di Banten sekitar awal 1600-an, ketika VOC baru berdiri (1602) dan bersaing dengan Inggris. Seluruh tokoh, nama, dan peristiwa rekaan belaka; kemiripan dengan orang atau peristiwa nyata tidak disengaja. Kutipan bahasa Belanda sengaja dibiarkan tanpa terjemahan langsung pada ringkasannya — itulah bagian dari teka-tekinya.',
      `This is a work of fiction, set in the early days of the Dutch traders' arrival in the Archipelago — the era of trading posts and the pepper trade at Banten in the early 1600s, when the VOC had just been founded (1602) and was contending with the English. All characters, names, and events are entirely invented; any resemblance to real persons or events is unintended. The Dutch quotations are deliberately left without a direct translation in their summaries — that is part of the puzzle.`
    ),
    source: {
      label: L('Latar sejarah: “Dutch East India Company (VOC)” (Wikipedia)', 'Historical background: “Dutch East India Company (VOC)” (Wikipedia)'),
      url: 'https://en.wikipedia.org/wiki/Dutch_East_India_Company',
    },
  },
  cover: {
    lead: L(
      'Banten, awal 1600-an. Kapal-kapal Belanda baru berlabuh memburu lada. Di gudang loji yang pengap, juru buku Kompeni terbujur kaku di antara karung-karung lada — dan semua jawabannya tertulis dalam bahasa yang hampir tak seorang pun di pelabuhan ini bisa baca.',
      `Banten, the early 1600s. Dutch ships have just dropped anchor in pursuit of pepper. In the stifling warehouse of the trading post, the Company's bookkeeper lies stiff among the sacks of pepper — and every answer is written in a language almost no one in this port can read.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Banten, sekitar tahun 1605. Pedagang-pedagang Belanda baru saja datang memburu lada, mendirikan loji — pos dagang berbenteng — di tepi pelabuhan yang ramai, bersaing ketat dengan orang Inggris. Di dalamnya, Kompeni (VOC) menimbang, mencatat, dan menggudangkan lada dalam karung demi karung.',
        `Banten, around the year 1605. Dutch traders have only just arrived in pursuit of pepper, raising a loji — a fortified trading post — on the edge of a teeming harbor, locked in fierce competition with the English. Inside, the Company (the VOC) weighs, records, and stores pepper sack by sack.`
      ),
      L(
        'Pagi ini, Joost van Aken — boekhouder, juru buku loji — ditemukan tewas di antara karung lada di dalam gudang (pakhuis). Tak ada tanda perampokan. Yang tertinggal justru tumpukan kertas: buku besar, surat-surat, dan secarik catatan terakhir — hampir semuanya dalam bahasa Belanda.',
        `This morning, Joost van Aken — the boekhouder, the post's bookkeeper — was found dead among the sacks of pepper inside the warehouse (the pakhuis). No sign of robbery. What he left behind instead was a heap of paper: the ledger, letters, and a final scrap of a note — nearly all of it in Dutch.`
      ),
      L(
        'Para tuan Belanda hendak buru-buru menyebutnya ulah pencuri pribumi. Tapi van Aken seorang pencatat; ia meninggalkan kata-kata. Periksa setiap bukti, interogasi keenam orang di sekitarnya — dan pahami betul apa yang tertulis dalam bahasa Belanda itu. Di sanalah pembunuhnya bersembunyi.',
        `The Dutch masters are eager to write it off as the work of a native thief. But van Aken was a man of records; he left words behind. Examine every piece of evidence, question the six people around him — and understand exactly what is written in that Dutch. That is where the killer is hiding.`
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa tiap bukti, interogasi keenam orang. Bila Anda paham bahasa Belanda, jawabannya hampir terang-benderang; bila tidak, baca tiap kutipan satu per satu lewat keterangannya. Lalu tunjuk pembunuhnya dan susun pembuktianmu.',
      `Examine every piece of evidence, question all six people. If you understand Dutch, the answer is almost plain to see; if not, read each quotation one by one through its gloss. Then name the killer and lay out your proof.`
    ),
  },
  victim: {
    init: 'JA',
    name: 'Joost van Aken',
    meta: L('37 tahun · boekhouder (juru buku loji VOC)', `37 · boekhouder (the VOC post's bookkeeper)`),
    paras: [
      L(
        'Juru buku Kompeni: ia menimbang, menghitung, dan mencatat tiap karung lada yang masuk dan keluar gudang. Teliti sampai menjengkelkan, dan tak mau berkompromi dengan angka yang tak cocok.',
        `The Company's bookkeeper: he weighed, counted, and recorded every sack of pepper that entered or left the warehouse. Meticulous to the point of exasperation, and unwilling to compromise over figures that did not add up.`
      ),
      L(
        'Ditemukan pada fajar, terbujur di antara karung lada di dalam gudang, wajah membiru dan berbusa. Di dekatnya: dua cawan jenever dan setumpuk kertas berbahasa Belanda. Para tuan loji bergegas menyebutnya perbuatan pencuri — tapi tak ada satu karung pun yang hilang malam itu.',
        `Found at dawn, laid out among the sacks of pepper in the warehouse, his face blue and foaming. Beside him: two cups of jenever and a stack of papers in Dutch. The masters of the post hastened to call it a thief's doing — yet not a single sack went missing that night.`
      ),
    ],
  },
  evidence: [
    {
      id: 'mayat', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Jasad van Aken', `Van Aken's body`),
      summary: L('Wajah membiru, mulut berbusa — tanda diracun, bukan dirampok.', 'Blue face, foaming mouth — the mark of poison, not robbery.'),
      detail: L(
        'Bibir membiru, busa di mulut, kejang sebelum mati: gejala keracunan, bukan luka senjata atau jejak perkelahian. Tak ada barang hilang, tak ada karung lenyap. Ini bukan perampokan yang berakhir maut — ini pembunuhan yang dirancang tenang, lewat racun.',
        `Blue lips, foam at the mouth, convulsions before death: the signs of poisoning, not a weapon wound or any trace of a struggle. Nothing taken, no sack gone. This was no robbery turned deadly — this was a murder coolly designed, by poison.`
      ),
    },
    {
      id: 'beker', icon: 'cup', tag: L('Barang Bukti', 'Evidence'),
      title: L('Dua cawan jenever', 'Two cups of jenever'),
      summary: L('Dua cawan di gudang; satu diseka bersih sampai tak bersisa.', 'Two cups in the warehouse; one wiped clean to nothing.'),
      detail: L(
        'Dua cawan timah berisi jenever di lantai gudang. Cawan van Aken penuh sisa minuman beracun; cawan satunya diseka bersih sampai kering — tak meninggalkan ampas, tak meninggalkan jejak. Van Aken minum berdua dengan seseorang malam itu, dan orang itu membersihkan bekas dirinya sendiri.',
        `Two pewter cups of jenever on the warehouse floor. Van Aken's cup is full of the poisoned dregs; the other was wiped dry — no residue left, no trace left behind. Van Aken drank with someone that night, and that someone cleaned away every sign of himself.`
      ),
    },
    {
      id: 'gif', icon: 'evidence', tag: L('Temuan Tersembunyi', 'Hidden Find'),
      title: L('Botol rattenkruit', 'A bottle of rattenkruit'),
      summary: L('‘Rattenkruit’ — botol arsenik, tersembunyi di peti sang opperkoopman.', `'Rattenkruit' — a bottle of arsenic, hidden in the opperkoopman's chest.`),
      detail: L(
        'Sebotol kecil bertuliskan “rattenkruit” — dalam bahasa Belanda, arsenik, racun tikus — ditemukan terselip di dasar peti pribadi Hendrick Janszoon, sang opperkoopman. Isinya cocok dengan racun pada cawan dan tubuh van Aken. Racun gudang yang lazim, di tangan yang tak lazim.',
        `A small bottle labeled “rattenkruit” — Dutch for arsenic, rat poison — was found tucked at the bottom of the personal chest of Hendrick Janszoon, the opperkoopman. Its contents match the poison in the cup and in van Aken's body. A common warehouse poison, in uncommon hands.`
      ),
    },
    {
      id: 'briefje', icon: 'doc', tag: L('Dokumen · Belanda', 'Document · Dutch'),
      title: L('Secarik pesan undangan', 'A scrap of an invitation'),
      summary: L('“Kom vanavond alleen naar het pakhuis. — H.”', '“Kom vanavond alleen naar het pakhuis. — H.”'),
      detail: L(
        'Secarik pesan dalam bahasa Belanda di saku van Aken: “Van Aken — kom vanavond alleen naar het pakhuis. Wij moeten de boeken bespreken. — H.” Artinya: “Van Aken — datanglah malam ini sendirian ke gudang. Kita harus membahas pembukuan. — H.” Sebuah pancingan ke gudang, larut malam, seorang diri — ditandatangani “H”.',
        `A scrap of a note in Dutch in van Aken's pocket: “Van Aken — kom vanavond alleen naar het pakhuis. Wij moeten de boeken bespreken. — H.” It means: “Van Aken — come to the warehouse tonight, alone. We must discuss the books. — H.” A lure to the warehouse, late at night, all alone — signed “H.”`
      ),
    },
    {
      id: 'grootboek', icon: 'ledger', tag: L('Dokumen · Belanda', 'Document · Dutch'),
      title: L('Buku besar (grootboek)', 'The ledger (grootboek)'),
      summary: L('“1200 zakken ontvangen, 900 verscheept, 300 vermist.”', '“1200 zakken ontvangen, 900 verscheept, 300 vermist.”'),
      detail: L(
        'Buku besar Kompeni, dalam bahasa Belanda: “Peper: 1200 zakken ontvangen, 900 verscheept, 300 vermist.” Artinya: “Lada: 1200 karung diterima, 900 dikapalkan, 300 hilang.” Tiga ratus karung lada raib dari pembukuan — bukan dicuri massal, melainkan menguap dari catatan. Seseorang merapikan selisihnya.',
        `The Company's ledger, in Dutch: “Peper: 1200 zakken ontvangen, 900 verscheept, 300 vermist.” It means: “Pepper: 1200 sacks received, 900 shipped, 300 missing.” Three hundred sacks of pepper vanished from the books — not stolen wholesale, but evaporated from the records. Someone tidied away the discrepancy.`
      ),
    },
    {
      id: 'weegschaal', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Timbangan yang dicurangi', 'The rigged scale'),
      summary: L('Timbangan gudang menyembunyikan pemberat — tiap penimbangan meleset.', 'The warehouse scale hides a weight — every weighing comes out wrong.'),
      detail: L(
        'Timbangan besar di gudang menyimpan pemberat tersembunyi di bawah piringnya. Tiap karung lada tampak lebih ringan dari sebenarnya, hingga selisihnya bisa “dihilangkan” dari catatan tanpa ada karung yang benar-benar lenyap dari rak. Pemegang kunci timbangan inilah yang menikmati selisihnya.',
        `The great scale in the warehouse conceals a hidden weight beneath its pan. Every sack of pepper reads lighter than it truly is, so the difference can be “made to disappear” from the records without a single sack actually vanishing from the rack. Whoever holds the key to the scale is the one who pockets the difference.`
      ),
    },
    {
      id: 'dagboek', icon: 'doc', tag: L('Dokumen · Belanda', 'Document · Dutch'),
      title: L('Buku harian rahasia (dagboek)', 'A secret diary (dagboek)'),
      summary: L('“De opperkoopman laat de weegschaal vervalsen…”', '“De opperkoopman laat de weegschaal vervalsen…”'),
      locked: true, twist: true,
      detail: L(
        'Buku harian pribadi van Aken, disembunyikan di balik papan lantai kantornya, ditulis dalam bahasa Belanda: “De opperkoopman laat de weegschaal vervalsen en verkoopt de vermiste peper in het geheim aan de Engelsen. Merkt hij dat ik dit weet, dan ben ik een dood man.” Artinya: “Sang opperkoopman (kepala pedagang) memalsukan timbangan dan menjual lada yang hilang itu diam-diam kepada orang Inggris. Bila ia tahu aku mengetahuinya, matilah aku.” Bukan onderkoopman, bukan nakhoda — opperkoopman.',
        `Van Aken's private diary, hidden beneath a floorboard in his office, written in Dutch: “De opperkoopman laat de weegschaal vervalsen en verkoopt de vermiste peper in het geheim aan de Engelsen. Merkt hij dat ik dit weet, dan ben ik een dood man.” It means: “The opperkoopman (the head merchant) is having the scale falsified and is secretly selling the missing pepper to the English. Should he learn that I know this, I am a dead man.” Not the onderkoopman, not the skipper — the opperkoopman.`
      ),
    },
    {
      id: 'engelsen', icon: 'doc', tag: L('Dokumen · Belanda', 'Document · Dutch'),
      title: L('Surat kepada orang Inggris', 'A letter to the English'),
      summary: L('“Betaal in zilver, buiten de boeken om. — H.J.”', '“Betaal in zilver, buiten de boeken om. — H.J.”'),
      detail: L(
        'Sobekan surat berbahasa Belanda yang ditujukan ke loji Inggris: “Aan de Engelse heren: de partij peper ligt klaar. Betaal in zilver, buiten de boeken om. — H.J.” Artinya: “Kepada tuan-tuan Inggris: partai lada sudah siap. Bayar dengan perak, di luar pembukuan. — H.J.” Inisial penanda tangan: H.J. — Hendrick Janszoon.',
        `A torn letter in Dutch addressed to the English post: “Aan de Engelse heren: de partij peper ligt klaar. Betaal in zilver, buiten de boeken om. — H.J.” It means: “To the English gentlemen: the consignment of pepper is ready. Pay in silver, off the books. — H.J.” The signer's initials: H.J. — Hendrick Janszoon.`
      ),
    },
    {
      id: 'woorden', icon: 'doc', tag: L('Pesan Terakhir · Belanda', 'Last Message · Dutch'),
      title: L('Catatan terakhir van Aken', `Van Aken's final note`),
      summary: L('“De waarheid staat in mijn woorden. Lees het Nederlands.”', '“De waarheid staat in mijn woorden. Lees het Nederlands.”'),
      detail: L(
        'Tergenggam di tangan van Aken, secarik pesan: “De waarheid staat in mijn woorden. Lees het Nederlands.” Artinya: “Kebenaran ada pada kata-kataku. Bacalah bahasa Belandanya.” Ini petunjuk untukmu, sang penyidik: jangan lewatkan satu pun kutipan Belanda di berkas ini. Pahami artinya satu per satu — pembunuhnya menyebut dirinya sendiri di sana, mengira tak ada yang bisa membacanya.',
        `Clutched in van Aken's hand, a scrap of a message: “De waarheid staat in mijn woorden. Lees het Nederlands.” It means: “The truth lies in my words. Read the Dutch.” This is a clue for you, the investigator: do not skip a single Dutch quotation in this file. Understand each one in turn — the killer names himself in there, certain no one could read it.`
      ),
    },
    {
      id: 'wachtlog', icon: 'metadata', tag: L('Dokumen · Belanda', 'Document · Dutch'),
      title: L('Catatan jaga gerbang (wachtlog)', 'The gate watch log (wachtlog)'),
      summary: L('“Opperkoopman H.J. — uit om 9 uur, naar het pakhuis.”', '“Opperkoopman H.J. — uit om 9 uur, naar het pakhuis.”'),
      detail: L(
        'Catatan jaga gerbang loji, dalam bahasa Belanda: “Opperkoopman H.J. — uit om 9 uur in de avond, naar het pakhuis. Pas na middernacht terug.” Artinya: “Kepala pedagang H.J. — keluar pukul 9 malam menuju gudang. Baru kembali lewat tengah malam.” Padahal ia bersumpah berada di biliknya sepanjang malam.',
        `The post's gate watch log, in Dutch: “Opperkoopman H.J. — uit om 9 uur in de avond, naar het pakhuis. Pas na middernacht terug.” It means: “Head merchant H.J. — left at 9 in the evening for the warehouse. Did not return until past midnight.” And yet he swore he was in his chamber all night long.`
      ),
    },
    {
      id: 'kris', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Keris Ki Wirasaba', `Ki Wirasaba's kris`),
      summary: L('Keris saudagar lada lokal, ditemukan dekat gudang — tampak memberatkan.', `The local pepper merchant's kris, found near the warehouse — it looks damning.`),
      herring: true,
      detail: L(
        'Sebilah keris milik Ki Wirasaba, saudagar lada Banten, tergeletak tak jauh dari gudang — seakan menuding sang pemasok yang sering bersitegang dengan van Aken. Tapi bilahnya bersih tanpa darah, dan van Aken mati diracun, bukan ditikam. Keris itu tertinggal saat pengantaran lada siang harinya. Petunjuk yang menyesatkan.',
        `A kris belonging to Ki Wirasaba, a pepper merchant of Banten, lay not far from the warehouse — as if pointing the finger at the supplier who so often clashed with van Aken. But the blade is clean, without blood, and van Aken died of poison, not a stabbing. The kris was left behind during the pepper delivery earlier that day. A misleading clue.`
      ),
    },
  ],
  suspects: [
    {
      id: 'hendrick', init: 'HJ', name: 'Hendrick Janszoon', age: 44,
      role: L('Opperkoopman (kepala pedagang loji VOC)', 'Opperkoopman (head merchant of the VOC post)'),
      statement: L(
        '“Aku kepala pedagang di sini, bukan tukang racun. Van Aken juru bukuku — kematiannya kerugian bagi Kompeni. Pasti ulah pencuri pribumi yang menyelinap ke gudang.”',
        `“I am the head merchant here, not a poisoner. Van Aken was my bookkeeper — his death is a loss to the Company. It must be the work of some native thief who slipped into the warehouse.”`
      ),
      motive: L('Memalsukan timbangan dan menjual lada Kompeni diam-diam ke Inggris; van Aken nyaris membongkarnya.', `Falsifying the scale and secretly selling the Company's pepper to the English; van Aken was on the verge of exposing it.`),
      alibi: L('Mengaku di biliknya semalaman — dibantah catatan jaga gerbang.', 'Claims he was in his chamber all night — contradicted by the gate watch log.'),
      interrogation: [
        { q: L('Apa hubungan Anda dengan van Aken?', 'What was your relationship with van Aken?'),
          a: L('Ia juru bukuku, itu saja. Hubungan kerja biasa. Aku tak sempat mengurus tiap angka — untuk itulah ada juru buku.', 'He was my bookkeeper, that is all. An ordinary working relationship. I had no time to tend to every figure — that is what a bookkeeper is for.') },
        { q: L('Buku besar mencatat 300 karung lada hilang. Ke mana?', 'The ledger records 300 sacks of pepper missing. Where did they go?'),
          a: L('Penyusutan. Lembap, tikus, kuli yang menggerogoti. Lada menguap, Tuan. Jangan mencari kejahatan di tempat yang hanya ada kelalaian.', 'Shrinkage. Damp, rats, coolies pilfering. Pepper evaporates, sir. Do not go looking for crime where there is only carelessness.'), requires: 'grootboek' },
        { q: L('Catatan jaga menyebut Anda keluar ke gudang pukul sembilan.', 'The watch log says you went out to the warehouse at nine.'),
          a: L('Itu... aku sekadar memeriksa muatan sebentar. Penjaga pasti salah catat jamnya. Aku kembali tidur, dan tahu kabar ini pagi tadi seperti yang lain.', 'That... I merely went to check the cargo for a moment. The guard must have noted the hour wrong. I went back to sleep, and learned the news this morning like everyone else.'), requires: 'wachtlog' },
      ],
    },
    {
      id: 'sastra', init: 'ST', name: 'Sastra', age: 29,
      role: L('Juru bahasa (penerjemah Melayu–Belanda)', 'Interpreter (Malay–Dutch translator)'),
      statement: L(
        '“Tuan van Aken mempercayaiku menerjemahkan, tapi rahasianya ia simpan dalam tulisan Belandanya sendiri. Ia berpesan: jangan percaya lidah, percayalah pada kata-katanya.”',
        `“Tuan van Aken trusted me to translate, but his secrets he kept in his own Dutch hand. He told me: do not trust the tongue, trust his words.”`
      ),
      motive: L('Mengenal bahasa Belanda dan rahasia loji — tapi setia pada van Aken.', 'Knows Dutch and the secrets of the post — but was loyal to van Aken.'),
      alibi: L('Menerjemahkan surat di rumah syahbandar hingga larut, di depan banyak saksi.', `Translating letters at the harbormaster's house until late, before many witnesses.`),
      interrogation: [
        { q: L('Kau paham tulisan Belanda Tuan van Aken?', `Do you understand Tuan van Aken's Dutch writing?`),
          a: L('Cukup paham. Dan Tuan van Aken berpesan keras: “kebenaran ada pada kata-kataku dalam bahasa Belanda — pahami sendiri.” Ia tak percaya lidah penerjemah, hanya tintanya. Bacalah tiap tulisan Belanda di berkas itu, Tuan; di sanalah pelakunya menyebut dirinya.', `Well enough. And Tuan van Aken charged me firmly: “the truth lies in my words in Dutch — understand it yourself.” He did not trust a translator's tongue, only his own ink. Read every Dutch line in that file, sir; that is where the culprit names himself.`) },
        { q: L('Apakah van Aken menyimpan catatan rahasia?', 'Did van Aken keep secret records?'),
          a: L('Ya. Sebuah dagboek — buku harian — yang ia sembunyikan di balik papan lantai kantornya, terpisah dari buku Kompeni. Ia ketakutan pada seseorang berpangkat. Akan kutunjukkan tempatnya.', `Yes. A dagboek — a diary — that he hid beneath a floorboard in his office, kept apart from the Company's books. He was afraid of someone of rank. I will show you the place.`), unlocks: 'dagboek' },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Di rumah syahbandar, menerjemahkan surat-surat dagang sampai dini hari, ditemani banyak orang. Aku baru mendengar kabar duka itu saat fajar.', `At the harbormaster's house, translating trade letters until the small hours, in the company of many. I only heard the sad news at dawn.`) },
      ],
    },
    {
      id: 'maerten', init: 'MV', name: 'Maerten de Vries', age: 31,
      role: L('Onderkoopman (pedagang muda)', 'Onderkoopman (junior merchant)'),
      statement: L(
        '“Aku berselisih dengan van Aken soal angka, ya. Tapi aku onderkoopman — pedagang muda. Yang memegang kunci timbangan dan gudang besar bukanlah aku.”',
        `“I quarreled with van Aken over figures, yes. But I am an onderkoopman — a junior merchant. The one who holds the key to the scale and the great warehouse is not me.”`
      ),
      motive: L('Ambisius; bisa naik pangkat bila atasannya jatuh.', 'Ambitious; stands to rise in rank if his superior falls.'),
      alibi: L('Di kapal mencatat muatan bersama nakhoda hingga dini hari.', 'Aboard ship recording cargo with the skipper until the small hours.'),
      interrogation: [
        { q: L('Anda berselisih dengan van Aken?', 'You were at odds with van Aken?'),
          a: L('Soal angka, sering. Ia kaku pada pembukuan. Tapi adu mulut dagang bukanlah racun di cawan.', `Over figures, often. He was rigid about the books. But a trader's quarrel is not poison in a cup.`) },
        { q: L('Anda diuntungkan bila atasan jatuh?', 'You stand to gain if your superior falls?'),
          a: L('Mungkin aku naik pangkat. Tapi camkan: aku onderkoopman, bukan opperkoopman. Timbangan dan kunci gudang besar ada di tangan atasanku, bukan tanganku.', `Perhaps I would rise in rank. But mark this: I am an onderkoopman, not an opperkoopman. The scale and the key to the great warehouse are in my superior's hands, not mine.`) },
        { q: L('Di mana Anda malam itu?', 'Where were you that night?'),
          a: L('Di kapal, mencatat muatan bersama Nakhoda Pieter sampai dini hari. Tanyakan padanya.', 'Aboard ship, recording cargo with Skipper Pieter until the small hours. Ask him.') },
      ],
    },
    {
      id: 'pieter', init: 'PS', name: 'Pieter Schenck', age: 38,
      role: L('Schipper (nakhoda kapal)', `Schipper (ship's captain)`),
      statement: L(
        '“Aku mengangkut lada sesuai surat jalan. Apa yang ditimbang dan dicatat di darat, itu urusan orang darat, bukan urusanku di laut.”',
        `“I haul the pepper as the bill of lading says. What is weighed and recorded ashore is the business of the men on land, not mine at sea.”`
      ),
      motive: L('Mengangkut lada; bisa saja terlibat penyelundupan.', 'Hauls the pepper; could well be in on the smuggling.'),
      alibi: L('Di kapal bersama de Vries sepanjang malam.', 'Aboard ship with de Vries all night.'),
      interrogation: [
        { q: L('Anda yang mengangkut lada itu?', 'You are the one who hauls the pepper?'),
          a: L('Ke kapal, sesuai daftar muat yang diserahkan padaku. Yang menentukan berat dan jumlah adalah timbangan darat, bukan geladakku.', 'To the ship, according to the loading list handed to me. What sets the weight and the count is the scale ashore, not my deck.') },
        { q: L('Jika 300 karung hilang, bukankah lewat kapal Anda?', `If 300 sacks went missing, did they not pass through your ship?`),
          a: L('Aku memuat persis sesuai surat jalan dari loji. Kalau selisihnya muncul, itu lahir di timbangan darat — sebelum sampai ke tanganku.', 'I loaded exactly as the bill of lading from the post said. If a discrepancy appears, it was born at the scale ashore — before it ever reached my hands.'), requires: 'grootboek' },
        { q: L('Di mana Anda malam itu?', 'Where were you that night?'),
          a: L('Di kapal bersama de Vries, mencatat muatan. Kami tak turun ke darat sampai pagi.', 'Aboard ship with de Vries, recording cargo. We did not set foot on land until morning.') },
      ],
    },
    {
      id: 'wirasaba', init: 'KW', name: 'Ki Wirasaba', age: 50,
      role: L('Saudagar lada Banten (pemasok loji)', 'A pepper merchant of Banten (supplier to the post)'),
      statement: L(
        '“Juru buku itu menuduh timbanganku curang, padahal timbangan merekalah yang ganjil. Aku marah, ya — tapi aku tak meracuni siapa pun, dan aku tak bisa baca coretan Belanda mereka.”',
        `“That bookkeeper accused my scale of cheating, when it was their scale that was crooked. I was angry, yes — but I poisoned no one, and I cannot read their Dutch scribbles.”`
      ),
      motive: L('Bersitegang dengan van Aken soal penimbangan; merasa dipersalahkan atas selisih lada.', 'Clashed with van Aken over the weighing; felt blamed for the pepper shortfall.'),
      alibi: L('Di kampungnya bersama keluarga; tak bisa membaca bahasa Belanda.', 'In his village with his family; cannot read Dutch.'),
      interrogation: [
        { q: L('Anda memasok lada ke loji ini?', 'You supply pepper to this post?'),
          a: L('Bertahun-tahun. Lalu juru buku itu menuduh timbanganku curang di depan umum. Aku tersinggung, tapi tersinggung tak sama dengan membunuh.', 'For years. Then that bookkeeper accused my scale of cheating in front of everyone. I was offended, but being offended is not the same as killing.') },
        { q: L('Keris Anda ditemukan dekat gudang.', 'Your kris was found near the warehouse.'),
          a: L('Tertinggal saat aku mengantar lada siang harinya. Lihat, bilahnya bersih. Lagipula kudengar van Aken diracun, bukan ditikam. Keris tak menuang racun ke cawan.', 'Left behind when I delivered the pepper earlier in the day. Look, the blade is clean. Besides, I hear van Aken was poisoned, not stabbed. A kris does not pour poison into a cup.'), requires: 'kris' },
        { q: L('Anda bisa membaca tulisan Belanda mereka?', 'Can you read their Dutch writing?'),
          a: L('Tidak sepatah pun. Bagiku coretan itu cuma cakar ayam. Kalau rahasia mereka tersimpan di situ, akulah orang terakhir yang bisa mengetahuinya.', 'Not a word. To me those scribbles are mere chicken scratches. If their secret is kept in there, I am the last person who could ever know it.') },
      ],
    },
    {
      id: 'inten', init: 'IN', name: 'Inten', age: 22,
      role: L('Pelayan loji (penyaji minuman)', 'A servant of the post (who serves the drinks)'),
      statement: L(
        '“Aku hanya menuang dan mengantar minuman. Malam itu Tuan Hendrick menyuruhku menyiapkan dua cawan jenever untuk dibawa ke gudang, lalu melarangku ikut masuk.”',
        `“I only pour and carry the drinks. That night Tuan Hendrick told me to prepare two cups of jenever to be brought to the warehouse, then forbade me to come in.”`
      ),
      motive: L('Tak punya alasan; sekadar penyaji minuman yang menyentuh cawan.', 'Has no reason; merely the drink-server who touched the cups.'),
      alibi: L('Disuruh kembali ke dapur dan dilarang mendekati gudang.', 'Sent back to the kitchen and forbidden to go near the warehouse.'),
      interrogation: [
        { q: L('Kau yang menyajikan minuman di loji?', 'You are the one who serves the drinks at the post?'),
          a: L('Ya, Tuan. Aku menuang jenever untuk para tuan Belanda. Malam itu Tuan Hendrick memintaku menyiapkan dua cawan untuk dibawa ke gudang — katanya ia menerima tamu.', 'Yes, sir. I pour the jenever for the Dutch masters. That night Tuan Hendrick asked me to prepare two cups to be brought to the warehouse — he said he was receiving a guest.') },
        { q: L('Dua cawan ditemukan di gudang, satu diseka bersih.', 'Two cups were found in the warehouse, one wiped clean.'),
          a: L('Aku hanya menuang dan meletakkannya. Tuan Hendrick sendiri yang membawanya masuk ke gudang dan melarangku ikut. Apa yang terjadi di dalam, aku tak tahu.', 'I only poured them and set them down. Tuan Hendrick himself carried them into the warehouse and forbade me to follow. What happened inside, I do not know.'), requires: 'beker' },
        { q: L('Lalu kau ke mana?', 'And then where did you go?'),
          a: L('Disuruh kembali ke dapur dan tidur. Aku tak diizinkan mendekat gudang malam itu, jadi tak kulihat siapa pun keluar-masuk.', 'I was sent back to the kitchen to sleep. I was not allowed near the warehouse that night, so I saw no one come or go.') },
      ],
    },
  ],
  timeline: [
    { t: L('Berbulan ini', 'For months now'), key: false, x: L('Hendrick memalsukan timbangan gudang dan menjual lada Kompeni yang “hilang” diam-diam kepada orang Inggris.', `Hendrick has been falsifying the warehouse scale and secretly selling the Company's “missing” pepper to the English.`) },
    { t: L('Siang itu', 'That afternoon'), key: false, x: L('Van Aken merampungkan hitungan: 300 karung lada hilang dari catatan. Ia menuliskan kebenarannya dalam dagboek berbahasa Belanda.', 'Van Aken finishes his reckoning: 300 sacks of pepper missing from the records. He writes the truth down in his Dutch dagboek.') },
    { t: L('Pukul 9 malam', '9 in the evening'), key: true, x: L('Hendrick memancing van Aken ke gudang lewat secarik pesan Belanda, dan menyuruh Inten menyiapkan dua cawan jenever.', 'Hendrick lures van Aken to the warehouse with a scrap of a note in Dutch, and has Inten prepare two cups of jenever.') },
    { t: L('Tengah malam', 'Midnight'), key: true, x: L('Di gudang, Hendrick membubuhkan rattenkruit (arsenik) ke cawan van Aken, lalu menyeka bersih cawannya sendiri.', `In the warehouse, Hendrick slips rattenkruit (arsenic) into van Aken's cup, then wipes his own cup clean.`) },
    { t: L('Fajar', 'Dawn'), key: false, x: L('Jasad van Aken ditemukan di antara karung lada; para tuan loji bergegas menyebutnya ulah pencuri.', `Van Aken's body is found among the sacks of pepper; the masters of the post rush to call it a thief's doing.`) },
  ],
  solution: {
    killer: 'hendrick',
    proofLabels: {
      motive: { label: L('Motif', 'Motive'), hint: L('Rahasia apa yang van Aken ancam bongkar?', 'What secret did van Aken threaten to expose?') },
      means: { label: L('Cara', 'Means'), hint: L('Bagaimana van Aken dibungkam?', 'How was van Aken silenced?') },
      opportunity: { label: L('Kesempatan', 'Opportunity'), hint: L('Siapa yang memikatnya ke gudang malam itu?', 'Who lured him to the warehouse that night?') },
    },
    motive: ['grootboek', 'weegschaal', 'dagboek', 'engelsen'],
    means: ['beker', 'mayat', 'gif'],
    opportunity: ['briefje', 'wachtlog'],
  },
  reveal: {
    sections: [
      { h: L('Bahasa yang membongkar', 'The language that gives him away'), p: [
        L('Pembunuhnya bertaruh pada satu hal: bahwa di pelabuhan ini hampir tak ada yang bisa membaca bahasa Belanda. Maka ia leluasa menuliskan kejahatannya — dan menyebut dirinya sendiri — di atas kertas.', 'The killer wagered on one thing: that in this port almost no one could read Dutch. So he wrote his crime down freely — and named himself — on paper.'),
        L('Tapi van Aken seorang pencatat. Pesan terakhirnya jelas: “De waarheid staat in mijn woorden. Lees het Nederlands.” — Kebenaran ada pada kata-kataku; bacalah bahasa Belandanya. Siapa pun yang menerjemahkan kertas-kertas itu akan menemukan pelakunya tanpa ragu.', 'But van Aken was a man of records. His final message was plain: “De waarheid staat in mijn woorden. Lees het Nederlands.” — The truth lies in my words; read the Dutch. Anyone who translates those papers will find the culprit beyond doubt.'),
      ] },
      { h: L('Apa yang dikatakan kata-kata Belanda itu', 'What the Dutch words say'), p: [
        L('Buku besar: 300 karung lada “vermist” — hilang dari catatan, bukan dari rak; selisih yang lahir di timbangan yang dicurangi. Buku harian rahasia menyebut pelakunya terang-terangan: “de opperkoopman” memalsukan timbangan dan menjual lada gelap kepada orang Inggris — bukan onderkoopman, bukan nakhoda. Surat ke loji Inggris ditandatangani “H.J.”. Pesan pancingan ke gudang ditandatangani “H”. Dan catatan jaga gerbang mencatat “opperkoopman H.J.” keluar ke gudang pukul sembilan malam.', 'The ledger: 300 sacks of pepper “vermist” — missing from the records, not from the rack; a shortfall born at the rigged scale. The secret diary names the culprit outright: “de opperkoopman” was falsifying the scale and selling pepper on the black market to the English — not the onderkoopman, not the skipper. The letter to the English post is signed “H.J.” The note luring him to the warehouse is signed “H.” And the gate watch log records “opperkoopman H.J.” going out to the warehouse at nine in the evening.'),
        L('Setiap kutipan menunjuk satu orang yang sama: Hendrick Janszoon, sang opperkoopman.', 'Every quotation points to one and the same man: Hendrick Janszoon, the opperkoopman.'),
      ] },
      { h: L('Malam di gudang', 'The night in the warehouse'), p: [
        L('Van Aken menemukan selisih 300 karung dan menuliskan kebenarannya. Sebelum ia sempat membongkarnya, Hendrick memancingnya ke gudang lewat pesan Belanda, menyuruh Inten menyiapkan dua cawan jenever, lalu melarang siapa pun ikut masuk. Di antara karung lada, ia membubuhkan rattenkruit — arsenik dari petinya sendiri — ke cawan van Aken, dan menyeka bersih cawannya sendiri agar tak meninggalkan jejak. Catatan jaga gerbang membongkar jam-jamnya; botol racun di petinya membongkar tangannya.', `Van Aken discovered the shortfall of 300 sacks and wrote down the truth. Before he could expose it, Hendrick lured him to the warehouse with a note in Dutch, had Inten prepare two cups of jenever, then forbade anyone to come in. Among the sacks of pepper, he slipped rattenkruit — arsenic from his own chest — into van Aken's cup, and wiped his own cup clean to leave no trace. The gate watch log gives away his hours; the bottle of poison in his chest gives away his hand.`),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L('De Vries memang ambisius — tapi ia onderkoopman, bukan opper-; tulisan Belanda itu menyebut pangkat yang lebih tinggi, dan malam itu ia di kapal. Pieter mengangkut lada tapi tak memegang timbangan darat tempat selisih dilahirkan. Ki Wirasaba bersitegang dengan van Aken dan kerisnya tergeletak dekat gudang — tapi van Aken diracun bukan ditikam, dan ia bahkan tak bisa membaca rahasia yang tersimpan dalam bahasa Belanda. Inten menyentuh cawan, tapi atas perintah Hendrick, yang lalu melarangnya masuk dan menyeka cawannya sendiri. Sastra sang juru bahasa justru orang yang menuntunmu kepada kebenaran. Hanya satu nama yang ditulis berulang dalam bahasa Belanda itu: Hendrick Janszoon, opperkoopman.', `De Vries was ambitious, true — but he is an onderkoopman, not an opper-; the Dutch writing names the higher rank, and that night he was aboard ship. Pieter hauls the pepper but does not hold the scale ashore where the shortfall was born. Ki Wirasaba clashed with van Aken and his kris lay near the warehouse — but van Aken was poisoned, not stabbed, and he could not even read the secret kept in Dutch. Inten touched the cups, but on Hendrick's orders, who then forbade her to enter and wiped his own cup clean. Sastra the interpreter is, in fact, the one who leads you to the truth. Only one name is written again and again in that Dutch: Hendrick Janszoon, opperkoopman.`),
      ] },
    ],
    rebuttals: {
      sastra: L('Sastra paham bahasa Belanda dan tahu banyak rahasia loji — tapi justru ialah yang menuntunmu ke buku harian van Aken dan menyuruhmu membaca kata-katanya. Malam itu ia menerjemahkan surat di rumah syahbandar di depan banyak saksi.', `Sastra understands Dutch and knows many of the post's secrets — but he is the very one who leads you to van Aken's diary and bids you read its words. That night he was translating letters at the harbormaster's house before many witnesses.`),
      maerten: L('Maerten de Vries ambisius dan bisa naik pangkat bila atasan jatuh — tapi tulisan Belanda menyebut “opperkoopman”, bukan “onderkoopman”, dan malam itu ia mencatat muatan di kapal bersama nakhoda.', 'Maerten de Vries is ambitious and stands to rise if his superior falls — but the Dutch writing names the “opperkoopman,” not the “onderkoopman,” and that night he was aboard ship recording cargo with the skipper.'),
      pieter: L('Pieter Schenck mengangkut lada dan bisa saja menyelundupkan — tapi selisih 300 karung lahir di timbangan darat yang dicurangi, bukan di geladaknya; malam itu ia di kapal bersama de Vries.', 'Pieter Schenck hauls the pepper and could well be smuggling — but the shortfall of 300 sacks was born at the rigged scale ashore, not on his deck; that night he was aboard ship with de Vries.'),
      wirasaba: L('Ki Wirasaba bersitegang dengan van Aken dan kerisnya ada di dekat gudang — tapi keris itu bersih dan tertinggal sejak siang, sedang van Aken mati diracun. Ia pun tak bisa membaca sepatah pun bahasa Belanda tempat rahasia itu tersimpan.', 'Ki Wirasaba clashed with van Aken and his kris lay near the warehouse — but the kris is clean and had been left there since the afternoon, while van Aken died of poison. And he cannot read a single word of the Dutch in which the secret is kept.'),
      inten: L('Inten menyiapkan dan menyentuh cawan — tapi atas perintah Hendrick, yang membawanya sendiri ke gudang, melarang Inten masuk, lalu menyeka cawannya sendiri. Ia penyaji, bukan peracun.', `Inten prepared and handled the cups — but on Hendrick's orders, who carried them to the warehouse himself, forbade Inten to enter, then wiped his own cup clean. She is a server, not a poisoner.`),
    },
  },
}
