export const LANGS = {
  he: { label: "עברית", dir: "rtl" },
  ar: { label: "العربية", dir: "rtl" },
  en: { label: "English", dir: "ltr" },
};

export function getLang() {
  const saved = localStorage.getItem("karaj_lang");
  return saved && LANGS[saved] ? saved : "en";
}

export function setLang(lang) {
  localStorage.setItem("karaj_lang", lang);
}