import { L } from '../i18n/L'

// Case 7 (gated). Original fictionalisation inspired by Malaysia's Mona
// Fandey case (1993). UNIQUE: the case text is written in Bahasa Malaysia
// (a variation from the Indonesian of the other cases). Multi-killer:
// a celebrity bomoh + her husband + an assistant conspired.
export const upacara = {
  id: 'upacara',
  free: false,
  difficulty: 'Sulit',
  code: 'BU-0793',
  location: L('Kampung Sungai Tok, Pahang', 'Kampung Sungai Tok, Pahang'),
  scene: 'highland',
  lang: 'ms',
  title: L('Maut di Bilik Upacara', 'Death in the Ritual Room'),
  blurb: L(
    'Seorang ahli politik yang dahagakan kuasa hilang selepas menemui bomoh selebriti. Yang tinggal hanyalah harta yang berpindah tangan.',
    'A power-hungry politician vanishes after a visit to a celebrity shaman. All that remains is a fortune that has changed hands.'
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksyen, diilhamkan daripada kes jenayah sebenar Mona Fandey di Malaysia (1993). Demi menghormati mangsa sebenar, semua watak, nama, tempat dan peristiwa di sini adalah rekaan; sebarang persamaan dengan orang atau kejadian sebenar tidak disengajakan. (Catatan: teks kes ini ditulis dalam Bahasa Malaysia sebagai variasi.)',
      'This story is fiction, inspired by the real-life criminal case of Mona Fandey in Malaysia (1993). Out of respect for the real victims, all characters, names, places, and events here are invented; any resemblance to actual persons or events is unintentional. (Note: the text of this case is written in Bahasa Malaysia as a variation.)'
    ),
    source: {
      label: L('Diilhamkan daripada: kes "Mona Fandey" (Wikipedia)', 'Inspired by: the "Mona Fandey" case (Wikipedia)'),
      url: 'https://en.wikipedia.org/wiki/Mona_Fandey',
    },
  },
  cover: {
    lead: L(
      'Seorang wakil rakyat yang taasub pada kuasa pergi menemui bomoh untuk sebuah tangkal — lalu lenyap. Mayatnya, dan kebenarannya, ditanam dalam senyap.',
      'A people\'s representative obsessed with power goes to a shaman for a charm — then disappears. His body, and the truth, are buried in silence.'
    ),
  },
  briefing: {
    paras: [
      L(
        'Datuk Rahim, seorang wakil rakyat negeri, mengimpikan kerusi Menteri Besar. Dia menemui "Mama Su", bekas penyanyi yang kini bomoh selebriti, untuk sebuah tangkal kuasa yang dikatakan menjamin kemenangan.',
        'Datuk Rahim, a state assemblyman, dreamed of the Chief Minister\'s seat. He sought out "Mama Su" — a former singer turned celebrity shaman — for a charm of power said to guarantee victory.'
      ),
      L(
        'Pada suatu malam Julai, Datuk Rahim masuk ke rumah Mama Su untuk satu upacara — dan tidak pernah keluar. Mula-mula disangka melarikan diri dengan wang rakyat. Tetapi pembantunya perasan ratusan ribu ringgit dikeluarkan dari bank Datuk sebelum dia hilang.',
        'One night in July, Datuk Rahim entered Mama Su\'s house for a ritual — and never came out. At first it was assumed he had fled with the people\'s money. But his aide noticed that hundreds of thousands of ringgit had been withdrawn from the Datuk\'s bank before he vanished.'
      ),
      L(
        'Tidak lama kemudian, mayatnya ditemui ditanam di bawah simen di rumah bomoh itu. Polis hampir menutup kes sebagai angkara seorang bomoh gila. Keluarga Datuk memanggil anda — kerana satu tangan sahaja tidak mungkin menyiapkan semua ini.',
        'Not long after, his body was found buried beneath the concrete in the shaman\'s house. The police nearly closed the case as the work of a single, deranged shaman. The Datuk\'s family has called you in — because no single pair of hands could have done all of this alone.'
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Soal siasat keenam-enam orang yang terdekat. Kemudian susun pembuktian dan ajukan tuduhan — ingat, pembunuhnya mungkin lebih daripada seorang.',
      'Examine every piece of evidence. Question all six of those closest to him. Then build your case and make an accusation — remember, the killer may be more than one person.'
    ),
  },
  victim: {
    init: 'RH',
    name: 'Datuk Rahim',
    meta: L('49 tahun · wakil rakyat negeri', '49 · state assemblyman'),
    paras: [
      L(
        'Ahli politik yang bercita-cita tinggi dan taasub pada azimat serta bomoh. Dia percaya kuasa ghaib boleh mengangkatnya ke kerusi Menteri Besar — kepercayaan yang menelan harta dan akhirnya nyawanya.',
        'An ambitious politician obsessed with talismans and shamans. He believed occult power could lift him to the Chief Minister\'s seat — a belief that devoured his fortune and, in the end, his life.'
      ),
      L(
        'Kali terakhir dilihat masuk ke rumah Mama Su untuk satu upacara tengah malam. Mayatnya ditemui ditanam di bawah simen di bilik stor rumah itu, hampir tiga minggu kemudian.',
        'He was last seen entering Mama Su\'s house for a midnight ritual. His body was found buried beneath the concrete in the storeroom of that house, nearly three weeks later.'
      ),
    ],
  },
  evidence: [
    {
      id: 'tangkal', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Tangkal kuasa yang dipesan', 'The charm of power he ordered'),
      summary: L('Datuk Rahim mahukan azimat untuk jadi Menteri Besar.', 'Datuk Rahim wanted a talisman to become Chief Minister.'),
      herring: true,
      detail: L(
        'Datuk Rahim memesan sebuah "tangkal kuasa" daripada Mama Su, konon menjamin kerusi Menteri Besar. Bayang-bayang ilmu hitam membuat ramai menyangka ini upacara yang tersilap atau sumpahan ghaib — sekali gus mengaburkan perkara sebenar: satu pembunuhan yang dirancang demi harta.',
        'Datuk Rahim ordered a "charm of power" from Mama Su, supposedly guaranteeing the Chief Minister\'s seat. The shadow of black magic led many to suspect a ritual gone wrong or an occult curse — and in doing so it obscured the real matter: a murder planned for the sake of a fortune.'
      ),
    },
    {
      id: 'harta', icon: 'doc', tag: L('Dokumen', 'Documents'),
      title: L('Pemindahan harta Datuk Rahim', 'The transfer of Datuk Rahim\'s wealth'),
      summary: L('Wang tunai besar & geran tanah berpindah kepada bomoh.', 'Large cash sums and land titles passed to the shaman.'),
      detail: L(
        'Sebelum hilang, Datuk Rahim memindahkan wang tunai dalam jumlah besar dan beberapa geran tanah sebagai "bayaran khidmat" kepada Mama Su. Inilah motifnya: bukan sihir, tetapi harta. Selepas dia mati, semua itu kekal di tangan bomoh dan suaminya.',
        'Before he vanished, Datuk Rahim transferred large sums of cash and several land titles to Mama Su as "payment for services." Here is the motive: not sorcery, but wealth. After his death, all of it remained in the hands of the shaman and her husband.'
      ),
    },
    {
      id: 'belanja', icon: 'ledger', tag: L('Dokumen', 'Documents'),
      title: L('Belanja mewah selepas kejadian', 'A lavish spending spree after the fact'),
      summary: L('Kereta mewah, emas, pembedahan — sebaik Datuk hilang.', 'A luxury car, gold, surgery — right after the Datuk vanished.'),
      detail: L(
        'Beberapa hari selepas Datuk Rahim hilang, Mama Su membeli sebuah kereta Mercedes, barang kemas bernilai puluhan ribu, dan menjalani pembedahan kosmetik. Bagi seorang bomoh kampung, kemewahan mendadak ini muncul tepat selepas hartanya berpindah.',
        'A few days after Datuk Rahim disappeared, Mama Su bought a Mercedes, jewellery worth tens of thousands, and underwent cosmetic surgery. For a village shaman, this sudden extravagance appeared precisely after his fortune had changed hands.'
      ),
    },
    {
      id: 'masuk', icon: 'cctv', tag: L('Saksi', 'Witness'),
      title: L('Datuk masuk, tak pernah keluar', 'The Datuk went in, and never came out'),
      summary: L('Dilihat masuk rumah bomoh; tiada saksi melihatnya pulang.', 'Seen entering the shaman\'s house; no witness saw him leave.'),
      detail: L(
        'Beberapa penduduk kampung melihat kereta Datuk Rahim tiba dan dia masuk ke rumah Mama Su untuk upacara malam itu. Tiada seorang pun melihatnya keluar. Apa sahaja yang berlaku, berlaku di dalam rumah itu — di kalangan penghuninya.',
        'Several villagers saw Datuk Rahim\'s car arrive and watched him enter Mama Su\'s house for the ritual that night. Not one of them saw him leave. Whatever happened, happened inside that house — among those who lived there.'
      ),
    },
    {
      id: 'ritual', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Aturan upacara', 'The order of the ritual'),
      summary: L('Disuruh baring, bunga di dahi, "menunggu suara".', 'Made to lie down, a flower on his brow, "awaiting a voice."'),
      detail: L(
        'Mengikut keterangan, dalam upacara itu Datuk Rahim disuruh berbaring di sebuah bilik bercahaya lilin, sekuntum bunga diletak di dahinya, dan diminta memejam mata "menunggu suara ghaib". Aturan ini bukan pemujaan — ia perangkap: cara melumpuhkan mangsa sebelum dibunuh.',
        'According to testimony, during the ritual Datuk Rahim was made to lie down in a candlelit room, a single flower placed on his brow, and told to close his eyes and "await the unseen voice." This was no act of worship — it was a trap: a way to render the victim helpless before he was killed.'
      ),
    },
    {
      id: 'mayat', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Mayat di bawah simen', 'The body beneath the concrete'),
      summary: L('Ditanam di bilik stor rumah bomoh; luka pelbagai.', 'Buried in the shaman\'s storeroom; multiple wounds.'),
      detail: L(
        'Mayat Datuk Rahim ditemui ditanam di bawah simen baharu di bilik stor rumah Mama Su. Kerja menyembunyikannya — menggali, mengangkat, menyimen — mustahil dilakukan seorang diri dalam satu malam. Sekurang-kurangnya beberapa tangan terlibat.',
        'Datuk Rahim\'s body was found buried beneath fresh concrete in the storeroom of Mama Su\'s house. The work of concealing it — digging, lifting, cementing — could not have been done alone in a single night. At least several pairs of hands were involved.'
      ),
    },
    {
      id: 'alat', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Alat & kesan pada pembantu', 'Tools and traces on the servant'),
      summary: L('Cangkul & kesan simen pada pembantu, Sani.', 'A hoe and cement traces on the servant, Sani.'),
      detail: L(
        'Cangkul dan acuan simen di stor menunjukkan kesan penggunaan baharu. Kesan simen dan tanah turut ditemui pada pakaian dan kasut Sani, orang suruhan rumah itu — orang yang melakukan kerja berat malam itu.',
        'A hoe and cement molds in the storeroom showed signs of recent use. Traces of cement and soil were also found on the clothes and shoes of Sani, the household\'s hired hand — the one who did the heavy labor that night.'
      ),
    },
    {
      id: 'sidang', icon: 'metadata', tag: L('Rekod', 'Records'),
      title: L('Persidangan parti di KL', 'The party conference in KL'),
      summary: L('Datuk Faizal berucap di KL pada malam kejadian.', 'Datuk Faizal spoke in KL on the night of the crime.'),
      detail: L(
        'Rakaman dan rekod persidangan parti menunjukkan Datuk Faizal — pesaing politik Rahim — sedang berucap di Kuala Lumpur pada malam kejadian, di hadapan ratusan orang. Dia tidak mungkin berada di kampung itu.',
        'Recordings and records of the party conference show Datuk Faizal — Rahim\'s political rival — giving a speech in Kuala Lumpur on the night of the crime, before hundreds of people. He could not possibly have been in that village.'
      ),
    },
    {
      id: 'lapor', icon: 'phone', tag: L('Dokumen', 'Documents'),
      title: L('Laporan & jejak bank', 'The report and the bank trail'),
      summary: L('Pembantu Borhan yang membongkar pengeluaran wang.', 'The aide Borhan who exposed the cash withdrawals.'),
      detail: L(
        'Borhan, pembantu Datuk, yang mula-mula perasan pengeluaran wang tunai yang besar dan ganjil, lalu mendesak polis menyiasat. Tindakannya itulah yang membuka kes ini — bukan tindakan seorang yang ingin menyembunyikan jenayah.',
        'It was Borhan, the Datuk\'s aide, who first noticed the large and irregular cash withdrawals and then pressed the police to investigate. It was his action that broke this case open — not the action of a man who wished to conceal a crime.'
      ),
    },
    {
      id: 'pakatan', icon: 'photo', tag: L('Temuan Tersembunyi', 'Hidden Discovery'),
      title: L('Pembahagian hasil', 'The division of the spoils'),
      summary: L('Rekod tersembunyi: hasil dibahagi tiga.', 'A hidden record: the spoils split three ways.'),
      locked: true, twist: true,
      detail: L(
        'Tersembunyi di rumah itu: catatan dan resit yang menunjukkan hasil rampasan dibahagi tiga — bahagian besar untuk Mama Su dan suaminya Khalid, dan habuan kecil untuk pembantu Sani. Bukti hitam putih bahawa ini bukan angkara seorang, tetapi pakatan tiga orang.',
        'Hidden in the house: notes and receipts showing the plunder split three ways — the lion\'s share for Mama Su and her husband Khalid, and a small cut for the servant Sani. Proof in black and white that this was not the work of one, but a conspiracy of three.'
      ),
    },
  ],
  suspects: [
    {
      id: 'su', init: 'MS', name: 'Mama Su', age: 41,
      role: L('Bekas penyanyi, kini bomoh selebriti', 'A former singer, now a celebrity shaman'),
      statement: L(
        '“Saya cuma bomoh. Datuk datang minta tangkal, lepas tu dia balik. Saya tak tahu apa-apa selepas itu.”',
        '“I am only a shaman. The Datuk came asking for a charm, and then he went home. I know nothing of what happened after that.”'
      ),
      motive: L('Harta dan geran tanah Datuk Rahim berpindah kepadanya.', 'Datuk Rahim\'s wealth and land titles passed to her.'),
      alibi: L('Mendakwa Datuk pulang selepas upacara.', 'Claims the Datuk went home after the ritual.'),
      interrogation: [
        { q: L('Apa yang Datuk Rahim minta daripada awak?', 'What did Datuk Rahim ask of you?'),
          a: L('Tangkal kuasa. Katanya nak jadi Menteri Besar. Saya beri pendinding, dia bayar. Urusan biasa bomoh.', 'A charm of power. He said he wanted to be Chief Minister. I gave him a ward, he paid. Ordinary shaman\'s business.') },
        { q: L('Dari mana wang untuk Mercedes dan emas baharu awak?', 'Where did the money for your new Mercedes and gold come from?'),
          a: L('Rezeki bomoh, encik. Pelanggan saya ramai orang besar. Jangan kaitkan dengan dia.', 'A shaman\'s fortune, sir. Many of my clients are people of standing. Do not tie it to him.'), requires: 'belanja' },
        { q: L('Kenapa mayat Datuk ada di bawah simen rumah awak?', 'Why was the Datuk\'s body beneath the concrete in your house?'),
          a: L('Itu... itu fitnah. Saya tak tahu macam mana ia sampai ke situ. Tanya orang gaji saya, Sani.', 'That... that is slander. I do not know how it got there. Ask my servant, Sani.'), requires: 'mayat' },
      ],
    },
    {
      id: 'khalid', init: 'EK', name: 'Encik Khalid', age: 47,
      role: L('Suami & pengurus temujanji Mama Su', 'Mama Su\'s husband and appointments manager'),
      statement: L(
        '“Saya cuma uruskan temujanji isteri saya. Saya bukan bomoh, bukan pembunuh.”',
        '“I only manage my wife\'s appointments. I am no shaman, and no killer.”'
      ),
      motive: L('Mengendalikan kewangan dan menjadi otak di sebalik tabir.', 'He handled the finances and was the mastermind behind the curtain.'),
      alibi: L('Mendakwa berada di rumah “menjaga upacara” sepanjang malam.', 'Claims he was at the house "tending the ritual" all night.'),
      interrogation: [
        { q: L('Apa peranan awak dalam upacara itu?', 'What was your role in the ritual?'),
          a: L('Saya cuma sediakan bilik, lilin, bunga. Selebihnya kerja isteri saya.', 'I only prepared the room, the candles, the flowers. The rest was my wife\'s work.') },
        { q: L('Siapa atur pemindahan harta Datuk Rahim?', 'Who arranged the transfer of Datuk Rahim\'s wealth?'),
          a: L('Saya... uruskan dokumennya, ya. Tapi itu bayaran sah untuk khidmat. Sah di sisi undang-undang.', 'I... handled the paperwork, yes. But that was lawful payment for services. Legal in the eyes of the law.'), requires: 'harta' },
        { q: L('Awak arahkan Sani buat sesuatu malam itu?', 'Did you order Sani to do something that night?'),
          a: L('Tidak! Sani buat sendiri. Saya... saya tak nak cakap apa-apa lagi.', 'No! Sani did it on his own. I... I will say nothing more.') },
      ],
    },
    {
      id: 'sani', init: 'SN', name: 'Sani', age: 33,
      role: L('Orang suruhan / pembantu rumah', 'A hired hand / household servant'),
      statement: L(
        '“Saya cuma ikut arahan tuan dan puan. Saya tak ada pilihan.”',
        '“I only followed the master and madam\'s orders. I had no choice.”'
      ),
      motive: L('Melakukan kerja kotor dan menyembunyikan mayat; dapat habuan.', 'He did the dirty work and hid the body; he got a cut.'),
      alibi: L('Berada di rumah bomoh malam itu.', 'He was at the shaman\'s house that night.'),
      interrogation: [
        { q: L('Apa kerja awak di rumah bomoh itu?', 'What was your work at the shaman\'s house?'),
          a: L('Kemas, gali, angkat. Malam itu mereka suruh saya "uruskan" Datuk selepas upacara. Saya cuma ikut arahan.', 'Cleaning, digging, hauling. That night they told me to "deal with" the Datuk after the ritual. I only followed orders.') },
        { q: L('Awak yang sembunyikan mayat?', 'Were you the one who hid the body?'),
          a: L('Saya yang kambus dengan simen, ya — tapi bukan idea saya! Puan yang rancang, Encik Khalid yang arah. Kami bertiga.', 'I was the one who covered it with concrete, yes — but it was not my idea! The madam planned it, Encik Khalid gave the orders. The three of us.'), requires: 'mayat', unlocks: 'pakatan' },
        { q: L('Awak dapat apa daripada semua ini?', 'What did you get out of all this?'),
          a: L('Sikit sahaja. Habuan kecil. Mereka berdua dapat kereta dan emas. Saya cuma dapat rasa takut.', 'Only a little. A small cut. The two of them got a car and gold. All I got was fear.') },
      ],
    },
    {
      id: 'faizal', init: 'DF', name: 'Datuk Faizal', age: 52,
      role: L('Pesaing politik Datuk Rahim', 'Datuk Rahim\'s political rival'),
      statement: L(
        '“Saya memang lawan dia untuk kerusi MB. Tapi saya nak kalahkan dia dengan undi, bukan dengan bomoh.”',
        '“I did contest him for the CM\'s seat. But I meant to beat him with votes, not with a shaman.”'
      ),
      motive: L('Bersaing merebut kerusi Menteri Besar.', 'He was vying for the Chief Minister\'s seat.'),
      alibi: L('Berucap di persidangan parti di Kuala Lumpur.', 'He was giving a speech at a party conference in Kuala Lumpur.'),
      interrogation: [
        { q: L('Awak bersaing dengan Rahim?', 'Were you in competition with Rahim?'),
          a: L('Sengit, ya. Tapi politik bukan pembunuhan. Saya nak kalahkan dia di pilihan raya, bukan menanamnya.', 'Fiercely, yes. But politics is not murder. I meant to beat him at the polls, not bury him.') },
        { q: L('Di mana awak malam Rahim hilang?', 'Where were you the night Rahim disappeared?'),
          a: L('Di persidangan parti di KL, depan ratusan orang dan kamera. Boleh semak rakamannya.', 'At a party conference in KL, before hundreds of people and cameras. You can check the recordings.'), requires: 'sidang' },
        { q: L('Awak percaya bomoh?', 'Do you believe in shamans?'),
          a: L('Saya percaya kotak undi. Rahim yang percaya tangkal — dan itu yang membunuhnya.', 'I believe in the ballot box. It was Rahim who believed in charms — and that is what killed him.') },
      ],
    },
    {
      id: 'rosna', init: 'RN', name: 'Datin Rosna', age: 45,
      role: L('Isteri Datuk Rahim', 'Datuk Rahim\'s wife'),
      statement: L(
        '“Suami saya kerahkan harta kami kepada perempuan bomoh itu. Saya kehilangan dia dan harta sekali gus.”',
        '“My husband poured our fortune into that shaman woman. I lost him and our wealth all at once.”'
      ),
      motive: L('Isteri yang mungkin cemburu atau mengincar harta.', 'A wife who might have been jealous or after the fortune.'),
      alibi: L('Yang membuat laporan polis kehilangan suaminya.', 'She was the one who filed the police report of her missing husband.'),
      interrogation: [
        { q: L('Bagaimana perkahwinan awak dengan Rahim?', 'How was your marriage to Rahim?'),
          a: L('Renggang. Dia taasub pada kuasa dan bomoh. Tapi saya tunggu dia pulang — sehingga saya sendiri buat laporan polis.', 'Estranged. He was obsessed with power and shamans. But I waited for him to come home — until I filed the police report myself.') },
        { q: L('Awak mewarisi hartanya?', 'Did you inherit his estate?'),
          a: L('Tak sesen pun. Semua dia pindahkan kepada bomoh itu sebelum hilang. Kalau saya bunuh dia, saya cuma jadi papa.', 'Not a single cent. He transferred it all to that shaman before he vanished. Had I killed him, I would only have made myself destitute.'), requires: 'harta' },
        { q: L('Awak tahu tentang upacara itu?', 'Did you know about the ritual?'),
          a: L('Saya merayu dia berhenti. Dia tak dengar. Saya cuma mampu menunggu.', 'I begged him to stop. He would not listen. All I could do was wait.') },
      ],
    },
    {
      id: 'borhan', init: 'BN', name: 'Borhan', age: 38,
      role: L('Pembantu peribadi Datuk Rahim', 'Datuk Rahim\'s personal aide'),
      statement: L(
        '“Saya yang perasan duit besar keluar dari banknya, dan saya yang desak polis siasat.”',
        '“I was the one who noticed the large sums leaving his bank, and I was the one who pressed the police to investigate.”'
      ),
      motive: L('Mengetahui rahsia kewangan Datuk.', 'He knew the Datuk\'s financial secrets.'),
      alibi: L('Yang membongkar jejak pengeluaran wang Rahim.', 'He was the one who exposed the trail of Rahim\'s withdrawals.'),
      interrogation: [
        { q: L('Apa yang awak perasan tentang kewangan Datuk?', 'What did you notice about the Datuk\'s finances?'),
          a: L('Dia keluarkan wang tunai dalam jumlah besar sebelum hilang. Saya tahu ada yang tak kena — saya yang mendesak polis menyiasat.', 'He withdrew large sums of cash before he vanished. I knew something was wrong — I was the one who pressed the police to investigate.') },
        { q: L('Di mana awak malam kejadian?', 'Where were you the night of the crime?'),
          a: L('Di pejabat DUN menyiapkan ucapan Datuk untuk esok — ucapan yang tak pernah dibaca. Ada kakitangan lain bersama saya.', 'At the state assembly office, finishing the Datuk\'s speech for the next day — a speech that was never read. Other staff were there with me.') },
        { q: L('Awak syak siapa?', 'Whom do you suspect?'),
          a: L('Perempuan bomoh itu. Sejak Datuk jumpa dia, segalanya berubah.', 'That shaman woman. Ever since the Datuk met her, everything changed.'), requires: 'belanja' },
      ],
    },
  ],
  timeline: [
    { t: L('Malam kejadian', 'The night of the crime'), key: true, x: L('Datuk Rahim masuk ke rumah Mama Su untuk upacara; tiada siapa melihatnya keluar.', 'Datuk Rahim enters Mama Su\'s house for the ritual; no one sees him leave.') },
    { t: L('Sebelum itu', 'Beforehand'), key: false, x: L('Datuk mengeluarkan wang tunai besar dan memindahkan geran tanah kepada bomoh.', 'The Datuk withdraws large sums of cash and transfers land titles to the shaman.') },
    { t: L('Semasa upacara', 'During the ritual'), key: true, x: L('Rahim disuruh berbaring "menunggu suara"; ketika itulah dia dibunuh.', 'Rahim is made to lie down "awaiting a voice"; that is when he is killed.') },
    { t: L('Lewat malam', 'Late that night'), key: true, x: L('Mayat ditanam di bawah simen di bilik stor — kerja beberapa tangan.', 'The body is buried beneath the concrete in the storeroom — the work of several hands.') },
    { t: L('Hari-hari berikut', 'The following days'), key: false, x: L('Mama Su membeli kereta mewah, emas, dan menjalani pembedahan.', 'Mama Su buys a luxury car, gold, and undergoes surgery.') },
    { t: L('~3 minggu', '~3 weeks later'), key: false, x: L('Borhan mendesak siasatan; mayat ditemui.', 'Borhan presses for an investigation; the body is found.') },
  ],
  solution: {
    killers: ['su', 'khalid', 'sani'],
    motive: ['harta'],
    means: ['ritual', 'alat'],
    opportunity: ['mayat', 'masuk'],
  },
  reveal: {
    sections: [
      { h: L('Pelakunya: bukan seorang', 'The killer: not one person'), p: [
        L('Datuk Rahim tidak mati kerana sumpahan. Dia dibunuh demi harta, dalam satu pakatan tiga orang: Mama Su, suaminya Encik Khalid, dan pembantu mereka Sani.', 'Datuk Rahim did not die of a curse. He was killed for his fortune, in a conspiracy of three: Mama Su, her husband Encik Khalid, and their servant Sani.'),
        L('Upacara itu hanyalah perangkap. Rahim disuruh berbaring "menunggu suara ghaib" — dan ketika dia lemah, dia dibunuh. Menggali, mengangkat dan menyimen mayat dalam satu malam mustahil kerja seorang. Sekurang-kurangnya tiga tangan terlibat.', 'The ritual was nothing but a trap. Rahim was made to lie down "awaiting the unseen voice" — and while he was helpless, he was killed. To dig, lift, and cement a body in a single night was impossible for one person. At least three pairs of hands were involved.'),
      ] },
      { h: L('Sihir yang palsu, harta yang nyata', 'False sorcery, a real fortune'), p: [
        L('Tabir ilmu hitam mengaburkan perkara sebenar. Yang nyata bukan tangkal, tetapi wang tunai dan geran tanah yang dipindahkan Rahim kepada Mama Su sebelum hilang — lalu kemewahan mendadak: kereta Mercedes, emas, pembedahan, sebaik dia mati. Motifnya bukan kuasa ghaib; ia tamak.', 'The veil of black magic obscured the real matter. What was real was not the charm, but the cash and the land titles Rahim transferred to Mama Su before he vanished — and then the sudden extravagance: a Mercedes, gold, surgery, right after his death. The motive was not occult power; it was greed.'),
      ] },
      { h: L('Tiga tangan, satu pakatan', 'Three hands, one conspiracy'), p: [
        L('Mama Su merancang dan menjadi daya tarikan; Encik Khalid menguruskan dokumen harta dan mengarahkan; Sani melakukan kerja berat dan menyembunyikan mayat di bawah simen. Catatan pembahagian hasil — bahagian besar untuk pasangan itu, habuan kecil untuk Sani — mengikat ketiga-tiganya.', 'Mama Su did the planning and was the lure; Encik Khalid handled the property documents and gave the orders; Sani did the heavy labor and hid the body beneath the concrete. The record of the divided spoils — the lion\'s share for the couple, a small cut for Sani — binds all three together.'),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L('Datuk Faizal, pesaing politik, sedang berucap di persidangan di KL malam itu — terakam di hadapan ratusan orang. Datin Rosna tidak mewarisi satu sen pun; hartanya jatuh ke tangan bomoh, jadi kematian suaminya merugikannya. Borhan, pembantu Datuk, justru yang membongkar pengeluaran wang dan mendesak siasatan — pelaku akan menutupnya, bukan membukanya.', 'Datuk Faizal, the political rival, was giving a speech at a conference in KL that night — recorded before hundreds of people. Datin Rosna inherited not a single cent; the fortune fell into the shaman\'s hands, so her husband\'s death only cost her. Borhan, the Datuk\'s aide, was the very one who exposed the withdrawals and pressed for an investigation — a culprit would have buried it, not brought it to light.'),
        L('Tiga unsur bertemu bukan pada seorang, tetapi tiga: motif (harta yang berpindah), cara (perangkap upacara), dan kesempatan (mayat di rumah mereka sendiri). Mereka melakukannya bersama.', 'The three elements meet not in one person, but in three: motive (the fortune that changed hands), means (the trap of the ritual), and opportunity (the body in their own house). They did it together.'),
      ] },
    ],
    rebuttals: {
      faizal: L('Datuk Faizal bersaing sengit untuk kerusi MB, tetapi pada malam kejadian dia berucap di persidangan parti di KL, terakam di hadapan ratusan saksi. Persaingan politik bukan tangan yang membunuh.', 'Datuk Faizal contested fiercely for the CM\'s seat, but on the night of the crime he was speaking at a party conference in KL, recorded before hundreds of witnesses. Political rivalry is not the hand that killed.'),
      rosna: L('Datin Rosna tampak punya sebab, tetapi dia tidak mewarisi apa-apa — seluruh harta dipindahkan kepada bomoh sebelum Rahim hilang. Kematian suaminya menjadikannya papa, bukan kaya. Dan dialah yang membuat laporan polis.', 'Datin Rosna appears to have a reason, but she inherited nothing — the entire fortune was transferred to the shaman before Rahim vanished. Her husband\'s death left her destitute, not rich. And she was the one who filed the police report.'),
      borhan: L('Borhan pembantu yang tahu rahsia kewangan Datuk — tetapi dialah yang mula-mula membongkar pengeluaran wang ganjil dan mendesak polis menyiasat. Pelaku menyembunyikan jejak, bukan menyalakannya.', 'Borhan is the aide who knew the Datuk\'s financial secrets — but he was the very one who first exposed the irregular withdrawals and pressed the police to investigate. A culprit hides the trail, not lights it up.'),
    },
  },
}
