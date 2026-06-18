// Small "this is fiction / inspired by" note shown at the end of a case.
export default function Disclaimer({ disclaimer }) {
  if (!disclaimer) return null
  return (
    <p className="disclaimer">
      <span className="disclaimer-tag">Disclaimer</span>
      {disclaimer.text}
      {disclaimer.source && (
        <>
          {' '}
          <a href={disclaimer.source.url} target="_blank" rel="noopener noreferrer">
            {disclaimer.source.label}
          </a>
        </>
      )}
    </p>
  )
}
