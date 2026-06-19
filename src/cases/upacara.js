// Case 7 (gated). Original fictionalisation inspired by Malaysia's Mona
// Fandey case (1993). UNIQUE: the case text is written in Bahasa Malaysia
// (a variation from the Indonesian of the other cases). Multi-killer:
// a celebrity bomoh + her husband + an assistant conspired.
export const upacara = {
  id: 'upacara',
  free: false,
  difficulty: 'Sulit',
  code: 'BU-0793',
  location: 'Kampung Sungai Tok, Pahang',
  scene: 'highland',
  lang: 'ms',
  title: 'Maut di Bilik Upacara',
  blurb:
    'Seorang ahli politik yang dahagakan kuasa hilang selepas menemui bomoh selebriti. Yang tinggal hanyalah harta yang berpindah tangan.',
  disclaimer: {
    text: 'Kisah ini fiksyen, diilhamkan daripada kes jenayah sebenar Mona Fandey di Malaysia (1993). Demi menghormati mangsa sebenar, semua watak, nama, tempat dan peristiwa di sini adalah rekaan; sebarang persamaan dengan orang atau kejadian sebenar tidak disengajakan. (Catatan: teks kes ini ditulis dalam Bahasa Malaysia sebagai variasi.)',
    source: {
      label: 'Diilhamkan daripada: kes "Mona Fandey" (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Mona_Fandey',
    },
  },
  cover: {
    lead: 'Seorang wakil rakyat yang taasub pada kuasa pergi menemui bomoh untuk sebuah tangkal — lalu lenyap. Mayatnya, dan kebenarannya, ditanam dalam senyap.',
  },
  briefing: {
    paras: [
      'Datuk Rahim, seorang wakil rakyat negeri, mengimpikan kerusi Menteri Besar. Dia menemui "Mama Su", bekas penyanyi yang kini bomoh selebriti, untuk sebuah tangkal kuasa yang dikatakan menjamin kemenangan.',
      'Pada suatu malam Julai, Datuk Rahim masuk ke rumah Mama Su untuk satu upacara — dan tidak pernah keluar. Mula-mula disangka melarikan diri dengan wang rakyat. Tetapi pembantunya perasan ratusan ribu ringgit dikeluarkan dari bank Datuk sebelum dia hilang.',
      'Tidak lama kemudian, mayatnya ditemui ditanam di bawah simen di rumah bomoh itu. Polis hampir menutup kes sebagai angkara seorang bomoh gila. Keluarga Datuk memanggil anda — kerana satu tangan sahaja tidak mungkin menyiapkan semua ini.',
    ],
    taskTitle: 'Tugas Anda',
    task: 'Periksa setiap bukti. Soal siasat keenam-enam orang yang terdekat. Kemudian susun pembuktian dan ajukan tuduhan — ingat, pembunuhnya mungkin lebih daripada seorang.',
  },
  victim: {
    init: 'RH',
    name: 'Datuk Rahim',
    meta: '49 tahun · wakil rakyat negeri',
    paras: [
      'Ahli politik yang bercita-cita tinggi dan taasub pada azimat serta bomoh. Dia percaya kuasa ghaib boleh mengangkatnya ke kerusi Menteri Besar — kepercayaan yang menelan harta dan akhirnya nyawanya.',
      'Kali terakhir dilihat masuk ke rumah Mama Su untuk satu upacara tengah malam. Mayatnya ditemui ditanam di bawah simen di bilik stor rumah itu, hampir tiga minggu kemudian.',
    ],
  },
  evidence: [
    {
      id: 'tangkal', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Tangkal kuasa yang dipesan',
      summary: 'Datuk Rahim mahukan azimat untuk jadi Menteri Besar.',
      herring: true,
      detail:
        'Datuk Rahim memesan sebuah "tangkal kuasa" daripada Mama Su, konon menjamin kerusi Menteri Besar. Bayang-bayang ilmu hitam membuat ramai menyangka ini upacara yang tersilap atau sumpahan ghaib — sekali gus mengaburkan perkara sebenar: satu pembunuhan yang dirancang demi harta.',
    },
    {
      id: 'harta', icon: 'doc', tag: 'Dokumen',
      title: 'Pemindahan harta Datuk Rahim',
      summary: 'Wang tunai besar & geran tanah berpindah kepada bomoh.',
      detail:
        'Sebelum hilang, Datuk Rahim memindahkan wang tunai dalam jumlah besar dan beberapa geran tanah sebagai "bayaran khidmat" kepada Mama Su. Inilah motifnya: bukan sihir, tetapi harta. Selepas dia mati, semua itu kekal di tangan bomoh dan suaminya.',
    },
    {
      id: 'belanja', icon: 'ledger', tag: 'Dokumen',
      title: 'Belanja mewah selepas kejadian',
      summary: 'Kereta mewah, emas, pembedahan — sebaik Datuk hilang.',
      detail:
        'Beberapa hari selepas Datuk Rahim hilang, Mama Su membeli sebuah kereta Mercedes, barang kemas bernilai puluhan ribu, dan menjalani pembedahan kosmetik. Bagi seorang bomoh kampung, kemewahan mendadak ini muncul tepat selepas hartanya berpindah.',
    },
    {
      id: 'masuk', icon: 'cctv', tag: 'Saksi',
      title: 'Datuk masuk, tak pernah keluar',
      summary: 'Dilihat masuk rumah bomoh; tiada saksi melihatnya pulang.',
      detail:
        'Beberapa penduduk kampung melihat kereta Datuk Rahim tiba dan dia masuk ke rumah Mama Su untuk upacara malam itu. Tiada seorang pun melihatnya keluar. Apa sahaja yang berlaku, berlaku di dalam rumah itu — di kalangan penghuninya.',
    },
    {
      id: 'ritual', icon: 'recon', tag: 'Rekonstruksi',
      title: 'Aturan upacara',
      summary: 'Disuruh baring, bunga di dahi, "menunggu suara".',
      detail:
        'Mengikut keterangan, dalam upacara itu Datuk Rahim disuruh berbaring di sebuah bilik bercahaya lilin, sekuntum bunga diletak di dahinya, dan diminta memejam mata "menunggu suara ghaib". Aturan ini bukan pemujaan — ia perangkap: cara melumpuhkan mangsa sebelum dibunuh.',
    },
    {
      id: 'mayat', icon: 'forensics', tag: 'Lab Forensik',
      title: 'Mayat di bawah simen',
      summary: 'Ditanam di bilik stor rumah bomoh; luka pelbagai.',
      detail:
        'Mayat Datuk Rahim ditemui ditanam di bawah simen baharu di bilik stor rumah Mama Su. Kerja menyembunyikannya — menggali, mengangkat, menyimen — mustahil dilakukan seorang diri dalam satu malam. Sekurang-kurangnya beberapa tangan terlibat.',
    },
    {
      id: 'alat', icon: 'evidence', tag: 'Barang Bukti',
      title: 'Alat & kesan pada pembantu',
      summary: 'Cangkul & kesan simen pada pembantu, Sani.',
      detail:
        'Cangkul dan acuan simen di stor menunjukkan kesan penggunaan baharu. Kesan simen dan tanah turut ditemui pada pakaian dan kasut Sani, orang suruhan rumah itu — orang yang melakukan kerja berat malam itu.',
    },
    {
      id: 'sidang', icon: 'metadata', tag: 'Rekod',
      title: 'Persidangan parti di KL',
      summary: 'Datuk Faizal berucap di KL pada malam kejadian.',
      detail:
        'Rakaman dan rekod persidangan parti menunjukkan Datuk Faizal — pesaing politik Rahim — sedang berucap di Kuala Lumpur pada malam kejadian, di hadapan ratusan orang. Dia tidak mungkin berada di kampung itu.',
    },
    {
      id: 'lapor', icon: 'phone', tag: 'Dokumen',
      title: 'Laporan & jejak bank',
      summary: 'Pembantu Borhan yang membongkar pengeluaran wang.',
      detail:
        'Borhan, pembantu Datuk, yang mula-mula perasan pengeluaran wang tunai yang besar dan ganjil, lalu mendesak polis menyiasat. Tindakannya itulah yang membuka kes ini — bukan tindakan seorang yang ingin menyembunyikan jenayah.',
    },
    {
      id: 'pakatan', icon: 'photo', tag: 'Temuan Tersembunyi',
      title: 'Pembahagian hasil',
      summary: 'Rekod tersembunyi: hasil dibahagi tiga.',
      locked: true, twist: true,
      detail:
        'Tersembunyi di rumah itu: catatan dan resit yang menunjukkan hasil rampasan dibahagi tiga — bahagian besar untuk Mama Su dan suaminya Khalid, dan habuan kecil untuk pembantu Sani. Bukti hitam putih bahawa ini bukan angkara seorang, tetapi pakatan tiga orang.',
    },
  ],
  suspects: [
    {
      id: 'su', init: 'MS', name: 'Mama Su', age: 41,
      role: 'Bekas penyanyi, kini bomoh selebriti',
      statement: '“Saya cuma bomoh. Datuk datang minta tangkal, lepas tu dia balik. Saya tak tahu apa-apa selepas itu.”',
      motive: 'Harta dan geran tanah Datuk Rahim berpindah kepadanya.',
      alibi: 'Mendakwa Datuk pulang selepas upacara.',
      interrogation: [
        { q: 'Apa yang Datuk Rahim minta daripada awak?', a: 'Tangkal kuasa. Katanya nak jadi Menteri Besar. Saya beri pendinding, dia bayar. Urusan biasa bomoh.' },
        { q: 'Dari mana wang untuk Mercedes dan emas baharu awak?', a: 'Rezeki bomoh, encik. Pelanggan saya ramai orang besar. Jangan kaitkan dengan dia.', requires: 'belanja' },
        { q: 'Kenapa mayat Datuk ada di bawah simen rumah awak?', a: 'Itu... itu fitnah. Saya tak tahu macam mana ia sampai ke situ. Tanya orang gaji saya, Sani.', requires: 'mayat' },
      ],
    },
    {
      id: 'khalid', init: 'EK', name: 'Encik Khalid', age: 47,
      role: 'Suami & pengurus temujanji Mama Su',
      statement: '“Saya cuma uruskan temujanji isteri saya. Saya bukan bomoh, bukan pembunuh.”',
      motive: 'Mengendalikan kewangan dan menjadi otak di sebalik tabir.',
      alibi: 'Mendakwa berada di rumah “menjaga upacara” sepanjang malam.',
      interrogation: [
        { q: 'Apa peranan awak dalam upacara itu?', a: 'Saya cuma sediakan bilik, lilin, bunga. Selebihnya kerja isteri saya.' },
        { q: 'Siapa atur pemindahan harta Datuk Rahim?', a: 'Saya... uruskan dokumennya, ya. Tapi itu bayaran sah untuk khidmat. Sah di sisi undang-undang.', requires: 'harta' },
        { q: 'Awak arahkan Sani buat sesuatu malam itu?', a: 'Tidak! Sani buat sendiri. Saya... saya tak nak cakap apa-apa lagi.' },
      ],
    },
    {
      id: 'sani', init: 'SN', name: 'Sani', age: 33,
      role: 'Orang suruhan / pembantu rumah',
      statement: '“Saya cuma ikut arahan tuan dan puan. Saya tak ada pilihan.”',
      motive: 'Melakukan kerja kotor dan menyembunyikan mayat; dapat habuan.',
      alibi: 'Berada di rumah bomoh malam itu.',
      interrogation: [
        { q: 'Apa kerja awak di rumah bomoh itu?', a: 'Kemas, gali, angkat. Malam itu mereka suruh saya "uruskan" Datuk selepas upacara. Saya cuma ikut arahan.' },
        { q: 'Awak yang sembunyikan mayat?', a: 'Saya yang kambus dengan simen, ya — tapi bukan idea saya! Puan yang rancang, Encik Khalid yang arah. Kami bertiga.', requires: 'mayat', unlocks: 'pakatan' },
        { q: 'Awak dapat apa daripada semua ini?', a: 'Sikit sahaja. Habuan kecil. Mereka berdua dapat kereta dan emas. Saya cuma dapat rasa takut.' },
      ],
    },
    {
      id: 'faizal', init: 'DF', name: 'Datuk Faizal', age: 52,
      role: 'Pesaing politik Datuk Rahim',
      statement: '“Saya memang lawan dia untuk kerusi MB. Tapi saya nak kalahkan dia dengan undi, bukan dengan bomoh.”',
      motive: 'Bersaing merebut kerusi Menteri Besar.',
      alibi: 'Berucap di persidangan parti di Kuala Lumpur.',
      interrogation: [
        { q: 'Awak bersaing dengan Rahim?', a: 'Sengit, ya. Tapi politik bukan pembunuhan. Saya nak kalahkan dia di pilihan raya, bukan menanamnya.' },
        { q: 'Di mana awak malam Rahim hilang?', a: 'Di persidangan parti di KL, depan ratusan orang dan kamera. Boleh semak rakamannya.', requires: 'sidang' },
        { q: 'Awak percaya bomoh?', a: 'Saya percaya kotak undi. Rahim yang percaya tangkal — dan itu yang membunuhnya.' },
      ],
    },
    {
      id: 'rosna', init: 'RN', name: 'Datin Rosna', age: 45,
      role: 'Isteri Datuk Rahim',
      statement: '“Suami saya kerahkan harta kami kepada perempuan bomoh itu. Saya kehilangan dia dan harta sekali gus.”',
      motive: 'Isteri yang mungkin cemburu atau mengincar harta.',
      alibi: 'Yang membuat laporan polis kehilangan suaminya.',
      interrogation: [
        { q: 'Bagaimana perkahwinan awak dengan Rahim?', a: 'Renggang. Dia taasub pada kuasa dan bomoh. Tapi saya tunggu dia pulang — sehingga saya sendiri buat laporan polis.' },
        { q: 'Awak mewarisi hartanya?', a: 'Tak sesen pun. Semua dia pindahkan kepada bomoh itu sebelum hilang. Kalau saya bunuh dia, saya cuma jadi papa.', requires: 'harta' },
        { q: 'Awak tahu tentang upacara itu?', a: 'Saya merayu dia berhenti. Dia tak dengar. Saya cuma mampu menunggu.' },
      ],
    },
    {
      id: 'borhan', init: 'BN', name: 'Borhan', age: 38,
      role: 'Pembantu peribadi Datuk Rahim',
      statement: '“Saya yang perasan duit besar keluar dari banknya, dan saya yang desak polis siasat.”',
      motive: 'Mengetahui rahsia kewangan Datuk.',
      alibi: 'Yang membongkar jejak pengeluaran wang Rahim.',
      interrogation: [
        { q: 'Apa yang awak perasan tentang kewangan Datuk?', a: 'Dia keluarkan wang tunai dalam jumlah besar sebelum hilang. Saya tahu ada yang tak kena — saya yang mendesak polis menyiasat.' },
        { q: 'Di mana awak malam kejadian?', a: 'Di pejabat DUN menyiapkan ucapan Datuk untuk esok — ucapan yang tak pernah dibaca. Ada kakitangan lain bersama saya.' },
        { q: 'Awak syak siapa?', a: 'Perempuan bomoh itu. Sejak Datuk jumpa dia, segalanya berubah.', requires: 'belanja' },
      ],
    },
  ],
  timeline: [
    { t: 'Malam kejadian', key: true, x: 'Datuk Rahim masuk ke rumah Mama Su untuk upacara; tiada siapa melihatnya keluar.' },
    { t: 'Sebelum itu', key: false, x: 'Datuk mengeluarkan wang tunai besar dan memindahkan geran tanah kepada bomoh.' },
    { t: 'Semasa upacara', key: true, x: 'Rahim disuruh berbaring "menunggu suara"; ketika itulah dia dibunuh.' },
    { t: 'Lewat malam', key: true, x: 'Mayat ditanam di bawah simen di bilik stor — kerja beberapa tangan.' },
    { t: 'Hari-hari berikut', key: false, x: 'Mama Su membeli kereta mewah, emas, dan menjalani pembedahan.' },
    { t: '~3 minggu', key: false, x: 'Borhan mendesak siasatan; mayat ditemui.' },
  ],
  solution: {
    killers: ['su', 'khalid', 'sani'],
    motive: ['harta'],
    means: ['ritual', 'alat'],
    opportunity: ['mayat', 'masuk'],
  },
  reveal: {
    sections: [
      { h: 'Pelakunya: bukan seorang', p: [
        'Datuk Rahim tidak mati kerana sumpahan. Dia dibunuh demi harta, dalam satu pakatan tiga orang: Mama Su, suaminya Encik Khalid, dan pembantu mereka Sani.',
        'Upacara itu hanyalah perangkap. Rahim disuruh berbaring "menunggu suara ghaib" — dan ketika dia lemah, dia dibunuh. Menggali, mengangkat dan menyimen mayat dalam satu malam mustahil kerja seorang. Sekurang-kurangnya tiga tangan terlibat.',
      ] },
      { h: 'Sihir yang palsu, harta yang nyata', p: [
        'Tabir ilmu hitam mengaburkan perkara sebenar. Yang nyata bukan tangkal, tetapi wang tunai dan geran tanah yang dipindahkan Rahim kepada Mama Su sebelum hilang — lalu kemewahan mendadak: kereta Mercedes, emas, pembedahan, sebaik dia mati. Motifnya bukan kuasa ghaib; ia tamak.',
      ] },
      { h: 'Tiga tangan, satu pakatan', p: [
        'Mama Su merancang dan menjadi daya tarikan; Encik Khalid menguruskan dokumen harta dan mengarahkan; Sani melakukan kerja berat dan menyembunyikan mayat di bawah simen. Catatan pembahagian hasil — bahagian besar untuk pasangan itu, habuan kecil untuk Sani — mengikat ketiga-tiganya.',
      ] },
      { h: 'Mengapa bukan yang lain', p: [
        'Datuk Faizal, pesaing politik, sedang berucap di persidangan di KL malam itu — terakam di hadapan ratusan orang. Datin Rosna tidak mewarisi satu sen pun; hartanya jatuh ke tangan bomoh, jadi kematian suaminya merugikannya. Borhan, pembantu Datuk, justru yang membongkar pengeluaran wang dan mendesak siasatan — pelaku akan menutupnya, bukan membukanya.',
        'Tiga unsur bertemu bukan pada seorang, tetapi tiga: motif (harta yang berpindah), cara (perangkap upacara), dan kesempatan (mayat di rumah mereka sendiri). Mereka melakukannya bersama.',
      ] },
    ],
    rebuttals: {
      faizal: 'Datuk Faizal bersaing sengit untuk kerusi MB, tetapi pada malam kejadian dia berucap di persidangan parti di KL, terakam di hadapan ratusan saksi. Persaingan politik bukan tangan yang membunuh.',
      rosna: 'Datin Rosna tampak punya sebab, tetapi dia tidak mewarisi apa-apa — seluruh harta dipindahkan kepada bomoh sebelum Rahim hilang. Kematian suaminya menjadikannya papa, bukan kaya. Dan dialah yang membuat laporan polis.',
      borhan: 'Borhan pembantu yang tahu rahsia kewangan Datuk — tetapi dialah yang mula-mula membongkar pengeluaran wang ganjil dan mendesak polis menyiasat. Pelaku menyembunyikan jejak, bukan menyalakannya.',
    },
  },
}
