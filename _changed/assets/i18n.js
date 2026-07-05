/* ============================================
   Reasoning GP — i18n / multilingual support
   English default + Arabic, Urdu, Spanish, French,
   Chinese, German. Arabic + Urdu trigger RTL layout.
   ============================================ */

window.RGP_LANGS = [
  { code:'en', flag:'\ud83c\uddec\ud83c\udde7', native:'English',  rtl:false },
  { code:'ar', flag:'\ud83c\uddf8\ud83c\udde6', native:'\u0627\u0644\u0639\u0631\u0628\u064a\u0629',  rtl:true  },
  { code:'ur', flag:'\ud83c\uddf5\ud83c\uddf0', native:'\u0627\u0631\u062f\u0648',           rtl:true  },
  { code:'es', flag:'\ud83c\uddea\ud83c\uddf8', native:'Espa\u00f1ol',  rtl:false },
  { code:'fr', flag:'\ud83c\uddeb\ud83c\uddf7', native:'Fran\u00e7ais', rtl:false },
  { code:'zh', flag:'\ud83c\udde8\ud83c\uddf3', native:'\u4e2d\u6587',     rtl:false },
  { code:'de', flag:'\ud83c\udde9\ud83c\uddea', native:'Deutsch',  rtl:false },
];

// Core UI strings. Keys mirror the English source.
// Translations are HUMAN-REVIEWED for UI accuracy.
window.RGP_I18N = {
  // ---- NAV ----
  'nav.cases':              { en:'Casebook',      ar:'\u0627\u0644\u062d\u0627\u0644\u0627\u062a',     ur:'\u06a9\u06cc\u0633\u0632',     es:'Casos',     fr:'Cas',          zh:'\u75c5\u4f8b',  de:'F\u00e4lle' },
  'nav.tools':              { en:'Tools',         ar:'\u0623\u062f\u0648\u0627\u062a',  ur:'\u0622\u0644\u0627\u062a',     es:'Herramientas',fr:'Outils',     zh:'\u5de5\u5177',  de:'Werkzeuge' },
  'nav.sca':                { en:'SCA Practice',  ar:'\u062a\u062f\u0631\u064a\u0628 SCA',  ur:'SCA \u0645\u0634\u0642',     es:'Pr\u00e1ctica SCA',fr:'Entra\u00eenement SCA',zh:'SCA \u7ec3\u4e60', de:'SCA-\u00dcbung' },
  'nav.leaflets':           { en:'Leaflets',      ar:'\u0646\u0634\u0631\u0627\u062a',  ur:'\u06a9\u062a\u0627\u0628\u0686\u06d2', es:'Folletos',  fr:'D\u00e9pliants',zh:'\u5c0f\u518c\u5b50',de:'Bl\u00e4tter' },
  'nav.cpd':                { en:'CPD',           ar:'\u062a\u0637\u0648\u064a\u0631 \u0645\u0647\u0646\u064a', ur:'\u067e\u06cc\u0634\u06c1 \u0648\u0631\u0627\u0646\u06c1 \u062a\u0631\u0642\u06cc', es:'DPC',fr:'DPC',zh:'\u7ee7\u7eed\u6559\u80b2', de:'CME' },
  'nav.audios':             { en:'Audios',        ar:'\u0635\u0648\u062a\u064a\u0627\u062a',  ur:'\u0622\u0688\u06cc\u0648',  es:'Audios',   fr:'Audios',     zh:'\u97f3\u9891',  de:'Audios' },
  'nav.updates':            { en:'Updates',       ar:'\u062a\u062d\u062f\u064a\u062b\u0627\u062a',  ur:'\u0627\u067e \u0688\u06cc\u0679\u0633', es:'Novedades',fr:'Mises \u00e0 jour',zh:'\u66f4\u65b0',de:'Updates' },
  'nav.ebm':                { en:'EBM',           ar:'\u0627\u0644\u0637\u0628 \u0627\u0644\u0645\u0628\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u062f\u0644\u064a\u0644', ur:'\u062b\u0628\u0648\u062a \u067e\u0631 \u0645\u0628\u0646\u06cc \u0637\u0628', es:'MBE',fr:'MFP',zh:'\u5faa\u8bc1\u533b\u5b66',de:'EbM' },
  'nav.signin':             { en:'Sign in',       ar:'\u062f\u062e\u0648\u0644',      ur:'\u0633\u0627\u0626\u0646 \u0627\u0646',     es:'Iniciar sesi\u00f3n',fr:'Se connecter',zh:'\u767b\u5f55',de:'Anmelden' },
  'nav.signup':             { en:'Sign up',       ar:'\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628', ur:'\u0633\u0627\u0626\u0646 \u0627\u067e', es:'Registrarse',fr:'S\'inscrire',zh:'\u6ce8\u518c',de:'Registrieren' },
  'nav.search':             { en:'Jump to a case or tool\u2026', ar:'\u0627\u0628\u062d\u062b \u0639\u0646 \u062d\u0627\u0644\u0629 \u0623\u0648 \u0623\u062f\u0627\u0629\u2026', ur:'\u06a9\u06cc\u0633 \u06cc\u0627 \u0622\u0644\u06c1 \u062a\u0644\u0627\u0634 \u06a9\u0631\u06cc\u06ba\u2026', es:'Ir a un caso o herramienta\u2026', fr:'Aller \u00e0 un cas ou un outil\u2026', zh:'\u8df3\u8f6c\u5230\u75c5\u4f8b\u6216\u5de5\u5177\u2026', de:'Zu Fall oder Werkzeug springen\u2026' },
  'nav.translate':          { en:'Translate page',ar:'\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u0635\u0641\u062d\u0629', ur:'\u0635\u0641\u062d\u06c1 \u062a\u0631\u062c\u0645\u06c1 \u06a9\u0631\u06cc\u06ba', es:'Traducir p\u00e1gina',fr:'Traduire la page',zh:'\u7ffb\u8bd1\u9875\u9762',de:'Seite \u00fcbersetzen' },
  'nav.lang':               { en:'Language',      ar:'\u0627\u0644\u0644\u063a\u0629',  ur:'\u0632\u0628\u0627\u0646',     es:'Idioma',   fr:'Langue',     zh:'\u8bed\u8a00',  de:'Sprache' },

  // ---- FOOTER ----
  'footer.mission_eyebrow': { en:'Our mission',    ar:'\u0631\u0633\u0627\u0644\u062a\u0646\u0627',     ur:'\u06c1\u0645\u0627\u0631\u0627 \u0645\u0634\u0646',     es:'Nuestra misi\u00f3n',fr:'Notre mission',zh:'\u6211\u4eec\u7684\u4f7f\u547d',de:'Unsere Mission' },
  'footer.vision_eyebrow':  { en:'Our vision',     ar:'\u0631\u0624\u064a\u062a\u0646\u0627',     ur:'\u06c1\u0645\u0627\u0631\u0627 \u0648\u0698\u0646',     es:'Nuestra visi\u00f3n',fr:'Notre vision',zh:'\u6211\u4eec\u7684\u613f\u666f',de:'Unsere Vision' },
  'footer.subs_eyebrow':    { en:'Subscriptions',  ar:'\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a', ur:'\u0633\u0628\u0633\u06a9\u0631\u067e\u0634\u0646\u0632',es:'Suscripciones',fr:'Abonnements',zh:'\u8ba2\u9605',de:'Abonnements' },
  'footer.subs_title':      { en:'Pick a plan that fits where you are', ar:'\u0627\u062e\u062a\u0631 \u062e\u0637\u0629 \u062a\u0646\u0627\u0633\u0628 \u0645\u0631\u062d\u0644\u062a\u0643', ur:'\u0627\u067e\u0646\u06cc \u0633\u0637\u062d \u06a9\u06d2 \u0645\u0637\u0627\u0628\u0642 \u067e\u0644\u06cc\u0646 \u0686\u0646\u06cc\u06ba', es:'Elige el plan que se adapta a ti',fr:'Choisissez le plan qui vous correspond',zh:'\u9009\u62e9\u9002\u5408\u4f60\u7684\u5957\u9910',de:'W\u00e4hlen Sie einen passenden Plan' },
  'footer.product':         { en:'Product',        ar:'\u0627\u0644\u0645\u0646\u062a\u062c',  ur:'\u067e\u0631\u0648\u0688\u06a9\u0679',     es:'Producto', fr:'Produit',    zh:'\u4ea7\u54c1',  de:'Produkt' },
  'footer.resources':       { en:'Resources',      ar:'\u0627\u0644\u0645\u0648\u0627\u0631\u062f',     ur:'\u0648\u0633\u0627\u0626\u0644',     es:'Recursos', fr:'Ressources', zh:'\u8d44\u6e90',  de:'Ressourcen' },
  'footer.connect':         { en:'Connect',        ar:'\u062a\u0648\u0627\u0635\u0644',  ur:'\u0631\u0627\u0628\u0637\u06c1',     es:'Conecta',  fr:'Contact',    zh:'\u8054\u7cfb',  de:'Verbinden' },
  'footer.uk_focused':      { en:'UK-focused',     ar:'\u062a\u0631\u0643\u064a\u0632 \u0628\u0631\u064a\u0637\u0627\u0646\u064a', ur:'\u06cc\u0648 \u06a9\u06d2 \u067e\u0631 \u0645\u0631\u06a9\u0648\u0632',es:'Enfoque RU',fr:'Centr\u00e9 sur le RU',zh:'\u9762\u5411\u82f1\u56fd',de:'UK-Fokus' },
  'footer.evidence':        { en:'Evidence-anchored', ar:'\u0645\u0628\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u0623\u062f\u0644\u0629', ur:'\u062b\u0628\u0648\u062a \u067e\u0631 \u0645\u0628\u0646\u06cc',es:'Basado en evidencia',fr:'Fond\u00e9 sur les preuves',zh:'\u8bc1\u636e\u9a71\u52a8',de:'Evidenzbasiert' },
  'footer.educational':     { en:'Educational use', ar:'\u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a', ur:'\u062a\u0639\u0644\u06cc\u0645\u06cc \u0627\u0633\u062a\u0639\u0645\u0627\u0644',es:'Uso educativo',fr:'Usage \u00e9ducatif',zh:'\u6559\u80b2\u7528\u9014',de:'Bildungszweck' },

  // ---- SUBSCRIPTION TIERS ----
  'subs.tier_free':         { en:'Trainee \u2014 Free',     ar:'\u0645\u062a\u062f\u0631\u0628 \u2014 \u0645\u062c\u0627\u0646\u064a', ur:'\u0679\u0631\u06cc\u0646\u06cc \u2014 \u0645\u0641\u062a',es:'Residente \u2014 Gratis',fr:'Interne \u2014 Gratuit',zh:'\u5b66\u5458 \u2014 \u514d\u8d39',de:'Trainee \u2014 Kostenlos' },
  'subs.tier_pro':          { en:'Reasoning Pro',  ar:'Reasoning Pro',   ur:'Reasoning Pro',es:'Reasoning Pro',fr:'Reasoning Pro',zh:'Reasoning Pro',de:'Reasoning Pro' },
  'subs.tier_team':         { en:'Practice & Schemes', ar:'\u0639\u064a\u0627\u062f\u0627\u062a \u0648\u0628\u0631\u0627\u0645\u062c', ur:'\u067e\u0631\u06cc\u06a9\u0679\u0633 \u0648 \u0633\u06a9\u06cc\u0645\u0632',es:'Pr\u00e1cticas y equipos',fr:'Cabinets et r\u00e9seaux',zh:'\u8bca\u6240\u4e0e\u8ba1\u5212',de:'Praxen & Programme' },
  'subs.popular':           { en:'Most popular',   ar:'\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u064a\u0648\u0639\u0627\u064b', ur:'\u0645\u0642\u0628\u0648\u0644 \u062a\u0631\u06cc\u0646',es:'M\u00e1s popular',fr:'Le plus populaire',zh:'\u6700\u53d7\u6b22\u8fce',de:'Beliebteste' },
  'subs.cta_start':         { en:'Start free',     ar:'\u0627\u0628\u062f\u0623 \u0645\u062c\u0627\u0646\u0627\u064b',  ur:'\u0645\u0641\u062a \u0634\u0631\u0648\u0639 \u06a9\u0631\u06cc\u06ba', es:'Empezar gratis',fr:'Commencer gratuitement',zh:'\u514d\u8d39\u5f00\u59cb',de:'Kostenlos starten' },
  'subs.cta_pro':           { en:'Get Pro',        ar:'\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 Pro', ur:'Pro \u0644\u06cc\u06ba',es:'Obtener Pro',fr:'Obtenir Pro',zh:'\u83b7\u53d6 Pro',de:'Pro holen' },
  'subs.cta_team':          { en:'Talk to us',     ar:'\u062a\u062d\u062f\u062b \u0625\u0644\u064a\u0646\u0627',  ur:'\u06c1\u0645 \u0633\u06d2 \u0631\u0627\u0628\u0637\u06c1',es:'Habla con nosotros',fr:'Contactez-nous',zh:'\u8054\u7cfb\u6211\u4eec',de:'Sprechen Sie mit uns' },

  // ---- AUTH MODAL ----
  'auth.welcome_back':      { en:'Welcome back',   ar:'\u0623\u0647\u0644\u0627\u064b \u0628\u0639\u0648\u062f\u062a\u0643',     ur:'\u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f',     es:'Bienvenido',fr:'Bon retour', zh:'\u6b22\u8fce\u56de\u6765',de:'Willkommen zur\u00fcck' },
  'auth.join':              { en:'Join Reasoning GP', ar:'\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 Reasoning GP', ur:'Reasoning GP \u0645\u06cc\u06ba \u0634\u0627\u0645\u0644 \u06c1\u0648\u06ba',es:'\u00danete a Reasoning GP',fr:'Rejoignez Reasoning GP',zh:'\u52a0\u5165 Reasoning GP',de:'Bei Reasoning GP anmelden' },
  'auth.email':             { en:'Email',          ar:'\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a', ur:'\u0627\u06cc \u0645\u06cc\u0644',es:'Correo electr\u00f3nico',fr:'Courriel',zh:'\u90ae\u7bb1',de:'E-Mail' },
  'auth.password':          { en:'Password',       ar:'\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631', ur:'\u067e\u0627\u0633 \u0648\u0631\u0688',es:'Contrase\u00f1a',fr:'Mot de passe',zh:'\u5bc6\u7801',de:'Passwort' },
  'auth.fullname':          { en:'Full name',      ar:'\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644', ur:'\u067e\u0648\u0631\u0627 \u0646\u0627\u0645',es:'Nombre completo',fr:'Nom complet',zh:'\u5168\u540d',de:'Vollst\u00e4ndiger Name' },
  'auth.submit_signin':     { en:'Sign in',        ar:'\u062f\u062e\u0648\u0644',      ur:'\u0633\u0627\u0626\u0646 \u0627\u0646',     es:'Iniciar sesi\u00f3n',fr:'Se connecter',zh:'\u767b\u5f55',de:'Anmelden' },
  'auth.submit_signup':     { en:'Create my account',  ar:'\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u064a',  ur:'\u0645\u06cc\u0631\u0627 \u0627\u06a9\u0627\u0624\u0646\u0679 \u0628\u0646\u0627\u0626\u06cc\u06ba',es:'Crear mi cuenta',fr:'Cr\u00e9er mon compte',zh:'\u521b\u5efa\u6211\u7684\u5e10\u6237',de:'Konto erstellen' },

  // ---- TRANSLATION DISCLAIMER ----
  'i18n.disclaimer':        { en:'UI translated; clinical case content is in English. Use the "Translate page" button to auto-translate case content (machine translation \u2014 verify clinically).', ar:'\u062a\u0645\u062a \u062a\u0631\u062c\u0645\u0629 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u061b \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0633\u0631\u064a\u0631\u064a\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629. \u0627\u0633\u062a\u062e\u062f\u0645 \u0632\u0631 "\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u0635\u0641\u062d\u0629" \u2014 \u062a\u0631\u062c\u0645\u0629 \u0622\u0644\u064a\u0629 \u062a\u062a\u0637\u0644\u0628 \u0627\u0644\u062a\u062d\u0642\u0642 \u0633\u0631\u064a\u0631\u064a\u0627\u064b.', ur:'\u06cc\u0648\u0632\u0631 \u0627\u0646\u0679\u0631\u0641\u06cc\u0633 \u062a\u0631\u062c\u0645\u06c1 \u06c1\u0648 \u06af\u06cc\u0627 \u06c1\u06d2\u061b \u06a9\u06cc\u0633 \u06a9\u0627 \u0645\u0648\u0627\u062f \u0627\u0646\u06af\u0631\u06cc\u0632\u06cc \u0645\u06cc\u06ba \u06c1\u06d2\u06d4 \u0635\u0641\u062d\u06c1 \u062a\u0631\u062c\u0645\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0628\u0679\u0646 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u06cc\u06ba (\u0645\u0634\u06cc\u0646\u06cc \u062a\u0631\u062c\u0645\u06c1 \u2014 \u0637\u0628\u06cc \u0637\u0648\u0631 \u067e\u0631 \u062a\u0635\u062f\u06cc\u0642 \u06a9\u0631\u06cc\u06ba).', es:'Interfaz traducida; el contenido cl\u00ednico de los casos est\u00e1 en ingl\u00e9s. Usa "Traducir p\u00e1gina" \u2014 traducci\u00f3n autom\u00e1tica; verif\u00edcala cl\u00ednicamente.', fr:'L\'interface est traduite ; le contenu clinique des cas est en anglais. Utilisez "Traduire la page" \u2014 traduction automatique \u00e0 v\u00e9rifier cliniquement.', zh:'\u754c\u9762\u5df2\u7ffb\u8bd1\uff1b\u4e34\u5e8a\u75c5\u4f8b\u5185\u5bb9\u4ecd\u4e3a\u82f1\u6587\u3002\u8bf7\u4f7f\u7528"\u7ffb\u8bd1\u9875\u9762"\u6309\u94ae\uff08\u673a\u5668\u7ffb\u8bd1\uff0c\u9700\u4e34\u5e8a\u9a8c\u8bc1\uff09\u3002', de:'UI \u00fcbersetzt; klinische Fallinhalte sind auf Englisch. Verwenden Sie "Seite \u00fcbersetzen" (maschinelle \u00dcbersetzung \u2014 klinisch pr\u00fcfen).' },
};

