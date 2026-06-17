# Maut di Mahameru

Misteri pembunuhan interaktif berlatar pendakian Gunung Semeru. Pemain memeriksa
bukti, menginterogasi saksi, menandai tersangka, lalu mengajukan satu tuduhan.

Built with **Vite + React**. Mesin kasus **berbasis-data (multi-kasus)**; sample
gratis tanpa backend.

## Kasus

| Kasus | Tingkat | Akses |
|---|---|---|
| **Maut di Mahameru** — pendaki tewas di Semeru | Sedang | Gratis (sample) |
| **Maut di Wisma Kencana** — "sang dermawan" tewas di pesta megahnya | Sulit | Perlu registrasi |

Kasus kedua lebih sulit: 5 tersangka, 10 bukti, dan tiga lapis kejutan
(harta palsu → perampokan rekayasa → pengkhianatan partner).

## Fitur

- **Investigasi**: bukti dengan ikon per jenis, interogasi, linimasa, notebook.
- **Petunjuk berlapis**: sebagian pertanyaan interogasi baru terbuka setelah
  bukti terkait ditemukan; satu bukti kunci (twist) tersembunyi sampai dipicu.
- **Jebakan (red herring)**: satu bukti sengaja memberatkan tersangka yang salah.
- **Deduksi**: untuk menuduh, pemain menyusun pembuktian — memilih bukti untuk
  **Motif · Cara · Kesempatan**, bukan sekadar menebak nama.
- **Peringkat detektif** + **hasil yang bisa dibagikan** (Web Share/clipboard).
- **Simpan progres** otomatis (localStorage) — bisa dilanjutkan.
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
├─ main.jsx             # entry React + AuthProvider + registrasi service worker
├─ App.jsx              # orkestrasi tampilan: beranda / auth / next / play
├─ index.css            # design tokens + styling
├─ cases/
│  ├─ index.js          # registry kasus (freeCase, gatedCase, getCase)
│  ├─ mahameru.js       # Kasus 1 (gratis)
│  └─ kencana.js        # Kasus 2 (terkunci, lebih sulit)
├─ lib/
│  ├─ supabase.js       # client Supabase (lazy, opsional)
│  ├─ content.js        # ambil konten kasus terkunci (RLS-gated, untuk paywall)
│  ├─ ranks.js          # peringkat detektif (dipakai lintas kasus)
│  ├─ save.js           # simpan progres per-kasus
│  └─ intent.js         # ingat tujuan untuk lanjut otomatis setelah login
├─ auth/
│  └─ AuthProvider.jsx  # sesi + signIn/signUp/magic-link/signOut
├─ pwa/                 # install prompt + status standalone/offline
└─ components/
   ├─ Icons.jsx         # ikon bukti, medali siluet, ilustrasi TKP (mountain/estate)
   ├─ Cover.jsx         # beranda: hero + kontrol akun + teaser kasus terkunci
   ├─ CasePlayer.jsx    # menjalankan satu kasus (state + save per-kasus)
   ├─ Auth.jsx          # layar masuk/daftar
   ├─ NextCase.jsx      # kasus berikutnya (gerbang registrasi)
   ├─ Briefing.jsx · Investigation.jsx · Accuse.jsx · Reveal.jsx
   └─ PwaBar.jsx        # notifikasi luring
```

## Catatan

Seluruh konten kasus (latar, karakter, alur) orisinal.

Untuk menambah kasus baru: buat berkas di `src/cases/<id>.js` (ikuti bentuk
`mahameru.js` — `evidence` dengan `locked`/`requires`/`unlocks`, `suspects`,
`solution`, `reveal`), lalu daftarkan di `src/cases/index.js`.

### Rencana (roadmap)

- **Fase 1 (selesai):** dua kasus — sample gratis + kasus kedua di balik gerbang
  registrasi (Supabase Auth). Kasus kedua kini masih ter-bundle (gerbang login
  di sisi klien) karena belum berbayar.
- **Fase 2 (paywall):** pindahkan konten kasus berbayar ke tabel `story_content`
  Supabase (jangan di-bundle), aktifkan `entitlements` + RLS (sudah disiapkan di
  `supabase/schema.sql`) dan webhook Stripe. Hanya pembeli yang bisa membaca.
- **Fase 3 (opsional):** RevenueCat untuk entitlement lintas-platform bila
  merilis aplikasi mobile.
