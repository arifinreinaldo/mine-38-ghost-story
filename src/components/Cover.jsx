export default function Cover({ go, hasProgress, restart }) {
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
        {hasProgress ? (
          <div className="actions" style={{ marginTop: 0 }}>
            <button className="btn" onClick={() => go('investigation')}>
              Lanjutkan investigasi →
            </button>
            <button className="btn btn-ghost" onClick={restart}>
              Mulai dari awal
            </button>
          </div>
        ) : (
          <button className="btn" onClick={() => go('briefing')}>
            Buka Berkas →
          </button>
        )}
      </div>
    </section>
  )
}
