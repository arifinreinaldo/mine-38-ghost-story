# Maut di Mahameru

Misteri pembunuhan interaktif berlatar pendakian Gunung Semeru. Pemain memeriksa
bukti, menginterogasi saksi, menandai tersangka, lalu mengajukan satu tuduhan.

Built with **Vite + React**. Single self-contained case, no backend.

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
2. Set env (lokal di `.env`, di Vercel di **Project → Settings → Environment Variables**):
   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```
   (Supabase → **Project Settings → API**.)
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
├─ App.jsx              # state machine layar + state game + simpan progres
├─ data.js              # konten kasus gratis: bukti, tersangka, twist, solusi, peringkat
├─ stories.js           # katalog kasus (gratis vs terkunci)
├─ index.css            # design tokens + styling
├─ lib/
│  ├─ supabase.js       # client Supabase (lazy, opsional)
│  └─ content.js        # ambil konten kasus terkunci (RLS-gated)
├─ auth/
│  └─ AuthProvider.jsx  # sesi + signIn/signUp/magic-link/signOut
└─ components/
   ├─ Icons.jsx         # ikon bukti, medali siluet, ilustrasi TKP
   ├─ Cover.jsx         # + kontrol akun + teaser kasus terkunci
   ├─ Auth.jsx          # layar masuk/daftar
   ├─ NextCase.jsx      # kasus berikutnya (gerbang registrasi)
   ├─ Briefing.jsx
   ├─ Investigation.jsx # tab, bukti (gated), interogasi, notebook
   ├─ Accuse.jsx        # pilih tersangka + susun pembuktian (deduksi)
   └─ Reveal.jsx        # vonis, peringkat, bantahan per-tersangka, bagikan
```

## Catatan

Seluruh konten kasus (latar, karakter, alur) orisinal.

Untuk menambah kasus baru, duplikasi struktur di `src/data.js` (lihat `SOLUTION`,
`evidence` dengan `locked`/`requires`/`unlocks`, `rebuttals`, dan `RANKS`).

### Rencana (roadmap)

- **Fase 1 (selesai):** sample gratis + gerbang registrasi (Supabase Auth) untuk
  kasus berikutnya.
- **Fase 2 (paywall):** aktifkan tabel `entitlements` + RLS (sudah disiapkan di
  `supabase/schema.sql`) dan webhook Stripe; konten kasus diambil dari
  `story_content`. Hanya pengguna yang membeli yang bisa membaca.
- **Fase 3 (opsional):** RevenueCat untuk entitlement lintas-platform bila
  merilis aplikasi mobile.
