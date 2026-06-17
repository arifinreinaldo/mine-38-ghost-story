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

## Struktur

```
index.html              # meta, Open Graph/Twitter, favicon
vite.config.js          # plugin React + injeksi %SITE_URL% saat build
vercel.json             # framework, cache aset, header keamanan
public/
├─ favicon.svg          # ikon (belati + darah)
├─ apple-touch-icon.png # ikon iOS
├─ icon-192/512.png     # ikon PWA (+ maskable)
├─ site.webmanifest     # manifest PWA
├─ sw.js                # service worker (network-first, offline)
└─ og.png               # gambar share 1200×630
src/
├─ main.jsx             # entry React + registrasi service worker
├─ App.jsx              # state machine layar + state game (di-hoist) + simpan progres
├─ data.js              # konten kasus: bukti, tersangka, twist, solusi, peringkat
├─ index.css            # design tokens + styling
└─ components/
   ├─ Icons.jsx         # ikon bukti, medali siluet, ilustrasi TKP
   ├─ Cover.jsx
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

MVP ini disajikan sebagai konten gratis. Ke depan: beberapa kasus dengan
sebagian di antaranya berbayar (paywall via Stripe). Untuk ke sana, langkah
berikutnya adalah memecah `data.js` menjadi banyak kasus (mis. `cases/<id>.js`
dengan field `free: true/false`) dan menambah layar pemilihan kasus di `App.jsx`.
