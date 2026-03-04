import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLang, LANGS } from "../utils/language";
import { MENU } from "../data/menuData";

const UI = {
  title: { en: "Menu", he: "תפריט", ar: "القائمة" },
  changeLang: { en: "Change language", he: "החלפת שפה", ar: "تغيير اللغة" },
  currency: { en: "₪", he: "₪", ar: "₪" },
};

export default function Menu() {
  const navigate = useNavigate();
  const [lang, setLang] = useState(getLang());
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const dir = LANGS[lang]?.dir || "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function t(obj) {
    return obj?.[lang] ?? obj?.en ?? obj?.he ?? obj?.ar ?? "";
  }

  return (
    <main className="menu-page">
    <div className="vintage-frame">
      {/* Header */}
      <header className="vintage-header">
        <button className="ghost" type="button" onClick={() => navigate("/")}>
          {UI.changeLang[lang]}
        </button>


        <div className="menu-word" aria-label="Menu">
          <span>U</span>
          <span>N</span>
          <span>E</span>
          <span>M</span>
        </div>

        <div className="brand-row">
          <div className="brand">Karaj Cafe</div>
        </div>
      </header>

      {/* Content */}
      <div className="menu-content">
        {MENU.map((cat) => (
          <section key={cat.id} className="menu-section">
            <h2 className="section-title">{t(cat.title)}</h2>

            <div className="items">
              {cat.items.map((it, idx) => (
                <div key={it.id ?? `${cat.id}_${idx}`} className="item">
                  <div className="item-top">
                    {it.image ? (
                      <img
                        className="item-img"
                        src={it.image}
                        alt={t(it.name)}
                        loading="lazy"
                        onClick={() => setSelectedImage(it.image)}
                        role="button"
                      />
                    ) : null}

                    <div className="item-main">
                      <div className="item-row">
                        <div className="item-name">{t(it.name)}</div>
                        <div className="item-dots" />
                        <div className="item-price">
                          {it.price} {UI.currency[lang]}
                        </div>
                      </div>

                      {it.extra ? <div className="item-extra">{t(it.extra)}</div> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {cat.notes?.length ? (
              <div className="notes">
                {cat.notes.map((n, i) => (
                  <div key={i} className="note">
                    {t(n)}
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="vintage-footer">Karaj Cafe</footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button className="modal-x" type="button" onClick={() => setSelectedImage(null)}>
            ✕
          </button>
          <img src={selectedImage} className="modal-img" alt="Selected item" />
        </div>
      )}
    </div>
    </main>
  );
}