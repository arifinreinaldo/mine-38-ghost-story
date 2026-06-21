// Case 11 (gated). A harder single-killer murder (a false confession + a
// hidden second motive) WITH a bonus "treasure hunt" meta-layer. Solving the
// murder wins the case; correctly guessing the treasure's mountain unlocks a
// hidden multi-stage hunt (cipher -> waypoint -> assemble real coordinates
// from "famous" legend numbers, with decoys) that needs an online map to crack.
// Legendary robber "Si Macan Kawi" (Gol D. Roger-style) publicly spread his
// fame before death; only his protege held the real map.
export const macankawi = {
  id: 'macankawi',
  free: false,
  difficulty: 'Sulit',
  code: 'MK-1992',
  location: 'Wonosari, lereng Gunung Kawi · masa kini',
  scene: 'kawi',
  title: 'Maut di Lereng Kawi',
  blurb:
    'Murid terakhir Si Macan Kawi — perampok legendaris yang mewariskan satu peta harta — ditemukan tewas saat demam harta melanda. Pecahkan pembunuhnya; dan bila cukup jeli, ikuti peta sang Macan ke puncak.',
  disclaimer: {
    text:
      'Kisah ini fiksi. Latarnya meminjam geografi nyata pegunungan “Putri Tidur” (Gunung Butak, Kawi, dan Panderman) di Malang Raya, serta nama besar Gunung Kawi yang lekat dengan legenda dan ziarah. Si Macan Kawi, sang murid, dan seluruh tokoh hanyalah rekaan; tak ada harta karun sungguhan. Koordinat dalam perburuan menunjuk bentang alam nyata semata sebagai teka-teki peta.',
    source: {
      label: 'Latar geografi: “Gunung Putri Tidur” (Butak–Kawi–Panderman), Malang Raya',
      url: 'https://www.profauna.net/en/content/protected-forest-sleeping-beauty-mountains-more-mountainous-range',
    },
  },
  cover: {
    lead:
      'Sebelum mati, Si Macan Kawi berseru ke seluruh negeri bahwa hartanya menanti siapa pun yang layak — dan sejak itu demam harta tak pernah padam. Kini murid terakhirnya, pemegang satu-satunya peta asli, terbujur kaku. Pecahkan pembunuhnya. Lalu, bila berani, pecahkan petanya.',
  },
  briefing: {
    paras: [
      'Puluhan tahun lalu, perampok legendaris Si Macan Kawi tertangkap. Sebelum ajalnya pada 1992, ia berseru lantang di depan massa: “Hartaku? Semua kutinggalkan di pangkuan Sang Putri Tidur. Yang cukup berani dan layak — carilah, ambillah!” Seruan itu menyalakan demam harta yang membara hingga kini. Tapi lokasi pastinya hanya ia bisikkan lewat sebuah peta — kepada satu murid.',
      'Murid itu, kini renta, dikenal sebagai Mbah Guno, hidup menyepi di Wonosari, di lereng selatan Gunung Kawi. Sebuah film dokumenter viral membangkitkan lagi legenda itu, dan para pemburu harta berdatangan. Pagi ini, Mbah Guno ditemukan tewas di rumahnya — mula-mula disangka serangan jantung.',
      'Anda dipanggil. Periksa bukti, interogasi enam orang yang mengelilinginya, lalu tunjuk pembunuhnya — waspadai pengakuan yang terlalu cepat. Dan satu lagi: bila kau cukup jeli membaca legenda sang Macan, kau mungkin bisa menebak di gunung mana hartanya tersembunyi — dan membuka perburuan yang sesungguhnya.',
    ],
    taskTitle: 'Tugas Anda',
    task:
      'Periksa tiap bukti, interogasi keenam orang, lalu tunjuk pembunuhnya dan susun pembuktianmu. Bonus: tebak gunung tempat harta Si Macan Kawi untuk membuka Perburuan Harta.',
  },
  victim: {
    init: 'MG',
    name: 'Mbah Guno',
    meta: '78 tahun · murid terakhir Si Macan Kawi, pemegang peta',
    paras: [
      'Lelaki tua penyendiri di lereng selatan Gunung Kawi, dikenal sebagai satu-satunya orang yang dipercaya Si Macan Kawi memegang peta hartanya. Selama puluhan tahun ia menolak semua tawaran dan bujukan untuk menyerahkannya.',
      'Ditemukan terbujur di rumahnya pada pagi hari, cangkir di sisinya. Semula disangka serangan jantung orang tua. Tongkat berukirnya tergeletak di dekatnya, seakan tak berarti apa-apa.',
    ],
  },
  evidence: [
    {
      id: 'jasad', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Jasad Mbah Guno',
      summary: 'Bukan serangan jantung — jejak racun bekerja cepat di tubuhnya.',
      detail:
        'Otopsi membantah dugaan awal: bukan jantung. Ada jejak racun tumbuhan yang bekerja cepat dalam tubuhnya, dengan waktu kematian sekitar sore hari sebelumnya — bukan malam, bukan pagi. Kematian yang dibuat tampak wajar.',
    },
    {
      id: 'kopi', icon: 'cup', tag: 'Barang Bukti',
      title: 'Cangkir di sisi jasad',
      summary: 'Sisa jamu-kopi di cangkirnya mengandung racun yang sama.',
      detail:
        'Cangkir di samping Mbah Guno berisi sisa jamu-kopi. Endapannya mengandung racun yang sama dengan yang ditemukan di tubuhnya. Ia diracun lewat minuman sore itu — minuman yang tak ia buat sendiri.',
    },
    {
      id: 'jamu', icon: 'cup', tag: 'Saksi',
      title: 'Rantang jamu sang tamu',
      summary: 'Sore itu seorang tamu membawakannya rantang jamu “oleh-oleh”.',
      detail:
        'Tetangga ingat: sore itu Bu Sukma, sang “peneliti”, datang membawa rantang jamu sebagai oleh-oleh untuk Mbah Guno — katanya agar si kakek mau bercerita lebih banyak. Rantang itu kini hilang dari dapur.',
    },
    {
      id: 'tamu', icon: 'metadata', tag: 'Catatan',
      title: 'Tamu terakhir',
      summary: 'Kalender & tetangga: Bu Sukma tamu terakhir, sendirian, sore itu.',
      detail:
        'Di kalender dinding Mbah Guno tertulis satu janji sore itu: “Bu Sukma — wawancara.” Para tetangga membenarkan: Bu Sukma masuk ke rumah dan tinggal lama, sendirian bersama si kakek, persis di rentang waktu kematiannya. Tak ada tamu lain setelah itu.',
    },
    {
      id: 'tongkat', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Tongkat tujuh loreng',
      summary: 'Tongkat berukir tujuh loreng macan — hanya ada sidik jari Mbah Guno.',
      detail:
        'Tongkat jati Mbah Guno, berukir tujuh loreng macan di gagangnya — lambang sang guru. Hanya ada sidik jarinya. Si pembunuh menggeledah seisi rumah mencari sesuatu, tapi melewatkan benda yang paling sering disentuh si kakek ini. Tujuh loreng itu seakan menyimpan arti.',
    },
    {
      id: 'dosier', icon: 'ledger', tag: 'Dokumen',
      title: 'Dosier legenda Si Macan Kawi',
      summary: 'Berkas angka-angka termasyhur sang Macan — sebagian mungkin keliru.',
      detail:
        'Sebuah map berisi kliping dan catatan tentang legenda Si Macan Kawi: lahir 1957; mulai merampok 1980; 12 tahun jadi buron; tahun kejayaan terakhir 1992; tewas di usia 35; pelaku 45 rampokan besar; sayembara kepalanya Rp 90 juta; konon punya 7 persembunyian; berpamitan di depan massa pada tanggal 17. Angka-angka yang dihafal seantero negeri — entah mana yang benar-benar berarti.',
    },
    {
      id: 'suratutang', icon: 'doc', tag: 'Temuan Kunci',
      title: 'Surat penagih utang',
      summary: 'Tumpukan surat penagih utang atas nama Sukma Wardani — nilainya besar.',
      locked: true, twist: true,
      detail:
        'Terselip di tas Bu Sukma: tumpukan surat penagih utang bernilai ratusan juta atas namanya, dengan tenggat yang sudah lewat dan ancaman penyitaan. “Peneliti” itu sedang tenggelam. Bagi orang seputus asa ini, peta harta Si Macan Kawi bukan bahan buku — melainkan jalan keluar.',
    },
    {
      id: 'iddosen', icon: 'doc', tag: 'Dokumen',
      title: 'Kartu “dosen” Sukma',
      summary: 'Kartu identitas peneliti yang ia tunjukkan — universitasnya menyangkal.',
      detail:
        'Bu Sukma memperkenalkan diri sebagai dosen-peneliti dengan kartu identitas universitas. Saat dikonfirmasi, pihak universitas menyatakan tak pernah punya staf bernama itu. Kartunya palsu; kedok “sejarawan” itu hanya pintu masuk untuk mendekati si pemegang peta.',
    },
    {
      id: 'konfesi', icon: 'doc', tag: 'Pengakuan',
      title: 'Pengakuan Joko',
      summary: 'Keponakan-cucu korban mengaku membunuh — tapi keterangannya janggal.',
      detail:
        'Joko, cucu-keponakan korban, datang ke pos dan mengaku: “Aku yang membunuhnya, tutup saja kasusnya.” Namun ia salah menyebut cara kematian (mengira dipukul, padahal diracun) dan tak bisa menjelaskan rantang jamu itu. Pengakuan yang terlalu bersemangat — dan tak cocok dengan bukti.',
    },
    {
      id: 'cctvwarung', icon: 'cctv', tag: 'Rekaman',
      title: 'Rekaman warung kemah',
      summary: 'Kamera warung menempatkan Joko & ibunya di kemah pemburu saat itu.',
      detail:
        'Rekaman kamera warung di kemah para pemburu harta menunjukkan Joko dan ibunya, Bu Tarmi, berada di sana sepanjang sore — persis saat Mbah Guno diracun. Keduanya mustahil ada di rumah si kakek. Pengakuan Joko runtuh oleh gambar ini.',
    },
    {
      id: 'golok', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Golok di halaman',
      summary: 'Sebilah golok tergeletak di halaman — tampak memberatkan.',
      herring: true,
      detail:
        'Sebilah golok ditemukan tergeletak di halaman belakang, seakan menandakan kekerasan. Tapi bilahnya bersih, dan Mbah Guno mati diracun, bukan dilukai. Golok itu milik Joko, tertinggal saat ia membabat semak pekan lalu. Petunjuk yang menyesatkan.',
    },
  ],
  suspects: [
    {
      id: 'sukma', init: 'SW', name: 'Bu Sukma Wardani', age: 41,
      role: 'Mengaku peneliti/“sejarawan” legenda',
      statement:
        '“Aku datang untuk mendokumentasikan legenda Si Macan Kawi, murni demi sejarah. Mbah Guno narasumberku. Aku justru kehilangan beliau sebelum bukuku selesai.”',
      motive: 'Tenggelam utang; mengincar peta harta sebagai jalan keluar, berkedok peneliti.',
      alibi: 'Mengaku pamit sore itu dalam keadaan korban “sehat”.',
      interrogation: [
        { q: 'Apa tujuan Anda menemui Mbah Guno?', a: 'Aku peneliti. Aku mendokumentasikan legendanya untuk sebuah buku. Murni sejarah, tak lebih.' },
        { q: 'Universitas menyangkal Anda staf mereka.', a: 'Pasti salah administrasi. Aku peneliti lepas. Soal kartu... itu urusan birokrasi, bukan pembunuhan.', requires: 'iddosen' },
        { q: 'Anda membawakan rantang jamu sore itu.', a: 'Sekadar oleh-oleh. Orang tua senang diperhatikan. Saat aku pamit, beliau masih segar bercerita. Entah apa yang terjadi setelahnya.', requires: 'jamu' },
      ],
    },
    {
      id: 'joko', init: 'JK', name: 'Joko', age: 28,
      role: 'Cucu-keponakan korban; pemburu harta',
      statement:
        '“Sudah kubilang, aku pelakunya. Tutup kasusnya, jangan ganggu keluargaku lagi.”',
      motive: 'Pernah cekcok dengan Mbah Guno soal menjual peta; mengaku sebagai pelaku.',
      alibi: 'Justru ada di kemah pemburu — pengakuannya tak cocok bukti.',
      interrogation: [
        { q: 'Kau mengaku membunuh pamanmu?', a: 'Ya. Aku yang melakukannya. Aku memukulnya. Sudah, catat saja dan selesai.' },
        { q: 'Rekaman warung menempatkanmu di kemah saat itu.', a: '...Baik. Aku di kemah, itu benar. Aku mengaku karena... kukira ibuku pelakunya. Sore itu kulihat ia keluar dari rumah Mbah sambil menangis. Aku panik.', requires: 'cctvwarung' },
        { q: 'Kau bahkan salah menyebut cara kematiannya.', a: 'Aku tak tahu beliau diracun — kukira dipukul. Aku cuma ingin melindungi ibuku. Aku bodoh, bukan pembunuh.', requires: 'konfesi' },
      ],
    },
    {
      id: 'tarmi', init: 'BT', name: 'Bu Tarmi', age: 52,
      role: 'Keponakan korban; ibu Joko',
      statement:
        '“Aku memang ingin Mbah menjual peta itu — kami terlilit kebutuhan. Aku memohon sambil menangis sore itu. Tapi memohon bukan membunuh.”',
      motive: 'Terdesak ekonomi; ingin korban menjual peta/rumah.',
      alibi: 'Bersama Joko di kemah pemburu sepanjang sore.',
      interrogation: [
        { q: 'Anda ingin korban menjual petanya?', a: 'Kami butuh uang, ya. Aku memohon padanya sore itu, lalu pulang menangis karena ditolak. Itu saja. Beliau pamanku.' },
        { q: 'Di mana Anda saat kematiannya?', a: 'Di kemah pemburu bersama Joko, di antara banyak orang. Tanyakan, rekam pun ada. Aku sudah pergi jauh sebelum... sebelum itu terjadi.', requires: 'cctvwarung' },
        { q: 'Joko mengaku untuk melindungi Anda.', a: 'Anak bodoh itu... ia mengira aku yang membunuh karena melihatku menangis. Demi Tuhan, aku tidak. Suruh ia menarik pengakuannya.' },
      ],
    },
    {
      id: 'hadi', init: 'PH', name: 'Pak Hadi', age: 60,
      role: 'Juru kunci petilasan; penjaga adat',
      statement:
        '“Harta sang Macan bukan untuk digali. Siapa mengusiknya akan celaka. Aku memintanya merahasiakan peta selamanya — dan kami sepaham.”',
      motive: 'Meyakini harta itu sakral/terkutuk dan tak boleh diambil.',
      alibi: 'Memimpin doa di petilasan, disaksikan banyak peziarah.',
      interrogation: [
        { q: 'Anda percaya harta itu terkutuk?', a: 'Bukan untuk ditambang oleh tangan serakah. Aku menjaganya tetap terkubur, bukan mengambilnya. Mbah Guno sependapat denganku.' },
        { q: 'Anda berseteru dengan Mbah Guno?', a: 'Tidak. Aku memintanya tak pernah menyerahkan peta itu, dan ia berjanji. Kami sekutu, bukan musuh.' },
        { q: 'Di mana Anda sore itu?', a: 'Memimpin doa dan tahlil di petilasan, di depan puluhan peziarah, sampai magrib. Banyak yang bisa bersaksi.' },
      ],
    },
    {
      id: 'rendi', init: 'RD', name: 'Rendi', age: 35,
      role: 'Kolektor benda pusaka dari kota',
      statement:
        '“Aku menawar peta itu dengan harga tinggi, terang-terangan. Mbah Guno menolak, dan aku pulang. Aku kolektor, aku membeli — aku tak membunuh demi barang.”',
      motive: 'Sangat menginginkan peta untuk koleksinya; tawarannya ditolak.',
      alibi: 'Kembali ke penginapan di kota sore itu.',
      interrogation: [
        { q: 'Anda menawar peta itu?', a: 'Berapa pun ia minta, kubayar. Ia menolak mentah-mentah. Kecewa, ya. Tapi aku menawar dengan uang, bukan dengan racun.' },
        { q: 'Siapa yang paling putus asa akan peta ini, menurut Anda?', a: 'Jelas bukan aku — aku punya uang. Tapi “peneliti” itu, Sukma... aku dengar penagih utang mengejarnya ke mana-mana. Geledah saja tasnya, lihat surat-suratnya.', unlocks: 'suratutang' },
        { q: 'Di mana Anda sore itu?', a: 'Kembali ke penginapan di kota, ada struk dan resepsionis yang mencatat jamku. Aku tak ada di lereng sore itu.' },
      ],
    },
    {
      id: 'bayu', init: 'MB', name: 'Mas Bayu', age: 30,
      role: 'Pembuat film dokumenter viral',
      statement:
        '“Filmku memang menyalakan demam harta ini, aku akui. Tapi aku merekam cerita, bukan menggali kubur. Kematian Mbah Guno justru menghancurkan kelanjutan filmku.”',
      motive: 'Mendulang untung dari sensasi legenda; sempat merekam di lokasi.',
      alibi: 'Merekam b-roll di kejauhan sore itu.',
      interrogation: [
        { q: 'Film Anda memicu demam harta ini?', a: 'Tak kusangka sebesar ini. Aku merekam dan bercerita; tanggung jawab atas para pemburu itu bukan sepenuhnya milikku.' },
        { q: 'Anda merekam siapa yang datang sore itu?', a: 'Aku mengambil gambar dari kejauhan. Hanya satu orang yang masuk dan tinggal lama sore itu: Bu Sukma, membawa rantang. Selebihnya sepi.', requires: 'tamu' },
        { q: 'Di mana Anda saat kejadian?', a: 'Di punggungan seberang, merekam siluet Putri Tidur untuk filmku, ditemani dua kru. Kami tak mendekat ke rumah.' },
      ],
    },
  ],
  timeline: [
    { t: '1992', key: false, x: 'Si Macan Kawi berseru ke khalayak bahwa hartanya menanti yang layak, lalu tewas — menyalakan demam harta.' },
    { t: 'Belakangan ini', key: false, x: 'Film dokumenter viral membangkitkan legenda; pemburu harta membanjiri lereng Kawi.' },
    { t: 'Sore, ±15.00', key: true, x: 'Bu Sukma datang sendirian membawa rantang jamu; Bu Tarmi sempat memohon lalu pulang menangis.' },
    { t: 'Sore, ±16.00', key: true, x: 'Mbah Guno meminum jamu-kopi beracun; pembunuh menggeledah rumah mencari peta, tapi melewatkan tongkat tujuh loreng.' },
    { t: 'Pagi berikutnya', key: false, x: 'Jasad ditemukan; semula disangka serangan jantung. Joko panik lalu mengaku palsu.' },
  ],
  solution: {
    killer: 'sukma',
    proofLabels: {
      motive: { label: 'Motif', hint: 'Apa yang ia sembunyikan di balik kedok?' },
      means: { label: 'Cara', hint: 'Bagaimana Mbah Guno dibunuh?' },
      opportunity: { label: 'Kesempatan', hint: 'Siapa yang sendirian bersamanya sore itu?' },
    },
    motive: ['suratutang', 'iddosen'],
    means: ['kopi', 'jasad', 'jamu'],
    opportunity: ['tamu', 'jamu'],
  },
  reveal: {
    sections: [
      { h: 'Pengakuan yang runtuh', p: [
        'Joko mengaku membunuh pamannya — tapi ia berbohong. Rekaman warung menempatkannya, dan ibunya Bu Tarmi, di kemah pemburu sepanjang sore. Ia bahkan salah menyebut cara kematian.',
        'Ia mengaku karena mengira ibunya pelakunya: sore itu ia melihat Bu Tarmi keluar dari rumah Mbah Guno sambil menangis — padahal Tarmi hanya memohon, lalu pulang. Pengakuan itu lahir dari rasa takut, bukan kebenaran.',
      ] },
      { h: 'Bukan serangan jantung', p: [
        'Mbah Guno tidak mati karena usia. Ia diracun lewat jamu-kopi sore itu, dan kematiannya disamarkan agar tampak wajar. Racun yang sama ada di cangkir dan di tubuhnya — dari minuman yang dibawakan kepadanya, bukan yang ia seduh sendiri.',
      ] },
      { h: 'Sejarawan yang bukan sejarawan', p: [
        'Bu Sukma bukan peneliti: kartunya palsu, universitasnya menyangkalnya. Ia tenggelam utang ratusan juta, dengan penyitaan di depan mata. Ia tak datang untuk sejarah — ia datang untuk peta.',
        'Sore itu ia tamu terakhir, sendirian bersama si kakek, membawa rantang jamu. Saat Mbah Guno menolak menyerahkan peta — atau mulai mencurigai kedoknya — ia meracuninya, lalu menggeledah rumah. Tapi ia melewatkan benda yang paling sering disentuh korban: tongkat tujuh loreng. Peta itu tergulung di dalamnya, selama ini.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Joko dan Tarmi ada di kemah, terekam kamera. Pak Hadi ingin harta itu tetap terkubur, bukan menggalinya, dan ia memimpin doa di depan puluhan saksi. Rendi menawar dengan uang, terang-terangan, lalu kembali ke kota. Mas Bayu merekam dari punggungan seberang bersama krunya. Hanya Bu Sukma yang punya kebutuhan tersembunyi, kedok palsu, akses sendirian, dan rantang jamu itu. Sang murid menjaga rahasia gurunya sampai maut — dan hampir membawanya serta.',
      ] },
    ],
    rebuttals: {
      joko: 'Joko mengaku, tapi rekaman warung menempatkannya di kemah saat kematian, dan ia salah menyebut cara korban tewas. Ia berbohong untuk melindungi ibunya — bukan pelakunya.',
      tarmi: 'Bu Tarmi memang memohon agar peta dijual dan pulang menangis — tapi ia bersama Joko di kemah, terekam kamera, jauh sebelum racun bekerja. Air matanya bukan racun.',
      hadi: 'Pak Hadi ingin harta itu tetap terkubur dan sepaham dengan Mbah Guno, bukan berseteru. Sore itu ia memimpin doa di petilasan di depan puluhan peziarah.',
      rendi: 'Rendi menawar peta dengan uang secara terbuka dan kecewa ditolak — tapi ia kembali ke kota dengan jam yang tercatat, dan justru ia yang menunjuk keputusasaan Sukma.',
      bayu: 'Mas Bayu mendulang untung dari legenda, tapi kematian Mbah Guno menghentikan filmnya; sore itu ia merekam siluet Putri Tidur dari punggungan seberang bersama krunya.',
    },
  },
  treasure: {
    robber: {
      name: 'Si Macan Kawi',
      proclamation:
        '“Hartaku? Semua kutinggalkan di pangkuan Sang Putri Tidur. Yang cukup berani dan layak — carilah, ambillah!”',
    },
    mountains: [
      { id: 'butak', name: 'Gunung Butak', tag: 'kepala Sang Putri Tidur' },
      { id: 'kawi', name: 'Gunung Kawi', tag: 'dada Sang Putri Tidur', correct: true },
      { id: 'panderman', name: 'Gunung Panderman', tag: 'kaki Sang Putri Tidur' },
    ],
    // shown on the reveal once the right mountain is guessed
    hindsight:
      'Petunjuknya ada sejak awal. Sang Macan menamai dirinya dari Gunung Kawi — “dada Sang Putri Tidur” — dan petanya tak pernah hilang: ia tergulung di dalam tongkat tujuh loreng milik Mbah Guno, benda yang kau periksa sejak awal. Tujuh loreng itu pun bukan hiasan belaka.',
    legendTitle: 'Angka-angka legenda Si Macan Kawi',
    legendNote: 'Dihafal seantero negeri — tapi hati-hati, hanya sebagian yang menjadi kunci. Sisanya umpan.',
    legend: [
      { n: '1957', label: 'tahun ia lahir' },
      { n: '1980', label: 'tahun ia mulai merampok' },
      { n: '1992', label: 'tahun kejayaan terakhirnya (tewas)' },
      { n: '35', label: 'usianya saat tewas' },
      { n: '45', label: 'jumlah rampokan besarnya' },
      { n: '17', label: 'tanggal ia berpamitan di depan massa' },
      { n: '90', label: 'sayembara kepalanya (juta rupiah)' },
      { n: '7', label: 'jumlah persembunyiannya' },
    ],
    hunt: {
      intro:
        'Di dalam tongkat tujuh loreng, tergulung peta usang Si Macan Kawi. Tiga kunci memisahkanmu dari hartanya. Kau akan butuh peta daring (Google Maps) untuk membukanya.',
      mapsHint: 'Tip: ketik koordinat atau nama tempat ke Google Maps untuk melihat di mana ia jatuh.',
      locks: [
        {
          id: 'sandi',
          kind: 'Kunci 1 · Sandi',
          title: 'Pecahkan sandi peta',
          cipher: 'THRHT RHDP',
          prompt:
            'Di tepi peta tertera deret huruf di bawah. Geser tiap huruf MUNDUR sebanyak jumlah loreng pada tongkat Mbah Guno (lihat bukti), lalu tulis bunyinya.',
          accept: ['makam kawi', 'makamkawi'],
          reveal:
            '“MAKAM KAWI.” Di bawahnya sang Macan menulis: “Mulailah dari tempat yang mati dihormati — tempat pohon dewandaru menjatuhkan rezeki, di lereng selatanku.”',
        },
        {
          id: 'gerbang',
          kind: 'Kunci 2 · Titik Awal',
          title: 'Temukan gerbang keramat',
          prompt:
            '“Tempat yang mati dihormati, pohon dewandaru menjatuhkan rezeki, di lereng selatan Gunung Kawi.” Cari di peta daring — tempat apa itu? Tulis nama tempatnya (atau koordinatnya).',
          target: { lat: -8.0786, lng: 112.4528, tolKm: 2.5 },
          accept: [
            'pesarean gunung kawi',
            'pesarehan gunung kawi',
            'pesarean kawi',
            'makam gunung kawi',
            'keramat gunung kawi',
          ],
          reveal:
            'Benar — Pesarean Gunung Kawi. Pada nisan tua, sang Macan menggores arah terakhir: “Naiklah ke singgasana tertinggiku. Letaknya kusembunyikan dalam angka-angka legendaku — LINTANG: tahun kejayaan terakhirku, lalu usiaku saat tewas. BUJUR: jumlah rampokan besarku, lalu tanggal aku berpamitan. Banyak angka tentangku hanyalah umpan.”',
        },
        {
          id: 'puncak',
          kind: 'Kunci 3 · Harta',
          title: 'Singgasana sang Macan',
          prompt:
            'Rakit koordinatnya dari angka legenda (awas umpan!). Lintang mulai dengan 7 (selatan), bujur dengan 112 (timur). Lintang = 7,(dua angka tahun kejayaan)(usia saat tewas). Bujur = 112,(jumlah rampokan)(tanggal berpamitan). Masukkan koordinat — atau nama puncaknya.',
          target: { lat: -7.9235, lng: 112.4517, tolKm: 1.2 },
          accept: ['puncak gunung kawi', 'puncak kawi', 'redi kawi', 'summit gunung kawi'],
          reveal:
            'Tepat. S 7.9235°, E 112.4517° — Puncak Gunung Kawi, singgasana tertinggi sang Macan.',
        },
      ],
      reward: {
        title: 'Harta Si Macan Kawi ditemukan',
        text:
          'Di bawah batu pipih di puncak, terbungkus kain lapuk: keping-keping emas rampasan, untaian perhiasan, dan secarik pesan terakhir sang Macan — bahwa harta ini bukan untuk ditimbun, melainkan dikembalikan kepada kampung-kampung yang dulu ia rampas. Murid terakhirnya menjaganya hingga maut. Kini, kau yang menemukannya.',
      },
    },
  },
}
