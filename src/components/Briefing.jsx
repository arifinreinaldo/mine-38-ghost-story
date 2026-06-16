export default function Briefing({ go }) {
  return (
    <section className="screen" aria-label="Pengarahan">
      <div className="wrap pad">
        <div className="section-head">
          <span className="eyebrow">Pengarahan</span>
          <h2>Apa yang kita tahu</h2>
        </div>

        <p>
          Tiga hari lalu, lima orang mendaki Gunung Semeru. Pada hari ketiga,
          dini hari, sebagian dari mereka melakukan <em>summit attack</em> dari
          pos terakhir, Kalimati, menembus dingin dan gelap menuju puncak
          Mahameru.
        </p>
        <p style={{ marginTop: '1em' }}>
          Hanya satu yang tidak kembali. <strong>Arya Wibowo</strong>, 34 tahun
          — pendaki berpengalaman sekaligus pembuat konten dengan ratusan ribu
          pengikut — ditemukan tergeletak di lereng pasir curam, sekitar dua
          ratus meter di bawah puncak. Tim SAR menyimpulkan ia tergelincir dan
          jatuh. Kasus ditutup.
        </p>
        <p style={{ marginTop: '1em' }}>
          Kakak korban menolak kesimpulan itu. Arya bukan pendaki sembarangan.
          Ia memanggil Anda.
        </p>

        <div className="card" style={{ marginTop: '2.4em' }}>
          <span className="label">Tugas Anda</span>
          <p style={{ marginTop: '.6em', color: '#D8DCE1' }}>
            Periksa setiap bukti. Interogasi keempat orang yang ada di gunung
            itu. Lalu ajukan satu tuduhan: jika ini memang pembunuhan, siapa
            pelakunya?
          </p>
        </div>

        <div className="actions">
          <button className="btn" onClick={() => go('investigation')}>
            Mulai Investigasi →
          </button>
        </div>
      </div>
    </section>
  )
}
