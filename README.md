# Maut di Mahameru

Kumpulan misteri pembunuhan interaktif berlatar Indonesia. Pemain memeriksa
bukti, menginterogasi saksi, menandai tersangka, lalu mengajukan satu kesimpulan
— termasuk kemungkinan bahwa kematiannya bukan pembunuhan, atau tak ada satu
pelaku pun yang bisa ditunjuk.

Built with **Vite + React**. Mesin kasus **berbasis-data (multi-kasus)**,
**dwibahasa (Indonesia/English)**, dengan **musik latar** prosedural; sample
gratis tanpa backend.

## Kasus

13 kasus berlatar berbagai daerah dan zaman di Indonesia: **1 gratis** (sample)
+ **12 terkunci** (di balik gerbang registrasi).

| Kasus | Tingkat | Akses |
|---|---|---|
| **Maut di Mahameru** — pendaki tewas di Semeru | Mudah | Gratis (sample) |
| 12 kasus lain — dari vila, candi, loji kolonial, Toraja, Mei 1998, hingga ciu Bekonang | Sedang–Sulit | Perlu registrasi |

Ragam bentuk teka-teki: pelaku tunggal, **komplotan** (beberapa pelaku),
**kecelakaan** (ternyata bukan pembunuhan), hingga **kasus kelabu** tanpa pelaku
tunggal yang bisa diadili. Satu kasus menyimpan bonus **Perburuan Harta**
tersembunyi (sandi → titik peta → koordinat asli via Google Maps).

## Fitur

- **Investigasi**: bukti dengan ikon per jenis, interogasi, linimasa, notebook.
- **Petunjuk berlapis**: sebagian pertanyaan interogasi baru terbuka setelah
  bukti terkait ditemukan; satu bukti kunci (twist) tersembunyi sampai dipicu.
- **Jebakan (red herring)**: satu bukti sengaja memberatkan tersangka yang salah.
- **Deduksi**: untuk menuduh, pemain menyusun pembuktian — memilih bukti untuk
  **Motif · Cara · Kesempatan**, bukan sekadar menebak nama. Vonis bisa berupa
  pelaku tunggal, komplotan, kecelakaan, atau "tak ada pelaku tunggal".
- **Dwibahasa**: seluruh antarmuka & kasus tersedia dalam **Indonesia/English**
  (tombol ID/EN; default Indonesia, pilihan tersimpan).
- **Musik latar**: ambient mencekam yang dibangkitkan secara prosedural (tanpa
  berkas audio — bebas lisensi), **beda tiap kasus**, bisa dimatikan kapan saja.
- **Perburuan Harta** (bonus tersembunyi di satu kasus): pecahkan sandi, temukan
  titik peta, lalu rakit koordinat asli — perlu peta daring untuk memecahkannya.
- **Peringkat detektif** + **hasil yang bisa dibagikan** (Web Share/clipboard).
- **Simpan progres** otomatis (localStorage) — bisa dilanjutkan; dan **tersinkron
  ke database** (Supabase) per akun saat login, jadi progres mengikuti lintas
  perangkat (local-first: tetap jalan offline).
- **PWA**: bisa di-install dan jalan offline.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan (biasanya `http://localhost:5173`).

## Build produksi

```bash
npm run build      # output ke dist/
npm run preview    # cek hasil build
```

## Deploy ke Vercel

