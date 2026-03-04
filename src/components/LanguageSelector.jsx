import { LANGS } from "../utils/language";

export default function LanguageSelector({ value, onChange }) {
  return (
    <div className="lang-grid">
      {Object.entries(LANGS).map(([code, meta]) => (
        <button
          key={code}
          className={`lang-btn ${value === code ? "active" : ""}`}
          onClick={() => onChange(code)}
          type="button"
        >
          {meta.label}
        </button>
      ))}
    </div>
  );
}