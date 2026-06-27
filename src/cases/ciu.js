import { L } from '../i18n/L'

// Case 13 (gated). Setting: the real ciu-distilling village of Bekonang
// (Mojolaban, Sukoharjo, Central Java). The plot and characters are FICTIONAL;
// the backdrop is real (Bekonang distills ciu from sugarcane molasses since
// colonial times, legalized 1981, now mostly pure ethanol for medical/
// industrial use; methanol "oplosan" ciu has killed many across Indonesia).
// A methanol murder disguised as a "bad batch": the cooperative's legal ethanol
// is pure, so the poison was added. Single culprit (the middleman who diverts
// the ethanol into methanol-cut drinking-ciu) with a twist; an oplosan seller
// is the red herring. Handled with respect to the real victims of methanol.
export const ciu = {
  id: 'ciu',
  free: false,
  difficulty: 'Sedang',
  code: 'SKH-1981',
  location: L(`Bekonang, Sukoharjo · Jawa Tengah`, `Bekonang, Sukoharjo · Central Java`),
  scene: 'distillery',
  title: L(`Tetes Terakhir`, `The Last Drop`),
  blurb: L(
    `Di Bekonang, kampung penyuling ciu, sang kepala koperasi ditemukan tewas — diracun metanol dari sejeriken ciu. Tapi etanol legalnya murni. Kecelakaan, atau pembunuhan yang disamarkan?`,
    `In Bekonang, a village of ciu distillers, the head of the cooperative is found dead — methanol-poisoned from a jerrycan of ciu. But his legal ethanol is pure. An accident, or a murder in disguise?`
  ),
  disclaimer: {
    text: L(
      `Kisah ini fiksi; seluruh tokoh dan koperasi rekaan. Latarnya nyata: Bekonang (Sukoharjo, Jawa Tengah) adalah sentra penyulingan turun-temurun sejak masa kolonial, dilegalkan sejak 1981, yang kini sebagian besar memproduksi etanol untuk kebutuhan medis dan industri. Keracunan metanol dari "ciu oplosan" benar-benar merenggut banyak nyawa di berbagai daerah. Penghormatan bagi para korban; cerita ini bukan untuk menjauhkan dari tradisi yang sah, melainkan dari racun yang dioplos ke dalamnya.`,
      `This story is fiction; all characters and the cooperative are invented. The backdrop is real: Bekonang (Sukoharjo, Central Java) is a generations-old distilling center dating to colonial times, legalized since 1981, that today mostly produces ethanol for medical and industrial use. Methanol poisoning from "ciu oplosan" has truly taken many lives across the country. With respect to the victims; this tale is not a warning against a lawful tradition, but against the poison that is mixed into it.`
    ),
    source: {
      label: L(`Latar: industri ciu Bekonang (The Jakarta Post)`, `Background: the Bekonang ciu industry (The Jakarta Post)`),
      url: 'https://www.thejakartapost.com/multimedia/2016/05/30/demise-of-ciu-bekonang-bootleg-liquor-industry.html',
    },
  },
  cover: {
    lead: L(
      `Subuh di Bekonang. Di antara tungku bata dan tangki tembaga, Pak Hartono — kepala koperasi penyuling — terbujur kaku, sejeriken ciu terbuka di sisinya. Polisi mengira ciunya sendiri yang meracuninya. Tapi etanol koperasinya lolos uji: murni. Putrinya tahu ada yang tak beres, dan memanggil Anda.`,
      `Dawn in Bekonang. Among the brick stoves and copper tanks, Pak Hartono — head of the distillers' cooperative — lies dead, an open jerrycan of ciu beside him. The police assume his own ciu poisoned him. But his cooperative's ethanol passed the test: pure. His daughter knows something is wrong, and calls you in.`
    ),
  },
  briefing: {
    paras: [
      L(
        `Bekonang menyuling sejak zaman kolonial — ciu dari tetes tebu, sisa pabrik gula. Sejak 1981 kampung ini resmi jadi sentra alkohol; sebagian besar kini etanol murni untuk apotek dan rumah sakit. Pak Hartono memimpin koperasinya ke jalur yang bersih dan legal.`,
        `Bekonang has distilled since colonial times — ciu from sugarcane molasses, the leftover of the sugar mills. Since 1981 the village has been an official alcohol center; most of it now is pure ethanol for pharmacies and hospitals. Pak Hartono led his cooperative onto the clean, legal path.`
      ),
      L(
        `Ia terkenal teliti: etanol koperasinya disuling ulang sampai murni, diuji sebelum dijual. Kini ia justru ditemukan tewas keracunan metanol, sejeriken ciu di sisinya. Bila benar ciunya beracun, nama koperasi dan seluruh kampung penyuling ikut hancur.`,
        `He was famously meticulous: the cooperative's ethanol was rectified until pure, tested before sale. Now he is found dead of methanol poisoning, a jerrycan of ciu at his side. If his ciu really was toxic, the cooperative's name — and the whole village of distillers — goes down with it.`
      ),
      L(
        `Tapi etanol resmi yang sama lolos uji: murni, tanpa metanol. Putrinya menolak percaya ayahnya mati oleh keahliannya sendiri. Periksa bukti, interogasi lima orang di sekitar koperasi, lalu tunjuk: jika ini bukan ciu yang buruk, siapa yang menaruh racun itu — dan mengapa?`,
        `But the same official ethanol passed the test: pure, no methanol. His daughter refuses to believe her father died by his own craft. Examine the evidence, question the five people around the cooperative, then name them: if this was not bad ciu, who put the poison there — and why?`
      ),
    ],
    taskTitle: L(`Tugas Anda`, `Your Task`),
    task: L(
      `Periksa tiap bukti. Interogasi lima orang terdekat koperasi. Lalu ajukan satu tuduhan — dan susun pembuktiannya: motif, cara, dan kesempatan.`,
      `Examine every piece of evidence. Question the five people closest to the cooperative. Then make a single accusation — and build your case for it: motive, means, and opportunity.`
    ),
  },
  victim: {
    init: 'HT',
    name: 'Pak Hartono',
    meta: L(`60 tahun · master distiller & kepala koperasi ciu`, `60 · master distiller & head of the ciu cooperative`),
    paras: [
      L(
        `Lelaki yang membawa koperasi penyuling Bekonang ke jalur resmi: etanol murni untuk medis, diuji, berlisensi. Ia memegang satu aturan: suling sampai bersih, jangan pernah jual yang belum diuji. Koperasinya menjadi kebanggaan kampung.`,
        `The man who brought the Bekonang distillers' cooperative onto the legal path: pure ethanol for medicine, tested, licensed. He held to one rule: rectify it clean, never sell what hasn't been tested. The cooperative became the pride of the village.`
      ),
      L(
        `Ditemukan pagi hari di rumah suling, sebuah gelas dan jeriken ciu di dekatnya. Mula-mula disangka mabuk lalu keracunan ciunya sendiri. Tak ada luka.`,
        `Found in the morning in the still-house, a glass and a jerrycan of ciu near him. At first taken for drunkenness, then poisoning by his own ciu. No wounds.`
      ),
    ],
  },
  evidence: [
    {
      id: 'jasad', icon: 'forensics', tag: L(`Lab Forensik`, `Forensic Lab`),
      title: L(`Otopsi Pak Hartono`, `Pak Hartono's autopsy`),
      summary: L(`Keracunan metanol — bukan sekadar mabuk; mata dan darahnya bercerita.`, `Methanol poisoning — not mere drunkenness; his eyes and blood tell it.`),
      detail: L(
        `Penyebab kematian: keracunan metanol. Darahnya asam (asidosis metabolik) dan saraf matanya rusak — ciri khas metanol, bukan etanol biasa. Ia tewas malam sebelumnya, beberapa jam setelah minum. Dalam dosis kecil pun metanol mematikan; gejalanya mula-mula mirip mabuk biasa, lalu membutakan dan membunuh.`,
        `Cause of death: methanol poisoning. His blood was acidic (metabolic acidosis) and his optic nerves were damaged — the signature of methanol, not ordinary ethanol. He died the night before, hours after drinking. Even a small dose of methanol kills; the early signs mimic an ordinary drunk, then it blinds and kills.`
      ),
    },
    {
      id: 'jerigen', icon: 'cup', tag: L(`Barang Bukti`, `Evidence`),
      title: L(`Jeriken ciu di rumah suling`, `The jerrycan in the still-house`),
      summary: L(`Isinya bermetanol tinggi — bukan dari batch resmi yang tersegel.`, `High in methanol — not from the sealed official batch.`),
      detail: L(
        `Jeriken berisi ciu minuman, bukan etanol farmasi koperasi yang tersegel dan teruji. Isinya mengandung metanol berkadar tinggi — jauh di atas apa pun yang bisa lolos dari penyulingan Hartono. Ciu ini dioplos setelah meninggalkan jalur resmi; seseorang menambahkan sesuatu.`,
        `The jerrycan held drinking-ciu, not the cooperative's sealed, tested pharmaceutical ethanol. Its contents carried a high concentration of methanol — far above anything Hartono's distillation could let through. This ciu was cut after it left the official line; someone added something.`
      ),
    },
    {
      id: 'lab', icon: 'doc', tag: L(`Dokumen`, `Document`),
      title: L(`Uji mutu etanol koperasi`, `The cooperative's ethanol quality test`),
      summary: L(`Etanol resmi yang sama: lolos uji, murni, nol metanol.`, `The same official ethanol: passed the test, pure, zero methanol.`),
      detail: L(
        `Arsip menunjukkan etanol koperasi dari periode yang sama telah diuji laboratorium dan dinyatakan murni — kadar metanol nol, layak medis. Artinya hasil sulingan Hartono tidak beracun. Racun pada jeriken di rumah suling ditambahkan setelah ciu meninggalkan jalur resmi.`,
        `Records show the cooperative's ethanol from the same period was lab-tested and declared pure — zero methanol, medical-grade. Which means Hartono's distillate was not toxic. The poison in the jerrycan in the still-house was added after the ciu left the official line.`
      ),
    },
    {
      id: 'heads', icon: 'recon', tag: L(`Rekonstruksi`, `Reconstruction`),
      title: L(`Kepala sulingan & rektifikasi`, `The heads & the rectification`),
      summary: L(`Hartono membuang tetes pertama yang kaya metanol, lalu menyuling ulang sampai murni.`, `Hartono discarded the methanol-rich first drops, then rectified it pure.`),
      detail: L(
        `Setiap penyuling tahu: tetes pertama ("kepala") paling kaya metanol dan harus dibuang. Hartono membuangnya, lalu menyuling ulang (rektifikasi) hingga etanol murni — itulah sebabnya layak medis. Untuk meracuni dengan metanol, seseorang harus sengaja menambahkannya kembali. Pertanyaannya: dari mana metanolnya, dan siapa yang menyimpannya.`,
        `Every distiller knows it: the first drops ("the heads") are richest in methanol and must be discarded. Hartono cut them, then redistilled (rectified) to pure ethanol — which is why it was medical-grade. To poison with methanol, someone had to deliberately add it back. The question: where did the methanol come from, and who kept it.`
      ),
    },
    {
      id: 'wa', icon: 'phone', tag: L(`Ponsel Korban`, `Victim's Phone`),
      title: L(`Pesan terakhir Pak Hartono`, `Pak Hartono's last messages`),
      summary: L(`Ia akan membawa koperasi sepenuhnya legal dan melaporkan penyelewengan etanol.`, `He would take the cooperative fully legal and report the ethanol being siphoned off.`),
      detail: L(
        `Beberapa hari sebelum tewas, Hartono mengirim pesan keras: ia tahu etanol koperasi diselewengkan untuk dioplos jadi ciu beracun, ia akan meneken kontrak farmasi yang menuntut koperasi 100% bersih, dan melapor. "Ciu kita tak boleh lagi membawa racun," tulisnya. Pesan itu ditujukan kepada Gunawan, sang pengepul.`,
        `Days before his death, Hartono sent a blunt message: he knew the cooperative's ethanol was being siphoned off and cut into toxic ciu, he would sign a pharmaceutical contract requiring the cooperative to be 100% clean, and report it. "Our ciu must never carry poison again," he wrote. The message was addressed to Gunawan, the middleman.`
      ),
    },
    {
      id: 'kontrak', icon: 'ledger', tag: L(`Dokumen`, `Document`),
      title: L(`Kontrak farmasi & buku koperasi`, `The pharma contract & cooperative books`),
      summary: L(`Kontrak bersih yang akan mematikan perdagangan oplosan Gunawan.`, `A clean contract that would kill Gunawan's oplosan trade.`),
      detail: L(
        `Sebuah kontrak: pabrik farmasi siap menyerap seluruh etanol koperasi — asalkan 100% legal dan terlacak, tak ada lagi yang bocor ke pasar oplosan. Buku koperasi menunjukkan selama ini Gunawan membeli etanol murah dan menyelewengkannya jadi ciu oplosan yang sangat menguntungkan. Bila kontrak ini jalan dan Hartono melapor, perdagangan gelap Gunawan tamat.`,
        `A contract: a pharmaceutical firm was ready to take all the cooperative's ethanol — provided it was 100% legal and traceable, with nothing leaking to the oplosan market. The cooperative books show that all along Gunawan had been buying ethanol cheap and diverting it into highly profitable oplosan ciu. If this contract went through and Hartono reported him, Gunawan's black-market trade was finished.`
      ),
    },
    {
      id: 'drum', icon: 'evidence', tag: L(`Temuan Kunci`, `Key Find`),
      title: L(`Drum metanol di gudang Gunawan`, `A methanol drum in Gunawan's store`),
      summary: L(`Drum metanol industri & nota pembelian atas nama Gunawan.`, `An industrial-methanol drum & purchase receipts in Gunawan's name.`),
      locked: true, twist: true,
      detail: L(
        `Tersembunyi di gudang Gunawan: sebuah drum metanol industri dan setumpuk nota pembelian atas namanya. Diam-diam Gunawan mengoplos etanol koperasi dengan metanol murah agar untung berlipat — dan metanol itu dari sumber yang sama dengan yang membunuh Hartono. Bukan bahan penyulingan; bahan oplosan.`,
        `Hidden in Gunawan's store: a drum of industrial methanol and a stack of purchase receipts in his name. Quietly, Gunawan had been cutting the cooperative's ethanol with cheap methanol for multiplied profit — and that methanol matched the source that killed Hartono. Not a material of distillation; a material of adulteration.`
      ),
    },
    {
      id: 'oplosan', icon: 'cup', tag: L(`Barang Bukti`, `Evidence`),
      title: L(`Ciu oplosan di warung Paijo`, `Oplosan ciu at Paijo's stall`),
      summary: L(`Ciu bermetanol disita dari warung — racun yang biasa membunuh peminum.`, `Methanol-laced ciu seized from a stall — the poison that so often kills drinkers.`),
      herring: true,
      detail: L(
        `Di warung Paijo disita botol-botol ciu oplosan bermetanol — racun yang sudah menewaskan beberapa peminum di sekitar Solo. Sekilas, inilah pembunuhnya: penjual oplosan yang ingin membungkam Hartono yang gencar menentangnya. Tapi perdagangan oplosan ini, senyata dan sekeji apa pun, belum tentu tangan yang meracuni Hartono. Petunjuk yang menyesatkan.`,
        `At Paijo's stall, bottles of methanol-laced oplosan ciu were seized — the poison that had already killed several drinkers around Solo. At a glance, here is the killer: an oplosan seller wanting to silence the Hartono who campaigned against him. But this oplosan trade, real and vile as it is, is not necessarily the hand that poisoned Hartono. A misleading clue.`
      ),
    },
    {
      id: 'lastpour', icon: 'cctv', tag: L(`Rekonstruksi`, `Reconstruction`),
      title: L(`Tuangan terakhir`, `The last pour`),
      summary: L(`Malam itu hanya satu orang tinggal menemani Hartono minum.`, `That night only one person stayed to drink with Hartono.`),
      detail: L(
        `Rekonstruksi malam itu: para pekerja pulang, putrinya ke Solo. Hanya Gunawan, sang pengepul, yang tinggal "merayakan" — menuangkan ciu terakhir untuk Hartono dari sebuah jeriken yang ia bawa sendiri. Gelas Hartono diisi oleh tangan Gunawan.`,
        `A reconstruction of that night: the workers went home, his daughter to Solo. Only Gunawan, the middleman, stayed to "celebrate" — pouring Hartono a final ciu from a jerrycan he brought himself. Hartono's glass was filled by Gunawan's hand.`
      ),
    },
  ],
  suspects: [
    {
      id: 'gunawan', init: 'GN', name: 'Gunawan', age: 52,
      role: L(`Pengepul & penyalur etanol koperasi`, `The cooperative's ethanol buyer & distributor`),
      statement: L(
        `"Hartono kawan lamaku. Ciunya pasti tertukar dengan oplosan dari luar — pasar penuh racun. Aku justru menghidupi koperasi ini dengan membeli etanolnya."`,
        `"Hartono was an old friend. His ciu must have been swapped with oplosan from outside — the market's full of poison. I'm the one who kept this cooperative alive by buying its ethanol."`
      ),
      motive: L(`Menyelewengkan etanol koperasi jadi ciu oplosan yang menguntungkan; kontrak bersih Hartono akan mematikan usahanya.`, `Diverts the cooperative's ethanol into profitable oplosan ciu; Hartono's clean contract would kill his trade.`),
      alibi: L(`Mengaku pulang sebelum Hartono minum lagi — tapi rekonstruksi menempatkannya menuang gelas terakhir.`, `Claims he left before Hartono drank again — but the reconstruction puts him pouring the last glass.`),
      interrogation: [
        { q: L(`Siapa yang menemani Hartono minum malam itu?`, `Who drank with Hartono that night?`),
          a: L(`"Aku, sebentar, lalu pulang. Kami minum untuk masa depan koperasi. Setelah itu aku tak tahu apa-apa."`, `"Me, briefly, then I went home. We drank to the cooperative's future. After that I know nothing."`) },
        { q: L(`Hartono mengancam membawa koperasi 100% legal dan melapormu. Soal apa?`, `Hartono threatened to take the cooperative 100% legal and report you. About what?`),
          a: L(`"Salah paham soal pasokan. Sudah kami bicarakan. Orang tua kadang keras kepala — dia pikir bisa membersihkan seluruh pasar sendirian."`, `"A misunderstanding about supply. We'd talked it over. Old men can be stubborn — he thought he could clean up the whole market by himself."`), requires: 'wa' },
        { q: L(`Ada drum metanol dan notamu di gudangmu.`, `There's a methanol drum and your receipts in your store.`),
          a: L(`"Itu... untuk membersihkan tangki dan alat. Semua pengepul simpan pelarut. Kalian tak bisa membuktikan apa pun dari sedrum cairan."`, `"That's... for cleaning the tanks and equipment. Every dealer keeps solvent. You can't prove anything from a drum of fluid."`), requires: 'drum' },
      ],
    },
    {
      id: 'sri', init: 'SL', name: 'Sri Lestari', age: 31,
      role: L(`Putri Hartono; pencatat & pengurus izin koperasi`, `Hartono's daughter; the cooperative's bookkeeper & licensing officer`),
      statement: L(
        `"Ayah mati oleh ciunya sendiri? Mustahil. Aku yang menyimpan hasil uji dan izinnya — etanol kami murni. Seseorang menaruh racun itu."`,
        `"Father died of his own ciu? Impossible. I keep the test results and the licenses — our ethanol is pure. Someone put that poison there."`
      ),
      motive: L(`Mewarisi kepemimpinan koperasi; sempat berselisih dengan ayah soal kecepatan melegalkan penuh.`, `Inherits leadership of the cooperative; had clashed with her father over how fast to go fully legal.`),
      alibi: L(`Di Solo mengurus kontrak farmasi malam itu, ada saksi & struk.`, `In Solo handling the pharma contract that night, with witnesses & receipts.`),
      interrogation: [
        { q: L(`Kau berselisih dengan ayahmu?`, `You clashed with your father?`),
          a: L(`"Soal kecepatan, bukan tujuan. Aku ingin koperasi bersih dan besar — itu sebabnya kuurus kontrak farmasi. Aku berjuang untuk ciunya, bukan melawannya."`, `"Over the pace, not the goal. I wanted the cooperative clean and thriving — that's why I chased the pharma contract. I fought for his ciu, not against it."`) },
        { q: L(`Bagaimana kau yakin etanolnya murni?`, `How are you sure his ethanol is pure?`),
          a: L(`"Karena aku yang menyimpan hasil ujinya. Periode itu nol metanol, layak medis. Periksa arsip. Ayah tak pernah menjual yang belum diuji — tak pernah."`, `"Because I keep the test results. That period was zero methanol, medical-grade. Check the records. Father never sold what wasn't tested — never."`), requires: 'lab' },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`),
          a: L(`"Di Solo, mengurus kontrak farmasi sampai larut. Ada struk hotel dan dua rekan. Aku baru tahu pagi harinya, lewat telepon Pak Wagiman."`, `"In Solo, on the pharma contract until late. There's a hotel receipt and two colleagues. I only learned in the morning, from Pak Wagiman's call."`) },
      ],
    },
    {
      id: 'paijo', init: 'PJ', name: 'Paijo', age: 47,
      role: L(`Penjual ciu di warung; diduga pengoplos`, `A ciu seller at a roadside stall; suspected adulterator`),
      statement: L(
        `"Aku jual ciu, ya — tapi yang beracun itu bukan dariku, aku ditipu pemasok. Hartono memang menentangku, tapi aku tak perlu membunuh untuk berjualan."`,
        `"I sell ciu, yes — but the poisoned stuff isn't mine, a supplier conned me. Hartono did campaign against me, but I don't need to kill to make a sale."`
      ),
      motive: L(`Menjual ciu oplosan ke peminum; Hartono gencar menentang dan ingin menutup warungnya.`, `Sells oplosan ciu to drinkers; Hartono campaigned hard against him and wanted his stall shut.`),
      alibi: L(`Di warungnya melayani pembeli sepanjang malam, ada saksi.`, `At his stall serving customers all night, with witnesses.`),
      interrogation: [
        { q: L(`Ciu beracun disita dari warungmu.`, `Toxic ciu was seized from your stall.`),
          a: L(`"Aku beli dari pengepul murah — bodoh, ya, tapi aku tak tahu ada metanolnya. Aku menjual, bukan mengoplos. Racun itu membunuh pelangganku juga; buruk untuk usahaku."`, `"I bought from a cheap dealer — foolish, yes, but I didn't know it held methanol. I sell, I don't mix. That poison killed my customers too; bad for business."`), requires: 'oplosan' },
        { q: L(`Hartono ingin menutup warungmu.`, `Hartono wanted your stall shut down.`),
          a: L(`"Dan aku akan pindah berjualan — itu saja. Matinya Hartono justru menyorot penjual sepertiku. Aku rugi karena ia mati, bukan untung."`, `"And I'd have moved my stall — that's all. Hartono's death only shines a light on sellers like me. I lose by his death, not gain."`) },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`),
          a: L(`"Di warungku di pinggir jalan, ramai sampai dini hari. Banyak pembeli jadi saksi. Aku tak ke rumah suling malam itu."`, `"At my roadside stall, busy until the small hours. Plenty of customers can vouch for me. I didn't go to the still-house that night."`) },
      ],
    },
    {
      id: 'wagiman', init: 'PW', name: 'Pak Wagiman', age: 55,
      role: L(`Penjaga tungku & juru suling koperasi`, `The cooperative's stoker & still-hand`),
      statement: L(
        `"Sidik jariku ada di banyak wadah — memang aku yang mengisi dan menjaga tungku tiap hari. Tapi aku tak pernah menaruh racun. Aku ikut Pak Hartono sejak muda."`,
        `"My fingerprints are on many containers — I'm the one who fills them and tends the fires every day. But I never put in poison. I've been with Pak Hartono since I was young."`
      ),
      motive: L(`Tak ada; pekerja setia. Sidik jarinya di wadah hanya dari pekerjaannya.`, `None; a loyal worker. His prints on the containers are only from his work.`),
      alibi: L(`Pulang sebelum Hartono & Gunawan minum; melihat siapa yang tinggal.`, `Left before Hartono & Gunawan drank; saw who stayed.`),
      interrogation: [
        { q: L(`Sidik jarimu ada di jeriken di rumah suling.`, `Your fingerprints are on the jerrycan in the still-house.`),
          a: L(`"Tentu saja — aku mengisi dan mengangkat wadah setiap hari. Tapi wadah resmi yang kuisi tersegel dan teruji. Jeriken yang itu segelnya rusak. Bukan aku yang mengoplosnya."`, `"Of course — I fill and haul the containers every day. But the official ones I fill are sealed and tested. That jerrycan had its seal broken. I'm not the one who cut it."`), requires: 'jerigen' },
        { q: L(`Apa kau melihat sesuatu yang aneh akhir-akhir ini?`, `Did you notice anything strange lately?`),
          a: L(`"Pak Gunawan beberapa kali membawa drum ke gudangnya, katanya pembersih tangki. Ia melarangku ke sana. Aku menurut saja — bukan urusanku. Mungkin seharusnya kulihat."`, `"Pak Gunawan brought drums to his store a few times, said it was tank cleaner. He forbade me from going there. I just obeyed — not my business. Maybe I should have looked."`), unlocks: 'drum' },
        { q: L(`Siapa yang tinggal bersama Hartono malam itu?`, `Who stayed with Hartono that night?`),
          a: L(`"Pak Gunawan. Mereka duduk minum saat aku pamit. Pak Gunawan yang memegang jeriken dan menuang. Itu yang terakhir kulihat."`, `"Pak Gunawan. They were sitting and drinking when I said goodnight. Pak Gunawan was holding the jerrycan and pouring. That's the last I saw."`) },
      ],
    },
    {
      id: 'sutar', init: 'PS', name: 'Pak Sutar', age: 49,
      role: L(`Wakil ketua koperasi`, `Deputy head of the cooperative`),
      statement: L(
        `"Aku akui aku menentang melegalkan terlalu cepat — banyak anggota hidup dari ciu minuman. Tapi berdebat soal nafkah bukan berarti membunuh kawan sendiri."`,
        `"I admit I opposed legalizing too fast — many members live off drinking-ciu. But arguing over a livelihood is not the same as killing your own friend."`
      ),
      motive: L(`Diam-diam ikut menikmati hasil penjualan ciu minuman; menentang langkah Hartono ke 100% legal.`, `Quietly shared in the drinking-ciu proceeds; opposed Hartono's move to 100% legal.`),
      alibi: L(`Di rapat kelurahan di kota Sukoharjo malam itu, disaksikan banyak orang.`, `At a sub-district meeting in Sukoharjo town that night, witnessed by many.`),
      interrogation: [
        { q: L(`Kau menentang Hartono melegalkan penuh.`, `You opposed Hartono going fully legal.`),
          a: L(`"Karena ratusan keluarga di sini masih bergantung pada ciu minuman. Aku ingin perubahan yang pelan, bukan kematiannya. Matinya Hartono justru mengacau semuanya."`, `"Because hundreds of families here still depend on drinking-ciu. I wanted slow change, not his death. Hartono's death only threw everything into chaos."`) },
        { q: L(`Kau ikut menikmati hasil ciu minuman?`, `You shared in the drinking-ciu money?`),
          a: L(`"Sedikit, lewat koperasi — semua anggota begitu, itu belum dilarang. Tapi metanol? Tidak. Itu Gunawan dan para pengoplos, bukan kami yang menyuling."`, `"A little, through the cooperative — every member did, it wasn't yet forbidden. But methanol? No. That's Gunawan and the adulterators, not us who distill."`) },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`),
          a: L(`"Di rapat kelurahan di kota Sukoharjo sampai malam, di depan puluhan orang. Tanya pak lurah. Aku jauh dari rumah suling."`, `"At a sub-district meeting in Sukoharjo town until late, before dozens of people. Ask the village head. I was far from the still-house."`) },
      ],
    },
  ],
  timeline: [
    { t: L(`1981`, `1981`), key: false, x: L(`Bekonang resmi diakui sebagai sentra produksi alkohol; koperasi penyuling menuju jalur legal — etanol untuk medis dan industri.`, `Bekonang is officially recognized as an alcohol-production center; the distillers' cooperative moves onto the legal path — ethanol for medicine and industry.`) },
    { t: L(`Beberapa bulan lalu`, `A few months ago`), key: false, x: L(`Pabrik farmasi menawar menyerap seluruh etanol koperasi — asalkan 100% bersih. Hartono mengejarnya; perdagangan oplosan terancam.`, `A pharmaceutical firm offers to take all the cooperative's ethanol — if it's 100% clean. Hartono pursues it; the oplosan trade is threatened.`) },
    { t: L(`Pekan lalu`, `Last week`), key: true, x: L(`Hartono menemukan etanol koperasi diselewengkan jadi ciu oplosan; ia mengancam membawa koperasi 100% legal dan melapor.`, `Hartono discovers the cooperative's ethanol is being siphoned into oplosan ciu; he threatens to take the cooperative 100% legal and report it.`) },
    { t: L(`Malam itu`, `That night`), key: true, x: L(`Pekerja pulang, putrinya ke Solo. Hanya Gunawan tinggal, minum bersama, menuang ciu terakhir untuk Hartono.`, `The workers go home, his daughter to Solo. Only Gunawan stays, drinking with him, pouring Hartono his final ciu.`) },
    { t: L(`Pagi berikutnya`, `The next morning`), key: false, x: L(`Hartono ditemukan tewas; jeriken ciu di dekatnya. Polisi condong menyebut ciu buruk.`, `Hartono is found dead; the jerrycan of ciu near him. The police lean toward bad ciu.`) },
    { t: L(`Belakangan`, `Afterward`), key: false, x: L(`Ciu oplosan bermetanol disita dari warung pinggir jalan — racun yang sama yang biasa membunuh peminum di sekitar Solo.`, `Methanol-laced oplosan ciu is seized from a roadside stall — the same poison that so often kills drinkers around Solo.`) },
  ],
  solution: {
    killer: 'gunawan',
    proofLabels: {
      motive: { label: L(`Motif`, `Motive`), hint: L(`Apa yang dipertaruhkan oleh kematian Hartono?`, `What was at stake in Hartono's death?`) },
      means: { label: L(`Cara`, `Means`), hint: L(`Dari mana metanolnya?`, `Where did the methanol come from?`) },
      opportunity: { label: L(`Kesempatan`, `Opportunity`), hint: L(`Siapa yang menuang ciu terakhirnya?`, `Who poured his final ciu?`) },
    },
    motive: ['kontrak', 'wa'],
    means: ['drum', 'jerigen'],
    opportunity: ['lastpour'],
  },
  reveal: {
    killerName: 'Gunawan',
    sections: [
      { h: L(`Bukan ciu yang buruk`, `Not bad ciu`), p: [
        L(
          `Hartono tidak mati oleh keahliannya. Otopsi menunjukkan keracunan metanol, tapi etanol resmi koperasi lolos uji — murni, nol metanol. Hartono membuang kepala sulingan dan menyuling ulang sampai bersih; ciunya tak mungkin membawa racun sebanyak itu. Jeriken di rumah suling segelnya rusak dan diisi ciu oplosan: racun itu ditambahkan setelah ciu meninggalkan jalur resmi.`,
          `Hartono did not die by his own craft. The autopsy shows methanol poisoning, yet the cooperative's official ethanol passed the test — pure, zero methanol. Hartono cut the heads and rectified it clean; his ciu could never carry that much poison. The jerrycan in the still-house had a broken seal and held oplosan ciu: the poison was added after the ciu left the official line.`
        ),
      ] },
      { h: L(`Pelakunya: Gunawan`, `The killer: Gunawan`), p: [
        L(
          `Bertahun-tahun Gunawan membeli etanol koperasi yang murah dan menyelewengkannya jadi ciu oplosan bermetanol — perdagangan gelap yang sangat menguntungkan. Lalu datang kontrak farmasi: koperasi akan 100% legal dan terlacak, dan Hartono hendak melapor. Bila itu jalan, usaha gelap Gunawan tamat.`,
          `For years Gunawan bought the cooperative's cheap ethanol and diverted it into methanol-laced oplosan ciu — a highly profitable black-market trade. Then came the pharma contract: the cooperative would go 100% legal and traceable, and Hartono meant to report him. If it went through, Gunawan's black trade was finished.`
        ),
        L(
          `Drum metanol industri dan nota pembeliannya tersembunyi di gudangnya, terlarang bagi siapa pun — dari sumber itulah racun yang membunuh Hartono. Malam itu, setelah semua pulang, hanya Gunawan yang tinggal "merayakan", menuang ciu terakhir untuk Hartono dari jeriken yang ia bawa sendiri — lalu menatanya agar tampak sebagai ciu buruk, sekaligus menghancurkan nama yang menghalangi perdagangannya.`,
          `An industrial-methanol drum and his purchase receipts were hidden in his store, off-limits to everyone — that was the source of the poison that killed Hartono. That night, after the others left, only Gunawan stayed to "celebrate," pouring Hartono a final ciu from a jerrycan he brought himself — then arranged it to look like bad ciu, destroying in one stroke the name that stood in the way of his trade.`
        ),
      ] },
      { h: L(`Mengapa bukan yang lain`, `Why not the others`), p: [
        L(
          `Paijo memang menjual ciu oplosan yang membunuh peminum — kejahatan nyata — tapi ia di warungnya semalaman, dan kematian Hartono justru menyorot penjual sepertinya. Sri mewarisi kepemimpinan, tapi ia memperjuangkan kontrak bersih ayahnya, bukan melawannya, dan ada di Solo. Pak Sutar menentang legalisasi cepat dan ikut menikmati hasil ciu minuman, tapi ia di rapat kelurahan, di depan puluhan saksi. Pak Wagiman mengisi tiap wadah — karena itu sidik jarinya di mana-mana — tapi wadah resminya tersegel dan teruji.`,
          `Paijo did sell oplosan ciu that kills drinkers — a real crime — but he was at his stall all night, and Hartono's death only turns a spotlight on sellers like him. Sri inherits the leadership, but she championed her father's clean contract, not opposed it, and was in Solo. Pak Sutar opposed fast legalization and shared in the drinking-ciu money, but he was at a sub-district meeting before dozens of witnesses. Pak Wagiman fills every container — which is why his prints are everywhere — but his official ones are sealed and tested.`
        ),
        L(
          `Tiga unsur bertemu pada satu orang: motif (perdagangan gelap yang diancam kontrak dan laporan Hartono), cara (drum metanol miliknya dan jeriken yang dioplos), dan kesempatan (ia yang menuang gelas terakhir). Itu Gunawan.`,
          `All three elements meet in one man: motive (the black trade threatened by the contract and Hartono's report), means (his own methanol drum and the adulterated jerrycan), and opportunity (he poured the final glass). That is Gunawan.`
        ),
      ] },
      { h: L(`Catatan`, `A note`), p: [
        L(
          `Ciu yang sah bukanlah racun — racunnya adalah metanol yang dioplos demi untung. Itu nyata: dari warung pinggir jalan, "ciu oplosan" bermetanol terus merenggut nyawa para peminum di berbagai daerah. Tradisi yang dijaga dengan jujur layak dibela; yang membunuh adalah keserakahan yang mengoplosnya.`,
          `Lawful ciu is not poison — the poison is the methanol mixed in for profit. That is real: from roadside stalls, methanol "oplosan ciu" keeps taking the lives of drinkers across the country. A tradition kept honestly deserves defending; what kills is the greed that adulterates it.`
        ),
      ] },
    ],
    rebuttals: {
      sri: L(
        `Sri mewarisi kepemimpinan, tapi ia memperjuangkan ciu ayahnya — uji mutu, izin, kontrak farmasi yang bersih — bukan melawannya. Malam itu ia di Solo, ada struk dan saksi.`,
        `Sri inherits the leadership, but she championed her father's ciu — the quality tests, the licenses, the clean pharma contract — not opposed it. That night she was in Solo, with a receipt and witnesses.`
      ),
      paijo: L(
        `Paijo menjual ciu oplosan ke peminum — keji dan nyata — tapi ia di warungnya semalaman, dan kematian Hartono justru menyorot penjual sepertinya. Ia menjual racun, tapi bukan tangan yang meracuni Hartono.`,
        `Paijo sold oplosan ciu to drinkers — vile and real — but he was at his stall all night, and Hartono's death only shines a light on sellers like him. He peddled poison, but he is not the hand that poisoned Hartono.`
      ),
      wagiman: L(
        `Sidik jari Pak Wagiman ada di banyak wadah karena dialah yang mengisi dan menjaga tungku tiap hari — tapi wadah resminya tersegel dan teruji. Ia menunjukkan jalan ke drum itu, bukan menyembunyikannya.`,
        `Pak Wagiman's prints are on many containers because he fills them and tends the fires every day — but his official ones are sealed and tested. He pointed the way to the drum, he didn't hide it.`
      ),
      sutar: L(
        `Pak Sutar menentang melegalkan terlalu cepat dan ikut menikmati hasil ciu minuman — tapi ia di rapat kelurahan semalaman, di depan puluhan saksi, dan kematian Hartono mengacaukan koperasi yang ia urus. Ia berdebat soal nafkah, bukan membunuh.`,
        `Pak Sutar opposed legalizing too fast and shared in the drinking-ciu money — but he was at a sub-district meeting all night, before dozens of witnesses, and Hartono's death threw the cooperative he runs into chaos. He argued over a livelihood, he did not kill.`
      ),
    },
  },
}