1. Buat repo di GitHub dan push proyek ini.
2. Di [vercel.com](https://vercel.com) → **New Project** → import repo tersebut.
3. Pengaturan terdeteksi otomatis dari `vercel.json`:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**. Tidak perlu konfigurasi tambahan.

`vercel.json` sudah menyetel cache `immutable` untuk aset ber-hash di `/assets/*`
dan beberapa header keamanan dasar. Tag Open Graph/Twitter di `index.html`
otomatis memakai domain produksi Vercel saat build (lihat `vite.config.js`),
jadi tautan yang dibagikan menampilkan pratinjau yang benar.

## Akun & kasus berikutnya (Supabase)

Autentikasi **opsional**. Tanpa env, aplikasi berjalan sebagai sample gratis
(kontrol akun & gerbang registrasi otomatis tersembunyi). SDK Supabase
di-*lazy load* — bundel sample tetap ramping.

Mengaktifkan registrasi (Fase 1 — gerbang login untuk kasus berikutnya):

1. Buat proyek di [supabase.com](https://supabase.com).
2. Set env (lokal di `.env`, di Vercel di **Project → Settings → Environment Variables**)
   — pakai **publishable key** (bukan anon lama):
   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
   ```
   (Supabase → **Project Settings → API Keys**.) **Secret key** (`sb_secret_...`)
   hanya untuk server (Fase 2 / webhook Stripe) — jangan diberi prefix `VITE_`,
   jangan di-commit.
3. Jalankan `supabase/schema.sql` di **SQL Editor** Supabase.
4. **Authentication → Providers → Email**: aktifkan. Untuk uji cepat, matikan
   sementara "Confirm email" agar sign up langsung bisa login.

**Progres tersinkron (cloud).** Tabel `progress` menyimpan save per-kasus tiap
pemain (RLS: tiap orang hanya bisa membaca/menulis miliknya). Aplikasi tetap
*local-first* — localStorage adalah sumber utama yang jalan offline — lalu
progres dicerminkan ke Supabase saat login dan digabung kembali
(last-write-wins), sehingga mengikuti pemain lintas perangkat. Jika kamu sudah
menjalankan `schema.sql` sebelum fitur ini ada, jalankan ulang berkas itu (atau
cukup bagian tabel `progress`) di SQL Editor.

Konten kasus berbayar **tidak** ikut ter-bundle ke browser — diambil dari tabel
`story_content` Supabase dan dijaga oleh RLS. Fase 1: cukup login. Fase 2
(paywall): ganti policy RLS ke pengecekan `entitlements` + webhook Stripe
(bagian ini sudah disiapkan—dikomentari—di `supabase/schema.sql`).

## Struktur

```
index.html              # meta, Open Graph/Twitter, favicon
vite.config.js          # plugin React + injeksi %SITE_URL% saat build
vercel.json             # framework, cache aset, header keamanan
.env.example            # env Supabase (opsional)
supabase/schema.sql     # tabel + RLS (Fase 1 login, Fase 2 paywall dikomentari)
public/                 # favicon (belati+darah), ikon PWA, manifest, sw.js, og.png
src/
├─ main.jsx             # entry React + LangProvider + AuthProvider + service worker
├─ App.jsx              # orkestrasi tampilan + lokalisasi kasus + tema musik aktif
├─ index.css            # design tokens + styling
├─ i18n/
│  ├─ L.js              # penanda L('id','en') + localize() rekursif
│  ├─ strings.js        # kamus teks UI (id/en)
│  └─ LangProvider.jsx  # state bahasa (persist) + useUI()/useLang()
├─ audio/
│  ├─ ambient.js        # mesin musik prosedural (Web Audio) + kontrol play/tema
│  └─ themes.js         # tema ambient per-kasus
├─ cases/
│  ├─ index.js          # registry kasus (freeCase, gatedCases, getCase)
│  ├─ mahameru.js       # Kasus 1 (gratis)
│  └─ …                 # 11 kasus terkunci lain (mis. macankawi: + Perburuan Harta; mei98: kelabu)
├─ lib/
│  ├─ supabase.js       # client Supabase (lazy, opsional)
│  ├─ content.js        # ambil konten kasus terkunci (RLS-gated, untuk paywall)
│  ├─ ranks.js          # peringkat detektif + lencana harta (dwibahasa)
│  ├─ geo.js            # pencocokan jawaban Perburuan Harta (sandi/koordinat)
│  ├─ save.js           # simpan progres per-kasus (localStorage, sumber utama)
│  ├─ cloud.js          # progres ke Supabase (tabel progress, RLS per user)
│  ├─ progressSync.js   # sinkron progres lokal <-> cloud (local-first)
│  └─ intent.js         # ingat tujuan untuk lanjut otomatis setelah login
├─ auth/
│  └─ AuthProvider.jsx  # sesi + signIn/signUp/magic-link/signOut
├─ pwa/                 # install prompt + status standalone/offline
└─ components/
   ├─ Icons.jsx         # ikon bukti, medali siluet, ilustrasi TKP (8 latar)
   ├─ Cover.jsx         # beranda: hero + kontrol akun + teaser kasus terkunci
   ├─ CasePlayer.jsx    # menjalankan satu kasus (state + save per-kasus)
   ├─ Auth.jsx          # layar masuk/daftar
   ├─ NextCase.jsx      # daftar kasus terkunci (gerbang registrasi)
   ├─ Briefing · Investigation · Accuse · Reveal · TreasureHunt
   ├─ Disclaimer.jsx    # catatan "ini fiksi / terinspirasi"
   ├─ LangToggle.jsx · SoundToggle.jsx   # pemilih bahasa & musik
   └─ PwaBar.jsx        # notifikasi luring
```

## Catatan

Seluruh konten kasus (latar, karakter, alur) orisinal.

Untuk menambah kasus baru: buat berkas di `src/cases/<id>.js` (ikuti bentuk
`mahameru.js` — bungkus teks dengan `L('id','en')`; `evidence` dengan
`locked`/`requires`/`unlocks`, `suspects`, `solution`, `reveal`), daftarkan di
`src/cases/index.js`, lalu tambahkan tema musiknya di `src/audio/themes.js`.

### Rencana (roadmap)

- **Fase 1 (selesai):** 13 kasus (sample gratis + 12 di balik gerbang registrasi
  Supabase Auth), antarmuka dwibahasa (ID/EN), dan musik latar prosedural. Kasus
  terkunci kini masih ter-bundle (gerbang login di sisi klien) karena belum
  berbayar.
- **Fase 2 (paywall):** pindahkan konten kasus berbayar ke tabel `story_content`
  Supabase (jangan di-bundle), aktifkan `entitlements` + RLS (sudah disiapkan di
  `supabase/schema.sql`) dan webhook Stripe. Hanya pembeli yang bisa membaca.
- **Fase 3 (opsional):** RevenueCat untuk entitlement lintas-platform bila
  merilis aplikasi mobile.
