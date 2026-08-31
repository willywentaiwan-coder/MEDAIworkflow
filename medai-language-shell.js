(() => {
  const script = document.currentScript;
  const supported = new Set((script?.dataset.supported || "").split(",").map(value => value.trim()).filter(Boolean));
  const fallback = script?.dataset.fallback || "en";
  const canonical = script?.dataset.canonical || fallback;

  const locales = [
    ["bg", "Български"], ["hr", "Hrvatski"], ["cs", "Čeština"], ["da", "Dansk"],
    ["nl", "Nederlands"], ["en", "English"], ["et", "Eesti"], ["fi", "Suomi"],
    ["fr", "Français"], ["de", "Deutsch"], ["el", "Ελληνικά"], ["hu", "Magyar"],
    ["ga", "Gaeilge"], ["it", "Italiano"], ["lv", "Latviešu"], ["lt", "Lietuvių"],
    ["mt", "Malti"], ["pl", "Polski"], ["pt", "Português"], ["ro", "Română"],
    ["sk", "Slovenčina"], ["sl", "Slovenščina"], ["es", "Español"], ["sv", "Svenska"],
    ["zh-Hant", "繁體中文"], ["ja", "日本語"], ["ko", "한국어"], ["th", "ไทย"]
  ];
  const localeIds = new Set(locales.map(([id]) => id));
  const localeNames = Object.fromEntries(locales);

  const labels = {
    en: "Language", "zh-Hant": "語言", ja: "言語", ko: "언어", es: "Idioma", it: "Lingua", de: "Sprache", th: "ภาษา",
    bg: "Език", hr: "Jezik", cs: "Jazyk", da: "Sprog", nl: "Taal", et: "Keel", fi: "Kieli", fr: "Langue",
    el: "Γλώσσα", hu: "Nyelv", ga: "Teanga", lv: "Valoda", lt: "Kalba", mt: "Lingwa", pl: "Język", pt: "Idioma",
    ro: "Limbă", sk: "Jazyk", sl: "Jezik", sv: "Språk"
  };
  const pending = {
    en: "Translation pending. This page shows its canonical content until the selected-language version is reviewed.",
    "zh-Hant": "翻譯審閱中；在所選語言版本完成前，本頁顯示標準內容。",
    ja: "翻訳レビュー中です。選択した言語版が完了するまで、標準内容を表示します。",
    ko: "번역 검토 중입니다. 선택한 언어 버전이 완료될 때까지 표준 콘텐츠를 표시합니다.",
    es: "Traducción pendiente. La página muestra el contenido canónico hasta revisar la versión seleccionada.",
    it: "Traduzione in revisione. La pagina mostra il contenuto canonico fino alla revisione della lingua selezionata.",
    de: "Übersetzung in Prüfung. Bis zur Freigabe der gewählten Sprache wird der kanonische Seiteninhalt angezeigt.",
    th: "อยู่ระหว่างทบทวนคำแปล หน้านี้จะแสดงเนื้อหามาตรฐานจนกว่าจะตรวจทานภาษาที่เลือกแล้ว",
    fr: "Traduction en attente. La page affiche le contenu canonique jusqu’à la validation de la langue sélectionnée.",
    pt: "Tradução pendente. A página apresenta o conteúdo canónico até à revisão do idioma selecionado.",
    nl: "Vertaling wordt beoordeeld. De pagina toont de canonieke inhoud totdat de gekozen taal is goedgekeurd.",
    pl: "Tłumaczenie oczekuje na przegląd. Do tego czasu strona wyświetla treść kanoniczną.",
    sv: "Översättningen granskas. Sidan visar det kanoniska innehållet tills det valda språket är klart."
  };
  const working = {
    en: "Translation status: working version. Compare with the page’s canonical source before use.",
    "zh-Hant": "翻譯狀態：工作版本；使用前請與本頁標準來源核對。",
    ja: "翻訳ステータス：作業版。使用前に標準ソースと照合してください。",
    ko: "번역 상태: 작업 버전. 사용 전 표준 출처와 대조하십시오.",
    es: "Estado de traducción: versión de trabajo. Compárela con la fuente canónica antes de usarla.",
    it: "Stato traduzione: versione di lavoro. Confrontarla con la fonte canonica prima dell’uso.",
    de: "Übersetzungsstatus: Arbeitsversion. Vor Verwendung mit der kanonischen Quelle abgleichen.",
    th: "สถานะคำแปล: ฉบับใช้งาน โปรดเทียบกับแหล่งข้อมูลมาตรฐานก่อนใช้"
  };

  const style = document.createElement("style");
  style.textContent = `
    [data-medai-original-language]{display:none!important}
    .medai-language-shell{position:sticky;top:0;z-index:1000;display:flex;align-items:center;justify-content:flex-end;gap:.7rem;min-height:56px;padding:.45rem clamp(1rem,4vw,3rem);border-bottom:1px solid #dfe6eb;background:rgba(255,255,255,.97);backdrop-filter:blur(12px);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Noto Sans TC",sans-serif}
    .medai-language-shell label{display:flex;align-items:center;gap:.5rem;color:#405565;font-size:.82rem;font-weight:760}
    .medai-language-shell select{min-height:42px;max-width:min(54vw,230px);padding:.45rem 2.1rem .45rem .8rem;border:1px solid #cbd5dc;border-radius:999px;color:#17324d;background:#fff;font:inherit}
    .medai-language-status{margin:0;padding:.72rem clamp(1rem,4vw,3rem);border-bottom:1px solid #ead9a9;color:#6f4c14;background:#fff7df;font:700 .8rem/1.45 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Noto Sans TC",sans-serif}
    .medai-language-status[hidden]{display:none!important}
    @media(max-width:560px){.medai-language-shell{justify-content:stretch}.medai-language-shell label{width:100%;justify-content:space-between}.medai-language-shell select{max-width:68vw}}
    @media print{.medai-language-shell,.medai-language-status{display:none!important}}
  `;
  document.head.appendChild(style);

  const originalSelect = document.querySelector("select#language");
  const originalLabel = originalSelect?.closest("label") || null;
  if (originalSelect) {
    originalSelect.id = "medai-page-language-source";
    originalSelect.setAttribute("data-medai-original-language", "true");
    originalSelect.tabIndex = -1;
    if (originalLabel) originalLabel.setAttribute("data-medai-original-language", "true");
  }
  const legacyToggle = document.querySelector(".language-toggle");
  if (legacyToggle) legacyToggle.setAttribute("data-medai-original-language", "true");

  const bar = document.createElement("div");
  bar.className = "medai-language-shell";
  const label = document.createElement("label");
  label.htmlFor = "medai-language-select";
  const labelText = document.createElement("span");
  const select = document.createElement("select");
  select.id = "medai-language-select";
  select.setAttribute("aria-describedby", "medai-language-status");
  const eu = document.createElement("optgroup");
  eu.label = "European Union · 24";
  const asia = document.createElement("optgroup");
  asia.label = "Asia";
  locales.forEach(([value, name], index) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = name;
    (index < 24 ? eu : asia).appendChild(option);
  });
  select.append(eu, asia);
  label.append(labelText, select);
  bar.appendChild(label);

  const status = document.createElement("p");
  status.id = "medai-language-status";
  status.className = "medai-language-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  document.body.prepend(status);
  document.body.prepend(bar);

  function format(template, requested, shown) {
    return template.replaceAll("{selected}", localeNames[requested] || requested).replaceAll("{fallback}", localeNames[shown] || shown);
  }
  function applyContentLanguage(requested) {
    const shown = supported.has(requested) ? requested : fallback;
    if (originalSelect) {
      const available = [...originalSelect.options].some(option => option.value === shown);
      if (available) {
        originalSelect.value = shown;
        originalSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    } else if (document.getElementById("langZh") && document.getElementById("langEn")) {
      document.getElementById(shown === "zh-Hant" ? "langZh" : "langEn").click();
    }
    const isCanonical = requested === canonical;
    const isSupported = supported.has(requested);
    if (isCanonical) {
      status.hidden = true;
      status.textContent = "";
    } else if (isSupported) {
      const template = working[requested] || working.en;
      status.hidden = false;
      status.lang = requested;
      status.textContent = format(template, requested, canonical);
    } else {
      const template = pending[requested] || pending.en;
      status.hidden = false;
      status.lang = requested;
      status.textContent = format(template, requested, shown);
    }
    labelText.textContent = labels[requested] || labels.en;
    labelText.lang = requested;
    select.value = requested;
    try { localStorage.setItem("medai-language", requested); } catch (_) {}
    document.dispatchEvent(new CustomEvent("medai-language-change", { detail: { locale: requested, contentLocale: shown } }));
  }

  select.addEventListener("change", () => applyContentLanguage(select.value));
  document.getElementById("langZh")?.addEventListener("click", () => {
    if (select.value !== "zh-Hant") { select.value = "zh-Hant"; applyContentLanguage("zh-Hant"); }
  });
  document.getElementById("langEn")?.addEventListener("click", () => {
    if (select.value !== "en") { select.value = "en"; applyContentLanguage("en"); }
  });

  let initial = canonical;
  try {
    const saved = localStorage.getItem("medai-language");
    if (localeIds.has(saved)) initial = saved;
  } catch (_) {}
  applyContentLanguage(initial);
})();
