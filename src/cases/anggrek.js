// Case 5 (gated). Original mystery transplanting Agatha Christie's
// "The Mysterious Affair at Styles" (1920, public domain) to modern Jakarta:
// the too-obvious suspect, a delayed poison that defeats the alibi, and an
// accomplice who feigns hatred. Hardest to guess so far.
export const anggrek = {
  id: 'anggrek',
  free: false,
  difficulty: 'Sulit',
  code: 'WA-0726',
  location: 'Wisma Anggrek, Menteng, Jakarta',
  scene: 'estate',
  title: 'Maut di Wisma Anggrek',
  blurb:
    'Sang matriark Wijaya Group tewas di kamarnya. Suami mudanya punya alibi sempurna — justru di situ letak masalahnya.',
  disclaimer: {
    text: 'Kisah ini fiksi, terinspirasi novel klasik Agatha Christie "The Mysterious Affair at Styles" (1920) — dipindahkan ke Jakarta masa kini. Seluruh tokoh, nama, dan kejadian rekaan; kemiripan dengan orang nyata tidak disengaja.',
    source: {
      label: 'Terinspirasi: "The Mysterious Affair at Styles" — Agatha Christie',
      url: 'https://en.wikipedia.org/wiki/The_Mysterious_Affair_at_Styles',
    },
  },
  cover: {
    lead: 'Sebuah rumah tua nan megah di Menteng, sebuah kerajaan bisnis, dan seorang janda kaya yang menikah lagi dengan pria jauh lebih muda. Lalu, satu pagi, ia tak pernah bangun.',
  },
  briefing: {
    paras: [
      'Hartati Wijaya membangun Wijaya Group dari nol menjadi imperium properti. Di usia 68, ia mengejutkan keluarga dengan menikahi Reza Maulana — pria 34 tahun yang pesonanya melebihi rekam jejaknya. Enam bulan kemudian, Hartati ditemukan tewas di kamarnya di Wisma Anggrek.',
      'Mula-mula semua menduga jantungnya — ia memang sakit-sakitan dan rutin minum tonik jantung tiap malam. Tapi dokter pribadinya menolak menandatangani "wajar" dan memaksa toksikologi. Hasilnya: ia diracun.',
      'Semua mata tertuju pada sang suami muda. Terlalu mudah, kata sebagian. Terlalu jelas, kata yang lain — seolah ada yang menjebaknya. Keluarga memanggil Anda sebelum kasus salah arah.',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi keenam orang terdekat sang matriark. Lalu susun pembuktian — motif, cara, kesempatan. Hati-hati: di rumah ini, alibi yang sempurna dan kebencian yang lantang sama-sama bisa palsu.',
  },
  victim: {
    init: 'HW',
    name: 'Hartati Wijaya',
    meta: '68 tahun · pendiri & pemilik Wijaya Group',
    paras: [
      'Matriark yang disegani sekaligus ditakuti — memegang kendali penuh atas perusahaan dan hartanya hingga napas terakhir. Enam bulan lalu ia menikahi Reza Maulana, membuat para pewaris gusar.',
      'Ditemukan tewas di kamarnya pukul 22.50, di nakas tergeletak gelas tonik jantung malamnya. Tak ada luka, tak ada tanda paksa masuk. Hanya jantung yang berhenti — terlalu dini, kata dokternya.',
    ],
  },
  evidence: [
    {
      id: 'racun', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Tonik jantung beracun',
      summary: 'Dosis mematikan obat jantung — tapi hanya pekat di dasar botol.',
      detail:
        'Toksikologi menemukan kadar digitalis (obat jantung) yang mematikan pada tonik Hartati. Anehnya, kadar di dasar botol jauh lebih pekat daripada di bagian atas — seolah zatnya mengendap. Dosis terakhir yang ia teguk adalah yang paling beracun.',
    },
    {
      id: 'endapan', icon: 'metadata', tag: 'Analisis',
      title: 'Mekanisme endapan',
      summary: 'Zat ditambahkan berhari-hari lalu agar obat mengendap & memekat.',
      detail:
        'Analisis kimia menjelaskan keanehan itu: sebuah zat sengaja dicampurkan ke tonik beberapa hari sebelumnya, membuat obat jantung mengendap perlahan ke dasar. Racun tak diberikan pada malam kematian — ia dipasang berhari-hari sebelumnya, menunggu dosis terakhir. Alibi malam itu, milik siapa pun, jadi tak relevan.',
    },
    {
      id: 'alibi', icon: 'cctv', tag: 'Rekaman',
      title: 'Alibi Reza di gala',
      summary: 'CCTV & foto: Reza di gala amal lintas kota saat kematian.',
      detail:
        'Malam Hartati tewas, Reza tampak di sebuah gala amal di hotel seberang kota — terekam CCTV, berfoto dengan tamu, bahkan naik panggung pukul 21.30. Sebuah alibi yang nyaris sempurna untuk waktu kematian. Nyaris — sampai kau ingat racunnya sudah dipasang jauh sebelum malam itu.',
    },
    {
      id: 'wasiat', icon: 'doc', tag: 'Dokumen',
      title: 'Berkas anulir & wasiat baru',
      summary: 'Hartati mulai membatalkan pernikahan & memangkas Reza.',
      detail:
        'Di meja pengacaranya: berkas permohonan pembatalan pernikahan dan draf wasiat baru yang mencoret Reza hampir seluruhnya. Belum diteken. Selama belum sah, Reza tetap pewaris besar — tapi begitu diteken, ia kehilangan segalanya. Hartati hendak menutup pintu itu pekan ini.',
    },
    {
      id: 'feud', icon: 'phone', tag: 'Ponsel',
      title: 'Permusuhan Bu Endang & Reza',
      summary: 'Pesan-pesan Bu Endang mencerca Reza terang-terangan.',
      detail:
        'Ponsel berisi pesan-pesan Bu Endang, asisten pribadi Hartati, yang berulang kali mencerca Reza: "penjilat", "pengincar harta". Permusuhan mereka jadi rahasia umum di rumah ini. Tak ada yang membayangkan dua orang yang saling membenci sekeras itu bisa bersekutu.',
    },
    {
      id: 'akses', icon: 'cup', tag: 'Barang Bukti',
      title: 'Siapa membawa tonik malam',
      summary: 'Setiap malam, Reza sendiri yang mengantar tonik ke kamar Hartati.',
      detail:
        'Catatan rumah tangga & kesaksian pembantu seragam: Bu Endang menyiapkan kotak obat, tapi yang membawa botol tonik ke kamar Hartati tiap malam — dan mengisinya ulang — adalah Reza, "sebagai tanda cinta". Hanya ia yang memegang botol itu hari demi hari, cukup lama untuk memasang racun yang menunggu.',
    },
    {
      id: 'citra', icon: 'doc', tag: 'Dokumen',
      title: 'Jejak apotek Citra',
      summary: 'Zatnya bukan dari apoteknya; Citra di luar kota sepekan.',
      detail:
        'Citra, keponakan Hartati yang apoteker, jadi tersangka racun paling gampang. Tapi zat pengendap itu tak cocok dengan stok apoteknya, dan catatan sif serta tiket memastikan ia di luar kota sepanjang pekan tampering terjadi. Ia tak pernah menyentuh tonik di rumah ini.',
    },
    {
      id: 'gilang', icon: 'ledger', tag: 'Dokumen',
      title: 'Utang & audit Gilang',
      summary: 'Terlilit utang — tapi kematian ibunya membekukan asetnya.',
      detail:
        'Gilang, putra sulung, terlilit utang dan takut kehilangan kendali perusahaan. Motif uang yang nyata. Namun kematian Hartati justru membekukan seluruh aset dalam proses waris — menjeratnya makin dalam dalam jangka pendek. Dan tiga hari itu ia di Singapura, ada boarding pass.',
    },
    {
      id: 'vial', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Vial racun di mobil Reza',
      summary: 'Sebotol kecil digitalis "ditemukan" di mobil Reza — terlalu rapi.',
      herring: true,
      detail:
        'Sebuah vial digitalis ditemukan terselip di mobil Reza — lengkap dengan sidik jarinya. Terlalu gampang, terlalu rapi: seolah sengaja ditaruh agar ia tertuduh. Bagi banyak orang, ini bukti Reza dijebak. Tapi vial ini sama sekali bukan cara Hartati diracun — ia hanya umpan.',
    },
    {
      id: 'rahasia', icon: 'photo', tag: 'Temuan Tersembunyi',
      title: 'Foto Reza & Bu Endang',
      summary: 'Mereka diam-diam sepasang kekasih, jauh sebelum semua ini.',
      locked: true, twist: true,
      detail:
        'Tersembunyi di ponsel lama: foto dan pesan mesra Reza dan Bu Endang dari bertahun lalu — mereka sepasang kekasih jauh sebelum Reza mendekati Hartati. Kebencian Bu Endang yang lantang itu sandiwara: tameng agar tak seorang pun mengira mereka bersekutu. Hartati menemukan rahasia ini — dan itulah sebabnya ia bergegas membatalkan semuanya.',
    },
  ],
  suspects: [
    {
      id: 'reza', init: 'RM', name: 'Reza Maulana', age: 34,
      role: 'Suami muda Hartati (6 bulan)',
      statement: '“Aku tahu bagaimana kelihatannya. Tapi malam itu aku di gala, di depan ratusan orang. Aku mencintainya — aku bahkan yang membawakan toniknya tiap malam.”',
      motive: 'Tampak sebagai pengincar harta — atau korban yang dijebak.',
      alibi: 'Tampil di gala amal lintas kota saat kematian (terekam CCTV).',
      interrogation: [
        { q: 'Di mana kau malam Hartati meninggal?', a: 'Di gala amal di hotel seberang kota, ratusan orang melihatku. Aku naik panggung pukul setengah sepuluh. Cek rekamannya.' },
        { q: 'Soal anulir pernikahan yang diajukan Hartati?', a: 'Salah paham kecil. Kami sedang memperbaikinya. Lagipula belum ada yang diteken — jadi untuk apa aku terburu-buru?', requires: 'wasiat' },
        { q: 'Kau yang membawa tonik malamnya?', a: 'Tiap malam, dengan tanganku sendiri. Itu bukti aku mencintainya, bukan sebaliknya. Jangan diputarbalik.', requires: 'akses' },
      ],
    },
    {
      id: 'endang', init: 'ES', name: 'Bu Endang Sulastri', age: 55,
      role: 'Asisten pribadi Hartati (belasan tahun)',
      statement: '“Aku mengabdi pada Ibu belasan tahun. Aku benci melihat pria itu menguras hidupnya. Aku tak pernah menyembunyikan kebencianku.”',
      motive: 'Loyalis yang terang-terangan membenci Reza — atau begitu tampaknya.',
      alibi: 'Mengaku di kamarnya di paviliun belakang sepanjang malam.',
      interrogation: [
        { q: 'Bagaimana hubunganmu dengan Reza?', a: 'Aku muak melihatnya menguras Ibu. Pria itu hanya mengincar harta, dan aku tak sungkan mengatakannya di depan mukanya.' },
        { q: 'Benarkah kau sungguh membenci Reza?', a: 'Tentu. Lihat saja semua pesanku padanya. Aku... kenapa kalian menatapku begitu? Itu... itu sudah lama sekali.', requires: 'feud', unlocks: 'rahasia' },
        { q: 'Siapa mengurus obat & tonik Hartati?', a: 'Aku menyiapkan kotak obat hariannya. Tapi yang mengantar botol tonik ke kamarnya tiap malam, suaminya. Selalu dia.', requires: 'akses' },
      ],
    },
    {
      id: 'gilang', init: 'GW', name: 'Gilang Wijaya', age: 44,
      role: 'Putra sulung, direktur Wijaya Group',
      statement: '“Aku bertengkar dengan Ibu soal perusahaan, ya. Tapi membunuhnya membekukan segalanya — aku justru paling rugi.”',
      motive: 'Terlilit utang dan takut kehilangan kendali perusahaan.',
      alibi: 'Mengaku di Singapura untuk negosiasi bank selama tiga hari itu.',
      interrogation: [
        { q: 'Kau berselisih dengan ibumu soal perusahaan?', a: 'Soal kendali, ya. Tapi kematiannya membekukan semua aset dalam proses waris. Aku makin terjepit, bukan terbebas.' },
        { q: 'Soal utang-utangmu?', a: 'Aku sedang diaudit, dan tiga hari itu aku di Singapura menegosiasi bank. Boarding pass dan stempel imigrasiku ada.', requires: 'gilang' },
        { q: 'Kau mencurigai siapa?', a: 'Suaminya, jelas. Tapi katanya ia di gala malam itu... entahlah, aku bingung sendiri.' },
      ],
    },
    {
      id: 'citra', init: 'CA', name: 'Citra Anindya', age: 30,
      role: 'Keponakan Hartati, apoteker',
      statement: '“Aku apoteker, jadi semua langsung menatapku. Tapi aku berutang segalanya pada Bu Hartati. Untuk apa aku membunuhnya?”',
      motive: 'Punya keahlian & akses pada obat keras.',
      alibi: 'Bertugas di apotek kota lain sepanjang pekan tampering.',
      interrogation: [
        { q: 'Sebagai apoteker, kau bisa akses racun?', a: 'Bisa, dan itu yang membuat semua menudingku. Tapi zat pengendap itu bukan dari apotekku, dan aku di luar kota sepekan itu.', requires: 'citra' },
        { q: 'Hubunganmu dengan Bu Hartati?', a: 'Dia menyekolahkanku jadi apoteker. Aku berutang segalanya padanya.' },
        { q: 'Kau ke rumah ini belakangan?', a: 'Sudah berbulan tak datang. Sif-ku padat di kota sebelah — semua tercatat.' },
      ],
    },
    {
      id: 'surya', init: 'DS', name: 'dr. Surya Halim', age: 58,
      role: 'Dokter pribadi Hartati & ahli toksikologi',
      statement: '“Aku yang menolak menandatangani surat kematian wajar. Kalau aku pelakunya, untuk apa kubongkar sendiri?”',
      motive: 'Tahu betul setiap obat Hartati — termasuk toniknya.',
      alibi: 'Justru pihak yang memaksa autopsi & toksikologi.',
      interrogation: [
        { q: 'Kenapa kau curiga ini bukan kematian wajar?', a: 'Jantungnya lemah, tapi pola hentinya janggal. Aku yang memaksa autopsi dan tes racun. Pelaku akan menutupinya, bukan membukanya.' },
        { q: 'Kau sedekat itu dengan keluarga?', a: 'Dokter pribadi Hartati belasan tahun. Aku tahu setiap obatnya — termasuk tonik jantung itu.' },
        { q: 'Apa yang aneh dari toniknya?', a: 'Kadar obat di ampas botol jauh lebih pekat daripada di atasnya. Seolah ada yang membuat zatnya mengendap perlahan.', requires: 'endapan' },
      ],
    },
    {
      id: 'bayu', init: 'BW', name: 'Bayu Wijaya', age: 38,
      role: 'Putra bungsu, lama merantau',
      statement: '“Aku bertahun-tahun tak pulang. Aku bahkan tak sempat bertemu Ibu sebelum ia pergi.”',
      motive: 'Kembali ke Jakarta untuk meminta modal usaha.',
      alibi: 'Baru mendarat dari luar negeri sehari setelah kematian.',
      interrogation: [
        { q: 'Sudah lama kau tak pulang?', a: 'Bertahun-tahun. Aku baru mendarat dari Belanda sehari setelah Ibu pergi. Tak sempat berpamitan.' },
        { q: 'Kau kembali untuk minta uang?', a: 'Aku datang minta restu dan modal usaha, kuakui. Tapi aku tak pernah ada di rumah ini saat ia masih hidup.' },
        { q: 'Kau tahu soal anulir pernikahan?', a: 'Baru dengar dari Bu Endang lewat telepon — katanya Ibu mau mengusir Reza. Aku setuju saja.' },
      ],
    },
  ],
  timeline: [
    { t: 'H-3', key: true, x: 'Tonik jantung Hartati diam-diam diutak-atik; zat aktifnya perlahan mengendap ke dasar botol.' },
    { t: '19.30', key: false, x: 'Reza tampil di gala amal lintas kota (terekam CCTV).' },
    { t: '21.30', key: true, x: 'Hartati meminum tonik malam — dosis paling pekat dari dasar botol.' },
    { t: '22.50', key: true, x: 'Hartati ditemukan tewas di kamarnya; mula-mula dikira serangan jantung.' },
    { t: 'Esoknya', key: false, x: 'dr. Surya menolak menyebut "wajar" dan memaksa toksikologi.' },
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
      { h: 'Pelakunya: Reza Maulana', p: [
        'Hartati tidak mati karena jantungnya. Ia diracun lewat tonik malamnya. Reza memang punya alibi sempurna untuk malam kematian — tapi racun itu tak pernah diberikan malam itu.',
        'Sebuah zat dicampurkan ke tonik berhari-hari sebelumnya, membuat obat jantung mengendap hingga dosis terakhir menjadi mematikan. Racun yang menunggu. Dan hanya satu orang yang memegang botol itu malam demi malam, cukup lama untuk memasangnya: Reza, yang "dengan penuh cinta" mengantar tonik ke kamar istrinya setiap malam.',
      ] },
      { h: 'Racun yang menunggu', p: [
        'Inilah sebabnya alibi gala itu tak berarti. Pembunuh tak perlu hadir saat korban mati — ia hanya perlu memasang jebakan kimia jauh hari, lalu membiarkan kebiasaan korban menyelesaikannya. Justru alibi yang terlalu rapi itu yang seharusnya membuat curiga.',
      ] },
      { h: 'Pasangan yang berpura-pura', p: [
        'Bu Endang, sang asisten yang mencerca Reza terang-terangan, sesungguhnya kekasih lamanya — jauh sebelum Reza mendekati Hartati. Kebencian yang lantang itu sandiwara, tameng agar tak seorang pun mengira mereka bersekutu. Hartati menemukan rahasia itu, lalu bergegas membatalkan pernikahan dan mencoret Reza dari wasiat. Mereka membunuhnya sebelum tinta itu kering — selagi Reza masih pewaris.',
      ] },
      { h: 'Jebakan: alibi & vial', p: [
        'Dua umpan menyesatkan kasus ini. Alibi gala membuat Reza tampak mustahil bersalah; vial digitalis yang "kebetulan" tertinggal di mobilnya membuatnya tampak dijebak. Keduanya perisai. Senjata yang sebenarnya bukan vial itu, melainkan kesabaran dan kimia — racun yang dipasang dan dibiarkan menunggu.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Citra si apoteker di luar kota sepekan, dan zatnya bukan dari stoknya. Gilang di Singapura, dan kematian ibunya justru membekukan asetnya. dr. Surya-lah yang membongkar racun itu — pelaku akan menutupinya. Bayu baru mendarat sehari setelahnya. Tiga unsur hanya bertemu pada satu orang: motif (anulir & rahasia yang terbongkar), cara (tonik yang diendapkan), kesempatan (hanya ia yang memegang tonik itu malam demi malam). Itu Reza — dengan Bu Endang sebagai sekutunya.',
      ] },
    ],
    rebuttals: {
      endang: 'Bu Endang memang sekutunya — kebencian lantangnya cuma sandiwara untuk menutupi bahwa mereka sepasang kekasih. Tapi tangan yang memasang racun di tonik malam demi malam adalah Reza, sang suami yang memegang botol itu. Endang penyokong; peracunnya Reza.',
      gilang: 'Utang dan ambisi Gilang nyata, tapi ia di Singapura selama pekan tampering, dan kematian ibunya membekukan seluruh aset waris — ia justru paling rugi dalam jangka pendek.',
      citra: 'Apoteker memang tersangka racun yang paling gampang. Tapi Citra di luar kota sepanjang pekan, dan zat pengendap itu tak cocok dengan stok apoteknya. Ia tak pernah menyentuh tonik di rumah ini.',
      surya: 'dr. Surya justru pihak yang menolak menyebut kematian ini "wajar" dan memaksa toksikologi. Pelaku akan mengubur kecurigaan, bukan menggalinya.',
      bayu: 'Bayu baru mendarat dari luar negeri sehari setelah Hartati tewas. Ia datang mengincar modal usaha, tapi tak pernah berada di dekat tonik itu saat racunnya dipasang.',
    },
  },
}
