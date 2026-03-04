import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector.jsx";
import { getLang, setLang, LANGS } from "../utils/language";

export default function Welcome() {
  const navigate = useNavigate();
  const [lang, setLangState] = useState(getLang());

  useEffect(() => {
    const dir = LANGS[lang]?.dir || "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function handleChoose(nextLang) {
    setLang(nextLang);
    setLangState(nextLang);
    navigate("/menu");
  }

  return (
    <main className="welcome">
      <div className="card">
        <h1 className="title">Welcome to Karaj Cafe</h1>
        <img src="/images/logo.jpeg" className="logo" />
        <p className="subtitle">Choose your language</p>

        <LanguageSelector value={lang} onChange={handleChoose} />

        <p className="hint">
          Scan • Choose • Enjoy ☕
        </p>
      </div>
    </main>
  );
}