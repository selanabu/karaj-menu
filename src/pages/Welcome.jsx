import { useNavigate } from "react-router-dom";
import { setLang } from "../utils/language";

export default function Welcome() {
  const navigate = useNavigate();

  function chooseLang(lang) {
    setLang(lang);
    navigate("/menu");
  }

  return (
    <main className="welcome">

      {/* Background logo */}
      <img
        src="/images/logo.png"
        className="welcome-bg-logo"
        alt="Karaj Cafe"
      />

      <div className="welcome-content">
        <h1 className="welcome-title">Karaj Cafe</h1>
        <p className="welcome-subtitle">Choose Language</p>

        <div className="lang-grid">
          <button className="lang-btn" onClick={() => chooseLang("en")}>
            English
          </button>

          <button className="lang-btn" onClick={() => chooseLang("he")}>
            עברית
          </button>

          <button className="lang-btn" onClick={() => chooseLang("ar")}>
            العربية
          </button>
        </div>
      </div>

    </main>
  );
}