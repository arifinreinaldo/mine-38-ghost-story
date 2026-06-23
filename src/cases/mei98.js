import { L } from '../i18n/L'

// Case 12 (gated). A remembrance piece set against the real May 1998 Tragedy
// (Tragedi Mei 1998) in Jakarta. The plot and every character are FICTIONAL,
// written with respect — not to exploit a real atrocity, but so it is not
// forgotten. The historical backdrop (the Trisakti shootings, the three days
// of riots, the mass deaths, the documented sexual violence, the disappeared
// activists, and the organized provocation found by the official fact-finders)
// is real. No real persons are depicted as the fictional killer.
//
// The mystery is deliberately grey: a student-journalist died as his footage
// was buried, but no single hand can be cleanly convicted — the guilt is
// shared and, like the real cases, was never brought to justice. The honest
// verdict is "no lone killer." The theme is memory against erasure. No
// treasure stage, no celebratory framing.
export const mei98 = {
  id: 'mei98',
  free: false,
  difficulty: 'Sulit',
  code: 'JKT-9805',
  location: L('Jakarta · Mei 1998', 'Jakarta · May 1998'),
  scene: 'kota',
  title: L('Mei Kelabu — Jakarta 1998', 'Grey May — Jakarta 1998'),
  blurb: L(
    'Di tengah api dan kerusuhan Mei 1998, seorang mahasiswa-jurnalis ditemukan tewas — disebut "terjebak kebakaran". Tapi kamera dan kebenarannya hilang. Sebuah kisah agar kita tak lupa.',
    `Amid the fires and riots of May 1998, a student-journalist is found dead — said to be "trapped by the flames." But his camera, and the truth, are gone. A story so that we do not forget.`
  ),
  disclaimer: {
    text: L(
      'Kisah ini fiksi dan tokoh-tokohnya rekaan, tetapi berlatar peristiwa nyata: Tragedi Mei 1998. Penembakan mahasiswa Trisakti, kerusuhan tiga hari, lebih dari seribu korban jiwa, kekerasan seksual massal terutama terhadap perempuan Tionghoa, dan para aktivis yang dihilangkan adalah fakta sejarah. Plot rekaan ini dibuat dengan hormat — bukan untuk mengeksploitasi, melainkan agar kita mengingat. Bagi para korban dan penyintas: kita tidak lupa.',
      `This story and its characters are fictional, but the backdrop is real: the May 1998 Tragedy. The Trisakti shootings, three days of riots, more than a thousand deaths, mass sexual violence — especially against Chinese-Indonesian women — and the activists who were disappeared are matters of historical fact. This invented plot is written with respect — not to exploit, but so that we remember. For the victims and survivors: we do not forget.`
    ),
    source: {
      label: L('Latar sejarah: Kerusuhan Mei 1998 (Wikipedia)', 'Historical background: May 1998 riots of Indonesia (Wikipedia)'),
      url: 'https://en.wikipedia.org/wiki/May_1998_riots_of_Indonesia',
    },
  },
  cover: {
    lead: L(
      '13 Mei 1998. Asap hitam menutup langit Jakarta. Di reruntuhan sebuah pusat pertokoan yang dibakar, jasad Adi Nugroho ditemukan. Petugas menyebutnya korban kebakaran. Tapi kameranya raib, dan luka di kepalanya bercerita lain. Keluarganya hanya minta satu hal: kebenaran — agar tak terkubur bersama abu.',
      `13 May 1998. Black smoke smothers the Jakarta sky. In the ruins of a torched shopping center, the body of Adi Nugroho is found. The officials call him a victim of the fire. But his camera is gone, and the wound on his head tells another story. His family asks for one thing only: the truth — so it is not buried with the ashes.`
    ),
  },
  briefing: {
    paras: [
      L(
        'Mei 1998. Krisis ekonomi meremukkan negeri, dan amarah meluap ke jalan. Pada 12 Mei, empat mahasiswa Trisakti tewas ditembak dalam aksi damai. Keesokan harinya, Jakarta terbakar.',
        'May 1998. An economic crisis had crushed the country, and the anger spilled into the streets. On 12 May, four Trisakti University students were shot dead during a peaceful protest. The next day, Jakarta burned.'
      ),
      L(
        'Selama tiga hari, 13–15 Mei, ribuan toko dan rumah dijarah dan dibakar. Lebih dari seribu orang tewas — banyak yang terjebak di dalam pusat-pusat pertokoan yang dikunci dan dibakar. Perempuan, terutama perempuan Tionghoa, menjadi sasaran kekerasan seksual. Bukti-bukti kemudian menunjukkan kerusuhan itu tidak sepenuhnya spontan: ada yang menggerakkan.',
        'For three days, 13–15 May, thousands of shops and homes were looted and burned. More than a thousand people died — many trapped inside shopping centers that were locked and set ablaze. Women, especially Chinese-Indonesian women, were targeted with sexual violence. Evidence later showed the riots were not wholly spontaneous: someone had set them in motion.'
      ),
      L(
        'Adi Nugroho, 21 tahun, mahasiswa dan jurnalis pers kampus, merekam semuanya. Kini ia mati, kameranya hilang, dan laporan resmi buru-buru menutup kasusnya sebagai kecelakaan. Kakaknya memanggil Anda. Cari tahu apa yang sebenarnya terjadi pada Adi — meski mungkin kebenarannya bukan satu nama, melainkan luka yang jauh lebih besar.',
        'Adi Nugroho, 21, a university student and campus-press journalist, filmed it all. Now he is dead, his camera gone, and the official report has hastily closed the case as an accident. His older sister has called you in. Find out what truly happened to Adi — even if the truth turns out to be not a single name, but a far larger wound.'
      ),
    ],
    taskTitle: L('Tugas Anda', 'Your Task'),
    task: L(
      'Periksa setiap bukti. Interogasi lima orang yang ada di sekitar kejadian. Lalu putuskan apa yang sebenarnya terjadi pada Adi — dan apakah ada satu orang yang benar-benar bisa disebut pembunuhnya, atau justru tak seorang pun.',
      'Examine every piece of evidence. Question the five people who were near the scene. Then decide what truly happened to Adi — and whether any one person can be called his killer at all, or whether no one can.'
    ),
  },
  victim: {
    init: 'AN',
    name: 'Adi Nugroho',
    meta: L('21 tahun · mahasiswa & jurnalis pers kampus', '21 · university student & campus-press journalist'),
    paras: [
      L(
        'Anak muda yang selalu membawa kamera video ke mana-mana. Saat yang lain berlari menjauh dari kerusuhan, Adi justru mendekat — merekam, mencatat, percaya bahwa gambar bisa menjadi saksi yang tak bisa dibungkam.',
        'A young man who carried his video camera everywhere. When others ran from the chaos, Adi moved toward it — filming, taking notes, believing an image could be a witness that no one could silence.'
      ),
      L(
        'Ditemukan pada 14 Mei dini hari di reruntuhan pusat pertokoan di kawasan itu, di dekat pintu samping yang gemboknya rusak. Resmi: "korban yang terjebak kebakaran". Tapi kameranya tak pernah ditemukan.',
        `Found in the early hours of 14 May in the ruins of a shopping center in the district, near a side door whose padlock had been broken. Officially: "a victim trapped by the fire." But his camera was never found.`
      ),
    ],
  },
  evidence: [
    {
      id: 'jasad', icon: 'forensics', tag: L('Lab Forensik', 'Forensic Lab'),
      title: L('Jasad Adi', `Adi's body`),
      summary: L('Bukan mati terbakar — ada luka benda tumpul di kepala, dan paru-parunya bersih dari asap.', 'Not death by fire — a blunt-force wound to the head, and his lungs were clear of smoke.'),
      detail: L(
        'Otopsi membantah laporan resmi. Adi sudah tewas sebelum api menjalar: tidak ada jelaga di saluran napasnya, tidak ada karbon monoksida di darahnya — tanda bahwa ia tidak menghirup asap kebakaran. Penyebab kematian adalah benturan benda tumpul di belakang kepala. Tubuhnya ditinggalkan di dalam gedung agar tampak sebagai korban api.',
        'The autopsy contradicts the official report. Adi was already dead before the fire spread: no soot in his airways, no carbon monoxide in his blood — signs that he never breathed the smoke. The cause of death was blunt-force trauma to the back of the head. His body was left inside the building to look like a victim of the flames.'
      ),
    },
    {
      id: 'kamera', icon: 'photo', tag: L('Barang Bukti', 'Evidence'),
      title: L('Kamera Adi yang hilang', `Adi's missing camera`),
      summary: L('Ia tak pernah lepas dari kameranya — kini kamera itu raib.', 'He never parted from his camera — now it is gone.'),
      detail: L(
        'Setiap orang yang mengenal Adi tahu ia selalu memegang kamera video kecilnya. Saat jasadnya ditemukan, tas dan kamera itu lenyap. Seseorang mengambilnya. Pertanyaannya: apa yang terekam di dalamnya hingga harus dihilangkan?',
        'Everyone who knew Adi knew he always held his small video camera. When his body was found, the bag and the camera were gone. Someone took them. The question is: what did it record that had to disappear?'
      ),
    },
    {
      id: 'rekaman', icon: 'metadata', tag: L('Rekaman', 'Footage'),
      title: L('Salinan rekaman Adi', `A copy of Adi's footage`),
      summary: L('Sehari sebelumnya Adi menitipkan satu salinan. Isinya mengubah segalanya.', 'A day earlier Adi left a copy behind. What it holds changes everything.'),
      locked: true, twist: true,
      detail: L(
        'Ternyata Adi menitipkan satu kaset salinan kepada rekannya. Gambarnya goyang tapi jelas: rombongan lelaki berkaus seragam turun dari truk, membawa daftar dan menandai toko-toko, lalu memprovokasi warga untuk menjarah dan membakar. Mereka bukan warga setempat. Di salah satu bingkai terakhir, terlihat Adi berhadapan dengan koordinator rombongan itu — Heru — sesaat sebelum rekaman terputus.',
        `It turns out Adi had left a copy of one tape with a friend. The picture is shaky but clear: a group of men in matching shirts climbing down from a truck, carrying lists and marking the shops, then goading residents to loot and burn. They were not locals. In one of the last frames, Adi is seen facing the group's coordinator — Heru — moments before the recording cuts off.`
      ),
    },
    {
      id: 'saksitruk', icon: 'recon', tag: L('Kesaksian', 'Witness'),
      title: L('Truk dan orang-orang asing', 'Trucks and strangers'),
      summary: L('Warga melihat orang luar diturunkan dari truk sebelum kerusuhan pecah.', 'Residents saw outsiders unloaded from trucks before the riot broke out.'),
      detail: L(
        'Beberapa warga bercerita hal yang sama: menjelang siang, beberapa truk menurunkan puluhan lelaki yang tidak dikenal di kawasan itu. Merekalah yang pertama melempar batu, mendobrak rolling door, dan meneriaki warga untuk ikut menjarah. Setelah api membesar, mereka menghilang secepat datangnya. Pola ini kelak dicatat tim pencari fakta di banyak titik kerusuhan.',
        'Several residents told the same story: toward midday, a few trucks unloaded dozens of unfamiliar men into the district. They were the first to throw stones, force open the shutters, and shout for residents to join the looting. Once the fire grew, they vanished as fast as they had come. This pattern was later recorded by fact-finders at many flashpoints of the riots.'
      ),
    },
    {
      id: 'pintu', icon: 'evidence', tag: L('Olah TKP', 'Crime Scene'),
      title: L('Pintu yang digembok', 'The chained doors'),
      summary: L('Pintu keluar pusat pertokoan dirantai dari luar saat api menyala.', 'The shopping center exits were chained from outside as the fire burned.'),
      detail: L(
        'Pintu-pintu keluar utama gedung itu ditemukan terrantai dan tergembok dari luar — menjebak siapa pun yang ada di dalam saat api menyala. Adi tewas di dekat pintu samping yang gemboknya ia coba rusak. Sebuah kebakaran tak merantai pintunya sendiri. Ini bukan kecelakaan; ini dirancang.',
        'The building’s main exits were found chained and padlocked from the outside — trapping anyone inside when the fire took hold. Adi died near a side door whose padlock he had tried to break. A fire does not chain its own doors. This was no accident; it was engineered.'
      ),
    },
    {
      id: 'spidol', icon: 'doc', tag: L('Barang Bukti', 'Evidence'),
      title: L('Tanda di pintu toko', 'Marks on the shop shutters'),
      summary: L('Sebagian toko ditandai agar dijarah; sebagian ditulisi agar dilewati.', 'Some shops were marked to be looted; others written on to be spared.'),
      detail: L(
        'Di rolling door sepanjang jalan itu tertinggal coretan: sebagian toko ditandai sasaran, sebagian lain ditulisi "milik pribumi" agar dilewati. Penandaan seperti itu butuh persiapan dan pengetahuan — bukan amukan massa yang buta. Kekerasan itu diarahkan, bukan sekadar meledak.',
        `Along the street, the shutters bore scrawls: some shops marked as targets, others written with "pribumi-owned" to be passed over. Marking like that takes preparation and knowledge — not the blind fury of a crowd. The violence was directed, not merely erupting.`
      ),
    },
    {
      id: 'laporan', icon: 'doc', tag: L('Dokumen', 'Document'),
      title: L('Laporan "kecelakaan"', 'The "accident" report'),
      summary: L('Ditandatangani tergesa oleh Pak Darmawan, bertentangan dengan otopsi.', 'Signed in haste by Pak Darmawan, at odds with the autopsy.'),
      detail: L(
        'Laporan resmi menyebut Adi "korban yang terjebak kebakaran", ditandatangani Pak Darmawan pada pagi yang sama sebelum otopsi keluar. Tak ada penyelidikan, tak ada pertanyaan. Dalam suasana kacau, satu tanda tangan cukup untuk menutup sebuah nyawa menjadi angka statistik.',
        `The official report calls Adi "a victim trapped by the fire," signed by Pak Darmawan that very morning, before the autopsy was out. No investigation, no questions. In the chaos, a single signature was enough to close a life into a statistic.`
      ),
    },
    {
      id: 'jerikan', icon: 'evidence', tag: L('Barang Bukti', 'Evidence'),
      title: L('Jeriken berlabel toko Aliong', `A jerrycan labeled with Aliong's shop`),
      summary: L('Ditemukan dekat jasad — seolah menuding sang tetangga.', 'Found near the body — as if pointing at the neighbor.'),
      herring: true,
      detail: L(
        'Sebuah jeriken bensin bertuliskan nama toko Aliong ditemukan tak jauh dari jasad Adi, seakan dialah pembakarnya. Tapi jeriken itu barang jarahan dari tokonya sendiri yang lebih dulu dibakar. Aliong tak membakar apa pun — ia justru menarik orang-orang keluar dari kobaran. Petunjuk yang sengaja menyesatkan.',
        `A jerrycan of petrol bearing the name of Aliong's shop was found not far from Adi's body, as if he were the arsonist. But the jerrycan was loot from his own store, which had been burned first. Aliong set nothing alight — he was pulling people out of the flames. A deliberately misleading clue.`
      ),
    },
    {
      id: 'arsip', icon: 'ledger', tag: L('Arsip', 'Archive'),
      title: L('Catatan sejarah Mei 1998', 'The historical record of May 1998'),
      summary: L('Apa yang tercatat — dan apa yang sampai kini belum diadili.', 'What is on record — and what remains, to this day, unprosecuted.'),
      detail: L(
        '12 Mei: empat mahasiswa Trisakti ditembak mati. 13–15 Mei: kerusuhan melanda Jakarta dan kota-kota lain; lebih dari seribu orang tewas; ratusan perempuan menjadi korban kekerasan seksual; belasan aktivis dihilangkan dan sebagian tak pernah kembali. Tim Gabungan Pencari Fakta menyimpulkan ada keterlibatan dan pengorganisasian di balik kerusuhan. Hingga puluhan tahun kemudian, sebagian besar pelaku tak pernah diadili. Yang tersisa adalah ingatan — dan tugas untuk tidak melupakannya.',
        '12 May: four Trisakti students were shot dead. 13–15 May: riots swept Jakarta and other cities; more than a thousand people died; hundreds of women were subjected to sexual violence; dozens of activists were disappeared, some never to return. The Joint Fact-Finding Team concluded there was organization and complicity behind the riots. Decades later, most of those responsible have never been brought to trial. What remains is memory — and the duty not to forget it.'
      ),
    },
  ],
  suspects: [
    {
      id: 'heru', init: 'HS', name: 'Heru Santosa', age: 38,
      role: L('Koordinator lapangan yang datang bersama truk', 'A field coordinator who came with the trucks'),
      statement: L(
        '"Saya cuma menjaga ketertiban. Kalau ada yang mati, itu karena kerusuhan — bukan urusan saya. Banyak yang mati malam itu, kenapa ributkan satu anak?"',
        `"I was only keeping order. If someone died, it was the riot — not my doing. Many died that night; why make a fuss over one boy?"`
      ),
      motive: L('Adi merekam rombongannya menggerakkan dan mengarahkan kerusuhan.', 'Adi filmed his group setting the riot in motion and steering it.'),
      alibi: L('Mengaku tak mengenal Adi dan "sedang di tempat lain" — tak ada yang membenarkan.', `Claims he never knew Adi and was "somewhere else" — no one backs him up.`),
      interrogation: [
        { q: L('Untuk apa Anda dan truk-truk itu datang ke kawasan ini?', 'Why did you and those trucks come to this district?'),
          a: L('"Mengamankan, katanya. Kami diminta datang. Saya tidak menanyakan siapa yang meminta — begitu zamannya."', `"To secure it, they said. We were asked to come. I didn't ask who was asking — that was how those days worked."`) },
        { q: L('Saksi melihat orang-orang Anda menandai toko dan memancing massa.', 'Witnesses saw your men marking shops and baiting the crowd.'),
          a: L('"Orang bisa salah lihat dalam kepanikan. Toko terbakar sendiri, massa bergerak sendiri. Saya tak menyuruh siapa pun."', `"People mistake things in a panic. Shops burn on their own, crowds move on their own. I ordered no one."`), requires: 'saksitruk' },
        { q: L('Ada rekaman yang memperlihatkan Anda berhadapan dengan Adi sebelum ia tewas.', 'There is footage showing you facing Adi just before he died.'),
          a: L('"Jadi saya di sana. Ratusan orang di sana. Anak itu jatuh dalam kerusuhan, seperti seribu orang lain. Tunjukkan tangan yang membunuhnya — Anda tak bisa, karena tak ada satu tangan untuk ditunjuk. Dan kalaupun bisa, Anda kira saya yang paling penting? Saya hanya diminta datang."', `"So I was there. Hundreds were there. The boy fell in a riot, like a thousand others. Show me the hand that killed him — you can't, because there is no single hand to point to. And even if you could, do you think I'm the one who matters? I was only asked to come."`), requires: 'rekaman' },
      ],
    },
    {
      id: 'darmawan', init: 'PD', name: 'Pak Darmawan', age: 55,
      role: L('Petugas yang menandatangani laporan', 'The official who signed the report'),
      statement: L(
        '"Saya menutup kasus karena diperintah, dan karena takut. Saat itu nyawa murah dan pertanyaan mahal. Saya salah — tapi saya tidak membunuhnya."',
        `"I closed the case because I was ordered to, and because I was afraid. Back then lives were cheap and questions costly. I was wrong — but I did not kill him."`
      ),
      motive: L('Ingin perkara cepat selesai dan tak menyeret dirinya.', 'Wanted the matter closed quickly and kept clear of himself.'),
      alibi: L('Berada di pos, bukan di lokasi saat Adi tewas.', 'Was at his post, not at the scene when Adi died.'),
      interrogation: [
        { q: L('Mengapa Anda menyebutnya kecelakaan sebelum otopsi keluar?', 'Why did you call it an accident before the autopsy was out?'),
          a: L('"Saya hanya menandatangani apa yang diletakkan di meja saya. Ada yang ingin ini cepat selesai. Saya tak punya keberanian untuk menolak."', `"I only signed what was put on my desk. Someone wanted this closed fast. I hadn't the courage to refuse."`), requires: 'laporan' },
        { q: L('Siapa yang menekan Anda?', 'Who pressured you?'),
          a: L('"Orang-orang yang datang bersama truk itu, dan yang mengirim mereka. Saya tak berani menyebut nama. Saya hanya pegawai kecil yang ingin pulang hidup-hidup."', `"The men who came with the trucks, and whoever sent them. I dare not name names. I am only a small clerk who wanted to go home alive."`) },
        { q: L('Apakah Anda melihat Adi malam itu?', 'Did you see Adi that night?'),
          a: L('"Tidak. Saya baru melihat namanya di berkas, pagi harinya. Maafkan saya — pada anak itu, dan pada semua yang namanya jadi sekadar angka."', `"No. I first saw his name on the file, the next morning. Forgive me — that boy, and everyone whose name became just a number."`) },
      ],
    },
    {
      id: 'aliong', init: 'LA', name: 'Aliong', age: 47,
      role: L('Pemilik toko, tetangga Adi', `A shopkeeper, Adi's neighbor`),
      statement: L(
        '"Toko saya habis dibakar, tapi saya masih hidup karena Adi dan beberapa orang menarik kami keluar. Mereka menuduh saya? Saya kehilangan segalanya malam itu."',
        `"My shop was burned to nothing, but I am alive because Adi and a few others pulled us out. They accuse me? I lost everything that night."`
      ),
      motive: L('Tak ada — ia korban, bukan pelaku.', 'None — he was a victim, not a perpetrator.'),
      alibi: L('Terlihat menolong orang keluar dari gedung saat Adi sudah tewas.', 'Seen helping people out of the building when Adi was already dead.'),
      interrogation: [
        { q: L('Jeriken berlabel toko Anda ditemukan dekat jasad Adi.', `A jerrycan labeled with your shop was found near Adi's body.`),
          a: L('"Itu jarahan dari toko saya sendiri! Mereka kuras lalu bakar toko saya. Saya tak menyentuh jeriken itu — saya menggendong anak orang keluar dari asap."', `"That was looted from my own shop! They emptied it, then burned my store. I never touched that jerrycan — I was carrying someone's child out of the smoke."`), requires: 'jerikan' },
        { q: L('Apa yang Anda lihat terjadi pada Adi?', 'What did you see happen to Adi?'),
          a: L('"Ia merekam orang-orang truk itu. Mereka marah sekali padanya. Saya berteriak agar ia lari, tapi asap memisahkan kami. Lalu ia tak ada lagi."', `"He was filming the men from the trucks. They were furious with him. I shouted for him to run, but the smoke separated us. Then he was gone."`) },
        { q: L('Kenapa Anda tetap di sana, bukannya menyelamatkan diri?', 'Why did you stay, instead of saving yourself?'),
          a: L('"Karena di dalam masih ada orang. Toko bisa dibangun lagi; nyawa tidak. Adi mengajari saya itu — dengan caranya mati."', `"Because people were still inside. A shop can be rebuilt; a life cannot. Adi taught me that — by the way he died."`) },
      ],
    },
    {
      id: 'maya', init: 'MY', name: 'Maya', age: 22,
      role: L('Rekan pers kampus Adi', `Adi's campus-press partner`),
      statement: L(
        '"Adi temanku. Mereka bilang aku menjual rekamannya — tidak. Aku menyembunyikannya. Itu satu-satunya yang tersisa darinya, dan dari kebenaran."',
        `"Adi was my friend. They say I sold his footage — no. I hid it. It is the only thing left of him, and of the truth."`
      ),
      motive: L('Tak ada motif membahayakan Adi; ia justru menjaga buktinya.', 'No motive to harm Adi; she guarded his evidence instead.'),
      alibi: L('Di kampus mengoordinasi relawan saat kejadian.', 'At campus coordinating volunteers at the time.'),
      interrogation: [
        { q: L('Apakah Adi meninggalkan sesuatu padamu?', 'Did Adi leave anything with you?'),
          a: L('"...Ya. Sehari sebelumnya ia menitipkan satu kaset salinan. \'Kalau terjadi sesuatu padaku,\' katanya, \'pastikan orang melihat ini.\' Aku takut, tapi aku menyimpannya. Ambillah — tonton."', `"...Yes. The day before, he left me a copy of one tape. 'If something happens to me,' he said, 'make sure people see this.' I was afraid, but I kept it. Take it — watch it."`), unlocks: 'rekaman' },
        { q: L('Mengapa kau tak segera menyerahkannya?', `Why didn't you hand it over right away?`),
          a: L('"Kepada siapa? Yang berseragam pun ada yang terlibat. Aku menunggu seseorang yang mau benar-benar melihat. Kurasa itu kamu."', `"To whom? Even some in uniform were involved. I waited for someone who would truly look. I think that is you."`) },
        { q: L('Seperti apa Adi yang kau kenal?', 'What was the Adi you knew like?'),
          a: L('"Keras kepala. Percaya bahwa kalau cukup banyak orang melihat kebenaran, mereka tak akan diam. Aku ingin ia benar. Karena itu rekaman ini tak boleh hilang."', `"Stubborn. He believed that if enough people saw the truth, they would not stay silent. I want him to be right. That is why this footage must not be lost."`) },
      ],
    },
    {
      id: 'rahmat', init: 'RH', name: 'Rahmat', age: 24,
      role: L('Tukang ojek setempat', 'A local motorcycle-taxi driver'),
      statement: L(
        '"Saya cuma cari nafkah di jalan itu. Malam itu saya lihat banyak hal yang ingin saya lupakan. Tapi katanya Anda ingin tahu — baik, saya cerita."',
        `"I just make my living on that street. That night I saw things I wish I could forget. But they say you want to know — fine, I will tell you."`
      ),
      motive: L('Tak ada; ia saksi yang ketakutan.', 'None; he is a frightened witness.'),
      alibi: L('Berlindung di gang saat kerusuhan, melihat dari kejauhan.', 'Sheltered in an alley during the riot, watching from a distance.'),
      interrogation: [
        { q: L('Apa yang Anda lihat sebelum kerusuhan pecah?', 'What did you see before the riot broke out?'),
          a: L('"Truk-truk datang. Orang-orang turun, rapi, seperti sudah tahu harus ke mana. Warga sini tidak begitu. Mereka yang mulai semua."', `"The trucks came. Men got down, orderly, as if they already knew where to go. People from here aren't like that. They started it all."`) },
        { q: L('Apakah Anda mengenali pemimpin mereka?', 'Did you recognize their leader?'),
          a: L('"Yang mengatur-atur itu — yang dipanggil Heru. Dia menunjuk toko, orang-orang membakarnya. Saya lihat dia mengejar anak berkamera itu ke dalam gedung. Saya tak berani mengikuti."', `"The one giving orders — they called him Heru. He pointed at a shop, and they burned it. I saw him chase the boy with the camera into the building. I didn't dare follow."`) },
        { q: L('Mengapa baru sekarang Anda bicara?', 'Why are you speaking only now?'),
          a: L('"Karena selama ini bertanya pun berbahaya. Tapi anak itu mati sambil merekam supaya kita ingat. Paling tidak saya bisa berhenti pura-pura lupa."', `"Because for so long even asking was dangerous. But that boy died filming so we would remember. The least I can do is stop pretending to forget."`) },
      ],
    },
  ],
  timeline: [
    { t: L('12 Mei', '12 May'), key: false, x: L('Empat mahasiswa Trisakti tewas ditembak dalam aksi damai. Amarah menyebar ke seluruh kota.', 'Four Trisakti students are shot dead during a peaceful protest. Anger spreads across the city.') },
    { t: L('13 Mei, siang', '13 May, midday'), key: true, x: L('Truk-truk menurunkan orang-orang asing di kawasan itu. Toko-toko ditandai; massa dipancing menjarah.', 'Trucks unload outsiders into the district. Shops are marked; the crowd is goaded into looting.') },
    { t: L('13 Mei, sore', '13 May, afternoon'), key: true, x: L('Pusat pertokoan dibakar; pintu-pintu keluar dirantai. Adi merekam rombongan Heru.', `The shopping center is set ablaze; the exits are chained. Adi films Heru's group.`) },
    { t: L('13 Mei, menjelang malam', '13 May, toward nightfall'), key: true, x: L('Adi terlihat dikejar ke dalam gedung. Rekaman di kaset salinan terputus di titik ini.', 'Adi is seen chased into the building. The copied tape cuts off at this point.') },
    { t: L('14 Mei, dini hari', '14 May, before dawn'), key: false, x: L('Jasad Adi ditemukan; laporan resmi menyebutnya korban kebakaran.', `Adi's body is found; the official report calls him a victim of the fire.`) },
    { t: L('21 Mei', '21 May'), key: false, x: L('Presiden Soeharto mengundurkan diri; era Reformasi dimulai. Banyak kasus Mei tak pernah tuntas.', 'President Suharto resigns; the Reformasi era begins. Many May cases are never resolved.') },
  ],
  solution: {
    // The honest verdict is that no single hand can be convicted: the footage
    // proves the violence was engineered but cuts off before any blow. The
    // "not a murder" verdict is reframed (no killer, but no innocent accident
    // either) — guilt is shared and was never brought to justice.
    accident: true,
    verdictLabel: L(
      'Tak ada pembunuh tunggal — kekerasan yang dirancang, dan tak pernah diadili',
      'No single killer — an engineered violence, never brought to justice'
    ),
    verdictChosen: L(
      'tak ada pelaku tunggal — kejahatan yang dirancang bersama dan dibiarkan tanpa keadilan',
      'no single culprit — a crime engineered together and left without justice'
    ),
    proofLabels: {
      motive: { label: L('Yang menyalakan', 'What lit it'), hint: L('Apa yang menggerakkan kekerasan ini?', 'What set this violence in motion?') },
      means: { label: L('Yang membunuh', 'What killed him'), hint: L('Mengapa ini bukan sekadar kecelakaan?', 'Why was this no mere accident?') },
      opportunity: { label: L('Yang dikubur', 'What was buried'), hint: L('Bagaimana kebenarannya ditutupi?', 'How was the truth hidden?') },
    },
    motive: ['saksitruk', 'spidol', 'rekaman'],
    means: ['jasad', 'pintu'],
    opportunity: ['kamera', 'laporan', 'rekaman'],
  },
  reveal: {
    sections: [
      { h: L('Bukan kecelakaan', 'Not an accident'), p: [
        L(
          'Mari mulai dari yang pasti: Adi tidak sekadar terjebak api. Paru-parunya bersih dari asap, ada luka benda tumpul di kepalanya, dan pintu-pintu gedung itu dirantai dari luar. Kematiannya dibuat agar tampak sebagai satu angka lagi di antara seribu. Sejauh itu, jelas.',
          `Begin with what is certain: Adi was not simply trapped by the fire. His lungs were clear of smoke, there was blunt-force trauma to his head, and the building's doors were chained from the outside. His death was made to look like one more number among a thousand. That much is clear.`
        ),
      ] },
      { h: L('Tapi tangan siapa?', 'But whose hand?'), p: [
        L(
          'Di sinilah kebenaran menolak menjadi rapi. Rekaman Adi membuktikan kekerasan itu dirancang — rombongan Heru turun dari truk, menandai toko, menggerakkan massa. Tapi kaset itu terputus tepat saat Adi berhadapan dengan mereka, sebelum pukulan yang mana pun. Di tengah asap, kepanikan, dan ratusan orang, tak ada satu bingkai pun yang menunjukkan tangan siapa yang merenggut nyawanya.',
          `Here the truth refuses to be tidy. Adi's footage proves the violence was engineered — Heru's group climbing down from the trucks, marking the shops, driving the crowd. But the tape cuts off just as Adi faces them, before any blow. Amid the smoke, the panic, and hundreds of people, not one frame shows whose hand took his life.`
        ),
        L(
          'Heru memancing kerusuhan dan mengejar Adi; orang-orangnya mengambil kamera itu. Ia bergelimang salah. Namun "pembunuh" adalah kata yang terlalu pasti untuk bukti yang ada — dan terlalu kecil untuk kejahatan yang sebenarnya. Sebab di atas Heru ada orang-orang yang mengirim truk-truk itu: nama-nama yang tak pernah tertangkap kamera, dan tak pernah tersentuh hukum.',
          `Heru baited the riot and chased Adi; his men took the camera. He is steeped in guilt. Yet "murderer" is a word too certain for the proof we hold — and too small for the real crime. For above Heru stood those who sent the trucks: names no camera ever caught, and the law never touched.`
        ),
      ] },
      { h: L('Setiap orang, satu warna kelabu', 'Each one a shade of grey'), p: [
        L(
          'Pak Darmawan mengubur kasus ini dengan tanda tangan, karena takut — bersalah atas diam, bukan atas darah. Aliong kehilangan tokonya dan menarik orang dari api; jeriken bernama dirinya hanyalah jebakan. Maya menyembunyikan rekaman dengan taruhan nyawa agar kebenaran tak padam. Rahmat melihat, lalu terlalu lama takut bersuara. Tak satu pun dari mereka membunuh Adi — tapi tak satu pun benar-benar tak bernoda. Begitulah cara sebuah tragedi bekerja: ia mengotori setiap tangan, lalu menyembunyikan tangan yang paling berdarah.',
          `Pak Darmawan buried the case with a signature, out of fear — guilty of silence, not of blood. Aliong lost his shop and pulled people from the flames; the jerrycan bearing his name was only a trap. Maya hid the footage at the risk of her life so the truth would not die. Rahmat saw, then was too long afraid to speak. None of them killed Adi — yet none is wholly unstained. That is how a tragedy works: it dirties every hand, then hides the bloodiest one.`
        ),
      ] },
      { h: L('Keadilan yang tak pernah datang', 'A justice that never came'), p: [
        L(
          'Dalam cerita yang rapi, kita menunjuk satu penjahat dan keadilan ditegakkan. Mei 1998 bukan cerita yang rapi. Para perancangnya tak pernah diadili, kasus-kasusnya tak pernah ditutup, dan tak seorang pun pernah benar-benar dinyatakan bersalah. Menunjuk satu kambing hitam hanya akan mengulang kebohongan yang sama — membiarkan mereka yang sungguh bertanggung jawab menghilang, persis seperti yang sudah terjadi.',
          `In a tidy story, we name one villain and justice is done. May 1998 was not a tidy story. Its architects were never tried, its cases never closed, and no one was ever truly found guilty. To name a single scapegoat would only repeat the same lie — letting those truly responsible vanish, exactly as they already have.`
        ),
        L(
          'Maka inilah kesimpulan yang paling jujur, dan paling sukar ditanggung: tak ada satu pembunuh untuk dihukum, hanya kejahatan yang dirancang bersama dan dibiarkan tanpa keadilan. Tapi rekaman Adi selamat, karena seseorang menolak melupakan. Mengingat adalah keadilan paling sederhana yang masih bisa kita berikan. Kepada para korban dan penyintas Mei 1998: kami mengenang kalian.',
          `So this is the most honest verdict, and the hardest to bear: there is no lone killer to punish, only a crime engineered together and left without justice. But Adi's footage survived, because someone refused to forget. To remember is the simplest justice we can still give. To the victims and survivors of May 1998: we remember you.`
        ),
      ] },
    ],
    rebuttals: {
      heru: L(
        'Heru memancing kerusuhan, mengejar Adi, dan orang-orangnya mengambil kameranya — ia paling bergelimang salah di sini. Tapi rekaman terputus sebelum pukulan, dan di tengah asap tak ada yang bisa membuktikan tangannya yang membunuh. Menghukum dia seorang diri pun membiarkan para perancang di atasnya lolos — seperti yang sungguh terjadi. Bersalah, ya; tapi "sang pembunuh" terlalu pasti, dan terlalu kecil.',
        `Heru baited the riot, chased Adi, and his men took the camera — he is the most steeped in guilt here. But the tape cuts off before the blow, and in the smoke no one can prove his was the hand that killed. To punish him alone also lets the architects above him walk free — as they truly did. Guilty, yes; but "the murderer" is too certain, and too small.`
      ),
      darmawan: L(
        'Pak Darmawan menutup kasus dengan tanda tangan, bukan dengan tangan yang membunuh. Ia pengecut yang ditekan — bersalah atas diam, bukan atas nyawa Adi.',
        `Pak Darmawan closed the case with a signature, not the hands that killed. A coward under pressure — guilty of silence, not of Adi's life.`
      ),
      aliong: L(
        'Aliong kehilangan tokonya dan menarik orang keluar dari kobaran. Jeriken bernama dirinya hanyalah jarahan yang ditinggalkan untuk menudingnya. Ia korban, bukan pembunuh.',
        'Aliong lost his shop and pulled people from the flames. The jerrycan bearing his name was only loot left to point at him. He is a victim, not a killer.'
      ),
      maya: L(
        'Maya menyimpan rekaman Adi dengan taruhan nyawanya sendiri agar kebenaran tak padam. Ia menjaga bukti, bukan melenyapkan saksinya.',
        `Maya kept Adi's footage at the risk of her own life so the truth would not die. She guarded the evidence; she did not silence the witness.`
      ),
      rahmat: L(
        'Rahmat melihat Heru mengejar Adi ke dalam gedung, tapi terlalu takut untuk mengikuti. Diamnya bertahun-tahun adalah satu warna kelabu — tapi ketakutan bukanlah pembunuhan.',
        'Rahmat saw Heru chase Adi into the building, but was too afraid to follow. His years of silence are a shade of grey — but fear is not murder.'
      ),
    },
  },
}
