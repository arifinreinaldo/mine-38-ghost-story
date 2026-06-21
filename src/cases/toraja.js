// Case 9 (gated). The twist: it LOOKS supernatural — a wrapped corpse rises and
// walks, then the heir dies — but it is a wholly rational murder. The killer
// wore a spare death-shroud to impersonate the "walking dead" (Rolang),
// exploiting the taboo that no one may approach, face, or walk before it.
// Set during a Rambu Solo' funeral in Tana Toraja. Single killer; hard to guess.
export const toraja = {
  id: 'toraja',
  free: false,
  difficulty: 'Sedang',
  code: 'TT-RS',
  location: "Tana Toraja, Sulawesi · Upacara Rambu Solo'",
  scene: 'toraja',
  title: "Maut di Rambu Solo'",
  blurb:
    'Di tengah upacara duka yang agung, kain kafan sang mendiang konon bangkit dan berjalan — dan esoknya pewaris utama tewas di kaki menara duka. Murka leluhur, atau tangan manusia?',
  disclaimer: {
    text:
      "Kisah ini fiksi, terinspirasi tradisi Rambu Solo' dan kepercayaan Aluk To Dolo masyarakat Toraja — tongkonan, tau-tau, menara lakkian, kurban tedong, dan legenda mayat berjalan (Rolang). Legenda itu hanyalah cerita tutur; tak ada jasad yang benar-benar berjalan. Seluruh tokoh, nama, dan peristiwa rekaan belaka, dan tidak menggambarkan keluarga atau orang Toraja mana pun yang nyata.",
    source: {
      label:
        "Latar tradisi: “Toraja Funeral Rites: Traditions and Ancestral Symbols” (Terra Cultura)",
      url: 'https://terra-cultura.com/en/toraja-funeral-rites-traditions-and-ancestral-symbols/',
    },
  },
  cover: {
    lead:
      'Mereka bersumpah melihat jasad Ne’ Sombolinggi’ berdiri dan melangkah dalam gelap. Pagi harinya, putra sulungnya mati di bawah menara lakkian. Toraja menyebutnya kutukan leluhur. Tapi Anda tahu: kematian selalu meninggalkan jejak — bahkan saat ia menyamar jadi sihir.',
  },
  briefing: {
    paras: [
      "Di pegunungan Tana Toraja, keluarga Sombolinggi’ menggelar Rambu Solo’ — upacara duka berhari-hari bagi mendiang Ne’ Sombolinggi’. Berbulan-bulan jasadnya dirawat di dalam tongkonan sebagai to makula’, “orang sakit” yang belum dianggap mati, sembari keluarga mengumpulkan puluhan tedong (kerbau). Besar-kecilnya upacara — dan pembagian sawah warisan — ditentukan oleh hitungan tedong itu.",
      "Pada malam menjelang pembagian warisan, beberapa saksi bersumpah melihat kain kafan Ne’ berdiri dan berjalan ke arah menara lakkian dalam kegelapan. Terikat pantang, semua menunduk dan menyingkir — tak boleh menyentuh, menatap, apalagi mendahului yang berjalan. Saat fajar, Yohanis, putra sulung yang esok harinya akan membacakan pembagian warisan, ditemukan tewas di kaki menara.",
      "Sekampung berbisik: ini kuasa Aluk To Dolo, murka leluhur yang bangkit. Keluarga ketakutan, cemas kutukan akan memakan korban lain, lalu memanggil Anda. Periksa baik-baik: benarkah seorang mati berjalan — atau adakah yang ingin Anda percaya begitu?",
    ],
    taskTitle: 'Tugas Anda',
    task:
      'Periksa setiap bukti. Interogasi keenam orang terdekat duka ini. Lalu tunjuk pelakunya — dan buktikan bagaimana “mayat berjalan” itu direka. Susun pembuktianmu.',
  },
  victim: {
    init: 'YS',
    name: 'Yohanis Sombolinggi’',
    meta: '41 tahun · putra sulung & pewaris utama',
    paras: [
      'Putra sulung mendiang, dialah yang memegang buku tally tedong dan esok hari akan membacakan pembagian sawah di hadapan seluruh keluarga. Disegani, dan dikenal membela kerabat yang tersisih.',
      'Ditemukan pada fajar di kaki menara lakkian, lehernya patah. Di sisinya tergeletak tempurung tuak semalam. Sekeliling hanya berbisik satu kalimat: jasad ayahnya telah bangkit dan berjalan.',
    ],
  },
  evidence: [
    {
      id: 'jenazah', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Luka maut Yohanis',
      summary: 'Leher patah karena jatuh dari menara — tapi ada bekas cengkeraman.',
      detail:
        'Leher Yohanis patah akibat jatuh dari ketinggian menara lakkian. Tapi tubuhnya terlempar terlalu jauh dari kaki menara untuk sekadar terpeleset, dan di lengannya ada memar bentuk cengkeraman jari. Ini bukan jatuh sendiri, dan jelas bukan tangan gaib — ia didorong oleh seseorang yang sangat hidup.',
    },
    {
      id: 'tuak', icon: 'cup', tag: 'Lab Forensik',
      title: 'Tuak Yohanis dibubuhi',
      summary: 'Tempurung tuaknya mengandung rebusan kecubung — obat bius.',
      detail:
        'Sisa tuak (ballo’) di tempurung Yohanis bercampur rebusan biji kecubung — bius kuat yang membuat linglung dan limbung. Dalam keadaan setengah sadar di malam gelap, ia mudah dituntun ke mana saja — termasuk menaiki tangga menara lakkian yang curam.',
    },
    {
      id: 'tangga', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Tangga menara lakkian',
      summary: 'Di lumpur dekat tangga: satu set tapak bersandal yang masih segar.',
      detail:
        'Menara lakkian — tempat keluarga duduk di atas selama upacara. Di lumpur dekat kaki tangganya ada tapak Yohanis, dan di sampingnya satu set tapak bersandal lain yang masih segar, naik lalu turun. Seseorang yang hidup dan beralas kaki menaiki menara itu bersamanya malam itu.',
    },
    {
      id: 'kafan', icon: 'apparel', tag: 'Barang Bukti',
      title: 'Kain kafan kedua',
      summary: 'Sehelai kain kafan cadangan, tersembunyi — ujungnya berlumpur, bau tuak.',
      detail:
        'Terselip di balik tumpukan kayu dekat rante: sehelai kain kafan (sarita) kedua, bukan milik jasad. Ujungnya berlumpur dan berbau tuak. Inilah yang dikenakan seseorang untuk menyaru menjadi “mayat berjalan” — kain duka yang dijadikan kostum.',
    },
    {
      id: 'jejak', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Jejak “mayat berjalan”',
      summary: 'Sosok yang berjalan meninggalkan tapak bersandal — bukan kaki telanjang.',
      detail:
        'Di jalur tempat “mayat” konon melangkah, tertinggal jejak kaki bersandal yang menapak penuh — langkah orang hidup. Jasad yang dibungkus kafan diusung di atas usungan dan kakinya telanjang; ia tak meninggalkan jejak melangkah. Yang berjalan malam itu bersandal, dan ia bernyawa.',
    },
    {
      id: 'simpul', icon: 'evidence', tag: 'Temuan Kunci',
      title: 'Ikatan ritus yang utuh',
      summary: 'Simpul dan segel pada jasad asli tak tersentuh — debu di atasnya tak terusik.',
      locked: true, twist: true,
      detail:
        'Jasad Ne’ Sombolinggi’ diikat dan disegel to minaa dengan simpul ritus. Pagi itu simpul masih utuh, segel masih melekat, dan debu tipis di atas usungan sama sekali tak terusik. Jasad itu tak pernah beranjak seujung jari pun dari tongkonan. Maka yang “berjalan” di luar bukanlah dia — melainkan seseorang yang mengenakan kafan kedua.',
    },
    {
      id: 'buku', icon: 'ledger', tag: 'Dokumen',
      title: 'Buku tally tedong',
      summary: 'Hitungan kerbau tak cocok — ada ternak “ada” yang sebenarnya tiada.',
      detail:
        'Buku catatan tedong, dipegang sang pencatat. Beberapa ekor tercatat masih ada atau telah dikurbankan, padahal kandangnya kosong. Di tepi halaman, tangan Yohanis melingkari ternak-ternak yang hilang itu dengan tinta merah, dengan tanda tanya besar.',
    },
    {
      id: 'resi', icon: 'doc', tag: 'Dokumen',
      title: 'Resi penjualan tedong',
      summary: 'Resi pasar Bolu: kerbau dijual diam-diam berbulan lalu, bukan dikurbankan.',
      locked: true,
      detail:
        'Resi-resi dari pasar tedong di Bolu: enam ekor kerbau milik Ne’ Sombolinggi’ dijual diam-diam berbulan sebelum upacara — bukan dikurbankan seperti tercatat di buku. Tanda terima di tangan sang pencatat, Markus. Ternak yang “hilang” itu berubah menjadi uang di kantong satu orang.',
    },
    {
      id: 'pesan', icon: 'phone', tag: 'Pesan',
      title: 'Pesan terakhir Yohanis',
      summary: '“Besok kuumumkan soal tedong yang hilang di depan keluarga.”',
      detail:
        'Di ponsel Yohanis, pesan terkirim pada malam ia tewas: “Besok, sebelum pembagian, kuumumkan soal tedong yang hilang di depan seluruh keluarga. Cukup sudah.” Ia tahu ada yang mencuri ternak duka — dan berniat membongkarnya esok pagi. Esok pagi yang tak pernah ia capai.',
    },
    {
      id: 'tautau', icon: 'photo', tag: 'Temuan',
      title: 'Tau-tau menghadap jasad',
      summary: 'Patung tau-tau didapati berputar menghadap tongkonan — “pertanda murka”.',
      herring: true,
      detail:
        'Patung tau-tau — efigi kayu sang mendiang — ditemukan berputar menghadap tongkonan, dan sekampung menyebutnya pertanda leluhur murka. Nyatanya patung itu sekadar tergeser saat para pengusung memindahkannya sore sebelumnya; tapak tangan di alasnya membuktikan ia digeser tangan manusia, bukan tanda apa pun. Petunjuk yang menyesatkan.',
    },
  ],
  suspects: [
    {
      id: 'markus', init: 'MP', name: 'Markus Pasapan', age: 33,
      role: 'Juru catat & pencatat tedong keluarga',
      statement:
        '“Aku berjaga di sisi tongkonan dalam gelap. Lalu kulihat kafan Ne’ berdiri, bergoyang, melangkah ke menara. Aku menunduk — pantang menatap yang berjalan. Saat fajar, Yohanis sudah di bawah lakkian. Arwah Ne’ yang murka.”',
      motive: 'Diam-diam menjual tedong duka dan memalsukan tally; nyaris dibongkar Yohanis.',
      alibi: 'Mengaku berjaga sendirian di dekat jasad — tak ada yang menyaksikan.',
      interrogation: [
        { q: 'Kau yang pertama melihat semuanya?', a: 'Aku berjaga dekat tongkonan. Kulihat kain kafan itu bangkit dan melangkah ke arah lakkian, bergoyang dalam gelap. Aku gemetar, menunduk. Pantang menatap yang berjalan. Saat fajar... Yohanis sudah terbujur di bawah menara.' },
        { q: 'Selisih jumlah tedong di bukumu — ke mana ternaknya?', a: 'Pasar sedang kacau, banyak ternak mati sakit. Catatan bisa keliru sedikit. Tanya Daud — dialah yang berutang ternak, bukan aku.', requires: 'buku' },
        { q: 'Di mana tepatnya kau saat “jasad” berjalan?', a: 'Menjaga jasad, seperti tugasku. Sendirian, di gelap. Tak ada... tak seorang pun berani mendekat untuk melihat. Begitulah pantangnya.' },
      ],
    },
    {
      id: 'petrus', init: 'PT', name: 'Petrus Tandirerung', age: 61,
      role: 'To minaa (pemimpin ritus Aluk To Dolo)',
      statement:
        '“Aku memimpin ritusnya, mengikat dan menyegel jasad dengan tanganku sendiri. Apa pun yang berjalan malam itu, ia tidak keluar dari ikatanku.”',
      motive: 'Tak ada motif jelas; justru ritusnya yang membongkar tipuan.',
      alibi: 'Memimpin ma’badong (nyanyian duka) di rante hingga larut, disaksikan puluhan orang.',
      interrogation: [
        { q: 'Mungkinkah jasad benar-benar bangkit dan berjalan?', a: 'Dahulu orang berkata to minaa berkuasa membuat jasad berjalan pulang ke kampungnya — Rolang. Tapi itu kisah tutur lama. Pantangnya keras: jangan sentuh, jangan tatap, jangan berjalan di depannya, atau ia roboh. Maka malam itu semua menunduk dan menyingkir. Tak seorang pun benar-benar melihat.' },
        { q: 'Ikatan dan segel ritus pada jasad — tersentuh pagi itu?', a: 'Aku sendiri yang mengikatnya dengan simpul ritus dan menyegelnya. Pagi itu kuperiksa: simpul utuh, segel utuh, debu di atas usungan tak terusik. Jasad Ne’ Sombolinggi’ tak pernah beranjak seujung jari pun.', unlocks: 'simpul' },
        { q: 'Di mana Anda sepanjang malam?', a: 'Memimpin ma’badong, melingkar bernyanyi duka bersama puluhan orang di rante hingga jauh malam. Mereka semua saksiku.' },
      ],
    },
    {
      id: 'daud', init: 'DS', name: 'Daud Sombolinggi’', age: 39,
      role: 'Adik korban; terlilit utang tedong',
      statement:
        '“Ya, aku berutang banyak kerbau, dan tanpa tedong bagianku atas sawah nyaris habis. Aku marah pada nasib — tapi marah bukan membunuh kakakku sendiri.”',
      motive: 'Terlilit utang tedong; bagiannya atas sawah warisan terancam mengecil.',
      alibi: 'Di kalangan sisemba’ (adu kaki) hingga pagi, disaksikan banyak orang.',
      interrogation: [
        { q: 'Soal utang tedong-mu?', a: 'Banyak. Tanpa kerbau, bagianku atas sawah Ne’ nyaris tak ada. Aku marah pada nasibku, ya. Tapi Yohanis kakakku — aku tak akan mendorongnya dari menara.' },
        { q: 'Namamu memenuhi kolom utang di buku itu.', a: 'Karena aku memang berutang, bukan mencuri. Lihat: utangku tercatat rapi, hitam di atas putih. Ternak Ne’ yang lenyap tak pernah masuk kandangku.', requires: 'buku' },
        { q: 'Di mana kau saat kejadian?', a: 'Di kalangan sisemba’, beradu kaki sampai pagi. Ratusan orang melihatku jatuh bangun dan tertawa. Aku mustahil ada di menara itu.' },
      ],
    },
    {
      id: 'bombong', init: 'BP', name: 'Bombong Patabang', age: 47,
      role: 'Pedagang tedong dari pasar Bolu',
      statement:
        '“Aku cuma pedagang kerbau. Aku datang berdagang dan menagih, seperti di setiap Rambu Solo’ besar. Urusan dalam keluarga ini bukan urusanku.”',
      motive: 'Pedagang luar; tak punya kepentingan atas warisan keluarga.',
      alibi: 'Menginap di losmen dekat pasar, jauh dari lokasi upacara.',
      interrogation: [
        { q: 'Apa urusanmu di upacara ini?', a: 'Aku pedagang tedong dari Bolu. Di Rambu Solo’ sebesar ini, kerbau berpindah tangan terus. Aku datang berdagang dan menagih utang lama, itu saja.' },
        { q: 'Kau pernah membeli tedong dari keluarga ini?', a: 'Membeli? Markus yang menjualnya padaku — enam ekor, diam-diam, berbulan sebelum upacara. Katanya atas seizin keluarga. Resinya kusimpan semua; tanya saja.', requires: 'buku', unlocks: 'resi' },
        { q: 'Di mana kau malam itu?', a: 'Meringkuk di losmen dekat pasar, jauh dari sini. Pemilik losmen dan dua pedagang lain bisa bersaksi.' },
      ],
    },
    {
      id: 'ribka', init: 'RS', name: 'Ribka Sombolinggi’', age: 44,
      role: 'Kakak korban; merasa tersisih waris',
      statement:
        '“Adat membagi sawah ke garis lelaki. Aku anak tertua, tapi perempuan, jadi bagianku paling kecil. Pahit — tapi Yohanis-lah yang justru membelaku.”',
      motive: 'Merasa tersisih dari warisan karena pembagian condong ke garis lelaki.',
      alibi: 'Menyiapkan sesaji dan beras bersama para perempuan di dapur tongkonan.',
      interrogation: [
        { q: 'Anda merasa tersisih dari warisan?', a: 'Adat membagi sawah ke garis lelaki. Aku tertua, tapi perempuan, jadi bagianku paling kecil. Pahit, ya. Tapi dari semua, Yohanis yang paling membelaku.' },
        { q: 'Anda bertengkar dengan Yohanis?', a: 'Tidak pernah. Justru ia berjanji menambah bagianku dari sawah bawah saat pembagian. Kematiannya merenggut satu-satunya pembelaku — aku rugi, bukan untung.' },
        { q: 'Di mana Anda malam itu?', a: 'Di dapur tongkonan, menanak beras dan menyiapkan sesaji bersama ibu-ibu sepanjang malam. Banyak yang menemaniku, tak henti.' },
      ],
    },
    {
      id: 'indorara', init: 'IR', name: 'Indo’ Rara', age: 31,
      role: 'Janda muda mendiang Ne’ Sombolinggi’',
      statement:
        '“Saat anak-anaknya membagi sawah, aku — istri keduanya yang muda — nyaris tak kebagian apa-apa. Orang bilang itu motifku. Tapi aku berduka, bukan bersukacita.”',
      motive: 'Sebagai istri muda, terancam tak mendapat bagian dalam pembagian warisan.',
      alibi: 'Menunggui jasad suaminya bersama para perempuan, menyalakan pelita.',
      interrogation: [
        { q: 'Anda istri muda mendiang Ne’ Sombolinggi’?', a: 'Ya. Dan saat anak-anaknya membagi sawah, istri muda sepertiku nyaris tak kebagian apa-apa. Aku tahu orang menudingku karena itu.' },
        { q: 'Bukankah itu alasan marah pada Yohanis?', a: 'Justru Yohanis satu-satunya yang diam-diam menyisihkan sebagian untukku. Tanya Markus yang mencatatnya. Kematian Yohanis menutup pintu terakhirku — aku kehilangan, bukan beruntung.' },
        { q: 'Malam itu Anda di mana?', a: 'Menunggui jasad suamiku di sisi dalam tongkonan bersama para perempuan sampai larut, menyalakan pelita. Setelah itu kami menyingkir saat ma’badong dimulai.' },
      ],
    },
  ],
  timeline: [
    { t: 'Berbulan lalu', key: false, x: 'Markus diam-diam menjual enam tedong milik Ne’ Sombolinggi’ ke pedagang Bolu, lalu memalsukan buku tally.' },
    { t: 'Sehari sebelum', key: true, x: 'Yohanis menemukan selisih ternak di buku dan berniat mengumumkannya di depan keluarga esok pagi.' },
    { t: 'Malam, jelang tengah malam', key: true, x: 'Tuak Yohanis dibubuhi kecubung; dalam keadaan limbung ia dituntun ke menara lakkian.' },
    { t: 'Tengah malam', key: true, x: '“Mayat berjalan” muncul dalam gelap; semua menunduk dan menyingkir karena pantang; Yohanis didorong dari menara.' },
    { t: 'Fajar', key: false, x: 'Markus “menemukan” jasad Yohanis dan berseru bahwa arwah Ne’ telah bangkit.' },
  ],
  solution: {
    killer: 'markus',
    proofLabels: {
      motive: { label: 'Motif', hint: 'Apa yang ia sembunyikan?' },
      means: { label: 'Tipuan Gaib', hint: 'Bagaimana “mayat” itu berjalan?' },
      opportunity: { label: 'Cara Membunuh', hint: 'Bagaimana Yohanis dihabisi?' },
    },
    motive: ['buku', 'resi', 'pesan'],
    means: ['kafan', 'jejak', 'simpul'],
    opportunity: ['tuak', 'tangga', 'jenazah'],
  },
  reveal: {
    sections: [
      { h: 'Tak ada arwah yang berjalan', p: [
        'Tak ada jasad yang bangkit. Ikatan dan segel ritus pada jasad Ne’ Sombolinggi’ masih utuh di pagi hari, dan debu di atas usungan tak terusik — jasadnya tak pernah beranjak dari tongkonan.',
        'Yang “berjalan” meninggalkan tapak bersandal, padahal jasad terbungkus kafan diusung dengan kaki telanjang dan tak menapak. Dan di balik tumpukan kayu, sehelai kain kafan kedua tersembunyi — ujungnya berlumpur, berbau tuak. Seseorang yang hidup mengenakan kain duka itu dan menyaru jadi mayat.',
      ] },
      { h: 'Siapa di balik kain kafan', p: [
        'Markus, sang juru catat, telah menjual diam-diam enam tedong milik mendiang ke pedagang Bolu dan memalsukan buku tally agar ternak yang lenyap tampak masih ada. Karena pembagian sawah ditentukan hitungan kerbau, kecurangannya akan segera ketahuan.',
        'Yohanis menemukan selisih itu dan berniat mengumumkannya esok pagi, di depan seluruh keluarga. Maka malam itu Markus membubuhkan rebusan kecubung ke dalam tuak Yohanis, menuntun lelaki yang limbung itu ke menara lakkian, lalu mendorongnya hingga jatuh. Setelah itu ia menyelubungi diri dengan kafan kedua, menjadi “mayat berjalan”, dan saat fajar berseru bahwa arwah Ne’ telah bangkit.',
      ] },
      { h: 'Mengapa tak ada yang melihat', p: [
        'Justru karena pantang Rolang: tak boleh menyentuh, menatap, apalagi berjalan di depan jasad yang berjalan, atau ia akan roboh. Ketakutan dan mata yang tertunduk adalah selubung yang sempurna — tak ada saksi yang berani memandang.',
        'Dan ritus yang dimaksudkan menghormati Ne’ Sombolinggi’ — simpul dan segel sang to minaa — justru yang membuktikan jasadnya tak pernah bergerak. Sihir itu hanya berlaku selama tak ada yang berani memeriksanya.',
      ] },
      { h: 'Mengapa bukan mereka', p: [
        'Daud terlilit utang, Ribka tersisih waris, Indo’ Rara terancam tak kebagian, bahkan to minaa menguasai “ilmu” ritus — masing-masing punya bayang-bayang, tapi tak satu pun memegang perbuatannya.',
        'Daud beradu kaki di kalangan sisemba’ di depan ratusan orang; Ribka menanak di dapur tongkonan semalaman; Indo’ Rara menunggui jasad suaminya sambil menyalakan pelita; Petrus memimpin ma’badong di rante. Bombong sekadar membeli tedong yang ia kira sah. Hanya Markus yang memegang buku, punya akses, dan paling banyak rugi bila hitungan itu dibacakan. Leluhur tidak membunuh anaknya. Juru catatnya yang melakukannya — bersembunyi di balik kafan sang mendiang.',
      ] },
    ],
    rebuttals: {
      petrus: 'Petrus menguasai ritus dan sanggup membayangkan sebuah Rolang — tapi justru ikatan dan segelnya yang utuh di pagi hari membuktikan jasad tak pernah bergerak. Malam itu ia memimpin ma’badong di hadapan seluruh rante.',
      daud: 'Utang tedong Daud nyata dan motifnya lantang — tapi utang itu tercatat sah, bukan pencurian, dan tedong yang hilang dijual ke pedagang, bukan masuk kandangnya. Sepanjang malam ia beradu kaki di kalangan sisemba’ di depan ratusan orang.',
      bombong: 'Bombong memang membeli kerbau dengan murah dan diam-diam — tapi dari tangan Markus, dan ia mengira jual-beli itu sah. Resinya justru menjerat sang penjual, bukan dirinya; malam itu ia di losmen dekat pasar.',
      ribka: 'Ribka memang merasa tersisih oleh adat garis lelaki — tapi Yohanis-lah pembelanya, yang berjanji menambah bagiannya; kematiannya merugikannya. Ia menanak dan menyiapkan sesaji di dapur tongkonan semalaman.',
      indorara: 'Indo’ Rara, istri muda, memang terancam tak kebagian warisan — tapi hanya Yohanis yang diam-diam menyisihkan bagian untuknya; kematiannya menutup pintu terakhirnya. Malam itu ia menunggui jasad suaminya dan menyalakan pelita.',
    },
  },
}
