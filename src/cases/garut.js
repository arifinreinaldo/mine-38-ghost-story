import { L } from '../i18n/L'

// Case 4 (gated). Original mystery using the (debunked) "Hitler died in
// Garut" conspiracy theory as backdrop. The legend is exposed as a hoax
// within the story — the murder merely exploits it.
export const garut = {
  id: 'garut',
  free: false,
  difficulty: 'Sedang',
  code: 'LK-0945',
  location: L('Loji Kabut, Garut', 'Loji Kabut, Garut'),
  scene: 'highland',
  title: L('Maut di Loji Kabut', 'Death at the Misted Lodge'),
  blurb: L(
    'Penjaga legenda "Hitler dari Garut" ditemukan tewas di kaki menara loji berkabut. Konspirasi Nazi yang kabur — atau pembunuhan yang menumpang legenda?',
    `The keeper of the "Hitler of Garut" legend is found dead at the foot of the lodge's misted tower. A hazy Nazi conspiracy — or a murder riding on a legend?`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi. Latarnya meminjam teori konspirasi populer "Hitler mati/bersembunyi di Garut" — yang tak punya dasar sejarah; Adolf Hitler meninggal di Berlin tahun 1945. Seluruh tokoh, nama, tempat, dan relik dalam cerita ini rekaan; kemiripan dengan orang atau peristiwa nyata tidak disengaja.',
      `This is a work of fiction. Its setting borrows the popular conspiracy theory that "Hitler died/hid in Garut" — which has no historical basis; Adolf Hitler died in Berlin in 1945. All characters, names, places, and relics in this story are invented; any resemblance to real persons or events is coincidental.`
    ),
    source: {
      label: L('"Benarkah Hitler Mati di Garut?" (Pikiran Rakyat)', '"Did Hitler Really Die in Garut?" (Pikiran Rakyat)'),
      url: 'https://klaten.pikiran-rakyat.com/nasional/pr-2418678275/benarkah-hitler-mati-di-garut-menguak-asal-usul-teori-konspirasi',
    },
  },
  cover: {
    lead: L(
      'Di dataran tinggi Garut yang berkabut, sebuah loji kolonial menyimpan legenda yang menolak mati. Subuh ini, penjaganya ikut mati — dan kabut menyembunyikan segalanya.',
      'In the misted highlands of Garut, a colonial lodge harbors a legend that refuses to die. This dawn, its keeper dies with it — and the fog hides everything.'
    ),
  },
  briefing: {
    paras: [
      L(
        'Di dataran tinggi Garut yang berkabut, sebuah loji peninggalan kolonial menyimpan legenda yang menolak mati: konon penghuni pertamanya, seorang Jerman misterius, adalah petinggi Nazi yang kabur dari Perang Dunia II — bahkan ada yang berbisik, Hitler sendiri.',
        'In the misted highlands of Garut, a lodge left over from the colonial era harbors a legend that refuses to die: its first occupant, a mysterious German, was said to be a senior Nazi who had fled the Second World War — some even whisper it was Hitler himself.'
      ),
      L(
        'Bertahun-tahun, Opa Wim Sastra — keturunan sang Jerman — merawat legenda itu: museum kecil, tur "jejak Nazi", dan sebuah film dokumenter yang sedang digarap. Lalu, di subuh berkabut, Opa Wim ditemukan tewas di kaki menara loji. Dokter keluarga menyebut: terpeleset di tangga menara.',
        `For years, Opa Wim Sastra — a descendant of that German — kept the legend alive: a small museum, a "Nazi trail" tour, and a documentary in the works. Then, on a misted dawn, Opa Wim was found dead at the foot of the lodge tower. The family doctor's verdict: a slip on the tower stairs.`
      ),
      L(
        'Tapi malam itu ia justru menyiapkan pengungkapan besar di depan kamera. Keluarganya menolak kata "kecelakaan" dan memanggil Anda.',
        'But that very night he was preparing a great revelation for the camera. His family refuses the word "accident" and has called you in.'
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi keenam orang di sekitar sang pertapa. Lalu susun pembuktian — motif, cara, kesempatan. Di balik kabut Garut, legenda bisa jadi senjata.',
      'Examine every piece of evidence. Question the six people around the old recluse. Then build your case — motive, means, opportunity. Behind the Garut fog, a legend can become a weapon.'
    ),
  },
  victim: {
    init: 'WS',
    name: 'Opa Wim Sastra',
    meta: L('88 tahun · penjaga Loji Kabut & legendanya', '88 · keeper of Loji Kabut and its legend'),
    paras: [
      L(
        'Keturunan Indo-Jerman, pewaris Loji Kabut. Bertahun-tahun ia memelihara cerita bahwa ayahnya — sang Jerman pendiri loji — adalah buronan Nazi yang bersembunyi di Garut. Dari cerita itu lahir museum kecil, tur, dan kini sebuah dokumenter yang dinanti.',
        'Of Indo-German descent, heir to Loji Kabut. For years he nurtured the story that his father — the German who founded the lodge — was a Nazi fugitive hiding out in Garut. From that story grew a small museum, a tour, and now an eagerly awaited documentary.'
      ),
      L(
        'Belakangan ia sakit-sakitan dan, kata sebagian orang, gelisah ingin "meluruskan sesuatu". Ditemukan subuh di kaki menara loji, di tengah kabut tebal. Tak ada saksi — hanya kabut, dan sebuah legenda yang tiba-tiba kehilangan penjaganya.',
        'Of late he was ailing and, by some accounts, restless to "set something straight." Found at dawn at the foot of the lodge tower, in thick fog. No witnesses — only the mist, and a legend that had suddenly lost its keeper.'
      ),
    ],
  },
  evidence: [
    {
      id: 'luka', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Luka di kepala Opa Wim', `The wound on Opa Wim's head`),
      summary: L('Satu pukulan di belakang kepala, sebelum ia jatuh.', 'A single blow to the back of the head, before he fell.'),
      detail: L(
        'Satu pukulan benda tumpul di belakang kepala mendahului jatuhnya. Pola lukanya tak cocok dengan tubuh yang menggelinding di tangga menara. Ia dilumpuhkan dulu, baru direbahkan di kaki menara.',
        'A single blow from a blunt object to the back of the head came before the fall. The wound pattern does not match a body tumbling down the tower stairs. He was disabled first, then laid out at the foot of the tower.'
      ),
    },
    {
      id: 'tkp', icon: 'recon', tag: L('Rekonstruksi', 'Reconstruction'),
      title: L('Posisi jasad & kabut', 'The body, and the fog'),
      summary: L('Tongkat tergeletak rapi, kacamata utuh — terlalu rapi.', 'The cane lying neatly, the glasses intact — too neat.'),
      detail: L(
        'Dokter keluarga buru-buru menyebut "terpeleset". Tapi tongkat Opa Wim tergeletak rapi, kacamatanya utuh, dan tak ada bekas tergelincir di anak tangga. Tubuhnya seperti diatur — kecelakaan yang dipentaskan dalam kabut.',
        `The family doctor was quick to call it "a slip." But Opa Wim's cane lay neatly beside him, his glasses were intact, and there were no scuff marks of a slide on the steps. The body looked arranged — an accident staged in the fog.`
      ),
    },
    {
      id: 'relik', icon: 'apparel', tag: L('Barang Bukti', 'Evidence'),
      title: L('Relik "Nazi" di museum loji', 'The "Nazi" relics in the lodge museum'),
      summary: L('Seragam & medali ternyata reproduksi modern.', 'The uniform and medals turn out to be modern reproductions.'),
      detail: L(
        'Seragam, medali, dan potret berlambang Nazi yang dipamerkan sebagai "bukti" ternyata reproduksi modern: kain dan cat sintetis yang baru berumur beberapa tahun. Legenda itu bukan warisan — ia diproduksi.',
        'The uniform, medals, and Nazi-emblemed portrait displayed as "proof" turn out to be modern reproductions: synthetic fabric and paint only a few years old. The legend is no inheritance — it was manufactured.'
      ),
    },
    {
      id: 'dosier', icon: 'doc', tag: L('Dokumen', 'Documents'),
      title: L('Berkas sejarah Prof. Sari', `Prof. Sari's historical dossier`),
      summary: L('Pendiri loji cuma administratur kebun teh. Hitler tewas di Berlin.', 'The lodge founder was only a tea-estate administrator. Hitler died in Berlin.'),
      detail: L(
        'Riset arsip kolonial: pendiri loji hanyalah administratur perkebunan teh Jerman biasa, wafat 1951, tanpa kaitan dengan Nazi. Dan fakta yang diterima dunia tetap tegak: Hitler tewas di Berlin, 1945. Tak pernah ada Hitler di Garut.',
        'Research in the colonial archives: the lodge founder was nothing more than an ordinary German tea-plantation administrator, died in 1951, with no Nazi ties. And the fact the world accepts still stands: Hitler died in Berlin in 1945. There was never any Hitler in Garut.'
      ),
    },
    {
      id: 'kontrak', icon: 'ledger', tag: L('Dokumen', 'Documents'),
      title: L('Kontrak film & investor', 'The film contract and the investors'),
      summary: L('Investor dijanjikan "bukti bombastis yang nyata".', 'The investors were promised "real, sensational proof."'),
      detail: L(
        'Dokumenter "Jejak Hitler di Garut" menelan dana besar dari investor yang dijanjikan bukti bombastis yang nyata. Bila legendanya runtuh jadi hoaks, filmnya tak berharga — dan utang ke investor berubah menjadi perkara penipuan bagi pembuatnya.',
        `The documentary "Hitler's Trail in Garut" swallowed a large sum from investors who were promised real, sensational proof. If the legend collapses into a hoax, the film is worthless — and the debt to those investors turns into a fraud case for its maker.`
      ),
    },
    {
      id: 'jadwal', icon: 'metadata', tag: L('Metadata', 'Metadata'),
      title: L('Jadwal wawancara terakhir', 'The schedule for the last interview'),
      summary: L('Hanya satu kru naik ke menara menemani Wim.', 'Only one of the crew went up the tower with Wim.'),
      detail: L(
        'Catatan produksi: satu sesi wawancara "eksklusif" dijadwalkan di ruang menara malam itu, pukul 23.00. Hanya satu orang yang naik menemani Opa Wim ke menara — Daniel, sang sutradara. Yang lain dilarang ikut "demi fokus".',
        `Production notes: one "exclusive" interview session was scheduled in the tower room that night, at 23:00. Only one person went up to the tower with Opa Wim — Daniel, the director. The others were barred from coming along "for the sake of focus."`
      ),
    },
    {
      id: 'patung', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Patung perunggu pendiri loji', `The bronze bust of the lodge's founder`),
      summary: L('Raib dari menara, ditemukan terlap bersih — bernoda darah.', 'Gone from the tower, found wiped clean — still bloodstained.'),
      detail: L(
        'Patung dada perunggu sang pendiri raib dari ruang menara, lalu ditemukan terlap bersih di gudang. Pada dasarnya tersisa noda darah samar bergolongan sama dengan Opa Wim. Berat dan bersudut — pas dengan bentuk lukanya.',
        `The bronze bust of the founder vanished from the tower room, then turned up wiped clean in the storeroom. At its base lingered a faint bloodstain matching Opa Wim's type. Heavy and sharp-edged — a match for the shape of the wound.`
      ),
    },
    {
      id: 'ceramah', icon: 'social', tag: L('Media Sosial', 'Social Media'),
      title: L('Siaran diskusi Prof. Sari', `Prof. Sari's broadcast talk`),
      summary: L('Tersiar langsung dari kota, 20.00–22.30.', 'Streamed live from the town, 20:00–22:30.'),
      detail: L(
        'Malam itu Prof. Sari mengisi diskusi publik di kota Garut, disiarkan langsung pukul 20.00–22.30, dilanjutkan tanya-jawab. Puluhan hadirin dan rekaman memastikan ia tak berada di loji saat kejadian.',
        'That night Prof. Sari led a public talk in the town of Garut, streamed live from 20:00 to 22:30, followed by a Q&A. Dozens of attendees and the recording confirm she was not at the lodge when it happened.'
      ),
    },
    {
      id: 'peta', icon: 'photo', tag: L('Barang Bukti', 'Evidence'),
      title: L('Peta "harta Nazi"', 'The "Nazi treasure" map'),
      summary: L('Peta yang diburu Tobi terbukti dibuat-buat.', 'The map Tobi was chasing proves to be a fabrication.'),
      herring: true,
      detail: L(
        'Peta lusuh yang diburu Tobi — konon menunjuk emas Nazi di bawah loji — terbukti palsu, kertasnya ditua-tuakan. Tobi sempat ribut menuntutnya sore itu, lalu turun gunung sebelum kabut tebal; warung di bawah mencatat kedatangannya.',
        'The tattered map Tobi was chasing — said to point to Nazi gold beneath the lodge — proves to be a fake, its paper artificially aged. Tobi made a scene demanding it that afternoon, then went down the mountain before the fog thickened; the stall below logged his arrival.'
      ),
    },
    {
      id: 'pengakuan', icon: 'doc', tag: L('Temuan Tersembunyi', 'Hidden Find'),
      title: L('Draf pengakuan Opa Wim', `Opa Wim's draft confession`),
      summary: L('Naskah untuk membongkar bahwa seluruh legenda itu rekayasa.', 'A script to expose the whole legend as a fabrication.'),
      locked: true, twist: true,
      detail: L(
        'Tersembunyi di laci menara: naskah yang hendak ia bacakan di depan kamera — pengakuan bahwa seluruh legenda Nazi itu rekayasa demi menghidupi loji, lengkap dengan siapa saja yang ikut menjual kebohongan. Pengakuan ini akan meruntuhkan film, museum, dan reputasi beberapa orang sekaligus.',
        'Hidden in a tower drawer: the script he meant to read on camera — a confession that the entire Nazi legend was a fabrication to keep the lodge alive, naming everyone who helped sell the lie. This confession would bring down the film, the museum, and the reputations of several people at once.'
      ),
    },
  ],
  suspects: [
    {
      id: 'renata', init: 'RS', name: 'Renata Sastra', age: 52,
      role: L('Cucu Wim, pengelola museum & tur loji', `Wim's granddaughter, manager of the lodge museum and tours`),
      statement: L(
        '“Kakek membesarkanku dengan legenda ini. Tapi belakangan ia berubah — dan kini ia mati. Aku ingin kebenarannya, bukan menutupinya.”',
        '“Grandfather raised me on this legend. But lately he changed — and now he is dead. I want the truth of it, not to cover it up.”'
      ),
      motive: L('Hidup dari bisnis legenda loji; pengakuan kakeknya bisa menamatkan semuanya.', `Lives off the lodge-legend business; her grandfather's confession could end all of it.`),
      alibi: L('Menjamu rombongan tamu menginap di bangunan utama sepanjang malam.', 'Hosting a party of overnight guests in the main building all night.'),
      interrogation: [
        { q: L('Bagaimana bisnis legenda loji belakangan?', 'How has the lodge-legend business been lately?'),
          a: L('Ramai. Tapi aku lelah berbohong, begitu juga Kakek. Kami sempat bicara menutup "tur Nazi" itu pelan-pelan.', `Busy. But I was tired of lying, and so was Grandfather. We had talked about quietly shutting down that "Nazi tour."`) },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Menjamu tamu menginap di bangunan utama sampai larut. Banyak yang melihatku menuang teh hingga tengah malam.', 'Hosting overnight guests in the main building until late. Plenty of people saw me pouring tea right up to midnight.') },
        { q: L('Kau tahu relik itu palsu?', 'Did you know the relics were fake?'),
          a: L('Belakangan, ya. Itu sebabnya aku ingin berhenti — memajang kebohongan di depan turis membuatku malu.', 'Lately, yes. That is why I wanted to stop — displaying a lie to tourists shamed me.'), requires: 'relik' },
      ],
    },
    {
      id: 'daniel', init: 'DH', name: 'Daniel Hartono', age: 39,
      role: L('Sutradara dokumenter "Jejak Hitler di Garut"', `Director of the documentary "Hitler's Trail in Garut"`),
      statement: L(
        '“Aku merekam kisah besar. Malam itu kami wawancara terakhir, lalu ia... jatuh. Aku kehilangan tokoh utamaku.”',
        '“I was filming a great story. That night we did the last interview, and then he... fell. I lost my lead character.”'
      ),
      motive: L('Tampak sebagai pencerita yang kehilangan narasumber — sampai isi wawancara terakhir terbongkar.', 'Looks like a storyteller who lost his subject — until the contents of that last interview come out.'),
      alibi: L('Mengaku turun lebih dulu dari menara; tak ada saksi di kabut.', 'Claims he came down from the tower first; no witness in the fog.'),
      interrogation: [
        { q: L('Apa yang terjadi di wawancara terakhir?', 'What happened in the last interview?'),
          a: L('Biasa saja. Ia bercerita soal ayahnya, lalu aku turun duluan. Kabut tebal, aku tak melihat apa-apa.', 'Nothing unusual. He talked about his father, then I went down first. The fog was thick, I saw nothing.') },
        { q: L('Apa isi pengakuan yang hendak ia rekam?', 'What was in the confession he meant to record?'),
          a: L('Pengakuan? Tidak ada. Ia cuma mau bercerita seperti biasa. Filmku soal misteri, bukan bantahan.', 'A confession? There was none. He only meant to tell his story as usual. My film is about a mystery, not a debunking.'), requires: 'kontrak', unlocks: 'pengakuan' },
        { q: L('Kenapa hanya kau yang naik ke menara?', 'Why were you the only one to go up the tower?'),
          a: L('Demi fokus wawancara. Itu permintaan beliau, bukan aku. Jangan dibalik-balik.', 'For the focus of the interview. That was his request, not mine. Do not twist it around.'), requires: 'jadwal' },
      ],
    },
    {
      id: 'sari', init: 'SW', name: 'Prof. Sari Wijaya', age: 47,
      role: L('Sejarawan, pembongkar hoaks', 'Historian, debunker of hoaxes'),
      statement: L(
        '“Aku datang menumbangkan dongeng, bukan orangnya. Justru aku ingin ia hidup untuk mengakuinya sendiri.”',
        '“I came to topple a fairy tale, not the man. In fact I wanted him alive to admit it himself.”'
      ),
      motive: L('Perseteruan publik panjang dengan Wim soal legenda palsu.', 'A long public feud with Wim over the false legend.'),
      alibi: L('Mengisi diskusi publik tersiar langsung di kota saat kejadian.', 'Leading a public talk streamed live in the town when it happened.'),
      interrogation: [
        { q: L('Kau berseteru dengan Wim?', 'Were you feuding with Wim?'),
          a: L('Di publik, ya — aku menyebut legendanya hoaks. Tapi aku ingin ia mengakuinya hidup-hidup. Kematian justru mengubur kebenaran yang kukejar.', 'In public, yes — I called his legend a hoax. But I wanted him to admit it while alive. His death only buries the truth I was chasing.') },
        { q: L('Di mana kau saat kejadian?', 'Where were you when it happened?'),
          a: L('Mengisi diskusi di kota, disiarkan langsung sampai lewat jam sepuluh. Ratusan orang dan rekaman jadi saksiku.', 'Leading a talk in town, streamed live until past ten. Hundreds of people and the recording are my witnesses.'), requires: 'ceramah' },
        { q: L('Benarkah pendiri loji seorang Nazi?', 'Was the lodge founder really a Nazi?'),
          a: L('Sama sekali tidak. Ia administratur kebun teh biasa. Dan Hitler mati di Berlin, 1945 — itu fakta, bukan selera.', 'Not at all. He was an ordinary tea-estate administrator. And Hitler died in Berlin in 1945 — that is fact, not taste.'), requires: 'dosier' },
      ],
    },
    {
      id: 'tobi', init: 'TP', name: 'Tobias "Tobi" Pohl', age: 60,
      role: L('Pengklaim ahli waris & pemburu "harta Nazi"', 'Self-styled heir and hunter of the "Nazi treasure"'),
      statement: L(
        '“Aku cuma menuntut hakku. Loji itu, dan apa pun di bawahnya, milik darahku.”',
        '“I only claim what is mine. That lodge, and whatever lies beneath it, belongs to my blood.”'
      ),
      motive: L('Bersengketa soal warisan loji dan rumor emas Nazi.', 'Disputing the lodge inheritance and the rumored Nazi gold.'),
      alibi: L('Turun gunung sebelum kabut; tercatat di warung bawah.', 'Went down the mountain before the fog; logged at the stall below.'),
      interrogation: [
        { q: L('Apa tuntutanmu pada Wim?', 'What is your claim against Wim?'),
          a: L('Loji itu warisan darahku, begitu pula apa pun yang terkubur di bawahnya. Wim menyerobot semuanya.', 'That lodge is my blood inheritance, and so is whatever is buried beneath it. Wim seized it all.') },
        { q: L('Soal "harta Nazi" itu?', 'And this "Nazi treasure"?'),
          a: L('Aku punya petanya! ...yang ternyata, kata kalian, palsu. Kalau emas itu tak ada, untuk apa aku membunuhnya? Aku malah buntung.', 'I have the map! ...which turns out, you tell me, to be fake. If the gold does not exist, why would I kill him? I would only be the loser.'), requires: 'peta' },
        { q: L('Di mana kau malam itu?', 'Where were you that night?'),
          a: L('Aku ngotot sore hari, lalu turun sebelum kabut. Tanya warung di bawah — aku menggerutu di sana sampai malam.', 'I made my stand in the afternoon, then went down before the fog. Ask the stall below — I sat there grumbling into the night.') },
      ],
    },
    {
      id: 'marwan', init: 'MW', name: 'Marwan', age: 45,
      role: L('Juru kunci & pemandu loji (20 tahun)', 'Caretaker and lodge guide (20 years)'),
      statement: L(
        '“Saya jaga loji ini sejak muda. Apa pun ceritanya, dari sinilah nasi saya.”',
        '“I have kept this lodge since I was young. Whatever the story is, this is where my bread comes from.”'
      ),
      motive: L('Ikut membuat & menjual "relik" demi tambahan; takut terbongkar.', 'Helped make and sell the "relics" for extra money; afraid of being exposed.'),
      alibi: L('Mengunci museum dan berkeliling memeriksa loji bawah saat kejadian.', 'Locking up the museum and making his rounds of the lower lodge when it happened.'),
      interrogation: [
        { q: L('Di mana kau saat kejadian?', 'Where were you when it happened?'),
          a: L('Mengunci museum, lalu keliling memeriksa loji bawah dan kandang. Saya tak naik ke menara malam itu.', 'Locking up the museum, then making my rounds of the lower lodge and the stables. I did not go up the tower that night.') },
        { q: L('Siapa yang naik ke menara bersama Wim?', 'Who went up the tower with Wim?'),
          a: L('Cuma Pak Daniel. Saya yang membukakan pintu menara untuk mereka berdua, lalu turun. Tak ada orang lain.', 'Only Pak Daniel. I unlocked the tower door for the two of them, then went down. No one else.') },
        { q: L('Kau tahu relik museum itu palsu?', 'Did you know the museum relics were fake?'),
          a: L('Saya yang membantu "merapikan" koleksi — tambahan buat dapur. Tapi memalsukan medali beda jauh dengan membunuh tuan saya.', 'I helped "tidy up" the collection — a little extra for the kitchen. But faking a medal is a far cry from killing my master.'), requires: 'relik' },
      ],
    },
    {
      id: 'lestari', init: 'DL', name: 'Dr. Lestari', age: 50,
      role: L('Dokter pribadi keluarga', `The family's private physician`),
      statement: L(
        '“Saya menulis apa yang saya lihat: orang tua, tangga, kabut. Mungkin terlalu cepat.”',
        '“I wrote down what I saw: an old man, stairs, fog. Perhaps too quickly.”'
      ),
      motive: L('Buru-buru menyatakan "kecelakaan"; kliniknya terlilit utang, dan Wim tahu kasus lamanya.', `Rushed to declare it an "accident"; her clinic is buried in debt, and Wim knew of an old case of hers.`),
      alibi: L('Baru dipanggil ke loji subuh setelah jasad ditemukan.', 'Only called to the lodge at dawn, after the body was found.'),
      interrogation: [
        { q: L('Kenapa kau cepat menyebut "kecelakaan"?', 'Why were you so quick to call it an "accident"?'),
          a: L('Kabut, usia, tangga... rasanya jelas. Mungkin saya terlalu lekas, tak memeriksa belakang kepalanya dengan teliti.', 'The fog, his age, the stairs... it seemed obvious. Perhaps I was too hasty, and did not examine the back of his head carefully.') },
        { q: L('Hubunganmu dengan Wim?', 'Your relationship with Wim?'),
          a: L('Pasien lama. Ya, ia tahu satu kasus lama saya. Tapi kalau saya ingin ia bungkam, kenapa baru sekarang — di malam ia justru hendak bicara soal lain?', 'A longtime patient. Yes, he knew of one old case of mine. But if I wanted him silenced, why now — on the very night he meant to speak of something else entirely?') },
        { q: L('Di mana kau saat kejadian?', 'Where were you when it happened?'),
          a: L('Di rumah, di kota. Saya baru dipanggil subuh, setelah jasadnya ditemukan. Cek jam panggilan ke ponsel saya.', 'At home, in town. I was only called at dawn, after his body was found. Check the time of the call to my phone.') },
      ],
    },
  ],
  timeline: [
    { t: L('20.00', '20:00'), key: false, x: L('Prof. Sari mengisi diskusi publik tersiar langsung di kota (hingga 22.30).', 'Prof. Sari leads a public talk streamed live from the town (until 22:30).') },
    { t: L('~20.30', '~20:30'), key: false, x: L('Tobi ribut menuntut "harta Nazi", lalu turun gunung sebelum kabut.', 'Tobi makes a scene demanding the "Nazi treasure," then goes down the mountain before the fog.') },
    { t: L('23.00', '23:00'), key: true, x: L('Wawancara "eksklusif" di ruang menara; hanya Daniel menemani Wim naik.', 'The "exclusive" interview in the tower room; only Daniel goes up with Wim.') },
    { t: L('~23.30', '~23:30'), key: true, x: L('Wim dipukul dengan patung perunggu, lalu direbahkan di kaki menara; kabut menelan segalanya.', 'Wim is struck with the bronze bust, then laid out at the foot of the tower; the fog swallows everything.') },
    { t: L('05.30', '05:30'), key: false, x: L('Jasad ditemukan; Dr. Lestari menyebut "terpeleset di tangga".', 'The body is found; Dr. Lestari calls it "a slip on the stairs."') },
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
      { h: L('Pelakunya: Daniel Hartono', 'The killer: Daniel Hartono'), p: [
        L('Opa Wim tidak terpeleset. Ia dipukul dengan patung perunggu pendiri loji, lalu direbahkan di kaki menara agar tampak jatuh dalam kabut.', `Opa Wim did not slip. He was struck with the bronze bust of the lodge's founder, then laid out at the foot of the tower to look as though he had fallen in the fog.`),
        L(
          'Luka tunggal di belakang kepalanya tak cocok dengan orang menggelinding di tangga; tongkat dan kacamatanya pun tergeletak terlalu rapi. Patung itu ditemukan terlap bersih, masih bernoda darahnya. Dan malam itu hanya satu orang yang naik ke menara bersama Wim — Daniel, seperti dicatat jadwal dan dibukakan pintunya oleh Marwan.',
          'The single wound to the back of his head does not fit a man tumbling down stairs; his cane and glasses, too, lay far too neatly. The bust was found wiped clean, still bearing his blood. And that night only one person went up the tower with Wim — Daniel, as the schedule records and as Marwan, who unlocked the door, confirms.'
        ),
      ] },
      { h: L('Legenda yang palsu', 'A false legend'), p: [
        L(
          'Tak pernah ada Nazi di Garut. Seragam dan medali di museum cuma reproduksi modern; pendiri loji hanyalah administratur kebun teh biasa yang wafat 1951; dan Hitler tewas di Berlin pada 1945. Seluruh "legenda Hitler dari Garut" adalah dagangan — diproduksi untuk menghidupi loji, tur, dan sebuah film.',
          `There was never any Nazi in Garut. The museum's uniform and medals are only modern reproductions; the lodge founder was an ordinary tea-estate administrator who died in 1951; and Hitler died in Berlin in 1945. The whole "Hitler of Garut legend" is merchandise — manufactured to keep a lodge, a tour, and a film alive.`
        ),
      ] },
      { h: L('Membunuh demi kebohongan', 'Killing for a lie'), p: [
        L(
          'Sakit dan menyesal, Wim menyiapkan pengakuan untuk dibacakan di depan kamera: bahwa semuanya rekayasa. Bagi Daniel, pengakuan itu berarti filmnya tak berharga, dana investor berubah jadi perkara penipuan, dan reputasinya hancur. Ia membunuh bukan untuk menutup rahasia Nazi — tapi untuk menjaga kebohongan tetap hidup, lalu berniat menjual kematian Wim sebagai misteri pamungkas filmnya.',
          `Ailing and full of regret, Wim was preparing a confession to read on camera: that all of it was a fabrication. For Daniel, that confession meant a worthless film, investor money turned into a fraud case, and his reputation in ruins. He killed not to keep a Nazi secret — but to keep the lie alive, then meant to sell Wim's death as the ultimate mystery of his film.`
        ),
      ] },
      { h: L('Jebakan: legenda sebagai tameng', 'The misdirection: the legend as a shield'), p: [
        L(
          'Kematian di "loji Nazi" sengaja dibiarkan berbau konspirasi — seolah Wim "dibungkam karena tahu terlalu banyak" — agar curiga mengarah ke pemburu harta dan pembongkar sejarah. Padahal tak ada Nazi, tak ada emas; hanya kabut, dan uang film.',
          'A death at the "Nazi lodge" was deliberately left smelling of conspiracy — as if Wim had been "silenced for knowing too much" — to point suspicion at the treasure hunter and the history-debunker. But there was no Nazi, no gold; only the fog, and the film money.'
        ),
      ] },
      { h: L('Mengapa bukan yang lain', 'Why not the others'), p: [
        L(
          'Prof. Sari disiarkan langsung di kota saat kejadian, dan justru ingin Wim hidup untuk mengaku. Tobi turun gunung sebelum kabut, dan "harta"-nya fiktif — ia rugi bila Wim mati. Renata menjamu tamu, dan ia sendiri ingin berhenti berbohong. Marwan memalsukan relik tapi tak naik menara — ia malah saksi bahwa hanya Daniel yang naik. Dr. Lestari baru tiba subuh, dan membungkam Wim tak masuk akal di malam ia bicara soal yang lain.',
          'Prof. Sari was on a live broadcast in town when it happened, and wanted Wim alive to confess. Tobi went down the mountain before the fog, and his "treasure" is fiction — he loses if Wim dies. Renata was hosting guests, and she herself wanted to stop lying. Marwan faked relics but never went up the tower — he is in fact the witness that only Daniel went up. Dr. Lestari only arrived at dawn, and silencing Wim makes no sense on the very night he meant to speak of something else.'
        ),
        L(
          'Tiga unsur bertemu pada satu orang: motif (pengakuan yang menghancurkan filmnya), cara (patung perunggu menara), dan kesempatan (wawancara berdua di menara). Itu Daniel.',
          'All three elements meet in one person: motive (the confession that would destroy his film), means (the bronze bust in the tower), and opportunity (the two of them alone for the interview). That is Daniel.'
        ),
      ] },
    ],
    rebuttals: {
      renata: L(
        'Renata hidup dari legenda, tapi ia justru lelah berbohong dan ingin menutup "tur Nazi" itu — pengakuan kakeknya melegakannya, bukan mengancamnya. Sepanjang malam ia menjamu tamu di bangunan utama.',
        `Renata lives off the legend, but she was in fact tired of lying and wanted to shut down that "Nazi tour" — her grandfather's confession would have relieved her, not threatened her. All night she was hosting guests in the main building.`
      ),
      sari: L(
        'Saat kejadian, Prof. Sari mengisi diskusi yang disiarkan langsung di kota, disaksikan ratusan orang. Ia ingin Wim mengakui hoaks itu hidup-hidup; kematiannya justru mengubur kebenaran yang ia kejar.',
        'When it happened, Prof. Sari was leading a talk streamed live from the town, witnessed by hundreds. She wanted Wim alive to admit the hoax; his death only buries the truth she was chasing.'
      ),
      tobi: L(
        'Peta "harta Nazi" Tobi palsu — tak ada emas untuk diperebutkan, dan ia rugi bila Wim mati. Lagipula ia sudah turun gunung sebelum kabut, tercatat di warung bawah.',
        `Tobi's "Nazi treasure" map is a fake — there is no gold to fight over, and he loses if Wim dies. Besides, he had already gone down the mountain before the fog, logged at the stall below.`
      ),
      marwan: L(
        'Marwan memang ikut memalsukan relik demi tambahan — dosa kecil, bukan pembunuhan. Ia mengunci museum dan berkeliling loji bawah, tak pernah naik ke menara; justru ia yang melihat hanya Daniel naik bersama Wim.',
        'Marwan did help fake the relics for extra money — a small sin, not murder. He locked up the museum and made his rounds of the lower lodge, never going up the tower; he is in fact the one who saw that only Daniel went up with Wim.'
      ),
      lestari: L(
        'Dr. Lestari terlalu cepat menyebut "kecelakaan", mungkin lalai. Tapi ia baru tiba subuh setelah jasad ditemukan; dan membungkam Wim soal kasus lamanya tak masuk akal justru di malam Wim hendak bicara soal yang sama sekali berbeda.',
        `Dr. Lestari was too quick to call it an "accident," perhaps negligent. But she only arrived at dawn after the body was found; and silencing Wim over her old case makes no sense on the very night he meant to speak of something else entirely.`
      ),
    },
  },
}
