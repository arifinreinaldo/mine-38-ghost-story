import { L } from '../i18n/L'

// Case 11 (gated). A harder single-killer murder (a false confession + a
// hidden second motive) WITH a bonus "treasure hunt" meta-layer. Solving the
// murder wins the case; correctly guessing the treasure's mountain unlocks a
// hidden multi-stage hunt (cipher -> waypoint -> assemble real coordinates
// from "famous" legend numbers, with decoys) that needs an online map to crack.
// Legendary robber "Si Macan Kawi" (Gol D. Roger-style) publicly spread his
// fame before death; only his protege held the real map.
//
// Bilingual via L('id', 'en'). NOTE: puzzle mechanics stay language-neutral —
// cipher text, accept[] answer lists, target{} coordinates, and legend[].n
// numbers are NEVER wrapped/translated, or the hunt would break.
export const macankawi = {
  id: 'macankawi',
  free: false,
  difficulty: 'Sulit',
  code: 'MK-1992',
  location: L('Wonosari, lereng Gunung Kawi · masa kini', 'Wonosari, on the slopes of Mount Kawi · present day'),
  scene: 'kawi',
  title: L('Maut di Lereng Kawi', 'Death on the Kawi Slopes'),
  blurb: L(
    'Murid terakhir Si Macan Kawi — perampok legendaris yang mewariskan satu peta harta — ditemukan tewas saat demam harta melanda. Pecahkan pembunuhnya; dan bila cukup jeli, ikuti peta sang Macan ke puncak.',
    `The last student of Si Macan Kawi — the legendary robber who left behind a single treasure map — is found dead as treasure fever sweeps the land. Solve who killed him; and if you're sharp enough, follow the Tiger's map to the summit.`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi. Latarnya meminjam geografi nyata pegunungan “Putri Tidur” (Gunung Butak, Kawi, dan Panderman) di Malang Raya, serta nama besar Gunung Kawi yang lekat dengan legenda dan ziarah. Si Macan Kawi, sang murid, dan seluruh tokoh hanyalah rekaan; tak ada harta karun sungguhan. Koordinat dalam perburuan menunjuk bentang alam nyata semata sebagai teka-teki peta.',
      `This is a work of fiction. Its setting borrows the real geography of the "Sleeping Princess" (Putri Tidur) range — Mount Butak, Kawi, and Panderman — in Greater Malang, along with the famous name of Mount Kawi, long tied to legend and pilgrimage. Si Macan Kawi, his student, and every character are invented; there is no real treasure. The coordinates in the hunt point to real landforms purely as a map puzzle.`
    ),
    source: {
      label: L(
        'Latar geografi: “Gunung Putri Tidur” (Butak–Kawi–Panderman), Malang Raya',
        'Geographic setting: the "Sleeping Princess Mountains" (Butak–Kawi–Panderman), Greater Malang'
      ),
      url: 'https://www.profauna.net/en/content/protected-forest-sleeping-beauty-mountains-more-mountainous-range',
    },
  },
  cover: {
    lead: L(
      'Sebelum mati, Si Macan Kawi berseru ke seluruh negeri bahwa hartanya menanti siapa pun yang layak — dan sejak itu demam harta tak pernah padam. Kini murid terakhirnya, pemegang satu-satunya peta asli, terbujur kaku. Pecahkan pembunuhnya. Lalu, bila berani, pecahkan petanya.',
      `Before he died, Si Macan Kawi proclaimed across the land that his treasure awaited anyone worthy — and ever since, treasure fever has never cooled. Now his last student, the sole keeper of the only real map, lies dead. Solve who killed him. Then, if you dare, solve his map.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Puluhan tahun lalu, perampok legendaris Si Macan Kawi tertangkap. Sebelum ajalnya pada 1992, ia berseru lantang di depan massa: “Hartaku? Semua kutinggalkan di pangkuan Sang Putri Tidur. Yang cukup berani dan layak — carilah, ambillah!” Seruan itu menyalakan demam harta yang membara hingga kini. Tapi lokasi pastinya hanya ia bisikkan lewat sebuah peta — kepada satu murid.',
        `Decades ago, the legendary robber Si Macan Kawi was captured. Before his death in 1992, he cried out before the crowd: "My treasure? I left it all in the lap of the Sleeping Princess. Let those brave and worthy enough — seek it, take it!" That cry lit a treasure fever that still burns today. But the exact location he whispered through a single map — to one student.`
      ),
      L(
        'Murid itu, kini renta, dikenal sebagai Mbah Guno, hidup menyepi di Wonosari, di lereng selatan Gunung Kawi. Sebuah film dokumenter viral membangkitkan lagi legenda itu, dan para pemburu harta berdatangan. Pagi ini, Mbah Guno ditemukan tewas di rumahnya — mula-mula disangka serangan jantung.',
        'That student, now ancient, is known as Mbah Guno, living as a recluse in Wonosari, on the southern slopes of Mount Kawi. A viral documentary reawakened the legend, and treasure hunters came flocking. This morning, Mbah Guno was found dead in his home — at first taken for a heart attack.'
      ),
      L(
        'Anda dipanggil. Periksa bukti, interogasi enam orang yang mengelilinginya, lalu tunjuk pembunuhnya — waspadai pengakuan yang terlalu cepat. Dan satu lagi: bila kau cukup jeli membaca legenda sang Macan, kau mungkin bisa menebak di gunung mana hartanya tersembunyi — dan membuka perburuan yang sesungguhnya.',
        `You are called in. Examine the evidence, interrogate the six people around him, then name the killer — beware a confession that comes too easily. And one more thing: if you're sharp enough to read the Tiger's legend, you might guess on which mountain his treasure lies hidden — and open the real hunt.`
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa tiap bukti, interogasi keenam orang, lalu tunjuk pembunuhnya dan susun pembuktianmu. Bonus: tebak gunung tempat harta Si Macan Kawi untuk membuka Perburuan Harta.',
      `Examine every piece of evidence, interrogate all six, then name the killer and build your case. Bonus: guess the mountain where Si Macan Kawi's treasure lies to unlock the Treasure Hunt.`
    ),
  },
  victim: {
    init: 'MG',
    name: 'Mbah Guno',
    meta: L('78 tahun · murid terakhir Si Macan Kawi, pemegang peta', '78 · last student of Si Macan Kawi, keeper of the map'),
    paras: [
      L(
        'Lelaki tua penyendiri di lereng selatan Gunung Kawi, dikenal sebagai satu-satunya orang yang dipercaya Si Macan Kawi memegang peta hartanya. Selama puluhan tahun ia menolak semua tawaran dan bujukan untuk menyerahkannya.',
        'A solitary old man on the southern slopes of Mount Kawi, known as the only person Si Macan Kawi trusted to hold his treasure map. For decades he refused every offer and every plea to give it up.'
      ),
      L(
        'Ditemukan terbujur di rumahnya pada pagi hari, cangkir di sisinya. Semula disangka serangan jantung orang tua. Tongkat berukirnya tergeletak di dekatnya, seakan tak berarti apa-apa.',
        `Found laid out in his home one morning, a cup beside him. At first taken for an old man's heart attack. His carved staff lay near him, as if it meant nothing at all.`
      ),
    ],
  },
  evidence: [
    {
      id: 'jasad', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Jasad Mbah Guno', `Mbah Guno's body`),
      summary: L('Bukan serangan jantung — jejak racun bekerja cepat di tubuhnya.', 'Not a heart attack — traces of a fast-acting poison in his body.'),
      detail: L(
        'Otopsi membantah dugaan awal: bukan jantung. Ada jejak racun tumbuhan yang bekerja cepat dalam tubuhnya, dengan waktu kematian sekitar sore hari sebelumnya — bukan malam, bukan pagi. Kematian yang dibuat tampak wajar.',
        'The autopsy overturns the first assumption: not the heart. There are traces of a fast-acting plant poison in his body, with time of death around the previous afternoon — not night, not morning. A death made to look natural.'
      ),
    },
    {
      id: 'kopi', icon: 'cup', tag: L('Barang Bukti', 'Evidence'),
      title: L('Cangkir di sisi jasad', 'The cup beside the body'),
      summary: L('Sisa jamu-kopi di cangkirnya mengandung racun yang sama.', 'The leftover jamu-coffee in his cup holds the same poison.'),
      detail: L(
        'Cangkir di samping Mbah Guno berisi sisa jamu-kopi. Endapannya mengandung racun yang sama dengan yang ditemukan di tubuhnya. Ia diracun lewat minuman sore itu — minuman yang tak ia buat sendiri.',
        `The cup beside Mbah Guno held the dregs of a jamu-coffee. Its sediment contained the same poison found in his body. He was poisoned through that afternoon's drink — a drink he did not make himself.`
      ),
    },
    {
      id: 'jamu', icon: 'cup', tag: L('Saksi', 'Witness'),
      title: L('Rantang jamu sang tamu', `The visitor's tiffin of jamu`),
      summary: L('Sore itu seorang tamu membawakannya rantang jamu “oleh-oleh”.', `That afternoon a visitor brought him a tiffin of jamu as a "gift."`),
      detail: L(
        'Tetangga ingat: sore itu Bu Sukma, sang “peneliti”, datang membawa rantang jamu sebagai oleh-oleh untuk Mbah Guno — katanya agar si kakek mau bercerita lebih banyak. Rantang itu kini hilang dari dapur.',
        `A neighbor remembers: that afternoon Bu Sukma, the "researcher," came bearing a tiffin of jamu as a gift for Mbah Guno — to coax the old man into telling her more, she said. That tiffin is now missing from the kitchen.`
      ),
    },
    {
      id: 'tamu', icon: 'metadata', tag: L('Catatan', 'Notes'),
      title: L('Tamu terakhir', 'The last visitor'),
      summary: L('Kalender & tetangga: Bu Sukma tamu terakhir, sendirian, sore itu.', 'Calendar & neighbors: Bu Sukma was the last visitor, alone, that afternoon.'),
      detail: L(
        'Di kalender dinding Mbah Guno tertulis satu janji sore itu: “Bu Sukma — wawancara.” Para tetangga membenarkan: Bu Sukma masuk ke rumah dan tinggal lama, sendirian bersama si kakek, persis di rentang waktu kematiannya. Tak ada tamu lain setelah itu.',
        `On Mbah Guno's wall calendar, one appointment was written for that afternoon: "Bu Sukma — interview." The neighbors confirm it: Bu Sukma went inside and stayed a long while, alone with the old man, right within the window of his death. No other visitor came after.`
      ),
    },
    {
      id: 'tongkat', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Tongkat tujuh loreng', 'The seven-striped staff'),
      summary: L('Tongkat berukir tujuh loreng macan — hanya ada sidik jari Mbah Guno.', `A staff carved with seven tiger stripes — only Mbah Guno's fingerprints on it.`),
      detail: L(
        'Tongkat jati Mbah Guno, berukir tujuh loreng macan di gagangnya — lambang sang guru. Hanya ada sidik jarinya. Si pembunuh menggeledah seisi rumah mencari sesuatu, tapi melewatkan benda yang paling sering disentuh si kakek ini. Tujuh loreng itu seakan menyimpan arti.',
        `Mbah Guno's teak staff, its handle carved with seven tiger stripes — the emblem of his master. Only his fingerprints are on it. The killer ransacked the whole house searching for something, but overlooked the very object the old man touched most. Those seven stripes seem to hold a meaning.`
      ),
    },
    {
      id: 'dosier', icon: 'ledger', tag: L('Dokumen', 'Documents'),
      title: L('Dosier legenda Si Macan Kawi', 'A dossier on the Si Macan Kawi legend'),
      summary: L('Berkas angka-angka termasyhur sang Macan — sebagian mungkin keliru.', `A file of the Tiger's famous numbers — some may be false.`),
      detail: L(
        'Sebuah map berisi kliping dan catatan tentang legenda Si Macan Kawi: lahir 1957; mulai merampok 1980; 12 tahun jadi buron; tahun kejayaan terakhir 1992; tewas di usia 35; pelaku 45 rampokan besar; sayembara kepalanya Rp 90 juta; konon punya 7 persembunyian; berpamitan di depan massa pada tanggal 17. Angka-angka yang dihafal seantero negeri — entah mana yang benar-benar berarti.',
        'A folder of clippings and notes on the legend of Si Macan Kawi: born 1957; began robbing in 1980; 12 years a fugitive; final year of glory 1992; died at age 35; perpetrator of 45 great robberies; a 90-million-rupiah bounty on his head; said to have had 7 hideouts; bade farewell before the crowd on the 17th. Numbers memorized across the land — and no telling which truly matter.'
      ),
    },
    {
      id: 'suratutang', icon: 'doc', tag: L('Temuan Kunci', 'Key Find'),
      title: L('Surat penagih utang', 'Debt-collection letters'),
      summary: L('Tumpukan surat penagih utang atas nama Sukma Wardani — nilainya besar.', `A stack of debt-collection letters in Sukma Wardani's name — for a large sum.`),
      locked: true, twist: true,
      detail: L(
        'Terselip di tas Bu Sukma: tumpukan surat penagih utang bernilai ratusan juta atas namanya, dengan tenggat yang sudah lewat dan ancaman penyitaan. “Peneliti” itu sedang tenggelam. Bagi orang seputus asa ini, peta harta Si Macan Kawi bukan bahan buku — melainkan jalan keluar.',
        `Tucked in Bu Sukma's bag: a stack of debt-collection letters in her name, worth hundreds of millions, their deadlines long past, threatening seizure. The "researcher" was drowning. For someone this desperate, Si Macan Kawi's treasure map was no book material — it was a way out.`
      ),
    },
    {
      id: 'iddosen', icon: 'doc', tag: L('Dokumen', 'Documents'),
      title: L('Kartu “dosen” Sukma', `Sukma's "lecturer" ID`),
      summary: L('Kartu identitas peneliti yang ia tunjukkan — universitasnya menyangkal.', 'The researcher ID she showed — her university denies her.'),
      detail: L(
        'Bu Sukma memperkenalkan diri sebagai dosen-peneliti dengan kartu identitas universitas. Saat dikonfirmasi, pihak universitas menyatakan tak pernah punya staf bernama itu. Kartunya palsu; kedok “sejarawan” itu hanya pintu masuk untuk mendekati si pemegang peta.',
        `Bu Sukma introduced herself as a lecturer-researcher with a university ID card. When checked, the university stated it never had a staff member by that name. The card is fake; the "historian" cover was only a way in to reach the keeper of the map.`
      ),
    },
    {
      id: 'konfesi', icon: 'doc', tag: L('Pengakuan', 'Confession'),
      title: L('Pengakuan Joko', `Joko's confession`),
      summary: L('Keponakan-cucu korban mengaku membunuh — tapi keterangannya janggal.', `The victim's grand-nephew confesses to the murder — but his account is off.`),
      detail: L(
        'Joko, cucu-keponakan korban, datang ke pos dan mengaku: “Aku yang membunuhnya, tutup saja kasusnya.” Namun ia salah menyebut cara kematian (mengira dipukul, padahal diracun) dan tak bisa menjelaskan rantang jamu itu. Pengakuan yang terlalu bersemangat — dan tak cocok dengan bukti.',
        `Joko, the victim's grand-nephew, came to the post and confessed: "I killed him, just close the case." But he got the manner of death wrong (thinking it a beating, when it was poison) and could not explain the tiffin of jamu. A confession too eager — and at odds with the evidence.`
      ),
    },
    {
      id: 'cctvwarung', icon: 'cctv', tag: L('Rekaman', 'Footage'),
      title: L('Rekaman warung kemah', 'Camp stall footage'),
      summary: L('Kamera warung menempatkan Joko & ibunya di kemah pemburu saat itu.', `The stall camera puts Joko & his mother at the hunters' camp at the time.`),
      detail: L(
        'Rekaman kamera warung di kemah para pemburu harta menunjukkan Joko dan ibunya, Bu Tarmi, berada di sana sepanjang sore — persis saat Mbah Guno diracun. Keduanya mustahil ada di rumah si kakek. Pengakuan Joko runtuh oleh gambar ini.',
        `Footage from a stall camera at the treasure hunters' camp shows Joko and his mother, Bu Tarmi, there all afternoon — exactly when Mbah Guno was poisoned. Neither could have been at the old man's house. Joko's confession collapses against this picture.`
      ),
    },
    {
      id: 'golok', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Golok di halaman', 'A machete in the yard'),
      summary: L('Sebilah golok tergeletak di halaman — tampak memberatkan.', 'A machete lying in the yard — it looks incriminating.'),
      herring: true,
      detail: L(
        'Sebilah golok ditemukan tergeletak di halaman belakang, seakan menandakan kekerasan. Tapi bilahnya bersih, dan Mbah Guno mati diracun, bukan dilukai. Golok itu milik Joko, tertinggal saat ia membabat semak pekan lalu. Petunjuk yang menyesatkan.',
        `A machete was found lying in the back yard, as if marking violence. But its blade is clean, and Mbah Guno died of poison, not a wound. The machete is Joko's, left behind when he cleared brush last week. A misleading clue.`
      ),
    },
  ],
  suspects: [
    {
      id: 'sukma', init: 'SW', name: 'Bu Sukma Wardani', age: 41,
      role: L('Mengaku peneliti/“sejarawan” legenda', 'Claims to be a researcher / legend "historian"'),
      statement: L(
        '“Aku datang untuk mendokumentasikan legenda Si Macan Kawi, murni demi sejarah. Mbah Guno narasumberku. Aku justru kehilangan beliau sebelum bukuku selesai.”',
        '“I came to document the legend of Si Macan Kawi, purely for history. Mbah Guno was my source. I am the one who lost him before my book was done.”'
      ),
      motive: L('Tenggelam utang; mengincar peta harta sebagai jalan keluar, berkedok peneliti.', `Drowning in debt; after the treasure map as a way out, behind a researcher's cover.`),
      alibi: L('Mengaku pamit sore itu dalam keadaan korban “sehat”.', 'Claims she left that afternoon with the victim "in good health."'),
      interrogation: [
        { q: L('Apa tujuan Anda menemui Mbah Guno?', 'What was your purpose in seeing Mbah Guno?'),
          a: L('Aku peneliti. Aku mendokumentasikan legendanya untuk sebuah buku. Murni sejarah, tak lebih.', `I'm a researcher. I was documenting his legend for a book. Pure history, nothing more.`) },
        { q: L('Universitas menyangkal Anda staf mereka.', 'The university denies you are their staff.'),
          a: L('Pasti salah administrasi. Aku peneliti lepas. Soal kartu... itu urusan birokrasi, bukan pembunuhan.', `It must be an administrative error. I'm an independent researcher. The card... that's bureaucracy, not murder.`), requires: 'iddosen' },
        { q: L('Anda membawakan rantang jamu sore itu.', 'You brought a tiffin of jamu that afternoon.'),
          a: L('Sekadar oleh-oleh. Orang tua senang diperhatikan. Saat aku pamit, beliau masih segar bercerita. Entah apa yang terjadi setelahnya.', `Just a small gift. Old people like to feel cared for. When I left, he was still chatting cheerfully. I don't know what happened after.`), requires: 'jamu' },
      ],
    },
    {
      id: 'joko', init: 'JK', name: 'Joko', age: 28,
      role: L('Cucu-keponakan korban; pemburu harta', `The victim's grand-nephew; a treasure hunter`),
      statement: L(
        '“Sudah kubilang, aku pelakunya. Tutup kasusnya, jangan ganggu keluargaku lagi.”',
        '“I told you, I did it. Close the case, and leave my family alone.”'
      ),
      motive: L('Pernah cekcok dengan Mbah Guno soal menjual peta; mengaku sebagai pelaku.', 'Once quarreled with Mbah Guno about selling the map; confesses to being the killer.'),
      alibi: L('Justru ada di kemah pemburu — pengakuannya tak cocok bukti.', `Was in fact at the hunters' camp — his confession doesn't fit the evidence.`),
      interrogation: [
        { q: L('Kau mengaku membunuh pamanmu?', 'You confess to killing your great-uncle?'),
          a: L('Ya. Aku yang melakukannya. Aku memukulnya. Sudah, catat saja dan selesai.', 'Yes. I did it. I beat him. There, write it down and be done.') },
        { q: L('Rekaman warung menempatkanmu di kemah saat itu.', 'The stall footage puts you at the camp at that time.'),
          a: L('...Baik. Aku di kemah, itu benar. Aku mengaku karena... kukira ibuku pelakunya. Sore itu kulihat ia keluar dari rumah Mbah sambil menangis. Aku panik.', `...Fine. I was at the camp, that's true. I confessed because... I thought my mother did it. That afternoon I saw her leave Mbah's house in tears. I panicked.`), requires: 'cctvwarung' },
        { q: L('Kau bahkan salah menyebut cara kematiannya.', 'You even got the manner of his death wrong.'),
          a: L('Aku tak tahu beliau diracun — kukira dipukul. Aku cuma ingin melindungi ibuku. Aku bodoh, bukan pembunuh.', `I didn't know he was poisoned — I thought he was beaten. I only wanted to protect my mother. I'm a fool, not a killer.`), requires: 'konfesi' },
      ],
    },
    {
      id: 'tarmi', init: 'BT', name: 'Bu Tarmi', age: 52,
      role: L('Keponakan korban; ibu Joko', `The victim's niece; Joko's mother`),
      statement: L(
        '“Aku memang ingin Mbah menjual peta itu — kami terlilit kebutuhan. Aku memohon sambil menangis sore itu. Tapi memohon bukan membunuh.”',
        '“Yes, I wanted Mbah to sell that map — we were strangled by need. I begged him in tears that afternoon. But begging is not killing.”'
      ),
      motive: L('Terdesak ekonomi; ingin korban menjual peta/rumah.', 'Pressed by money troubles; wanted the victim to sell the map/house.'),
      alibi: L('Bersama Joko di kemah pemburu sepanjang sore.', `With Joko at the hunters' camp all afternoon.`),
      interrogation: [
        { q: L('Anda ingin korban menjual petanya?', 'You wanted the victim to sell his map?'),
          a: L('Kami butuh uang, ya. Aku memohon padanya sore itu, lalu pulang menangis karena ditolak. Itu saja. Beliau pamanku.', `We needed money, yes. I begged him that afternoon, then went home in tears because he refused. That's all. He was my uncle.`) },
        { q: L('Di mana Anda saat kematiannya?', 'Where were you at the time of his death?'),
          a: L('Di kemah pemburu bersama Joko, di antara banyak orang. Tanyakan, rekam pun ada. Aku sudah pergi jauh sebelum... sebelum itu terjadi.', `At the hunters' camp with Joko, among many people. Ask them, the footage is there too. I had left long before... before it happened.`), requires: 'cctvwarung' },
        { q: L('Joko mengaku untuk melindungi Anda.', 'Joko confessed to protect you.'),
          a: L('Anak bodoh itu... ia mengira aku yang membunuh karena melihatku menangis. Demi Tuhan, aku tidak. Suruh ia menarik pengakuannya.', 'That foolish boy... he thought I was the killer because he saw me crying. By God, I am not. Tell him to take back his confession.') },
      ],
    },
    {
      id: 'hadi', init: 'PH', name: 'Pak Hadi', age: 60,
      role: L('Juru kunci petilasan; penjaga adat', 'Caretaker of the sacred site; keeper of custom'),
      statement: L(
        '“Harta sang Macan bukan untuk digali. Siapa mengusiknya akan celaka. Aku memintanya merahasiakan peta selamanya — dan kami sepaham.”',
        '“The Tiger\'s treasure is not to be dug up. Whoever disturbs it will be cursed. I asked him to keep the map secret forever — and we were of one mind.”'
      ),
      motive: L('Meyakini harta itu sakral/terkutuk dan tak boleh diambil.', 'Believes the treasure is sacred/cursed and must not be taken.'),
      alibi: L('Memimpin doa di petilasan, disaksikan banyak peziarah.', 'Led prayers at the sacred site, witnessed by many pilgrims.'),
      interrogation: [
        { q: L('Anda percaya harta itu terkutuk?', 'You believe the treasure is cursed?'),
          a: L('Bukan untuk ditambang oleh tangan serakah. Aku menjaganya tetap terkubur, bukan mengambilnya. Mbah Guno sependapat denganku.', `Not to be mined by greedy hands. I keep it buried, I don't take it. Mbah Guno agreed with me.`) },
        { q: L('Anda berseteru dengan Mbah Guno?', 'Were you in conflict with Mbah Guno?'),
          a: L('Tidak. Aku memintanya tak pernah menyerahkan peta itu, dan ia berjanji. Kami sekutu, bukan musuh.', 'No. I asked him never to surrender that map, and he promised. We were allies, not enemies.') },
        { q: L('Di mana Anda sore itu?', 'Where were you that afternoon?'),
          a: L('Memimpin doa dan tahlil di petilasan, di depan puluhan peziarah, sampai magrib. Banyak yang bisa bersaksi.', 'Leading prayers and tahlil at the sacred site, before dozens of pilgrims, until dusk. Many can testify.') },
      ],
    },
    {
      id: 'rendi', init: 'RD', name: 'Rendi', age: 35,
      role: L('Kolektor benda pusaka dari kota', 'An heirloom collector from the city'),
      statement: L(
        '“Aku menawar peta itu dengan harga tinggi, terang-terangan. Mbah Guno menolak, dan aku pulang. Aku kolektor, aku membeli — aku tak membunuh demi barang.”',
        '“I bid high for that map, out in the open. Mbah Guno refused, and I went home. I\'m a collector, I buy — I don\'t kill for an object.”'
      ),
      motive: L('Sangat menginginkan peta untuk koleksinya; tawarannya ditolak.', 'Badly wanted the map for his collection; his offer was refused.'),
      alibi: L('Kembali ke penginapan di kota sore itu.', 'Returned to his city lodging that afternoon.'),
      interrogation: [
        { q: L('Anda menawar peta itu?', 'You bid for the map?'),
          a: L('Berapa pun ia minta, kubayar. Ia menolak mentah-mentah. Kecewa, ya. Tapi aku menawar dengan uang, bukan dengan racun.', `Whatever he asked, I'd pay. He refused flat out. Disappointed, yes. But I bid with money, not poison.`) },
        { q: L('Siapa yang paling putus asa akan peta ini, menurut Anda?', 'Who, in your view, was most desperate for this map?'),
          a: L('Jelas bukan aku — aku punya uang. Tapi “peneliti” itu, Sukma... aku dengar penagih utang mengejarnya ke mana-mana. Geledah saja tasnya, lihat surat-suratnya.', `Certainly not me — I have money. But that "researcher," Sukma... I heard debt collectors chasing her everywhere. Search her bag, look at her letters.`), unlocks: 'suratutang' },
        { q: L('Di mana Anda sore itu?', 'Where were you that afternoon?'),
          a: L('Kembali ke penginapan di kota, ada struk dan resepsionis yang mencatat jamku. Aku tak ada di lereng sore itu.', `Back at my lodging in the city — there's a receipt and a receptionist who logged my hours. I wasn't on the slope that afternoon.`) },
      ],
    },
    {
      id: 'bayu', init: 'MB', name: 'Mas Bayu', age: 30,
      role: L('Pembuat film dokumenter viral', 'Maker of the viral documentary'),
      statement: L(
        '“Filmku memang menyalakan demam harta ini, aku akui. Tapi aku merekam cerita, bukan menggali kubur. Kematian Mbah Guno justru menghancurkan kelanjutan filmku.”',
        '“My film did light this treasure fever, I admit. But I film stories, I don\'t dig graves. Mbah Guno\'s death actually wrecked the rest of my film.”'
      ),
      motive: L('Mendulang untung dari sensasi legenda; sempat merekam di lokasi.', 'Profiting from the legend\'s sensation; had filmed at the location.'),
      alibi: L('Merekam b-roll di kejauhan sore itu.', 'Filming b-roll in the distance that afternoon.'),
      interrogation: [
        { q: L('Film Anda memicu demam harta ini?', 'Your film triggered this treasure fever?'),
          a: L('Tak kusangka sebesar ini. Aku merekam dan bercerita; tanggung jawab atas para pemburu itu bukan sepenuhnya milikku.', `I never expected it to grow this big. I film and I tell stories; the responsibility for those hunters isn't entirely mine.`) },
        { q: L('Anda merekam siapa yang datang sore itu?', 'Did you film who came that afternoon?'),
          a: L('Aku mengambil gambar dari kejauhan. Hanya satu orang yang masuk dan tinggal lama sore itu: Bu Sukma, membawa rantang. Selebihnya sepi.', 'I shot from a distance. Only one person went in and stayed long that afternoon: Bu Sukma, carrying a tiffin. Otherwise it was quiet.'), requires: 'tamu' },
        { q: L('Di mana Anda saat kejadian?', 'Where were you at the time?'),
          a: L('Di punggungan seberang, merekam siluet Putri Tidur untuk filmku, ditemani dua kru. Kami tak mendekat ke rumah.', 'On the ridge opposite, filming the silhouette of the Sleeping Princess for my film, with two crew. We never went near the house.') },
      ],
    },
  ],
  timeline: [
    { t: '1992', key: false, x: L('Si Macan Kawi berseru ke khalayak bahwa hartanya menanti yang layak, lalu tewas — menyalakan demam harta.', 'Si Macan Kawi proclaims to the public that his treasure awaits the worthy, then dies — igniting treasure fever.') },
    { t: L('Belakangan ini', 'Recently'), key: false, x: L('Film dokumenter viral membangkitkan legenda; pemburu harta membanjiri lereng Kawi.', 'A viral documentary revives the legend; treasure hunters flood the slopes of Kawi.') },
    { t: L('Sore, ±15.00', 'Afternoon, ~15:00'), key: true, x: L('Bu Sukma datang sendirian membawa rantang jamu; Bu Tarmi sempat memohon lalu pulang menangis.', 'Bu Sukma arrives alone with a tiffin of jamu; Bu Tarmi begs, then goes home in tears.') },
    { t: L('Sore, ±16.00', 'Afternoon, ~16:00'), key: true, x: L('Mbah Guno meminum jamu-kopi beracun; pembunuh menggeledah rumah mencari peta, tapi melewatkan tongkat tujuh loreng.', 'Mbah Guno drinks the poisoned jamu-coffee; the killer ransacks the house for the map, but overlooks the seven-striped staff.') },
    { t: L('Pagi berikutnya', 'The next morning'), key: false, x: L('Jasad ditemukan; semula disangka serangan jantung. Joko panik lalu mengaku palsu.', 'The body is found; at first taken for a heart attack. Joko panics and gives a false confession.') },
  ],
  solution: {
    killer: 'sukma',
    proofLabels: {
      motive: { label: L('Motif', 'Motive'), hint: L('Apa yang ia sembunyikan di balik kedok?', 'What was she hiding behind the cover?') },
      means: { label: L('Cara', 'Means'), hint: L('Bagaimana Mbah Guno dibunuh?', 'How was Mbah Guno killed?') },
      opportunity: { label: L('Kesempatan', 'Opportunity'), hint: L('Siapa yang sendirian bersamanya sore itu?', 'Who was alone with him that afternoon?') },
    },
    motive: ['suratutang', 'iddosen'],
    means: ['kopi', 'jasad', 'jamu'],
    opportunity: ['tamu', 'jamu'],
  },
  reveal: {
    sections: [
      { h: L('Pengakuan yang runtuh', 'The confession that collapses'), p: [
        L(
          'Joko mengaku membunuh pamannya — tapi ia berbohong. Rekaman warung menempatkannya, dan ibunya Bu Tarmi, di kemah pemburu sepanjang sore. Ia bahkan salah menyebut cara kematian.',
          `Joko confessed to killing his great-uncle — but he was lying. The stall footage places him, and his mother Bu Tarmi, at the hunters' camp all afternoon. He even got the manner of death wrong.`
        ),
        L(
          'Ia mengaku karena mengira ibunya pelakunya: sore itu ia melihat Bu Tarmi keluar dari rumah Mbah Guno sambil menangis — padahal Tarmi hanya memohon, lalu pulang. Pengakuan itu lahir dari rasa takut, bukan kebenaran.',
          `He confessed because he thought his mother was the killer: that afternoon he saw Bu Tarmi leave Mbah Guno's house in tears — though Tarmi had only begged, then gone home. That confession was born of fear, not truth.`
        ),
      ] },
      { h: L('Bukan serangan jantung', 'Not a heart attack'), p: [
        L(
          'Mbah Guno tidak mati karena usia. Ia diracun lewat jamu-kopi sore itu, dan kematiannya disamarkan agar tampak wajar. Racun yang sama ada di cangkir dan di tubuhnya — dari minuman yang dibawakan kepadanya, bukan yang ia seduh sendiri.',
          'Mbah Guno did not die of old age. He was poisoned through the jamu-coffee that afternoon, and his death disguised to look natural. The same poison was in the cup and in his body — from a drink brought to him, not one he brewed himself.'
        ),
      ] },
      { h: L('Sejarawan yang bukan sejarawan', 'The historian who was no historian'), p: [
        L(
          'Bu Sukma bukan peneliti: kartunya palsu, universitasnya menyangkalnya. Ia tenggelam utang ratusan juta, dengan penyitaan di depan mata. Ia tak datang untuk sejarah — ia datang untuk peta.',
          'Bu Sukma was no researcher: her card was fake, her university denied her. She was drowning in debts of hundreds of millions, with seizure at the door. She did not come for history — she came for the map.'
        ),
        L(
          'Sore itu ia tamu terakhir, sendirian bersama si kakek, membawa rantang jamu. Saat Mbah Guno menolak menyerahkan peta — atau mulai mencurigai kedoknya — ia meracuninya, lalu menggeledah rumah. Tapi ia melewatkan benda yang paling sering disentuh korban: tongkat tujuh loreng. Peta itu tergulung di dalamnya, selama ini.',
          'That afternoon she was the last visitor, alone with the old man, carrying a tiffin of jamu. When Mbah Guno refused to surrender the map — or began to suspect her cover — she poisoned him, then ransacked the house. But she overlooked the object the victim touched most: the seven-striped staff. The map was rolled up inside it, all along.'
        ),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L(
          'Joko dan Tarmi ada di kemah, terekam kamera. Pak Hadi ingin harta itu tetap terkubur, bukan menggalinya, dan ia memimpin doa di depan puluhan saksi. Rendi menawar dengan uang, terang-terangan, lalu kembali ke kota. Mas Bayu merekam dari punggungan seberang bersama krunya. Hanya Bu Sukma yang punya kebutuhan tersembunyi, kedok palsu, akses sendirian, dan rantang jamu itu. Sang murid menjaga rahasia gurunya sampai maut — dan hampir membawanya serta.',
          `Joko and Tarmi were at the camp, on camera. Pak Hadi wanted the treasure to stay buried, not to dig it up, and he led prayers before dozens of witnesses. Rendi bid with money, openly, then returned to the city. Mas Bayu filmed from the ridge opposite with his crew. Only Bu Sukma had a hidden need, a false cover, solitary access, and that tiffin of jamu. The student guarded his master's secret to the death — and nearly took it with him.`
        ),
      ] },
    ],
    rebuttals: {
      joko: L(
        'Joko mengaku, tapi rekaman warung menempatkannya di kemah saat kematian, dan ia salah menyebut cara korban tewas. Ia berbohong untuk melindungi ibunya — bukan pelakunya.',
        'Joko confessed, but the stall footage places him at the camp at the time of death, and he got the manner of death wrong. He lied to protect his mother — he is not the killer.'
      ),
      tarmi: L(
        'Bu Tarmi memang memohon agar peta dijual dan pulang menangis — tapi ia bersama Joko di kemah, terekam kamera, jauh sebelum racun bekerja. Air matanya bukan racun.',
        'Bu Tarmi did beg for the map to be sold and went home in tears — but she was with Joko at the camp, on camera, long before the poison took hold. Her tears were not poison.'
      ),
      hadi: L(
        'Pak Hadi ingin harta itu tetap terkubur dan sepaham dengan Mbah Guno, bukan berseteru. Sore itu ia memimpin doa di petilasan di depan puluhan peziarah.',
        'Pak Hadi wanted the treasure to stay buried and was of one mind with Mbah Guno, not at odds with him. That afternoon he led prayers at the sacred site before dozens of pilgrims.'
      ),
      rendi: L(
        'Rendi menawar peta dengan uang secara terbuka dan kecewa ditolak — tapi ia kembali ke kota dengan jam yang tercatat, dan justru ia yang menunjuk keputusasaan Sukma.',
        `Rendi bid for the map openly with money and was disappointed to be refused — but he returned to the city with logged hours, and it was he who pointed to Sukma's desperation.`
      ),
      bayu: L(
        'Mas Bayu mendulang untung dari legenda, tapi kematian Mbah Guno menghentikan filmnya; sore itu ia merekam siluet Putri Tidur dari punggungan seberang bersama krunya.',
        `Mas Bayu profited from the legend, but Mbah Guno's death halted his film; that afternoon he filmed the silhouette of the Sleeping Princess from the ridge opposite with his crew.`
      ),
    },
  },
  treasure: {
    robber: {
      name: 'Si Macan Kawi',
      proclamation: L(
        '“Hartaku? Semua kutinggalkan di pangkuan Sang Putri Tidur. Yang cukup berani dan layak — carilah, ambillah!”',
        '“My treasure? I left it all in the lap of the Sleeping Princess. Let those brave and worthy enough — seek it, take it!”'
      ),
    },
    mountains: [
      { id: 'butak', name: L('Gunung Butak', 'Mount Butak'), tag: L('kepala Sang Putri Tidur', 'the head of the Sleeping Princess') },
      { id: 'kawi', name: L('Gunung Kawi', 'Mount Kawi'), tag: L('dada Sang Putri Tidur', 'the chest of the Sleeping Princess'), correct: true },
      { id: 'panderman', name: L('Gunung Panderman', 'Mount Panderman'), tag: L('kaki Sang Putri Tidur', 'the feet of the Sleeping Princess') },
    ],
    // shown on the reveal once the right mountain is guessed
    hindsight: L(
      'Petunjuknya ada sejak awal. Sang Macan menamai dirinya dari Gunung Kawi — “dada Sang Putri Tidur” — dan petanya tak pernah hilang: ia tergulung di dalam tongkat tujuh loreng milik Mbah Guno, benda yang kau periksa sejak awal. Tujuh loreng itu pun bukan hiasan belaka.',
      `The clue was there from the start. The Tiger named himself after Mount Kawi — "the chest of the Sleeping Princess" — and his map was never lost: it lay rolled inside Mbah Guno's seven-striped staff, the very object you examined from the beginning. And those seven stripes were no mere ornament.`
    ),
    legendTitle: L('Angka-angka legenda Si Macan Kawi', 'The legendary numbers of Si Macan Kawi'),
    legendNote: L('Dihafal seantero negeri — tapi hati-hati, hanya sebagian yang menjadi kunci. Sisanya umpan.', 'Memorized across the land — but beware, only some are keys. The rest are bait.'),
    legend: [
      { n: '1957', label: L('tahun ia lahir', 'the year he was born') },
      { n: '1980', label: L('tahun ia mulai merampok', 'the year he began robbing') },
      { n: '1992', label: L('tahun kejayaan terakhirnya (tewas)', 'his final year of glory (death)') },
      { n: '35', label: L('usianya saat tewas', 'his age at death') },
      { n: '45', label: L('jumlah rampokan besarnya', 'the number of his great robberies') },
      { n: '17', label: L('tanggal ia berpamitan di depan massa', 'the date he bade farewell before the crowd') },
      { n: '90', label: L('sayembara kepalanya (juta rupiah)', 'the bounty on his head (million rupiah)') },
      { n: '7', label: L('jumlah persembunyiannya', 'the number of his hideouts') },
    ],
    hunt: {
      intro: L(
        'Di dalam tongkat tujuh loreng, tergulung peta usang Si Macan Kawi. Tiga kunci memisahkanmu dari hartanya. Kau akan butuh peta daring (Google Maps) untuk membukanya.',
        `Inside the seven-striped staff, rolled up, is Si Macan Kawi's worn map. Three locks stand between you and his treasure. You'll need an online map (Google Maps) to crack them.`
      ),
      mapsHint: L(
        'Tip: ketik koordinat atau nama tempat ke Google Maps untuk melihat di mana ia jatuh.',
        'Tip: type the coordinates or a place name into Google Maps to see where it lands.'
      ),
      locks: [
        {
          id: 'sandi',
          kind: L('Kunci 1 · Sandi', 'Lock 1 · Cipher'),
          title: L('Pecahkan sandi peta', `Crack the map's cipher`),
          cipher: 'THRHT RHDP',
          prompt: L(
            'Di tepi peta tertera deret huruf di bawah. Geser tiap huruf MUNDUR sebanyak jumlah loreng pada tongkat Mbah Guno (lihat bukti), lalu tulis bunyinya.',
            `Along the edge of the map runs the row of letters below. Shift each letter BACKWARD by the number of stripes on Mbah Guno's staff (see the evidence), then write what it spells.`
          ),
          accept: ['makam kawi', 'makamkawi'],
          reveal: L(
            '“MAKAM KAWI.” Di bawahnya sang Macan menulis: “Mulailah dari tempat yang mati dihormati — tempat pohon dewandaru menjatuhkan rezeki, di lereng selatanku.”',
            '“MAKAM KAWI.” Beneath it the Tiger wrote: “Begin where the dead are honored — where the dewandaru tree drops its fortune, on my southern slope.”'
          ),
        },
        {
          id: 'gerbang',
          kind: L('Kunci 2 · Titik Awal', 'Lock 2 · Starting Point'),
          title: L('Temukan gerbang keramat', 'Find the sacred gateway'),
          prompt: L(
            '“Tempat yang mati dihormati, pohon dewandaru menjatuhkan rezeki, di lereng selatan Gunung Kawi.” Cari di peta daring — tempat apa itu? Tulis nama tempatnya (atau koordinatnya).',
            '“Where the dead are honored, where the dewandaru tree drops its fortune, on the southern slope of Mount Kawi.” Search an online map — what place is it? Write the place name (or its coordinates).'
          ),
          target: { lat: -8.0786, lng: 112.4528, tolKm: 2.5 },
          accept: [
            'pesarean gunung kawi',
            'pesarehan gunung kawi',
            'pesarean kawi',
            'makam gunung kawi',
            'keramat gunung kawi',
          ],
          reveal: L(
            'Benar — Pesarean Gunung Kawi. Pada nisan tua, sang Macan menggores arah terakhir: “Naiklah ke singgasana tertinggiku. Letaknya kusembunyikan dalam angka-angka legendaku — LINTANG: tahun kejayaan terakhirku, lalu usiaku saat tewas. BUJUR: jumlah rampokan besarku, lalu tanggal aku berpamitan. Banyak angka tentangku hanyalah umpan.”',
            'Right — Pesarean Gunung Kawi. On an old headstone, the Tiger scratched his final direction: “Climb to my highest throne. Its place I hid within my legendary numbers — LATITUDE: my final year of glory, then my age at death. LONGITUDE: the number of my great robberies, then the date I bade farewell. Many numbers about me are mere bait.”'
          ),
        },
        {
          id: 'puncak',
          kind: L('Kunci 3 · Harta', 'Lock 3 · Treasure'),
          title: L('Singgasana sang Macan', `The Tiger's throne`),
          prompt: L(
            'Rakit koordinatnya dari angka legenda (awas umpan!). Lintang mulai dengan 7 (selatan), bujur dengan 112 (timur). Lintang = 7,(dua angka tahun kejayaan)(usia saat tewas). Bujur = 112,(jumlah rampokan)(tanggal berpamitan). Masukkan koordinat — atau nama puncaknya.',
            'Assemble the coordinates from the legendary numbers (mind the bait!). Latitude begins with 7 (south), longitude with 112 (east). Latitude = 7.(last two digits of the final year of glory)(age at death). Longitude = 112.(number of great robberies)(date of farewell). Enter the coordinates — or the name of the summit.'
          ),
          target: { lat: -7.9235, lng: 112.4517, tolKm: 1.2 },
          accept: ['puncak gunung kawi', 'puncak kawi', 'redi kawi', 'summit gunung kawi'],
          reveal: L(
            'Tepat. S 7.9235°, E 112.4517° — Puncak Gunung Kawi, singgasana tertinggi sang Macan.',
            `Exactly. S 7.9235°, E 112.4517° — the summit of Mount Kawi, the Tiger's highest throne.`
          ),
        },
      ],
      reward: {
        title: L('Harta Si Macan Kawi ditemukan', 'The treasure of Si Macan Kawi is found'),
        text: L(
          'Di bawah batu pipih di puncak, terbungkus kain lapuk: keping-keping emas rampasan, untaian perhiasan, dan secarik pesan terakhir sang Macan — bahwa harta ini bukan untuk ditimbun, melainkan dikembalikan kepada kampung-kampung yang dulu ia rampas. Murid terakhirnya menjaganya hingga maut. Kini, kau yang menemukannya.',
          'Beneath a flat stone at the summit, wrapped in rotted cloth: coins of plundered gold, strings of jewelry, and a last note from the Tiger — that this treasure was not to be hoarded, but returned to the villages he once robbed. His last student guarded it to the death. Now, you are the one who found it.'
        ),
      },
    },
  },
}
