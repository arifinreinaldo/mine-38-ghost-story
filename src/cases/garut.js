// Case 4 (gated). Original mystery using the (debunked) "Hitler died in
// Garut" conspiracy theory as backdrop. The legend is exposed as a hoax
// within the story — the murder merely exploits it.
export const garut = {
  id: 'garut',
  free: false,
  difficulty: 'Sedang',
  code: 'LK-0945',
  location: 'Loji Kabut, Garut',
  scene: 'highland',
  title: 'Maut di Loji Kabut',
  blurb:
    'Penjaga legenda "Hitler dari Garut" ditemukan tewas di kaki menara loji berkabut. Konspirasi Nazi yang kabur — atau pembunuhan yang menumpang legenda?',
  disclaimer: {
    text: 'Kisah ini fiksi. Latarnya meminjam teori konspirasi populer "Hitler mati/bersembunyi di Garut" — yang tak punya dasar sejarah; Adolf Hitler meninggal di Berlin tahun 1945. Seluruh tokoh, nama, tempat, dan relik dalam cerita ini rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
    source: {
      label: '"Benarkah Hitler Mati di Garut?" (Pikiran Rakyat)',
      url: 'https://klaten.pikiran-rakyat.com/nasional/pr-2418678275/benarkah-hitler-mati-di-garut-menguak-asal-usul-teori-konspirasi',
    },
  },
  cover: {
    lead: 'Di dataran tinggi Garut yang berkabut, sebuah loji kolonial menyimpan legenda yang menolak mati. Subuh ini, penjaganya ikut mati — dan kabut menyembunyikan segalanya.',
  },
  briefing: {
    paras: [
      'Di dataran tinggi Garut yang berkabut, sebuah loji peninggalan kolonial menyimpan legenda yang menolak mati: konon penghuni pertamanya, seorang Jerman misterius, adalah petinggi Nazi yang kabur dari Perang Dunia II — bahkan ada yang berbisik, Hitler sendiri.',
      'Bertahun-tahun, Opa Wim Sastra — keturunan sang Jerman — merawat legenda itu: museum kecil, tur "jejak Nazi", dan sebuah film dokumenter yang sedang digarap. Lalu, di subuh berkabut, Opa Wim ditemukan tewas di kaki menara loji. Dokter keluarga menyebut: terpeleset di tangga menara.',
      'Tapi malam itu ia justru menyiapkan pengungkapan besar di depan kamera. Keluarganya menolak kata "kecelakaan" dan memanggil Anda.',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Interogasi keenam orang di sekitar sang pertapa. Lalu susun pembuktian — motif, cara, kesempatan. Di balik kabut Garut, legenda bisa jadi senjata.',
  },
  victim: {
    init: 'WS',
    name: 'Opa Wim Sastra',
    meta: '88 tahun · penjaga Loji Kabut & legendanya',
    paras: [
      'Keturunan Indo-Jerman, pewaris Loji Kabut. Bertahun-tahun ia memelihara cerita bahwa ayahnya — sang Jerman pendiri loji — adalah buronan Nazi yang bersembunyi di Garut. Dari cerita itu lahir museum kecil, tur, dan kini sebuah dokumenter yang dinanti.',
      'Belakangan ia sakit-sakitan dan, kata sebagian orang, gelisah ingin "meluruskan sesuatu". Ditemukan subuh di kaki menara loji, di tengah kabut tebal. Tak ada saksi — hanya kabut, dan sebuah legenda yang tiba-tiba kehilangan penjaganya.',
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Luka di kepala Opa Wim',
      summary: 'Satu pukulan di belakang kepala, sebelum ia jatuh.',
      detail:
        'Satu pukulan benda tumpul di belakang kepala mendahului jatuhnya. Pola lukanya tak cocok dengan tubuh yang menggelinding di tangga menara. Ia dilumpuhkan dulu, baru direbahkan di kaki menara.',
    },
    {
      id: 'tkp', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Posisi jasad & kabut',
      summary: 'Tongkat tergeletak rapi, kacamata utuh — terlalu rapi.',
      detail:
        'Dokter keluarga buru-buru menyebut "terpeleset". Tapi tongkat Opa Wim tergeletak rapi, kacamatanya utuh, dan tak ada bekas tergelincir di anak tangga. Tubuhnya seperti diatur — kecelakaan yang dipentaskan dalam kabut.',
    },
    {
      id: 'relik', icon: 'apparel', tag: 'Barang Bukti',
      title: 'Relik "Nazi" di museum loji',
      summary: 'Seragam & medali ternyata reproduksi modern.',
      detail:
        'Seragam, medali, dan potret berlambang Nazi yang dipamerkan sebagai "bukti" ternyata reproduksi modern: kain dan cat sintetis yang baru berumur beberapa tahun. Legenda itu bukan warisan — ia diproduksi.',
    },
    {
      id: 'dosier', icon: 'doc', tag: 'Dokumen',
      title: 'Berkas sejarah Prof. Sari',
      summary: 'Pendiri loji cuma administratur kebun teh. Hitler tewas di Berlin.',
      detail:
        'Riset arsip kolonial: pendiri loji hanyalah administratur perkebunan teh Jerman biasa, wafat 1951, tanpa kaitan dengan Nazi. Dan fakta yang diterima dunia tetap tegak: Hitler tewas di Berlin, 1945. Tak pernah ada Hitler di Garut.',
    },
    {
      id: 'kontrak', icon: 'ledger', tag: 'Dokumen',
      title: 'Kontrak film & investor',
      summary: 'Investor dijanjikan "bukti bombastis yang nyata".',
      detail:
        'Dokumenter "Jejak Hitler di Garut" menelan dana besar dari investor yang dijanjikan bukti bombastis yang nyata. Bila legendanya runtuh jadi hoaks, filmnya tak berharga — dan utang ke investor berubah menjadi perkara penipuan bagi pembuatnya.',
    },
    {
      id: 'jadwal', icon: 'metadata', tag: 'Metadata',
      title: 'Jadwal wawancara terakhir',
      summary: 'Hanya satu kru naik ke menara menemani Wim.',
      detail:
        'Catatan produksi: satu sesi wawancara "eksklusif" dijadwalkan di ruang menara malam itu, pukul 23.00. Hanya satu orang yang naik menemani Opa Wim ke menara — Daniel, sang sutradara. Yang lain dilarang ikut "demi fokus".',
    },
    {
      id: 'patung', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Patung perunggu pendiri loji',
      summary: 'Raib dari menara, ditemukan terlap bersih — bernoda darah.',
      detail:
        'Patung dada perunggu sang pendiri raib dari ruang menara, lalu ditemukan terlap bersih di gudang. Pada dasarnya tersisa noda darah samar bergolongan sama dengan Opa Wim. Berat dan bersudut — pas dengan bentuk lukanya.',
    },
    {
      id: 'ceramah', icon: 'social', tag: 'Media Sosial',
      title: 'Siaran diskusi Prof. Sari',
      summary: 'Tersiar langsung dari kota, 20.00–22.30.',
      detail:
        'Malam itu Prof. Sari mengisi diskusi publik di kota Garut, disiarkan langsung pukul 20.00–22.30, dilanjutkan tanya-jawab. Puluhan hadirin dan rekaman memastikan ia tak berada di loji saat kejadian.',
    },
    {
      id: 'peta', icon: 'photo', tag: 'Barang Bukti',
      title: 'Peta "harta Nazi"',
      summary: 'Peta yang diburu Tobi terbukti dibuat-buat.',
      herring: true,
      detail:
        'Peta lusuh yang diburu Tobi — konon menunjuk emas Nazi di bawah loji — terbukti palsu, kertasnya ditua-tuakan. Tobi sempat ribut menuntutnya sore itu, lalu turun gunung sebelum kabut tebal; warung di bawah mencatat kedatangannya.',
    },
    {
      id: 'pengakuan', icon: 'doc', tag: 'Temuan Tersembunyi',
      title: 'Draf pengakuan Opa Wim',
      summary: 'Naskah untuk membongkar bahwa seluruh legenda itu rekayasa.',
      locked: true, twist: true,
      detail:
        'Tersembunyi di laci menara: naskah yang hendak ia bacakan di depan kamera — pengakuan bahwa seluruh legenda Nazi itu rekayasa demi menghidupi loji, lengkap dengan siapa saja yang ikut menjual kebohongan. Pengakuan ini akan meruntuhkan film, museum, dan reputasi beberapa orang sekaligus.',
    },
  ],
  suspects: [
    {
      id: 'renata', init: 'RS', name: 'Renata Sastra', age: 52,
      role: 'Cucu Wim, pengelola museum & tur loji',
      statement: '“Kakek membesarkanku dengan legenda ini. Tapi belakangan ia berubah — dan kini ia mati. Aku ingin kebenarannya, bukan menutupinya.”',
      motive: 'Hidup dari bisnis legenda loji; pengakuan kakeknya bisa menamatkan semuanya.',
      alibi: 'Menjamu rombongan tamu menginap di bangunan utama sepanjang malam.',
      interrogation: [
        { q: 'Bagaimana bisnis legenda loji belakangan?', a: 'Ramai. Tapi aku lelah berbohong, begitu juga Kakek. Kami sempat bicara menutup "tur Nazi" itu pelan-pelan.' },
        { q: 'Di mana kau malam itu?', a: 'Menjamu tamu menginap di bangunan utama sampai larut. Banyak yang melihatku menuang teh hingga tengah malam.' },
        { q: 'Kau tahu relik itu palsu?', a: 'Belakangan, ya. Itu sebabnya aku ingin berhenti — memajang kebohongan di depan turis membuatku malu.', requires: 'relik' },
      ],
    },
    {
      id: 'daniel', init: 'DH', name: 'Daniel Hartono', age: 39,
      role: 'Sutradara dokumenter "Jejak Hitler di Garut"',
      statement: '“Aku merekam kisah besar. Malam itu kami wawancara terakhir, lalu ia... jatuh. Aku kehilangan tokoh utamaku.”',
      motive: 'Tampak sebagai pencerita yang kehilangan narasumber — sampai isi wawancara terakhir terbongkar.',
      alibi: 'Mengaku turun lebih dulu dari menara; tak ada saksi di kabut.',
      interrogation: [
        { q: 'Apa yang terjadi di wawancara terakhir?', a: 'Biasa saja. Ia bercerita soal ayahnya, lalu aku turun duluan. Kabut tebal, aku tak melihat apa-apa.' },
        { q: 'Apa isi pengakuan yang hendak ia rekam?', a: 'Pengakuan? Tidak ada. Ia cuma mau bercerita seperti biasa. Filmku soal misteri, bukan bantahan.', requires: 'kontrak', unlocks: 'pengakuan' },
        { q: 'Kenapa hanya kau yang naik ke menara?', a: 'Demi fokus wawancara. Itu permintaan beliau, bukan aku. Jangan dibalik-balik.', requires: 'jadwal' },
      ],
    },
    {
      id: 'sari', init: 'SW', name: 'Prof. Sari Wijaya', age: 47,
      role: 'Sejarawan, pembongkar hoaks',
      statement: '“Aku datang menumbangkan dongeng, bukan orangnya. Justru aku ingin ia hidup untuk mengakuinya sendiri.”',
      motive: 'Perseteruan publik panjang dengan Wim soal legenda palsu.',
      alibi: 'Mengisi diskusi publik tersiar langsung di kota saat kejadian.',
      interrogation: [
        { q: 'Kau berseteru dengan Wim?', a: 'Di publik, ya — aku menyebut legendanya hoaks. Tapi aku ingin ia mengakuinya hidup-hidup. Kematian justru mengubur kebenaran yang kukejar.' },
        { q: 'Di mana kau saat kejadian?', a: 'Mengisi diskusi di kota, disiarkan langsung sampai lewat jam sepuluh. Ratusan orang dan rekaman jadi saksiku.', requires: 'ceramah' },
        { q: 'Benarkah pendiri loji seorang Nazi?', a: 'Sama sekali tidak. Ia administratur kebun teh biasa. Dan Hitler mati di Berlin, 1945 — itu fakta, bukan selera.', requires: 'dosier' },
      ],
    },
    {
      id: 'tobi', init: 'TP', name: 'Tobias "Tobi" Pohl', age: 60,
      role: 'Pengklaim ahli waris & pemburu "harta Nazi"',
      statement: '“Aku cuma menuntut hakku. Loji itu, dan apa pun di bawahnya, milik darahku.”',
      motive: 'Bersengketa soal warisan loji dan rumor emas Nazi.',
      alibi: 'Turun gunung sebelum kabut; tercatat di warung bawah.',
      interrogation: [
        { q: 'Apa tuntutanmu pada Wim?', a: 'Loji itu warisan darahku, begitu pula apa pun yang terkubur di bawahnya. Wim menyerobot semuanya.' },
        { q: 'Soal "harta Nazi" itu?', a: 'Aku punya petanya! ...yang ternyata, kata kalian, palsu. Kalau emas itu tak ada, untuk apa aku membunuhnya? Aku malah buntung.', requires: 'peta' },
        { q: 'Di mana kau malam itu?', a: 'Aku ngotot sore hari, lalu turun sebelum kabut. Tanya warung di bawah — aku menggerutu di sana sampai malam.' },
      ],
    },
    {
      id: 'marwan', init: 'MW', name: 'Marwan', age: 45,
      role: 'Juru kunci & pemandu loji (20 tahun)',
      statement: '“Saya jaga loji ini sejak muda. Apa pun ceritanya, dari sinilah nasi saya.”',
      motive: 'Ikut membuat & menjual "relik" demi tambahan; takut terbongkar.',
      alibi: 'Mengunci museum dan berkeliling memeriksa loji bawah saat kejadian.',
      interrogation: [
        { q: 'Di mana kau saat kejadian?', a: 'Mengunci museum, lalu keliling memeriksa loji bawah dan kandang. Saya tak naik ke menara malam itu.' },
        { q: 'Siapa yang naik ke menara bersama Wim?', a: 'Cuma Pak Daniel. Saya yang membukakan pintu menara untuk mereka berdua, lalu turun. Tak ada orang lain.' },
        { q: 'Kau tahu relik museum itu palsu?', a: 'Saya yang membantu "merapikan" koleksi — tambahan buat dapur. Tapi memalsukan medali beda jauh dengan membunuh tuan saya.', requires: 'relik' },
      ],
    },
    {
      id: 'lestari', init: 'DL', name: 'Dr. Lestari', age: 50,
      role: 'Dokter pribadi keluarga',
      statement: '“Saya menulis apa yang saya lihat: orang tua, tangga, kabut. Mungkin terlalu cepat.”',
      motive: 'Buru-buru menyatakan "kecelakaan"; kliniknya terlilit utang, dan Wim tahu kasus lamanya.',
      alibi: 'Baru dipanggil ke loji subuh setelah jasad ditemukan.',
      interrogation: [
        { q: 'Kenapa kau cepat menyebut "kecelakaan"?', a: 'Kabut, usia, tangga... rasanya jelas. Mungkin saya terlalu lekas, tak memeriksa belakang kepalanya dengan teliti.' },
        { q: 'Hubunganmu dengan Wim?', a: 'Pasien lama. Ya, ia tahu satu kasus lama saya. Tapi kalau saya ingin ia bungkam, kenapa baru sekarang — di malam ia justru hendak bicara soal lain?' },
        { q: 'Di mana kau saat kejadian?', a: 'Di rumah, di kota. Saya baru dipanggil subuh, setelah jasadnya ditemukan. Cek jam panggilan ke ponsel saya.' },
      ],
    },
  ],
  timeline: [
    { t: '20.00', key: false, x: 'Prof. Sari mengisi diskusi publik tersiar langsung di kota (hingga 22.30).' },
    { t: '~20.30', key: false, x: 'Tobi ribut menuntut "harta Nazi", lalu turun gunung sebelum kabut.' },
    { t: '23.00', key: true, x: 'Wawancara "eksklusif" di ruang menara; hanya Daniel menemani Wim naik.' },
    { t: '~23.30', key: true, x: 'Wim dipukul dengan patung perunggu, lalu direbahkan di kaki menara; kabut menelan segalanya.' },
    { t: '05.30', key: false, x: 'Jasad ditemukan; Dr. Lestari menyebut "terpeleset di tangga".' },
  ],
  solution: {
    killer: 'daniel',
    motive: ['pengakuan', 'kontrak'],
    means: ['patung'],
    opportunity: ['jadwal'],
  },
  reveal: {
    killerName: 'Daniel Hartono',
    sections: [
      { h: 'Pelakunya: Daniel Hartono', p: [
        'Opa Wim tidak terpeleset. Ia dipukul dengan patung perunggu pendiri loji, lalu direbahkan di kaki menara agar tampak jatuh dalam kabut.',
        'Luka tunggal di belakang kepalanya tak cocok dengan orang menggelinding di tangga; tongkat dan kacamatanya pun tergeletak terlalu rapi. Patung itu ditemukan terlap bersih, masih bernoda darahnya. Dan malam itu hanya satu orang yang naik ke menara bersama Wim — Daniel, seperti dicatat jadwal dan dibukakan pintunya oleh Marwan.',
      ] },
      { h: 'Legenda yang palsu', p: [
        'Tak pernah ada Nazi di Garut. Seragam dan medali di museum cuma reproduksi modern; pendiri loji hanyalah administratur kebun teh biasa yang wafat 1951; dan Hitler tewas di Berlin pada 1945. Seluruh "legenda Hitler dari Garut" adalah dagangan — diproduksi untuk menghidupi loji, tur, dan sebuah film.',
      ] },
      { h: 'Membunuh demi kebohongan', p: [
        'Sakit dan menyesal, Wim menyiapkan pengakuan untuk dibacakan di depan kamera: bahwa semuanya rekayasa. Bagi Daniel, pengakuan itu berarti filmnya tak berharga, dana investor berubah jadi perkara penipuan, dan reputasinya hancur. Ia membunuh bukan untuk menutup rahasia Nazi — tapi untuk menjaga kebohongan tetap hidup, lalu berniat menjual kematian Wim sebagai misteri pamungkas filmnya.',
      ] },
      { h: 'Jebakan: legenda sebagai tameng', p: [
        'Kematian di "loji Nazi" sengaja dibiarkan berbau konspirasi — seolah Wim "dibungkam karena tahu terlalu banyak" — agar curiga mengarah ke pemburu harta dan pembongkar sejarah. Padahal tak ada Nazi, tak ada emas; hanya kabut, dan uang film.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Prof. Sari disiarkan langsung di kota saat kejadian, dan justru ingin Wim hidup untuk mengaku. Tobi turun gunung sebelum kabut, dan "harta"-nya fiktif — ia rugi bila Wim mati. Renata menjamu tamu, dan ia sendiri ingin berhenti berbohong. Marwan memalsukan relik tapi tak naik menara — ia malah saksi bahwa hanya Daniel yang naik. Dr. Lestari baru tiba subuh, dan membungkam Wim tak masuk akal di malam ia bicara soal yang lain.',
        'Tiga unsur bertemu pada satu orang: motif (pengakuan yang menghancurkan filmnya), cara (patung perunggu menara), dan kesempatan (wawancara berdua di menara). Itu Daniel.',
      ] },
    ],
    rebuttals: {
      renata: 'Renata hidup dari legenda, tapi ia justru lelah berbohong dan ingin menutup "tur Nazi" itu — pengakuan kakeknya melegakannya, bukan mengancamnya. Sepanjang malam ia menjamu tamu di bangunan utama.',
      sari: 'Saat kejadian, Prof. Sari mengisi diskusi yang disiarkan langsung di kota, disaksikan ratusan orang. Ia ingin Wim mengakui hoaks itu hidup-hidup; kematiannya justru mengubur kebenaran yang ia kejar.',
      tobi: 'Peta "harta Nazi" Tobi palsu — tak ada emas untuk diperebutkan, dan ia rugi bila Wim mati. Lagipula ia sudah turun gunung sebelum kabut, tercatat di warung bawah.',
      marwan: 'Marwan memang ikut memalsukan relik demi tambahan — dosa kecil, bukan pembunuhan. Ia mengunci museum dan berkeliling loji bawah, tak pernah naik ke menara; justru ia yang melihat hanya Daniel naik bersama Wim.',
      lestari: 'Dr. Lestari terlalu cepat menyebut "kecelakaan", mungkin lalai. Tapi ia baru tiba subuh setelah jasad ditemukan; dan membungkam Wim soal kasus lamanya tak masuk akal justru di malam Wim hendak bicara soal yang sama sekali berbeda.',
    },
  },
}
