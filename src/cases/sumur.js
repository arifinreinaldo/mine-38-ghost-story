import { L } from '../i18n/L'

// Case 8 (gated). The twist: there is NO murderer — the death was an
// accident, and every suspect is innocent. Set during the Japanese
// occupation of Indonesia (1944). Hardest case.
export const sumur = {
  id: 'sumur',
  free: false,
  difficulty: 'Sulit',
  code: 'PJ-1944',
  location: L('Kota kecil di Jawa · Pendudukan Jepang, 1944', 'A small town in Java · Japanese occupation, 1944'),
  scene: 'highland',
  title: L('Maut di Sumur Tua', 'Death at the Old Well'),
  blurb: L(
    'Seorang kolaborator yang dibenci sekota ditemukan tewas di dasar sumur tua, pagi setelah serangan udara. Semua orang punya alasan membunuhnya.',
    'A collaborator hated by the whole town is found dead at the bottom of an old well, the morning after an air raid. Everyone had a reason to kill him.'
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi, berlatar masa Pendudukan Jepang di Indonesia (1942–1945). Latarnya meminjam sejarah era itu — Kempeitai, tonarigumi (kumico), romusha, kelangkaan beras, dan serangan udara Sekutu. Seluruh tokoh, nama, dan kejadian rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
      'This is a work of fiction set during the Japanese occupation of Indonesia (1942–1945). Its backdrop borrows from the history of that era — the Kempeitai, the tonarigumi (kumico), romusha forced labor, rice shortages, and Allied air raids. All characters, names, and events are invented; any resemblance to real persons or events is unintended.'
    ),
    source: {
      label: L('Latar sejarah: "Japanese occupation of the Dutch East Indies" (Wikipedia)', 'Historical background: "Japanese occupation of the Dutch East Indies" (Wikipedia)'),
      url: 'https://en.wikipedia.org/wiki/Japanese_occupation_of_the_Dutch_East_Indies',
    },
  },
  cover: {
    lead: L(
      'Di kota yang kelaparan di bawah pendudukan, lelaki paling dibenci mati di dasar sumur. Semua menuding pembunuhan. Tapi kebenaran lebih dingin daripada dendam.',
      'In a starving town under occupation, the most hated man lies dead at the bottom of a well. Everyone cries murder. But the truth is colder than revenge.'
    ),
  },
  briefing: {
    paras: [
      L(
        'Tahun 1944. Di sebuah kota kecil di Jawa di bawah pendudukan Jepang, Pak Wirjo — sang kumico, kepala tonarigumi — menjadi orang paling dibenci. Ia melaporkan tetangga ke Kempeitai dan menimbun jatah beras saat rakyat kelaparan.',
        'The year is 1944. In a small town in Java under Japanese occupation, Pak Wirjo — the kumico, head of the tonarigumi — has become the most hated man around. He informs on his neighbors to the Kempeitai and hoards the rice ration while the people starve.'
      ),
      L(
        'Pada malam serangan udara Sekutu, sirene meraung dan kota gelap gulita. Pagi harinya, Pak Wirjo ditemukan tewas di dasar sumur tua di belakang rumahnya, kepala luka. Hampir setiap orang di kota ini punya alasan menginginkannya mati.',
        'On the night of an Allied air raid, the sirens wailed and the town fell into total darkness. By morning, Pak Wirjo was found dead at the bottom of the old well behind his house, his head wounded. Nearly everyone in this town had a reason to want him dead.'
      ),
      L(
        'Polisi militer hendak menutupnya sebagai pembunuhan oleh "pemberontak". Sebelum ada yang diseret ke Kempeitai untuk kejahatan yang mungkin tak pernah terjadi, keluarga yang ketakutan memanggil Anda. Periksa baik-baik: apakah ini benar-benar pembunuhan?',
        'The military police intend to close it as a murder by "rebels." Before anyone is dragged off to the Kempeitai for a crime that may never have happened, a terrified family has called you in. Look closely: was this really murder at all?'
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi keenam orang yang paling membencinya. Lalu simpulkan: siapa pembunuhnya — atau adakah pembunuh sama sekali? Susun pembuktianmu.',
      'Examine every piece of evidence. Question the six people who hated him most. Then conclude: who is the killer — or was there a killer at all? Build your case.'
    ),
  },
  victim: {
    init: 'PW',
    name: 'Pak Wirjo',
    meta: L('56 tahun · kumico (kepala tonarigumi)', '56 · kumico (head of the tonarigumi)'),
    paras: [
      L(
        'Tangan kanan pendudukan di kota ini: melaporkan siapa saja yang dicurigai ke Kempeitai, dan menimbun jatah beras untuk dijual gelap saat tetangganya mati kelaparan. Tak ada yang menangisi kepergiannya.',
        'The occupation\'s right hand in this town: he reported anyone he suspected to the Kempeitai, and hoarded the rice ration to sell on the black market while his neighbors starved to death. No one wept at his passing.'
      ),
      L(
        'Ditemukan di dasar sumur tua di belakang rumahnya pada subuh setelah serangan udara, dengan luka di kepala. Sumur itu sudah lama tak terpakai, tutupnya terbuka.',
        'He was found at the bottom of the old well behind his house at dawn after the air raid, with a wound to his head. The well had long fallen out of use, its cover left open.'
      ),
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Luka di kepala Pak Wirjo', 'The wound on Pak Wirjo\'s head'),
      summary: L('Satu benturan ke bawah — cocok dengan bibir batu sumur.', 'A single downward impact — matching the stone lip of the well.'),
      detail: L(
        'Luka tunggal di kepala, dengan arah benturan ke bawah dan lengkung yang pas dengan bibir batu sumur — bukan pukulan dari benda yang diayunkan seseorang. Tak ada luka pertahanan, tak ada bekas dipukul berulang. Bentuknya bentuk orang yang jatuh, bukan yang dibunuh.',
        'A single head wound, the force directed downward and its curve a perfect fit for the stone lip of the well — not a blow from an object swung by someone. No defensive wounds, no signs of repeated striking. Its shape is the shape of a man who fell, not one who was killed.'
      ),
    },
    {
      id: 'sumur', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Mulut sumur tua', 'The mouth of the old well'),
      summary: L('Tutup terbuka, bibir licin berlumut, hanya satu set tapak.', 'Cover open, lip slick with moss, only one set of footprints.'),
      detail: L(
        'Tutup sumur terbuka, bibirnya basah dan berlumut. Di tanah becek sekelilingnya hanya ada satu set tapak kaki — milik Pak Wirjo sendiri. Tak ada tapak kedua, tak ada bekas seret, tak ada tanda pergumulan. Tak seorang pun berdiri di tepi sumur itu bersamanya.',
        'The well cover was open, its lip wet and mossy. In the mud all around it there was only a single set of footprints — Pak Wirjo\'s own. No second set, no drag marks, no sign of a struggle. No one stood at the edge of that well with him.'
      ),
    },
    {
      id: 'serangan', icon: 'metadata', tag: L('Catatan', 'Records'),
      title: L('Malam serangan udara', 'The night of the air raid'),
      summary: L('Sirene & pemadaman total; semua berlarian ke tempat perlindungan.', 'Sirens and a total blackout; everyone scattered to the shelters.'),
      detail: L(
        'Malam itu sirene serangan udara Sekutu meraung dan seluruh kota wajib gelap gulita. Dalam kepanikan dan kegelapan pekat, semua orang berhamburan ke lubang perlindungan. Dalam kekacauan seperti itu, setiap orang tampak "berkeliaran" — dan tak seorang pun bisa melihat apa pun.',
        'That night the Allied air-raid sirens wailed and the entire town was ordered into total darkness. In the panic and the thick blackness, everyone rushed for the shelter trenches. In chaos like that, every single person seemed to be "wandering about" — and no one could see a thing.'
      ),
    },
    {
      id: 'sake', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Sake dalam tubuhnya', 'Sake in his body'),
      summary: L('Mabuk berat malam itu — dari simpanan gelapnya sendiri.', 'Dead drunk that night — from his own black-market stash.'),
      detail: L(
        'Tubuh Pak Wirjo penuh alkohol — sake simpanan hasil pasar gelapnya. Dalam keadaan mabuk berat, di tengah gelap total dan sirene yang meraung, langkahnya pasti limbung di tanah becek dekat sumur terbuka.',
        'Pak Wirjo\'s body was full of alcohol — sake from his own black-market stash. Dead drunk, in total darkness with the sirens wailing, his step must have been unsteady on the muddy ground beside the open well.'
      ),
    },
    {
      id: 'segel', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Stempel & kunci kumico', 'The kumico\'s seal and keys'),
      summary: L('Dikira dirampok — ternyata ada di dasar sumur bersamanya.', 'Thought to be stolen — but they were at the bottom of the well with him.'),
      detail: L(
        'Stempel jabatan dan kunci-kunci Pak Wirjo mula-mula disangka dicuri — petunjuk perampokan dan pembunuhan. Nyatanya semuanya ditemukan di dasar sumur, di sakunya, ikut jatuh bersamanya. Tak ada yang dicuri. Tak ada perampokan.',
        'Pak Wirjo\'s seal of office and his keys were at first assumed stolen — a sign of robbery and murder. In fact they were all found at the bottom of the well, in his pocket, fallen down with him. Nothing was taken. There was no robbery.'
      ),
    },
    {
      id: 'ancaman', icon: 'phone', tag: L('Dokumen', 'Document'),
      title: L('Surat ancaman lama', 'An old threatening letter'),
      summary: L('Surat kaleng "kau akan terima balasanmu" — bertanggal pekan lalu.', 'An anonymous note, "you will get what is coming to you" — dated last week.'),
      herring: true,
      detail: L(
        'Sepucuk surat kaleng ditemukan di rumahnya: "kau akan terima balasanmu". Tampak seperti petunjuk pembunuhan — sampai diperiksa tanggalnya: ditulis berminggu lalu, dan nadanya umum. Sekota ini membencinya; ancaman seperti ini sudah biasa ia terima. Tak ada kaitannya dengan malam itu.',
        'An anonymous note was found at his house: "you will get what is coming to you." It looked like a clue to murder — until the date was checked: written weeks ago, and vague in tone. The whole town hated him; threats like this were nothing new to him. It had nothing to do with that night.'
      ),
    },
    {
      id: 'saksi', icon: 'recon', tag: L('Saksi', 'Witness'),
      title: L('Anak kecil yang melihat', 'The child who saw'),
      summary: L('Melihat Pak Wirjo terhuyung ke sumur — seorang diri.', 'Saw Pak Wirjo stagger to the well — all alone.'),
      detail: L(
        'Seorang anak yang bersembunyi ketakutan saat sirene berbunyi melihat Pak Wirjo terhuyung-huyung sendirian ke arah sumur dalam gelap, sambil menggumam soal "simpananku". Tak ada yang mengikutinya, tak ada yang mendorongnya. Hanya dia, kegelapan, dan sumur menganga.',
        'A child hiding in fear as the sirens sounded saw Pak Wirjo staggering alone toward the well in the dark, muttering about "my stash." No one followed him, no one pushed him. Only him, the darkness, and the gaping well.'
      ),
    },
    {
      id: 'tempat', icon: 'metadata', tag: L('Catatan', 'Records'),
      title: L('Daftar hadir tempat perlindungan', 'The shelter attendance roll'),
      summary: L('Penjaga mencatat para tetangga di lubang perlindungan.', 'The wardens recorded the neighbors in the shelter trenches.'),
      detail: L(
        'Penjaga pertahanan udara (keibodan) mencatat siapa yang berlindung di lubang-lubang perlindungan selama serangan. Hampir semua nama yang dicurigai tercatat di sana sepanjang waktu kejadian — jauh dari rumah Pak Wirjo.',
        'The air-defense wardens (keibodan) recorded who took cover in the shelter trenches during the raid. Nearly every name under suspicion was logged there throughout the time of death — far from Pak Wirjo\'s house.'
      ),
    },
    {
      id: 'parang', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Parang Sukarni dekat sumur', 'Sukarni\'s machete near the well'),
      summary: L('Tampak memberatkan — tapi bersih, tanpa darah.', 'Looks damning — but clean, without a trace of blood.'),
      detail: L(
        'Sebilah parang milik Sukarni ditemukan tergeletak tak jauh dari sumur — petunjuk yang seakan menudingnya. Tapi parang itu bersih, tanpa setitik darah; ia hanyalah alat tani yang terjatuh saat Sukarni berlari menuntun tetangga ke tempat perlindungan dalam gelap.',
        'A machete belonging to Sukarni was found lying not far from the well — a clue that seemed to point straight at him. But the blade was clean, without a single drop of blood; it was only a farm tool, dropped as Sukarni ran to guide his neighbors to the shelter in the dark.'
      ),
    },
    {
      id: 'harta', icon: 'photo', tag: L('Temuan Tersembunyi', 'Hidden Find'),
      title: L('Simpanan di dasar sumur', 'The cache at the bottom of the well'),
      summary: L('Emas & beras timbunan — alasan ia ke sumur malam itu.', 'Hoarded gold and rice — the reason he went to the well that night.'),
      locked: true, twist: true,
      detail: L(
        'Di dasar sumur, bersama jasadnya: buntalan emas dan beras timbunan hasil pasar gelap, serta coretan tangannya sendiri tentang "menyembunyikannya di sumur". Saat sirene meraung dan kota gelap, ia bergegas mabuk ke sumur untuk menjaga hartanya dari penjarah — dan terjatuh ke dalamnya. Itulah sebabnya ia ada di sana, sendirian.',
        'At the bottom of the well, alongside his body: a bundle of gold and hoarded black-market rice, together with a note in his own hand about "hiding it in the well." When the sirens wailed and the town went dark, he rushed there drunk to guard his treasure from looters — and fell in. That is why he was there, alone.'
      ),
    },
  ],
  suspects: [
    {
      id: 'sukarni', init: 'SK', name: 'Sukarni', age: 24,
      role: L('Pemuda; ayahnya dibawa Kempeitai', 'A young man; his father was taken by the Kempeitai'),
      statement: L(
        '“Wirjo melaporkan ayahku. Ayahku tak pernah pulang dari Kempeitai. Ya, aku membencinya — tapi aku tak membunuhnya.”',
        '“Wirjo informed on my father. My father never came home from the Kempeitai. Yes, I hated him — but I did not kill him.”'
      ),
      motive: L('Ayahnya hilang setelah dilaporkan Wirjo ke Kempeitai.', 'His father vanished after Wirjo reported him to the Kempeitai.'),
      alibi: L('Menuntun tetangga ke tempat perlindungan saat serangan.', 'Was guiding neighbors to the shelter during the raid.'),
      interrogation: [
        { q: L('Apa yang Wirjo lakukan pada keluargamu?', 'What did Wirjo do to your family?'),
          a: L('Ia tunjuk ayahku sebagai "mata-mata". Kempeitai membawanya. Itu setahun lalu. Kami tak pernah lihat ayah lagi.', 'He named my father a "spy." The Kempeitai took him. That was a year ago. We never saw my father again.') },
        { q: L('Parangmu ada di dekat sumur. Jelaskan.', 'Your machete was near the well. Explain.'),
          a: L('Itu parang taniku. Pasti terjatuh waktu aku berlari menuntun orang ke lubang perlindungan dalam gelap. Periksa — tak ada darah.', 'That is my farm machete. It must have dropped when I ran to lead people to the shelter trench in the dark. Check it — there is no blood.'), requires: 'parang' },
        { q: L('Di mana kau saat sirene berbunyi?', 'Where were you when the sirens sounded?'),
          a: L('Membantu nenek-nenek turun ke lubang perlindungan. Penjaga mencatat namaku di sana. Banyak yang melihatku.', 'Helping the old women down into the shelter trench. The wardens logged my name there. Plenty of people saw me.'), requires: 'tempat' },
      ],
    },
    {
      id: 'inah', init: 'MI', name: 'Mbok Inah', age: 43,
      role: L('Penjual; berasnya dirampas', 'A market seller; her rice was seized'),
      statement: L(
        '“Anakku mati lapar sementara dia menimbun beras kami. Tapi mendoakannya celaka berbeda dengan mendorongnya ke sumur.”',
        '“My child starved to death while he hoarded our rice. But wishing harm upon him is not the same as pushing him into a well.”'
      ),
      motive: L('Beras keluarganya dirampas; anaknya mati kelaparan.', 'Her family\'s rice was seized; her child starved to death.'),
      alibi: L('Bersama perempuan lain di tempat perlindungan.', 'With the other women in the shelter.'),
      interrogation: [
        { q: L('Wirjo merampas berasmu?', 'Did Wirjo seize your rice?'),
          a: L('Atas nama "jatah", ya. Lalu ia jual gelap. Anakku... anakku tak bertahan. Tapi air mataku bukan racun.', 'In the name of the "ration," yes. Then he sold it on the black market. My child... my child did not survive. But my tears are no poison.') },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Berdesakan di lubang perlindungan bersama ibu-ibu sekampung, memeluk yang menangis. Tanya siapa saja di sana.', 'Crammed into the shelter trench with the village women, holding those who wept. Ask anyone who was there.'), requires: 'tempat' },
        { q: L('Kau pernah mengancamnya?', 'Did you ever threaten him?'),
          a: L('Aku memakinya di depan umum, ya. Tapi memaki tak menjatuhkan orang ke sumur.', 'I cursed him in public, yes. But cursing does not send a man down a well.') },
      ],
    },
    {
      id: 'hadi', init: 'GH', name: 'Pak Guru Hadi', age: 50,
      role: L('Guru; pernah disiksa Kempeitai', 'A teacher; once tortured by the Kempeitai'),
      statement: L(
        '“Aku dilaporkan karena mengajar cinta tanah air. Aku kembali dari Kempeitai tanpa beberapa kuku. Tapi aku guru, bukan pembunuh.”',
        '“I was reported for teaching love of country. I came back from the Kempeitai missing a few fingernails. But I am a teacher, not a killer.”'
      ),
      motive: L('Disiksa Kempeitai setelah dilaporkan Wirjo.', 'Tortured by the Kempeitai after Wirjo informed on him.'),
      alibi: L('Merawat yang terluka saat serangan udara.', 'Tending the wounded during the air raid.'),
      interrogation: [
        { q: L('Kenapa Wirjo melaporkanmu?', 'Why did Wirjo report you?'),
          a: L('Karena di kelas aku menyebut kata "merdeka". Itu cukup baginya. Aku diseret, disiksa, lalu dilepas sebagai peringatan.', 'Because in class I said the word "merdeka." That was enough for him. I was dragged off, tortured, then released as a warning.') },
        { q: L('Di mana kau saat kejadian?', 'Where were you when it happened?'),
          a: L('Di pos darurat, membalut luka orang-orang yang panik dan jatuh dalam gelap. Tanganku penuh kerja malam itu.', 'At the emergency post, binding the wounds of people who panicked and fell in the dark. My hands were full of work that night.'), requires: 'tempat' },
        { q: L('Kau yakin ini pembunuhan?', 'Are you sure this was murder?'),
          a: L('Semua ingin ia mati, itu benar. Tapi keinginan bukan perbuatan. Periksa lukanya baik-baik.', 'Everyone wanted him dead, that is true. But wanting is not doing. Examine the wound closely.'), requires: 'luka' },
      ],
    },
    {
      id: 'lim', init: 'BL', name: 'Babah Lim', age: 52,
      role: L('Pemilik kedai; diperas Wirjo', 'A shopkeeper; extorted by Wirjo'),
      statement: L(
        '“Tiap bulan ia memerasku. Aku benci membayarnya — tapi aku lebih takut keluar saat bom berjatuhan.”',
        '“Every month he extorted me. I hated paying him — but I feared going out under falling bombs even more.”'
      ),
      motive: L('Diperas rutin oleh Wirjo.', 'Routinely extorted by Wirjo.'),
      alibi: L('Berlindung di bawah kedainya saat serangan.', 'Sheltered beneath his shop during the raid.'),
      interrogation: [
        { q: L('Wirjo memerasmu?', 'Did Wirjo extort you?'),
          a: L('Tiap bulan, "uang keamanan". Kalau tidak, ia lapor aku ke Kempeitai. Begitulah hidup orang sepertiku di sini.', 'Every month, "protection money." Otherwise he would report me to the Kempeitai. That is life for someone like me here.') },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Meringkuk di gudang bawah kedaiku saat bom jatuh. Aku tak berani keluar sejengkal pun.', 'Curled up in the storeroom beneath my shop as the bombs fell. I did not dare step out an inch.') },
        { q: L('Menurutmu siapa pelakunya?', 'Who do you think did it?'),
          a: L('Entah. Tapi kalau ada yang merampoknya, kenapa stempel dan kuncinya masih ada padanya?', 'I do not know. But if someone robbed him, why were his seal and keys still on him?'), requires: 'segel' },
      ],
    },
    {
      id: 'karsono', init: 'KS', name: 'Karsono', age: 31,
      role: L('Anggota PETA', 'A member of PETA'),
      statement: L(
        '“Aku sering bentrok dengan Wirjo soal caranya menindas rakyat. Tapi malam itu aku bertugas di pos, bukan di sumurnya.”',
        '“I often clashed with Wirjo over the way he ground down the people. But that night I was on duty at the post, not at his well.”'
      ),
      motive: L('Berkali bentrok dengan Wirjo soal penindasannya.', 'Clashed with Wirjo time and again over his oppression.'),
      alibi: L('Bertugas jaga di pos PETA saat serangan.', 'On guard duty at the PETA post during the raid.'),
      interrogation: [
        { q: L('Apa masalahmu dengan Wirjo?', 'What was your quarrel with Wirjo?'),
          a: L('Ia memperlakukan rakyat seperti ternak dan berlindung di balik Jepang. Aku menentangnya terang-terangan.', 'He treated the people like cattle and hid behind the Japanese. I opposed him openly.') },
        { q: L('Di mana kau saat serangan udara?', 'Where were you during the air raid?'),
          a: L('Bertugas jaga di pos bersama anggota lain sepanjang alarm. Komandan dan kawan-kawan bisa bersaksi.', 'On guard duty at the post with the other men throughout the alarm. My commander and my comrades can testify.'), requires: 'tempat' },
        { q: L('Kau lihat sesuatu malam itu?', 'Did you see anything that night?'),
          a: L('Gelap total. Hanya sirene dan ledakan jauh. Tak ada yang bisa kulihat di kebun belakang rumahnya.', 'Total darkness. Only sirens and distant explosions. There was nothing I could see in the garden behind his house.') },
      ],
    },
    {
      id: 'tarno', init: 'TR', name: 'Tarno', age: 35,
      role: L('Keponakan Wirjo (calon pewaris)', 'Wirjo\'s nephew (the would-be heir)'),
      statement: L(
        '“Orang akan bilang aku mengincar simpanannya. Tapi justru aku yang tahu ke mana ia lari malam itu.”',
        '“People will say I was after his stash. But I am the very one who knew where he ran that night.”'
      ),
      motive: L('Akan mewarisi harta timbunan pamannya.', 'Stood to inherit his uncle\'s hoarded fortune.'),
      alibi: L('Tertidur mabuk di rumahnya saat serangan.', 'Passed out drunk at his home during the raid.'),
      interrogation: [
        { q: L('Kau akan mewarisi hartanya?', 'Were you to inherit his fortune?'),
          a: L('Kalau ada yang tersisa, mungkin. Tapi membunuhnya tak masuk akal — aku bahkan tak tahu persis di mana ia simpan semuanya. Hampir.', 'If anything was left, perhaps. But killing him made no sense — I did not even know exactly where he kept it all. Almost.') },
        { q: L('Apa yang dijaga pamanmu di sumur itu?', 'What was your uncle guarding in that well?'),
          a: L('Sumur? ...Astaga. Itu tempat ia sembunyikan emas dan beras timbunannya. Begitu sirene bunyi, ia pasti lari ke sana menjaganya. Ia selalu lebih sayang hartanya daripada nyawanya.', 'The well? ...My God. That is where he hid his hoarded gold and rice. The moment the sirens sounded, he would have run there to guard it. He always loved his treasure more than his own life.'), requires: 'sumur', unlocks: 'harta' },
        { q: L('Di mana kau saat kejadian?', 'Where were you when it happened?'),
          a: L('Tertidur mabuk di rumah. Memalukan, tapi benar. Tetangga mendengar aku mendengkur sepanjang serangan.', 'Passed out drunk at home. Shameful, but true. The neighbors heard me snoring throughout the raid.') },
      ],
    },
  ],
  timeline: [
    { t: L('Senja', 'Dusk'), key: false, x: L('Pak Wirjo minum sake simpanannya; kota mulai mencekam.', 'Pak Wirjo drinks from his stash of sake; the town grows tense.') },
    { t: L('Malam', 'Night'), key: true, x: L('Sirene serangan udara meraung; kota gelap total, semua berlari ke tempat perlindungan.', 'The air-raid sirens wail; the town goes pitch dark, everyone running for the shelters.') },
    { t: L('Saat gelap', 'In the dark'), key: true, x: L('Pak Wirjo terhuyung sendirian ke sumur tua untuk menjaga simpanannya.', 'Pak Wirjo staggers alone to the old well to guard his stash.') },
    { t: L('Saat gelap', 'In the dark'), key: true, x: L('Ia terpeleset di bibir sumur yang licin dan jatuh ke dalam; tak ada yang bersamanya.', 'He slips on the well\'s slick lip and falls in; no one was with him.') },
    { t: L('Subuh', 'Dawn'), key: false, x: L('Jasadnya ditemukan; semua langsung menduga pembunuhan.', 'His body is found; everyone instantly assumes murder.') },
  ],
  solution: {
    accident: true,
    proofLabels: {
      motive: { label: L('Penyebab sebenar', 'The true cause'), hint: L('Apa yang sebenarnya terjadi?', 'What actually happened?') },
      means: { label: L('Bukti bukan pembunuhan', 'Proof it was no murder'), hint: L('Apa yang menyangkal adanya pelaku?', 'What rules out a killer?') },
      opportunity: { label: L('Sumber salah sangka', 'Source of the mistaken belief'), hint: L('Mengapa tampak seperti dibunuh?', 'Why did it look like murder?') },
    },
    motive: ['sumur', 'harta', 'sake'],
    means: ['luka', 'segel', 'saksi'],
    opportunity: ['serangan', 'ancaman', 'tempat', 'parang'],
  },
  reveal: {
    sections: [
      { h: L('Tidak ada pembunuh', 'There was no killer'), p: [
        L('Pak Wirjo tidak dibunuh. Ia mati karena kecelakaan — dan setiap tersangka tak bersalah.', 'Pak Wirjo was not murdered. He died by accident — and every suspect is innocent.'),
        L(
          'Malam serangan udara, mabuk berat oleh sake simpanannya dan dalam gelap total, ia terhuyung ke sumur tua di belakang rumahnya. Lukanya pas dengan bibir batu sumur, bukan pukulan. Di tanah becek hanya ada tapaknya sendiri. Stempel dan kuncinya jatuh bersamanya — tak ada yang dicuri. Seorang anak melihatnya pergi ke sumur seorang diri.',
          'On the night of the air raid, dead drunk on his own stash of sake and in total darkness, he staggered to the old well behind his house. His wound matches the stone lip of the well, not a blow. In the mud there were only his own footprints. His seal and keys fell with him — nothing was stolen. A child saw him go to the well alone.'
        ),
      ] },
      { h: L('Kenapa ia ada di sumur', 'Why he was at the well'), p: [
        L(
          'Di dasar sumur, bersama jasadnya, tersembunyi emas dan beras timbunan hasil pasar gelapnya — beserta catatannya sendiri. Begitu sirene meraung dan kota gelap, ia bergegas menjaga hartanya dari penjarah. Ia lebih menyayangi simpanannya daripada nyawanya, dan itulah yang membawanya ke bibir sumur yang licin.',
          'At the bottom of the well, alongside his body, lay hidden the gold and hoarded black-market rice — together with a note in his own hand. The moment the sirens wailed and the town went dark, he rushed to guard his treasure from looters. He loved his cache more than his own life, and that is what carried him to the slick lip of the well.'
        ),
      ] },
      { h: L('Mengapa semua mengira pembunuhan', 'Why everyone thought it was murder'), p: [
        L(
          'Ia lelaki paling dibenci di kota — pelapor Kempeitai dan penimbun beras — jadi setiap orang punya alasan. Pemadaman serangan udara menebar semua orang ke dalam gelap. Sepucuk surat ancaman lama dan sebilah parang yang terjatuh melengkapi ilusi itu. Genre menuntut pembunuh; kenyataan tak selalu menyediakannya.',
          'He was the most hated man in town — a Kempeitai informer and a rice hoarder — so everyone had a reason. The air-raid blackout scattered everyone into the dark. An old threatening letter and a dropped machete completed the illusion. The genre demands a killer; reality does not always supply one.'
        ),
      ] },
      { h: L('Mengapa bukan mereka', 'Why not them'), p: [
        L(
          'Dendam mereka nyata — ayah yang hilang, anak yang mati lapar, kuku yang dicabut, kedai yang diperas. Tapi daftar hadir penjaga menempatkan mereka semua di lubang perlindungan saat kejadian. Tak ada tapak kedua di tepi sumur. Tiga "unsur" tak bertemu pada siapa pun: yang ada hanyalah penyebab (sumur & hartanya), bukti tiada pelaku (luka jatuh, tiada yang dicuri), dan sumber salah sangka (kegelapan & kebencian sekota). Lelaki yang diinginkan mati oleh semua, mati oleh ketamakannya sendiri dan kegelapan.',
          'Their grudges were real — a vanished father, a child starved to death, fingernails torn out, a shop bled by extortion. But the wardens\' attendance roll places them all in the shelter trenches at the time of death. There was no second set of footprints at the well\'s edge. The three "elements" meet in no one: there is only the cause (the well and his treasure), the proof of no perpetrator (a fall wound, nothing stolen), and the source of the mistaken belief (the darkness and the whole town\'s hatred). The man everyone wished dead died of his own greed and the dark.'
        ),
      ] },
    ],
    rebuttals: {
      sukarni: L(
        'Dendam Sukarni paling dalam, dan parangnya memang dekat sumur — tapi parang itu bersih tanpa darah, terjatuh saat ia menuntun tetangga ke perlindungan. Daftar penjaga mencatatnya di sana. Luka Wirjo pun luka jatuh, bukan bacokan.',
        'Sukarni\'s grudge runs deepest, and his machete was indeed near the well — but the blade was clean, without blood, dropped as he guided neighbors to the shelter. The wardens\' roll places him there. And Wirjo\'s wound was a fall wound, not a slash.'
      ),
      inah: L(
        'Kepedihan Mbok Inah nyata, tapi ia berdesakan di lubang perlindungan bersama ibu-ibu lain sepanjang serangan. Wirjo jatuh ke sumur sendiri; tak ada tangan yang mendorongnya.',
        'Mbok Inah\'s anguish is real, but she was crammed into the shelter trench with the other women throughout the raid. Wirjo fell into the well on his own; no hand pushed him.'
      ),
      hadi: L(
        'Pak Guru Hadi disiksa karena laporan Wirjo — motif yang pahit. Tapi malam itu ia merawat korban di pos darurat, dan lukanya korban adalah luka jatuh, bukan pukulan.',
        'Pak Guru Hadi was tortured because of Wirjo\'s report — a bitter motive. But that night he was tending the wounded at the emergency post, and the victim\'s wound was a fall wound, not a blow.'
      ),
      lim: L(
        'Babah Lim diperas bertahun-tahun, tapi ia meringkuk di gudang kedainya saat bom jatuh — dan tak ada perampokan: stempel serta kunci Wirjo ikut jatuh bersamanya.',
        'Babah Lim was extorted for years, but he was curled up in his shop\'s storeroom as the bombs fell — and there was no robbery: Wirjo\'s seal and keys fell down with him.'
      ),
      karsono: L(
        'Karsono menentang Wirjo terang-terangan, tapi ia bertugas jaga di pos PETA sepanjang alarm, disaksikan rekan-rekannya. Tak ada jejaknya di sumur.',
        'Karsono opposed Wirjo openly, but he was on guard duty at the PETA post throughout the alarm, witnessed by his comrades. There is no trace of him at the well.'
      ),
      tarno: L(
        'Tarno memang calon pewaris, tapi justru ia yang menunjukkan ke mana pamannya berlari malam itu — dan tak ada yang dicuri dari sumur. Wirjo cuma terjatuh menjaga hartanya sendiri.',
        'Tarno was indeed the would-be heir, but he is the very one who pointed to where his uncle ran that night — and nothing was stolen from the well. Wirjo simply fell while guarding his own treasure.'
      ),
    },
  },
}
