import { L } from '../i18n/L'

// Case 1 (free sample). All content original. Setting: Gunung Semeru.
// Story text is bilingual via L('id', 'en'); structural fields stay plain.
export const mahameru = {
  id: 'mahameru',
  free: true,
  difficulty: 'Mudah',
  code: 'SM-2406',
  location: L('Gunung Semeru', 'Mount Semeru'),
  scene: 'mountain',
  title: L('Maut di Mahameru', 'Death on Mahameru'),
  blurb: L(
    'Subuh di puncak Semeru, seorang pendaki ditemukan tewas. Kecelakaan atau pembunuhan?',
    `At dawn on Semeru's summit, a climber is found dead. An accident — or murder?`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi orisinal. Seluruh tokoh, nama, tempat, dan kejadian adalah rekaan.',
      'This is an original work of fiction. All characters, names, places, and events are invented.'
    ),
  },
  cover: {
    lead: L(
      'Subuh, pukul 04.40. Seorang pendaki ditemukan tewas di pasir menjelang puncak. Polisi menutup kasusnya sebagai kecelakaan. Keluarganya tidak percaya.',
      `Dawn, 04:40. A climber is found dead on the scree just below the summit. The police close the case as an accident. His family doesn't buy it.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Tiga hari lalu, lima orang mendaki Gunung Semeru. Pada hari ketiga, dini hari, sebagian dari mereka melakukan summit attack dari pos terakhir, Kalimati, menembus dingin dan gelap menuju puncak Mahameru.',
        'Three days ago, five people set out to climb Mount Semeru. On the third day, in the small hours, some of them made their summit push from the last camp, Kalimati, pressing through the cold and dark toward the peak of Mahameru.'
      ),
      L(
        'Hanya satu yang tidak kembali. Arya Wibowo, 34 tahun — pendaki berpengalaman sekaligus pembuat konten dengan ratusan ribu pengikut — ditemukan tergeletak di lereng pasir curam, sekitar dua ratus meter di bawah puncak. Tim SAR menyimpulkan ia tergelincir dan jatuh. Kasus ditutup.',
        'Only one never came back. Arya Wibowo, 34 — a seasoned climber and a content creator with hundreds of thousands of followers — was found lying on the steep scree slope, about two hundred meters below the summit. The search-and-rescue team concluded he had slipped and fallen. Case closed.'
      ),
      L(
        'Kakak korban menolak kesimpulan itu. Arya bukan pendaki sembarangan. Ia memanggil Anda.',
        `The victim's older sibling refuses to accept that. Arya was no careless climber. They have called you in.`
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi keempat orang yang ada di gunung itu. Lalu ajukan satu tuduhan: jika ini memang pembunuhan, siapa pelakunya?',
      'Examine every piece of evidence. Question the four people who were on that mountain. Then make a single accusation: if this really was murder, who did it?'
    ),
  },
  victim: {
    init: 'AW',
    name: 'Arya Wibowo',
    meta: L('34 tahun · pendaki & content creator', '34 · climber & content creator'),
    paras: [
      L(
        'Punya 490 ribu pengikut dan reputasi sebagai pendaki teknis yang teliti — orang yang memeriksa peralatannya dua kali sebelum berangkat. Bersama Dimas Pratama ia mendirikan merek perlengkapan gunung Rimbawan Gear.',
        'He had 490 thousand followers and a reputation as a meticulous, technical climber — the kind who checks his gear twice before setting off. With Dimas Pratama he co-founded the mountaineering brand Rimbawan Gear.'
      ),
      L(
        'Ditemukan pukul 04.40 di lereng pasir di atas Kelik, headlamp dalam keadaan mati. Tidak ada luka selain akibat jatuh. Tim SAR mencatat: "tergelincir di medan pasir gelap".',
        `Found at 04:40 on the scree slope above Kelik, his headlamp dead. No injuries other than from the fall. The SAR team noted: "slipped on dark, sandy terrain."`
      ),
    ],
  },
  evidence: [
    {
      id: 'termos', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Termos kopi milik korban', `The victim's coffee thermos`),
      summary: L('Ada residu obat penenang di sisa kopi.', 'Sedative residue in the leftover coffee.'),
      detail: L(
        'Laboratorium menemukan jejak diazepam — obat penenang — pada termos Arya. Dalam dosis cukup, zat ini menimbulkan kantuk dan pusing berat: cukup untuk membuat seorang pendaki limbung di medan curam. Menurut keterangan, kopi untuk summit attack diseduh dan dibagikan oleh satu orang di tenda Kalimati malam itu.',
        `The lab found traces of diazepam — a sedative — in Arya's thermos. In a high enough dose it brings on drowsiness and severe dizziness: enough to leave a climber unsteady on steep ground. By all accounts, the coffee for the summit push was brewed and handed out by one person in the Kalimati tent that night.`
      ),
    },
    {
      id: 'headlamp', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Headlamp dalam keadaan mati', 'A dead headlamp'),
      summary: L('Baterai habis — padahal Arya selalu pasang baterai baru.', 'Drained batteries — yet Arya always fitted fresh ones.'),
      detail: L(
        `Saat ditemukan, headlamp Arya mati total. Baterai di dalamnya sudah usang. Aneh: Arya dikenal selalu memasang baterai baru sebelum summit. Lebih aneh lagi, baterai usang itu berlabel stok internal 'Rimbawan Gear' — bukan yang dijual bebas. Hanya orang dalam perusahaan yang memegang stok itu.`,
        `When he was found, Arya's headlamp was completely dead. The batteries inside were spent. Strange: Arya was known to always fit fresh batteries before a summit push. Stranger still, those spent batteries carried a 'Rimbawan Gear' internal-stock label — not the kind sold to the public. Only someone inside the company would hold that stock.`
      ),
    },
    {
      id: 'wa', icon: 'phone', tag: L('Ponsel Korban', `Victim's Phone`),
      title: L('Pesan terakhir ke Dimas', 'Last message to Dimas'),
      summary: L('Ancaman membubarkan usaha dan melapor ke polisi.', 'A threat to dissolve the business and go to the police.'),
      detail: L(
        `Dua hari sebelum pendakian, Arya mengirim pesan ke Dimas: ia menemukan selisih dana sponsor yang tidak bisa dijelaskan, berniat membubarkan Rimbawan Gear, dan akan melapor ke polisi bila uang itu tidak dikembalikan. Pesan dibalas singkat: 'kita bicara di gunung'.`,
        `Two days before the climb, Arya messaged Dimas: he had found an unexplained shortfall in the sponsorship funds, intended to dissolve Rimbawan Gear, and would go to the police if the money was not returned. The reply was curt: 'we'll talk on the mountain.'`
      ),
    },
    {
      id: 'buff', icon: 'apparel', tag: L('Barang Bukti', 'Evidence'),
      title: L('Buff milik Sari di lereng atas', `Sari's buff on the upper slope`),
      summary: L('Tersangkut di batu, beberapa meter dari jasad Arya.', `Snagged on a rock, a few meters from Arya's body.`),
      herring: true,
      detail: L(
        'Sehelai buff bermotif khas milik Sari ditemukan tersangkut di batu, hanya beberapa meter dari tempat Arya jatuh — di lereng pasir atas yang menurut alibinya tak pernah ia datangi. Jika buff ini naik bersama pemiliknya, maka IG Story dari Kelik itu bohong, dan Sari justru berada tepat di lokasi kejadian. Untuk sesaat, semua mengarah pada sang kekasih.',
        'A distinctively patterned buff belonging to Sari was found snagged on a rock, only meters from where Arya fell — on the upper scree slope her alibi says she never reached. If the buff went up with its owner, then that Instagram Story from Kelik is a lie, and Sari was right at the scene. For a moment, everything points to the girlfriend.'
      ),
    },
    {
      id: 'posisi', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Posisi saat kejadian', 'Positions at the moment of the fall'),
      summary: L('Hanya satu orang berada tepat di belakang Arya.', 'Only one person was directly behind Arya.'),
      detail: L(
        'Di tanjakan pasir terakhir, Pak Bambang memimpin di depan membuka jalur, terpisah sekitar 30 meter. Sari dan Reza tidak ikut sampai sini. Yang berada persis di belakang Arya saat ia jatuh hanya satu orang: Dimas.',
        'On the final sandy ascent, Pak Bambang led out front breaking trail, some 30 meters ahead. Sari and Reza never came this far. The only person directly behind Arya when he fell was Dimas.'
      ),
    },
    {
      id: 'sari-ig', icon: 'social', tag: L('Media Sosial', 'Social Media'),
      title: L('IG Story Sari, 04.12', `Sari's Instagram Story, 04:12`),
      summary: L('Diunggah dari Kelik, jauh di bawah lokasi kejadian.', 'Posted from Kelik, far below the scene.'),
      detail: L(
        'Sari mengunggah Story berisi keluhan pusing pukul 04.12, dengan penanda lokasi di Kelik — batas vegetasi, jauh di bawah lereng pasir tempat Arya jatuh pukul 04.40. Ia sudah dalam perjalanan turun saat kejadian. Tapi bila benar buff-nya ada di atas, salah satu dari dua hal ini pasti keliru.',
        'At 04:12 Sari posted a Story complaining of dizziness, geotagged at Kelik — the treeline, far below the scree slope where Arya fell at 04:40. She was already on her way down when it happened. But if her buff really was up top, one of these two things has to be wrong.'
      ),
    },
    {
      id: 'reza-tl', icon: 'metadata', tag: L('Metadata', 'Metadata'),
      title: L('Timelapse sunrise Reza', `Reza's sunrise timelapse`),
      summary: L('Direkam dari kamera statis di Kalimati.', 'Shot from a static camera at Kalimati.'),
      detail: L(
        'Reza tidak ikut summit attack; ia memilih merekam timelapse matahari terbit. Metadata berkas: 03.50–05.30, dari kamera yang dipasang statis di camp Kalimati. Ia tidak pernah naik ke lereng atas malam itu.',
        `Reza did not join the summit push; he chose to shoot a sunrise timelapse. The file metadata: 03:50–05:30, from a camera mounted statically at the Kalimati camp. He never went up to the upper slope that night.`
      ),
    },
    {
      id: 'foto', icon: 'photo', tag: L('Ponsel Korban', `Victim's Phone`),
      title: L('Foto terakhir di kamera Arya', `The last photo on Arya's camera`),
      summary: L('Pukul 02.50 — Arya mengenakan buff itu.', '02:50 — Arya is wearing the buff.'),
      locked: true, twist: true,
      detail: L(
        'Di galeri ponsel Arya tersimpan selfie pukul 02.50 di Kalimati: Arya tersenyum, mengenakan buff Sari — yang dipinjamkannya agar Arya tak kedinginan sebelum ia sendiri memutuskan turun. Buff itu ikut naik bersama Arya, bukan bersama Sari. Petunjuk yang tadi memberatkan Sari justru membersihkannya. Dan di latar belakang foto, tertangkap satu detail kecil: tangan Dimas menyodorkan termos kopi.',
        `In Arya's gallery there is a selfie from 02:50 at Kalimati: Arya smiling, wearing Sari's buff — which she had lent him so he would not get cold, before she decided to head down. The buff went up with Arya, not with Sari. The clue that had incriminated Sari is the very thing that clears her. And in the background, one small detail is caught: Dimas's hand holding out the coffee thermos.`
      ),
    },
  ],
  suspects: [
    {
      id: 'dimas', init: 'DP', name: 'Dimas Pratama', age: 36,
      role: L('Partner mendaki & co-founder Rimbawan Gear', 'Climbing partner & co-founder of Rimbawan Gear'),
      statement: L(
        '“Arya tiba-tiba limbung di pasir. Aku coba raih, tapi gelap dan dia sudah meluncur ke bawah. Aku bukan apa-apa tanpa dia.”',
        `“Arya suddenly lost his footing on the scree. I tried to grab him, but it was dark and he was already sliding down. I'm nothing without him.”`
      ),
      motive: L(
        'Arya mengancam membubarkan usaha mereka dan melaporkan dugaan penyelewengan dana sponsor.',
        'Arya threatened to dissolve their company and report the suspected misuse of sponsorship funds.'
      ),
      alibi: L(
        `Mengaku berada di belakang Arya 'untuk menjaganya'. Tidak ada saksi lain di lereng itu.`,
        `Claims he was behind Arya 'to look out for him.' No other witness on that slope.`
      ),
      interrogation: [
        { q: L('Siapa yang menyiapkan kopi summit malam itu?', 'Who made the summit coffee that night?'),
          a: L('Aku, seperti biasa. Itu rutinitas kami sebelum naik. Kenapa? Itu tidak ada hubungannya.', `I did, as always. It's our ritual before a climb. Why? That has nothing to do with anything.`) },
        { q: L('Apa isi pesan terakhir Arya kepadamu?', `What was in Arya's last message to you?`),
          a: L('Ah, itu cuma salah paham soal pembukuan. Sudah kami selesaikan baik-baik.', 'Ah, just a misunderstanding about the bookkeeping. We sorted it out amicably.'), requires: 'wa' },
        { q: L('Di mana posisimu saat Arya jatuh?', 'Where were you when Arya fell?'),
          a: L('Tepat di belakangnya, menjaganya. Tapi gelap, dan semuanya terjadi begitu cepat.', 'Right behind him, watching out for him. But it was dark, and it all happened so fast.') },
        { q: L('Baterai headlamp Arya dari stok internal — kok bisa habis?', `Arya's headlamp had internal-stock batteries — how were they dead?`),
          a: L('Mungkin dia lupa menggantinya. Aku tak mengurus headlamp orang lain. Lagipula, siapa yang menghitung baterai di tengah gunung?', `Maybe he forgot to change them. I don't manage other people's headlamps. Besides, who counts batteries in the middle of a mountain?`), requires: 'headlamp' },
      ],
    },
    {
      id: 'sari', init: 'SI', name: 'Sari Indrawati', age: 29,
      role: L('Pacar korban, sesama content creator', `The victim's girlfriend, a fellow content creator`),
      statement: L(
        '“Kami sempat ribut soal konten, ya. Tapi aku turun duluan, kepalaku mau pecah karena ketinggian.”',
        '“We did argue about content, yes. But I went down first — my head was splitting from the altitude.”'
      ),
      motive: L('Beredar kabar pertengkaran di antara mereka beberapa hari sebelumnya.', 'There were rumors of a quarrel between them a few days earlier.'),
      alibi: L('IG Story berpenanda lokasi Kelik pukul 04.12 — ia sudah turun saat kejadian.', 'An Instagram Story geotagged at Kelik at 04:12 — she was already down when it happened.'),
      interrogation: [
        { q: L('Kenapa kau turun lebih dulu?', 'Why did you go down first?'),
          a: L('Kepalaku seperti mau pecah. AMS. Aku tak sanggup lanjut ke atas.', `My head felt like it would split open. Altitude sickness. I couldn't go any higher.`) },
        { q: L('Benarkah kalian bertengkar?', 'Is it true you two argued?'),
          a: L('Soal jadwal konten, ya. Tapi aku mencintainya. Aku tak akan pernah menyakitinya.', 'About the content schedule, yes. But I loved him. I would never hurt him.') },
        { q: L('Pukul berapa kau sampai Kelik?', 'What time did you reach Kelik?'),
          a: L('Sebelum jam empat. Aku sempat unggah Story dari sana — kau bisa cek waktunya.', 'Before four. I posted a Story from there — you can check the timestamp.') },
        { q: L('Buff-mu ditemukan di atas, dekat jasad. Bagaimana bisa?', 'Your buff was found up top, near the body. How is that possible?'),
          a: L('Itu... astaga. Aku pinjamkan ke Arya sebelum turun — dia kedinginan, dan aku sudah mau balik. Periksa kameranya, pasti ada fotonya. Aku bersumpah tak pernah naik sejauh itu.', `That... oh God. I lent it to Arya before I went down — he was cold, and I was already heading back. Check his camera, there must be a photo. I swear I never climbed that far up.`), requires: 'buff', unlocks: 'foto' },
      ],
    },
    {
      id: 'reza', init: 'RM', name: 'Reza Mahendra', age: 31,
      role: L('Pendaki rival, diundang sponsor', 'A rival climber, invited by the sponsor'),
      statement: L(
        '“Kami memang sering ribut di internet. Tapi malam itu aku sibuk dengan kameraku, bukan dengan Arya.”',
        '“Sure, we feuded online all the time. But that night I was busy with my camera, not with Arya.”'
      ),
      motive: L('Persaingan lama dan permusuhan terbuka di media sosial.', 'A long-running rivalry and open hostility on social media.'),
      alibi: L('Tidak ikut summit. Timelapse-nya terekam dari camp Kalimati sepanjang malam.', `Didn't join the summit push. His timelapse was recording from the Kalimati camp all night.`),
      interrogation: [
        { q: L('Kenapa kau tidak ikut summit?', `Why didn't you join the summit push?`),
          a: L('Aku mau timelapse sunrise. Lagipula, naik bareng Arya? Tidak, terima kasih.', 'I wanted a sunrise timelapse. Besides — climb alongside Arya? No, thank you.') },
        { q: L('Kalian benar-benar bermusuhan?', 'Were you two really enemies?'),
          a: L('Di internet, iya — itu konten. Di gunung, aku tak peduli soal dia.', `Online, yes — that's content. On the mountain, I couldn't care less about him.`) },
        { q: L('Ada yang kau lihat dari camp?', 'Did you see anything from camp?'),
          a: L('Gelap. Cuma lampu-lampu headlamp jauh di atas. Lalu satu lampu padam, dan tak lama kemudian ribut.', 'Dark. Just headlamp beams far up the slope. Then one light went out, and soon after, the commotion.') },
      ],
    },
    {
      id: 'bambang', init: 'PB', name: 'Pak Bambang', age: 52,
      role: L('Porter & pemandu lokal dari Ranupani', 'Porter & local guide from Ranupani'),
      statement: L(
        '“Saya di depan, membuka jalur. Saya dengar suara, menoleh — dia sudah jatuh. Saya yang lari turun memanggil tim SAR.”',
        `“I was up front, breaking trail. I heard a sound, turned — he had already fallen. I'm the one who ran down to call the SAR team.”`
      ),
      motive: L('Sempat ada keluhan soal upah porter yang dianggap kurang.', `There had been a complaint about the porter's pay being too low.`),
      alibi: L(
        'Berada ~30 meter di depan korban dan menjadi orang pertama yang memberi alarm. Tak punya akses ke stok internal perusahaan.',
        `Was ~30 meters ahead of the victim and the first to raise the alarm. Has no access to the company's internal stock.`
      ),
      interrogation: [
        { q: L('Apa yang kau lihat saat Arya jatuh?', 'What did you see when Arya fell?'),
          a: L('Saya di depan. Dengar teriakan, menoleh — dia sudah meluncur. Cuma Pak Dimas yang dekat dengannya.', 'I was in front. Heard a shout, turned — he was already sliding. Only Pak Dimas was near him.') },
        { q: L('Benarkah soal upah porter?', `Is it true about the porter's pay?`),
          a: L('Rezeki sudah ada yang mengatur. Saya tak pernah menyimpan dendam pada tamu.', 'What is meant for me is already provided. I never hold a grudge against a client.') },
        { q: L('Siapa yang membagikan kopi pagi itu?', 'Who handed out the coffee that morning?'),
          a: L('Pak Dimas. Saya sendiri tak minum — perut saya tak cocok kopi.', `Pak Dimas. I didn't drink any myself — coffee doesn't sit well with my stomach.`) },
      ],
    },
  ],
  timeline: [
    { t: L('02.30', '02:30'), key: false, x: L('Summit attack dimulai dari Kalimati. Arya, Dimas, Sari, dan Pak Bambang berangkat. Reza memilih tinggal untuk merekam timelapse.', 'The summit push begins from Kalimati. Arya, Dimas, Sari, and Pak Bambang set off. Reza chooses to stay behind to shoot his timelapse.') },
    { t: L('02.50', '02:50'), key: false, x: L('Arya berfoto di Kalimati, mengenakan buff pinjaman dari Sari.', 'Arya takes a photo at Kalimati, wearing the buff he borrowed from Sari.') },
    { t: L('~03.40', '~03:40'), key: false, x: L('Sari kena gejala ketinggian (AMS) di Kelik dan memutuskan turun sendiri ke camp.', 'Sari is hit by altitude sickness (AMS) at Kelik and decides to head back down to camp alone.') },
    { t: L('04.12', '04:12'), key: false, x: L('Sari mengunggah IG Story dari Kelik.', 'Sari posts an Instagram Story from Kelik.') },
    { t: L('~04.30', '~04:30'), key: true, x: L('Di lereng pasir terakhir: Bambang di depan, Arya di tengah, Dimas tepat di belakang.', 'On the final scree slope: Bambang in front, Arya in the middle, Dimas right behind.') },
    { t: L('04.40', '04:40'), key: true, x: L('Arya jatuh. Headlamp-nya mati. Bambang menoleh, lalu lari turun memanggil SAR.', 'Arya falls. His headlamp is dead. Bambang turns, then runs down to call SAR.') },
  ],
  solution: { killer: 'dimas', motive: ['wa'], means: ['termos', 'headlamp'], opportunity: ['posisi'] },
  reveal: {
    killerName: 'Dimas Pratama',
    sections: [
      { h: L('Pelakunya: Dimas Pratama', 'The killer: Dimas Pratama'), p: [
        L('Arya tidak tergelincir. Ia dibunuh oleh partner usahanya sendiri.', `Arya didn't slip. He was killed by his own business partner.`),
        L(
          'Pesan terakhir Arya membongkar motifnya: Arya menemukan selisih dana sponsor, hendak membubarkan Rimbawan Gear, dan mengancam melapor ke polisi. Bagi Dimas, itu berarti kehilangan segalanya sekaligus terancam pidana.',
          `Arya's last message lays the motive bare: he had found a shortfall in the sponsorship funds, meant to dissolve Rimbawan Gear, and threatened to go to the police. For Dimas, that meant losing everything and facing criminal charges at once.`
        ),
        L(
          'Malam itu Dimas yang menyeduh dan membagikan kopi summit di Kalimati — kesempatan menyelipkan diazepam ke termos Arya. Pak Bambang tak ikut minum, dan Dimas mengakui sendiri bahwa ia yang membuat kopi. Dimas juga satu-satunya yang punya akses ke stok baterai internal perusahaan, yang dipakainya menukar baterai headlamp Arya dengan yang sudah habis.',
          `That night it was Dimas who brewed and handed out the summit coffee at Kalimati — the chance to slip diazepam into Arya's thermos. Pak Bambang drank none of it, and Dimas admits himself that he made the coffee. Dimas was also the only one with access to the company's internal battery stock, which he used to swap Arya's headlamp batteries for spent ones.`
        ),
        L(
          'Hasilnya: di lereng pasir curam, dalam gelap total, dengan tubuh yang mengantuk berat, Arya kehilangan keseimbangan — persis seperti "kecelakaan" yang diharapkan Dimas. Dan ketika itu terjadi, hanya Dimas yang berada di belakangnya.',
          `The result: on the steep scree, in total darkness, his body heavy with drowsiness, Arya lost his balance — exactly the "accident" Dimas was counting on. And when it happened, only Dimas was behind him.`
        ),
      ] },
      { h: L('Jebakan: buff Sari', `The misdirection: Sari's buff`), p: [
        L(
          'Buff Sari yang ditemukan di lereng atas sempat membuatnya tampak paling bersalah — seolah alibinya bohong. Padahal foto pukul 02.50 menunjukkan Arya yang meminjam dan memakainya. Petunjuk yang paling memberatkan justru jadi yang membebaskan. Pembunuh sungguhan tak pernah meninggalkan jejak semencolok itu.',
          `Sari's buff on the upper slope briefly made her look the guiltiest — as if her alibi were a lie. But the 02:50 photo shows Arya was the one who borrowed and wore it. The most damning clue becomes the one that frees her. A real killer never leaves a trail that obvious.`
        ),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L(
          'Sari sudah turun ke Kelik saat kejadian — IG Story-nya pukul 04.12 membuktikannya. Reza tidak pernah ikut summit; timelapse-nya terekam dari camp sepanjang malam. Pak Bambang berada di depan dan justru menjadi orang yang memberi alarm — dan ia tak punya akses ke stok baterai perusahaan maupun kendali atas kopi summit.',
          `Sari had already descended to Kelik when it happened — her 04:12 Instagram Story proves it. Reza never joined the summit push; his timelapse was recording from camp all night. Pak Bambang was out in front and was in fact the one who raised the alarm — and he had no access to the company's battery stock, nor any control over the summit coffee.`
        ),
        L(
          'Tiga unsur hanya bertemu pada satu orang: motif (pesan ancaman), cara (kopi dan baterai), dan kesempatan (posisi di belakang Arya). Itu Dimas.',
          `All three elements meet in only one person: motive (the threatening message), means (the coffee and the batteries), and opportunity (his position behind Arya). That's Dimas.`
        ),
      ] },
    ],
    rebuttals: {
      sari: L(
        'Buff itu memang miliknya — tapi foto pukul 02.50 membuktikan Arya yang memakainya, dipinjami sebelum Sari turun. IG Story 04.12 dari Kelik menutup celah waktu. Sari memang sempat menjadi tersangka paling kuat; justru di situ jebakannya.',
        `The buff is indeed hers — but the 02:50 photo proves Arya was wearing it, lent to him before Sari went down. The 04:12 Instagram Story from Kelik closes the timing gap. Sari was, for a while, the strongest suspect; that is exactly where the misdirection lay.`
      ),
      reza: L(
        'Reza tak pernah menyentuh lereng atas. Timelapse-nya terekam dari kamera statis di Kalimati, 03.50–05.30, tanpa jeda. Permusuhan mereka nyata, tapi hanya di layar.',
        `Reza never set foot on the upper slope. His timelapse was recorded by a static camera at Kalimati, 03:50–05:30, without a break. Their feud was real, but only on screen.`
      ),
      bambang: L(
        'Pak Bambang berada ~30 meter di depan dan menjadi orang pertama yang berteriak memanggil SAR. Ia tak minum kopi summit dan tak punya akses ke stok baterai internal perusahaan. Tak satu pun dari tiga unsur itu menempel padanya.',
        `Pak Bambang was ~30 meters ahead and was the first to shout for SAR. He drank no summit coffee and had no access to the company's internal battery stock. Not one of the three elements sticks to him.`
      ),
    },
  },
}
