// Case 2 (gated). Original content, inspired by Indonesia's "fake benefactor"
// con archetype. Harder: 5 suspects, 10 clues, layered twists.
export const kencana = {
  id: 'kencana',
  free: false,
  difficulty: 'Sulit',
  code: 'WK-1125',
  location: 'Wisma Kencana, Puncak',
  scene: 'estate',
  title: 'Maut di Wisma Kencana',
  blurb:
    'Sang dermawan ditemukan tewas di pesta pertunangannya sendiri. Serangan jantung — atau ada yang menyulapnya?',
  disclaimer: {
    text: 'Kisah ini fiksi. Terinspirasi dari fenomena viral di Indonesia — penipuan berkedok "dermawan / kakek miliarder" dengan mahar dan cek palsu. Seluruh tokoh, nama, tempat, dan kejadian adalah rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
    source: {
      label: 'Inspirasi: "Kebohongan Plot Twist di Indonesia" (YouTube)',
      url: 'https://www.youtube.com/watch?v=_wkJoSaVwJM',
    },
  },
  cover: {
    lead: 'Vila megah, mahar miliaran, dan seorang dermawan yang dicintai sekampung. Esok subuhnya ia tewas, kotak mahar dibobol. Tapi tak ada yang seperti tampaknya.',
  },
  briefing: {
    paras: [
      'Selama enam bulan, satu nama mengubah Lembah Cikawari: Bagas Wirya. Dermawan yang datang entah dari mana — membangun masjid, menalangi utang warga, dan melamar gadis setempat dengan mahar yang membuat sekampung ternganga.',
      'Malam itu, di Wisma Kencana, vila mewah yang ia sewa, digelar pesta pertunangan paling megah yang pernah ada: cek mahar Rp5 miliar dipamerkan, mobil mewah berpita, emas berkilau. Esok subuhnya Bagas ditemukan tewas di kamarnya. Dokter menduga serangan jantung; kotak mahar dibobol dan isinya raib, polisi menduga perampok.',
      'Tapi terlalu banyak yang janggal. Keluarga calon mempelai memanggil Anda sebelum kasus ditutup sebagai "perampokan yang berujung maut".',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi kelima orang terdekat sang dermawan. Lalu ajukan satu tuduhan — dan susun pembuktiannya. Di pesta ini, tak ada yang seperti tampaknya.',
  },
  victim: {
    init: 'BW',
    name: 'Bagas Wirya',
    meta: '58 tahun · "sang dermawan" Lembah Cikawari',
    paras: [
      'Muncul enam bulan lalu dengan mobil mewah dan dompet yang seolah tak berdasar. Ia menyantuni masjid, menalangi utang warga, dan menjanjikan "koperasi berkah" yang melipatgandakan tabungan. Semua memanggilnya Juragan.',
      'Ditemukan tewas pukul 06.30 di suite pribadinya, gelas tonik jantung kosong di nakas. Tak ada luka. Pintu suite terkunci dari dalam; hanya kotak mahar di sudut ruangan yang tampak dibobol paksa.',
    ],
  },
  evidence: [
    {
      id: 'tonik', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Gelas tonik jantung Bagas',
      summary: 'Residu digoksin jauh di atas dosis aman.',
      detail:
        'Bagas rutin minum tonik jantung racikan tiap malam. Lab menemukan kadar digoksin — obat jantung — berkali lipat dosis mematikan pada sisa di gelas. Dalam takaran itu, jantung yang memang lemah berhenti dalam tidur, nyaris tanpa jejak. "Serangan jantung" itu disetel. Hanya satu orang yang mengurus dan menakar tonik malam Bagas.',
    },
    {
      id: 'cek', icon: 'doc', tag: 'Dokumen',
      title: 'Cek mahar Rp5 miliar',
      summary: 'Bank memastikan rekening itu tak pernah ada.',
      detail:
        'Cek raksasa yang dipamerkan di panggung itu palsu. Bank tak mengenal nomor rekeningnya, tanda tangannya tiruan. Mahar Rp5 miliar yang membuat sekampung percaya pada Bagas tak pernah berisi satu rupiah pun.',
    },
    {
      id: 'mobil', icon: 'car', tag: 'Barang Bukti',
      title: 'Mobil mewah mahar',
      summary: 'Mobil sewaan — sudah digadaikan diam-diam.',
      detail:
        'Sedan mewah berpita merah di halaman bukan milik Bagas. Terdaftar atas nama rental di kota; STNK-nya bahkan sudah digadaikan tiga minggu lalu. Amplop-amplop yang ia bagikan ke tamu ditebus dari hasil gadai itu. Sang dermawan, nyatanya, bangkrut.',
    },
    {
      id: 'tkp', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Kotak mahar yang "dibobol"',
      summary: 'Dicongkel dari dalam; pintu & jendela utuh.',
      detail:
        'Kotak mahar memang dicongkel — tapi bekas paksaan mengarah dari dalam ruangan, bukan luar. Pintu suite terkunci dari dalam, jendela tergerendel, tak ada jejak di taman. Tak ada perampok yang masuk. "Perampokan" ini dipentaskan oleh seseorang yang sudah berada di dalam.',
    },
    {
      id: 'arisan', icon: 'ledger', tag: 'Dokumen',
      title: 'Buku "Koperasi Berkah Kencana"',
      summary: 'Skema penggandaan uang — setoran besar baru masuk.',
      detail:
        'Buku catatan menguak usaha asli Bagas: koperasi yang menjanjikan bunga mustahil, membayar anggota lama dengan uang anggota baru. Tiga hari sebelum pesta, satu setoran besar masuk tunai dari belasan anggota baru — uang inilah, bukan cek palsu itu, yang nyata. Dan uang itu kini lenyap.',
    },
    {
      id: 'lipstik', icon: 'cup', tag: 'Barang Bukti',
      title: 'Noda lipstik di gelas tonik',
      summary: 'Cap bibir Lila pada gelas terakhir Bagas.',
      herring: true,
      detail:
        'Di bibir gelas tonik menempel noda lipstik milik Lila, sang calon mempelai — ia memang yang biasa mengantar tonik malam Bagas. Sekilas, ini menaruhnya tepat di tangan racun. Tapi pertanyaannya bukan siapa yang memegang gelas, melainkan kapan dosis maut itu ditambahkan.',
    },
    {
      id: 'cctv', icon: 'cctv', tag: 'Metadata',
      title: 'Log CCTV gerbang & parkir',
      summary: 'Mobil Bu Hartini keluar 22.40; tak ada yang masuk sesudahnya.',
      detail:
        'Rekaman gerbang menunjukkan mobil Bu Hartini meninggalkan vila pukul 22.40 — jauh sebelum perkiraan waktu kematian (sekitar tengah malam). Setelah itu, hingga subuh, tak ada satu kendaraan pun masuk, tak ada sosok asing melompati pagar. Teori "perampok dari luar" runtuh di sini.',
    },
    {
      id: 'live', icon: 'social', tag: 'Media Sosial',
      title: 'Livestream pesta oleh Reza',
      summary: 'Siaran tanpa putus dari aula, 20.00–24.00.',
      detail:
        'Reza, perias sekaligus content creator yang disewa, menyiarkan pesta tanpa jeda dari aula utama. Linimasa siarannya jadi jam paling jujur malam itu: pukul 23.30 Haji Darmo berpidato penutup, hampir semua tamu di aula. Hanya satu orang lingkaran dalam yang menghilang dari bingkai pada rentang itu — Surya.',
    },
    {
      id: 'tiket', icon: 'ticket', tag: 'Temuan Tersembunyi',
      title: 'Tiket & tas tersembunyi',
      summary: 'Bagas memesan satu kursi keluar negeri, subuh itu — sendirian.',
      locked: true, twist: true,
      detail:
        'Terselip di balik lemari suite: satu tiket penerbangan subuh atas nama samaran, sebuah paspor, dan tas berisi pakaian secukupnya. Bagas berniat menghilang saat fajar — sendirian, membawa seluruh uang koperasi. Partnernya tak diajak. Bagi orang yang menanggung semua risiko di belakang layar, ini bukan sekadar dikhianati: ini ditinggal jadi tumbal.',
    },
    {
      id: 'kunci', icon: 'key', tag: 'Barang Bukti',
      title: 'Kunci suite & tas kosong',
      summary: 'Hanya Surya pegang kunci serep; tas uang kosong di mobilnya.',
      detail:
        'Suite Bagas hanya punya dua kunci: satu di saku Bagas, satu dipegang Surya sebagai "manajer". Di bagasi mobil Surya ditemukan tas kanvas kosong yang seratnya cocok dengan serat di kotak mahar — wadah yang sama untuk mengangkut setoran tunai koperasi.',
    },
  ],
  suspects: [
    {
      id: 'lila', init: 'LA', name: 'Lila Andini', age: 23,
      role: 'Calon mempelai',
      statement: '“Aku tahu apa kata orang. Tapi aku tak pernah tahu soal uang itu, dan aku tak akan pernah menyakitinya.”',
      motive: 'Dijodohkan demi harta; bila tahu semuanya palsu, ia paling dirugikan.',
      alibi: 'Mengantar tonik malam Bagas pukul 22.00, lalu kembali ke aula bersama tamu.',
      interrogation: [
        { q: 'Kapan terakhir kau melihat Bagas?', a: 'Pukul sepuluh malam, saat kuantar toniknya seperti biasa. Setelah itu aku di aula sampai pesta bubar. Banyak yang melihatku.' },
        { q: 'Kau tahu hartanya palsu?', a: 'Tidak. Aku baru tahu malam ini, dari kalian. Aku... aku tak tahu harus menangis atau marah.', requires: 'cek' },
        { q: 'Lipstikmu ada di gelas tonik. Jelaskan.', a: 'Karena aku yang menuangkannya, pukul sepuluh — aku selalu begitu. Kalau ada racun, itu ditambahkan setelah aku pergi. Periksa jam-nya.', requires: 'lipstik' },
      ],
    },
    {
      id: 'darmo', init: 'HD', name: 'Haji Darmo', age: 61,
      role: 'Ayah Lila, sesepuh kampung',
      statement: '“Saya yang membawa dia ke kampung ini. Saya pula yang dipermalukan. Tapi aib tak saya tebus dengan darah.”',
      motive: 'Mempertaruhkan nama baik dan tabungan warga pada Bagas; hancur bila penipuan terbongkar.',
      alibi: 'Berpidato penutup di aula pukul 23.30 — terekam livestream.',
      interrogation: [
        { q: 'Benarkah Anda menalangi koperasi Bagas?', a: 'Saya ikut, dan saya ajak warga. Beban itu akan saya tanggung seumur hidup. Tapi membunuhnya tak mengembalikan uang siapa pun.', requires: 'arisan' },
        { q: 'Di mana Anda saat tengah malam?', a: 'Di panggung, menutup acara dengan doa. Ratusan orang melihat — dan kamera anak itu merekam semuanya.' },
        { q: 'Anda sempat mengancamnya?', a: 'Saya bilang akan membawanya ke polisi bila ini penipuan. Itu ancaman saya — proses hukum, bukan racun.' },
      ],
    },
    {
      id: 'surya', init: 'SA', name: 'Surya Atmaja', age: 45,
      role: 'Manajer & "tangan kanan" Bagas',
      statement: '“Saya urus semua untuk beliau — jadwal, obat, keuangan. Malam ini saya kehilangan majikan sekaligus sahabat.”',
      motive: 'Tampak paling setia. Tak punya alasan jelas — sampai uang koperasi dibahas.',
      alibi: 'Mengaku "memeriksa keadaan Bagas" sebentar lalu kembali; tak ada yang mencatat kapan.',
      interrogation: [
        { q: 'Siapa yang menakar tonik jantung Bagas?', a: 'Saya yang menyiapkan kotak obatnya tiap hari. Tapi yang mengantar gelasnya Lila. Jadi... tanyakan padanya, bukan saya.', requires: 'tonik' },
        { q: 'Ke mana uang setoran koperasi?', a: 'Uang? Beliau yang pegang semua. Mungkin dibawa perampok itu. Saya tak tahu apa-apa soal tas mana pun.', requires: 'arisan', unlocks: 'tiket' },
        { q: 'Di mana Anda saat pidato penutup?', a: 'Saya... mengecek Bagas sebentar. Dia minta tak diganggu. Saya cuma di depan pintu, sungguh.' },
      ],
    },
    {
      id: 'hartini', init: 'BH', name: 'Bu Hartini', age: 52,
      role: 'Investor terbesar koperasi',
      statement: '“Saya menaruh seluruh uang pensiun di koperasinya. Malam itu saya datang menuntut, bukan membunuh.”',
      motive: 'Menanam seluruh hartanya di skema Bagas; mulai curiga ditipu dan menuntut uangnya di depan umum.',
      alibi: 'Meninggalkan vila pukul 22.40 (terekam CCTV gerbang).',
      interrogation: [
        { q: 'Anda bertengkar dengan Bagas malam itu?', a: 'Saya menuntut uang saya di depan tamu. Dia menghindar dengan senyum. Saya muak, lalu pulang.' },
        { q: 'Pukul berapa Anda meninggalkan vila?', a: 'Sebelum jam sebelas. Sopir dan kamera gerbang bisa memastikan. Saya tak pernah naik ke lantai kamarnya.', requires: 'cctv' },
        { q: 'Anda tahu hartanya palsu?', a: 'Saya curiga. Tapi kalau saya bunuh dia, uang saya hilang selamanya. Saya justru butuh dia hidup untuk membayar.' },
      ],
    },
    {
      id: 'reza', init: 'RP', name: 'Reza Pratama', age: 29,
      role: 'Perias & content creator pesta',
      statement: '“Aku merekam semuanya malam itu. Ironisnya, kameraku yang jadi saksi paling jujur.”',
      motive: 'Bebas berkeliling dengan kamera; sempat dikira menyelinap.',
      alibi: 'Livestream tanpa putus dari aula sepanjang pesta — ia sendiri di balik kamera.',
      interrogation: [
        { q: 'Kau ke mana saja dengan kameramu?', a: 'Aku tak ke mana-mana — aku di belakang kamera, siaran langsung dari aula, empat jam penuh. Cek saja rekamannya.' },
        { q: 'Ada yang kau tangkap di rekaman?', a: 'Pas Haji Darmo pidato, semua di aula. Cuma Pak Surya yang kulihat menyelinap ke arah suite — habis itu hilang dari frame agak lama.', requires: 'live' },
        { q: 'Siapa yang terakhir ke kamar Bagas?', a: 'Aku tak ikut naik. Tapi cuma satu orang yang pegang kuncinya, kan? Bukan aku.' },
      ],
    },
  ],
  timeline: [
    { t: '20.00', key: false, x: 'Pesta dimulai di Wisma Kencana. Reza memulai livestream dari aula.' },
    { t: '21.30', key: false, x: 'Bagas memamerkan cek mahar Rp5 miliar dan membagikan amplop ke tamu.' },
    { t: '22.00', key: false, x: 'Lila mengantar tonik jantung ke suite Bagas, lalu kembali ke aula.' },
    { t: '22.40', key: false, x: 'Bu Hartini menuntut uangnya di depan tamu, lalu meninggalkan vila (CCTV gerbang).' },
    { t: '23.30', key: true, x: 'Haji Darmo berpidato penutup di aula (terekam livestream). Surya menghilang dari bingkai.' },
    { t: '~23.45', key: true, x: 'Seseorang masuk ke suite: dosis maut ditambahkan ke tonik, tas uang diangkut, kotak mahar dicongkel dari dalam.' },
    { t: '00.10', key: false, x: 'Bagas meminum tonik sebelum tidur.' },
    { t: '06.30', key: true, x: 'Bagas ditemukan tewas; kotak mahar bobol — dikira perampokan.' },
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
      { h: 'Pelakunya: Surya Atmaja', p: [
        'Bagas tidak mati karena jantungnya. Ia diracun oleh orang yang paling ia percaya.',
        'Tonik jantung malamnya disusupi digoksin berlebih — dan hanya Surya yang menakar serta menyiapkan kotak obatnya tiap hari. Lila memang mengantar gelasnya pukul 22.00, tapi dosis maut ditambahkan jauh sesudahnya, saat hanya Surya yang punya akses ke suite.',
        'Ketika Haji Darmo menutup pesta dengan doa pukul 23.30 dan seisi aula terekam kamera Reza, Surya menghilang dari bingkai. Ia memegang satu-satunya kunci serep suite. Di sanalah ia menambah racun, mengangkut tas berisi uang koperasi, lalu mencongkel kotak mahar dari dalam agar semua menyangka ada perampok.',
      ] },
      { h: 'Sang dermawan yang palsu', p: [
        'Kekayaan Bagas hanyalah panggung: cek Rp5 miliar palsu, mobil mewahnya sewaan yang sudah digadaikan, amplopnya ditebus dari hasil gadai. Usaha sesungguhnya adalah koperasi penggandaan uang — membayar anggota lama dengan setoran anggota baru. Yang nyata hanya satu: tumpukan uang tunai yang baru masuk tiga hari sebelum pesta.',
      ] },
      { h: 'Pengkhianatan yang berbalik', p: [
        'Tiket subuh atas nama samaran dan tas terkemas yang tersembunyi di suite membongkar rencana Bagas: kabur sendirian saat fajar, membawa seluruh uang, meninggalkan Surya menanggung semua. Surya — otak di balik layar — mendahuluinya. Ia bukan tangan kanan yang setia; ia partner yang dicampakkan, dan ia membalas lebih dulu.',
      ] },
      { h: 'Jebakan: lipstik & perampokan', p: [
        'Dua umpan menyesatkan kasus ini. Noda lipstik Lila membuatnya tampak memegang racun — padahal ia menuang tonik pukul 22.00, dua jam sebelum dosis maut masuk. Dan "perampokan" itu palsu: kotak mahar dicongkel dari dalam ruangan yang terkunci rapat, sementara isi mahar — cek dan emas — memang tak pernah berharga. Tak ada yang dicuri perampok; yang raib hanya uang koperasi, dibawa orang dalam.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Lila tak tahu apa-apa soal uang dan menuang tonik jauh sebelum racun masuk. Haji Darmo sedang berpidato di panggung pukul 23.30, terekam livestream. Bu Hartini sudah keluar gerbang pukul 22.40 — dan ia justru butuh Bagas hidup untuk mengembalikan uangnya. Reza ada di balik kamera sepanjang malam; rekamannya sendiri yang membersihkannya.',
        'Tiga unsur hanya bertemu pada satu orang: motif (dikhianati dan diincarnya uang koperasi), cara (tonik yang ia takar sendiri), dan kesempatan (kunci serep dan menghilang dari rekaman). Itu Surya.',
      ] },
    ],
    rebuttals: {
      lila: 'Lipstiknya ada di gelas karena ia menuang tonik pukul 22.00 — dua jam sebelum dosis maut ditambahkan. Ia tak tahu hartanya palsu dan tak menyentuh uang koperasi. Tersangka yang paling mudah dituduh justru paling bersih.',
      darmo: 'Pada waktu kematian, Haji Darmo berpidato penutup di aula — terekam livestream Reza, disaksikan ratusan tamu. Ia malu dan marah, tapi malu tak membobol kotak dari dalam kamar terkunci.',
      hartini: 'Mobil Bu Hartini keluar gerbang pukul 22.40, jauh sebelum tengah malam (CCTV). Lagipula membunuh Bagas berarti uangnya lenyap selamanya — ia justru butuh sang dermawan tetap hidup.',
      reza: 'Reza di balik kamera, siaran langsung dari aula tanpa jeda empat jam. Rekamannya sendiri adalah alibinya — dan justru rekaman itu yang menangkap satu-satunya orang yang menyelinap ke suite.',
    },
  },
}
