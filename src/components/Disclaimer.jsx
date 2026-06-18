// "This is fiction / inspired by" note shown at the very end of a case.
// The source is a descriptive hyperlink (not a raw URL).
export default function Disclaimer({ disclaimer }) {
  if (!disclaimer) return null
  return (
    <div className="disclaimer">
      <p>
        <span className="disclaimer-tag">Disclaimer</span>
        {disclaimer.text}
      </p>
      {disclaimer.source && (
        <p className="disclaimer-src">
          <a href={disclaimer.source.url} target="_blank" rel="noopener noreferrer">
            {disclaimer.source.label}
          </a>
        </p>
      )}
    </div>
  )
}
