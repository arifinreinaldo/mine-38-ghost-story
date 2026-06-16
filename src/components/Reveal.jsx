import { suspects, KILLER } from '../data'

export default function Reveal({ accused, restart }) {
  const correct = accused === KILLER
  const chosen = suspects.find((s) => s.id === accused)?.name ?? '—'

  return (
    <section className="screen" aria-label="Pengungkapan">
      <div className="wrap pad">
        <span className="eyebrow">
          {correct
            ? 'Pengungkapan · Kasus terpecahkan'
            : 'Pengungkapan · Tuduhan salah'}
        </span>
        <div className={'verdict ' + (correct ? 'right' : 'wrong')}>
          {correct ? 'Tepat.' : 'Belum tepat.'}
        </div>

        <div className="solution">
          {correct ? (
            <p>
              Anda menuduh <strong>{chosen}</strong> — dan Anda benar.
            </p>
          ) : (
            <p>
              Anda menuduh <strong>{chosen}</strong>. Bukti mengarah ke orang
              lain. Inilah yang sebenarnya terjadi.
            </p>
          )}

          <h3>Pelakunya: Dimas Pratama</h3>
          <p>
            Arya tidak tergelincir. Ia dibunuh oleh partner usahanya sendiri.
          </p>
          <p>
            Pesan terakhir Arya membongkar motifnya: Arya menemukan selisih dana
            sponsor, hendak membubarkan Rimbawan Gear, dan mengancam melapor ke
            polisi. Bagi Dimas, itu berarti kehilangan segalanya sekaligus
            terancam pidana.
          </p>
          <p>
            Malam itu Dimas yang menyeduh dan membagikan kopi summit di Kalimati
            — kesempatan menyelipkan diazepam ke termos Arya. Pak Bambang tak
            ikut minum, dan Dimas mengakui sendiri bahwa ia yang membuat kopi.
            Dimas juga satu-satunya yang punya akses ke stok baterai internal
            perusahaan, yang dipakainya menukar baterai headlamp Arya dengan
            yang sudah habis.
          </p>
          <p>
            Hasilnya: di lereng pasir curam, dalam gelap total, dengan tubuh
            yang mengantuk berat, Arya kehilangan keseimbangan — persis seperti
            "kecelakaan" yang diharapkan Dimas. Dan ketika itu terjadi, hanya
            Dimas yang berada di belakangnya.
          </p>

          <h3>Mengapa bukan yang lain</h3>
          <p>
            <strong>Sari</strong> sudah turun ke Kelik saat kejadian — IG
            Story-nya pukul 04.12 membuktikannya. <strong>Reza</strong> tidak
            pernah ikut summit; timelapse-nya terekam dari camp sepanjang malam.{' '}
            <strong>Pak Bambang</strong> berada di depan dan justru menjadi
            orang yang memberi alarm — dan ia tak punya akses ke stok baterai
            perusahaan maupun kendali atas kopi summit.
          </p>
          <p>
            Tiga unsur hanya bertemu pada satu orang: motif (pesan ancaman),
            cara (kopi dan baterai), dan kesempatan (posisi di belakang Arya).
            Itu Dimas.
          </p>
        </div>

        <div className="actions">
          <button className="btn btn-ghost" onClick={restart}>
            ↺ Ulangi dari awal
          </button>
        </div>
      </div>
    </section>
  )
}
