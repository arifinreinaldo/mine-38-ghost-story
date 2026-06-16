export default function Cover({ go }) {
  return (
    <section className="cover" aria-label="Sampul kasus">
      <div className="cover-sky" />
      <div className="cover-stars" />
      <div className="plume" />
      <div className="cover-inner">
        <span className="eyebrow">Berkas Kasus · SM-2406 · Gunung Semeru</span>
        <h1>
          Maut di<br />Mahameru
        </h1>
        <p className="cover-lead">
          Subuh, pukul 04.40. Seorang pendaki ditemukan tewas di pasir menjelang
          puncak. Polisi menutup kasusnya sebagai kecelakaan. Keluarganya tidak
          percaya.
        </p>
        <button className="btn" onClick={() => go('briefing')}>
          Buka Berkas →
        </button>
      </div>
    </section>
  )
}
