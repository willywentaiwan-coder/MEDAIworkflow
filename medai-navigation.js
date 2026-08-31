(() => {
  const script = document.currentScript;
  const context = script?.dataset.function || "directory";
  const base = script?.dataset.base || "";
  const nav = document.querySelector(".suite-tabs, .medai-portal-tabs, .portal-tabs");
  if (!nav) return;

  const labels = {
    en: { overview: "Overview", functions: "Medical Functions", nav: "Medical AI site navigation" },
    "zh-Hant": { overview: "總覽", functions: "醫學職能", nav: "Medical AI 網站導覽" },
    ja: { overview: "概要", functions: "メディカル部門", nav: "Medical AI サイトナビゲーション" },
    ko: { overview: "개요", functions: "메디컬 기능", nav: "Medical AI 사이트 탐색" },
    es: { overview: "Resumen", functions: "Funciones médicas", nav: "Navegación de Medical AI" },
    it: { overview: "Panoramica", functions: "Funzioni mediche", nav: "Navigazione Medical AI" },
    de: { overview: "Übersicht", functions: "Medizinische Funktionen", nav: "Medical-AI-Navigation" },
    th: { overview: "ภาพรวม", functions: "ฝ่ายงานการแพทย์", nav: "การนำทาง Medical AI" },
    bg: { overview: "Преглед", functions: "Медицински функции", nav: "Навигация на Medical AI" },
    hr: { overview: "Pregled", functions: "Medicinske funkcije", nav: "Navigacija Medical AI" },
    cs: { overview: "Přehled", functions: "Medicínské funkce", nav: "Navigace Medical AI" },
    da: { overview: "Oversigt", functions: "Medicinske funktioner", nav: "Medical AI-navigation" },
    nl: { overview: "Overzicht", functions: "Medische functies", nav: "Medical AI-navigatie" },
    et: { overview: "Ülevaade", functions: "Meditsiinifunktsioonid", nav: "Medical AI navigeerimine" },
    fi: { overview: "Yleiskatsaus", functions: "Lääketieteelliset toiminnot", nav: "Medical AI -navigointi" },
    fr: { overview: "Vue d’ensemble", functions: "Fonctions médicales", nav: "Navigation Medical AI" },
    el: { overview: "Επισκόπηση", functions: "Ιατρικές λειτουργίες", nav: "Πλοήγηση Medical AI" },
    hu: { overview: "Áttekintés", functions: "Orvosi funkciók", nav: "Medical AI navigáció" },
    ga: { overview: "Forbhreathnú", functions: "Feidhmeanna leighis", nav: "Nascleanúint Medical AI" },
    lv: { overview: "Pārskats", functions: "Medicīniskās funkcijas", nav: "Medical AI navigācija" },
    lt: { overview: "Apžvalga", functions: "Medicinos funkcijos", nav: "Medical AI navigacija" },
    mt: { overview: "Ħarsa ġenerali", functions: "Funzjonijiet mediċi", nav: "Navigazzjoni Medical AI" },
    pl: { overview: "Przegląd", functions: "Funkcje medyczne", nav: "Nawigacja Medical AI" },
    pt: { overview: "Visão geral", functions: "Funções médicas", nav: "Navegação Medical AI" },
    ro: { overview: "Prezentare generală", functions: "Funcții medicale", nav: "Navigare Medical AI" },
    sk: { overview: "Prehľad", functions: "Medicinske funkcie", nav: "Navigácia Medical AI" },
    sl: { overview: "Pregled", functions: "Medicinske funkcije", nav: "Navigacija Medical AI" },
    sv: { overview: "Översikt", functions: "Medicinska funktioner", nav: "Medical AI-navigering" }
  };
  const functions = {
    msl: "MSL",
    "ta-lead": "TA Lead",
    "medical-content": "Medical Content",
    "patient-affairs": "Patient Affairs",
    "medical-excellence": "Medical Excellence",
    "medical-governance": "Medical Governance"
  };

  const savedLocale = () => {
    try { return localStorage.getItem("medai-language") || document.documentElement.lang || "en"; }
    catch (_) { return document.documentElement.lang || "en"; }
  };

  function render(locale = savedLocale()) {
    const t = labels[locale] || labels.en;
    const links = [
      `<a ${context === "overview" ? 'aria-current="page"' : ""} href="${base}index.html">${t.overview}</a>`,
      `<a ${context === "directory" ? 'aria-current="page"' : ""} href="${base}functions.html">${t.functions}</a>`
    ];
    if (functions[context]) {
      links.push(`<a aria-current="page" href="${base}functions.html#${context}">${functions[context]}</a>`);
    }
    nav.setAttribute("aria-label", t.nav);
    nav.innerHTML = links.join("");
  }

  render();
  document.addEventListener("medai-language-change", event => render(event.detail?.locale));
  document.querySelector("#medai-language-select, select#language")?.addEventListener("change", event => {
    window.requestAnimationFrame(() => render(event.target.value));
  });
})();
