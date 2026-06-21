import { L } from '../i18n/L'

// Case 5 (gated). Original mystery transplanting Agatha Christie's
// "The Mysterious Affair at Styles" (1920, public domain) to modern Jakarta:
// the too-obvious suspect, a delayed poison that defeats the alibi, and an
// accomplice who feigns hatred. Hardest to guess so far.
export const anggrek = {
  id: 'anggrek',
  free: false,
  difficulty: 'Sedang',
  code: 'WA-0726',
  location: L('Wisma Anggrek, Menteng, Jakarta', 'Wisma Anggrek, Menteng, Jakarta'),
  scene: 'estate',
  title: L('Maut di Wisma Anggrek', 'Death at Wisma Anggrek'),
  blurb: L(
    'Sang matriark Wijaya Group tewas di kamarnya. Suami mudanya punya alibi sempurna — justru di situ letak masalahnya.',
    `The matriarch of the Wijaya Group is found dead in her room. Her young husband has a perfect alibi — and that is exactly the problem.`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi, terinspirasi novel klasik Agatha Christie "The Mysterious Affair at Styles" (1920) — dipindahkan ke Jakarta masa kini. Seluruh tokoh, nama, dan kejadian rekaan; kemiripan dengan orang nyata tidak disengaja.',
      `This is a work of fiction, inspired by Agatha Christie's classic novel "The Mysterious Affair at Styles" (1920) — transplanted to present-day Jakarta. All characters, names, and events are invented; any resemblance to real persons is unintentional.`
    ),
    source: {
      label: L(
        'Terinspirasi: "The Mysterious Affair at Styles" — Agatha Christie',
        `Inspired by: "The Mysterious Affair at Styles" — Agatha Christie`
      ),
      url: 'https://en.wikipedia.org/wiki/The_Mysterious_Affair_at_Styles',
    },
  },
  cover: {
    lead: L(
      'Sebuah rumah tua nan megah di Menteng, sebuah kerajaan bisnis, dan seorang janda kaya yang menikah lagi dengan pria jauh lebih muda. Lalu, satu pagi, ia tak pernah bangun.',
      `A grand old house in Menteng, a business empire, and a wealthy widow who married again — to a man far younger than herself. Then, one morning, she simply never woke.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Hartati Wijaya membangun Wijaya Group dari nol menjadi imperium properti. Di usia 68, ia mengejutkan keluarga dengan menikahi Reza Maulana — pria 34 tahun yang pesonanya melebihi rekam jejaknya. Enam bulan kemudian, Hartati ditemukan tewas di kamarnya di Wisma Anggrek.',
        `Hartati Wijaya built the Wijaya Group from nothing into a property empire. At 68, she stunned her family by marrying Reza Maulana — a 34-year-old man whose charm far outstripped his track record. Six months later, Hartati was found dead in her room at Wisma Anggrek.`
      ),
      L(
        'Mula-mula semua menduga jantungnya — ia memang sakit-sakitan dan rutin minum tonik jantung tiap malam. Tapi dokter pribadinya menolak menandatangani "wajar" dan memaksa toksikologi. Hasilnya: ia diracun.',
        `At first everyone assumed it was her heart — she had long been frail and took a heart tonic faithfully every night. But her personal physician refused to sign off "natural causes" and insisted on toxicology. The result: she had been poisoned.`
      ),
      L(
        'Semua mata tertuju pada sang suami muda. Terlalu mudah, kata sebagian. Terlalu jelas, kata yang lain — seolah ada yang menjebaknya. Keluarga memanggil Anda sebelum kasus salah arah.',
        `All eyes turned to the young husband. Too easy, some said. Too obvious, said others — as if someone were framing him. The family has called you in before the case goes astray.`
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi keenam orang terdekat sang matriark. Lalu susun pembuktian — motif, cara, kesempatan. Hati-hati: di rumah ini, alibi yang sempurna dan kebencian yang lantang sama-sama bisa palsu.',
      `Examine every piece of evidence. Question the six people closest to the matriarch. Then build your case — motive, means, opportunity. Be careful: in this house, a perfect alibi and loud-spoken hatred can both be lies.`
    ),
  },
  victim: {
    init: 'HW',
    name: 'Hartati Wijaya',
    meta: L('68 tahun · pendiri & pemilik Wijaya Group', '68 · founder & owner of the Wijaya Group'),
    paras: [
      L(
        'Matriark yang disegani sekaligus ditakuti — memegang kendali penuh atas perusahaan dan hartanya hingga napas terakhir. Enam bulan lalu ia menikahi Reza Maulana, membuat para pewaris gusar.',
        `A matriarch respected and feared in equal measure — she held absolute control over the company and her fortune until her final breath. Six months ago she married Reza Maulana, to the dismay of her heirs.`
      ),
      L(
        'Ditemukan tewas di kamarnya pukul 22.50, di nakas tergeletak gelas tonik jantung malamnya. Tak ada luka, tak ada tanda paksa masuk. Hanya jantung yang berhenti — terlalu dini, kata dokternya.',
        `Found dead in her room at 22:50, the glass of her nightly heart tonic still sitting on the nightstand. No wounds, no sign of forced entry. Only a heart that had stopped — too soon, said her doctor.`
      ),
    ],
  },
  evidence: [
    {
      id: 'racun', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Tonik jantung beracun', 'A poisoned heart tonic'),
      summary: L('Dosis mematikan obat jantung — tapi hanya pekat di dasar botol.', 'A lethal dose of heart medicine — but concentrated only at the bottom of the bottle.'),
      detail: L(
        'Toksikologi menemukan kadar digitalis (obat jantung) yang mematikan pada tonik Hartati. Anehnya, kadar di dasar botol jauh lebih pekat daripada di bagian atas — seolah zatnya mengendap. Dosis terakhir yang ia teguk adalah yang paling beracun.',
        `Toxicology found a lethal level of digitalis — a heart drug — in Hartati's tonic. Strangely, the concentration at the bottom of the bottle was far higher than near the top, as though the substance had settled. The very last dose she swallowed was the most poisonous of all.`
      ),
    },
    {
      id: 'endapan', icon: 'metadata', tag: L('Analisis', 'Analysis'),
      title: L('Mekanisme endapan', 'The mechanism of the sediment'),
      summary: L('Zat ditambahkan berhari-hari lalu agar obat mengendap & memekat.', 'A substance added days earlier, making the drug settle and concentrate.'),
      detail: L(
        'Analisis kimia menjelaskan keanehan itu: sebuah zat sengaja dicampurkan ke tonik beberapa hari sebelumnya, membuat obat jantung mengendap perlahan ke dasar. Racun tak diberikan pada malam kematian — ia dipasang berhari-hari sebelumnya, menunggu dosis terakhir. Alibi malam itu, milik siapa pun, jadi tak relevan.',
        `Chemical analysis explains the oddity: a substance was deliberately mixed into the tonic several days beforehand, causing the heart drug to settle slowly to the bottom. The poison was not administered on the night of the death — it was set in place days earlier, waiting for the final dose. Anyone's alibi for that night becomes irrelevant.`
      ),
    },
    {
      id: 'alibi', icon: 'cctv', tag: L('Rekaman', 'Recordings'),
      title: L('Alibi Reza di gala', `Reza's alibi at the gala`),
      summary: L('CCTV & foto: Reza di gala amal lintas kota saat kematian.', 'CCTV and photos: Reza at a charity gala across town at the time of death.'),
      detail: L(
        'Malam Hartati tewas, Reza tampak di sebuah gala amal di hotel seberang kota — terekam CCTV, berfoto dengan tamu, bahkan naik panggung pukul 21.30. Sebuah alibi yang nyaris sempurna untuk waktu kematian. Nyaris — sampai kau ingat racunnya sudah dipasang jauh sebelum malam itu.',
        `On the night Hartati died, Reza was seen at a charity gala in a hotel across the city — caught on CCTV, photographed with guests, even taking the stage at 21:30. An almost perfect alibi for the time of death. Almost — until you remember the poison had been set in place long before that night.`
      ),
    },
    {
      id: 'wasiat', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Berkas anulir & wasiat baru', 'Annulment papers & a new will'),
      summary: L('Hartati mulai membatalkan pernikahan & memangkas Reza.', 'Hartati had begun annulling the marriage and cutting Reza out.'),
      detail: L(
        'Di meja pengacaranya: berkas permohonan pembatalan pernikahan dan draf wasiat baru yang mencoret Reza hampir seluruhnya. Belum diteken. Selama belum sah, Reza tetap pewaris besar — tapi begitu diteken, ia kehilangan segalanya. Hartati hendak menutup pintu itu pekan ini.',
        `On her lawyer's desk: a petition to annul the marriage and a draft of a new will that struck out Reza almost entirely. Unsigned. Until it took effect, Reza remained a major heir — but the moment it was signed, he lost everything. Hartati meant to close that door this very week.`
      ),
    },
    {
      id: 'feud', icon: 'phone', tag: L('Ponsel', 'Phone'),
      title: L('Permusuhan Bu Endang & Reza', `The feud between Bu Endang and Reza`),
      summary: L('Pesan-pesan Bu Endang mencerca Reza terang-terangan.', 'Messages in which Bu Endang openly reviles Reza.'),
      detail: L(
        'Ponsel berisi pesan-pesan Bu Endang, asisten pribadi Hartati, yang berulang kali mencerca Reza: "penjilat", "pengincar harta". Permusuhan mereka jadi rahasia umum di rumah ini. Tak ada yang membayangkan dua orang yang saling membenci sekeras itu bisa bersekutu.',
        `The phone holds messages from Bu Endang, Hartati's personal assistant, repeatedly tearing into Reza: "bootlicker," "fortune hunter." Their enmity was an open secret in this house. No one would imagine that two people who hated each other so fiercely could be in league.`
      ),
    },
    {
      id: 'akses', icon: 'cup', tag: L('Barang Bukti', 'Evidence'),
      title: L('Siapa membawa tonik malam', 'Who carried the nightly tonic'),
      summary: L('Setiap malam, Reza sendiri yang mengantar tonik ke kamar Hartati.', `Every night, it was Reza himself who brought the tonic to Hartati's room.`),
      detail: L(
        'Catatan rumah tangga & kesaksian pembantu seragam: Bu Endang menyiapkan kotak obat, tapi yang membawa botol tonik ke kamar Hartati tiap malam — dan mengisinya ulang — adalah Reza, "sebagai tanda cinta". Hanya ia yang memegang botol itu hari demi hari, cukup lama untuk memasang racun yang menunggu.',
        `The household records and the servants' testimony agree: Bu Endang prepared the pill box, but the one who carried the tonic bottle to Hartati's room each night — and refilled it — was Reza, "as a token of love." He alone held that bottle day after day, long enough to set a waiting poison.`
      ),
    },
    {
      id: 'citra', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Jejak apotek Citra', `Citra's pharmacy trail`),
      summary: L('Zatnya bukan dari apoteknya; Citra di luar kota sepekan.', 'The substance did not come from her pharmacy; Citra was out of town all week.'),
      detail: L(
        'Citra, keponakan Hartati yang apoteker, jadi tersangka racun paling gampang. Tapi zat pengendap itu tak cocok dengan stok apoteknya, dan catatan sif serta tiket memastikan ia di luar kota sepanjang pekan tampering terjadi. Ia tak pernah menyentuh tonik di rumah ini.',
        `Citra, Hartati's pharmacist niece, made the easiest poison suspect of all. But the settling agent did not match her pharmacy's stock, and her shift records and travel tickets confirm she was out of town throughout the week the tampering took place. She never once touched the tonic in this house.`
      ),
    },
    {
      id: 'gilang', icon: 'ledger', tag: L('Dokumen', 'Document'),
      title: L('Utang & audit Gilang', `Gilang's debts & audit`),
      summary: L('Terlilit utang — tapi kematian ibunya membekukan asetnya.', `Drowning in debt — but his mother's death froze his assets.`),
      detail: L(
        'Gilang, putra sulung, terlilit utang dan takut kehilangan kendali perusahaan. Motif uang yang nyata. Namun kematian Hartati justru membekukan seluruh aset dalam proses waris — menjeratnya makin dalam dalam jangka pendek. Dan tiga hari itu ia di Singapura, ada boarding pass.',
        `Gilang, the eldest son, was buried in debt and feared losing control of the company. A real money motive. Yet Hartati's death froze every asset in probate — tightening the noose around him in the short term, not loosening it. And during those three days he was in Singapore; there is a boarding pass.`
      ),
    },
    {
      id: 'vial', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Vial racun di mobil Reza', `A poison vial in Reza's car`),
      summary: L('Sebotol kecil digitalis "ditemukan" di mobil Reza — terlalu rapi.', `A small bottle of digitalis "found" in Reza's car — too neat by half.`),
      herring: true,
      detail: L(
        'Sebuah vial digitalis ditemukan terselip di mobil Reza — lengkap dengan sidik jarinya. Terlalu gampang, terlalu rapi: seolah sengaja ditaruh agar ia tertuduh. Bagi banyak orang, ini bukti Reza dijebak. Tapi vial ini sama sekali bukan cara Hartati diracun — ia hanya umpan.',
        `A vial of digitalis was found tucked away in Reza's car — complete with his fingerprints. Too easy, too tidy: as if planted to cast him as the culprit. To many, this is proof that Reza was framed. But this vial was in no way how Hartati was poisoned — it is merely bait.`
      ),
    },
    {
      id: 'rahasia', icon: 'photo', tag: L('Temuan Tersembunyi', 'A Hidden Find'),
      title: L('Foto Reza & Bu Endang', 'A photo of Reza and Bu Endang'),
      summary: L('Mereka diam-diam sepasang kekasih, jauh sebelum semua ini.', 'They were secretly lovers, long before any of this.'),
      locked: true, twist: true,
      detail: L(
        'Tersembunyi di ponsel lama: foto dan pesan mesra Reza dan Bu Endang dari bertahun lalu — mereka sepasang kekasih jauh sebelum Reza mendekati Hartati. Kebencian Bu Endang yang lantang itu sandiwara: tameng agar tak seorang pun mengira mereka bersekutu. Hartati menemukan rahasia ini — dan itulah sebabnya ia bergegas membatalkan semuanya.',
        `Hidden on an old phone: tender photos and messages between Reza and Bu Endang from years ago — they were lovers long before Reza ever approached Hartati. Bu Endang's loud-spoken hatred was a performance: a shield so that no one would suspect them of being allies. Hartati discovered this secret — and that is why she rushed to undo it all.`
      ),
    },
  ],
  suspects: [
    {
      id: 'reza', init: 'RM', name: 'Reza Maulana', age: 34,
      role: L('Suami muda Hartati (6 bulan)', `Hartati's young husband (6 months)`),
      statement: L(
        '“Aku tahu bagaimana kelihatannya. Tapi malam itu aku di gala, di depan ratusan orang. Aku mencintainya — aku bahkan yang membawakan toniknya tiap malam.”',
        `“I know how it looks. But that night I was at the gala, in front of hundreds of people. I loved her — I was even the one who brought her tonic every night.”`
      ),
      motive: L('Tampak sebagai pengincar harta — atau korban yang dijebak.', 'Appears to be a fortune hunter — or a victim being framed.'),
      alibi: L('Tampil di gala amal lintas kota saat kematian (terekam CCTV).', 'Appeared at a charity gala across town at the time of death (caught on CCTV).'),
      interrogation: [
        { q: L('Di mana kau malam Hartati meninggal?', 'Where were you the night Hartati died?'),
          a: L('Di gala amal di hotel seberang kota, ratusan orang melihatku. Aku naik panggung pukul setengah sepuluh. Cek rekamannya.', 'At a charity gala in a hotel across the city; hundreds of people saw me. I took the stage at half past nine. Check the footage.') },
        { q: L('Soal anulir pernikahan yang diajukan Hartati?', 'And the annulment Hartati filed for?'),
          a: L('Salah paham kecil. Kami sedang memperbaikinya. Lagipula belum ada yang diteken — jadi untuk apa aku terburu-buru?', 'A small misunderstanding. We were patching it up. Besides, nothing had been signed yet — so why would I be in any hurry?'), requires: 'wasiat' },
        { q: L('Kau yang membawa tonik malamnya?', 'You were the one who brought her nightly tonic?'),
          a: L('Tiap malam, dengan tanganku sendiri. Itu bukti aku mencintainya, bukan sebaliknya. Jangan diputarbalik.', 'Every night, with my own hands. That proves I loved her, not the opposite. Do not twist it around.'), requires: 'akses' },
      ],
    },
    {
      id: 'endang', init: 'ES', name: 'Bu Endang Sulastri', age: 55,
      role: L('Asisten pribadi Hartati (belasan tahun)', `Hartati's personal assistant (over a decade)`),
      statement: L(
        '“Aku mengabdi pada Ibu belasan tahun. Aku benci melihat pria itu menguras hidupnya. Aku tak pernah menyembunyikan kebencianku.”',
        `“I served Ibu for more than a decade. I hated watching that man drain the life out of her. I never once hid my contempt.”`
      ),
      motive: L('Loyalis yang terang-terangan membenci Reza — atau begitu tampaknya.', 'A loyalist who openly despised Reza — or so it seems.'),
      alibi: L('Mengaku di kamarnya di paviliun belakang sepanjang malam.', 'Claims she was in her room in the rear pavilion all night.'),
      interrogation: [
        { q: L('Bagaimana hubunganmu dengan Reza?', 'How did you get along with Reza?'),
          a: L('Aku muak melihatnya menguras Ibu. Pria itu hanya mengincar harta, dan aku tak sungkan mengatakannya di depan mukanya.', 'I was sick of watching him bleed Ibu dry. The man was only after her fortune, and I had no qualms saying so to his face.') },
        { q: L('Benarkah kau sungguh membenci Reza?', 'Is it true you truly hated Reza?'),
          a: L('Tentu. Lihat saja semua pesanku padanya. Aku... kenapa kalian menatapku begitu? Itu... itu sudah lama sekali.', 'Of course. Just look at all the messages I sent him. I... why are you looking at me like that? That... that was a very long time ago.'), requires: 'feud', unlocks: 'rahasia' },
        { q: L('Siapa mengurus obat & tonik Hartati?', `Who handled Hartati's medicine and tonic?`),
          a: L('Aku menyiapkan kotak obat hariannya. Tapi yang mengantar botol tonik ke kamarnya tiap malam, suaminya. Selalu dia.', 'I prepared her daily pill box. But the one who carried the tonic bottle to her room every night was her husband. Always him.'), requires: 'akses' },
      ],
    },
    {
      id: 'gilang', init: 'GW', name: 'Gilang Wijaya', age: 44,
      role: L('Putra sulung, direktur Wijaya Group', 'Eldest son, director of the Wijaya Group'),
      statement: L(
        '“Aku bertengkar dengan Ibu soal perusahaan, ya. Tapi membunuhnya membekukan segalanya — aku justru paling rugi.”',
        `“I quarreled with Ibu over the company, yes. But killing her froze everything — I'm the one who loses the most.”`
      ),
      motive: L('Terlilit utang dan takut kehilangan kendali perusahaan.', 'Buried in debt and afraid of losing control of the company.'),
      alibi: L('Mengaku di Singapura untuk negosiasi bank selama tiga hari itu.', 'Claims he was in Singapore for bank negotiations during those three days.'),
      interrogation: [
        { q: L('Kau berselisih dengan ibumu soal perusahaan?', 'You were at odds with your mother over the company?'),
          a: L('Soal kendali, ya. Tapi kematiannya membekukan semua aset dalam proses waris. Aku makin terjepit, bukan terbebas.', 'Over control, yes. But her death froze every asset in probate. It cornered me further, it did not set me free.') },
        { q: L('Soal utang-utangmu?', 'And your debts?'),
          a: L('Aku sedang diaudit, dan tiga hari itu aku di Singapura menegosiasi bank. Boarding pass dan stempel imigrasiku ada.', 'I am being audited, and for those three days I was in Singapore negotiating with the bank. My boarding pass and immigration stamp are right here.'), requires: 'gilang' },
        { q: L('Kau mencurigai siapa?', 'Who do you suspect?'),
          a: L('Suaminya, jelas. Tapi katanya ia di gala malam itu... entahlah, aku bingung sendiri.', 'Her husband, obviously. But they say he was at the gala that night... I don\'t know, I confuse myself.') },
      ],
    },
    {
      id: 'citra', init: 'CA', name: 'Citra Anindya', age: 30,
      role: L('Keponakan Hartati, apoteker', `Hartati's niece, a pharmacist`),
      statement: L(
        '“Aku apoteker, jadi semua langsung menatapku. Tapi aku berutang segalanya pada Bu Hartati. Untuk apa aku membunuhnya?”',
        `“I'm a pharmacist, so everyone stared straight at me. But I owe Bu Hartati everything. Why on earth would I kill her?”`
      ),
      motive: L('Punya keahlian & akses pada obat keras.', 'Has the expertise and access to potent drugs.'),
      alibi: L('Bertugas di apotek kota lain sepanjang pekan tampering.', 'On duty at a pharmacy in another city throughout the week of the tampering.'),
      interrogation: [
        { q: L('Sebagai apoteker, kau bisa akses racun?', 'As a pharmacist, you could get hold of poison?'),
          a: L('Bisa, dan itu yang membuat semua menudingku. Tapi zat pengendap itu bukan dari apotekku, dan aku di luar kota sepekan itu.', 'I could, and that is exactly why everyone points at me. But the settling agent did not come from my pharmacy, and I was out of town that whole week.'), requires: 'citra' },
        { q: L('Hubunganmu dengan Bu Hartati?', 'Your relationship with Bu Hartati?'),
          a: L('Dia menyekolahkanku jadi apoteker. Aku berutang segalanya padanya.', 'She put me through school to become a pharmacist. I owe her everything.') },
        { q: L('Kau ke rumah ini belakangan?', 'Have you been to this house recently?'),
          a: L('Sudah berbulan tak datang. Sif-ku padat di kota sebelah — semua tercatat.', `I haven't come in months. My shifts in the next city kept me busy — it's all on record.`) },
      ],
    },
    {
      id: 'surya', init: 'DS', name: 'dr. Surya Halim', age: 58,
      role: L('Dokter pribadi Hartati & ahli toksikologi', `Hartati's personal physician & a toxicology expert`),
      statement: L(
        '“Aku yang menolak menandatangani surat kematian wajar. Kalau aku pelakunya, untuk apa kubongkar sendiri?”',
        `“I'm the one who refused to sign the death off as natural. If I were the culprit, why would I expose it myself?”`
      ),
      motive: L('Tahu betul setiap obat Hartati — termasuk toniknya.', `Knows every one of Hartati's medications intimately — including her tonic.`),
      alibi: L('Justru pihak yang memaksa autopsi & toksikologi.', 'In fact the very party who insisted on an autopsy and toxicology.'),
      interrogation: [
        { q: L('Kenapa kau curiga ini bukan kematian wajar?', 'Why did you suspect this was not a natural death?'),
          a: L('Jantungnya lemah, tapi pola hentinya janggal. Aku yang memaksa autopsi dan tes racun. Pelaku akan menutupinya, bukan membukanya.', 'Her heart was weak, but the way it stopped was odd. I am the one who pushed for the autopsy and the toxicology screen. A killer would bury that, not bring it to light.') },
        { q: L('Kau sedekat itu dengan keluarga?', 'Were you that close to the family?'),
          a: L('Dokter pribadi Hartati belasan tahun. Aku tahu setiap obatnya — termasuk tonik jantung itu.', `Hartati's personal physician for over a decade. I knew every one of her medicines — including that heart tonic.`) },
        { q: L('Apa yang aneh dari toniknya?', 'What was odd about the tonic?'),
          a: L('Kadar obat di ampas botol jauh lebih pekat daripada di atasnya. Seolah ada yang membuat zatnya mengendap perlahan.', 'The drug concentration in the dregs at the bottom of the bottle was far higher than near the top. As though someone had made the substance settle slowly.'), requires: 'endapan' },
      ],
    },
    {
      id: 'bayu', init: 'BW', name: 'Bayu Wijaya', age: 38,
      role: L('Putra bungsu, lama merantau', 'Youngest son, long away from home'),
      statement: L(
        '“Aku bertahun-tahun tak pulang. Aku bahkan tak sempat bertemu Ibu sebelum ia pergi.”',
        `“I hadn't come home in years. I didn't even get to see Ibu before she was gone.”`
      ),
      motive: L('Kembali ke Jakarta untuk meminta modal usaha.', 'Returned to Jakarta to ask for capital for a business venture.'),
      alibi: L('Baru mendarat dari luar negeri sehari setelah kematian.', 'Only landed from abroad a day after the death.'),
      interrogation: [
        { q: L('Sudah lama kau tak pulang?', 'Had you been away from home long?'),
          a: L('Bertahun-tahun. Aku baru mendarat dari Belanda sehari setelah Ibu pergi. Tak sempat berpamitan.', 'Years. I only landed from the Netherlands a day after Ibu passed. I never got to say goodbye.') },
        { q: L('Kau kembali untuk minta uang?', 'You came back to ask for money?'),
          a: L('Aku datang minta restu dan modal usaha, kuakui. Tapi aku tak pernah ada di rumah ini saat ia masih hidup.', 'I came for her blessing and seed money, I admit it. But I was never in this house while she was still alive.') },
        { q: L('Kau tahu soal anulir pernikahan?', 'Did you know about the annulment?'),
          a: L('Baru dengar dari Bu Endang lewat telepon — katanya Ibu mau mengusir Reza. Aku setuju saja.', 'I only heard from Bu Endang over the phone — she said Ibu wanted to drive Reza out. I was all for it.') },
      ],
    },
  ],
  timeline: [
    { t: L('H-3', 'D-3'), key: true, x: L('Tonik jantung Hartati diam-diam diutak-atik; zat aktifnya perlahan mengendap ke dasar botol.', `Hartati's heart tonic is secretly tampered with; its active ingredient slowly settles to the bottom of the bottle.`) },
    { t: L('19.30', '19:30'), key: false, x: L('Reza tampil di gala amal lintas kota (terekam CCTV).', 'Reza appears at a charity gala across town (caught on CCTV).') },
    { t: L('21.30', '21:30'), key: true, x: L('Hartati meminum tonik malam — dosis paling pekat dari dasar botol.', 'Hartati drinks her nightly tonic — the most concentrated dose, from the bottom of the bottle.') },
    { t: L('22.50', '22:50'), key: true, x: L('Hartati ditemukan tewas di kamarnya; mula-mula dikira serangan jantung.', 'Hartati is found dead in her room; at first it is taken for a heart attack.') },
    { t: L('Esoknya', 'The next day'), key: false, x: L('dr. Surya menolak menyebut "wajar" dan memaksa toksikologi.', `Dr. Surya refuses to call it "natural" and insists on toxicology.`) },
  ],
  solution: {
    killer: 'reza',
    motive: ['wasiat', 'rahasia'],
    means: ['endapan', 'racun'],
    opportunity: ['akses'],
  },
  reveal: {
    killerName: 'Reza Maulana',
    sections: [
      { h: L('Pelakunya: Reza Maulana', 'The killer: Reza Maulana'), p: [
        L('Hartati tidak mati karena jantungnya. Ia diracun lewat tonik malamnya. Reza memang punya alibi sempurna untuk malam kematian — tapi racun itu tak pernah diberikan malam itu.', `Hartati did not die of her heart. She was poisoned through her nightly tonic. Reza did have a perfect alibi for the night of the death — but the poison was never administered that night.`),
        L('Sebuah zat dicampurkan ke tonik berhari-hari sebelumnya, membuat obat jantung mengendap hingga dosis terakhir menjadi mematikan. Racun yang menunggu. Dan hanya satu orang yang memegang botol itu malam demi malam, cukup lama untuk memasangnya: Reza, yang "dengan penuh cinta" mengantar tonik ke kamar istrinya setiap malam.', `A substance was mixed into the tonic days beforehand, making the heart drug settle until the final dose turned lethal. A poison that waited. And only one person held that bottle night after night, long enough to set it: Reza, who "lovingly" carried the tonic to his wife's room every evening.`),
      ] },
      { h: L('Racun yang menunggu', 'The poison that waited'), p: [
        L('Inilah sebabnya alibi gala itu tak berarti. Pembunuh tak perlu hadir saat korban mati — ia hanya perlu memasang jebakan kimia jauh hari, lalu membiarkan kebiasaan korban menyelesaikannya. Justru alibi yang terlalu rapi itu yang seharusnya membuat curiga.', `This is why the gala alibi means nothing. The killer need not be present when the victim dies — he need only set a chemical trap well in advance, then let the victim's own habit finish the job. It is precisely that too-tidy alibi that should have raised suspicion.`),
      ] },
      { h: L('Pasangan yang berpura-pura', 'The couple who pretended'), p: [
        L('Bu Endang, sang asisten yang mencerca Reza terang-terangan, sesungguhnya kekasih lamanya — jauh sebelum Reza mendekati Hartati. Kebencian yang lantang itu sandiwara, tameng agar tak seorang pun mengira mereka bersekutu. Hartati menemukan rahasia itu, lalu bergegas membatalkan pernikahan dan mencoret Reza dari wasiat. Mereka membunuhnya sebelum tinta itu kering — selagi Reza masih pewaris.', `Bu Endang, the assistant who reviled Reza out in the open, was in truth his old lover — long before Reza ever approached Hartati. The loud-spoken hatred was theater, a shield so that no one would suspect them of being allies. Hartati uncovered that secret, then rushed to annul the marriage and strike Reza from the will. They killed her before the ink could dry — while Reza was still an heir.`),
      ] },
      { h: L('Jebakan: alibi & vial', 'The misdirection: the alibi and the vial'), p: [
        L('Dua umpan menyesatkan kasus ini. Alibi gala membuat Reza tampak mustahil bersalah; vial digitalis yang "kebetulan" tertinggal di mobilnya membuatnya tampak dijebak. Keduanya perisai. Senjata yang sebenarnya bukan vial itu, melainkan kesabaran dan kimia — racun yang dipasang dan dibiarkan menunggu.', `Two baits lead this case astray. The gala alibi makes Reza seem impossible to convict; the digitalis vial "conveniently" left in his car makes him seem framed. Both are shields. The real weapon is not that vial, but patience and chemistry — a poison set in place and left to wait.`),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L('Citra si apoteker di luar kota sepekan, dan zatnya bukan dari stoknya. Gilang di Singapura, dan kematian ibunya justru membekukan asetnya. dr. Surya-lah yang membongkar racun itu — pelaku akan menutupinya. Bayu baru mendarat sehari setelahnya. Tiga unsur hanya bertemu pada satu orang: motif (anulir & rahasia yang terbongkar), cara (tonik yang diendapkan), kesempatan (hanya ia yang memegang tonik itu malam demi malam). Itu Reza — dengan Bu Endang sebagai sekutunya.', `Citra the pharmacist was out of town all week, and the substance did not come from her stock. Gilang was in Singapore, and his mother's death only froze his assets. It was Dr. Surya who exposed the poison — a killer would bury it. Bayu only landed a day afterward. The three elements meet in one person alone: motive (the annulment and the secret laid bare), means (the settled tonic), opportunity (he alone held that tonic night after night). That is Reza — with Bu Endang as his accomplice.`),
      ] },
    ],
    rebuttals: {
      endang: L('Bu Endang memang sekutunya — kebencian lantangnya cuma sandiwara untuk menutupi bahwa mereka sepasang kekasih. Tapi tangan yang memasang racun di tonik malam demi malam adalah Reza, sang suami yang memegang botol itu. Endang penyokong; peracunnya Reza.', `Bu Endang was indeed his accomplice — her loud hatred was only theater to mask the fact that they were lovers. But the hand that planted the poison in the tonic night after night was Reza's, the husband who held the bottle. Endang was the support; the poisoner was Reza.`),
      gilang: L('Utang dan ambisi Gilang nyata, tapi ia di Singapura selama pekan tampering, dan kematian ibunya membekukan seluruh aset waris — ia justru paling rugi dalam jangka pendek.', `Gilang's debts and ambition were real, but he was in Singapore during the week of the tampering, and his mother's death froze the entire inheritance — in the short term, he was the one who lost the most.`),
      citra: L('Apoteker memang tersangka racun yang paling gampang. Tapi Citra di luar kota sepanjang pekan, dan zat pengendap itu tak cocok dengan stok apoteknya. Ia tak pernah menyentuh tonik di rumah ini.', `The pharmacist does make the easiest poison suspect. But Citra was out of town the whole week, and the settling agent did not match her pharmacy's stock. She never touched the tonic in this house.`),
      surya: L('dr. Surya justru pihak yang menolak menyebut kematian ini "wajar" dan memaksa toksikologi. Pelaku akan mengubur kecurigaan, bukan menggalinya.', `Dr. Surya was in fact the one who refused to call this death "natural" and insisted on toxicology. A killer would bury the suspicion, not dig it up.`),
      bayu: L('Bayu baru mendarat dari luar negeri sehari setelah Hartati tewas. Ia datang mengincar modal usaha, tapi tak pernah berada di dekat tonik itu saat racunnya dipasang.', `Bayu only landed from abroad a day after Hartati died. He came chasing seed money, but he was never anywhere near that tonic when the poison was being set.`),
    },
  },
}