// ---- Public API ----

window.RGP_getLang = function(){
  try { return localStorage.getItem('rgp.lang') || 'en'; }
  catch(e){ return 'en'; }
};

window.RGP_setLang = function(code){
  try { localStorage.setItem('rgp.lang', code); } catch(e){}
  window.RGP_applyLang(code);
};

window.RGP_t = function(key){
  const lang = window.RGP_getLang();
  const dict = window.RGP_I18N[key];
  if (!dict) return key;
  return dict[lang] || dict.en || key;
};

window.RGP_applyLang = function(code){
  const langCfg = window.RGP_LANGS.find(l => l.code === code) || window.RGP_LANGS[0];
  document.documentElement.lang = langCfg.code;
  document.documentElement.dir  = langCfg.rtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('rgp-rtl', !!langCfg.rtl);
  document.body.setAttribute('data-lang', langCfg.code);

  // Replace text content of all elements marked with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = window.RGP_t(key);
    if (txt) el.textContent = txt;
  });
  // Replace placeholders of inputs with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = window.RGP_t(el.dataset.i18nPlaceholder);
  });
  // Replace title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = window.RGP_t(el.dataset.i18nTitle);
  });

  // Dispatch event so other components can react
  window.dispatchEvent(new CustomEvent('rgp-lang-change', { detail: { lang: code, rtl: langCfg.rtl } }));
};

// Open Google Translate (free, no API key) — best-effort one-click translate of any page.
window.RGP_openGoogleTranslate = function(){
  const target = window.RGP_getLang();
  if (!target || target === 'en') {
    alert('Set the page language to something other than English first, using the language switcher.');
    return;
  }
  const url = 'https://translate.google.com/translate?sl=en&tl=' + encodeURIComponent(target) + '&u=' + encodeURIComponent(location.href);
  window.open(url, '_blank', 'noopener,noreferrer');
};
