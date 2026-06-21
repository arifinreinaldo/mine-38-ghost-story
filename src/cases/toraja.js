import { L } from '../i18n/L'

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
  location: L(`Tana Toraja, Sulawesi · Upacara Rambu Solo'`, `Tana Toraja, Sulawesi · A Rambu Solo' ceremony`),
  scene: 'toraja',
  title: L(`Maut di Rambu Solo'`, `Death at the Rambu Solo'`),
  blurb: L(
    `Di tengah upacara duka yang agung, kain kafan sang mendiang konon bangkit dan berjalan — dan esoknya pewaris utama tewas di kaki menara duka. Murka leluhur, atau tangan manusia?`,
    `In the midst of a grand funeral rite, the shroud of the departed is said to rise and walk — and the next day the chief heir lies dead at the foot of the mourning tower. The wrath of the ancestors, or the hand of a man?`
  ),
  disclaimer: {
    text: L(
      `Kisah ini fiksi, terinspirasi tradisi Rambu Solo' dan kepercayaan Aluk To Dolo masyarakat Toraja — tongkonan, tau-tau, menara lakkian, kurban tedong, dan legenda mayat berjalan (Rolang). Legenda itu hanyalah cerita tutur; tak ada jasad yang benar-benar berjalan. Seluruh tokoh, nama, dan peristiwa rekaan belaka, dan tidak menggambarkan keluarga atau orang Toraja mana pun yang nyata.`,
      `This is a work of fiction, inspired by the Rambu Solo' tradition and the Aluk To Dolo beliefs of the Toraja people — the tongkonan, the tau-tau, the lakkian tower, the tedong sacrifices, and the legend of the walking dead (Rolang). That legend is only a tale handed down by word of mouth; no corpse truly walks. All characters, names, and events are pure invention, and do not depict any real Toraja family or person.`
    ),
    source: {
      label: L(
        `Latar tradisi: “Toraja Funeral Rites: Traditions and Ancestral Symbols” (Terra Cultura)`,
        `Tradition background: “Toraja Funeral Rites: Traditions and Ancestral Symbols” (Terra Cultura)`
      ),
      url: 'https://terra-cultura.com/en/toraja-funeral-rites-traditions-and-ancestral-symbols/',
    },
  },
  cover: {
    lead: L(
      `Mereka bersumpah melihat jasad Ne’ Sombolinggi’ berdiri dan melangkah dalam gelap. Pagi harinya, putra sulungnya mati di bawah menara lakkian. Toraja menyebutnya kutukan leluhur. Tapi Anda tahu: kematian selalu meninggalkan jejak — bahkan saat ia menyamar jadi sihir.`,
      `They swear they saw the body of Ne’ Sombolinggi’ stand and stride through the dark. By morning, his eldest son lay dead beneath the lakkian tower. Toraja calls it a curse of the ancestors. But you know better: death always leaves a trace — even when it disguises itself as sorcery.`
    ),
  },
  briefing: {
    paras: [
      L(
        `Di pegunungan Tana Toraja, keluarga Sombolinggi’ menggelar Rambu Solo’ — upacara duka berhari-hari bagi mendiang Ne’ Sombolinggi’. Berbulan-bulan jasadnya dirawat di dalam tongkonan sebagai to makula’, “orang sakit” yang belum dianggap mati, sembari keluarga mengumpulkan puluhan tedong (kerbau). Besar-kecilnya upacara — dan pembagian sawah warisan — ditentukan oleh hitungan tedong itu.`,
        `In the highlands of Tana Toraja, the Sombolinggi’ family holds a Rambu Solo’ — a funeral rite spanning many days for the late Ne’ Sombolinggi’. For months his body has been kept within the tongkonan as a to makula’, a “sick person” not yet counted as dead, while the family gathers dozens of tedong (water buffalo). The scale of the ceremony — and the division of the inherited rice fields — is decided by that tally of buffalo.`
      ),
      L(
        `Pada malam menjelang pembagian warisan, beberapa saksi bersumpah melihat kain kafan Ne’ berdiri dan berjalan ke arah menara lakkian dalam kegelapan. Terikat pantang, semua menunduk dan menyingkir — tak boleh menyentuh, menatap, apalagi mendahului yang berjalan. Saat fajar, Yohanis, putra sulung yang esok harinya akan membacakan pembagian warisan, ditemukan tewas di kaki menara.`,
        `On the night before the inheritance was to be divided, several witnesses swore they saw the shroud of Ne’ rise and walk toward the lakkian tower in the dark. Bound by taboo, everyone bowed their heads and drew aside — none may touch, look upon, much less walk ahead of the one who walks. At dawn, Yohanis, the eldest son who was to read out the division the next day, was found dead at the foot of the tower.`
      ),
      L(
        `Sekampung berbisik: ini kuasa Aluk To Dolo, murka leluhur yang bangkit. Keluarga ketakutan, cemas kutukan akan memakan korban lain, lalu memanggil Anda. Periksa baik-baik: benarkah seorang mati berjalan — atau adakah yang ingin Anda percaya begitu?`,
        `The whole village whispers: this is the power of Aluk To Dolo, the wrath of an ancestor risen. The family, terrified that the curse will claim another, has called you in. Look closely: did a dead man truly walk — or is there someone who wants you to believe he did?`
      ),
    ],
    taskTitle: L(`Tugas Anda`, `Your Task`),
    task: L(
      `Periksa setiap bukti. Interogasi keenam orang terdekat duka ini. Lalu tunjuk pelakunya — dan buktikan bagaimana “mayat berjalan” itu direka. Susun pembuktianmu.`,
      `Examine every piece of evidence. Question the six people closest to this death. Then name the culprit — and prove how the “walking corpse” was staged. Build your case.`
    ),
  },
  victim: {
    init: 'YS',
    name: 'Yohanis Sombolinggi’',
    meta: L(`41 tahun · putra sulung & pewaris utama`, `41 · eldest son & principal heir`),
    paras: [
      L(
        `Putra sulung mendiang, dialah yang memegang buku tally tedong dan esok hari akan membacakan pembagian sawah di hadapan seluruh keluarga. Disegani, dan dikenal membela kerabat yang tersisih.`,
        `The eldest son of the deceased, he was the keeper of the buffalo tally book, and the next day he would read out the division of the rice fields before the whole family. Respected, and known for standing up for the relatives who had been pushed aside.`
      ),
      L(
        `Ditemukan pada fajar di kaki menara lakkian, lehernya patah. Di sisinya tergeletak tempurung tuak semalam. Sekeliling hanya berbisik satu kalimat: jasad ayahnya telah bangkit dan berjalan.`,
        `Found at dawn at the foot of the lakkian tower, his neck broken. Beside him lay the previous night's palm-wine gourd. All around, only one sentence was whispered: his father's body had risen and walked.`
      ),
    ],
  },
  evidence: [
    {
      id: 'jenazah', icon: 'forensics', tag: L(`Lab Forensik`, `Forensic Lab`),
      title: L(`Luka maut Yohanis`, `Yohanis's fatal injuries`),
      summary: L(`Leher patah karena jatuh dari menara — tapi ada bekas cengkeraman.`, `Neck broken from a fall off the tower — but there are grip marks.`),
      detail: L(
        `Leher Yohanis patah akibat jatuh dari ketinggian menara lakkian. Tapi tubuhnya terlempar terlalu jauh dari kaki menara untuk sekadar terpeleset, dan di lengannya ada memar bentuk cengkeraman jari. Ini bukan jatuh sendiri, dan jelas bukan tangan gaib — ia didorong oleh seseorang yang sangat hidup.`,
        `Yohanis's neck was broken by a fall from the height of the lakkian tower. But his body was thrown too far from the foot of the tower for a simple slip, and on his arm there are bruises shaped like the grip of fingers. This was no fall of his own, and certainly no spectral hand — he was pushed by someone very much alive.`
      ),
    },
    {
      id: 'tuak', icon: 'cup', tag: L(`Lab Forensik`, `Forensic Lab`),
      title: L(`Tuak Yohanis dibubuhi`, `Yohanis's palm wine was spiked`),
      summary: L(`Tempurung tuaknya mengandung rebusan kecubung — obat bius.`, `His palm-wine gourd held a brew of datura — a sedative.`),
      detail: L(
        `Sisa tuak (ballo’) di tempurung Yohanis bercampur rebusan biji kecubung — bius kuat yang membuat linglung dan limbung. Dalam keadaan setengah sadar di malam gelap, ia mudah dituntun ke mana saja — termasuk menaiki tangga menara lakkian yang curam.`,
        `The dregs of palm wine (ballo’) in Yohanis's gourd were laced with a brew of datura seeds — a powerful drug that leaves a man dazed and unsteady. Half-conscious in the dark of night, he could be led anywhere with ease — including up the steep ladder of the lakkian tower.`
      ),
    },
    {
      id: 'tangga', icon: 'recon', tag: L(`Rekonstruksi`, `Reconstruction`),
      title: L(`Tangga menara lakkian`, `The lakkian tower ladder`),
      summary: L(`Di lumpur dekat tangga: satu set tapak bersandal yang masih segar.`, `In the mud by the ladder: a fresh set of sandal prints.`),
      detail: L(
        `Menara lakkian — tempat keluarga duduk di atas selama upacara. Di lumpur dekat kaki tangganya ada tapak Yohanis, dan di sampingnya satu set tapak bersandal lain yang masih segar, naik lalu turun. Seseorang yang hidup dan beralas kaki menaiki menara itu bersamanya malam itu.`,
        `The lakkian tower — where the family sits aloft throughout the ceremony. In the mud at the foot of its ladder are Yohanis's prints, and beside them another fresh set of sandal prints, going up and then coming down. Someone living and shod climbed that tower with him that night.`
      ),
    },
    {
      id: 'kafan', icon: 'apparel', tag: L(`Barang Bukti`, `Evidence`),
      title: L(`Kain kafan kedua`, `A second shroud`),
      summary: L(`Sehelai kain kafan cadangan, tersembunyi — ujungnya berlumpur, bau tuak.`, `A spare shroud, hidden away — its hem muddy, reeking of palm wine.`),
      detail: L(
        `Terselip di balik tumpukan kayu dekat rante: sehelai kain kafan (sarita) kedua, bukan milik jasad. Ujungnya berlumpur dan berbau tuak. Inilah yang dikenakan seseorang untuk menyaru menjadi “mayat berjalan” — kain duka yang dijadikan kostum.`,
        `Tucked behind a woodpile near the rante: a second shroud (sarita), not the one on the body. Its hem is muddy and smells of palm wine. This is what someone wore to pass as the “walking corpse” — a cloth of mourning turned into a costume.`
      ),
    },
    {
      id: 'jejak', icon: 'recon', tag: L(`Rekonstruksi`, `Reconstruction`),
      title: L(`Jejak “mayat berjalan”`, `Tracks of the “walking corpse”`),
      summary: L(`Sosok yang berjalan meninggalkan tapak bersandal — bukan kaki telanjang.`, `The figure that walked left sandal prints — not bare feet.`),
      detail: L(
        `Di jalur tempat “mayat” konon melangkah, tertinggal jejak kaki bersandal yang menapak penuh — langkah orang hidup. Jasad yang dibungkus kafan diusung di atas usungan dan kakinya telanjang; ia tak meninggalkan jejak melangkah. Yang berjalan malam itu bersandal, dan ia bernyawa.`,
        `Along the path where the “corpse” supposedly walked, there are full sandal prints pressed into the ground — the gait of a living person. A shroud-wrapped body is carried on a bier with bare feet; it leaves no walking tracks. Whatever walked that night wore sandals, and it was alive.`
      ),
    },
    {
      id: 'simpul', icon: 'evidence', tag: L(`Temuan Kunci`, `Key Finding`),
      title: L(`Ikatan ritus yang utuh`, `The ritual binding, untouched`),
      summary: L(`Simpul dan segel pada jasad asli tak tersentuh — debu di atasnya tak terusik.`, `The knots and seal on the real body untouched — the dust above it undisturbed.`),
      locked: true, twist: true,
      detail: L(
        `Jasad Ne’ Sombolinggi’ diikat dan disegel to minaa dengan simpul ritus. Pagi itu simpul masih utuh, segel masih melekat, dan debu tipis di atas usungan sama sekali tak terusik. Jasad itu tak pernah beranjak seujung jari pun dari tongkonan. Maka yang “berjalan” di luar bukanlah dia — melainkan seseorang yang mengenakan kafan kedua.`,
        `The body of Ne’ Sombolinggi’ had been bound and sealed by the to minaa with ritual knots. That morning the knots were still intact, the seal still in place, and the thin layer of dust over the bier wholly undisturbed. That body had not shifted so much as a fingertip from the tongkonan. So whatever “walked” outside was not him — but someone wearing the second shroud.`
      ),
    },
    {
      id: 'buku', icon: 'ledger', tag: L(`Dokumen`, `Document`),
      title: L(`Buku tally tedong`, `The buffalo tally book`),
      summary: L(`Hitungan kerbau tak cocok — ada ternak “ada” yang sebenarnya tiada.`, `The buffalo count doesn't add up — beasts marked “present” that are nowhere to be found.`),
      detail: L(
        `Buku catatan tedong, dipegang sang pencatat. Beberapa ekor tercatat masih ada atau telah dikurbankan, padahal kandangnya kosong. Di tepi halaman, tangan Yohanis melingkari ternak-ternak yang hilang itu dengan tinta merah, dengan tanda tanya besar.`,
        `The buffalo ledger, kept by the family clerk. Several head are recorded as still present or already sacrificed, yet their pens stand empty. In the margin, Yohanis's hand has circled the missing beasts in red ink, with a great question mark.`
      ),
    },
    {
      id: 'resi', icon: 'doc', tag: L(`Dokumen`, `Document`),
      title: L(`Resi penjualan tedong`, `Buffalo sale receipts`),
      summary: L(`Resi pasar Bolu: kerbau dijual diam-diam berbulan lalu, bukan dikurbankan.`, `Bolu market receipts: buffalo sold off quietly months ago, not sacrificed.`),
      locked: true,
      detail: L(
        `Resi-resi dari pasar tedong di Bolu: enam ekor kerbau milik Ne’ Sombolinggi’ dijual diam-diam berbulan sebelum upacara — bukan dikurbankan seperti tercatat di buku. Tanda terima di tangan sang pencatat, Markus. Ternak yang “hilang” itu berubah menjadi uang di kantong satu orang.`,
        `Receipts from the buffalo market at Bolu: six head belonging to Ne’ Sombolinggi’ sold off quietly months before the ceremony — not sacrificed, as the book claims. The receipts are in the hand of the clerk, Markus. The “missing” beasts had turned into money in one man's pocket.`
      ),
    },
    {
      id: 'pesan', icon: 'phone', tag: L(`Pesan`, `Message`),
      title: L(`Pesan terakhir Yohanis`, `Yohanis's last message`),
      summary: L(`“Besok kuumumkan soal tedong yang hilang di depan keluarga.”`, `“Tomorrow I'll tell the whole family about the missing buffalo.”`),
      detail: L(
        `Di ponsel Yohanis, pesan terkirim pada malam ia tewas: “Besok, sebelum pembagian, kuumumkan soal tedong yang hilang di depan seluruh keluarga. Cukup sudah.” Ia tahu ada yang mencuri ternak duka — dan berniat membongkarnya esok pagi. Esok pagi yang tak pernah ia capai.`,
        `On Yohanis's phone, a message sent the night he died: “Tomorrow, before the division, I'll announce the matter of the missing buffalo in front of the whole family. Enough is enough.” He knew someone had stolen the funeral's beasts — and meant to expose it the next morning. A morning he never reached.`
      ),
    },
    {
      id: 'tautau', icon: 'photo', tag: L(`Temuan`, `Finding`),
      title: L(`Tau-tau menghadap jasad`, `The tau-tau turned to face the body`),
      summary: L(`Patung tau-tau didapati berputar menghadap tongkonan — “pertanda murka”.`, `The tau-tau effigy was found turned to face the tongkonan — “a sign of wrath”.`),
      herring: true,
      detail: L(
        `Patung tau-tau — efigi kayu sang mendiang — ditemukan berputar menghadap tongkonan, dan sekampung menyebutnya pertanda leluhur murka. Nyatanya patung itu sekadar tergeser saat para pengusung memindahkannya sore sebelumnya; tapak tangan di alasnya membuktikan ia digeser tangan manusia, bukan tanda apa pun. Petunjuk yang menyesatkan.`,
        `The tau-tau statue — the wooden effigy of the deceased — was found turned to face the tongkonan, and the whole village called it a sign of an ancestor's wrath. In truth the statue had merely been shifted when the bearers moved it the evening before; handprints on its base prove it was turned by human hands, no omen at all. A clue that leads astray.`
      ),
    },
  ],
  suspects: [
    {
      id: 'markus', init: 'MP', name: 'Markus Pasapan', age: 33,
      role: L(`Juru catat & pencatat tedong keluarga`, `The family's clerk & keeper of the buffalo tally`),
      statement: L(
        `“Aku berjaga di sisi tongkonan dalam gelap. Lalu kulihat kafan Ne’ berdiri, bergoyang, melangkah ke menara. Aku menunduk — pantang menatap yang berjalan. Saat fajar, Yohanis sudah di bawah lakkian. Arwah Ne’ yang murka.”`,
        `“I was keeping watch by the tongkonan in the dark. Then I saw Ne’'s shroud rise, sway, and stride toward the tower. I bowed my head — it is forbidden to look upon the one who walks. By dawn, Yohanis was already below the lakkian. It was the wrath of Ne’'s spirit.”`
      ),
      motive: L(`Diam-diam menjual tedong duka dan memalsukan tally; nyaris dibongkar Yohanis.`, `Secretly sold off the funeral's buffalo and faked the tally; nearly exposed by Yohanis.`),
      alibi: L(`Mengaku berjaga sendirian di dekat jasad — tak ada yang menyaksikan.`, `Claims he kept watch alone near the body — with no one to witness it.`),
      interrogation: [
        { q: L(`Kau yang pertama melihat semuanya?`, `You were the first to see it all?`), a: L(`Aku berjaga dekat tongkonan. Kulihat kain kafan itu bangkit dan melangkah ke arah lakkian, bergoyang dalam gelap. Aku gemetar, menunduk. Pantang menatap yang berjalan. Saat fajar... Yohanis sudah terbujur di bawah menara.`, `I was on watch near the tongkonan. I saw that shroud rise and stride toward the lakkian, swaying in the dark. I trembled, I bowed my head. It is forbidden to look upon the one who walks. By dawn... Yohanis lay stretched out below the tower.`) },
        { q: L(`Selisih jumlah tedong di bukumu — ke mana ternaknya?`, `The discrepancy in your buffalo count — where did the beasts go?`), a: L(`Pasar sedang kacau, banyak ternak mati sakit. Catatan bisa keliru sedikit. Tanya Daud — dialah yang berutang ternak, bukan aku.`, `The market was in chaos, many beasts died of sickness. The records can be off by a little. Ask Daud — he's the one in debt over buffalo, not me.`), requires: 'buku' },
        { q: L(`Di mana tepatnya kau saat “jasad” berjalan?`, `Where exactly were you when the “body” walked?`), a: L(`Menjaga jasad, seperti tugasku. Sendirian, di gelap. Tak ada... tak seorang pun berani mendekat untuk melihat. Begitulah pantangnya.`, `Guarding the body, as is my duty. Alone, in the dark. There was no one... no one dared come close to look. That is the taboo.`) },
      ],
    },
    {
      id: 'petrus', init: 'PT', name: 'Petrus Tandirerung', age: 61,
      role: L(`To minaa (pemimpin ritus Aluk To Dolo)`, `The to minaa (leader of the Aluk To Dolo rites)`),
      statement: L(
        `“Aku memimpin ritusnya, mengikat dan menyegel jasad dengan tanganku sendiri. Apa pun yang berjalan malam itu, ia tidak keluar dari ikatanku.”`,
        `“I led the rites, binding and sealing the body with my own hands. Whatever walked that night, it did not break free of my binding.”`
      ),
      motive: L(`Tak ada motif jelas; justru ritusnya yang membongkar tipuan.`, `No clear motive; indeed, it is his own rite that exposes the trick.`),
      alibi: L(`Memimpin ma’badong (nyanyian duka) di rante hingga larut, disaksikan puluhan orang.`, `Led the ma’badong (funeral chant) at the rante until late, witnessed by dozens.`),
      interrogation: [
        { q: L(`Mungkinkah jasad benar-benar bangkit dan berjalan?`, `Could a body truly rise and walk?`), a: L(`Dahulu orang berkata to minaa berkuasa membuat jasad berjalan pulang ke kampungnya — Rolang. Tapi itu kisah tutur lama. Pantangnya keras: jangan sentuh, jangan tatap, jangan berjalan di depannya, atau ia roboh. Maka malam itu semua menunduk dan menyingkir. Tak seorang pun benar-benar melihat.`, `In the old days they said a to minaa had the power to make a body walk home to its village — the Rolang. But that is an old tale told by mouth. The taboo is strict: do not touch, do not look, do not walk before it, or it will collapse. So that night all bowed their heads and drew aside. No one truly saw a thing.`) },
        { q: L(`Ikatan dan segel ritus pada jasad — tersentuh pagi itu?`, `The ritual binding and seal on the body — were they touched that morning?`), a: L(`Aku sendiri yang mengikatnya dengan simpul ritus dan menyegelnya. Pagi itu kuperiksa: simpul utuh, segel utuh, debu di atas usungan tak terusik. Jasad Ne’ Sombolinggi’ tak pernah beranjak seujung jari pun.`, `I bound it myself with the ritual knots and sealed it. That morning I checked: the knots intact, the seal intact, the dust over the bier undisturbed. The body of Ne’ Sombolinggi’ never moved so much as a fingertip.`), unlocks: 'simpul' },
        { q: L(`Di mana Anda sepanjang malam?`, `Where were you all through the night?`), a: L(`Memimpin ma’badong, melingkar bernyanyi duka bersama puluhan orang di rante hingga jauh malam. Mereka semua saksiku.`, `Leading the ma’badong, circled in the chant of mourning with dozens of others at the rante until deep in the night. They are all my witnesses.`) },
      ],
    },
    {
      id: 'daud', init: 'DS', name: 'Daud Sombolinggi’', age: 39,
      role: L(`Adik korban; terlilit utang tedong`, `The victim's younger brother; mired in buffalo debt`),
      statement: L(
        `“Ya, aku berutang banyak kerbau, dan tanpa tedong bagianku atas sawah nyaris habis. Aku marah pada nasib — tapi marah bukan membunuh kakakku sendiri.”`,
        `“Yes, I owe a great many buffalo, and without tedong my share of the rice fields is all but gone. I was angry at fate — but anger is not the same as killing my own brother.”`
      ),
      motive: L(`Terlilit utang tedong; bagiannya atas sawah warisan terancam mengecil.`, `Mired in buffalo debt; his share of the inherited fields stood to shrink.`),
      alibi: L(`Di kalangan sisemba’ (adu kaki) hingga pagi, disaksikan banyak orang.`, `At the sisemba’ ring (leg-fighting) until morning, witnessed by many.`),
      interrogation: [
        { q: L(`Soal utang tedong-mu?`, `About your buffalo debt?`), a: L(`Banyak. Tanpa kerbau, bagianku atas sawah Ne’ nyaris tak ada. Aku marah pada nasibku, ya. Tapi Yohanis kakakku — aku tak akan mendorongnya dari menara.`, `It is large. Without buffalo, my share of Ne’'s fields is next to nothing. I was angry at my lot, yes. But Yohanis was my brother — I would never push him from a tower.`) },
        { q: L(`Namamu memenuhi kolom utang di buku itu.`, `Your name fills the debt column in that book.`), a: L(`Karena aku memang berutang, bukan mencuri. Lihat: utangku tercatat rapi, hitam di atas putih. Ternak Ne’ yang lenyap tak pernah masuk kandangku.`, `Because I owe, not because I stole. Look: my debt is recorded plainly, in black and white. The vanished beasts of Ne’ never set foot in my pen.`), requires: 'buku' },
        { q: L(`Di mana kau saat kejadian?`, `Where were you when it happened?`), a: L(`Di kalangan sisemba’, beradu kaki sampai pagi. Ratusan orang melihatku jatuh bangun dan tertawa. Aku mustahil ada di menara itu.`, `At the sisemba’ ring, trading kicks until morning. Hundreds saw me fall and rise and laugh. There is no way I was at that tower.`) },
      ],
    },
    {
      id: 'bombong', init: 'BP', name: 'Bombong Patabang', age: 47,
      role: L(`Pedagang tedong dari pasar Bolu`, `A buffalo trader from the Bolu market`),
      statement: L(
        `“Aku cuma pedagang kerbau. Aku datang berdagang dan menagih, seperti di setiap Rambu Solo’ besar. Urusan dalam keluarga ini bukan urusanku.”`,
        `“I'm only a buffalo trader. I came to deal and to collect debts, as I do at every great Rambu Solo’. This family's affairs are none of my business.”`
      ),
      motive: L(`Pedagang luar; tak punya kepentingan atas warisan keluarga.`, `An outsider trader; he has no stake in the family inheritance.`),
      alibi: L(`Menginap di losmen dekat pasar, jauh dari lokasi upacara.`, `Lodged at an inn near the market, far from the ceremony grounds.`),
      interrogation: [
        { q: L(`Apa urusanmu di upacara ini?`, `What is your business at this ceremony?`), a: L(`Aku pedagang tedong dari Bolu. Di Rambu Solo’ sebesar ini, kerbau berpindah tangan terus. Aku datang berdagang dan menagih utang lama, itu saja.`, `I'm a buffalo trader from Bolu. At a Rambu Solo’ this size, buffalo change hands constantly. I came to trade and to collect old debts, that's all.`) },
        { q: L(`Kau pernah membeli tedong dari keluarga ini?`, `Did you ever buy buffalo from this family?`), a: L(`Membeli? Markus yang menjualnya padaku — enam ekor, diam-diam, berbulan sebelum upacara. Katanya atas seizin keluarga. Resinya kusimpan semua; tanya saja.`, `Buy? It was Markus who sold them to me — six head, on the quiet, months before the ceremony. He said it was with the family's blessing. I kept every receipt; just ask.`), requires: 'buku', unlocks: 'resi' },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`), a: L(`Meringkuk di losmen dekat pasar, jauh dari sini. Pemilik losmen dan dua pedagang lain bisa bersaksi.`, `Curled up at the inn near the market, far from here. The innkeeper and two other traders can testify.`) },
      ],
    },
    {
      id: 'ribka', init: 'RS', name: 'Ribka Sombolinggi’', age: 44,
      role: L(`Kakak korban; merasa tersisih waris`, `The victim's older sister; feels cut out of the inheritance`),
      statement: L(
        `“Adat membagi sawah ke garis lelaki. Aku anak tertua, tapi perempuan, jadi bagianku paling kecil. Pahit — tapi Yohanis-lah yang justru membelaku.”`,
        `“Custom divides the fields down the male line. I'm the eldest child, but a woman, so my share is the smallest. Bitter — yet Yohanis was the one who stood up for me.”`
      ),
      motive: L(`Merasa tersisih dari warisan karena pembagian condong ke garis lelaki.`, `Feels cut out of the inheritance because the division favors the male line.`),
      alibi: L(`Menyiapkan sesaji dan beras bersama para perempuan di dapur tongkonan.`, `Preparing offerings and rice with the women in the tongkonan kitchen.`),
      interrogation: [
        { q: L(`Anda merasa tersisih dari warisan?`, `Do you feel cut out of the inheritance?`), a: L(`Adat membagi sawah ke garis lelaki. Aku tertua, tapi perempuan, jadi bagianku paling kecil. Pahit, ya. Tapi dari semua, Yohanis yang paling membelaku.`, `Custom divides the fields down the male line. I'm the eldest, but a woman, so my share is the smallest. Bitter, yes. But of them all, Yohanis stood up for me the most.`) },
        { q: L(`Anda bertengkar dengan Yohanis?`, `Did you quarrel with Yohanis?`), a: L(`Tidak pernah. Justru ia berjanji menambah bagianku dari sawah bawah saat pembagian. Kematiannya merenggut satu-satunya pembelaku — aku rugi, bukan untung.`, `Never. In fact he promised to add to my share from the lower fields at the division. His death robbed me of my only champion — I lose by it, I do not gain.`) },
        { q: L(`Di mana Anda malam itu?`, `Where were you that night?`), a: L(`Di dapur tongkonan, menanak beras dan menyiapkan sesaji bersama ibu-ibu sepanjang malam. Banyak yang menemaniku, tak henti.`, `In the tongkonan kitchen, cooking rice and preparing offerings with the women all night long. Many were with me, without pause.`) },
      ],
    },
    {
      id: 'indorara', init: 'IR', name: 'Indo’ Rara', age: 31,
      role: L(`Janda muda mendiang Ne’ Sombolinggi’`, `The young widow of the late Ne’ Sombolinggi’`),
      statement: L(
        `“Saat anak-anaknya membagi sawah, aku — istri keduanya yang muda — nyaris tak kebagian apa-apa. Orang bilang itu motifku. Tapi aku berduka, bukan bersukacita.”`,
        `“When his children divide the fields, I — his young second wife — am left with next to nothing. People say that is my motive. But I am in mourning, not rejoicing.”`
      ),
      motive: L(`Sebagai istri muda, terancam tak mendapat bagian dalam pembagian warisan.`, `As the young wife, she stood to receive no share in the division of the estate.`),
      alibi: L(`Menunggui jasad suaminya bersama para perempuan, menyalakan pelita.`, `Sitting vigil over her husband's body with the women, keeping the oil lamps lit.`),
      interrogation: [
        { q: L(`Anda istri muda mendiang Ne’ Sombolinggi’?`, `You are the young wife of the late Ne’ Sombolinggi’?`), a: L(`Ya. Dan saat anak-anaknya membagi sawah, istri muda sepertiku nyaris tak kebagian apa-apa. Aku tahu orang menudingku karena itu.`, `Yes. And when his children divide the fields, a young wife like me gets next to nothing. I know people point their fingers at me for it.`) },
        { q: L(`Bukankah itu alasan marah pada Yohanis?`, `Isn't that reason enough to be angry at Yohanis?`), a: L(`Justru Yohanis satu-satunya yang diam-diam menyisihkan sebagian untukku. Tanya Markus yang mencatatnya. Kematian Yohanis menutup pintu terakhirku — aku kehilangan, bukan beruntung.`, `On the contrary, Yohanis was the only one who quietly set aside a portion for me. Ask Markus, who recorded it. Yohanis's death closed my last door — I lose by it, I do not profit.`) },
        { q: L(`Malam itu Anda di mana?`, `Where were you that night?`), a: L(`Menunggui jasad suamiku di sisi dalam tongkonan bersama para perempuan sampai larut, menyalakan pelita. Setelah itu kami menyingkir saat ma’badong dimulai.`, `Sitting vigil over my husband's body inside the tongkonan with the women until late, keeping the oil lamps lit. After that we withdrew when the ma’badong began.`) },
      ],
    },
  ],
  timeline: [
    { t: L(`Berbulan lalu`, `Months earlier`), key: false, x: L(`Markus diam-diam menjual enam tedong milik Ne’ Sombolinggi’ ke pedagang Bolu, lalu memalsukan buku tally.`, `Markus quietly sells six of Ne’ Sombolinggi’'s buffalo to a Bolu trader, then falsifies the tally book.`) },
    { t: L(`Sehari sebelum`, `The day before`), key: true, x: L(`Yohanis menemukan selisih ternak di buku dan berniat mengumumkannya di depan keluarga esok pagi.`, `Yohanis discovers the shortfall of beasts in the book and resolves to announce it before the family the next morning.`) },
    { t: L(`Malam, jelang tengah malam`, `Night, toward midnight`), key: true, x: L(`Tuak Yohanis dibubuhi kecubung; dalam keadaan limbung ia dituntun ke menara lakkian.`, `Yohanis's palm wine is spiked with datura; dazed and unsteady, he is led to the lakkian tower.`) },
    { t: L(`Tengah malam`, `Midnight`), key: true, x: L(`“Mayat berjalan” muncul dalam gelap; semua menunduk dan menyingkir karena pantang; Yohanis didorong dari menara.`, `The “walking corpse” appears in the dark; all bow their heads and draw aside out of taboo; Yohanis is pushed from the tower.`) },
    { t: L(`Fajar`, `Dawn`), key: false, x: L(`Markus “menemukan” jasad Yohanis dan berseru bahwa arwah Ne’ telah bangkit.`, `Markus “discovers” Yohanis's body and cries out that the spirit of Ne’ has risen.`) },
  ],
  solution: {
    killer: 'markus',
    proofLabels: {
      motive: { label: L(`Motif`, `Motive`), hint: L(`Apa yang ia sembunyikan?`, `What was he hiding?`) },
      means: { label: L(`Tipuan Gaib`, `The Supernatural Trick`), hint: L(`Bagaimana “mayat” itu berjalan?`, `How did the “corpse” walk?`) },
      opportunity: { label: L(`Cara Membunuh`, `The Method of Murder`), hint: L(`Bagaimana Yohanis dihabisi?`, `How was Yohanis killed?`) },
    },
    motive: ['buku', 'resi', 'pesan'],
    means: ['kafan', 'jejak', 'simpul'],
    opportunity: ['tuak', 'tangga', 'jenazah'],
  },
  reveal: {
    sections: [
      { h: L(`Tak ada arwah yang berjalan`, `No spirit walked`), p: [
        L(`Tak ada jasad yang bangkit. Ikatan dan segel ritus pada jasad Ne’ Sombolinggi’ masih utuh di pagi hari, dan debu di atas usungan tak terusik — jasadnya tak pernah beranjak dari tongkonan.`, `No body rose. The ritual binding and seal on the corpse of Ne’ Sombolinggi’ were still intact in the morning, and the dust over the bier undisturbed — his body never stirred from the tongkonan.`),
        L(`Yang “berjalan” meninggalkan tapak bersandal, padahal jasad terbungkus kafan diusung dengan kaki telanjang dan tak menapak. Dan di balik tumpukan kayu, sehelai kain kafan kedua tersembunyi — ujungnya berlumpur, berbau tuak. Seseorang yang hidup mengenakan kain duka itu dan menyaru jadi mayat.`, `Whatever “walked” left sandal prints, yet a shroud-wrapped body is borne with bare feet and treads nowhere. And behind a woodpile, a second shroud lay hidden — its hem muddy, reeking of palm wine. Someone living wore that cloth of mourning and passed himself off as a corpse.`),
      ] },
      { h: L(`Siapa di balik kain kafan`, `Who was behind the shroud`), p: [
        L(`Markus, sang juru catat, telah menjual diam-diam enam tedong milik mendiang ke pedagang Bolu dan memalsukan buku tally agar ternak yang lenyap tampak masih ada. Karena pembagian sawah ditentukan hitungan kerbau, kecurangannya akan segera ketahuan.`, `Markus, the clerk, had quietly sold six of the deceased's buffalo to a Bolu trader and falsified the tally book so the vanished beasts would appear still present. Because the division of the fields turns on the buffalo count, his fraud was about to come to light.`),
        L(`Yohanis menemukan selisih itu dan berniat mengumumkannya esok pagi, di depan seluruh keluarga. Maka malam itu Markus membubuhkan rebusan kecubung ke dalam tuak Yohanis, menuntun lelaki yang limbung itu ke menara lakkian, lalu mendorongnya hingga jatuh. Setelah itu ia menyelubungi diri dengan kafan kedua, menjadi “mayat berjalan”, dan saat fajar berseru bahwa arwah Ne’ telah bangkit.`, `Yohanis had found the discrepancy and meant to announce it the next morning, before the whole family. So that night Markus laced Yohanis's palm wine with a brew of datura, led the staggering man to the lakkian tower, and pushed him to his death. Then he wrapped himself in the second shroud, became the “walking corpse,” and at dawn cried out that the spirit of Ne’ had risen.`),
      ] },
      { h: L(`Mengapa tak ada yang melihat`, `Why no one saw`), p: [
        L(`Justru karena pantang Rolang: tak boleh menyentuh, menatap, apalagi berjalan di depan jasad yang berjalan, atau ia akan roboh. Ketakutan dan mata yang tertunduk adalah selubung yang sempurna — tak ada saksi yang berani memandang.`, `Precisely because of the Rolang taboo: one must not touch, must not look upon, much less walk before a body that walks, or it will collapse. Fear and downcast eyes were the perfect veil — not a witness dared to look.`),
        L(`Dan ritus yang dimaksudkan menghormati Ne’ Sombolinggi’ — simpul dan segel sang to minaa — justru yang membuktikan jasadnya tak pernah bergerak. Sihir itu hanya berlaku selama tak ada yang berani memeriksanya.`, `And the very rite meant to honor Ne’ Sombolinggi’ — the to minaa's knots and seal — is what proves his body never moved. The sorcery held only so long as no one dared to examine it.`),
      ] },
      { h: L(`Mengapa bukan mereka`, `Why not the others`), p: [
        L(`Daud terlilit utang, Ribka tersisih waris, Indo’ Rara terancam tak kebagian, bahkan to minaa menguasai “ilmu” ritus — masing-masing punya bayang-bayang, tapi tak satu pun memegang perbuatannya.`, `Daud was mired in debt, Ribka cut out of the inheritance, Indo’ Rara facing an empty share, even the to minaa held the “lore” of the rites — each carries a shadow, but not one of them holds the deed.`),
        L(`Daud beradu kaki di kalangan sisemba’ di depan ratusan orang; Ribka menanak di dapur tongkonan semalaman; Indo’ Rara menunggui jasad suaminya sambil menyalakan pelita; Petrus memimpin ma’badong di rante. Bombong sekadar membeli tedong yang ia kira sah. Hanya Markus yang memegang buku, punya akses, dan paling banyak rugi bila hitungan itu dibacakan. Leluhur tidak membunuh anaknya. Juru catatnya yang melakukannya — bersembunyi di balik kafan sang mendiang.`, `Daud was trading kicks at the sisemba’ ring before hundreds; Ribka cooked in the tongkonan kitchen all night; Indo’ Rara kept vigil over her husband's body, tending the lamps; Petrus led the ma’badong at the rante. Bombong merely bought buffalo he believed were sold honestly. Only Markus held the book, had the access, and stood to lose the most once that count was read aloud. No ancestor killed his son. His clerk did — hiding behind the shroud of the departed.`),
      ] },
    ],
    rebuttals: {
      petrus: L(`Petrus menguasai ritus dan sanggup membayangkan sebuah Rolang — tapi justru ikatan dan segelnya yang utuh di pagi hari membuktikan jasad tak pernah bergerak. Malam itu ia memimpin ma’badong di hadapan seluruh rante.`, `Petrus commands the rites and could well conceive of a Rolang — but his own binding and seal, intact in the morning, prove the body never moved. That night he led the ma’badong before the whole rante.`),
      daud: L(`Utang tedong Daud nyata dan motifnya lantang — tapi utang itu tercatat sah, bukan pencurian, dan tedong yang hilang dijual ke pedagang, bukan masuk kandangnya. Sepanjang malam ia beradu kaki di kalangan sisemba’ di depan ratusan orang.`, `Daud's buffalo debt is real and his motive loud — but that debt is recorded honestly, not theft, and the missing buffalo were sold to a trader, not driven into his pen. All night he traded kicks at the sisemba’ ring before hundreds.`),
      bombong: L(`Bombong memang membeli kerbau dengan murah dan diam-diam — tapi dari tangan Markus, dan ia mengira jual-beli itu sah. Resinya justru menjerat sang penjual, bukan dirinya; malam itu ia di losmen dekat pasar.`, `Bombong did buy the buffalo cheaply and on the quiet — but from Markus's hand, and he believed the sale was lawful. His receipts ensnare the seller, not himself; that night he was at the inn near the market.`),
      ribka: L(`Ribka memang merasa tersisih oleh adat garis lelaki — tapi Yohanis-lah pembelanya, yang berjanji menambah bagiannya; kematiannya merugikannya. Ia menanak dan menyiapkan sesaji di dapur tongkonan semalaman.`, `Ribka does feel cast aside by the custom of the male line — but Yohanis was her champion, the one who promised to add to her share; his death costs her dearly. She cooked and prepared the offerings in the tongkonan kitchen all night.`),
      indorara: L(`Indo’ Rara, istri muda, memang terancam tak kebagian warisan — tapi hanya Yohanis yang diam-diam menyisihkan bagian untuknya; kematiannya menutup pintu terakhirnya. Malam itu ia menunggui jasad suaminya dan menyalakan pelita.`, `Indo’ Rara, the young wife, truly stood to get no share of the estate — but only Yohanis had quietly set aside a portion for her; his death closed her last door. That night she kept vigil over her husband's body and tended the lamps.`),
    },
  },
}
