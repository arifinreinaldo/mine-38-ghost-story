import { L } from '../i18n/L'

// Case 6 (gated). Multi-killer mystery (Orient Express device) set on a
// Dutch colonial plantation in the Hindia Belanda, 1926. The culprits are
// FOUR people who conspired; the accusation must name the exact set.
export const tjandi = {
  id: 'tjandi',
  free: false,
  difficulty: 'Sulit',
  code: 'TS-1926',
  location: L('Onderneming Tjandi Saka, Priangan', 'Tjandi Saka Estate, Priangan'),
  scene: 'highland',
  title: L('Maut di Tjandi Saka', 'Death at Tjandi Saka'),
  blurb: L(
    'Seorang administratur perkebunan yang kejam ditemukan tewas saat banjir mengurung onderneming. Lukanya datang dari banyak tangan.',
    'A cruel plantation administrator is found dead while a flood seals off the estate. His wounds were dealt by many hands.'
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi, berlatar Hindia Belanda era kolonial. Terinspirasi kekejaman sistem perkebunan kolonial (kerja paksa & poenale sanctie) dan pola "pembunuhan beramai-ramai" ala Agatha Christie. Seluruh tokoh, nama, dan kejadian rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
      'This is a work of fiction set in the colonial-era Dutch East Indies. It is inspired by the cruelties of the colonial plantation system (forced labor and the poenale sanctie) and by the "murder by many hands" device in the manner of Agatha Christie. All characters, names, and events are invented; any resemblance to real persons or events is unintentional.'
    ),
    source: {
      label: L(
        'Terinspirasi: "Murder on the Orient Express" — Agatha Christie',
        'Inspired by: "Murder on the Orient Express" — Agatha Christie'
      ),
      url: 'https://en.wikipedia.org/wiki/Murder_on_the_Orient_Express',
    },
  },
  cover: {
    lead: L(
      'Di sebuah perkebunan terpencil tahun 1926, sang tuan kebun yang ditakuti mati di malam banjir. Hukum kolonial pernah membebaskannya. Malam ini, ada hukum lain yang menemuinya.',
      'On a remote plantation in 1926, the dreaded master of the estate dies on the night of the flood. Colonial law once set him free. Tonight, another law catches up with him.'
    ),
  },
  briefing: {
    paras: [
      L(
        'Tahun 1926, di Onderneming Tjandi Saka, sebuah perkebunan di pegunungan Priangan. Administratur-nya, Tuan Dirk Voss, terkenal kejam: cambuk dan poenale sanctie ia jatuhkan sesuka hati pada para kuli kontrak.',
        'The year is 1926, at the Tjandi Saka Estate, a plantation high in the Priangan mountains. Its administrator, Mister Dirk Voss, is notorious for his cruelty: the whip and the poenale sanctie he metes out at whim upon the indentured laborers.'
      ),
      L(
        'Pada malam musim hujan, banjir memutus jembatan satu-satunya — onderneming terkurung hingga subuh. Pagi harinya, Voss ditemukan tewas di ruang kerjanya. Mula-mula diduga perampok; pintu memang berantakan seperti digeledah.',
        'On a night in the rainy season, a flood washes out the only bridge — the estate is cut off until dawn. The next morning, Voss is found dead in his study. At first a robber is suspected; the room is indeed in disarray, as if ransacked.'
      ),
      L(
        'Tapi tak ada perahu, tak ada jembatan, tak ada jejak dari luar. Kepada Anda diserahkan berkas ini sebelum kasus ditutup tergesa-gesa — di rumah yang terkunci oleh banjir, kebenaran tak punya tempat lari.',
        'But there is no boat, no bridge, no trace from outside. This file is handed to you before the case is hastily closed — in a house locked shut by the flood, the truth has nowhere to run.'
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi keenam penghuni onderneming. Lalu susun pembuktian dan ajukan tuduhan — ingat, pelaku belum tentu seorang diri.',
      'Examine every piece of evidence. Question the six residents of the estate. Then build your case and make an accusation — remember, the culprit may not have acted alone.'
    ),
  },
  victim: {
    init: 'DV',
    name: 'Tuan Dirk Voss',
    meta: L('54 tahun · administratur Onderneming Tjandi Saka', '54 · administrator of the Tjandi Saka Estate'),
    paras: [
      L(
        'Tuan kebun yang membangun keuntungan di atas punggung para kuli. Cambuknya melegenda; pengadilan kolonial — landraad — pernah membebaskannya dari kematian beberapa kuli yang ia hukum.',
        'A master of the estate who built his profits on the backs of his laborers. His whip was the stuff of legend; the colonial court — the landraad — once acquitted him of the deaths of several laborers he had punished.'
      ),
      L(
        'Ditemukan tewas di ruang kerjanya pada subuh setelah banjir. Beberapa luka di tubuhnya, ruang kerja terkunci dari dalam, dan tak ada satu pun jejak orang luar di lumpur halaman.',
        'Found dead in his study at dawn, after the flood. Several wounds upon his body, the study locked from the inside, and not a single outsider’s footprint in the mud of the yard.'
      ),
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Pola luka di tubuh Voss', 'The pattern of wounds on Voss’s body'),
      summary: L('Beberapa senjata, beberapa ketinggian — beberapa tangan.', 'Several weapons, several heights — several hands.'),
      detail: L(
        'Luka di tubuh Voss tak berasal dari satu senjata: ada bekas parang, bilah tipis, dan benda tumpul berat — dengan sudut dan ketinggian yang berbeda-beda. Tak mungkin satu orang menorehkan semuanya. Ini bukan ulah seorang pembunuh, melainkan beberapa tangan sekaligus.',
        'The wounds on Voss’s body did not come from one weapon: there are marks of a machete, of a thin blade, and of a heavy blunt object — at differing angles and heights. No single person could have dealt them all. This is not the work of one killer, but of several hands at once.'
      ),
    },
    {
      id: 'jamu', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Obat tidur di jamu malam', 'A sleeping draught in the night jamu'),
      summary: L('Voss dibius lebih dulu sebelum diserang.', 'Voss was drugged before he was attacked.'),
      detail: L(
        'Sisa jamu malam Voss mengandung obat tidur dosis tinggi. Ia dilumpuhkan dulu agar tak melawan — sebuah rencana, bukan perkelahian. Jamu dan kopi malamnya selalu diantar oleh satu pelayan: Inem.',
        'The remains of Voss’s night jamu contained a heavy dose of a sleeping drug. He was first subdued so he could not resist — a plan, not a brawl. His evening jamu and coffee were always brought by one servant: Inem.'
      ),
    },
    {
      id: 'putusan', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Putusan landraad', 'The landraad verdict'),
      summary: L('Voss dibebaskan atas kematian beberapa kuli yang ia cambuk.', 'Voss was acquitted of the deaths of several laborers he had flogged.'),
      detail: L(
        'Salinan putusan landraad: Voss dibebaskan dari tuduhan atas kematian beberapa kuli yang dicambuknya — disebut "pendisiplinan yang sah". Di antara yang mati: putra Mandor Karto dan saudari pembuku Wim. Bagi keluarga mereka, hukum kolonial sudah menutup pintu keadilan.',
        'A copy of the landraad verdict: Voss cleared of the charge of killing several laborers he had flogged — deemed "lawful discipline." Among the dead: the son of Foreman Karto and the sister of the bookkeeper Wim. For their families, colonial law had already shut the door on justice.'
      ),
    },
    {
      id: 'banjir', icon: 'metadata', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Jembatan putus oleh banjir', 'The bridge washed out by the flood'),
      summary: L('Tak ada yang masuk/keluar onderneming sejak senja.', 'No one entered or left the estate after dusk.'),
      detail: L(
        'Catatan mandor air: jembatan satu-satunya putus diterjang banjir pada senja, dan baru bisa dilintasi subuh. Sepanjang malam, tak seorang pun bisa masuk atau keluar. Siapa pun pelakunya, ia bermalam di dalam onderneming ini.',
        'The water foreman’s log: the only bridge was torn away by the flood at dusk and could not be crossed again until dawn. Through the whole night, no one could come in or go out. Whoever did this spent the night inside this estate.'
      ),
    },
    {
      id: 'parang', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Luka parang & parang mandor', 'A machete wound and the foreman’s machete'),
      summary: L('Satu luka cocok dengan parang kerja Mandor Karto.', 'One wound matches Foreman Karto’s work machete.'),
      detail: L(
        'Salah satu luka cocok dengan mata parang lebar — jenis yang dipakai para mandor. Parang kerja Mandor Karto ditemukan baru saja dicuci, padahal malam itu tak ada pekerjaan kebun karena banjir.',
        'One of the wounds matches a broad machete blade — the kind the foremen carry. Foreman Karto’s work machete was found freshly washed, though there had been no field work that night because of the flood.'
      ),
    },
    {
      id: 'gembok', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Ruang kerja terkunci dari dalam', 'A study locked from within'),
      summary: L('Ditata seperti perampokan — padahal tak ada jalan masuk.', 'Staged like a robbery — yet there was no way in.'),
      herring: true,
      detail: L(
        'Ruang kerja diacak-acak seolah dirampok, tapi pintunya terkunci dari dalam dan jendelanya tergerendel. Tak ada jejak di lumpur halaman. "Perampokan" itu panggung. Hanya pemegang kunci cadangan yang bisa mengunci ruang itu kembali dari dalam lalu keluar — sang pembuku, Wim de Vries.',
        'The study was turned upside down as if robbed, but the door was locked from the inside and the window bolted. No footprints in the mud of the yard. The "robbery" was a stage set. Only the holder of the spare key could lock the room again from within and then leave — the bookkeeper, Wim de Vries.'
      ),
    },
    {
      id: 'catatan', icon: 'ledger', tag: L('Dokumen', 'Document'),
      title: L('Logbuku yang diubah', 'The altered logbook'),
      summary: L('Jam "istirahat" Voss diubah untuk mengaburkan waktu.', 'Voss’s "retiring" hour was altered to blur the timing.'),
      detail: L(
        'Logbuku rumah tangga menunjukkan jam Voss "pamit tidur" telah ditimpa tulisan baru — oleh tangan pembuku, Wim. Sebuah usaha mengaburkan kapan sebenarnya Voss diserang.',
        'The household logbook shows that the hour Voss "took his leave for bed" had been written over anew — by the bookkeeper Wim’s hand. An attempt to obscure when Voss was truly attacked.'
      ),
    },
    {
      id: 'jembatan', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Pieter terjebak di seberang', 'Pieter stranded on the far side'),
      summary: L('Pieter Bakker terkurung di onderneming sebelah.', 'Pieter Bakker was trapped on the neighboring estate.'),
      detail: L(
        'Asisten muda Pieter Bakker tengah berada di onderneming sebelah ketika jembatan putus. Catatan tetangga dan kusirnya memastikan ia baru menyeberang subuh — saat semuanya sudah terjadi.',
        'The young assistant Pieter Bakker was over at the neighboring estate when the bridge went out. The neighbor’s records and his coachman confirm he did not cross back until dawn — by which time everything was already done.'
      ),
    },
    {
      id: 'barak', icon: 'doc', tag: L('Kesaksian', 'Testimony'),
      title: L('Said dikurung di barak', 'Said confined to the barracks'),
      summary: L('Said & para kuli dijaga centeng sepanjang malam.', 'Said and the laborers were watched by the centeng all night.'),
      detail: L(
        'Siang itu Said, pemimpin kuli kontrak, mengancam Voss di depan umum. Justru karena itu Voss memerintahkan Said dan kuli lain dikurung di barak di bawah penjagaan centeng sepanjang malam. Sang penjaga bersaksi tak seorang pun keluar.',
        'That afternoon Said, the leader of the indentured laborers, threatened Voss in public. For that very reason Voss ordered Said and the other laborers locked in the barracks under the centeng’s guard all night. The guard testifies that no one came out.'
      ),
    },
    {
      id: 'sumpah', icon: 'photo', tag: L('Temuan Tersembunyi', 'Hidden Find'),
      title: L('Janji yang disembunyikan', 'A hidden vow'),
      summary: L('Sehelai kain bersumpah darah — empat nama terikat.', 'A cloth sworn in blood — four names bound together.'),
      locked: true, twist: true,
      detail: L(
        'Tersembunyi di bilik Nyai Sari: sehelai kain dengan empat cap jempol darah dan sebuah sumpah — janji mereka yang kehilangan untuk menuntaskan apa yang ditolak pengadilan. Empat yang terikat: Mandor Karto, Inem, Wim de Vries, dan Nyai Sari sendiri. Bukan satu pembunuh — sebuah persekongkolan.',
        'Hidden in Nyai Sari’s chamber: a cloth bearing four bloody thumbprints and an oath — the vow of those who had lost, to finish what the court had refused. The four bound together: Foreman Karto, Inem, Wim de Vries, and Nyai Sari herself. Not one killer — a conspiracy.'
      ),
    },
  ],
  suspects: [
    {
      id: 'karto', init: 'MK', name: 'Mandor Karto', age: 51,
      role: L('Mandor (kepala kerja) kebun', 'Foreman (head of labor) of the plantation'),
      statement: L(
        '“Anak saya mati di tiang cambuk itu. Pengadilan menyebutnya disiplin. Saya menyebutnya pembunuhan.”',
        '“My son died at that whipping post. The court called it discipline. I call it murder.”'
      ),
      motive: L(
        'Putranya tewas dicambuk Voss; landraad membebaskan sang tuan.',
        'His son was flogged to death by Voss; the landraad acquitted the master.'
      ),
      alibi: L(
        'Terkurung di dalam onderneming oleh banjir, seperti yang lain.',
        'Trapped inside the estate by the flood, like all the others.'
      ),
      interrogation: [
        { q: L('Apa yang terjadi pada putramu?', 'What happened to your son?'),
          a: L('Dicambuk sampai mati di tiang itu, dituduh mencuri segenggam biji kopi. Tuan tertawa. Pengadilan menyebutnya "pendisiplinan".', 'Flogged to death at that post, accused of stealing a handful of coffee beans. The master laughed. The court called it "discipline."') },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Banjir mengurung kami semua di dalam. Tak ada yang bisa keluar — termasuk aku.', 'The flood penned us all inside. No one could get out — myself included.') },
        { q: L('Parangmu baru dicuci. Untuk apa?', 'Your machete was freshly washed. Why?'),
          a: L('Banyak mandor punya parang seperti itu... Saya tak akan bicara lagi sendirian. Tidak tanpa yang lain.', 'Many foremen carry a machete like that... I will not speak again alone. Not without the others.'), requires: 'parang' },
      ],
    },
    {
      id: 'inem', init: 'IN', name: 'Inem', age: 19,
      role: L('Pelayan rumah administratur', 'Maidservant in the administrator’s house'),
      statement: L(
        '“Saya yang mengantar minumannya tiap malam. Malam itu pun begitu — hanya saja saya tak berani menatap matanya.”',
        '“It was I who brought his drink every night. That night too — only I did not dare meet his eyes.”'
      ),
      motive: L(
        'Berulang kali dilecehkan Voss di dalam rumah.',
        'Repeatedly abused by Voss within the house.'
      ),
      alibi: L('Di dalam rumah induk sepanjang malam.', 'Inside the main house all night.'),
      interrogation: [
        { q: L('Kau yang menyajikan minuman malamnya?', 'Were you the one who served his night drink?'),
          a: L('Saya yang mengantar kopi dan jamu ke mejanya tiap malam. Seperti biasa. Malam itu... saya tak menatap matanya.', 'I brought the coffee and the jamu to his table every night. As always. That night... I did not look him in the eye.'), requires: 'jamu' },
        { q: L('Apa yang Voss lakukan padamu?', 'What did Voss do to you?'),
          a: L('Hal-hal yang tak sanggup saya ucapkan. Nyai Sari yang melindungi saya. Di rumah ini, kami saling melindungi.', 'Things I cannot bring myself to say. Nyai Sari protected me. In this house, we protect one another.') },
        { q: L('Kau sendirian malam itu?', 'Were you alone that night?'),
          a: L('Di rumah ini, malam itu, tak ada yang benar-benar sendirian.', 'In this house, that night, no one was truly alone.') },
      ],
    },
    {
      id: 'wim', init: 'WV', name: 'Wim de Vries', age: 40,
      role: L('Pembuku (boekhouder) onderneming', 'Bookkeeper (boekhouder) of the estate'),
      statement: L(
        '“Saya mengurus angka, bukan darah. Pintu itu terkunci dari dalam — kau sendiri yang bilang tak ada perampok.”',
        '“I deal in figures, not in blood. That door was locked from within — you said yourself there was no robber.”'
      ),
      motive: L(
        'Diperas Voss soal status "Indo"-nya; saudarinya tewas dicambuk.',
        'Blackmailed by Voss over his "Indo" status; his sister was flogged to death.'
      ),
      alibi: L('Mengaku menutup pembukuan di kantor onderneming.', 'Claims he was closing the books in the estate office.'),
      interrogation: [
        { q: L('Kau memegang kunci ruang kerja Voss?', 'Did you hold the key to Voss’s study?'),
          a: L('Sebagai pembuku, ya. Dan pintu itu terkunci dari dalam — maka tak ada perampok dari luar. Kau sendiri yang menyimpulkannya.', 'As the bookkeeper, yes. And that door was locked from the inside — so there was no robber from outside. You concluded that yourself.'), requires: 'gembok' },
        { q: L('Logbuku jam istirahat Voss diubah. Kenapa?', 'The logbook of Voss’s retiring hour was altered. Why?'),
          a: L('Saya mencatat sesuai yang saya tahu. Mungkin... saya keliru soal jamnya.', 'I recorded it as I knew it. Perhaps... I was mistaken about the hour.'), requires: 'catatan' },
        { q: L('Voss memerasmu?', 'Was Voss blackmailing you?'),
          a: L('Ia tahu darahku campuran dan menahan upahku bertahun-tahun. Saudariku termasuk yang mati di tiang itu. Jadi ya — aku punya alasan. Kami semua punya.', 'He knew my blood was mixed and withheld my wages for years. My sister was among those who died at that post. So yes — I had reason. We all did.') },
      ],
    },
    {
      id: 'nyai', init: 'NS', name: 'Nyai Sari', age: 35,
      role: L('Nyai & pengurus rumah Voss', 'Nyai and keeper of Voss’s house'),
      statement: L(
        '“Aku mengenal setiap sudut rumah ini, dan setiap luka penghuninya. Termasuk lukaku sendiri.”',
        '“I know every corner of this house, and every wound of those who live in it. My own among them.”'
      ),
      motive: L(
        'Anaknya bersama Voss dikirim pergi & disangkal sang tuan.',
        'Her child by Voss was sent away and disowned by the master.'
      ),
      alibi: L('Mengurus rumah induk sepanjang malam.', 'Tending the main house all night.'),
      interrogation: [
        { q: L('Kau yang mengurus rumah ini?', 'Are you the one who keeps this house?'),
          a: L('Aku nyai-nya. Aku tahu setiap sudut rumah ini. Anakku — anak kami — ia kirim entah ke mana. Aku tak pernah memaafkannya.', 'I am his nyai. I know every corner of this house. My child — our child — he sent away to who knows where. I never forgave him.') },
        { q: L('Kau tahu siapa yang membunuhnya?', 'Do you know who killed him?'),
          a: L('Kau sudah lihat lukanya, bukan? Tak ada satu tangan yang sanggup. Ini keadilan yang tak pernah diberikan pengadilan kepada kami.', 'You have seen the wounds, haven’t you? No single hand could have done it. This is the justice the court never gave us.'), requires: 'putusan', unlocks: 'sumpah' },
        { q: L('Siapa "kami" itu?', 'Who are "we"?'),
          a: L('Mereka yang kehilangan di bawah tangannya. Kalau kau sudah menemukan janji kami, kau sudah tahu nama-namanya.', 'Those who lost someone at his hand. If you have found our vow, you already know the names.') },
      ],
    },
    {
      id: 'pieter', init: 'PB', name: 'Pieter Bakker', age: 28,
      role: L('Asisten administratur (Belanda)', 'Assistant administrator (Dutchman)'),
      statement: L(
        '“Aku muak pada caranya, dan aku melaporkannya. Tapi muak bukan berarti membunuh.”',
        '“I was sickened by his ways, and I reported him. But to be sickened is not to kill.”'
      ),
      motive: L(
        'Berseberangan terbuka dengan Voss soal kekejamannya.',
        'Openly at odds with Voss over his cruelty.'
      ),
      alibi: L('Terjebak di onderneming sebelah saat jembatan putus.', 'Stranded at the neighboring estate when the bridge went out.'),
      interrogation: [
        { q: L('Kau berseberangan dengan Voss?', 'Were you at odds with Voss?'),
          a: L('Aku muak melihatnya memperlakukan manusia seperti ternak. Aku melaporkannya ke residen — sia-sia. Tapi aku tak akan menjadi seperti dia.', 'I was sick of watching him treat men like cattle. I reported him to the resident — in vain. But I will not become like him.') },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Terjebak di onderneming sebelah ketika jembatan putus. Aku baru menyeberang subuh, saat semuanya sudah terjadi.', 'Stranded at the neighboring estate when the bridge went out. I only crossed back at dawn, when it was all already done.'), requires: 'jembatan' },
        { q: L('Kau melihat sesuatu yang janggal?', 'Did you notice anything odd?'),
          a: L('Hanya bahwa paginya, tak seorang pun di rumah itu tampak benar-benar terkejut.', 'Only that in the morning, no one in that house seemed truly surprised.') },
      ],
    },
    {
      id: 'said', init: 'SD', name: 'Said', age: 30,
      role: L('Pemimpin kuli kontrak', 'Leader of the indentured laborers'),
      statement: L(
        '“Aku mengancamnya di depan semua orang, ya. Tapi malam itu aku dikurung — tanya penjaganya.”',
        '“I threatened him in front of everyone, yes. But that night I was locked up — ask the guard.”'
      ),
      motive: L(
        'Memimpin kuli yang dicambuk; mengancam Voss terang-terangan.',
        'Led the flogged laborers; threatened Voss openly.'
      ),
      alibi: L('Dikurung di barak di bawah penjagaan centeng sepanjang malam.', 'Locked in the barracks under the centeng’s guard all night.'),
      interrogation: [
        { q: L('Kau mengancam Voss?', 'Did you threaten Voss?'),
          a: L('Di depan semua orang, setelah ia mencambuk kawan-kawanku. Aku tak menyesalinya. Tapi aku tak menyentuhnya.', 'In front of everyone, after he flogged my comrades. I do not regret it. But I never laid a hand on him.') },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Dikurung di barak bersama kuli lain, dijaga centeng karena ancamanku tadi siang. Penjaga itu bisa bersaksi.', 'Locked in the barracks with the other laborers, guarded by the centeng because of my threat that afternoon. The guard can testify.'), requires: 'barak' },
        { q: L('Kau tahu siapa pelakunya?', 'Do you know who did it?'),
          a: L('Kalaupun tahu, untuk apa kuserahkan mereka pada hukum yang sama yang membebaskan Voss? Tapi sungguh, bukan kami yang di barak.', 'Even if I did, why would I hand them over to the same law that freed Voss? But truly, it was not us in the barracks.') },
      ],
    },
  ],
  timeline: [
    { t: L('Senja', 'Dusk'), key: false, x: L('Jembatan satu-satunya putus diterjang banjir; onderneming terkurung hingga subuh.', 'The only bridge is torn away by the flood; the estate is cut off until dawn.') },
    { t: L('20.00', '20:00'), key: false, x: L('Inem mengantar kopi & jamu malam ke ruang kerja Voss — kali ini dibubuhi obat tidur.', 'Inem brings the evening coffee and jamu to Voss’s study — this time laced with a sleeping drug.') },
    { t: L('~21.30', '~21:30'), key: true, x: L('Voss yang terkulai diserang; luka datang dari beberapa tangan berbeda.', 'The slumped Voss is attacked; the wounds come from several different hands.') },
    { t: L('~22.00', '~22:00'), key: true, x: L('Ruang kerja dikunci dari dalam dan ditata seperti bekas perampokan.', 'The study is locked from within and staged like the scene of a robbery.') },
    { t: L('06.00', '06:00'), key: false, x: L('Jasad ditemukan; mula-mula diduga perampok dari luar.', 'The body is found; at first a robber from outside is suspected.') },
  ],
  solution: {
    killers: ['karto', 'inem', 'wim', 'nyai'],
    motive: ['putusan'],
    means: ['luka', 'jamu'],
    opportunity: ['banjir'],
  },
  reveal: {
    sections: [
      { h: L('Pelakunya: bukan satu orang', 'The killer: not one person'), p: [
        L(
          'Voss tidak dibunuh oleh satu tangan. Lukanya datang dari beberapa senjata, beberapa ketinggian, beberapa tangan — sebuah parang, sebuah bilah tipis, sebuah benda tumpul berat. Ini bukan seorang pembunuh; ini sebuah persekongkolan.',
          'Voss was not killed by one hand. His wounds came from several weapons, several heights, several hands — a machete, a thin blade, a heavy blunt object. This is not one killer; this is a conspiracy.'
        ),
        L(
          'Mereka membiusnya lebih dulu — jamu malam yang diantar Inem dibubuhi obat tidur — lalu, satu per satu, mereka yang pernah ia hancurkan menuntaskannya: Mandor Karto, Inem, Wim de Vries, dan Nyai Sari.',
          'They drugged him first — the evening jamu Inem brought was laced with a sleeping drug — then, one by one, those he had once broken finished him: Foreman Karto, Inem, Wim de Vries, and Nyai Sari.'
        ),
      ] },
      { h: L('Keadilan yang ditolak pengadilan', 'The justice the court refused'), p: [
        L(
          'Voss mencambuk mati beberapa kuli — termasuk putra Karto dan saudari Wim — atas tuduhan sepele. Landraad membebaskannya; hukum kolonial melindungi sang tuan. Yang tersisa bagi mereka yang kehilangan hanyalah satu sama lain, dan sebuah janji yang dicap dengan darah di bilik Nyai Sari.',
          'Voss flogged several laborers to death — among them Karto’s son and Wim’s sister — over trifling charges. The landraad acquitted him; colonial law shielded the master. All that remained to those who had lost was one another, and a vow sealed in blood in Nyai Sari’s chamber.'
        ),
      ] },
      { h: L('Lingkaran yang terkurung', 'The circle sealed in'), p: [
        L(
          'Banjir memutus jembatan sejak senja: tak ada yang masuk atau keluar hingga subuh. Pelakunya pasti penghuni rumah. Ruang kerja dikunci dari dalam oleh Wim, sang pemegang kunci, lalu ditata seperti perampokan; logbuku pun ia ubah untuk mengaburkan waktu. Nyai Sari, yang mengenal tiap sudut rumah, mengikat mereka dalam satu sumpah.',
          'The flood cut the bridge from dusk on: no one came in or went out until dawn. The culprit had to be of the household. The study was locked from within by Wim, the keeper of the key, then staged as a robbery; the logbook, too, he altered to blur the timing. Nyai Sari, who knew every corner of the house, bound them all in a single oath.'
        ),
      ] },
      { h: L('Mengapa bukan Pieter atau Said', 'Why not Pieter or Said'), p: [
        L(
          'Pieter Bakker membenci cara Voss dan melaporkannya — tapi ia terjebak di onderneming sebelah saat jembatan putus, baru menyeberang subuh. Said mengancam Voss terang-terangan siang itu — dan justru karena itu ia dikurung di barak di bawah penjagaan sepanjang malam. Yang paling lantang menentang, bukan mereka pelakunya.',
          'Pieter Bakker loathed Voss’s ways and reported him — but he was stranded at the neighboring estate when the bridge went out, crossing back only at dawn. Said threatened Voss openly that afternoon — and for that very reason was locked in the barracks under guard all night. The loudest to oppose him were not the ones who did it.'
        ),
        L(
          'Tiga unsur bertemu bukan pada satu orang, melainkan pada empat: motif (keadilan yang ditolak pengadilan), cara (banyak tangan atas tubuh yang dibius), dan kesempatan (rumah yang terkurung banjir). Mereka melakukannya bersama.',
          'The three elements meet not in one person, but in four: motive (the justice the court refused), means (many hands upon a drugged body), and opportunity (a house sealed in by the flood). They did it together.'
        ),
      ] },
    ],
    rebuttals: {
      pieter: L(
        'Pieter melawan Voss secara terbuka dan melaporkannya ke residen — tapi banjir mengurungnya di onderneming sebelah; ia baru menyeberang subuh. Perlawanan terbuka bukan tangan yang membunuh.',
        'Pieter opposed Voss openly and reported him to the resident — but the flood penned him in at the neighboring estate; he crossed back only at dawn. Open defiance is not the hand that kills.'
      ),
      said: L(
        'Said mengancam Voss di depan umum siang itu — dan justru karena itu ia dikurung di barak di bawah penjagaan sepanjang malam. Kesaksian penjaga membersihkannya.',
        'Said threatened Voss in public that afternoon — and for that very reason was locked in the barracks under guard all night. The guard’s testimony clears him.'
      ),
    },
  },
}
