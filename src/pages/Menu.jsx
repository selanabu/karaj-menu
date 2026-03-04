import { useEffect, useMemo, useState } from "react";
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

  // detect mobile (once on mount)
  const isMobile = useMemo(() => window.matchMedia("(max-width: 520px)").matches, []);

  // open/close categories: mobile -> closed, desktop -> open
  const [openCats, setOpenCats] = useState(() => {
    const initial = {};
    MENU.forEach((c) => (initial[c.id] = !isMobile));
    return initial;
  });

  function toggleCat(id) {
    setOpenCats((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function openCat(id) {
    setOpenCats((prev) => ({ ...prev, [id]: true }));
  }

  useEffect(() => {
    const dir = LANGS[lang]?.dir || "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function t(obj) {
    return obj?.[lang] ?? obj?.en ?? obj?.he ?? obj?.ar ?? "";
  }

  function scrollToCat(catId) {
    const el = document.getElementById(`cat-${catId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // in mobile, open the section when navigating
    openCat(catId);
  }

  return (
    <main className="menu-page">
      <div className="vintage-frame">
        {/* Header */}
        <header className="vintage-header">
          <button className="ghost" type="button" onClick={() => navigate("/")}>
            {UI.changeLang[lang]}
          </button>

          <div className="menu-title-row">

 

  <div className="menu-word" aria-label={UI.title[lang]}>
    <span>U</span>
    <span>N</span>
    <span>E</span>
    <span>M</span>
     <span className="pizza">🍕</span>

  </div>
   

</div>

          <div className="brand-row">
            <div className="brand">Karaj Cafe</div>
          </div>
        </header>

        {/* Category chips nav */}
        <nav className="cat-nav" aria-label="Categories">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              className="cat-chip"
              type="button"
              onClick={() => scrollToCat(cat.id)}
            >
              {t(cat.title)}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="menu-content">
          {MENU.map((cat) => (
            <section id={`cat-${cat.id}`} key={cat.id} className="menu-section">
              <button
                type="button"
                className="section-title section-toggle"
                onClick={() => toggleCat(cat.id)}
                aria-expanded={!!openCats[cat.id]}
              >
                <span>{t(cat.title)}</span>
                <span className={`chev ${openCats[cat.id] ? "open" : ""}`}>▾</span>
              </button>

              {openCats[cat.id] ? (
                <>
                  <div className="items items-open">
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

                            {it.extra ? (
                              <div className="item-extra">{t(it.extra)}</div>
                            ) : null}
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
                </>
              ) : null}
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="vintage-footer">Karaj Cafe</footer>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <button
              className="modal-x"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
            <img src={selectedImage} className="modal-img" alt="Selected item" />
          </div>
        )}
      </div>
    </main>
  );
}