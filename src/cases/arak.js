import { L } from '../i18n/L'

// Case 13 (gated). Setting: a BPOM-licensed craft arak distillery in
// Karangasem, Bali, after the 2020 legalization of Balinese arak. The plot and
// characters are FICTIONAL; the backdrop is real (arak Bali legalized/protected
// by Bali Gubernatorial Regulation No. 1/2020; methanol "oplosan" and
// counterfeit arak have killed many — locals and tourists). A methanol murder
// disguised as a "bad batch": the certified arak is clean, so the poison was
// added. Single culprit (the partner) with a twist; the counterfeiter is a
// red herring. Handled with respect to the real victims of methanol poisoning.
export const arak = {
  id: 'arak',
  free: false,
  difficulty: 'Sedang',
  code: 'KRS-0420',
  location: L(`Karangasem, Bali`, `Karangasem, Bali`),
  scene: 'distillery',
  title: L(`Tetes Terakhir`, `The Last Drop`),
  blurb: L(
    `Di sebuah penyulingan arak Karangasem, sang master distiller ditemukan tewas — diracun metanol dari botol araknya sendiri. Tapi arak bersertifikatnya bersih. Kecelakaan, atau pembunuhan yang disamarkan?`,
    `At a Karangasem arak distillery, the master distiller is found dead — methanol-poisoned by a bottle of his own arak. But his certified arak is clean. An accident, or a murder in disguise?`
  ),
  disclaimer: {
    text: L(
      `Kisah ini fiksi; seluruh tokoh dan penyulingan rekaan. Latarnya nyata: arak Bali dilegalkan dan dilindungi lewat Peraturan Gubernur Bali No. 1/2020, dan keracunan metanol dari miras oplosan serta arak palsu benar-benar merenggut banyak nyawa — warga maupun wisatawan. Penghormatan bagi para korban; cerita ini bukan untuk menjauhkan dari tradisi yang sah, melainkan dari racun yang dioplos ke dalamnya.`,
      `This story is fiction; all characters and the distillery are invented. The backdrop is real: Balinese arak was legalized and protected by Bali Gubernatorial Regulation No. 1/2020, and methanol poisoning from bootleg "oplosan" and counterfeit arak has truly taken many lives — locals and tourists alike. With respect to the victims; this tale is not a warning against a lawful tradition, but against the poison that is mixed into it.`
    ),
    source: {
      label: L(`Latar: arak & arrack (Wikipedia)`, `Background: arak & arrack (Wikipedia)`),
      url: 'https://en.wikipedia.org/wiki/Arrack',
    },
  },
  cover: {
    lead: L(
      `Subuh di Karangasem. Di gudang penyulingan keluarga, Wayan Sutila — sang master arak — terbujur kaku, sebotol arak tanda tangannya tergeletak terbuka. Polisi mengira araknya sendiri yang meracuninya. Tapi arak itu lolos uji BPOM: bersih. Putrinya tahu ada yang tak beres, dan memanggil Anda.`,
      `Dawn in Karangasem. In the family distillery's storehouse, Wayan Sutila — the arak master — lies dead, an open bottle of his signature arak beside him. The police assume his own arak poisoned him. But that arak passed the BPOM test: clean. His daughter knows something is wrong, and calls you in.`
    ),
  },
  briefing: {
    paras: [
      L(
        `Sejak arak Bali dilegalkan dan dilindungi pada 2020, keluarga Sutila mengubah penyulingan tradisional mereka di Karangasem menjadi usaha resmi berlisensi BPOM — arak murni dari tebu dan nira, diincar pasar dan ekspor.`,
        `Since Balinese arak was legalized and protected in 2020, the Sutila family turned their traditional still in Karangasem into a licensed, BPOM-certified business — pure arak from cane and palm sap, courted by the market and by exporters.`
      ),
      L(
        `Wayan Sutila, pendiri dan master distiller, terkenal teliti: ia selalu membuang "kepala" sulingan — tetes pertama yang kaya metanol — demi arak yang aman. Kini ia justru ditemukan tewas keracunan metanol, sebotol araknya sendiri di sisinya. Bila benar araknya beracun, nama keluarga dan seluruh kampung penyuling ikut hancur.`,
        `Wayan Sutila, the founder and master distiller, was famously meticulous: he always discarded the "heads" of the distillation — the methanol-rich first drops — for the sake of a safe arak. Now he is found dead of methanol poisoning, a bottle of his own arak at his side. If his arak really was toxic, the family name — and the whole village of distillers — goes down with it.`
      ),
      L(
        `Tapi batch resmi yang sama lolos uji laboratorium BPOM: bersih. Putrinya menolak percaya ayahnya mati oleh keahliannya sendiri. Periksa bukti, interogasi lima orang di sekitar penyulingan, lalu tunjuk: jika ini bukan arak yang buruk, siapa yang menaruh racun itu — dan mengapa?`,
        `But the same official batch passed the BPOM lab test: clean. His daughter refuses to believe her father died by his own craft. Examine the evidence, question the five people around the distillery, then name them: if this was not bad arak, who put the poison there — and why?`
      ),
    ],
    taskTitle: L(`Tugas Anda`, `Your Task`),
    task: L(
      `Periksa tiap bukti. Interogasi lima orang terdekat penyulingan. Lalu ajukan satu tuduhan — dan susun pembuktiannya: motif, cara, dan kesempatan.`,
      `Examine every piece of evidence. Question the five people closest to the distillery. Then make a single accusation — and build your case for it: motive, means, and opportunity.`
    ),
  },
  victim: {
    init: 'WS',
    name: 'Wayan Sutila',
    meta: L(`58 tahun · pendiri & master distiller arak`, `58 · founder & arak master distiller`),
    paras: [
      L(
        `Lelaki yang menghidupkan kembali penyulingan kakeknya dan membawanya ke jalur resmi setelah 2020. Ia memegang satu aturan mati: buang kepala sulingan, jangan pernah jual yang belum diuji. Araknya menjadi kebanggaan kampung.`,
        `The man who revived his grandfather's still and brought it onto the legal path after 2020. He held to one iron rule: discard the heads, never sell what hasn't been tested. His arak became the pride of the village.`
      ),
      L(
        `Ditemukan pagi hari di gudang penyulingan, sebuah gelas dan botol arak tanda tangannya di meja. Mula-mula disangka mabuk lalu keracunan araknya sendiri. Tak ada luka.`,
        `Found in the morning in the distillery storehouse, a glass and a bottle of his signature arak on the table. At first taken for drunkenness, then poisoning by his own arak. No wounds.`
      ),
    ],
  },
  evidence: [
    {
      id: 'jasad', icon: 'forensics', tag: L(`Lab Forensik`, `Forensic Lab`),
      title: L(`Otopsi Wayan`, `Wayan's autopsy`),
      summary: L(`Keracunan metanol — bukan sekadar mabuk; mata dan darahnya bercerita.`, `Methanol poisoning — not mere drunkenness; his eyes and blood tell it.`),
      detail: L(
        `Penyebab kematian: keracunan metanol. Darahnya asam (asidosis metabolik) dan saraf matanya rusak — ciri khas metanol, bukan etanol biasa. Ia tewas malam sebelumnya, beberapa jam setelah minum. Dalam dosis kecil pun metanol mematikan; gejalanya mula-mula mirip mabuk biasa, lalu membutakan dan membunuh.`,
        `Cause of death: methanol poisoning. His blood was acidic (metabolic acidosis) and his optic nerves were damaged — the signature of methanol, not ordinary ethanol. He died the night before, hours after drinking. Even a small dose of methanol kills; the early signs mimic an ordinary drunk, then it blinds and kills.`
      ),
    },
    {
      id: 'botol', icon: 'cup', tag: L(`Barang Bukti`, `Evidence`),
      title: L(`Botol arak di meja`, `The bottle on the table`),
      summary: L(`Botol tanda tangannya — tapi segelnya dibuka dan diisi ulang.`, `His signature bottle — but its seal was broken and refilled.`),
      detail: L(
        `Botol bermerek tanda tangan Wayan, namun pita segelnya rusak dan tutupnya bekas dibuka. Isinya mengandung metanol berkadar tinggi — jauh di atas apa pun yang bisa lolos dari penyulingannya. Botol ini tidak keluar utuh dari gudang resmi; seseorang membukanya dan menambahkan sesuatu.`,
        `A bottle bearing Wayan's signature label, but its seal-band was torn and the cap had been opened. Its contents held a high concentration of methanol — far above anything his distillation could let through. This bottle did not leave the licensed store intact; someone opened it and added something.`
      ),
    },
    {
      id: 'cert', icon: 'doc', tag: L(`Dokumen`, `Document`),
      title: L(`Sertifikat & uji BPOM`, `BPOM certificate & lab test`),
      summary: L(`Batch resmi yang sama: lolos uji, bersih dari metanol.`, `The same official batch: passed the test, clean of methanol.`),
      detail: L(
        `Arsip menunjukkan batch yang sama dengan botol itu telah diuji laboratorium BPOM dan dinyatakan aman — kadar metanol nol. Artinya arak yang diproduksi Wayan tidak beracun. Racun pada botol di meja ditambahkan setelah arak meninggalkan jalur resmi.`,
        `Records show the same batch as that bottle was lab-tested by BPOM and declared safe — zero methanol. Which means the arak Wayan produced was not toxic. The poison in the bottle on the table was added after the arak left the official line.`
      ),
    },
    {
      id: 'heads', icon: 'recon', tag: L(`Rekonstruksi`, `Reconstruction`),
      title: L(`Kepala sulingan yang dibuang`, `The discarded heads`),
      summary: L(`Wayan selalu membuang tetes pertama yang kaya metanol.`, `Wayan always threw away the methanol-rich first drops.`),
      detail: L(
        `Setiap penyuling tahu: tetes pertama penyulingan ("kepala") paling kaya metanol dan harus dibuang. Wayan terkenal disiplin membuangnya — itulah sebabnya araknya aman. Untuk meracuni dengan metanol, seseorang harus sengaja menambahkannya kembali. Pertanyaannya: dari mana metanolnya, dan siapa yang menyimpannya.`,
        `Every distiller knows it: the first drops ("the heads") are richest in methanol and must be discarded. Wayan was famous for cutting them without fail — that is why his arak was safe. To poison with methanol, someone had to deliberately add it back. The question: where did the methanol come from, and who kept it.`
      ),
    },
    {
      id: 'wa', icon: 'phone', tag: L(`Ponsel Korban`, `Victim's Phone`),
      title: L(`Pesan terakhir Wayan`, `Wayan's last messages`),
      summary: L(`Ia mengancam membubarkan kongsi dan membongkar yang mengoplos.`, `He threatened to dissolve the partnership and expose the cutting.`),
      detail: L(
        `Beberapa hari sebelum tewas, Wayan mengirim pesan keras: ia tahu araknya dioplos dan dijual sebagai miliknya, ia akan membubarkan kongsi, dan melapor. "Aku tak akan biarkan namaku menempel di racun," tulisnya. Pesan itu ditujukan kepada Ketut, rekan usahanya.`,
        `Days before his death, Wayan sent a blunt message: he knew his arak was being cut and sold as his own, he would dissolve the partnership, and report it. "I won't let my name sit on poison," he wrote. The message was addressed to Ketut, his business partner.`
      ),
    },
    {
      id: 'buyout', icon: 'ledger', tag: L(`Dokumen`, `Document`),
      title: L(`Tawaran beli & buku kongsi`, `The buyout offer & partnership books`),
      summary: L(`Investor menawar besar; Wayan menolak. Ketut yang diuntungkan.`, `An investor's big offer; Wayan refused. Ketut stood to gain.`),
      detail: L(
        `Sebuah nota kesepahaman: investor menawar mengambil alih dan memproduksi massal arak "merek Sutila" — dicampur alkohol netral murah agar untung berlipat. Wayan menolak keras; selama ia hidup dan memegang separuh kongsi, kesepakatan mati. Dengan Wayan tiada, rekannya Ketut memegang kendali penuh dan pencairan dana yang besar.`,
        `A memorandum of understanding: an investor offered to take over and mass-produce "Sutila brand" arak — cut with cheap neutral spirit for multiplied profit. Wayan refused flatly; while he lived and held half the partnership, the deal was dead. With Wayan gone, his partner Ketut would hold full control and a large payout.`
      ),
    },
    {
      id: 'drum', icon: 'evidence', tag: L(`Temuan Kunci`, `Key Find`),
      title: L(`Drum metanol di gudang belakang`, `A methanol drum in the back store`),
      summary: L(`Drum metanol industri & nota pembelian atas nama Ketut.`, `An industrial-methanol drum & purchase receipts in Ketut's name.`),
      locked: true, twist: true,
      detail: L(
        `Tersembunyi di gudang belakang: sebuah drum metanol industri dan setumpuk nota pembelian atas nama Ketut. Diam-diam Ketut mengoplos arak dengan alkohol murah demi margin — dan metanol itu dari sumber yang sama dengan yang membunuh Wayan. Bukan bahan penyulingan; bahan oplosan.`,
        `Hidden in the back store: a drum of industrial methanol and a stack of purchase receipts in Ketut's name. Quietly, Ketut had been cutting the arak with cheap alcohol for margin — and that methanol matched the source that killed Wayan. Not a material of distillation; a material of adulteration.`
      ),
    },
    {
      id: 'counterfeit', icon: 'cup', tag: L(`Barang Bukti`, `Evidence`),
      title: L(`Arak palsu di bar Seminyak`, `Counterfeit arak in a Seminyak bar`),
      summary: L(`Botol palsu "merek Sutila" beracun disita dari bar wisatawan.`, `Toxic fake "Sutila brand" bottles seized from a tourist bar.`),
      herring: true,
      detail: L(
        `Di sebuah bar Seminyak milik Surya, disita botol-botol palsu berlabel "Sutila" berisi oplosan bermetanol — racun yang biasa membunuh wisatawan. Sekilas, inilah pembunuhnya: pemalsu yang ingin membungkam Wayan. Tapi pemalsuan ini, senyata dan sekeji apa pun, belum tentu tangan yang meracuni Wayan. Petunjuk yang menyesatkan.`,
        `In a Seminyak bar owned by Surya, counterfeit bottles labeled "Sutila" were seized, filled with methanol-laced oplosan — the poison that so often kills tourists. At a glance, here is the killer: a counterfeiter wanting to silence Wayan. But this counterfeiting, real and vile as it is, is not necessarily the hand that poisoned Wayan. A misleading clue.`
      ),
    },
    {
      id: 'lastpour', icon: 'cctv', tag: L(`Rekonstruksi`, `Reconstruction`),
      title: L(`Tuangan terakhir`, `The last pour`),
      summary: L(`Malam itu hanya satu orang tinggal menemani Wayan minum.`, `That night only one person stayed to drink with Wayan.`),
      detail: L(
        `Rekonstruksi malam itu: para pekerja pulang, putrinya ke Denpasar. Hanya rekannya, Ketut, yang tinggal "merayakan" — menuangkan arak terakhir untuk Wayan dari sebuah botol yang ia bawa sendiri. Gelas Wayan diisi oleh tangan Ketut.`,
        `A reconstruction of that night: the workers went home, his daughter to Denpasar. Only his partner, Ketut, stayed to "celebrate" — pouring Wayan a final arak from a bottle he brought himself. Wayan's glass was filled by Ketut's hand.`
      ),
    },
  ],
  suspects: [
    {
      id: 'ketut', init: 'KA', name: 'Ketut Arsana', age: 54,
      role: L(`Rekan pendiri & pengelola penjualan`, `Co-founder & sales manager`),
      statement: L(
        `"Wayan sahabatku. Araknya pasti tertukar dengan botol palsu — pasar penuh pemalsu. Aku justru ingin membesarkan namanya."`,
        `"Wayan was my friend. His bottle must have been swapped with a fake — the market's full of counterfeiters. I only ever wanted to grow his name."`
      ),
      motive: L(`Tawaran beli investor yang diblokir Wayan; dengan Wayan tiada, Ketut menguasai kongsi dan pencairan besar.`, `An investor buyout Wayan blocked; with Wayan gone, Ketut takes the partnership and a large payout.`),
      alibi: L(`Mengaku pulang sebelum Wayan minum lagi — tapi rekonstruksi menempatkannya menuang gelas terakhir.`, `Claims he left before Wayan drank again — but the reconstruction puts him pouring the last glass.`),
      interrogation: [
        { q: L(`Siapa yang menemani Wayan minum malam itu?`, `Who drank with Wayan that night?`),
          a: L(`"Aku, sebentar, lalu pulang. Kami bersulang untuk masa depan usaha. Setelah itu aku tak tahu apa-apa."`, `"Me, briefly, then I went home. We toasted the future of the business. After that I know nothing."`) },
        { q: L(`Wayan mengancam membubarkan kongsi dan melapor. Soal apa?`, `Wayan threatened to dissolve the partnership and report you. About what?`),
          a: L(`"Salah paham soal pembukuan. Sudah kami bicarakan. Orang tua kadang keras kepala soal cara lama."`, `"A misunderstanding about the books. We'd talked it over. Old men can be stubborn about the old ways."`), requires: 'wa' },
        { q: L(`Ada drum metanol dan notamu di gudang belakang.`, `There's a methanol drum and your receipts in the back store.`),
          a: L(`"Itu... untuk membersihkan alat. Semua penyuling pakai pelarut. Kalian tak bisa membuktikan apa pun dari sekaleng cairan."`, `"That's... for cleaning the equipment. Every distiller uses solvent. You can't prove anything from a tin of fluid."`), requires: 'drum' },
      ],
    },
    {
      id: 'komang', init: 'KD', name: 'Komang Dewi', age: 29,
      role: L(`Putri Wayan; pemasar & calon penerus`, `Wayan's daughter; marketer & heir-apparent`),
      statement: L(
        `"Ayah mati oleh araknya sendiri? Mustahil. Aku yang mengurus sertifikat dan uji lab — araknya bersih. Seseorang menaruh racun itu."`,
        `"Father died of his own arak? Impossible. I handled the certificates and the lab tests — his arak is clean. Someone put that poison there."`
      ),
      motive: L(`Mewarisi usaha; sempat berselisih dengan ayah soal modernisasi & ekspor.`, `Inherits the business; had clashed with her father over modernization & export.`),
      alibi: L(`Di Denpasar mengurus izin ekspor malam itu, ada saksi & struk.`, `In Denpasar handling export permits that night, with witnesses & receipts.`),
      interrogation: [
        { q: L(`Kau berselisih dengan ayahmu?`, `You clashed with your father?`),
          a: L(`"Soal ekspor dan kemasan, ya. Aku ingin dunia mengenal araknya. Itu bukan benci — itu bangga. Aku berkelahi untuk araknya, bukan melawannya."`, `"Over export and packaging, yes. I wanted the world to know his arak. That isn't hate — it's pride. I fought for his arak, not against it."`) },
        { q: L(`Bagaimana kau yakin araknya bersih?`, `How are you sure his arak is clean?`),
          a: L(`"Karena aku yang menyimpan hasil ujinya. Batch itu nol metanol. Periksa arsip BPOM. Ayah tak pernah menjual yang belum diuji — tak pernah."`, `"Because I keep the test results. That batch was zero methanol. Check the BPOM records. Father never sold what wasn't tested — never."`), requires: 'cert' },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`),
          a: L(`"Di Denpasar, mengurus izin ekspor sampai larut. Ada struk hotel dan dua rekan. Aku baru tahu pagi harinya, lewat telepon Bu Nyoman."`, `"In Denpasar, on export permits until late. There's a hotel receipt and two colleagues. I only learned in the morning, from Bu Nyoman's call."`) },
      ],
    },
    {
      id: 'gede', init: 'GM', name: 'Gede Mahatma', age: 45,
      role: L(`Penyuling pesaing; diduga pemalsu`, `A rival distiller; suspected counterfeiter`),
      statement: L(
        `"Aku menjual arakku sendiri. Kalau ada yang memalsukan merek Sutila, itu bukan aku. Wayan memang mengincarku, tapi aku tak perlu membunuh untuk menjual botol."`,
        `"I sell my own arak. If someone's faking the Sutila brand, that isn't me. Wayan was after me, true, but I don't need to kill to sell a bottle."`
      ),
      motive: L(`Persaingan; Wayan hendak membongkar arak palsu di pasaran.`, `Rivalry; Wayan was about to expose the counterfeits in the market.`),
      alibi: L(`Di pasar malam Denpasar berjualan, terlihat banyak orang.`, `Selling at a Denpasar night market, seen by many.`),
      interrogation: [
        { q: L(`Wayan hendak membongkarmu sebagai pemalsu.`, `Wayan was about to expose you as a counterfeiter.`),
          a: L(`"Botol palsu itu bukan dari penyulinganku — periksa, arakku berlabel namaku sendiri. Pasar gelap besar; banyak tangan. Aku pesaing Wayan, bukan pembunuhnya."`, `"Those fakes aren't from my still — check, my arak carries my own label. The black market is big; many hands. I was Wayan's rival, not his killer."`), requires: 'counterfeit' },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`),
          a: L(`"Di pasar malam Denpasar sampai tutup, di depan ratusan orang dan lapak sebelah. Tanya siapa saja di sana."`, `"At the Denpasar night market until closing, before hundreds of people and the next stall over. Ask anyone there."`) },
        { q: L(`Siapa yang paling diuntungkan kematian Wayan, menurutmu?`, `Who gained most from Wayan's death, in your view?`),
          a: L(`"Bukan aku — matinya Wayan justru menyorot pemalsu sepertiku. Tanya siapa yang ingin menjual araknya murah dan massal. Tanya kongsinya sendiri."`, `"Not me — Wayan's death only shines a light on counterfeiters like me. Ask who wanted to sell his arak cheap and in bulk. Ask his own partner."`) },
      ],
    },
    {
      id: 'nyoman', init: 'NR', name: 'Nyoman Rauh', age: 50,
      role: L(`Penjaga gudang & pembotol`, `Cellar keeper & bottler`),
      statement: L(
        `"Sidik jariku di banyak botol — memang aku yang membotolkan semuanya. Tapi aku tak pernah menaruh racun. Aku sayang Pak Wayan seperti kakak."`,
        `"My fingerprints are on many bottles — I'm the one who bottles them all. But I never put in poison. I loved Pak Wayan like a brother."`
      ),
      motive: L(`Tak ada; pekerja setia. Sidik jarinya di botol hanya dari membotolkan.`, `None; a loyal worker. Her prints on the bottle are only from bottling.`),
      alibi: L(`Pulang sebelum Wayan & Ketut bersulang; melihat siapa yang tinggal.`, `Left before Wayan & Ketut's toast; saw who stayed.`),
      interrogation: [
        { q: L(`Sidik jarimu ada di botol di meja itu.`, `Your fingerprints are on the bottle on the table.`),
          a: L(`"Tentu saja — aku membotolkan setiap batch dengan tanganku. Tapi botol yang kuisi tersegel rapat dan sudah diuji. Yang di meja itu segelnya rusak. Bukan aku yang membukanya."`, `"Of course — I bottle every batch with my own hands. But the bottles I fill are sealed tight and already tested. The one on the table had its seal broken. I'm not the one who opened it."`), requires: 'botol' },
        { q: L(`Apa kau melihat sesuatu yang aneh akhir-akhir ini?`, `Did you notice anything strange lately?`),
          a: L(`"Pak Ketut beberapa kali membawa drum ke gudang belakang, katanya pembersih alat. Ia melarangku ke sana. Aku menurut saja — bukan urusanku. Mungkin seharusnya kulihat."`, `"Pak Ketut brought drums to the back store a few times, said it was equipment cleaner. He forbade me from going there. I just obeyed — not my business. Maybe I should have looked."`), unlocks: 'drum' },
        { q: L(`Siapa yang tinggal bersama Wayan malam itu?`, `Who stayed with Wayan that night?`),
          a: L(`"Pak Ketut. Mereka duduk bersulang saat aku pamit. Pak Ketut yang memegang botol dan menuang. Itu yang terakhir kulihat."`, `"Pak Ketut. They were sitting and toasting when I said goodnight. Pak Ketut was holding the bottle and pouring. That's the last I saw."`) },
      ],
    },
    {
      id: 'surya', init: 'PS', name: 'Pak Surya', age: 44,
      role: L(`Pemilik bar di Seminyak; pembeli partai`, `A Seminyak bar owner; bulk buyer`),
      statement: L(
        `"Aku menjual minuman, bukan racun. Kalau ada botol palsu di barku, aku ditipu pemasok. Wayan mengancam memutus pasokan — itu kerugian, tapi bukan alasan membunuh."`,
        `"I sell drinks, not poison. If there were fakes in my bar, a supplier conned me. Wayan threatened to cut me off — a loss, but no reason to kill."`
      ),
      motive: L(`Mengoplos & menjual ulang ke wisatawan; Wayan mengancam memutus pasokan.`, `Cutting & reselling to tourists; Wayan threatened to cut off his supply.`),
      alibi: L(`Di barnya di Seminyak sepanjang malam, ada CCTV & staf.`, `At his Seminyak bar all night, with CCTV & staff.`),
      interrogation: [
        { q: L(`Botol palsu beracun disita dari barmu.`, `Toxic counterfeit bottles were seized from your bar.`),
          a: L(`"Aku beli dari pemasok murah — bodoh, ya, tapi aku tak tahu isinya metanol. Aku menjual, bukan mengoplos. Itu membunuh pelangganku juga; buruk untuk usahaku."`, `"I bought from a cheap supplier — foolish, yes, but I didn't know it held methanol. I sell, I don't mix. It killed my customers too; bad for business."`), requires: 'counterfeit' },
        { q: L(`Wayan mengancam memutus pasokanmu.`, `Wayan threatened to cut off your supply.`),
          a: L(`"Dan aku akan cari pemasok lain — itu saja. Membunuhnya justru memutus arak asli yang membuat barku laku. Aku rugi karena ia mati."`, `"And I'd have found another supplier — that's all. Killing him only cuts off the genuine arak that made my bar sell. I lose by his death."`) },
        { q: L(`Di mana kau malam itu?`, `Where were you that night?`),
          a: L(`"Di barku di Seminyak, ramai sampai pagi. CCTV dan sepuluh stafku jadi saksi. Aku tak menginjak Karangasem malam itu."`, `"At my bar in Seminyak, packed till morning. The CCTV and ten staff are my witnesses. I didn't set foot in Karangasem that night."`) },
      ],
    },
  ],
  timeline: [
    { t: L(`2020`, `2020`), key: false, x: L(`Arak Bali dilegalkan dan dilindungi; keluarga Sutila mengubah penyulingan jadi usaha resmi berlisensi BPOM.`, `Balinese arak is legalized and protected; the Sutila family turn their still into a licensed, BPOM-certified business.`) },
    { t: L(`Beberapa bulan lalu`, `A few months ago`), key: false, x: L(`Seorang investor menawar mengambil alih dan memproduksi massal — dicampur murah. Wayan menolak.`, `An investor offers to take over and mass-produce — cut cheap. Wayan refuses.`) },
    { t: L(`Pekan lalu`, `Last week`), key: true, x: L(`Wayan menemukan araknya dioplos dan dipalsukan; ia mengancam membubarkan kongsi dan melapor.`, `Wayan discovers his arak is being cut and counterfeited; he threatens to dissolve the partnership and report it.`) },
    { t: L(`Malam itu`, `That night`), key: true, x: L(`Pekerja pulang, putrinya ke Denpasar. Hanya Ketut tinggal, bersulang, menuang arak terakhir untuk Wayan.`, `The workers go home, his daughter to Denpasar. Only Ketut stays, toasting, pouring Wayan his final arak.`) },
    { t: L(`Pagi berikutnya`, `The next morning`), key: false, x: L(`Wayan ditemukan tewas; botol araknya di meja. Polisi condong menyebut arak buruk.`, `Wayan is found dead; his arak bottle on the table. The police lean toward bad arak.`) },
    { t: L(`Belakangan`, `Afterward`), key: false, x: L(`Botol palsu "merek Sutila" bermetanol disita dari bar Seminyak — racun yang sama yang biasa meracuni wisatawan.`, `Methanol-laced fake "Sutila brand" bottles are seized from a Seminyak bar — the same poison that so often kills tourists.`) },
  ],
  solution: {
    killer: 'ketut',
    proofLabels: {
      motive: { label: L(`Motif`, `Motive`), hint: L(`Apa yang ia dapat dari kematian Wayan?`, `What did he gain from Wayan's death?`) },
      means: { label: L(`Cara`, `Means`), hint: L(`Dari mana metanolnya?`, `Where did the methanol come from?`) },
      opportunity: { label: L(`Kesempatan`, `Opportunity`), hint: L(`Siapa yang menuang gelas terakhirnya?`, `Who poured his final glass?`) },
    },
    motive: ['buyout', 'wa'],
    means: ['drum', 'botol'],
    opportunity: ['lastpour'],
  },
  reveal: {
    killerName: 'Ketut Arsana',
    sections: [
      { h: L(`Bukan arak yang buruk`, `Not bad arak`), p: [
        L(
          `Wayan tidak mati oleh keahliannya. Otopsi menunjukkan keracunan metanol, tapi batch resmi yang sama lolos uji BPOM — nol metanol. Wayan selalu membuang kepala sulingan; araknya tak mungkin membawa racun sebanyak itu. Botol di meja segelnya rusak dan diisi ulang: racun itu ditambahkan setelah arak meninggalkan jalur resmi.`,
          `Wayan did not die by his own craft. The autopsy shows methanol poisoning, yet the same official batch passed the BPOM test — zero methanol. Wayan always discarded the heads; his arak could never carry that much poison. The bottle on the table had a broken seal and was refilled: the poison was added after the arak left the official line.`
        ),
      ] },
      { h: L(`Pelakunya: Ketut Arsana`, `The killer: Ketut Arsana`), p: [
        L(
          `Seorang investor menawar memproduksi massal "merek Sutila" yang dicampur alkohol murah — untung berlipat. Wayan menolak mati-matian; selama ia hidup dan memegang separuh kongsi, kesepakatan itu mustahil. Ketutlah yang diuntungkan kematiannya: kendali penuh dan pencairan besar.`,
          `An investor offered to mass-produce "Sutila brand" cut with cheap spirit — multiplied profit. Wayan refused outright; while he lived and held half the partnership, the deal was impossible. It was Ketut who gained by his death: full control and a large payout.`
        ),
        L(
          `Diam-diam Ketut sudah lama mengoplos arak demi margin — drum metanol industri dan nota pembeliannya tersembunyi di gudang belakang, terlarang bagi siapa pun. Dari sumber itulah racun yang membunuh Wayan. Malam itu, setelah semua pulang, hanya Ketut yang tinggal "bersulang", menuang arak terakhir untuk Wayan dari botol yang ia bawa sendiri — lalu menatanya agar tampak sebagai arak buruk, sekaligus menghancurkan nama yang menghalangi penjualannya.`,
          `Quietly, Ketut had long been cutting the arak for margin — an industrial-methanol drum and his purchase receipts hidden in the back store, off-limits to everyone. That was the source of the poison that killed Wayan. That night, after the others left, only Ketut stayed to "toast," pouring Wayan a final arak from a bottle he brought himself — then arranged it to look like bad arak, destroying in one stroke the name that stood in the way of his sale.`
        ),
      ] },
      { h: L(`Mengapa bukan yang lain`, `Why not the others`), p: [
        L(
          `Gede memang memalsukan dan menyaingi, dan Surya mengoplos lalu menjual ke wisatawan — kejahatan nyata yang benar-benar membunuh orang. Tapi keduanya jauh dari Karangasem malam itu, dan kematian Wayan justru merugikan mereka: ia sumber arak asli mereka, dan matinya menyorot para pemalsu. Komang mewarisi usaha, tapi ia berkelahi demi arak ayahnya, bukan melawannya, dan ada di Denpasar. Bu Nyoman membotolkan tiap batch — karena itu sidik jarinya di mana-mana — tapi botol resminya tersegel dan teruji.`,
          `Gede did counterfeit and compete, and Surya cut and sold to tourists — real crimes that truly kill people. But both were far from Karangasem that night, and Wayan's death cost them: he was the source of their genuine arak, and his death turns a spotlight on counterfeiters. Komang inherits the business, but she fought for her father's arak, not against it, and was in Denpasar. Bu Nyoman bottles every batch — which is why her prints are everywhere — but her official bottles are sealed and tested.`
        ),
        L(
          `Tiga unsur bertemu pada satu orang: motif (kesepakatan yang diblokir Wayan), cara (drum metanol miliknya dan botol yang diisi ulang), dan kesempatan (ia yang menuang gelas terakhir). Itu Ketut.`,
          `All three elements meet in one man: motive (the deal Wayan blocked), means (his own methanol drum and the refilled bottle), and opportunity (he poured the final glass). That is Ketut.`
        ),
      ] },
      { h: L(`Catatan`, `A note`), p: [
        L(
          `Arak yang sah bukanlah racun — racunnya adalah metanol yang dioplos demi untung, dan botol palsu yang menjualnya. Itu nyata: di warung pinggir jalan maupun di bar wisatawan, oplosan bermetanol terus merenggut nyawa. Tradisi yang dijaga dengan jujur layak dibela; yang membunuh adalah keserakahan yang mengoplosnya.`,
          `Lawful arak is not poison — the poison is the methanol mixed in for profit, and the fake bottles that sell it. That is real: at roadside stalls and tourist bars alike, methanol oplosan keeps taking lives. A tradition kept honestly deserves defending; what kills is the greed that adulterates it.`
        ),
      ] },
    ],
    rebuttals: {
      komang: L(
        `Komang mewarisi usaha, tapi ia memperjuangkan arak ayahnya — sertifikat, uji lab, ekspor — bukan melawannya. Malam itu ia di Denpasar, ada struk dan saksi.`,
        `Komang inherits the business, but she championed her father's arak — the certificates, the lab tests, the export — not opposed it. That night she was in Denpasar, with a receipt and witnesses.`
      ),
      gede: L(
        `Gede memalsukan dan bersaing, tapi botol palsu bukan tangannya yang meracuni Wayan; ia di pasar malam Denpasar, dan matinya Wayan justru menyorot pemalsu sepertinya.`,
        `Gede counterfeited and competed, but the fake bottles are not the hand that poisoned Wayan; he was at the Denpasar night market, and Wayan's death only shines a light on counterfeiters like him.`
      ),
      nyoman: L(
        `Sidik jari Bu Nyoman ada di banyak botol karena dialah yang membotolkan tiap batch — tapi botol resminya tersegel dan teruji. Ia menunjukkan jalan ke drum itu, bukan menyembunyikannya.`,
        `Bu Nyoman's prints are on many bottles because she bottles every batch — but her official bottles are sealed and tested. She pointed the way to the drum, she didn't hide it.`
      ),
      surya: L(
        `Surya mengoplos dan menjual ke wisatawan — keji dan nyata — tapi ia di barnya di Seminyak semalaman, dan kematian Wayan memutus arak asli yang menghidupi barnya. Ia rugi, bukan untung.`,
        `Surya cut and sold to tourists — vile and real — but he was at his Seminyak bar all night, and Wayan's death cuts off the genuine arak that kept his bar alive. He loses, not gains.`
      ),
    },
  },
}
