/* ============================================
   Reasoning GP — CLOUD CONFIG + adapters
   Set workerUrl to your deployed Cloudflare Worker
   (see /backend/README.md). Until then everything
   stays exactly as it is today (local auth, no AI on
   your own domain). One value flips the whole site
   to the secure backend — nothing else to change.
   ============================================ */
window.RGP_CONFIG = window.RGP_CONFIG || {
  // e.g. 'https://reasoning-gp-api.YOURNAME.workers.dev'  (no trailing slash)
  workerUrl: 'https://shy-voice-2225.bassamomda.workers.dev',
  // PayPal LIVE client id (for the subscribe buttons + Apple Pay)
  paypalClientId: 'ASkO8Npsc_LwTMSZtzTYOARQLNm25eHaRNpRGivyOk98V4gSgzMjiBN0YIqAQhb9rEmuGV_GV8jTdoGD',
  // Monthly-only for now. Add the *_yearly ids later to switch the yearly toggle back on.
  paypalPlans: {
    silver_monthly:'P-7W0981493D9643523NJFITGA', silver_yearly:'P-5JJ39495BS015630PNJFJA3A',
    gold_monthly:'P-3FU28600XR036331XNJFIV2I',   gold_3monthly:'', gold_yearly:'P-1YB945321J846421DNJFJBIY',
    platinum_monthly:'P-85Y58353NJ528450PNJFIXBQ', platinum_yearly:'P-3EJ24467JK760462GNJFJBWQ'
  },
  // Member-only access. When true, content pages on the LIVE site require a
  // signed-in paid account (or the admin, or a redeemed free-entry code).
  // The gate only arms on the domains listed in paywallHosts — previews and
  // local copies are never locked. Set to false to open the whole site again.
  paywall: true,
  paywallHosts: ['gpreasoning.uk', 'www.gpreasoning.uk', 'reasoninggp.com', 'www.reasoninggp.com']
};

/* ---- AI shim: make window.claude.complete() work on YOUR domain ----
   In this preview the host injects window.claude. On your own hosting it
   won't exist — so if a workerUrl is configured we route AI calls through
   your Worker (which holds the API key server-side). Defined at load time
   so it's ready before any tool page script runs. */
(function(){
  if (window.claude && typeof window.claude.complete === 'function') return; // preview/native: leave as-is
  const cfg = window.RGP_CONFIG || {};
  if (!cfg.workerUrl) return; // not configured yet → tools show their graceful "AI unavailable" fallback
  window.claude = {
    async complete(arg){
      const messages = Array.isArray(arg) ? arg : (arg && arg.messages) ? arg.messages
        : [{ role:'user', content:String(arg||'') }];
      const cacheKey = (arg && !Array.isArray(arg) && arg.cacheKey) ? String(arg.cacheKey) : null;
      let token = null; try { token = localStorage.getItem('rgp.auth.token.v1'); } catch(e){}
      const res = await fetch(cfg.workerUrl.replace(/\/$/,'') + '/api/ai', {
        method:'POST',
        headers: Object.assign({ 'Content-Type':'application/json' }, token ? { 'Authorization':'Bearer ' + token } : {}),
        body: JSON.stringify(Object.assign({ messages }, cacheKey ? { cacheKey } : {}))
      });
      if (res.status === 401 || res.status === 402) { const e = new Error('unavailable'); e.code = res.status; throw e; }
      if (!res.ok) throw new Error('ai_error_' + res.status);
      const data = await res.json();
      // Live web sources cited by the answer (trusted-domain search) — read by Ask.
      window.claude.lastSources = Array.isArray(data.sources) ? data.sources : [];
      window.claude.lastCached = !!data.cached;
      window.claude.lastFallback = !!data.fallback;
      return data.completion || data.text || '';
    },
    // Streaming answer: same as complete() but calls onToken(textChunk) as words
    // arrive, so the UI can render progressively. Returns the full text at the end.
    // Falls back to a normal complete() if the server doesn't stream (cache hit).
    async stream(arg, onToken){
      const messages = Array.isArray(arg) ? arg : (arg && arg.messages) ? arg.messages
        : [{ role:'user', content:String(arg||'') }];
      const cacheKey = (arg && !Array.isArray(arg) && arg.cacheKey) ? String(arg.cacheKey) : null;
      let token = null; try { token = localStorage.getItem('rgp.auth.token.v1'); } catch(e){}
      const res = await fetch(cfg.workerUrl.replace(/\/$/,'') + '/api/ai', {
        method:'POST',
        headers: Object.assign({ 'Content-Type':'application/json' }, token ? { 'Authorization':'Bearer ' + token } : {}),
        body: JSON.stringify(Object.assign({ messages, stream:true }, cacheKey ? { cacheKey } : {}))
      });
      if (res.status === 401 || res.status === 402) { const e = new Error('unavailable'); e.code = res.status; throw e; }
      if (!res.ok) throw new Error('ai_error_' + res.status);
      const ctype = res.headers.get('content-type') || '';
      // Cache hit (or non-stream server) → plain JSON, no streaming.
      if (ctype.indexOf('text/event-stream') === -1) {
        const data = await res.json();
        window.claude.lastSources = Array.isArray(data.sources) ? data.sources : [];
        window.claude.lastCached = !!data.cached;
        window.claude.lastFallback = !!data.fallback;
        const full = data.completion || data.text || '';
        if (full && typeof onToken === 'function') onToken(full, full);
        return full;
      }
      window.claude.lastCached = false;
      window.claude.lastSources = [];
      window.claude.lastFallback = false;
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = '', full = '';
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream:true });
        let nl;
        while ((nl = buf.indexOf('\n\n')) >= 0) {
          const chunk = buf.slice(0, nl); buf = buf.slice(nl + 2);
          const line = chunk.split('\n').find(l => l.startsWith('data:'));
          if (!line) continue;
          let o; try { o = JSON.parse(line.slice(5).trim()); } catch(e){ continue; }
          if (o.t) { full += o.t; if (typeof onToken === 'function') onToken(o.t, full); }
          else if (o.done) { window.claude.lastSources = Array.isArray(o.sources) ? o.sources : []; }
          else if (o.error) { throw new Error(o.error); }
        }
      }
      return full;
    },
    // Embeddings for semantic search (Ask). Returns number[][]. Throws if the
    // Worker has no Workers AI binding (501) → callers fall back to lexical.
    async embed(texts){
      const list = Array.isArray(texts) ? texts : [String(texts||'')];
      let token = null; try { token = localStorage.getItem('rgp.auth.token.v1'); } catch(e){}
      const res = await fetch(cfg.workerUrl.replace(/\/$/,'') + '/api/embed', {
        method:'POST',
        headers: Object.assign({ 'Content-Type':'application/json' }, token ? { 'Authorization':'Bearer ' + token } : {}),
        body: JSON.stringify({ texts: list })
      });
      if (!res.ok) { const e = new Error('embed_' + res.status); e.code = res.status; throw e; }
      const data = await res.json();
      if (!Array.isArray(data.vectors)) throw new Error('embed_bad');
      return data.vectors;
    }
  };
})();

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
  'nav.sca':                { en:'The Hot Seat',  ar:'\u062a\u062f\u0631\u064a\u0628 SCA',  ur:'SCA \u0645\u0634\u0642',     es:'Pr\u00e1ctica SCA',fr:'Entra\u00eenement SCA',zh:'SCA \u7ec3\u4e60', de:'SCA-\u00dcbung' },
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
  'nav.more':               { en:'More',          ar:'\u0627\u0644\u0645\u0632\u064a\u062f', ur:'\u0645\u0632\u06cc\u062f',  es:'M\u00e1s',     fr:'Plus',       zh:'\u66f4\u591a',  de:'Mehr' },
  'nav.ask':                { en:'Ask the assistant' },

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


/* ========================================
   Reasoning GP — shared sidebar + state
   ======================================== */

// Case catalogue — single source of truth.
// status: 'full' | 'stub' | 'planned'
window.RGP_CASES = [
  {
    group: "Cardiovascular & Renal",
    items: [
      { id:"hypertension",     title:"Hypertension",                  setting:"New diagnosis · Adult",  status:"full",  path:"cases/hypertension.html", guideline:"NICE NG136 / CKS 2026" },
      { id:"afib",             title:"Atrial Fibrillation",           setting:"New diagnosis · Adult",  status:"full",  path:"cases/atrial-fibrillation.html", guideline:"NICE NG196 / CKS 2026" },
      { id:"heart-failure",    title:"Heart Failure",                 setting:"New presentation",       status:"full",  path:"cases/heart-failure.html", guideline:"NICE NG106 / CKS 2026" },
      { id:"chest-pain",       title:"Chest Pain",                    setting:"Acute · Symptom framework", status:"full",  path:"cases/chest-pain.html", guideline:"NICE CG95 / NG185" },
      { id:"palpitations",     title:"Palpitations",                  setting:"Symptom workup",         status:"full",  path:"cases/palpitations.html", guideline:"NICE CKS · ESC 2024" },
      { id:"ckd",              title:"Chronic Kidney Disease",        setting:"Primary-care review",    status:"full",  path:"cases/ckd.html", guideline:"NICE NG203 / KDIGO 2024" },
      { id:"tia-stroke",       title:"TIA & Stroke",                  setting:"Acute · Secondary prevention", status:"full", path:"cases/tia-stroke.html", guideline:"NICE NG128 / CKS 2024" },
      { id:"pad",              title:"Peripheral Arterial Disease",   setting:"Diagnosis & management", status:"full",  path:"cases/peripheral-arterial-disease.html", guideline:"NICE NG224 / CKS 2024" },
      { id:"angina",           title:"Stable Angina",                 setting:"Diagnosis & management", status:"full",  path:"cases/angina.html", guideline:"NICE CG126 / NG185" },
      { id:"hypercholesterolaemia", title:"Hypercholesterolaemia",     setting:"Lipid modification · CVD prevention", status:"full", path:"cases/hypercholesterolaemia.html", guideline:"NICE NG238 / QRISK3" },
      { id:"mi-secondary-prevention", title:"MI — Secondary Prevention", setting:"Post-MI · cardiac rehab · meds", status:"full", path:"cases/mi-secondary-prevention.html", guideline:"NICE NG185 / CG172" },
      { id:"aki",              title:"Acute Kidney Injury",           setting:"Recognition · STOP drugs · staging", status:"full", path:"cases/aki.html", guideline:"NICE NG148 / KDIGO" },
      { id:"dvt",              title:"DVT",                           setting:"Wells · D-dimer · DOAC", status:"full", path:"cases/dvt.html", guideline:"NICE NG158" },
    ]
  },
  {
    group: "Respiratory",
    items: [
      { id:"asthma-review",    title:"Asthma",                        setting:"Poor control",           status:"full",  path:"cases/asthma.html", guideline:"NICE NG245 / BTS-SIGN 2024" },
      { id:"chest-infections", title:"Chest Infections",              setting:"Bronchitis vs CAP · CRB-65 · sepsis", status:"full", path:"cases/chest-infections.html", guideline:"NICE NG138 / CG191" },
      { id:"copd",             title:"COPD",                          setting:"Chronic management",     status:"full",  path:"cases/copd.html", guideline:"NICE NG115 / GOLD 2024" },
      { id:"breathlessness",   title:"Breathlessness",                setting:"Symptom workup",         status:"full",  path:"cases/breathlessness.html", guideline:"NICE NG106 / NG115" },
      { id:"osa",             title:"Obstructive Sleep Apnoea",      setting:"OSAHS · CPAP · DVLA",    status:"full",  path:"cases/osa.html", guideline:"NICE NG202" },
    ]
  },
  {
    group: "Endocrine & Metabolic",
    items: [
      { id:"t2dm-new",         title:"Type 2 Diabetes",               setting:"New diagnosis",          status:"full",  path:"cases/type-2-diabetes.html", guideline:"NICE NG28 / CKS 2026" },
      { id:"t1dm",             title:"Type 1 Diabetes",               setting:"New diagnosis / insulin",status:"full",  path:"cases/type-1-diabetes.html", guideline:"NICE NG17 / CKS 2024" },
      { id:"hypothyroidism",   title:"Hypothyroidism",                setting:"Diagnosis & review",     status:"full",  path:"cases/hypothyroidism.html", guideline:"NICE NG145" },
      { id:"hyperthyroidism",  title:"Hyperthyroidism",               setting:"Diagnosis & review",     status:"full",  path:"cases/hyperthyroidism.html", guideline:"NICE NG145" },
      { id:"osteoporosis",     title:"Osteoporosis",                  setting:"FRAX & treatment",       status:"full",  path:"cases/osteoporosis.html", guideline:"NICE NG222 / NOGG 2021" },
      { id:"fatigue",          title:"Fatigue & Tiredness",          setting:"Symptom framework",     status:"full",  path:"cases/fatigue.html", guideline:"NICE CKS / NG12 / NG206" },
      { id:"obesity",          title:"Obesity",                      setting:"Tiered pathway · GLP-1 · bariatric", status:"full", path:"cases/obesity.html", guideline:"NICE CG189 / NG246" },
      { id:"addisons-disease", title:"Addison's Disease",             setting:"Adrenal insufficiency · crisis", status:"full", path:"cases/addisons-disease.html", guideline:"NICE NG243 / CKS" },
    ]
  },
  {
    group: "Gastroenterology",
    items: [
      { id:"abdo-pain",        title:"Abdominal Pain",                setting:"Symptom framework",      status:"full",  path:"cases/abdominal-pain.html", guideline:"NICE CKS · NG12" },
      { id:"dyspepsia",        title:"Dyspepsia",                     setting:"GORD / PUD / H. pylori", status:"full",  path:"cases/dyspepsia.html", guideline:"NICE CG184" },
      { id:"ibs",              title:"Irritable Bowel Syndrome",      setting:"New diagnosis / review", status:"full",  path:"cases/ibs.html", guideline:"NICE CG61 / BSG 2021" },
      { id:"coeliac",          title:"Coeliac Disease",               setting:"New diagnosis",          status:"full",  path:"cases/coeliac.html", guideline:"NICE NG20 / BSG 2014" },
      { id:"crohns",           title:"Crohn's Disease",               setting:"GP role in IBD",         status:"full",  path:"cases/crohns.html", guideline:"NICE NG129" },
      { id:"uc",               title:"Ulcerative Colitis",            setting:"GP role in IBD",         status:"full",  path:"cases/ulcerative-colitis.html", guideline:"NICE NG130" },
      { id:"diverticulosis",   title:"Diverticulosis & -itis",        setting:"Acute & chronic",        status:"full",  path:"cases/diverticulosis.html", guideline:"NICE NG147" },
      { id:"constipation",     title:"Constipation",                  setting:"Chronic constipation",   status:"full",  path:"cases/constipation.html", guideline:"NICE CKS" },
      { id:"diarrhoea",        title:"Diarrhoea",                     setting:"Acute infective · chronic · FIT", status:"full", path:"cases/diarrhoea.html", guideline:"NICE CKS / NG12" },
    ]
  },
  {
    group: "Mental Health",
    items: [
      { id:"depression",       title:"Depression",                    setting:"New presentation",       status:"full",  path:"cases/depression.html", guideline:"NICE NG222 / CKS 2026" },
      { id:"anxiety",          title:"Generalised Anxiety",           setting:"Initial assessment · SCA",     status:"full",  path:"cases/anxiety.html", guideline:"NICE NG222 / CKS" },
      { id:"dementia",         title:"Dementia",                      setting:"Cognitive assessment · SCA", status:"full",  path:"cases/dementia.html", guideline:"NICE NG97 / CKS 2024" },
      { id:"insomnia",         title:"Insomnia",                      setting:"CBT-I first-line",       status:"full",  path:"cases/insomnia.html", guideline:"NICE CKS / CBT-I" },
      { id:"ocd",              title:"OCD",                           setting:"CBT/ERP · SSRI",         status:"full",  path:"cases/ocd.html", guideline:"NICE CG31" },
      { id:"ptsd",             title:"PTSD",                          setting:"TF-CBT / EMDR",          status:"full",  path:"cases/ptsd.html", guideline:"NICE NG116" },
      { id:"alcohol",          title:"Alcohol & Problem Drinking",    setting:"AUDIT · brief intervention · detox", status:"full", path:"cases/alcohol.html", guideline:"NICE CG115 / NG12" },
      { id:"eating-disorders", title:"Eating Disorders",              setting:"MEED risk · SCOFF · refeeding", status:"full", path:"cases/eating-disorders.html", guideline:"NICE NG69" },
      { id:"perinatal-mental-health", title:"Perinatal Mental Health",  setting:"Antenatal/postnatal · psychosis", status:"full", path:"cases/perinatal-mental-health.html", guideline:"NICE CG192" },
      { id:"psychosis-schizophrenia", title:"Psychosis & Schizophrenia", setting:"First episode · EIP · risk", status:"full", path:"cases/psychosis-schizophrenia.html", guideline:"NICE CG178" },
      { id:"drug-dependence",  title:"Drug Dependence",               setting:"Prescribed & illicit · harm reduction", status:"full", path:"cases/drug-dependence.html", guideline:"NICE NG215 / CG52" },
      { id:"gender-dysphoria", title:"Gender Dysphoria",              setting:"Affirming · GIC referral", status:"full", path:"cases/gender-dysphoria.html", guideline:"GMC / GIC pathway" },
    ]
  },
  {
    group: "Women's Health",
    items: [
      { id:"menopause",        title:"Menopause & HRT",               setting:"Symptom-led review",     status:"full",  path:"cases/menopause.html", guideline:"NICE NG23" },
      { id:"cervical-screening", title:"Cervical Screening",          setting:"HPV primary · symptoms ≠ screening", status:"full", path:"cases/cervical-screening.html", guideline:"NHSCSP / NG12" },
      { id:"contraception",    title:"Contraception consultation",    setting:"Choice & counselling",   status:"full",  path:"cases/contraception.html", guideline:"FSRH 2024 / UKMEC" },
      { id:"pcos",             title:"PCOS",                          setting:"Diagnosis & long-term",  status:"full",  path:"cases/pcos.html", guideline:"Rotterdam / NICE CKS" },
      { id:"infertility",      title:"Infertility",                   setting:"Couple assessment",      status:"full",  path:"cases/infertility.html", guideline:"NICE CG156" },
      { id:"premenstrual-disorder", title:"Premenstrual Disorder (PMDD)", setting:"PMS · PMDD · symptom diary", status:"full", path:"cases/premenstrual-disorder.html", guideline:"RCOG / NICE CKS" },
      { id:"amenorrhoea",      title:"Amenorrhoea",                   setting:"Primary/secondary · the axis", status:"full", path:"cases/amenorrhoea.html", guideline:"NICE CKS / RCOG" },
    ]
  },
  {
    group: "Urology & Continence",
    items: [
      { id:"male-luts",        title:"Male LUTS",                     setting:"BPH / storage / voiding",status:"full",  path:"cases/male-luts.html", guideline:"NICE CG97" },
      { id:"urinary-incontinence", title:"Urinary Incontinence (F)",  setting:"Stress / urge / mixed",  status:"full",  path:"cases/urinary-incontinence.html", guideline:"NICE NG123" },
      { id:"enuresis",         title:"Nocturnal Enuresis",            setting:"Paediatric",             status:"full",  path:"cases/enuresis.html", guideline:"NICE NG111" },
      { id:"uti-women",        title:"UTI in Women",                  setting:"Uncomplicated · recurrent · prophylaxis", status:"full", path:"cases/uti-women.html", guideline:"NICE NG109 / NG12" },
    ]
  },
  {
    group: "Neurology, ENT & Balance",
    items: [
      { id:"hearing-loss",     title:"Hearing Loss",                  setting:"Workup & referral",      status:"full",  path:"cases/hearing-loss.html", guideline:"NICE NG98" },
      { id:"tinnitus",         title:"Tinnitus",                      setting:"Subjective tinnitus",    status:"full",  path:"cases/tinnitus.html", guideline:"NICE NG155" },
      { id:"vertigo",          title:"Vertigo",                       setting:"BPPV / vestibular",      status:"full",  path:"cases/vertigo.html", guideline:"NICE CKS · Bárány 2022" },
      { id:"blackouts",        title:"Blackouts & Syncope",           setting:"Syncope workup",         status:"full",  path:"cases/blackouts.html", guideline:"NICE CG109 / ESC 2018" },
      { id:"migraine",         title:"Migraine",                      setting:"Diagnosis & management", status:"full",  path:"cases/migraine.html", guideline:"NICE CG150 / CKS 2026" },
      { id:"headache",         title:"Headache",                      setting:"SNOOP4 · primary vs secondary", status:"full", path:"cases/headache.html", guideline:"NICE CKS / NG12 / ICHD-3" },
      { id:"tremor",           title:"Tremor",                        setting:"Essential / Parkinsonian / drug-induced", status:"full", path:"cases/tremor.html", guideline:"NICE CKS · NG71" },
      { id:"epilepsy",         title:"Epilepsy",                      setting:"GP role · DVLA · SUDEP", status:"full",  path:"cases/epilepsy.html", guideline:"NICE NG217" },
      { id:"parkinsons",       title:"Parkinson's Disease",           setting:"Diagnosis & GP role",   status:"full",  path:"cases/parkinsons.html", guideline:"NICE NG71" },
    ]
  },
  {
    group: "Lab result workups",
    items: [
      { id:"anaemia",          title:"Anaemia",                       setting:"Micro / macro / normo",  status:"full",  path:"cases/anaemia.html", guideline:"NICE CKS / BSH 2021" },
      { id:"abnormal-lfts",    title:"Abnormal LFTs",                 setting:"Incidental derangement", status:"full",  path:"cases/abnormal-lfts.html", guideline:"BSG 2017 / NICE CKS" },
      { id:"hyponatraemia",    title:"Hyponatraemia",                 setting:"Na 125–134",             status:"full",  path:"cases/hyponatraemia.html", guideline:"NICE CKS · ES 2014" },
      { id:"hypercalcaemia",   title:"Hypercalcaemia",                setting:"Ca >2.6 mmol/L",         status:"full",  path:"cases/hypercalcaemia.html", guideline:"NICE CKS · ES 2016" },
    ]
  },
  {
    group: "Acute & MSK",
    items: [
      { id:"osteoarthritis",   title:"Osteoarthritis",                setting:"Chronic joint pain",     status:"full",  path:"cases/osteoarthritis.html", guideline:"NICE NG226" },
      { id:"low-back-pain",    title:"Acute Low Back Pain",           setting:"± red flags",            status:"full",  path:"cases/low-back-pain.html", guideline:"NICE NG59 / StarT Back" },
      { id:"back-pain",        title:"Back Pain",                     setting:"Non-specific · sciatica · ± red flags", status:"full", path:"cases/back-pain.html", guideline:"NICE NG59" },
      { id:"neck-pain",        title:"Neck Pain",                     setting:"Mechanical · radiculopathy · myelopathy", status:"full", path:"cases/neck-pain.html", guideline:"NICE CKS / NG12" },
      { id:"hip-pain",         title:"Hip Pain",                      setting:"OA · GTPS · referred · ± red flags", status:"full", path:"cases/hip-pain.html", guideline:"NICE CKS / NG226" },
      { id:"shoulder-pain",    title:"Shoulder Pain",                 setting:"Rotator cuff · frozen shoulder · ± red flags", status:"full", path:"cases/shoulder-pain.html", guideline:"NICE CKS / NG12" },
      { id:"sciatica",         title:"Sciatica",                      setting:"Radiculopathy · ± red flags", status:"full", path:"cases/sciatica.html", guideline:"NICE NG59 / CKS 2023" },
      { id:"axial-spa",        title:"Axial Spondyloarthritis",       setting:"Inflammatory back pain", status:"full",  path:"cases/axial-spa.html", guideline:"NICE NG65 / CKS 2024" },
      { id:"gout",            title:"Gout",                          setting:"Acute & chronic · SCA",  status:"full",  path:"cases/gout.html", guideline:"NICE CKS / BSR 2017" },
      { id:"chronic-pain",     title:"Chronic Primary Pain",          setting:"Biopsychosocial · NG193", status:"full",  path:"cases/chronic-pain.html", guideline:"NICE NG193" },
      { id:"neuropathic-pain", title:"Neuropathic Pain",              setting:"Diagnosis & first-line meds", status:"full", path:"cases/neuropathic-pain.html", guideline:"NICE NG173" },
    ]
  },
  {
    group: "Ophthalmology",
    items: [
      { id:"red-eye",          title:"Red Eye",                       setting:"Acute presentation · SCA", status:"full",  path:"cases/red-eye.html", guideline:"NICE CKS" },
      { id:"dry-eye",          title:"Dry Eye Disease",               setting:"Diagnosis & lubricants", status:"full", path:"cases/dry-eye.html", guideline:"NICE CKS / TFOS DEWS II" },
      { id:"glaucoma",         title:"Glaucoma",                      setting:"POAG/OHT · acute closure", status:"full", path:"cases/glaucoma.html", guideline:"NICE NG81" },
    ]
  },
  {
    group: "Infectious diseases",
    items: [
      { id:"hiv",              title:"HIV — primary-care role",       setting:"Testing & primary care", status:"full",  path:"cases/hiv.html", guideline:"BHIVA 2020 / NICE CKS" },
    ]
  },
  {
    group: "Neurodevelopmental",
    items: [
      { id:"autism",           title:"Autism in Children",            setting:"Recognition & referral", status:"full",  path:"cases/autism.html", guideline:"NICE NG213 / DSM-5" },
      { id:"adhd",             title:"ADHD",                          setting:"Recognition & shared care", status:"full", path:"cases/adhd.html", guideline:"NICE NG87" },
    ]
  },
  {
    group: "Dermatology & Allergy",
    items: [
      { id:"urticaria",        title:"Urticaria & Angioedema",        setting:"Acute / chronic · angioedema", status:"full", path:"cases/urticaria.html", guideline:"NICE CKS / BSACI" },
      { id:"allergic-rhinitis", title:"Allergic Rhinitis",           setting:"INCS · united airways",  status:"full",  path:"cases/allergic-rhinitis.html", guideline:"NICE CKS / BSACI" },
      { id:"eczema",           title:"Atopic Eczema",                 setting:"Emollients · steroid ladder · FTU", status:"full", path:"cases/eczema.html", guideline:"NICE NG190 / CKS" },
      { id:"acne",             title:"Acne Vulgaris",                 setting:"Severity-led · isotretinoin referral", status:"full", path:"cases/acne.html", guideline:"NICE NG198" },
      { id:"fungal-infections", title:"Fungal Infections",            setting:"Tinea · candida · confirm before orals", status:"full", path:"cases/fungal-infections.html", guideline:"NICE CKS" },
      { id:"pruritus",         title:"Itch (Pruritus)",               setting:"Rash vs no rash · systemic", status:"full", path:"cases/pruritus.html", guideline:"NICE CKS / NG12" },
    ]
  },
  {
    group: "Oncology & 2WW",
    items: [
      { id:"breast-cancer",    title:"Breast Cancer",                 setting:"2WW · triple assessment", status:"full", path:"cases/breast-cancer.html", guideline:"NICE NG101 / NG12" },
      { id:"breast-disorders", title:"Breast Disorders",              setting:"Lump · pain · discharge · 2WW", status:"full", path:"cases/breast-disorders.html", guideline:"NICE NG101 / NG12" },
      { id:"haematological-cancers", title:"Haematological Cancers",   setting:"Leukaemia · lymphoma · myeloma · 2WW", status:"full", path:"cases/haematological-cancers.html", guideline:"NICE NG12 / NG35" },
    ]
  },
  {
    group: "Paediatrics",
    items: [
      { id:"cmpa-reflux",      title:"CMPA & Infant Reflux",          setting:"Infant · CMPA vs reflux", status:"full", path:"cases/cmpa-reflux.html", guideline:"NICE NG1 / CKS / iMAP" },
      { id:"childhood-limp",   title:"Childhood Limp",                setting:"Age-based · SUFE · septic · NG12", status:"full", path:"cases/childhood-limp.html", guideline:"NICE CKS / NG12" },
      { id:"childhood-msk",    title:"Childhood MSK Presentations",   setting:"pGALS · JIA · growing pains · NG12", status:"full", path:"cases/childhood-msk.html", guideline:"pGALS / NICE NG12" },
      { id:"constipation-children", title:"Constipation in Children", setting:"Disimpaction · maintenance", status:"full", path:"cases/constipation-children.html", guideline:"NICE NG99 / CKS" },
      { id:"wheeze-children",  title:"Wheeze in Children",            setting:"Viral wheeze vs asthma", status:"full", path:"cases/wheeze-children.html", guideline:"BTS-SIGN / NICE NG115" },
    ]
  },
  {
    group: "Sexual Health",
    items: [
      { id:"vaginal-discharge", title:"Vaginal Discharge & STI Screen", setting:"BV · candida · STI · PID", status:"full", path:"cases/vaginal-discharge.html", guideline:"BASHH / NICE CKS" },
      { id:"erectile-dysfunction", title:"Erectile Dysfunction",      setting:"CV sentinel · PDE5 inhibitor", status:"full", path:"cases/erectile-dysfunction.html", guideline:"NICE CKS / BSSM" },
    ]
  },
  {
    group: "Palliative & End-of-Life Care",
    items: [
      { id:"palliative-care",  title:"Palliative & End-of-Life Care", setting:"Symptom control · anticipatory meds", status:"full", path:"cases/palliative-care.html", guideline:"NICE NG142 / NG31" },
    ]
  },
  {
    group: "General Practice",
    items: [
      { id:"multimorbidity-polypharmacy", title:"Multimorbidity & Polypharmacy", setting:"Structured medication review · deprescribing", status:"full", path:"cases/multimorbidity-polypharmacy.html", guideline:"NICE NG56" },
      { id:"analgesia-primary-care", title:"Analgesia in Primary Care", setting:"Pain type-led · opioid stewardship", status:"full", path:"cases/analgesia-primary-care.html", guideline:"NICE NG193" },
      { id:"safeguarding",     title:"Safeguarding",                  setting:"Children & adults · recognise/respond/refer", status:"full", path:"cases/safeguarding.html", guideline:"Working Together / Care Act" },
    ]
  },
];

// Sort each group's cases alphabetically by title (single source of truth →
// propagates to sidebar, cases.html, mega menu and search).
window.RGP_CASES.forEach(g => g.items.sort((a,b) =>
  (a.title||'').localeCompare(b.title||'', 'en', {sensitivity:'base'})
));

// progress in localStorage
const RGP_KEY = "rgp.progress.v1";
function getProgress(){
  try { return JSON.parse(localStorage.getItem(RGP_KEY) || "{}"); }
  catch(e){ return {}; }
}
function setProgress(id, status){
  const p = getProgress(); p[id] = status;
  localStorage.setItem(RGP_KEY, JSON.stringify(p));
}
window.RGP_getProgress = getProgress;
window.RGP_setProgress = setProgress;

// sidebar collapse state
const RGP_SB_KEY = "rgp.sidebar.v1";
function getSidebarCollapsed(){ return localStorage.getItem(RGP_SB_KEY) === "1"; }
function setSidebarCollapsed(v){
  localStorage.setItem(RGP_SB_KEY, v ? "1" : "0");
  document.querySelector(".app")?.classList.toggle("sb-collapsed", !!v);
}
window.RGP_toggleSidebar = () => setSidebarCollapsed(!getSidebarCollapsed());

// Mode (sca / clinic) in localStorage
const RGP_MODE_KEY = "rgp.mode.v1";
function getMode(){ return localStorage.getItem(RGP_MODE_KEY) || "clinic"; }
function setMode(m){
  localStorage.setItem(RGP_MODE_KEY, m);
  document.body.classList.remove("mode-sca","mode-clinic","mode-both");
  document.body.classList.add("mode-"+m);
  applyNavOrder(m);
  // also dispatch event so individual case pages can react
  window.dispatchEvent(new CustomEvent("rgp-mode-change",{detail:{mode:m}}));
}
// Reorder the primary nav by physically moving DOM nodes (deterministic — this
// environment doesn't reliably re-flow flex `order` on a JS class toggle).
// SCA leads with The Hot Seat; clinic keeps its canonical order.
function applyNavOrder(mode){
  const nav = document.querySelector('.rgp-primary');
  if(!nav) return;
  const seq = (mode === 'sca')
    ? ['[data-navkey="hotseat"]','[data-menu="scatools"]','[data-navkey="ask"]','[data-menu="core"]','[data-menu="reference"]','[data-navkey="cpd"]']
    : ['[data-navkey="ask"]','[data-menu="core"]','[data-menu="reference"]','[data-navkey="cpd"]','.rgp-sca-only','[data-menu="more"]'];
  seq.forEach(sel=>{
    const el = nav.querySelector(sel);
    if(el){ el.style.order=''; nav.appendChild(el); }
  });
}
window.RGP_applyNavOrder = applyNavOrder;
window.RGP_getMode = getMode;
window.RGP_setMode = setMode;

// Render sidebar into a host
function renderSidebar(host, opts={}){
  const activeId = opts.activeId || null;
  const mode = getMode();
  const progress = getProgress();
  const totalFull = window.RGP_CASES.reduce((n,g)=>n + g.items.filter(i=>i.status==="full"||i.status==="stub").length, 0);
  const totalAll  = window.RGP_CASES.reduce((n,g)=>n + g.items.length, 0);

  // Path prefix: site links are authored relative to project root.
  // From cases/foo.html or tools/foo.html we need '../' to resolve correctly.
  const p = location.pathname;
  const PRE = /\/(cases|tools)\//.test(p) ? '../' : '';

  let html = `
    <div class="sb-head">
      <a class="sb-brand" href="${PRE}index.html" aria-label="Reasoning GP home">
        <div class="brand-mark">R</div>
        <div>
          <div class="brand-name">Reasoning GP</div>
          <span class="brand-tag">SCA · Clinical reasoning · UK</span>
        </div>
      </a>
      <button class="sb-collapse-btn" type="button" aria-label="Hide sidebar" title="Hide sidebar">
        <svg viewBox="0 0 24 24"><polyline points="15 6 9 12 15 18"/></svg>
      </button>
    </div>

    <div class="sb-search">
      <svg class="sb-search-ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input id="sbSearch" type="search" placeholder="Search cases…" autocomplete="off" />
    </div>

    <div class="sb-mode" role="tablist" aria-label="Display mode">
      <button data-mode="clinic" class="${mode==='clinic'?'active':''}">🏥 Clinic</button>
      <button data-mode="both"   class="${mode==='both'?'active':''}">⊕ Both</button>
      <button data-mode="sca"    class="${mode==='sca'?'active':''}">🎓 SCA</button>
    </div>

    <div class="sb-scroll" id="sbScroll">
      <a class="sb-item ${activeId==='__home'?'active':''}" href="${PRE}index.html">
        <span class="sb-i-dot" style="background:var(--teal)"></span>
        <span class="sb-i-text"><b>Home</b><div class="sb-i-meta">Overview & framework</div></span>
      </a>

      <a class="sb-item ${activeId==='__algorithms'?'active':''}" href="${PRE}tools/algorithms.html" data-search="algorithms pathways flowchart decision tree quick visual print printable diagnosis triage">
        <span class="sb-i-dot" style="background:var(--rust)"></span>
        <span class="sb-i-text"><b>Diagnostic Algorithms</b><div class="sb-i-meta">235 visual pathways · diagnose &amp; triage</div></span>
      </a>

      <a class="sb-item ${activeId==='__tools-management'?'active':''}" href="${PRE}tools/management.html" data-search="management algorithms stepwise treatment drug ladder already diagnosed confirmed monitoring follow-up safety netting referral hypertension">
        <span class="sb-i-dot" style="background:var(--rust)"></span>
        <span class="sb-i-text"><b>Protocols</b><div class="sb-i-meta">Stepwise treatment for confirmed conditions</div></span>
      </a>

      <div class="sb-section">
        <div class="sb-section-t">Tools<span class="sb-count">7</span></div>
        <a class="sb-item ${activeId==='__tools-decision'?'active':''}" href="${PRE}tools/decision-support.html" data-search="decision support diagnostic tool workup triage differential symptom presentation 2ww ng12 medication chooser drug nice cks bnf which drug lab results actioning blood tests fbc lft tft hba1c interpretation diagnose investigate treat">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>Decision Support</b>
            <div class="sb-i-meta">Diagnose → labs → medication, one flow</div>
          </span>
        </a>
        <a class="sb-item ${activeId==='__tools-prescribing'?'active':''}" href="${PRE}tools/prescribing.html" data-search="prescribing ready prescriptions rx h pylori migraine gout shingles emergency contraception eligibility exemption fp92a medex matex ppc fp10 controlled drugs how to write otc not to prescribe rag traffic light gmmmg formulary sick day rules steroid emergency metformin sglt2 pause">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>Prescribing</b>
            <div class="sb-i-meta">Ready Rx · eligibility/FP10/RAG · sick-day</div>
          </span>
        </a>
        <a class="sb-item ${activeId==='__tools-admin'?'active':''}" href="${PRE}tools/gp-admin.html" data-search="gp admin fit note med3 fitness for work may be fit dvla fitness to drive group 1 2 notify forms certificates sr1 ds1500 matb1 maternity mccd death cremation fp92a who signs nhs private chargeable fees sick note">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>GP Admin</b>
            <div class="sb-i-meta">Fit Note · DVLA · forms &amp; certificates</div>
          </span>
        </a>
        <a class="sb-item ${activeId==='__tools-calc'?'active':''}" href="${PRE}tools/calculators.html" data-search="calculators chads vasc has-bled orbit wells crb-65 news2 feverpain centor gad-7 phq-9 audit epworth stop-bang egfr cockcroft bmi abcd2 ipss must das28 6cit qrisk frax qfracture">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>Medical Calculators</b>
            <div class="sb-i-meta">55 scores · CV · VTE · MH · renal &amp; more</div>
          </span>
        </a>
        <a class="sb-item ${activeId==='__tools-exam'?'active':''}" href="${PRE}tools/examinations.html" data-search="examinations clinical examination technique indications interpretation red flags">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>Examinations</b>
            <div class="sb-i-meta">Indications · technique · interpretation</div>
          </span>
        </a>
        <a class="sb-item ${activeId==='__tools-leaflets'?'active':''}" href="${PRE}tools/leaflets.html" data-search="patient leaflets information charity nhs versus arthritis bhf bad mind macmillan rcog">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>Patient Leaflets</b>
            <div class="sb-i-meta">UK lead charities · copy-link for AccuRx</div>
          </span>
        </a>
        <a class="sb-item ${activeId==='__tools-sca'?'active':''}" href="${PRE}tools/sca-practice.html" data-search="sca practice rcgp scorecard timer recording ai feedback exam mock cases">
          <span class="sb-i-dot" style="background:var(--rust)"></span>
          <span class="sb-i-text">
            <b>The Hot Seat</b>
            <div class="sb-i-meta">SCA practice · 12-min timer · RCGP scorecard</div>
          </span>
        </a>
      </div>
  `;

  for (const grp of window.RGP_CASES){
    const count = grp.items.length;
    html += `<div class="sb-section">
      <div class="sb-section-t">${grp.group}<span class="sb-count">${count}</span></div>`;
    for (const it of grp.items){
      const isActive = activeId === it.id;
      const prog = progress[it.id]; // 'studied' | 'mastered'
      const cls = ["sb-item"];
      if (isActive) cls.push("active");
      if (prog==="mastered") cls.push("is-done");
      else if (prog==="studied") cls.push("is-progress");

      const stub = it.status === "stub"   ? `<span class="sb-i-stub">Outline</span>` :
                   it.status === "planned"? `<span class="sb-i-stub">Soon</span>`    : "";

      const clickable = (it.status==="full" || it.status==="stub");
      const tag = clickable ? `a href="${PRE}${it.path}"` : `div data-soon="1"`;
      const close = clickable ? "a" : "div";

      html += `<${tag} class="${cls.join(' ')}" data-search="${(it.title+' '+it.setting).toLowerCase()}" data-id="${it.id}">
        <span class="sb-i-dot"></span>
        <span class="sb-i-text">
          <b>${it.title}</b>
          <div class="sb-i-meta">${it.setting}${stub?` · ${stub}`:""}</div>
        </span>
        <svg class="sb-i-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </${close}>`;
      // Sub-list placeholder for the active topic — populated by case-nav.js
      if (isActive) {
        html += `<div class="sb-sub is-open" data-sub-for="${it.id}"><span class="sb-sub-empty" style="font-size:11.5px;color:var(--muted);padding:6px 9px;display:block">Loading sections…</span></div>`;
      }
    }
    html += `</div>`;
  }

  const doneCount = Object.values(progress).filter(v=>v==="mastered").length;
  html += `
      <div style="height:12px"></div>
    </div>

    <div class="sb-foot">
      <span>${doneCount}/${totalAll} mastered</span>
      <span>v1 · 2026</span>
    </div>
  `;

  host.innerHTML = html;

  // search wiring
  const search = host.querySelector("#sbSearch");
  search?.addEventListener("input", e=>{
    const q = e.target.value.trim().toLowerCase();
    host.querySelectorAll(".sb-item[data-search]").forEach(el=>{
      const match = !q || el.dataset.search.includes(q);
      el.style.display = match ? "" : "none";
    });
    // hide empty sections
    host.querySelectorAll(".sb-section").forEach(sec=>{
      const visible = [...sec.querySelectorAll(".sb-item")].some(i=>i.style.display!=="none");
      sec.style.display = visible ? "" : "none";
    });
  });

  // mode wiring
  host.querySelectorAll(".sb-mode button").forEach(b=>{
    b.addEventListener("click", ()=>{
      const m = b.dataset.mode;
      setMode(m);
      host.querySelectorAll(".sb-mode button").forEach(x=>x.classList.toggle("active", x.dataset.mode===m));
    });
  });

  // collapse button wiring
  host.querySelector(".sb-collapse-btn")?.addEventListener("click", e=>{
    e.stopPropagation();
    setSidebarCollapsed(true);
  });

  // soft toast for soon-items
  host.querySelectorAll('[data-soon="1"]').forEach(el=>{
    el.style.opacity=.55; el.style.cursor="not-allowed";
    el.addEventListener("click", ()=>{
      el.animate(
        [{transform:"translateX(0)"},{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],
        {duration:300}
      );
    });
  });
}

// mobile toggle
function wireMobileToggle(){
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sb-overlay");
  const toggle  = document.querySelector(".sb-toggle");
  if (!sidebar || !toggle) return;
  toggle.addEventListener("click", ()=>{
    sidebar.classList.add("is-open");
    overlay?.classList.add("is-open");
  });
  overlay?.addEventListener("click", ()=>{
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
  });
}

window.RGP_renderSidebar = renderSidebar;
window.RGP_wireMobileToggle = wireMobileToggle;


/* ============================================================
   TOP NAV + COMMAND PALETTE
   Replaces the sidebar layout. Renders into <header.rgp-nav>
   injected at top of body. The legacy .sidebar element is hidden
   via body.rgp-topnav CSS — but its data-active-id is reused.
   ============================================================ */

const RGP_TOOLS = [
  {id:'__tools-guide',     label:'How to use this site',   meta:'Start here · framework · the four layers · tools', path:'tools/clinic-guide.html', icon:'🧭'},
  {id:'__tools-decision',  label:'Decision Support',       meta:'Diagnose → labs → medication, one flow',  path:'tools/decision-support.html',   icon:'🩺'},
  {id:'__tools-prescribing',label:'Prescribing',           meta:'Ready Rx · eligibility/FP10/RAG · sick-day rules', path:'tools/prescribing.html', icon:'💊'},
  {id:'__tools-admin',     label:'GP Admin',               meta:'Fit Note · DVLA · forms & certificates',  path:'tools/gp-admin.html',           icon:'📋'},
  {id:'__tools-spine',     label:'Consultation Spine',     meta:'Complaint → coded, safety-netted record',  path:'tools/consultation-spine.html', icon:'🧬'},
  {id:'__tools-scribe',    label:'Consult Scribe',         meta:'Record → EMIS / SystmOne / SOAP note · AI', path:'tools/scribe.html',           icon:'🎙️'},
  {id:'__tools-calc',      label:'Medical Calculators',    meta:'55 scores · CV · VTE · MH · renal & more', path:'tools/calculators.html',        icon:'🧮'},
  {id:'__tools-exam',      label:'Examinations',           meta:'Indications · technique · interpretation · red flags', path:'tools/examinations.html',  icon:'🩻'},
];

// Top-level sections (promoted out of Tools, plus new modules).
const RGP_NAV_SECTIONS = [
  {id:'__sca',      label:'The Hot Seat',      icon:'🎓', path:'tools/sca-practice.html', meta:'12-min timer · RCGP scorecard · AI'},
  {id:'__ask',      label:'Ask the assistant', icon:'💬', path:'pages/ask.html',          meta:'Ask any question · answered from the library'},
  {id:'__leaflets', label:'Patient Leaflets',  icon:'📄', path:'tools/leaflets.html',     meta:'UK lead charities · AccuRx copy-link'},
  {id:'__cpd',      label:'CPD',               icon:'🏅', path:'pages/cpd.html',          meta:'Reading credits · question banks · courses'},
  {id:'__audios',   label:'Audios',            icon:'🎧', path:'pages/audios.html',       meta:'AI + human recordings · NHS topic updates'},
  {id:'__updates',  label:'Updates',           icon:'📰', path:'pages/updates.html',      meta:'Weekly NICE CKS · UKHSA · guideline changes'},
  {id:'__ebm',      label:'EBM',               icon:'📊', path:'pages/ebm.html',          meta:'gpevidence · TheNNT · OpenEvidence'},
  {id:'__tools-basicsci', label:'Basic Science', icon:'🔬', path:'tools/basic-science.html', meta:'Pathophysiology · pharmacodynamics · the “why”'},
  {id:'__resources',label:'Resources',         icon:'🔗', path:'pages/resources.html',    meta:'GP links · referral pathways · community'},
  {id:'__articles', label:'Articles',           icon:'📚', path:'pages/articles.html',     meta:'A–Z primary-care topic notes · 435 conditions'},
];

// Algorithm specialties — surfaced as the Algorithms top-nav dropdown.
// Counts + labels mirror the section headers in tools/algorithms.html.
const RGP_ALG_SPECIALTIES = [
  {label:'Cardiovascular',               icon:'🫀', n:9},
  {label:'Respiratory',                  icon:'🫁', n:6},
  {label:'Gastroenterology & Liver',     icon:'🫃', n:23},
  {label:"Renal, Urology & Men's Health", icon:'🫈', n:25},
  {label:'Endocrine & Metabolic',        icon:'🦋', n:23},
  {label:'Neurology',                    icon:'🧠', n:20},
  {label:'Mental Health',                icon:'🧩', n:7},
  {label:'ENT & Dental',                 icon:'👂', n:19},
  {label:'Ophthalmology',                icon:'👁️', n:10},
  {label:"Women's Health",               icon:'🌸', n:23},
  {label:'Haematology',                  icon:'🩸', n:12},
  {label:'Musculoskeletal',              icon:'🦴', n:21},
  {label:'General & Systemic',           icon:'⚖️', n:16},
  {label:'Palliative & End of Life Care', icon:'🕊️', n:6},
  {label:'Paediatrics',                  icon:'🧒', n:23},
  {label:'Lab Results',                  icon:'🧪', n:22, hub:true, path:'tools/algorithms/lab-results.html'},
];

// Management specialties — surfaced as the Management top-nav dropdown.
// Counts + labels mirror the section headers in tools/management.html.
const RGP_MGMT_SPECIALTIES = [
  {label:'Cardiovascular & Renal',          icon:'🫀', n:16},
  {label:'Endocrine & Metabolic',           icon:'🦋', n:10},
  {label:'Respiratory',                     icon:'🫁', n:4},
  {label:'Mental Health',                   icon:'🧩', n:7},
  {label:'Neurology',                       icon:'🧠', n:14},
  {label:'Gastroenterology',                icon:'🫃', n:14},
  {label:'Musculoskeletal & Rheumatology',  icon:'🦴', n:16},
  {label:"Women's Health",                   icon:'🌸', n:14},
  {label:"Urology & Men's Health",           icon:'🚹', n:13},
  {label:'Children',                        icon:'🧒', n:6},
  {label:'Allergy & Immunology',            icon:'🤧', n:3},
  {label:'Infections',                      icon:'🦠', n:7},
  {label:'Dermatology',                     icon:'🧴', n:18},
  {label:'ENT & Vestibular',                icon:'👂', n:6},
  {label:'Ophthalmology',                   icon:'👁️', n:7},
  {label:'Lifestyle & Prevention',          icon:'🌱', n:2},
  {label:'Sexual Health',                   icon:'❤️', n:6},
  {label:'Haematology',                     icon:'🩸', n:3},
  {label:'Palliative & End of Life Care',   icon:'🕊️', n:9},
];
// Shared slugify — MUST match the one used in tools/algorithms.html for ?cat= deep-linking.
function rgpSlug(s){ return s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''); }
window.RGP_ALG_SPECIALTIES = RGP_ALG_SPECIALTIES;
window.RGP_MGMT_SPECIALTIES = RGP_MGMT_SPECIALTIES;
window.rgpSlug = rgpSlug;

function getPathPrefix(){
  return /\/(cases|tools|pages)\//.test(location.pathname) ? '../' : '';
}

function renderTopNav(activeId){
  const PRE = getPathPrefix();
  const mode = getMode();
  const progress = getProgress();
  const totalCases = window.RGP_CASES.reduce((n,g) => n + g.items.length, 0);

  // Cases mega — by specialty (tiles, not individual topics)
  const CASE_ICONS = {
    "Cardiovascular & Renal":"🫀",
    "Respiratory":"🫁",
    "Endocrine & Metabolic":"🦋",
    "Gastroenterology":"🫃",
    "Mental Health":"🧠",
    "Women's Health":"🌸",
    "Urology & Continence":"💧",
    "ENT, Balance & Neuro":"👂",
    "Lab result workups":"🧪",
    "Acute & MSK":"🦴",
    "Ophthalmology":"👁️",
    "Infectious diseases":"🦠",
  };
  const casesMega = `
    <a class="rgp-mm-tool ${activeId==='__cases'?'is-active':''}" href="${PRE}cases.html">
      <span class="rgp-mm-tool-ic">📋</span>
      <span><b>All of Casebook</b><small>Browse all ${totalCases} cases</small></span>
    </a>
  ` + window.RGP_CASES.map(grp => {
    const n = grp.items.filter(i => i.status === 'full' || i.status === 'stub').length;
    if (!n) return '';
    const icon = CASE_ICONS[grp.group] || '📋';
    return `
    <a class="rgp-mm-tool" href="${PRE}cases.html?cat=${rgpSlug(grp.group)}">
      <span class="rgp-mm-tool-ic">${icon}</span>
      <span><b>${grp.group}</b><small>${n} case${n===1?'':'s'}</small></span>
    </a>`;
  }).join('');

  // Tools mega
  const toolsMega = RGP_TOOLS.map(t => `
    <a class="rgp-mm-tool ${activeId === t.id ? 'is-active' : ''}" href="${PRE}${t.path}">
      <span class="rgp-mm-tool-ic">${t.icon}</span>
      <span><b>${t.label}</b><small>${t.meta}</small></span>
    </a>
  `).join('');

  // SCA Tools mega — the SCA candidate suite, ordered by the prep journey
  const scaToolsList = [
    { ic:'🎙️', label:'AI Patient Simulator', meta:'Live AI patient · exam-day mode · marked', path:'tools/sca-simulator.html' },
    { ic:'🔥', label:'The Hot Seat',          meta:'12-min timer · RCGP scorecard · record', path:'tools/sca-practice.html' },
    { ic:'🔁', label:'AI Mock Exam Circuit',  meta:'Back-to-back AI patients · report card', path:'tools/sca-circuit-ai.html' },
    { ic:'💬', label:'Conversation Lab',      meta:'ICE · cues · shared plans · negotiation', path:'tools/sca-comms-lab.html' },
    { ic:'🌡️', label:'My Readiness',          meta:'Pass-likelihood · habits · coverage', path:'tools/sca-weakspots.html' },
    { ic:'📝', label:'AKT Question Bank',     meta:'SBAs · spaced repetition', path:'tools/sca-qbank.html' },
    { ic:'📑', label:'Worked Examples',       meta:'Pass vs fail · annotated turn-by-turn', path:'tools/sca-worked-examples.html' },
    { ic:'🗺️', label:'Ultimate Consultation Guide', meta:'The 7 phases · move · phrases · trap', path:'tools/sca-consultation-guide.html' },
    { ic:'🧭', label:'Consultation Playbooks',meta:'10 difficult consultation types', path:'tools/sca-playbooks.html' },
    { ic:'🎯', label:'Micro-Drills',          meta:'Cues · safety-net · explainer reps', path:'tools/sca-drills.html' },
    { ic:'🔥', label:'SCA Hot Topics',        meta:"What's likely this diet", path:'tools/sca-hot-topics.html' },
    { ic:'🧾', label:'The SCA Guide',         meta:'Format · marking · 12-week plan', path:'tools/sca-guide.html' },
    { ic:'⚖️', label:'Examiner Marking',      meta:'The domains · self-mark /126', path:'tools/sca-domains.html' },
    { ic:'🩺', label:'The Resit Clinic',      meta:'Failed? Results letter → 8-week fix', path:'tools/sca-resit.html' },
  ];
  const scaToolsMega = `
    <a class="rgp-mm-tool" href="${PRE}index.html#sca-step1">
      <span class="rgp-mm-tool-ic">🎓</span>
      <span><b>The full SCA path</b><small>See all tools, step by step</small></span>
    </a>
  ` + scaToolsList.map(t => `
    <a class="rgp-mm-tool ${activeId === t.id ? 'is-active' : ''}" href="${PRE}${t.path}">
      <span class="rgp-mm-tool-ic">${t.ic}</span>
      <span><b>${t.label}</b><small>${t.meta}</small></span>
    </a>
  `).join('');

  // Algorithms mega — by specialty (not all topics)
  const algTotal = RGP_ALG_SPECIALTIES.reduce((n,s)=>n+s.n,0);
  const algMega = `
    <a class="rgp-mm-tool ${activeId==='__algorithms'?'is-active':''}" href="${PRE}tools/algorithms.html">
      <span class="rgp-mm-tool-ic">🗺️</span>
      <span><b>All Pathways</b><small>Browse all ${algTotal} pathways</small></span>
    </a>
  ` + RGP_ALG_SPECIALTIES.map(s => `
    <a class="rgp-mm-tool" href="${PRE}${s.path ? s.path : 'tools/algorithms.html?cat=' + rgpSlug(s.label)}">
      <span class="rgp-mm-tool-ic">${s.icon}</span>
      <span><b>${s.label}</b><small>${s.n} pathway${s.n===1?'':'s'}</small></span>
    </a>
  `).join('');

  // Management mega — by specialty (deep-links into the Management Cards page)
  const mgmtTotal = RGP_MGMT_SPECIALTIES.reduce((n,s)=>n+s.n,0);
  const mgmtMega = `
    <a class="rgp-mm-tool ${activeId==='__tools-management'?'is-active':''}" href="${PRE}tools/management.html">
      <span class="rgp-mm-tool-ic">💠</span>
      <span><b>All Protocols</b><small>Browse all ${mgmtTotal} cards</small></span>
    </a>
  ` + RGP_MGMT_SPECIALTIES.map(s => `
    <a class="rgp-mm-tool" href="${PRE}tools/management.html?cat=${rgpSlug(s.label)}">
      <span class="rgp-mm-tool-ic">${s.icon}</span>
      <span><b>${s.label}</b><small>${s.n} card${s.n===1?'':'s'}</small></span>
    </a>
  `).join('');

  // ===== Combined top-nav menus: Clinical Core + Reference Library =====
  const ARTICLES_N = 435;
  const mmHead = (label, count) =>
    `<div class="rgp-mm-head" style="grid-column:1/-1;display:flex;align-items:baseline;gap:9px;margin:13px 2px 1px;font-size:10.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)"><span>${label}</span>${count!=null?`<span style="color:var(--rust);font-weight:800">${count}</span>`:''}</div>`;
  const coreTotal = algTotal + mgmtTotal;
  const coreMega = mmHead('Pathways \u00b7 diagnose &amp; triage', algTotal) + algMega
                 + mmHead('Protocols \u00b7 manage', mgmtTotal) + mgmtMega;
  const refTotal = totalCases + ARTICLES_N;
  const refArticles = `
    <a class="rgp-mm-tool ${activeId==='__articles'?'is-active':''}" href="${PRE}pages/articles.html">
      <span class="rgp-mm-tool-ic">\uD83D\uDCDA</span>
      <span><b>A\u2013Z Articles</b><small>Primary-care topic notes \u00b7 ${ARTICLES_N} conditions</small></span>
    </a>`;
  const refAudios = `
    <a class="rgp-mm-tool ${activeId==='__audios'?'is-active':''}" href="${PRE}pages/audios.html">
      <span class="rgp-mm-tool-ic">\uD83C\uDFA7</span>
      <span><b>Clinical Audios</b><small>AI + human recordings \u00b7 NHS topic updates</small></span>
    </a>`;
  const refMega = mmHead('Casebook \u00b7 full walkthroughs', totalCases) + casesMega
                + mmHead('Articles', ARTICLES_N) + refArticles
                + mmHead('Audios', null) + refAudios;

  // Short "main contents" dropdowns for the Compass / Compendium nav items
  // (top-level sections only — no per-specialty topics).
  const coreMenu = `
    <a class="rgp-mm-tool ${activeId==='__core'?'is-active':''}" href="${PRE}tools/clinical-core.html">
      <span class="rgp-mm-tool-ic">🧭</span><span><b>Open Clinical Compass</b><small>The full diagnose → manage hub</small></span>
    </a>
    <a class="rgp-mm-tool" href="${PRE}tools/algorithms.html">
      <span class="rgp-mm-tool-ic">🗺️</span><span><b>Pathways</b><small>${algTotal} pathways · diagnose &amp; triage</small></span>
    </a>
    <a class="rgp-mm-tool" href="${PRE}tools/management.html">
      <span class="rgp-mm-tool-ic">💠</span><span><b>Protocols</b><small>${mgmtTotal} protocols · manage the condition</small></span>
    </a>
    <a class="rgp-mm-tool ${activeId==='__tools-prescribing'?'is-active':''}" href="${PRE}tools/prescribing.html">
      <span class="rgp-mm-tool-ic">💊</span><span><b>Prescribing</b><small>Ready Rx · eligibility · RAG · sick-day</small></span>
    </a>`;
  const refMenu = `
    <a class="rgp-mm-tool ${activeId==='__fullmed'?'is-active':''}" href="${PRE}pages/full-medicine.html">
      <span class="rgp-mm-tool-ic">📖</span><span><b>Open The Compendium</b><small>The full reference library</small></span>
    </a>
    <a class="rgp-mm-tool" href="${PRE}cases.html">
      <span class="rgp-mm-tool-ic">📋</span><span><b>Casebook</b><small>${totalCases} full clinical walkthroughs</small></span>
    </a>
    <a class="rgp-mm-tool" href="${PRE}pages/articles.html">
      <span class="rgp-mm-tool-ic">📚</span><span><b>Articles</b><small>${ARTICLES_N} A–Z topic notes</small></span>
    </a>
    <a class="rgp-mm-tool" href="${PRE}pages/audios.html">
      <span class="rgp-mm-tool-ic">🎧</span><span><b>Audios</b><small>AI + human recordings · CPD-tracked</small></span>
    </a>`;

  // Clinic Toolkit — single ordered list (clinical tools first, then reference).
  const TOOLKIT_IDS = ['__tools-scribe','__tools-spine','__tools-decision','__tools-exam','__tools-admin','__tools-calc','__leaflets','__tools-basicsci','__ebm','__resources'];
  const toolkitMap = {};
  RGP_TOOLS.forEach(t => { toolkitMap[t.id] = t; });
  RGP_NAV_SECTIONS.forEach(s => { toolkitMap[s.id] = s; });
  const toolkitItems = TOOLKIT_IDS.map(id => toolkitMap[id]).filter(Boolean);
  const toolkitMenu = toolkitItems.map(it => {
    const moreSca = ['__ask','__audios','__resources','__articles'].includes(it.id) ? 'rgp-more-sca' : '';
    return `
            <a class="rgp-mm-tool ${activeId===it.id?'is-active':''} ${moreSca}" href="${PRE}${it.path}">
              <span class="rgp-mm-tool-ic">${it.icon}</span>
              <span><b>${it.label}</b><small>${it.meta}</small></span>
            </a>`;
  }).join('');

  return `
    <div class="rgp-iface-bar">
      <div class="rgp-iface-inner">
        <span class="rgp-iface-spacer" aria-hidden="true"></span>
        <div class="rgp-mode rgp-iface" role="tablist" aria-label="Switch interface">
          <span class="rgp-iface-cap">Viewing</span>
          <button data-mode="clinic" class="${mode!=='sca'?'active':''}" title="Switch to the Clinic interface"><span class="rgp-iface-ic">🏥</span><span class="rgp-iface-lbl">Clinic</span></button>
          <button data-mode="sca" class="${mode==='sca'?'active':''}" title="Switch to the SCA exam interface"><span class="rgp-iface-ic">🎓</span><span class="rgp-iface-lbl">SCA</span></button>
          <span class="rgp-iface-hint">— tap to switch the whole site</span>
          <button type="button" class="rgp-iface-install" onclick="window.RGPInstall&&window.RGPInstall()" style="font:inherit;font-size:11.5px;font-weight:700;color:var(--teal);background:none;border:none;cursor:pointer;padding:8px 6px;margin:-4px 0;white-space:nowrap;">📲 Install app</button>
        </div>
        <div class="rgp-auth">
          <button class="rgp-auth-btn rgp-auth-signin" data-open-auth="signin" type="button" data-i18n="nav.signin">Sign in</button>
          <button class="rgp-auth-btn rgp-auth-signup" data-open-auth="signup" type="button" data-i18n="nav.signup">Sign up</button>
        </div>
      </div>
    </div>
    <div class="rgp-nav-row">
      <a class="rgp-brand" href="${PRE}index.html" aria-label="Reasoning GP home">
        <span class="rgp-brand-mark">R</span>
        <span class="rgp-brand-text">
          <b>Reasoning GP</b>
          <small>SCA · Clinical reasoning · UK</small>
        </span>
      </a>
      <nav class="rgp-primary" aria-label="Primary">
        <button class="rgp-nav-btn rgp-sca-only" data-menu="scatools" type="button" aria-expanded="false">
          <span class="rgp-nav-sect-ic">🛠️</span>
          <span>SCA Tools</span> <span class="rgp-pill">${scaToolsList.length}</span>
          <svg class="rgp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <button class="rgp-nav-btn ${activeId==='__core'?'is-active':''}" data-menu="core" type="button" aria-expanded="false">
          <span class="rgp-nav-sect-ic">🧭</span>
          <span>Clinical Compass</span>
          <svg class="rgp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <a class="rgp-nav-btn rgp-nav-link ${activeId==='__ask'?'is-active':''}" data-navkey="ask" href="${PRE}pages/ask.html" title="Ask any clinical question in plain English — answered from the library, then NICE CKS &amp; the BNF, with links to the matching pathway, protocol or case.">
          <span class="rgp-nav-sect-ic">💬</span>
          <span>Ask</span>
        </a>
        <button class="rgp-nav-btn ${activeId==='__fullmed'?'is-active':''}" data-menu="reference" type="button" aria-expanded="false">
          <span class="rgp-nav-sect-ic">📖</span>
          <span>The Compendium</span>
          <svg class="rgp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <a class="rgp-nav-btn rgp-nav-link ${activeId==='__cpd'?'is-active':''}" data-navkey="cpd" href="${PRE}pages/cpd.html" title="Your CPD log — reading & listening time is tracked automatically, with structured reflection and a printable appraisal record.">
          <span class="rgp-nav-sect-ic">🏅</span>
          <span>CPD</span>
        </a>
        <a class="rgp-nav-btn rgp-nav-link rgp-sca-only ${activeId==='__sca'?'is-active':''}" data-navkey="hotseat" href="${PRE}tools/sca-practice.html">
          <span class="rgp-nav-sect-ic">🎓</span>
          <span>The Hot Seat</span>
        </a>
        <button class="rgp-nav-btn rgp-clinic-only" data-menu="more" type="button" aria-expanded="false">
          <span class="rgp-nav-sect-ic">🩺</span>
          <span>Clinic Toolkit</span>
          <span class="rgp-pill rgp-clinic-only">${toolkitItems.length}</span>
          <svg class="rgp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </nav>

      <button class="rgp-search" data-open-palette type="button" aria-label="Search">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <span class="rgp-search-txt" data-i18n="nav.search">Jump to a case or tool…</span>
        <span class="rgp-search-kbd"><kbd>${navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</kbd><kbd>K</kbd></span>
      </button>


      <button class="rgp-burger" data-burger type="button" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>

    <div class="rgp-mega" data-mega="scatools" hidden>
      <div class="rgp-mega-inner">
        <div class="rgp-mm-tools">${scaToolsMega}</div>
      </div>
    </div>
    <div class="rgp-mega" data-mega="core" hidden>
      <div class="rgp-mega-inner">
        <div class="rgp-mm-tools">${coreMenu}</div>
      </div>
    </div>
    <div class="rgp-mega" data-mega="reference" hidden>
      <div class="rgp-mega-inner">
        <div class="rgp-mm-tools">${refMenu}</div>
      </div>
    </div>
    <div class="rgp-mega" data-mega="more" hidden>
      <div class="rgp-mega-inner">
        <div class="rgp-mm-tools">
          ${toolkitMenu}
        </div>
      </div>
    </div>
  `;
}

function wireTopNav(host){
  let openMenu = null;
  function closeMega(){
    if (!openMenu) return;
    host.querySelectorAll('.rgp-mega').forEach(m => m.hidden = true);
    host.querySelectorAll('.rgp-nav-btn[data-menu]').forEach(b => b.setAttribute('aria-expanded','false'));
    host.classList.remove('is-mega-open');
    openMenu = null;
  }
  function openMegaMenu(name){
    if (openMenu === name) { closeMega(); return; }
    closeMega();
    const mega = host.querySelector(`.rgp-mega[data-mega="${name}"]`);
    if (!mega) return;
    mega.hidden = false;
    host.querySelector(`.rgp-nav-btn[data-menu="${name}"]`).setAttribute('aria-expanded','true');
    host.classList.add('is-mega-open');
    openMenu = name;
  }
  host.querySelectorAll('.rgp-nav-btn[data-menu]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openMegaMenu(btn.dataset.menu);
    });
  });

  // Desktop (fine pointer): open dropdowns on hover, not just click.
  if (window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    let closeTimer = null;
    const cancelClose = () => { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } };
    const scheduleClose = () => { cancelClose(); closeTimer = setTimeout(closeMega, 200); };
    host.querySelectorAll('.rgp-nav-btn[data-menu]').forEach(btn => {
      btn.addEventListener('mouseenter', () => { cancelClose(); if (openMenu !== btn.dataset.menu) openMegaMenu(btn.dataset.menu); });
    });
    // Hovering a non-dropdown nav item dismisses any open panel.
    host.querySelectorAll('.rgp-primary .rgp-nav-btn:not([data-menu]), .rgp-primary .rgp-nav-link').forEach(el => {
      el.addEventListener('mouseenter', () => { cancelClose(); closeMega(); });
    });
    // Keep the panel open while the pointer is over it; close shortly after leaving.
    host.querySelectorAll('.rgp-mega').forEach(m => {
      m.addEventListener('mouseenter', cancelClose);
      m.addEventListener('mouseleave', scheduleClose);
    });
    const primary = host.querySelector('.rgp-primary');
    if (primary) primary.addEventListener('mouseleave', scheduleClose);
  }
  // Mobile: the open mega overlays the nav button, so add a visible Close control to each panel.
  host.querySelectorAll('.rgp-mega .rgp-mega-inner').forEach(inner => {
    if (inner.querySelector('.rgp-mega-close')) return;
    const bar = document.createElement('button');
    bar.type = 'button';
    bar.className = 'rgp-mega-close';
    bar.innerHTML = '<span aria-hidden="true">←</span> Close menu';
    bar.addEventListener('click', ev => { ev.stopPropagation(); closeMega(); });
    inner.insertBefore(bar, inner.firstChild);
  });
  document.addEventListener('click', e => {
    if (!host.contains(e.target)) closeMega();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMega();
      host.classList.remove('is-burger-open');
    }
  });
  // Close mega when clicking a link inside it
  host.querySelectorAll('.rgp-mega a').forEach(a => a.addEventListener('click', closeMega));

  // Mode buttons
  host.querySelectorAll('.rgp-mode button').forEach(b => {
    b.addEventListener('click', () => {
      const m = b.dataset.mode;
      setMode(m);
      host.querySelectorAll('.rgp-mode button').forEach(x => x.classList.toggle('active', x.dataset.mode === m));
    });
  });

  // Burger
  host.querySelector('[data-burger]')?.addEventListener('click', () => {
    host.classList.toggle('is-burger-open');
  });

  // Open palette
  host.querySelector('[data-open-palette]')?.addEventListener('click', () => window.RGP_openPalette?.());

  // Auth buttons
  host.querySelectorAll('[data-open-auth]').forEach(b => {
    b.addEventListener('click', () => window.RGP_openAuth?.(b.dataset.openAuth));
  });

  // Language switcher
  const langBtn = host.querySelector('[data-open-lang]');
  const langMenu = host.querySelector('.rgp-lang-menu');
  function closeLang(){ if (langMenu) langMenu.hidden = true; langBtn?.setAttribute('aria-expanded', 'false'); }
  function openLang(){ if (langMenu) langMenu.hidden = false; langBtn?.setAttribute('aria-expanded', 'true'); }
  langBtn?.addEventListener('click', e => { e.stopPropagation(); langMenu?.hidden ? openLang() : closeLang(); });
  document.addEventListener('click', e => { if (!host.contains(e.target)) closeLang(); });
  host.querySelectorAll('[data-lang-set]').forEach(b => {
    b.addEventListener('click', () => {
      window.RGP_setLang?.(b.dataset.langSet);
      closeLang();
      const cfg = (window.RGP_LANGS || []).find(l => l.code === b.dataset.langSet);
      if (cfg) {
        host.querySelector('.rgp-lang-flag').textContent = cfg.flag;
        host.querySelector('.rgp-lang-code').textContent = cfg.code.toUpperCase();
      }
    });
  });
  host.querySelector('[data-translate-page]')?.addEventListener('click', () => { window.RGP_openGoogleTranslate?.(); closeLang(); });

  // Sync switcher to current language on load
  const curLang = window.RGP_getLang?.() || 'en';
  const cfg = (window.RGP_LANGS || []).find(l => l.code === curLang);
  if (cfg && host.querySelector('.rgp-lang-flag')) {
    host.querySelector('.rgp-lang-flag').textContent = cfg.flag;
    host.querySelector('.rgp-lang-code').textContent = cfg.code.toUpperCase();
  }
}

/* ---------- Command palette ---------- */
// ============================================
// Topic index — surfaced in the command palette so a search for
// "headache" / "CHA2DS2" / "migraine" / etc. hits the right tool
// item directly. Each entry: {label, meta, href, syn} where href is
// relative to the project root (palette prefixes it for sub-pages).
// ============================================
const RGP_TOPIC_INDEX = [
  // ---- Diagnostic Tool topics ----
  { tool:'Diagnostic',         label:'Tired all the time (TATT)',          href:'tools/diagnostic.html#tiredness',      syn:'tiredness tatt fatigue exhaustion' },
  { tool:'Diagnostic',         label:'Headache',                            href:'tools/diagnostic.html#headache',       syn:'headache migraine cluster tension ichd snnoop' },
  { tool:'Diagnostic',         label:'Dizziness / collapse',                href:'tools/diagnostic.html#dizziness',      syn:'dizziness vertigo collapse syncope lightheaded' },
  { tool:'Diagnostic',         label:'Chest pain',                          href:'tools/diagnostic.html#chest-pain',     syn:'chest pain acs angina mi' },
  { tool:'Diagnostic',         label:'Breathlessness',                      href:'tools/diagnostic.html#breathlessness', syn:'breathlessness sob dyspnoea breathless' },
  { tool:'Diagnostic',         label:'Abdominal pain',                      href:'tools/diagnostic.html#abdo-pain',      syn:'abdominal pain belly stomach' },
  { tool:'Diagnostic',         label:'Raised BP / new HTN diagnosis',       href:'tools/diagnostic.html#hypertension',   syn:'hypertension htn high blood pressure' },
  { tool:'Diagnostic',         label:'Raised HbA1c / hyperglycaemia',       href:'tools/diagnostic.html#type-2-diabetes',syn:'diabetes t2dm hba1c hyperglycaemia glucose' },
  { tool:'Diagnostic',         label:'Wheeze / chronic cough',              href:'tools/diagnostic.html#asthma',         syn:'asthma wheeze cough reversible airway' },

  // ---- Calculators ----
  { tool:'Calculator',     label:'CHA₂DS₂-VASc',                href:'tools/calculators.html#chads-vasc', syn:'chads vasc af stroke risk anticoagulation' },
  { tool:'Calculator',     label:'HAS-BLED',                    href:'tools/calculators.html#has-bled',   syn:'has bled bleeding risk anticoagulation' },
  { tool:'Calculator',     label:'ORBIT',                       href:'tools/calculators.html#orbit',      syn:'orbit bleeding score af' },
  { tool:'Calculator',     label:'QRISK3 (10-yr CV risk)',      href:'tools/calculators.html#qrisk3',     syn:'qrisk cv cardiovascular risk statin lipid' },
  { tool:'Calculator',     label:'ABCD² (TIA stroke risk)',     href:'tools/calculators.html#abcd2',      syn:'abcd2 tia stroke risk' },
  { tool:'Calculator',     label:"Wells' score — PE",           href:'tools/calculators.html#wells-pe',   syn:'wells pe pulmonary embolism dvt vte' },
  { tool:'Calculator',     label:"Wells' score — DVT",          href:'tools/calculators.html#wells-dvt',  syn:'wells dvt deep vein thrombosis vte' },
  { tool:'Calculator',     label:'CRB-65',                      href:'tools/calculators.html#crb-65',     syn:'crb 65 pneumonia community' },
  { tool:'Calculator',     label:'FeverPAIN',                   href:'tools/calculators.html#feverpain',  syn:'fever pain sore throat tonsillitis antibiotic' },
  { tool:'Calculator',     label:'Centor',                      href:'tools/calculators.html#centor',     syn:'centor sore throat tonsillitis' },
  { tool:'Calculator',     label:'NEWS2',                       href:'tools/calculators.html#news2',      syn:'news2 sepsis acute deterioration early warning' },
  { tool:'Calculator',     label:'PHQ-9 (depression)',          href:'tools/calculators.html#phq9',       syn:'phq9 depression score mood' },
  { tool:'Calculator',     label:'GAD-7 (anxiety)',             href:'tools/calculators.html#gad7',       syn:'gad7 anxiety worry' },
  { tool:'Calculator',     label:'AUDIT-C (alcohol)',           href:'tools/calculators.html#audit-c',    syn:'audit alcohol screen' },
  { tool:'Calculator',     label:'AUDIT (full)',                href:'tools/calculators.html#audit',      syn:'audit alcohol' },
  { tool:'Calculator',     label:'Epworth (sleepiness)',        href:'tools/calculators.html#epworth',    syn:'epworth sleepiness osa daytime' },
  { tool:'Calculator',     label:'STOP-BANG (OSA risk)',        href:'tools/calculators.html#stop-bang',  syn:'stop bang osa obstructive sleep apnoea snoring' },
  { tool:'Calculator',     label:'eGFR (CKD-EPI 2021)',         href:'tools/calculators.html#egfr',       syn:'egfr ckd renal kidney creatinine' },
  { tool:'Calculator',     label:'CrCl (Cockcroft-Gault)',      href:'tools/calculators.html#crcl',       syn:'crcl creatinine clearance cockcroft gault doac dose' },
  { tool:'Calculator',     label:'BMI + waist:height',          href:'tools/calculators.html#bmi',        syn:'bmi waist obesity weight' },
  { tool:'Calculator',     label:'FRAX (10-yr fracture risk)',  href:'tools/calculators.html#frax',       syn:'frax fracture osteoporosis bone' },
  { tool:'Calculator',     label:'QFracture',                   href:'tools/calculators.html#qfracture',  syn:'qfracture fracture osteoporosis bone' },
  { tool:'Calculator',     label:'IPSS (BPH)',                  href:'tools/calculators.html#ipss',       syn:'ipss bph luts male prostate' },
  { tool:'Calculator',     label:'MUST (malnutrition)',         href:'tools/calculators.html#must',       syn:'must malnutrition weight loss nutrition' },
  { tool:'Calculator',     label:'DAS28-CRP (RA)',              href:'tools/calculators.html#das28',      syn:'das28 ra rheumatoid arthritis joint' },
  { tool:'Calculator',     label:'6-CIT (cognitive screen)',    href:'tools/calculators.html#6cit',       syn:'6cit cognition dementia memory' },
  { tool:'Calculator',     label:'MMSE / MoCA / ACE-III',       href:'tools/calculators.html#mmse-moca',  syn:'mmse moca ace cognition dementia memory' },
  { tool:'Calculator',     label:'CURB-65 (pneumonia)',         href:'tools/calculators.html#curb-65',    syn:'curb 65 pneumonia severity urea hospital cap' },
  { tool:'Calculator',     label:'MRC Dyspnoea Scale',          href:'tools/calculators.html#mrc-dyspnoea', syn:'mrc dyspnoea breathlessness copd grade pulmonary rehab' },
  { tool:'Calculator',     label:'COPD Assessment Test (CAT)',  href:'tools/calculators.html#cat',        syn:'cat copd assessment test symptom score' },
  { tool:'Calculator',     label:'RCP 3 Questions (asthma)',    href:'tools/calculators.html#rcp3',       syn:'rcp three questions asthma control review' },
  { tool:'Calculator',     label:'Smoking pack-years',          href:'tools/calculators.html#pack-years', syn:'pack years smoking tobacco copd lung cancer' },
  { tool:'Calculator',     label:'PERC rule (PE rule-out)',     href:'tools/calculators.html#perc',       syn:'perc pulmonary embolism rule out low risk' },
  { tool:'Calculator',     label:'QTc (Bazett)',                href:'tools/calculators.html#qtc',        syn:'qtc qt interval bazett citalopram prescribing ecg' },
  { tool:'Calculator',     label:'HbA1c converter',             href:'tools/calculators.html#hba1c-convert', syn:'hba1c convert ifcc dcct mmol mol percent eag diabetes' },
  { tool:'Calculator',     label:'QDiabetes (10-yr risk)',      href:'tools/calculators.html#qdiabetes',  syn:'qdiabetes type 2 diabetes risk prevention' },
  { tool:'Calculator',     label:'Corrected calcium',           href:'tools/calculators.html#corrected-calcium', syn:'corrected adjusted calcium albumin hypercalcaemia bone profile' },
  { tool:'Calculator',     label:'FIB-4 (liver fibrosis)',      href:'tools/calculators.html#fib4',       syn:'fib4 liver fibrosis nafld fatty liver lfts' },
  { tool:'Calculator',     label:'PSA age-specific threshold',  href:'tools/calculators.html#psa-threshold', syn:'psa age specific threshold prostate cancer referral ng12' },
  { tool:'Calculator',     label:'PHQ-2 (depression screen)',   href:'tools/calculators.html#phq2',       syn:'phq2 depression screen brief mood' },
  { tool:'Calculator',     label:'GAD-2 (anxiety screen)',      href:'tools/calculators.html#gad2',       syn:'gad2 anxiety screen brief worry' },
  { tool:'Calculator',     label:'Whooley questions',           href:'tools/calculators.html#whooley',    syn:'whooley depression screen two questions case finding' },
  { tool:'Calculator',     label:'Edinburgh Postnatal Depression (EPDS)', href:'tools/calculators.html#epds', syn:'epds edinburgh postnatal perinatal depression mood' },
  { tool:'Calculator',     label:'SCOFF (eating disorder)',     href:'tools/calculators.html#scoff',      syn:'scoff eating disorder anorexia bulimia screen' },
  { tool:'Calculator',     label:'Alcohol units calculator',    href:'tools/calculators.html#alcohol-units', syn:'alcohol units calculator abv weekly drinking' },
  { tool:'Calculator',     label:'4AT (delirium)',              href:'tools/calculators.html#4at',        syn:'4at delirium cognition acute confusion older' },
  { tool:'Calculator',     label:'AMT-10 (mental test)',        href:'tools/calculators.html#amt10',      syn:'amt abbreviated mental test cognition older' },
  { tool:'Calculator',     label:'Rockwood Clinical Frailty Scale', href:'tools/calculators.html#cfs',    syn:'cfs clinical frailty scale rockwood older adults' },
  { tool:'Calculator',     label:'PRISMA-7 (frailty screen)',   href:'tools/calculators.html#prisma7',    syn:'prisma 7 frailty screen older adults' },
  { tool:'Calculator',     label:'PUQE (nausea in pregnancy)',  href:'tools/calculators.html#puqe',       syn:'puqe nausea vomiting pregnancy hyperemesis nvp' },
  { tool:'Calculator',     label:'EDD & gestational age (LMP)', href:'tools/calculators.html#edd-lmp',     syn:'edd due date gestational age lmp naegele pregnancy dating weeks' },
  { tool:'Calculator',     label:'Gestational age (from EDD)',  href:'tools/calculators.html#ga-from-edd', syn:'gestational age edd weeks pregnant trimester scan due date' },
  { tool:'Calculator',     label:'Corrected age (prematurity)', href:'tools/calculators.html#corrected-age', syn:'corrected age prematurity preterm baby development growth chart' },
  { tool:'Calculator',     label:'Ottawa ankle & foot rules',   href:'tools/calculators.html#ottawa-ankle', syn:'ottawa ankle foot rules xray fracture sprain' },
  { tool:'Calculator',     label:'Oral morphine equivalent (OME)', href:'tools/calculators.html#ome',     syn:'ome oral morphine equivalent opioid conversion dose taper' },

  // ---- Ready Prescriptions ----
  { tool:'Prescription',   label:'H. pylori eradication (1st line)',   href:'tools/prescriptions.html#hpylori-1st',           syn:'h pylori eradication ulcer gastritis triple therapy' },
  { tool:'Prescription',   label:'H. pylori eradication (2nd line)',   href:'tools/prescriptions.html#hpylori-2nd',           syn:'h pylori eradication failed second line' },
  { tool:'Prescription',   label:'Emergency contraception',            href:'tools/prescriptions.html#emergency-contraception',syn:'emergency contraception ec morning after upsi levonelle ellaone' },
  { tool:'Prescription',   label:'Migraine — acute attack',            href:'tools/prescriptions.html#migraine-acute',         syn:'migraine acute triptan sumatriptan naproxen headache' },
  { tool:'Prescription',   label:'Migraine — preventive therapy',      href:'tools/prescriptions.html#migraine-prevent',       syn:'migraine prevention propranolol topiramate amitriptyline' },
  { tool:'Prescription',   label:'Gout — acute flare',                 href:'tools/prescriptions.html#gout-acute',             syn:'gout acute flare nsaid colchicine steroid' },
  { tool:'Prescription',   label:'Gout — urate-lowering prophylaxis',  href:'tools/prescriptions.html#gout-prophylaxis',       syn:'gout allopurinol febuxostat urate prophylaxis' },
  { tool:'Prescription',   label:'Postponing menstruation',            href:'tools/prescriptions.html#postpone-menses',        syn:'postpone menstruation norethisterone period delay' },
  { tool:'Prescription',   label:'Shingles (herpes zoster)',           href:'tools/prescriptions.html#shingles',               syn:'shingles herpes zoster aciclovir antiviral' },
  { tool:'Prescription',   label:'Cold sore (herpes labialis)',        href:'tools/prescriptions.html#cold-sore',              syn:'cold sore herpes labialis aciclovir' },
  { tool:'Prescription',   label:'Oral candidiasis (thrush)',          href:'tools/prescriptions.html#oral-candidiasis',       syn:'oral candidiasis thrush miconazole fluconazole' },

  // ---- Patient leaflets (curated high-traffic conditions) ----
  { tool:'Leaflet',        label:'Hypertension — patient leaflet',     href:'tools/leaflets.html#hypertension',                syn:'hypertension high blood pressure leaflet' },
  { tool:'Leaflet',        label:'Atrial fibrillation — leaflet',      href:'tools/leaflets.html#atrial-fibrillation',         syn:'atrial fibrillation af irregular pulse leaflet' },
  { tool:'Leaflet',        label:'Heart failure — leaflet',            href:'tools/leaflets.html#heart-failure',               syn:'heart failure leaflet ankle swelling' },
  { tool:'Leaflet',        label:'CKD — leaflet',                      href:'tools/leaflets.html#chronic-kidney-disease',      syn:'ckd chronic kidney disease leaflet renal' },
  { tool:'Leaflet',        label:'Asthma — leaflet',                   href:'tools/leaflets.html#asthma',                      syn:'asthma leaflet inhaler wheeze' },
  { tool:'Leaflet',        label:'COPD — leaflet',                     href:'tools/leaflets.html#copd',                        syn:'copd chronic obstructive pulmonary leaflet' },
  { tool:'Leaflet',        label:'Type 2 diabetes — leaflet',          href:'tools/leaflets.html#type-2-diabetes',             syn:'type 2 diabetes t2dm leaflet hba1c' },
  { tool:'Leaflet',        label:'Depression — leaflet',               href:'tools/leaflets.html#depression',                  syn:'depression leaflet low mood mind' },
  { tool:'Leaflet',        label:'IBS — leaflet',                      href:'tools/leaflets.html#ibs',                         syn:'ibs irritable bowel leaflet' },
  { tool:'Leaflet',        label:'Menopause — leaflet',                href:'tools/leaflets.html#menopause',                   syn:'menopause perimenopause hrt leaflet' },
  { tool:'Leaflet',        label:'PCOS — leaflet',                     href:'tools/leaflets.html#pcos',                        syn:'pcos polycystic ovary leaflet' },
  { tool:'Leaflet',        label:'Osteoporosis — leaflet',             href:'tools/leaflets.html#osteoporosis',                syn:'osteoporosis bone leaflet frax' },

  // ---- Resources / Pathways ----
  { tool:'Resources',      label:'Local NHS clinical pathways',        href:'pages/resources.html#local-pathways',             syn:'pathways icb local nhs guidelines selondonics gmmmg bnssg nottsapc nwlondon' },
  { tool:'Resources',      label:'Patient signposting A–Z',            href:'pages/resources.html#signposting',                syn:'signposting charity patient support az' },

  // ---- Examinations ----
  { tool:'Examination',    label:'GALS screen',                        href:'tools/examinations.html#gals',                    syn:'gals gait arms legs spine msk screen' },
  { tool:'Examination',    label:'Shoulder examination',               href:'tools/examinations.html#shoulder',                syn:'shoulder rotator cuff impingement frozen hawkins empty can pathway' },
  { tool:'Examination',    label:'Knee examination',                   href:'tools/examinations.html#knee',                    syn:'knee mcmurray lachman draw effusion meniscus acl' },
  { tool:'Examination',    label:'Hip examination',                    href:'tools/examinations.html#hip',                     syn:'hip trendelenburg thomas test groin' },
  { tool:'Examination',    label:'Hand & wrist examination',           href:'tools/examinations.html#hand-wrist',              syn:'hand wrist carpal tunnel phalen tinel arthritis' },
  { tool:'Examination',    label:'Spine examination (back & neck)',    href:'tools/examinations.html#spine',                   syn:'spine back neck radiculopathy straight leg raise' },
  { tool:'Examination',    label:'Ankle & foot examination',           href:'tools/examinations.html#ankle-foot',              syn:'ankle foot ottawa sprain' },
  { tool:'Examination',    label:'Cardiovascular examination',         href:'tools/examinations.html#cardiovascular',          syn:'cardiovascular cvs heart murmur precordium auscultation' },
  { tool:'Examination',    label:'Peripheral arterial (vascular) exam',href:'tools/examinations.html#peripheral-vascular',     syn:'peripheral vascular arterial pulses abpi buerger claudication' },
  { tool:'Examination',    label:'Respiratory examination',            href:'tools/examinations.html#respiratory',             syn:'respiratory chest percussion auscultation crackles wheeze' },
  { tool:'Examination',    label:'Abdominal examination',              href:'tools/examinations.html#abdominal',               syn:'abdominal abdomen palpation organomegaly ascites' },
  { tool:'Examination',    label:'Neurological examination (full)',    href:'tools/examinations.html#neurological',            syn:'neurological neuro examination cranial nerves upper lower limb gait romberg tone power reflexes plantar sensation umn lmn cerebellar standing sitting lying stroke' },
  { tool:'Examination',    label:'Mental capacity assessment (MCA)',    href:'tools/examinations.html#capacity',                syn:'mental capacity assessment mca 2005 consent two stage test understand retain weigh communicate best interests imca dols lps unwise decision advance decision lpa court of protection' },
  { tool:'Examination',    label:'Ear examination (otoscopy)',         href:'tools/examinations.html#ear',                     syn:'ear otoscopy rinne weber tuning fork hearing' },
  { tool:'Examination',    label:'Throat & oral cavity examination',   href:'tools/examinations.html#throat-oral',             syn:'throat oral tonsils feverpain centor sore throat' },
  { tool:'Examination',    label:'Neck & thyroid examination',         href:'tools/examinations.html#neck-thyroid',            syn:'neck thyroid goitre lump swallow' },
  { tool:'Examination',    label:'Red eye assessment',                 href:'tools/examinations.html#red-eye',                 syn:'red eye acuity cornea pupil pathway uveitis conjunctivitis' },
  { tool:'Examination',    label:'Fundoscopy (ophthalmoscopy)',        href:'tools/examinations.html#fundoscopy',              syn:'fundoscopy ophthalmoscopy disc retina papilloedema diabetic' },
  { tool:'Examination',    label:'Visual acuity & fields',             href:'tools/examinations.html#visual-acuity-fields',    syn:'visual acuity fields snellen confrontation pinhole' },
  { tool:'Examination',    label:'Breast examination',                 href:'tools/examinations.html#breast',                  syn:'breast lump nipple axilla two week wait' },
  { tool:'Examination',    label:'Diabetic foot examination',          href:'tools/examinations.html#diabetic-foot',           syn:'diabetic foot monofilament neuropathy charcot pulses ulcer' },
  { tool:'Examination',    label:'Skin lesion assessment',             href:'tools/examinations.html#skin-lesion',             syn:'skin lesion melanoma abcde 7 point dermoscopy mole bcc scc pathway' },
  { tool:'Examination',    label:'Lymph node examination',             href:'tools/examinations.html#lymph-nodes',             syn:'lymph node lymphadenopathy lymphoma spleen supraclavicular' },
  { tool:'Examination',    label:'Mental state examination (MSE)',     href:'tools/examinations.html#mental-state',            syn:'mental state mse aseptic mood affect psychosis risk' },
  { tool:'Examination',    label:'Cognitive assessment',               href:'tools/examinations.html#cognitive',               syn:'cognitive mmse moca ace 6cit dementia delirium memory' },
  { tool:'Examination',    label:'Newborn & 6–8 week infant check',    href:'tools/examinations.html#nipe-newborn',            syn:'nipe newborn 6 8 week baby red reflex barlow ortolani hips testes' },
  { tool:'Examination',    label:'Developmental assessment',           href:'tools/examinations.html#developmental',           syn:'developmental milestones delay paediatric gross motor speech' },

  // ---- Basic Science: pathophysiology ----
  { tool:'Basic science',  label:'Hypertension — pathophysiology',     href:'tools/basic-science.html#patho-hypertension',     syn:'pathophysiology hypertension raas remodelling mechanism why' },
  { tool:'Basic science',  label:'Heart failure — pathophysiology',    href:'tools/basic-science.html#patho-heart-failure',    syn:'pathophysiology heart failure neurohormonal raas bnp mechanism' },
  { tool:'Basic science',  label:'Atrial fibrillation — pathophysiology',href:'tools/basic-science.html#patho-atrial-fibrillation',syn:'pathophysiology af atrial fibrillation stasis stroke mechanism' },
  { tool:'Basic science',  label:'Atherosclerosis & IHD — pathophysiology',href:'tools/basic-science.html#patho-atherosclerosis',syn:'pathophysiology atherosclerosis ldl plaque angina mi ischaemic heart' },
  { tool:'Basic science',  label:'Asthma — pathophysiology',           href:'tools/basic-science.html#patho-asthma',           syn:'pathophysiology asthma inflammation eosinophil reversible mechanism' },
  { tool:'Basic science',  label:'COPD — pathophysiology',             href:'tools/basic-science.html#patho-copd',             syn:'pathophysiology copd emphysema fixed obstruction smoking mechanism' },
  { tool:'Basic science',  label:'Type 2 diabetes — pathophysiology',  href:'tools/basic-science.html#patho-t2dm',             syn:'pathophysiology diabetes t2dm insulin resistance beta cell mechanism' },
  { tool:'Basic science',  label:'Hypothyroidism — pathophysiology',   href:'tools/basic-science.html#patho-hypothyroidism',   syn:'pathophysiology hypothyroid tsh t4 mechanism why' },
  { tool:'Basic science',  label:'Gout — pathophysiology',             href:'tools/basic-science.html#patho-gout',             syn:'pathophysiology gout urate crystal inflammasome il-1 mechanism' },
  { tool:'Basic science',  label:'Osteoporosis — pathophysiology',     href:'tools/basic-science.html#patho-osteoporosis',     syn:'pathophysiology osteoporosis osteoclast resorption bmd mechanism' },
  { tool:'Basic science',  label:'CKD — pathophysiology',              href:'tools/basic-science.html#patho-ckd',              syn:'pathophysiology ckd nephron hyperfiltration proteinuria mechanism' },
  { tool:'Basic science',  label:'GORD & peptic ulcer — pathophysiology',href:'tools/basic-science.html#patho-gord',           syn:'pathophysiology gord reflux peptic ulcer acid h pylori mechanism' },
  { tool:'Basic science',  label:'IBS — pathophysiology',              href:'tools/basic-science.html#patho-ibs',              syn:'pathophysiology ibs brain gut visceral hypersensitivity mechanism' },
  { tool:'Basic science',  label:'Depression — pathophysiology',       href:'tools/basic-science.html#patho-depression',       syn:'pathophysiology depression monoamine serotonin neuroplasticity mechanism' },
  { tool:'Basic science',  label:'Iron-deficiency anaemia — pathophysiology',href:'tools/basic-science.html#patho-ida',        syn:'pathophysiology anaemia iron deficiency microcytic ferritin mechanism' },

  // ---- Basic Science: pharmacodynamics ----
  { tool:'Pharmacology',   label:'ACE inhibitors & ARBs',             href:'tools/basic-science.html#pharma-acei',            syn:'pharmacodynamics ace inhibitor arb ramipril losartan mechanism angiotensin' },
  { tool:'Pharmacology',   label:'Beta-blockers',                     href:'tools/basic-science.html#pharma-betablocker',     syn:'pharmacodynamics beta blocker bisoprolol propranolol mechanism' },
  { tool:'Pharmacology',   label:'Calcium channel blockers',          href:'tools/basic-science.html#pharma-ccb',             syn:'pharmacodynamics calcium channel blocker amlodipine verapamil mechanism' },
  { tool:'Pharmacology',   label:'Diuretics (thiazide & loop)',       href:'tools/basic-science.html#pharma-diuretics',       syn:'pharmacodynamics diuretic thiazide loop furosemide indapamide mechanism' },
  { tool:'Pharmacology',   label:'Statins',                           href:'tools/basic-science.html#pharma-statin',          syn:'pharmacodynamics statin atorvastatin hmg coa ldl mechanism' },
  { tool:'Pharmacology',   label:'DOACs (anticoagulants)',            href:'tools/basic-science.html#pharma-doac',            syn:'pharmacodynamics doac apixaban rivaroxaban factor xa anticoagulant mechanism' },
  { tool:'Pharmacology',   label:'Metformin',                         href:'tools/basic-science.html#pharma-metformin',       syn:'pharmacodynamics metformin ampk hepatic glucose mechanism' },
  { tool:'Pharmacology',   label:'SGLT2 inhibitors',                  href:'tools/basic-science.html#pharma-sglt2',           syn:'pharmacodynamics sglt2 dapagliflozin empagliflozin glucose mechanism' },
  { tool:'Pharmacology',   label:'Levothyroxine',                     href:'tools/basic-science.html#pharma-levothyroxine',   syn:'pharmacodynamics levothyroxine t4 thyroid mechanism' },
  { tool:'Pharmacology',   label:'Inhaled corticosteroids (ICS)',     href:'tools/basic-science.html#pharma-ics',             syn:'pharmacodynamics ics inhaled steroid beclometasone budesonide asthma mechanism' },
  { tool:'Pharmacology',   label:'Bronchodilators (SABA/LABA/LAMA)',  href:'tools/basic-science.html#pharma-laba-lama',       syn:'pharmacodynamics bronchodilator salbutamol tiotropium laba lama beta2 mechanism' },
  { tool:'Pharmacology',   label:'Proton pump inhibitors (PPIs)',     href:'tools/basic-science.html#pharma-ppi',             syn:'pharmacodynamics ppi omeprazole lansoprazole proton pump acid mechanism' },
  { tool:'Pharmacology',   label:'NSAIDs',                            href:'tools/basic-science.html#pharma-nsaid',           syn:'pharmacodynamics nsaid ibuprofen naproxen cox prostaglandin mechanism' },
  { tool:'Pharmacology',   label:'Opioids',                           href:'tools/basic-science.html#pharma-opioids',         syn:'pharmacodynamics opioid morphine codeine mu receptor mechanism' },
  { tool:'Pharmacology',   label:'SSRIs',                             href:'tools/basic-science.html#pharma-ssri',            syn:'pharmacodynamics ssri sertraline citalopram serotonin reuptake mechanism' },
  { tool:'Pharmacology',   label:'Bisphosphonates',                   href:'tools/basic-science.html#pharma-bisphosphonate',  syn:'pharmacodynamics bisphosphonate alendronate osteoclast bone mechanism' },
];

const RGP_ALGORITHMS = [
  { slug:'hypertension', label:"New presentation of high blood pressure", sys:'Cardiovascular', syn:"" },
  { slug:'chest-pain', label:"Chest Pain", sys:'Cardiovascular', syn:"" },
  { slug:'palpitations', label:"Palpitations", sys:'Cardiovascular', syn:"" },
  { slug:'ankle-swelling', label:"Ankle Swelling", sys:'Cardiovascular', syn:"" },
  { slug:'claudication', label:"Intermittent Claudication", sys:'Cardiovascular', syn:"" },
  { slug:'high-cholesterol', label:"High Cholesterol", sys:'Cardiovascular', syn:"hyperlipidaemia dyslipidaemia lipids qrisk" },
  { slug:'leg-cramps', label:"Leg Cramps", sys:'Cardiovascular', syn:"" },
  { slug:'raynauds', label:"Raynaud's Phenomenon", sys:'Cardiovascular', syn:"" },
  { slug:'breathlessness', label:"Breathlessness", sys:'Respiratory', syn:"" },
  { slug:'abdominal-pain', label:"Abdominal Pain", sys:'Gastroenterology', syn:"" },
  { slug:'chronic-diarrhoea', label:"Chronic Diarrhoea", sys:'Gastroenterology', syn:"" },
  { slug:'constipation', label:"Constipation", sys:'Gastroenterology', syn:"" },
  { slug:'dyspepsia', label:"Dyspepsia", sys:'Gastroenterology', syn:"" },
  { slug:'rectal-bleeding', label:"Rectal Bleeding", sys:'Gastroenterology', syn:"" },
  { slug:'diverticulitis', label:"Diverticulitis", sys:'Gastroenterology', syn:"" },
  { slug:'crohns-flare', label:"Crohn's Disease", sys:'Gastroenterology', syn:"crohns disease ibd" },
  { slug:'uc-flare', label:"Ulcerative Colitis", sys:'Gastroenterology', syn:"ulcerative colitis ibd" },
  { slug:'jaundice', label:"Jaundice in Adults", sys:'Gastroenterology', syn:"" },
  { slug:'abnormal-lfts', label:"Abnormal Liver Function Tests", sys:'Gastroenterology', syn:"liver function tests deranged" },
  { slug:'fatty-liver', label:"Fatty Liver Disease", sys:'Gastroenterology', syn:"" },
  { slug:'anal-pain', label:"Anal Pain", sys:'Gastroenterology', syn:"fissure abscess haemorrhoids proctalgia cancer pr examination" },
  { slug:'anal-itchiness', label:"Anal Itchiness (Pruritus Ani)", sys:'Gastroenterology', syn:"pruritus ani itch threadworms dermatitis" },
  { slug:'anal-lumps', label:"Anal Lumps", sys:'Gastroenterology', syn:"haemorrhoids skin tags warts abscess rectal prolapse" },
  { slug:'aki', label:"Acute Kidney Injury", sys:'Renal & Urology', syn:"acute kidney injury" },
  { slug:'ckd', label:"Chronic Kidney Disease", sys:'Renal & Urology', syn:"chronic kidney disease renal" },
  { slug:'haematuria', label:"Haematuria", sys:'Renal & Urology', syn:"" },
  { slug:'renal-colic', label:"Renal Colic", sys:'Renal & Urology', syn:"" },
  { slug:'luts-men', label:"LUTS in Men", sys:'Renal & Urology', syn:"lower urinary tract symptoms prostate bph" },
  { slug:'urinary-incontinence-female', label:"Urinary Incontinence", sys:'Renal & Urology', syn:"stress urge incontinence bladder" },
  { slug:'chronic-testicular-pain', label:"Chronic Testicular Pain", sys:'Renal & Urology', syn:"" },
  { slug:'scrotal-pain', label:"Scrotal Pain / Swelling", sys:'Renal & Urology', syn:"" },
  { slug:'haematospermia', label:"Haematospermia", sys:'Renal & Urology', syn:"" },
  { slug:'undescended-testis', label:"Undescended Testis", sys:'Renal & Urology', syn:"" },
  { slug:'erectile-dysfunction', label:"Erectile Dysfunction", sys:'Renal & Urology', syn:"ed impotence" },
  { slug:'premature-ejaculation', label:"Premature Ejaculation", sys:'Renal & Urology', syn:"" },
  { slug:'testicular-lump', label:"Testicular Lump", sys:'Renal & Urology', syn:"scrotal lump cancer germ cell tumour hydrocele epididymal cyst varicocele uss" },
  { slug:'testicular-pain', label:"Testicular Pain (Acute & Chronic)", sys:'Renal & Urology', syn:"torsion surgical emergency epididymo-orchitis referred orchialgia scrotal" },
  { slug:'t2dm', label:"Type 2 Diabetes Mellitus", sys:'Endocrine', syn:"type 2 diabetes diabetes hba1c" },
  { slug:'hyperthyroidism', label:"Hyperthyroidism", sys:'Endocrine', syn:"" },
  { slug:'hypothyroidism', label:"Hypothyroidism", sys:'Endocrine', syn:"" },
  { slug:'hypercalcaemia', label:"Hypercalcaemia", sys:'Endocrine', syn:"" },
  { slug:'hyponatraemia', label:"Hyponatraemia", sys:'Endocrine', syn:"" },
  { slug:'hypokalaemia', label:"Hypokalaemia", sys:'Endocrine', syn:"" },
  { slug:'gynecomastia', label:"Gynaecomastia", sys:'Endocrine', syn:"gynaecomastia male breast" },
  { slug:'hirsutism', label:"Hirsutism", sys:'Endocrine', syn:"" },
  { slug:'hyperhidrosis', label:"Hyperhidrosis", sys:'Endocrine', syn:"" },
  { slug:'headache', label:"Headache", sys:'Neurology', syn:"" },
  { slug:'tia', label:"TIA", sys:'Neurology', syn:"transient ischaemic attack mini stroke" },
  { slug:'dizziness', label:"Dizziness", sys:'Neurology', syn:"" },
  { slug:'vertigo', label:"Vertigo", sys:'Neurology', syn:"" },
  { slug:'fits-funny-turns', label:"Fits / Funny Turns", sys:'Neurology', syn:"seizure syncope blackout collapse" },
  { slug:'sensory-neuropathy', label:"Sensory Neuropathy", sys:'Neurology', syn:"numbness tingling peripheral neuropathy" },
  { slug:'delirium', label:"Delirium", sys:'Neurology', syn:"" },
  { slug:'psychosis', label:"Psychosis", sys:'Mental Health', syn:"" },
  { slug:'hearing-loss', label:"Hearing Loss", sys:'ENT & Dental', syn:"" },
  { slug:'tinnitus', label:"Tinnitus", sys:'ENT & Dental', syn:"" },
  { slug:'epistaxis', label:"Epistaxis", sys:'ENT & Dental', syn:"" },
  { slug:'neck-lump', label:"Neck Lump", sys:'ENT & Dental', syn:"" },
  { slug:'halitosis', label:"Halitosis", sys:'ENT & Dental', syn:"" },
  { slug:'jaw-pain', label:"Jaw Pain", sys:'ENT & Dental', syn:"" },
  { slug:'red-eye', label:"Red Eye", sys:'Ophthalmology', syn:"" },
  { slug:'blurry-vision', label:"Blurry / Reduced Vision", sys:'Ophthalmology', syn:"" },
  { slug:'vision-loss', label:"Vision Loss", sys:'Ophthalmology', syn:"" },
  { slug:'diplopia', label:"Diplopia", sys:'Ophthalmology', syn:"" },
  { slug:'flashes-floaters', label:"Flashes & Floaters", sys:'Ophthalmology', syn:"posterior vitreous detachment retinal" },
  { slug:'amenorrhoea', label:"Amenorrhoea", sys:'Women’s Health', syn:"" },
  { slug:'dysmenorrhoea', label:"Dysmenorrhoea", sys:'Women’s Health', syn:"" },
  { slug:'irregular-periods', label:"Irregular Periods", sys:'Women’s Health', syn:"" },
  { slug:'menorrhagia', label:"Menorrhagia", sys:'Women’s Health', syn:"" },
  { slug:'mastalgia', label:"Mastalgia", sys:'Women’s Health', syn:"" },
  { slug:'vaginal-bleeding', label:"Vaginal Bleeding", sys:'Women’s Health', syn:"" },
  { slug:'vaginal-discharge', label:"Vaginal Discharge", sys:'Women’s Health', syn:"" },
  { slug:'contraception', label:"Women Requesting Contraception", sys:'Women’s Health', syn:"" },
  { slug:'hrt-menopause', label:"HRT Request with Suspected Menopause", sys:'Women’s Health', syn:"hormone replacement therapy perimenopause" },
  { slug:'nvp', label:"Nausea & Vomiting in Pregnancy", sys:'Women’s Health', syn:"nausea vomiting pregnancy morning sickness hyperemesis" },
  { slug:'pruritus-pregnancy', label:"Itchiness in Pregnancy", sys:'Women’s Health', syn:"" },
  { slug:'dyspareunia', label:"Dyspareunia (Painful Sex)", sys:'Women’s Health', syn:"painful sex superficial deep endometriosis vulvodynia gsm sti vaginismus" },
  { slug:'anaemia', label:"Anaemia", sys:'Haematology', syn:"" },
  { slug:'iron-deficiency', label:"Iron Deficiency", sys:'Haematology', syn:"" },
  { slug:'bruising', label:"Bruising", sys:'Haematology', syn:"" },
  { slug:'thrombocytopenia', label:"Thrombocytopenia", sys:'Haematology', syn:"" },
  { slug:'thrombocytosis', label:"Thrombocytosis", sys:'Haematology', syn:"" },
  { slug:'leucocytosis', label:"Leucocytosis", sys:'Haematology', syn:"" },
  { slug:'leucopenia', label:"Leucopenia", sys:'Haematology', syn:"" },
  { slug:'polycythaemia', label:"Polycythaemia", sys:'Haematology', syn:"" },
  { slug:'back-pain', label:"Acute & Subacute Back Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'neck-pain', label:"Neck Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'sciatica', label:"Sciatica", sys:'Musculoskeletal', syn:"" },
  { slug:'shoulder-pain', label:"Shoulder Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'knee-pain', label:"Knee Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'hip-pain', label:"Hip Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'hand-pain', label:"Hand Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'foot-pain', label:"Foot Pain", sys:'Musculoskeletal', syn:"" },
  { slug:'body-aches', label:"Generalised Body Aches", sys:'Musculoskeletal', syn:"" },
  { slug:'ankle-pain', label:"Ankle Pain", sys:'Musculoskeletal', syn:"ottawa rules sprain achilles rupture gout osteoarthritis" },
  { slug:'elbow-pain', label:"Elbow Pain / Swelling", sys:'Musculoskeletal', syn:"tennis golfer epicondylitis olecranon bursitis cubital tunnel radial head fracture" },
  { slug:'joint-pain', label:"Joint Pain / Swelling", sys:'Musculoskeletal', syn:"septic arthritis inflammatory mechanical rheumatoid gout reactive das28 dmards" },
  { slug:'chronic-back-pain', label:"Chronic Low Back Pain (≥12 Weeks)", sys:'Musculoskeletal', syn:"cauda equina red yellow flags ng59 persistent exercise" },
  { slug:'groin-pain', label:"Groin Pain", sys:'Musculoskeletal', syn:"inguinal hernia hip osteoarthritis adductor strain lymphadenopathy femoral meralgia paraesthetica" },
  { slug:'weight-loss', label:"Unintentional Weight Loss", sys:'General & Systemic', syn:"" },
  { slug:'night-sweats', label:"Night Sweats", sys:'General & Systemic', syn:"" },
  { slug:'widespread-itch', label:"Widespread Itch", sys:'General & Systemic', syn:"" },
  { slug:'hair-loss', label:"Hair Loss", sys:'General & Systemic', syn:"" },
  { slug:'falls', label:"Falls", sys:'General & Systemic', syn:"" },
  { slug:'abdominal-pain-children', label:"Abdominal Pain in Children", sys:'Paediatrics', syn:"" },
  { slug:'constipation-children', label:"Constipation in Children", sys:'Paediatrics', syn:"" },
  { slug:'cough-children', label:"Cough in Children", sys:'Paediatrics', syn:"" },
  { slug:'fever-children', label:"Fever in Children", sys:'Paediatrics', syn:"" },
  { slug:'vomiting-children', label:"Vomiting in Children", sys:'Paediatrics', syn:"" },
  { slug:'uti-children', label:"UTI in Children", sys:'Paediatrics', syn:"" },
  { slug:'limping-children', label:"Limping in Children", sys:'Paediatrics', syn:"" },
  { slug:'paediatric-msk', label:"Paediatric MSK Presentations", sys:'Paediatrics', syn:"limping child joint pain growing pains" },
  { slug:'developmental-delay', label:"Developmental Delay in Children", sys:'Paediatrics', syn:"" },
  { slug:'faltered-growth', label:"Faltered Growth in Children", sys:'Paediatrics', syn:"" },
  { slug:'cows-milk-allergy', label:"Cow's Milk Allergy", sys:'Paediatrics', syn:"cmpa milk protein" },
  { slug:'unsettled-baby', label:"Unsettled Baby", sys:'Paediatrics', syn:"" },
];

function injectPalette(){
  if (document.querySelector('.rgp-palette')) return;
  const PRE = getPathPrefix();

  // ---- Abbreviation map: bidirectional ----
  // The expander appends both directions to each entry's search string,
  // so "ckd" matches "Chronic Kidney Disease" and vice versa.
  const ABBR_MAP = [
    { full:'chronic kidney disease',                 abbr:['ckd'] },
    { full:'hypertension',                            abbr:['htn','high bp','high blood pressure'] },
    { full:'atrial fibrillation',                     abbr:['af','afib','a fib'] },
    { full:'heart failure',                           abbr:['hf','hfref','hfpef','chf'] },
    { full:'type 1 diabetes',                         abbr:['t1dm','type1','dm1'] },
    { full:'type 2 diabetes',                         abbr:['t2dm','type2','dm2'] },
    { full:'chronic obstructive pulmonary disease',   abbr:['copd'] },
    { full:'irritable bowel syndrome',                abbr:['ibs'] },
    { full:'inflammatory bowel disease',              abbr:['ibd'] },
    { full:'ulcerative colitis',                      abbr:['uc'] },
    { full:"crohn's disease",                         abbr:['cd','crohns'] },
    { full:'polycystic ovary syndrome',               abbr:['pcos'] },
    { full:'benign prostatic hyperplasia',            abbr:['bph','enlarged prostate'] },
    { full:'lower urinary tract symptoms',            abbr:['luts'] },
    { full:'gastro-oesophageal reflux disease',       abbr:['gord','gerd','reflux'] },
    { full:'liver function tests',                    abbr:['lft','lfts'] },
    { full:'transient ischaemic attack',              abbr:['tia','mini stroke'] },
    { full:'urinary tract infection',                 abbr:['uti'] },
    { full:'osteoarthritis',                          abbr:['oa'] },
    { full:'rheumatoid arthritis',                    abbr:['ra'] },
    { full:'hormone replacement therapy',             abbr:['hrt'] },
    { full:'benign paroxysmal positional vertigo',    abbr:['bppv'] },
    { full:'tired all the time',                      abbr:['tatt'] },
    { full:'acute coronary syndrome',                 abbr:['acs'] },
    { full:'erectile dysfunction',                    abbr:['ed'] },
    { full:'obstructive sleep apnoea',                abbr:['osa'] },
    { full:'generalised anxiety disorder',            abbr:['gad','gad-7'] },
    { full:'deep vein thrombosis',                    abbr:['dvt'] },
    { full:'pulmonary embolism',                      abbr:['pe'] },
    { full:'low back pain',                           abbr:['lbp','back pain'] },
    { full:'multiple sclerosis',                      abbr:['ms'] },
    { full:'chronic fatigue syndrome',                abbr:['cfs','me'] },
    { full:'heavy menstrual bleeding',                abbr:['hmb','menorrhagia'] },
    { full:'osteoporosis',                            abbr:['op'] },
    { full:'depression',                              abbr:['mdd','low mood'] },
    { full:'urinary incontinence',                    abbr:['ui'] },
    { full:'human immunodeficiency virus',            abbr:['hiv'] },
    { full:'anaemia',                                 abbr:['anemia','low haemoglobin','low hb'] },
    { full:'hyperthyroidism',                         abbr:['overactive thyroid'] },
    { full:'hypothyroidism',                          abbr:['underactive thyroid','hashimotos'] },
    { full:'menopause',                               abbr:['perimenopause','climacteric'] },
    { full:'glycated haemoglobin',                    abbr:['hba1c','a1c'] },
    { full:'ambulatory blood pressure',               abbr:['abpm','24h bp'] },
    { full:'direct oral anticoagulant',               abbr:['doac','noac'] },
    { full:'inhaled corticosteroid',                  abbr:['ics'] },
    { full:'sodium-glucose cotransporter',            abbr:['sglt2'] },
    { full:'glp-1 receptor agonist',                  abbr:['glp1','glp 1'] },
    { full:'estimated glomerular filtration rate',    abbr:['egfr'] },
    { full:'creatinine clearance',                    abbr:['crcl','cockcroft','cockcroft-gault'] },
    { full:'body mass index',                         abbr:['bmi'] },
    { full:'general practitioner',                    abbr:['gp'] },
    { full:'simulated consultation assessment',       abbr:['sca'] },
    { full:'first contact practitioner',              abbr:['fcp'] },
    { full:'evidence-based medicine',                 abbr:['ebm'] },
    { full:'continuing professional development',     abbr:['cpd'] },
  ];

  function expandAbbr(text){
    let s = ' ' + (text || '').toLowerCase() + ' ';
    for (const { full, abbr } of ABBR_MAP) {
      // forward: full present → append abbreviations
      if (s.includes(full)) s += ' ' + abbr.join(' ');
      // reverse: any abbr present as a whole word → append full
      for (const a of abbr) {
        // word-boundary-ish check using surrounding non-letter chars
        const re = new RegExp('(^|[^a-z0-9])' + a.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&') + '([^a-z0-9]|$)');
        if (re.test(s)) s += ' ' + full;
      }
    }
    return s.trim();
  }

  // Build entries
  const entries = [];
  window.RGP_CASES.forEach(grp => {
    grp.items.forEach(it => {
      // Include ALL cases (planned ones too) so users see them in search
      // — planned ones flagged "Soon" in meta and link to a stub anchor on the home page
      const isClickable = (it.status === 'full' || it.status === 'stub');
      const setting = isClickable ? it.setting : (it.setting ? it.setting + ' · Soon' : 'Soon');
      const href = isClickable ? (PRE + it.path) : (PRE + 'index.html#framework');
      // Include id (often an abbreviation like 'afib', 'ckd', 'pcos') + path filename
      const pathStem = (it.path || '').split('/').pop()?.replace(/\.html$/, '').replace(/-/g,' ') || '';
      entries.push({
        type: 'case', group: grp.group, title: it.title, meta: setting,
        href: href,
        search: expandAbbr([it.title, it.setting, grp.group, it.guideline || '', it.status, it.id, pathStem].join(' ')),
      });
    });
  });
  RGP_TOOLS.forEach(t => entries.push({
    type: 'tool', group: 'Tools', title: t.label, meta: t.meta, href: PRE + t.path,
    search: expandAbbr([t.label, t.meta, 'tool'].join(' ')),
  }));
  RGP_NAV_SECTIONS.forEach(s => entries.push({
    type: 'section', group: 'Sections', title: s.label, meta: s.meta, href: PRE + s.path,
    search: expandAbbr([s.label, s.meta, 'section'].join(' ')),
  }));

  // Topic index — fine-grained items inside tools
  RGP_TOPIC_INDEX.forEach(t => entries.push({
    type: 'topic',
    group: t.tool + ' topics',
    title: t.label,
    meta: 'In ' + t.tool,
    href: PRE + t.href,
    search: expandAbbr([t.label, t.tool, t.syn || ''].join(' ')),
  }));

  // Clinical algorithms — every standalone pathway under tools/algorithms/
  RGP_ALGORITHMS.forEach(a => entries.push({
    type: 'algorithm',
    group: 'Algorithms · ' + a.sys,
    title: a.label,
    meta: a.sys + ' pathway',
    href: PRE + 'tools/algorithms/' + a.slug + '.html',
    search: expandAbbr([a.label, a.sys, a.syn || '', 'algorithm pathway flowchart'].join(' ')),
  }));

  entries.push({
    type: 'page', group: 'Site', title: 'Home — Reasoning GP', meta: 'Overview & framework',
    href: PRE + 'index.html', search: 'home overview framework reasoning gp index',
  });

  const el = document.createElement('div');
  el.className = 'rgp-palette';
  el.hidden = true;
  el.innerHTML = `
    <div class="rgp-palette-backdrop" data-close></div>
    <div class="rgp-palette-shell" role="dialog" aria-label="Quick jump" aria-modal="true">
      <div class="rgp-palette-input-wrap">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input class="rgp-palette-input" type="search" placeholder="Jump to a case, tool, or topic…" autocomplete="off" autocorrect="off" spellcheck="false" />
        <kbd>esc</kbd>
      </div>
      <div class="rgp-palette-list" role="listbox"></div>
      <div class="rgp-palette-foot">
        <span><kbd>↑↓</kbd>navigate</span>
        <span><kbd>↵</kbd>open</span>
        <span><kbd>esc</kbd>close</span>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  const input = el.querySelector('.rgp-palette-input');
  const list = el.querySelector('.rgp-palette-list');
  let active = 0;
  let lastFiltered = [];

  function render(q){
    const qq = (q || '').trim().toLowerCase();
    const filtered = qq ?
      entries.filter(e => qq.split(/\s+/).every(token => e.search.includes(token))) :
      entries;
    lastFiltered = filtered;
    if (active >= filtered.length) active = filtered.length - 1;
    if (active < 0) active = 0;

    if (!filtered.length) {
      list.innerHTML = `<div class="rgp-pl-empty">No results for "${q}"</div>`;
      return;
    }
    // Group by category
    const grouped = {};
    filtered.forEach(e => { (grouped[e.group] = grouped[e.group] || []).push(e); });
    let html = '';
    let runningIdx = 0;
    for (const [g, items] of Object.entries(grouped)) {
      html += `<div class="rgp-pl-group">${g}</div>`;
      for (const e of items) {
        const cls = (runningIdx === active) ? 'is-active' : '';
        const icon =
          e.type === 'tool'    ? '🛠' :
          e.type === 'page'    ? '🏠' :
          e.type === 'topic'   ? '🔍' :
          e.type === 'section' ? '📁' :
          e.type === 'algorithm' ? '🗺️' :
          '📋';
        html += `<a class="rgp-pl-item ${cls}" href="${e.href}" data-idx="${runningIdx}">
          <span class="rgp-pl-type">${icon}</span>
          <span class="rgp-pl-mid"><b>${e.title}</b><small>${e.meta}</small></span>
          <span class="rgp-pl-key">↵</span>
        </a>`;
        runningIdx++;
      }
    }
    list.innerHTML = html;
  }

  function openPalette(){
    el.hidden = false;
    input.value = '';
    active = 0;
    render('');
    setTimeout(() => input.focus(), 20);
    document.documentElement.style.overflow = 'hidden';
  }
  function closePalette(){
    el.hidden = true;
    document.documentElement.style.overflow = '';
  }
  window.RGP_openPalette = openPalette;
  window.RGP_closePalette = closePalette;

  // Wire input
  input.addEventListener('input', e => { active = 0; render(e.target.value); });
  input.addEventListener('keydown', e => {
    const items = list.querySelectorAll('.rgp-pl-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      active = Math.min(items.length - 1, active + 1);
      render(input.value);
      list.querySelector('.rgp-pl-item.is-active')?.scrollIntoView({block:'nearest'});
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active = Math.max(0, active - 1);
      render(input.value);
      list.querySelector('.rgp-pl-item.is-active')?.scrollIntoView({block:'nearest'});
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const a = list.querySelector('.rgp-pl-item.is-active');
      if (a) location.href = a.href;
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  // Mouse hover sets active
  list.addEventListener('mousemove', e => {
    const it = e.target.closest('.rgp-pl-item');
    if (!it) return;
    const idx = Number(it.dataset.idx);
    if (idx !== active) { active = idx; render(input.value); }
  });

  // Click close
  el.querySelector('[data-close]').addEventListener('click', closePalette);

  // Global keybinds: Cmd/Ctrl+K, "/"
  document.addEventListener('keydown', e => {
    const tag = (document.activeElement?.tagName || '').toLowerCase();
    const isTyping = tag === 'input' || tag === 'textarea' || tag === 'select' || document.activeElement?.isContentEditable;
    const isMod = e.metaKey || e.ctrlKey;
    if (isMod && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      el.hidden ? openPalette() : closePalette();
    } else if (!isMod && e.key === '/' && !isTyping && el.hidden) {
      e.preventDefault();
      openPalette();
    }
  });
}

/* ============================================================
   RGPAuth — local account engine (device-local; Path A).
   Real register / login / logout / session, SHA-256 hashed
   passwords with per-account salt. Architected as an adapter
   so a real backend (Firebase / Supabase) can drop in later by
   replacing the four async methods — the UI never changes.
   NOTE: device-local only. Not a substitute for server-side
   auth when gating paid or private content. See BACKEND below.
   ============================================================ */
const RGPAuth = (function(){
  const USERS   = 'rgp.auth.users.v1';     // { emailLower: {name,email,stage,salt,hash,created} }
  const SESSION = 'rgp.auth.session.v1';   // emailLower of the signed-in user (local mode)
  const TOKEN   = 'rgp.auth.token.v1';     // bearer token (backend mode)
  const ME      = 'rgp.auth.me.v1';        // cached profile+entitlement (backend mode)

  // When RGP_CONFIG.workerUrl is set, all four methods hit your Cloudflare
  // Worker (secure, multi-device, real entitlement). Otherwise they fall back
  // to the device-local engine below. The UI is identical either way.
  function api(){ const u = (window.RGP_CONFIG||{}).workerUrl; return u ? u.replace(/\/$/,'') : null; }
  function setMe(m){ try { m ? localStorage.setItem(ME, JSON.stringify(m)) : localStorage.removeItem(ME); } catch(e){} }
  function getMe(){ try { return JSON.parse(localStorage.getItem(ME) || 'null'); } catch(e){ return null; } }
  async function apiCall(path, body){
    let token = null; try { token = localStorage.getItem(TOKEN); } catch(e){}
    const res = await fetch(api() + path, {
      method:'POST',
      headers: Object.assign({ 'Content-Type':'application/json' }, token ? { 'Authorization':'Bearer ' + token } : {}),
      body: JSON.stringify(body || {})
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Something went wrong — please try again.');
    return data;
  }
  const BACKEND = {
    async register(d){ const r = await apiCall('/api/auth/register', d); try { localStorage.setItem(TOKEN, r.token); } catch(e){} setMe(r.user); return r.user; },
    async login(d){ const r = await apiCall('/api/auth/login', d); try { localStorage.setItem(TOKEN, r.token); } catch(e){} setMe(r.user); return r.user; },
    logout(){ try { localStorage.removeItem(TOKEN); localStorage.removeItem(ME); } catch(e){} },
    async me(){ const r = await apiCall('/api/auth/me', {}); setMe(r.user); return r.user; }
  };

  function readUsers(){ try { return JSON.parse(localStorage.getItem(USERS) || '{}'); } catch(e){ return {}; } }
  function writeUsers(u){ try { localStorage.setItem(USERS, JSON.stringify(u)); } catch(e){} }
  function pub(u){ return u ? { name:u.name, email:u.email, stage:u.stage, created:u.created, tier:u.tier || 'bronze' } : null; }

  function randSalt(){
    const a = new Uint8Array(16); (crypto.getRandomValues ? crypto : window.msCrypto).getRandomValues(a);
    return [...a].map(b => b.toString(16).padStart(2,'0')).join('');
  }
  async function hashPw(pw, salt){
    if (crypto && crypto.subtle) {
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(salt + ':' + pw));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,'0')).join('');
    }
    // ultra-fallback (very old browsers): non-crypto, still salted
    let h = 0, s = salt + ':' + pw; for (let i=0;i<s.length;i++){ h = (h*31 + s.charCodeAt(i)) >>> 0; } return 'x'+h.toString(16);
  }
  function validEmail(e){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e); }

  async function register({ name, email, password, stage }){
    if (api()) return BACKEND.register({ name, email, password, stage });
    name = (name||'').trim(); email = (email||'').trim().toLowerCase();
    if (!name) throw new Error('Please enter your name.');
    if (!validEmail(email)) throw new Error('Please enter a valid email address.');
    if (!password || password.length < 8) throw new Error('Password must be at least 8 characters.');
    const users = readUsers();
    if (users[email]) throw new Error('An account with this email already exists — try signing in.');
    const salt = randSalt(); const hash = await hashPw(password, salt);
    users[email] = { name, email, stage: stage||'', salt, hash, created: Date.now() };
    writeUsers(users); localStorage.setItem(SESSION, email);
    return pub(users[email]);
  }
  async function login({ email, password }){
    if (api()) return BACKEND.login({ email, password });
    email = (email||'').trim().toLowerCase();
    const u = readUsers()[email];
    if (!u) throw new Error('No account found with that email — create one first.');
    const hash = await hashPw(password, u.salt);
    if (hash !== u.hash) throw new Error('Incorrect password — please try again.');
    localStorage.setItem(SESSION, email);
    return pub(u);
  }
  function logout(){ if (api()) { BACKEND.logout(); return; } try { localStorage.removeItem(SESSION); } catch(e){} }
  function current(){
    if (api()) return pub(getMe());
    try { const e = localStorage.getItem(SESSION); if (!e) return null; return pub(readUsers()[e]); } catch(e){ return null; }
  }
  // Re-check the signed-in user + entitlement from the backend (call on load in backend mode).
  async function refresh(){ if (api() && (function(){ try { return !!localStorage.getItem(TOKEN); } catch(e){ return false; } })()) { try { return await BACKEND.me(); } catch(e){ return null; } } return current(); }
  function tier(){ const u = current(); return (u && u.tier) || 'bronze'; }
  function isPro(){ return tier() !== 'bronze'; }
  // Does the signed-in user have access to a given area? area: 'clinic' | 'sca'
  function hasAccess(area){
    const t = tier();
    if (t === 'platinum') return true;
    if (t === 'silver') return area === 'clinic';
    if (t === 'gold')   return area === 'sca';
    return false; // bronze
  }
  // Admin convenience: download everyone who has signed up ON THIS DEVICE as CSV.
  // (Device-local — true central collection needs a backend.)
  function exportSignups(){
    const rows = Object.values(readUsers()).map(u => ({ name:u.name, email:u.email, stage:u.stage||'', created:new Date(u.created).toISOString() }));
    const csv = ['name,email,stage,created'].concat(rows.map(r => `"${(r.name||'').replace(/"/g,'""')}","${r.email}","${r.stage}","${r.created}"`)).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type:'text/csv' }));
    const a = document.createElement('a'); a.href = url; a.download = 'reasoning-gp-signups.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    return rows;
  }
  // Redeem a discount / free-entry code against the signed-in account.
  async function redeem(code){
    if (!api()) throw new Error('Codes can only be redeemed on the live site.');
    const r = await apiCall('/api/redeem', { code });
    if (r.user) setMe(r.user);
    return r.user;
  }
  function isAdmin(){ const u = current(); return !!(u && u.admin); }
  return { register, login, logout, current, refresh, tier, isPro, hasAccess, exportSignups, redeem, isAdmin };
})();
window.RGPAuth = RGPAuth;

/* ============================================================
   RGPCloud — tiny per-account key/value sync (Worker-backed).
   Used by tools (e.g. Consult Scribe) to keep data across devices.
   No-ops gracefully when signed out or the Worker is unreachable.
   ============================================================ */
/* ============================================================
   RGP paywall gate — members-only access on the LIVE site.
   Arms only when RGP_CONFIG.paywall === true AND the hostname is in
   RGP_CONFIG.paywallHosts (so previews / local copies never lock).
   Access: admin account → everything; platinum → everything;
   silver → clinic pages; gold → SCA pages; bronze / signed-out → locked.
   Free-entry discount codes are redeemed right on the lock screen.
   ============================================================ */
(function(){
  const cfg = window.RGP_CONFIG || {};
  if (cfg.paywall !== true) return;
  const hosts = cfg.paywallHosts || [];
  if (hosts.indexOf(location.hostname) === -1) return;
  if (/[?&]embed=1/.test(location.search) || document.documentElement.hasAttribute('data-rgp-embed')) return; // parent page is gated

  // Pages that stay public (front door, legal, setup, offline shell)
  const p = location.pathname.replace(/\/+$/,'/');
  const isPublic =
    /(^|\/)(index\.html)?$/.test(p) ||
    /(pages\/)?(terms|privacy|about|contact)\.html$/.test(p) ||
    /offline\.html$/.test(p) ||
    /SETUP[^/]*\.html$/i.test(p) ||
    /Reasoning GP - Home\.html$/.test(decodeURIComponent(p));
  if (isPublic) return;

  function pre(){ // path prefix back to site root
    const m = location.pathname.match(/\/(cases|tools|pages)\//);
    if (!m) return '';
    return location.pathname.indexOf('/tools/algorithms/') > -1 || location.pathname.indexOf('/tools/management/') > -1 ? '../../' : '../';
  }
  function area(){ return /sca-/.test(location.pathname) ? 'sca' : 'clinic'; }

  // ---- Free “Trainee” (bronze) taster policy ----
  // A signed-in FREE account may open: Consult Scribe, Articles, Resources,
  // Patient Leaflets, the Consultation Spine, the Casebook & Pathways
  // DIRECTORIES (to browse), and 5 SAMPLE cases + 5 SAMPLE pathways. Everything
  // else (Ask, Prescribing, CPD, other clinic tools, all SCA tools, the
  // management protocols, and non-sample cases/pathways) prompts an upgrade.
  function sampleSet(list, n){ const s = new Set(); for (const x of list){ if (s.size>=n) break; if (x) s.add(x); } return s; }
  const FREE_CASES = (function(){
    const bases = [];
    (window.RGP_CASES||[]).forEach(g => (g.items||[]).forEach(i => {
      if ((i.status==='full'||i.status==='stub') && i.path) bases.push(i.path.split('/').pop());
    }));
    return sampleSet(bases, 5);
  })();
  const FREE_ALGS = sampleSet((typeof RGP_ALGORITHMS!=='undefined'?RGP_ALGORITHMS:[]).map(a => a.slug ? a.slug+'.html' : null), 5);
  // Protocols are individual pages with no global index — curate 5 common samples.
  const FREE_PROTOCOLS = new Set(['hypertension.html','asthma.html','type-2-diabetes.html','gout.html','migraine.html']);
  // SCA sample cases (first 5 in the Hot Seat library) — enforced in-tool by sca-practice.js.
  const FREE_SCA = sampleSet((window.SCA_CASES||[]).map(c => c && c.id), 5);
  window.RGP_FREE_SAMPLES = { cases:[...FREE_CASES], algorithms:[...FREE_ALGS], protocols:[...FREE_PROTOCOLS], scaCases:[...FREE_SCA] };
  // Shared helper so in-tool caps (Hot Seat cases, Scribe monthly limit) can ask
  // “is this a free account that should be capped?”. Only defined on the live
  // paywall host (this IIFE returns early otherwise), so previews stay uncapped.
  window.RGP_PAYWALL = {
    armed: true,
    freeSamples: window.RGP_FREE_SAMPLES,
    isFreeTier: function(){
      if (!window.RGPAuth) return false;
      if (RGPAuth.isAdmin && RGPAuth.isAdmin()) return false;
      return (RGPAuth.tier() || 'bronze') === 'bronze';
    }
  };
  // Returns null if a free account may open this page, else a short reason code.
  function bronzeReason(){
    const path = location.pathname, base = (path.split('/').pop()||'');
    const OPEN = ['scribe.html','articles.html','resources.html','leaflets.html','consultation-spine.html','sca-guide.html'];
    if (OPEN.indexOf(base) > -1) return null;
    if (/\/cases\.html$/.test(path) || /\/tools\/algorithms\.html$/.test(path)) return null; // browse catalogue
    if (/\/cases\//.test(path))             return FREE_CASES.has(base) ? null : 'sample-case';
    if (/\/tools\/algorithms\//.test(path)) return FREE_ALGS.has(base) ? null : 'sample-alg';
    if (/\/tools\/management\.html$/.test(path)) return null;                 // protocols directory (browse)
    if (/\/tools\/management\//.test(path)) return FREE_PROTOCOLS.has(base) ? null : 'sample-protocol';
    if (/sca-practice\.html$/.test(path))    return null;                      // Hot Seat: 5 sample cases (capped in-tool)
    if (/sca-/.test(path))                   return 'sca';
    if (/ask\.html$/.test(path))             return 'ask';
    if (/prescribing\.html$/.test(path))     return 'prescribing';
    if (/cpd\.html$/.test(path))             return 'cpd';
    return 'members';
  }
  function allowed(){
    if (!window.RGPAuth) return true;
    if (RGPAuth.isAdmin && RGPAuth.isAdmin()) return true;
    const t = RGPAuth.tier();
    if (t === 'platinum') return true;
    if (t === 'silver') return area() === 'clinic';
    if (t === 'gold')   return area() === 'sca';
    // bronze / free — must be signed in AND on an allowed page
    if (!RGPAuth.current || !RGPAuth.current()) return false;
    return bronzeReason() === null;
  }
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function overlay(){
    let el = document.querySelector('.rgp-gate');
    if (el) return el;
    el = document.createElement('div');
    el.className = 'rgp-gate';
    el.innerHTML = '<style>'+
      '.rgp-gate{position:fixed;inset:0;z-index:9000;display:grid;place-items:center;padding:20px;background:rgba(28,25,23,.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-family:"DM Sans",system-ui,sans-serif}'+
      '.rgp-gate-card{background:#f6f2e9;border:1px solid #d9d2c4;border-radius:18px;max-width:430px;width:100%;padding:26px 24px;box-shadow:0 30px 70px rgba(0,0,0,.35);max-height:92vh;overflow-y:auto}'+
      '.rgp-gate-ic{font-size:26px;margin-bottom:8px}'+
      '.rgp-gate-card h2{font-family:"Source Serif 4",Georgia,serif;font-size:22px;font-weight:600;color:#1c1917;margin:0 0 6px}'+
      '.rgp-gate-card p{font-size:13.5px;line-height:1.55;color:#57534e;margin:0 0 14px}'+
      '.rgp-gate-btns{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}'+
      '.rgp-gate-btn{display:block;width:100%;text-align:center;font:inherit;font-size:14px;font-weight:700;padding:11px 14px;border-radius:10px;cursor:pointer;text-decoration:none;box-sizing:border-box}'+
      '.rgp-gate-btn.pri{background:#0c4a47;color:#fff;border:1px solid #0c4a47}'+
      '.rgp-gate-btn.sec{background:#fff;color:#0c4a47;border:1px solid #c9c1b2}'+
      '.rgp-gate-code{border-top:1px dashed #d9d2c4;padding-top:13px}'+
      '.rgp-gate-code label{display:block;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#78716c;margin-bottom:6px}'+
      '.rgp-gate-code-row{display:flex;gap:8px}'+
      '.rgp-gate-code input{flex:1;font:inherit;font-size:14px;padding:10px 12px;border:1px solid #c9c1b2;border-radius:10px;background:#fff;text-transform:uppercase;min-width:0}'+
      '.rgp-gate-code button{font:inherit;font-size:13.5px;font-weight:700;padding:10px 16px;border-radius:10px;border:1px solid #0c4a47;background:#0c4a47;color:#fff;cursor:pointer;flex-shrink:0}'+
      '.rgp-gate-err{font-size:12.5px;color:#b91c1c;margin-top:8px;min-height:1em}'+
      '.rgp-gate-err.ok{color:#15803d}'+
      '.rgp-gate-meta{font-size:12px;color:#78716c;margin-top:12px;text-align:center}'+
      '.rgp-gate-meta button{font:inherit;font-size:12px;font-weight:700;color:#0c4a47;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0}'+
      '</style>'+
      '<div class="rgp-gate-card" role="dialog" aria-modal="true"><div class="rgp-gate-ic">🔐</div><div class="rgp-gate-body"></div></div>';
    document.body.appendChild(el);
    return el;
  }

  function render(){
    if (allowed()){
      const g = document.querySelector('.rgp-gate');
      if (g) g.remove();
      document.documentElement.style.overflow = '';
      return;
    }
    const el = overlay();
    document.documentElement.style.overflow = 'hidden';
    const u = window.RGPAuth ? RGPAuth.current() : null;
    const P = pre();
    let html;
    if (!u){
      html = '<h2>This page is for members</h2>'+
        '<p>Reasoning GP is a paid toolkit for GP trainees and GPs. Sign in if you already have a plan — or create a free account, pick a plan, or enter an access code you\u2019ve been given.</p>'+
        '<div class="rgp-gate-btns">'+
        '<button class="rgp-gate-btn pri" data-g-signin type="button">Sign in</button>'+
        '<button class="rgp-gate-btn sec" data-g-signup type="button">Create an account</button>'+
        '<a class="rgp-gate-btn sec" href="'+P+'index.html#subscriptions">See the plans →</a>'+
        '</div>'+
        '<p style="font-size:12px;margin-bottom:0">Have an access code? Create a free account first, then enter it here.</p>';
    } else {
      const t = RGPAuth.tier();
      const wrongArea = (t === 'silver' || t === 'gold');
      const reason = (t === 'bronze') ? bronzeReason() : null;
      const reasonMsg = {
        'sample-case':'You\u2019ve opened a case beyond your 5 free samples.',
        'sample-alg':'You\u2019ve opened a pathway beyond your 5 free samples.',
        'sample-protocol':'You\u2019ve opened a protocol beyond your 5 free samples.',
        'sca':'The SCA exam suite is for Gold or Platinum members.',
        'protocol':'The management protocols are a members feature.',
        'ask':'Ask the assistant is a members feature.',
        'prescribing':'The Prescribing tools are a members feature.',
        'cpd':'CPD tracking is a members feature.',
        'members':'This is a members feature.'
      };
      const head = wrongArea ? 'Your plan doesn\u2019t cover this side'
                 : (t==='bronze' ? 'That\u2019s a members feature' : 'Your account doesn\u2019t have a plan yet');
      const body = wrongArea
          ? (t==='silver' ? 'Silver covers the Clinic toolkit. This is an SCA page — upgrade to Gold or Platinum to unlock it.'
                          : 'Gold covers the SCA exam suite. This is a Clinic page — upgrade to Silver or Platinum to unlock it.')
          : (t==='bronze'
              ? ((reasonMsg[reason]||'This is a members feature.')+' Your free plan still includes Consult Scribe, articles, resources, patient leaflets, the consultation spine, and 5 sample cases &amp; pathways.')
              : 'Pick a plan to unlock the toolkit, or enter an access code if you\u2019ve been given one.');
      html = '<h2>'+head+'</h2>'+
        '<p>'+body+'</p>'+
        '<div class="rgp-gate-btns"><a class="rgp-gate-btn pri" href="'+P+'index.html#subscriptions">See the plans →</a></div>'+
        '<div class="rgp-gate-code"><label>Access code</label>'+
        '<div class="rgp-gate-code-row"><input type="text" placeholder="e.g. RGP-3F9A2C" data-g-code /><button type="button" data-g-redeem>Unlock</button></div>'+
        '<div class="rgp-gate-err" data-g-err></div></div>'+
        '<div class="rgp-gate-meta">Signed in as '+esc(u.email)+' · <button type="button" data-g-out>Sign out</button></div>';
    }
    el.querySelector('.rgp-gate-body').innerHTML = html;
    const q = s => el.querySelector(s);
    if (q('[data-g-signin]')) q('[data-g-signin]').addEventListener('click', () => window.RGP_openAuth && RGP_openAuth('signin'));
    if (q('[data-g-signup]')) q('[data-g-signup]').addEventListener('click', () => window.RGP_openAuth && RGP_openAuth('signup'));
    if (q('[data-g-out]')) q('[data-g-out]').addEventListener('click', () => { RGPAuth.logout(); render(); });
    if (q('[data-g-redeem]')){
      const go = async () => {
        const inp = q('[data-g-code]'), err = q('[data-g-err]');
        const code = (inp.value||'').trim();
        if (!code){ err.textContent = 'Enter the code you were given.'; return; }
        err.classList.remove('ok'); err.textContent = 'Checking\u2026';
        try {
          await RGPAuth.redeem(code);
          err.classList.add('ok'); err.textContent = '\u2713 Unlocked — welcome in!';
          setTimeout(render, 600);
        } catch(e){ err.textContent = e.message || 'That code didn\u2019t work.'; }
      };
      q('[data-g-redeem]').addEventListener('click', go);
      q('[data-g-code]').addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); go(); } });
    }
  }

  function init(){
    render();
    // re-check once the server has confirmed the profile/entitlement
    if (window.RGPAuth && RGPAuth.refresh) RGPAuth.refresh().then(render).catch(()=>{});
    // re-check whenever the auth UI re-renders (sign-in / sign-out)
    if (typeof renderAuthState === 'function'){
      const orig = renderAuthState;
      renderAuthState = function(){ orig(); try { render(); } catch(e){} };
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

window.RGPCloud = (function(){
  function api(){ const u = (window.RGP_CONFIG||{}).workerUrl; return u ? u.replace(/\/$/,'') : null; }
  function token(){ try { return localStorage.getItem('rgp.auth.token.v1'); } catch(e){ return null; } }
  function ready(){ return !!(api() && token()); }
  async function call(k, method, data){
    const res = await fetch(api() + '/api/data?k=' + encodeURIComponent(k), {
      method,
      headers: Object.assign({ 'Content-Type':'application/json' }, { 'Authorization':'Bearer ' + token() }),
      body: method === 'GET' ? undefined : JSON.stringify({ data })
    });
    const d = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(d.error || 'sync failed');
    return d;
  }
  return {
    ready,
    async get(k){ if (!ready()) return null; try { return await call(k, 'GET'); } catch(e){ return null; } },
    async put(k, data){ if (!ready()) return null; try { return await call(k, 'POST', data); } catch(e){ return null; } }
  };
})();

/* ============================================================
   RGPSync — makes the learner's PROGRESS follow their account
   across devices, not just Consult Scribe. Mirrors a small family
   of localStorage progress stores to the Worker (via RGPCloud):
     • rgp.progress.v1         pathway / case “done” ticks
     • rgp-cpd-v1              auto-CPD reading + case log
     • rgp-sca-progress-v1     Hot Seat scorecard attempts
     • rgp-sca-domain-attempts Examiner Marking attempts
     • rgp-sca-attempts-hotseat Hot Seat self-marks
     • rgp-sca-habits          simulator habit flags
     • rgp-akt-srs             qbank spaced-repetition schedule
   Signed out or offline: everything still works locally. On sign-in
   we PULL + MERGE (never overwrite) so a device that already had
   local progress keeps it and gains what the account holds. Merge is
   per-store: statuses take the furthest state, reading time accrues to
   the max, attempt logs union by id/timestamp, schedules keep the newer
   entry. A light poll pushes changes back every few seconds and on hide.
   ============================================================ */
window.RGPSync = (function(){
  var CFG = {
    'rgp.progress.v1':          'rank',
    'rgp-cpd-v1':               'cpd',
    'rgp-sca-progress-v1':      'array',
    'rgp-sca-attempts':         'array',
    'rgp-sca-circuit-history':  'array',
    'rgp-sca-domain-attempts':  'array',
    'rgp-sca-attempts-hotseat': 'array',
    'rgp-sca-habits':           'array',
    'rgp-sca-exm':              'objnew',
    'rgp-akt-srs':              'objnew'
  };
  function ck(k){ return 'store:' + k; }
  function ready(){ return !!(window.RGPCloud && RGPCloud.ready && RGPCloud.ready()); }
  function rd(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } }
  function wr(k,v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
  function hash(k){ try { return localStorage.getItem(k) || ''; } catch(e){ return ''; } }

  var RANK = { '':0, todo:0, seen:1, reading:2, review:2, started:2, done:3, complete:3, completed:3, mastered:4 };
  function mergeRank(a,b){ a=a||{}; b=b||{}; var o=Object.assign({},a),k;
    for(k in b){ if((RANK[b[k]]||0) >= (RANK[o[k]]||0)) o[k]=b[k]; } return o; }
  function mergeCpd(a,b){ a=a||{}; b=b||{}; var o={},ks={},k;
    for(k in a)ks[k]=1; for(k in b)ks[k]=1;
    for(k in ks){ var x=a[k]||{}, y=b[k]||{}, newer=((y.last||0)>=(x.last||0))?y:x;
      o[k]={ href:y.href||x.href, title:y.title||x.title, kind:y.kind||x.kind,
        seconds:Math.max(x.seconds||0, y.seconds||0), visits:Math.max(x.visits||0, y.visits||0),
        first:Math.min(x.first||y.first||Date.now(), y.first||x.first||Date.now()),
        last:Math.max(x.last||0, y.last||0),
        reflection:(newer.reflection || x.reflection || y.reflection || '') }; }
    return o; }
  function idOf(e){ if(!e || typeof e!=='object') return null;
    if(e.id!=null) return 'id:'+e.id;
    var t=e.ts!=null?e.ts:e.t; if(t!=null) return t+'|'+(e.caseId||e.case||e.slug||e.c||''); return null; }
  function tsOf(e){ return (e&&(e.ts||e.t||e.last))||0; }
  function mergeArray(a,b,cap){ a=Array.isArray(a)?a:[]; b=Array.isArray(b)?b:[];
    var m={}, anon=[];
    a.concat(b).forEach(function(e){ var id=idOf(e);
      if(id!=null){ var c=m[id]; if(!c || tsOf(e)>=tsOf(c)) m[id]=e; }
      else if(e) anon.push(e); });
    var out=Object.keys(m).map(function(k){return m[k];}).concat(anon);
    out.sort(function(x,y){ return tsOf(y)-tsOf(x); });
    return out.slice(0, cap||600); }
  function objT(o){ return (o && (o.last||o.due||o.ts||o.updated))||0; }
  function mergeObjNew(a,b){ a=a||{}; b=b||{}; var o=Object.assign({},a),k;
    for(k in b){ if(!(k in o)) o[k]=b[k];
      else if(b[k] && o[k] && typeof b[k]==='object' && typeof o[k]==='object') o[k]= objT(b[k])>=objT(o[k]) ? b[k] : o[k];
      else o[k]=b[k]; }
    return o; }
  var MERGE = { rank:mergeRank, cpd:mergeCpd, array:function(a,b){return mergeArray(a,b,600);}, objnew:mergeObjNew };

  var snap={}, started=false;
  function initSnap(){ for(var k in CFG) snap[k]=hash(k); }

  async function syncOne(k){
    var r = await RGPCloud.get(ck(k));
    var cloud = (r && r.data!=null) ? r.data : null;
    var local = rd(k);
    if(cloud==null && local==null) return false;
    var merged = MERGE[CFG[k]](cloud, local);
    var before = localStorage.getItem(k);
    wr(k, merged); snap[k]=hash(k);
    await RGPCloud.put(ck(k), merged);
    return before !== localStorage.getItem(k);
  }
  async function pull(){
    if(!ready()) return;
    var changed=[];
    for(var k in CFG){ try{ if(await syncOne(k)) changed.push(k); }catch(e){} }
    if(changed.length) try{ window.dispatchEvent(new CustomEvent('rgp-sync-updated', { detail:{ keys:changed } })); }catch(e){}
  }
  async function pushChanged(){
    if(!ready()) return;
    for(var k in CFG){ if(hash(k)!==snap[k]){ try{ await syncOne(k); }catch(e){} } }
  }
  function start(){
    if(started) return; started=true;
    initSnap();
    if(ready()) pull();
    setInterval(pushChanged, 8000);
    document.addEventListener('visibilitychange', function(){ if(document.visibilityState==='hidden') pushChanged(); });
    window.addEventListener('pagehide', function(){ pushChanged(); });
    window.addEventListener('storage', function(e){ if(e && e.key && CFG[e.key]) snap[e.key]=hash(e.key); });
  }
  // Called after a sign-in mid-session: begin the loop (if not already) and pull now.
  function onSignIn(){ start(); pull(); }
  return { start:start, pull:pull, push:pushChanged, onSignIn:onSignIn, ready:ready, config:CFG };
})();

// Reflect signed-in state into the top-nav auth slot (runs on every page).
function renderAuthState(){
  const box = document.querySelector('.rgp-auth'); if (!box) return;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const u = RGPAuth.current();
  if (u) {
    const first = (u.name || '').trim().split(/\s+/)[0] || 'Account';
    const initial = (first[0] || 'U').toUpperCase();
    box.innerHTML = `
      <div class="rgp-acct">
        <button class="rgp-acct-btn" data-acct-toggle type="button" aria-expanded="false">
          <span class="rgp-acct-av">${esc(initial)}</span>
          <span class="rgp-acct-name">${esc(first)}</span>
          <span class="rgp-acct-caret">▾</span>
        </button>
        <div class="rgp-acct-menu" hidden>
          <div class="rgp-acct-hd"><b>${esc(u.name)}</b><small>${esc(u.email)}</small>${u.stage ? `<span class="rgp-acct-stage">${esc(u.stage)}</span>` : ''}</div>
          <a class="rgp-acct-link" href="${getPathPrefix()}tools/sca-weakspots.html">My Readiness</a>
          <button class="rgp-acct-link rgp-acct-logout" data-acct-logout type="button">Log out</button>
        </div>
      </div>`;
    const btn = box.querySelector('[data-acct-toggle]');
    const menu = box.querySelector('.rgp-acct-menu');
    btn.addEventListener('click', e => { e.stopPropagation(); const open = !menu.hidden; menu.hidden = open; btn.setAttribute('aria-expanded', String(!open)); });
    document.addEventListener('click', e => { if (!box.contains(e.target)) { menu.hidden = true; btn.setAttribute('aria-expanded','false'); } });
    box.querySelector('[data-acct-logout]').addEventListener('click', () => { RGPAuth.logout(); renderAuthState(); });
  } else {
    box.innerHTML = `
      <button class="rgp-auth-btn rgp-auth-signin" data-open-auth="signin" type="button" data-i18n="nav.signin">Sign in</button>
      <button class="rgp-auth-btn rgp-auth-signup" data-open-auth="signup" type="button" data-i18n="nav.signup">Sign up</button>`;
    box.querySelectorAll('[data-open-auth]').forEach(b => b.addEventListener('click', () => window.RGP_openAuth?.(b.dataset.openAuth)));
  }
}
window.RGP_renderAuthState = renderAuthState;

/* ---------- AUTO-INIT (replaces legacy sidebar init) ---------- */
function injectCookieBanner(){
  try { if (localStorage.getItem('rgp.cookie.consent.v1')) return; } catch(e){}
  if (document.querySelector('.rgp-cookie')) return;
  const PRE = getPathPrefix();
  const el = document.createElement('div');
  el.className = 'rgp-cookie';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', 'Cookie and storage notice');
  el.innerHTML = `
    <style>
      .rgp-cookie{ position:fixed; left:16px; right:16px; bottom:16px; z-index:2147483000; max-width:560px; margin:0 auto;
        background:#0c2f2d; color:#e7f2f0; border:1px solid rgba(255,255,255,.14); border-radius:14px;
        box-shadow:0 16px 44px rgba(0,0,0,.32); padding:16px 18px; display:flex; gap:14px; align-items:flex-start;
        font-family:'DM Sans',system-ui,sans-serif; animation:rgpCookieIn .3s ease both; }
      @keyframes rgpCookieIn{ from{ opacity:0; transform:translateY(12px); } to{ opacity:1; transform:none; } }
      .rgp-cookie-ic{ font-size:20px; line-height:1.2; flex-shrink:0; }
      .rgp-cookie-body{ flex:1; }
      .rgp-cookie-body p{ font-size:13px; line-height:1.55; margin:0; color:rgba(231,242,240,.86); }
      .rgp-cookie-body a{ color:#ffd99a; text-decoration:underline; text-underline-offset:2px; }
      .rgp-cookie-actions{ display:flex; gap:8px; margin-top:11px; flex-wrap:wrap; }
      .rgp-cookie-btn{ font:inherit; font-size:12.5px; font-weight:700; border-radius:8px; padding:8px 16px; cursor:pointer; border:1px solid transparent; }
      .rgp-cookie-accept{ background:#caa23f; color:#1a1205; }
      .rgp-cookie-accept:hover{ filter:brightness(1.06); }
      .rgp-cookie-essential{ background:transparent; color:#e7f2f0; border-color:rgba(255,255,255,.28); }
      .rgp-cookie-essential:hover{ background:rgba(255,255,255,.08); }
      @media (max-width:520px){ .rgp-cookie{ flex-direction:column; gap:10px; } }
    </style>
    <span class="rgp-cookie-ic" aria-hidden="true">🍪</span>
    <div class="rgp-cookie-body">
      <p>We use essential browser storage to keep you signed in and save your progress on this device. With your consent we may also use analytics to improve the site. See our <a href="${PRE}pages/privacy.html">Privacy Policy</a>.</p>
      <div class="rgp-cookie-actions">
        <button class="rgp-cookie-btn rgp-cookie-accept" type="button" data-consent="all">Accept all</button>
        <button class="rgp-cookie-btn rgp-cookie-essential" type="button" data-consent="essential">Essential only</button>
      </div>
    </div>`;
  el.querySelectorAll('[data-consent]').forEach(b => b.addEventListener('click', () => {
    try { localStorage.setItem('rgp.cookie.consent.v1', JSON.stringify({ choice: b.dataset.consent, ts: Date.now() })); } catch(e){}
    el.style.animation = 'rgpCookieIn .2s ease reverse both';
    setTimeout(() => el.remove(), 200);
  }));
  document.body.appendChild(el);
}
// Whether the user consented to non-essential (analytics) cookies — gate analytics on this.
window.RGP_hasAnalyticsConsent = function(){
  try { const c = JSON.parse(localStorage.getItem('rgp.cookie.consent.v1') || 'null'); return !!c && c.choice === 'all'; } catch(e){ return false; }
};

function injectAuthModal(){
  if (document.querySelector('.rgp-auth-modal')) return;
  const PRE = getPathPrefix();
  const el = document.createElement('div');
  el.className = 'rgp-auth-modal';
  el.hidden = true;
  el.innerHTML = `
    <div class="rgp-auth-backdrop" data-close></div>
    <div class="rgp-auth-shell" role="dialog" aria-modal="true">
      <button class="rgp-auth-close" data-close type="button" aria-label="Close">×</button>
      <div class="rgp-auth-tabs">
        <button class="rgp-auth-tab active" data-tab="signin" type="button">Sign in</button>
        <button class="rgp-auth-tab" data-tab="signup" type="button">Create account</button>
      </div>
      <form class="rgp-auth-form" data-form="signin">
        <h3>Welcome back</h3>
        <p class="rgp-auth-sub">Sign in to continue your SCA preparation.</p>
        <label>Email<input type="email" name="email" required placeholder="you@nhs.net"/></label>
        <label>Password<input type="password" name="password" required placeholder="••••••••"/></label>
        <div class="rgp-auth-err" role="alert"></div>
        <button class="rgp-auth-submit" type="submit">Sign in</button>
        <a class="rgp-auth-forgot" href="#" data-tab-switch="signup">New here? Create an account →</a>
      </form>
      <form class="rgp-auth-form" data-form="signup" hidden>
        <h3>Join Reasoning GP</h3>
        <p class="rgp-auth-sub">Free for trainees — your progress saves to this device.</p>
        <label>Full name<input type="text" name="name" required placeholder="Dr A Trainee"/></label>
        <label>Email<input type="email" name="email" required placeholder="you@nhs.net"/></label>
        <label>Training stage<select name="stage"><option value="">Select…</option><option>ST1</option><option>ST2</option><option>ST3</option><option>Other / qualified GP</option></select></label>
        <label>Password<input type="password" name="password" required minlength="8" placeholder="At least 8 characters"/></label>
        <label class="rgp-auth-check"><input type="checkbox" name="terms" required/> I agree to the <a href="${PRE}pages/terms.html" target="_blank">terms of use</a> &amp; <a href="${PRE}pages/privacy.html" target="_blank">privacy policy</a></label>
        <div class="rgp-auth-err" role="alert"></div>
        <button class="rgp-auth-submit" type="submit">Create my account</button>
      </form>
      <div class="rgp-auth-done" hidden>
        <div class="rgp-auth-done-ic">✓</div>
        <h3>You're in, <span class="rgp-auth-done-name">there</span>.</h3>
        <p class="rgp-auth-done-msg">Your account is saved on this device and your SCA progress, readiness and streaks now sit under your name.</p>
        <button class="rgp-auth-submit" data-close type="button">Start practising</button>
      </div>
      <div class="rgp-auth-foot">
        Questions? <a href="mailto:bassamomda91@gmail.com">Email us</a> · <a href="https://www.linkedin.com/in/bassam-mohamed-646a50116/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  `;
  el.appendChild(document.createElement('style')).textContent = `
    .rgp-auth-err{ color:#b91c1c; font-size:12.5px; line-height:1.45; margin:2px 0 0; }
    .rgp-auth-err:not(:empty){ background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:8px 11px; }
    .rgp-auth-form label select{ display:block; width:100%; font:inherit; font-size:14px; padding:9px 11px; border:1px solid var(--line-2,#d9d2c4); border-radius:9px; background:#fff; color:var(--ink,#15202b); margin-top:5px; }
    .rgp-acct{ position:relative; }
    .rgp-acct-btn{ display:flex; align-items:center; gap:8px; font:inherit; font-weight:700; font-size:13px; color:var(--ink,#15202b); background:#fff; border:1px solid var(--line,#e7e0d1); border-radius:999px; padding:5px 11px 5px 5px; cursor:pointer; }
    .rgp-acct-btn:hover{ border-color:var(--teal,#0c4a47); }
    .rgp-acct-av{ width:26px; height:26px; border-radius:50%; background:var(--teal,#0c4a47); color:#f6f2e9; display:grid; place-items:center; font-size:12px; font-weight:800; }
    .rgp-acct-caret{ font-size:10px; color:var(--muted,#6b7280); }
    .rgp-acct-menu{ position:absolute; right:0; top:calc(100% + 8px); min-width:210px; background:#fff; border:1px solid var(--line,#e7e0d1); border-radius:12px; box-shadow:0 14px 36px rgba(0,0,0,.14); padding:6px; z-index:80; }
    .rgp-acct-hd{ padding:10px 12px 11px; border-bottom:1px solid var(--line,#e7e0d1); margin-bottom:5px; }
    .rgp-acct-hd b{ display:block; font-size:13.5px; color:var(--ink,#15202b); }
    .rgp-acct-hd small{ display:block; font-size:11.5px; color:var(--muted,#6b7280); margin-top:1px; word-break:break-all; }
    .rgp-acct-stage{ display:inline-block; margin-top:7px; font-size:10.5px; font-weight:800; letter-spacing:.04em; text-transform:uppercase; color:var(--teal,#0c4a47); background:var(--teal-soft,#e6efee); border-radius:999px; padding:2px 9px; }
    .rgp-acct-link{ display:block; width:100%; text-align:left; font:inherit; font-size:13px; font-weight:600; color:var(--ink-2,#374151); background:none; border:none; border-radius:8px; padding:9px 12px; cursor:pointer; text-decoration:none; box-sizing:border-box; }
    .rgp-acct-link:hover{ background:var(--bg-soft,#efe9dc); }
    .rgp-acct-logout{ color:#b91c1c; }
  `;
  document.body.appendChild(el);

  function setTab(tab){
    el.querySelectorAll('.rgp-auth-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    el.querySelectorAll('.rgp-auth-form').forEach(f => f.hidden = (f.dataset.form !== tab));
    el.querySelector('.rgp-auth-done').hidden = true;
  }
  function open(tab){
    el.hidden = false;
    setTab(tab || 'signin');
    setTimeout(() => el.querySelector(`[data-form="${tab||'signin'}"] input`)?.focus(), 30);
    document.documentElement.style.overflow = 'hidden';
  }
  function close(){
    el.hidden = true;
    document.documentElement.style.overflow = '';
  }
  window.RGP_openAuth = open;
  window.RGP_closeAuth = close;

  el.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => setTab(b.dataset.tab)));
  el.querySelectorAll('[data-tab-switch]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); setTab(a.dataset.tabSwitch); }));
  el.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', close));
  el.querySelectorAll('.rgp-auth-form').forEach(f => f.addEventListener('submit', async e => {
    e.preventDefault();
    const kind = f.dataset.form;
    const data = new FormData(f);
    const errEl = f.querySelector('.rgp-auth-err');
    const btn = f.querySelector('.rgp-auth-submit');
    if (errEl) errEl.textContent = '';
    const orig = btn.textContent; btn.disabled = true; btn.textContent = (kind === 'signup' ? 'Creating…' : 'Signing in…');
    try {
      let user;
      if (kind === 'signup') user = await RGPAuth.register({ name:data.get('name'), email:data.get('email'), password:data.get('password'), stage:data.get('stage') });
      else user = await RGPAuth.login({ email:data.get('email'), password:data.get('password') });
      const first = (user.name || '').trim().split(/\s+/)[0] || 'there';
      el.querySelector('.rgp-auth-done-name').textContent = first;
      el.querySelector('.rgp-auth-done-msg').textContent = (kind === 'signup')
        ? 'Your account is saved on this device and your SCA progress, readiness and streaks now sit under your name.'
        : 'Welcome back — your saved progress, readiness and streaks are right where you left them.';
      f.reset();
      el.querySelectorAll('.rgp-auth-form').forEach(x => x.hidden = true);
      el.querySelector('.rgp-auth-done').hidden = false;
      renderAuthState();
      try { window.RGPSync && RGPSync.onSignIn(); } catch(e){}
    } catch (err) {
      if (errEl) errEl.textContent = err.message || 'Something went wrong — please try again.';
    } finally {
      btn.disabled = false; btn.textContent = orig;
    }
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !el.hidden) close(); });
  renderAuthState();
}

function injectFooter(){
  if (document.querySelector('.rgp-footer')) return;
  const PRE = getPathPrefix();
  // Mission/vision + subscriptions belong only on the main home page.
  const path = location.pathname;
  const isHome = !/\/(cases|tools|pages)\//.test(path) &&
                 (/(?:^|\/)(index\.html)?$/.test(path));
  const footer = document.createElement('footer');
  footer.className = 'rgp-footer';
  const missionHtml = isHome ? `
    <section class="rgp-footer-mission" id="about" data-screen-label="Mission and vision">
      <div class="rgp-footer-mission-inner">
        <div class="rgp-mv">
          <div class="rgp-mv-eyebrow">Our mission</div>
          <h3>Deliver high-quality care in a <em>practical</em> way — built on understanding and evidence.</h3>
          <p>Help the whole primary care team — in busy clinics, urgent care and out-of-hours, in teaching, tutorials and revision — turn trusted UK guidance into clear, confident decisions at the point of care. When you genuinely understand the reasoning, good day-to-day practice follows, and so does success in exams like the SCA.</p>
        </div>
        <div class="rgp-mv">
          <div class="rgp-mv-eyebrow">Our vision</div>
          <h3>A primary care team that reasons from <em>understanding and evidence</em> — by habit.</h3>
          <p>Every case mapped to NICE CKS or named UK guidance, every tool surfacing the reasoning behind the action, every recommendation linked back to a clear, repeatable framework — so safe, high-quality care reaches every patient, and strong exam performance is simply a reflection of how the team already practises.</p>
        </div>
      </div>
    </section>

    <section class="rgp-footer-subs" id="subscriptions" data-screen-label="Subscriptions">
      <div class="rgp-footer-subs-inner">
        <header class="rgp-subs-head">
          <span class="eyebrow">Subscriptions</span>
          <h2>Four levels — pick what fits</h2>
          <p>Bronze is free forever. Silver is the clinic toolkit, Gold is the full SCA exam suite, Platinum is everything. Switch between monthly and yearly below — yearly saves you money.</p>
        </header>
        <div class="rgp-subs" data-subs>
          <div class="rgp-bill-toggle" role="tablist" aria-label="Billing period" ${(function(){var pl=(window.RGP_CONFIG||{}).paypalPlans||{};return (pl.silver_yearly||pl.gold_yearly||pl.platinum_yearly)?'':'hidden';})()}>
            <button type="button" data-bill="monthly" class="active" role="tab">Monthly</button>
            <button type="button" data-bill="yearly" role="tab">Yearly <span class="rgp-bill-save">save up to 25%</span></button>
          </div>
          <div class="rgp-subs-grid rgp-subs-grid-4">
            <article class="rgp-sub-card rgp-tier-bronze">
              <div class="rgp-tier-badge">🥉 Bronze</div>
              <div class="rgp-sub-name">Taster — Free</div>
              <div class="rgp-sub-price"><span class="price-m">£0<small>/forever</small></span><span class="price-y">£0<small>/forever</small></span></div>
              <p class="rgp-sub-desc">Get a real feel for every section, free for good.</p>
              <ul class="rgp-sub-features">
                <li><b>5 sample cases + 5 sample pathways</b></li>
                <li>Consult Scribe (record → note)</li>
                <li>All articles, resources &amp; patient leaflets</li>
                <li>Consultation Spine + the full <b>SCA Guide</b></li>
                <li class="is-na">Ask the assistant</li>
                <li class="is-na">Prescribing, CPD &amp; other tools</li>
                <li class="is-na">Full Clinic toolkit &amp; SCA suite</li>
              </ul>
              <a class="rgp-sub-cta" href="${PRE}index.html">Start free</a>
            </article>

            <article class="rgp-sub-card rgp-tier-silver">
              <div class="rgp-tier-badge">🥈 Silver</div>
              <div class="rgp-sub-name">Clinic only</div>
              <div class="rgp-sub-price"><span class="price-m">£10<small>/month</small></span><span class="price-y">£100<small>/year</small></span></div>
              <p class="rgp-sub-price-note"><span class="price-m">or £100/year — save £20</span><span class="price-y">that's ~2 months free</span></p>
              <p class="rgp-sub-desc">The full point-of-care clinic toolkit for everyday practice.</p>
              <ul class="rgp-sub-features">
                <li>All 265 pathways &amp; 170+ protocols</li>
                <li>Consultation Spine + Diagnostic Tool</li>
                <li>Ready Prescriptions + EMIS copy-paste</li>
                <li>Medication Chooser · Calculators · Labs</li>
                <li>DVLA · Fit Note · Sick-Day Rules · Scribe</li>
                <li class="is-na">SCA exam suite</li>
              </ul>
              <a class="rgp-sub-cta" href="mailto:bassamomda91@gmail.com?subject=Silver%20(Clinic)%20subscription">Choose Silver</a>
            </article>

            <article class="rgp-sub-card rgp-tier-gold">
              <div class="rgp-tier-badge">🥇 Gold</div>
              <div class="rgp-sub-name">SCA only</div>
              <div class="rgp-sub-price"><span class="price-m">£15<small>/month</small></span><span class="price-y">£100<small>/year</small></span></div>
              <p class="rgp-sub-price-note"><span class="price-m">or £40 / 3 months · £100 / year</span><span class="price-y">vs £40 / 3 months · £15 / month</span></p>
              <p class="rgp-sub-desc">The complete SCA exam-preparation suite.</p>
              <ul class="rgp-sub-features">
                <li>AI Patient Simulator + exam-day mode</li>
                <li>AI Mock Exam Circuit + report card</li>
                <li>Conversation Lab · Playbooks · Drills</li>
                <li>AKT Question Bank + My Readiness</li>
                <li>The Hot Seat — timer · scorecard · AI marking</li>
                <li class="is-na">Clinic toolkit</li>
              </ul>
              <a class="rgp-sub-cta" href="mailto:bassamomda91@gmail.com?subject=Gold%20(SCA)%20subscription">Choose Gold</a>
            </article>

            <article class="rgp-sub-card rgp-tier-platinum is-featured">
              <div class="rgp-tier-badge">💎 Platinum</div>
              <div class="rgp-sub-name">All access</div>
              <div class="rgp-sub-price"><span class="price-m">£20<small>/month</small></span><span class="price-y">£180<small>/year</small></span></div>
              <p class="rgp-sub-price-note"><span class="price-m">or £180/year — save £60</span><span class="price-y">that's 3 months free</span></p>
              <p class="rgp-sub-desc">Everything — the whole Clinic toolkit and the whole SCA suite.</p>
              <ul class="rgp-sub-features">
                <li><b>Everything in Silver</b> (full Clinic)</li>
                <li><b>Everything in Gold</b> (full SCA)</li>
                <li>All 265 pathways · 170+ protocols · every tool</li>
                <li>Progress, readiness &amp; habit tracking</li>
                <li>Priority access to new tools</li>
                <li>Cancel anytime</li>
              </ul>
              <a class="rgp-sub-cta" href="mailto:bassamomda91@gmail.com?subject=Platinum%20(All%20access)%20subscription">Choose Platinum</a>
            </article>
          </div>
        </div>
      </div>
    </section>
` : '';
  footer.innerHTML = `${missionHtml}
    <style id="rgp-foot-css">
      .rgp-footer{ position:relative; margin-top:96px; padding:0; border:0; background:radial-gradient(120% 140% at 12% 0%, #0f5a55 0%, #0c4a47 46%, #093834 100%); overflow:hidden; }
      .rgp-footer::before{ content:""; position:absolute; inset:0 0 auto 0; height:3px; background:linear-gradient(90deg,var(--teal-3,#18746f) 0%,var(--rust,#b54c2b) 55%,var(--mustard,#caa23f) 100%); opacity:.95; }
      .rgp-footer::after{ content:""; position:absolute; right:-160px; top:-120px; width:520px; height:520px; border-radius:50%; background:radial-gradient(circle, rgba(181,76,43,.16) 0%, rgba(181,76,43,0) 70%); pointer-events:none; }
      .rgp-foot-shell{ position:relative; max-width:1180px; margin:0 auto; padding:0 28px; }

      /* Pre-footer CTA band */
      .rgp-foot-cta{ position:relative; margin:46px 0 8px; padding:30px 36px; border-radius:20px; display:flex; align-items:center; justify-content:space-between; gap:28px; flex-wrap:wrap; background:linear-gradient(120deg, rgba(255,255,255,.07), rgba(255,255,255,.02)); border:1px solid rgba(255,255,255,.12); box-shadow:0 18px 44px rgba(0,0,0,.22); }
      .rgp-foot-cta-txt{ min-width:240px; }
      .rgp-foot-cta-eyebrow{ font-size:11.5px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; color:#e9c7b6; display:inline-flex; align-items:center; gap:9px; }
      .rgp-foot-cta-eyebrow::before{ content:""; width:20px; height:1px; background:currentColor; opacity:.8; }
      .rgp-foot-cta h3{ font-family:'Source Serif 4',Georgia,serif; font-weight:500; font-size:clamp(20px,2.4vw,27px); line-height:1.16; color:#fff; margin:11px 0 0; letter-spacing:-.01em; }
      .rgp-foot-cta h3 em{ font-style:italic; color:#e9c7b6; }
      .rgp-foot-cta-actions{ display:flex; gap:12px; flex-wrap:wrap; }
      .rgp-foot-btn{ display:inline-flex; align-items:center; gap:9px; padding:12px 22px; border-radius:99px; font-size:14.5px; font-weight:600; text-decoration:none; transition:transform .15s, background .15s, box-shadow .15s; }
      .rgp-foot-btn svg{ width:16px; height:16px; }
      .rgp-foot-btn.is-primary{ background:var(--rust,#b54c2b); color:#fff; box-shadow:0 10px 26px rgba(181,76,43,.34); }
      .rgp-foot-btn.is-primary:hover{ background:var(--rust-2,#9b3e22); transform:translateY(-2px); }
      .rgp-foot-btn.is-ghost{ background:rgba(255,255,255,.08); color:#fff; border:1px solid rgba(255,255,255,.22); }
      .rgp-foot-btn.is-ghost:hover{ background:rgba(255,255,255,.16); transform:translateY(-2px); }

      .rgp-footer-cols{ display:grid; grid-template-columns:1.7fr 1fr 1fr 1.3fr; gap:0; max-width:1180px; margin:0 auto; padding:30px 28px 6px; box-sizing:border-box; }
      .rgp-footer-cols .rgp-foot-col,.rgp-footer-cols .rgp-foot-supportcol{ padding:2px 0 2px 44px; border-left:1px solid rgba(255,255,255,.1); }
      .rgp-footer-cols .rgp-foot-brand{ padding-right:44px; }
      .rgp-foot-brand-row{ display:flex; align-items:center; gap:12px; }
      .rgp-foot-mark{ width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-family:'Source Serif 4',Georgia,serif;font-weight:600;font-size:24px;color:var(--teal,#0c4a47);background:#f3ede0; position:relative; box-shadow:0 6px 18px rgba(0,0,0,.2); }
      .rgp-foot-mark::after{ content:""; position:absolute; right:-3px; bottom:-3px; width:12px; height:12px; border-radius:50%; background:var(--rust,#b54c2b); border:2px solid #0c4a47; }
      .rgp-foot-brand-name{ font-family:'Source Serif 4',Georgia,serif; font-weight:500; font-size:20px; color:#fff; letter-spacing:-.01em; }
      .rgp-foot-brand-tag{ font-size:10.5px; color:var(--teal-soft,#d5e6e4); margin-top:2px; letter-spacing:.08em; text-transform:uppercase; }
      .rgp-foot-about{ font-size:13px; line-height:1.68; color:rgba(231,242,240,.74); margin:16px 0 14px; max-width:340px; }
      .rgp-foot-microtag{ display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:600; color:#fff; padding:7px 14px; border-radius:99px; background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.13); }
      .rgp-foot-microtag::before{ content:""; width:7px; height:7px; border-radius:50%; background:var(--mustard,#caa23f); }
      .rgp-footer-cols h5{ font-size:11.5px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#fff; margin:0 0 18px; display:flex; align-items:center; gap:9px; }
      .rgp-footer-cols h5::before{ content:""; width:16px; height:2px; border-radius:2px; background:var(--rust,#b54c2b); }
      .rgp-footer-cols .rgp-foot-col ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:12px; }
      .rgp-footer-cols .rgp-foot-col a{ font-size:13.5px; color:rgba(231,242,240,.78); text-decoration:none; display:inline-flex; align-items:center; gap:7px; transition:color .15s, transform .15s; }
      .rgp-footer-cols .rgp-foot-col a::before{ content:'›'; font-size:15px; color:rgba(255,255,255,.34); transition:transform .15s,color .15s; }
      .rgp-footer-cols .rgp-foot-col a[target]::before{ content:'↗'; font-size:12px; }
      .rgp-footer-cols .rgp-foot-col a:hover{ color:#fff; }
      .rgp-footer-cols .rgp-foot-col a:hover::before{ color:var(--mustard,#caa23f); transform:translateX(2px); }
      .rgp-foot-contact{ display:flex; flex-direction:column; gap:12px; margin-top:22px; padding-top:20px; border-top:1px solid rgba(255,255,255,.12); }
      .rgp-foot-contact-link{ display:flex; align-items:center; gap:12px; text-decoration:none; }
      .rgp-foot-ci{ width:40px;height:40px;border-radius:11px;flex:none;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.12);transition:background .15s,transform .15s; }
      .rgp-foot-ci svg{ width:19px; height:19px; }
      .rgp-foot-contact-link:hover .rgp-foot-ci{ background:rgba(255,255,255,.18); transform:translateY(-2px); }
      .rgp-foot-ct{ display:flex; flex-direction:column; line-height:1.3; }
      .rgp-foot-ct small{ font-size:10.5px; text-transform:uppercase; letter-spacing:.07em; color:var(--teal-soft,#d5e6e4); }
      .rgp-foot-ct b{ font-size:13.5px; font-weight:600; color:rgba(255,255,255,.9); transition:color .15s; }
      .rgp-foot-contact-link:hover .rgp-foot-ct b{ color:#fff; }
      .rgp-foot-legal{ position:relative; margin-top:26px; border-top:1px solid rgba(255,255,255,.1); background:rgba(0,0,0,.16); }
      .rgp-foot-legal-inner{ max-width:1180px; margin:0 auto; padding:26px 28px 30px; text-align:center; }
      .rgp-foot-legal-copy{ font-size:13px; font-weight:600; color:rgba(255,255,255,.86); }
      .rgp-foot-legal-disc{ font-size:12px; line-height:1.7; color:rgba(231,242,240,.5); max-width:900px; margin:12px auto 0; }
      .rgp-foot-legal-company{ font-size:12px; line-height:1.6; color:rgba(231,242,240,.62); max-width:900px; margin:10px auto 0; }
      .rgp-foot-fill{ background:rgba(202,162,63,.18); border:1px solid rgba(202,162,63,.4); border-radius:5px; padding:0 6px; color:#ffe6a8; }
      .rgp-foot-legal-links{ display:flex; gap:8px 20px; justify-content:center; flex-wrap:wrap; margin-top:16px; }
      .rgp-foot-legal-links a{ font-size:12.5px; color:var(--teal-soft,#d5e6e4); text-decoration:none; }
      .rgp-foot-legal-links a:hover{ color:#fff; text-decoration:underline; text-underline-offset:2px; }
      @media (max-width:880px){
        .rgp-foot-cta{ padding:24px 24px; }
        .rgp-footer-cols{ grid-template-columns:1fr 1fr; gap:34px 28px; padding:24px 28px 6px; }
        .rgp-footer-cols .rgp-foot-brand{ grid-column:1 / -1; padding-right:0; }
        .rgp-footer-cols .rgp-foot-col,.rgp-footer-cols .rgp-foot-supportcol{ padding-left:0; border-left:0; }
      }
      @media (max-width:520px){ .rgp-footer-cols{ grid-template-columns:1fr; gap:30px 0; padding:24px 22px 6px; } .rgp-foot-cta-actions{ width:100%; } .rgp-foot-btn{ flex:1; justify-content:center; } }
    </style>
    <div class="rgp-foot-shell">
      <div class="rgp-foot-cta">
        <div class="rgp-foot-cta-txt">
          <span class="rgp-foot-cta-eyebrow">Reason it through. Every case.</span>
          <h3>One framework for the <em>clinic</em> and the <em>SCA</em>.</h3>
        </div>
        <div class="rgp-foot-cta-actions">
          <a class="rgp-foot-btn is-primary" href="${PRE}index.html">Explore the tools <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
          <a class="rgp-foot-btn is-ghost" href="${PRE}pages/ask.html">Ask the assistant</a>
        </div>
      </div>
    </div>
    <div class="rgp-footer-cols">
      <div class="rgp-foot-brand">
        <div class="rgp-foot-brand-row">
          <div class="rgp-foot-mark">R</div>
          <div>
            <div class="rgp-foot-brand-name">Reasoning GP</div>
            <div class="rgp-foot-brand-tag">SCA · Clinical reasoning · UK</div>
          </div>
        </div>
        <p class="rgp-foot-about">A UK-focused clinical reasoning platform for GP trainees, qualified GPs and SCA candidates — built case by case around one repeatable 7-step framework, every recommendation anchored to NICE CKS or named UK guidance.</p>
        <div class="rgp-foot-microtag">Anchored to NICE CKS</div>
      </div>

      <div class="rgp-foot-col">
        <h5>Clinical</h5>
        <ul>
          <li><a href="${PRE}index.html#framework">The 7-step framework</a></li>
          <li><a href="${PRE}pages/ask.html">Ask the assistant</a></li>
          <li><a href="${PRE}tools/algorithms.html">Pathways</a></li>
          <li><a href="${PRE}tools/management.html">Protocols</a></li>
          <li><a href="${PRE}tools/prescriptions.html">Ready Prescriptions</a></li>
        </ul>
      </div>

      <div class="rgp-foot-col">
        <h5>SCA</h5>
        <ul>
          <li><a href="${PRE}tools/sca-guide.html">The SCA Guide</a></li>
          <li><a href="${PRE}tools/sca-practice.html">The Hot Seat</a></li>
          <li><a href="${PRE}tools/sca-simulator.html">AI Patient Simulator</a></li>
          <li><a href="${PRE}tools/sca-circuit-ai.html">AI Mock Exam Circuit</a></li>
          <li><a href="${PRE}tools/sca-circuit.html">Mock Exam Circuit</a></li>
          <li><a href="${PRE}tools/sca-qbank.html">AKT Question Bank</a></li>
          <li><a href="${PRE}tools/sca-worked-examples.html">Worked Example Consultations</a></li>
          <li><a href="${PRE}tools/sca-comms-lab.html">Conversation Lab</a></li>
          <li><a href="${PRE}tools/sca-consultation-guide.html">Ultimate Consultation Guide</a></li>
          <li><a href="${PRE}tools/sca-weakspots.html">My Readiness</a></li>
          <li><a href="${PRE}tools/sca-drills.html">Micro-Drills</a></li>
          <li><a href="${PRE}tools/sca-resit.html">The Resit Clinic</a></li>
          <li><a href="${PRE}tools/sca-daily.html">The Daily 10</a></li>
        </ul>
      </div>

      <div class="rgp-foot-col rgp-foot-info">
        <h5>Information</h5>
        <ul>
          <li><a href="${PRE}index.html#subscriptions">Subscriptions</a></li>
          <li><a href="${PRE}pages/cpd.html">CPD</a></li>
          <li><a href="${PRE}tools/governance.html">Guideline review</a></li>
          <li><a href="${PRE}index.html#about">About us</a></li>
          <li><a href="${PRE}pages/terms.html">Terms of Use</a></li>
          <li><a href="${PRE}pages/privacy.html">Privacy Policy</a></li>
          <li><a href="${PRE}pages/disclaimer.html">Medical Disclaimer</a></li>
          <li><a href="mailto:bassamomda91@gmail.com?subject=Reasoning%20GP%20enquiry">Contact us</a></li>
        </ul>
        <div class="rgp-foot-contact">
          <a class="rgp-foot-contact-link" href="https://www.linkedin.com/in/bassam-mohamed-646a50116/" target="_blank" rel="noopener noreferrer">
            <span class="rgp-foot-ci"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></span>
            <span class="rgp-foot-ct"><small>Founder · LinkedIn</small><b>Dr Bassam Mohamed</b></span>
          </a>
          <a class="rgp-foot-contact-link" href="mailto:bassamomda91@gmail.com">
            <span class="rgp-foot-ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
            <span class="rgp-foot-ct"><small>Email</small><b>bassamomda91@gmail.com</b></span>
          </a>
        </div>
      </div>
    </div>

    <div class="rgp-foot-legal">
      <div class="rgp-foot-legal-inner">
        <div class="rgp-foot-legal-copy">© ${new Date().getFullYear()} Reasoning GP · All rights reserved.</div>
        <p class="rgp-foot-legal-company">Company number 16892799</p>
        <p class="rgp-foot-legal-disc">Reasoning GP is an independent clinical-reasoning and medical-education platform created by practising UK GPs. The content is intended for healthcare professionals as an educational resource and must not replace clinical judgement or official national/local guidance. Users are responsible for verifying all information against current standards.</p>
        <div class="rgp-foot-legal-links">
          <a href="mailto:bassamomda91@gmail.com">Contact</a>
          <a href="${PRE}pages/privacy.html">Privacy</a>
          <a href="${PRE}pages/terms.html">Terms</a>
          <a href="${PRE}pages/disclaimer.html">Disclaimer</a>
          <a href="https://www.linkedin.com/in/bassam-mohamed-646a50116/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
  // Wire the monthly/yearly billing toggle (subscriptions section, home only)
  const subs = footer.querySelector('[data-subs]');
  if (subs) {
    subs.querySelectorAll('[data-bill]').forEach(b => b.addEventListener('click', () => {
      subs.classList.toggle('bill-yearly', b.dataset.bill === 'yearly');
      subs.querySelectorAll('[data-bill]').forEach(x => x.classList.toggle('active', x === b));
    }));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Apply mode class (clear any stale/hardcoded mode-* first)
  document.body.classList.remove('mode-clinic','mode-both','mode-sca');
  document.body.classList.add('mode-' + getMode());
  // Embed mode (?embed=1): the page is hosted inside a hub iframe — drop the
  // top nav, footer, cookie banner, sidebar and install pill so only the tool
  // panel shows. The host hub page owns the chrome.
  // Embed is signalled either by ?embed=1 (URL navigation) OR a data-rgp-embed
  // attribute on <html> — the latter lets hub pages render a sub-tool inline via
  // an iframe `srcdoc` (which has no query string but executes scripts normally,
  // and isn't blocked by X-Frame-Options the way a framed URL is).
  const RGP_EMBED = /[?&]embed=1/.test(location.search) || document.documentElement.hasAttribute('data-rgp-embed');
  if (RGP_EMBED){
    document.documentElement.classList.add('rgp-embed');
    document.body.classList.add('rgp-embed');
    const es = document.createElement('style'); es.id = 'rgp-embed-css';
    es.textContent = '.rgp-embed .rgp-nav,.rgp-embed .rgp-footer,.rgp-embed .sb-toggle,.rgp-embed .sb-overlay,.rgp-embed .sidebar,.rgp-embed .rgp-install,.rgp-embed .rgp-cookie,.rgp-embed .tool-breadcrumb{display:none!important}.rgp-embed .app{display:block!important}.rgp-embed .main{margin:0!important}.rgp-embed .tool-page{padding:0!important}.rgp-embed .panel{padding-top:4px!important}html.rgp-embed{scroll-padding-top:0!important;background:transparent}.rgp-embed body{background:transparent!important}';
    document.head.appendChild(es);
    document.documentElement.style.scrollPaddingTop = '0px';
  } else {
    document.body.classList.add('rgp-topnav');
    // Anchor jumps (in-page nav, "SCA Ref"/"Clinic Ref" links) should land below
    // the fixed two-row top nav, not behind it.
    document.documentElement.style.scrollPaddingTop = '128px';
  }
  // Fallback for the SCA scorecard border colour on older case pages that use
  // var(--af-bd) but never define it inline (newer pages get it from style.css).
  if (!getComputedStyle(document.documentElement).getPropertyValue('--af-bd').trim()) {
    document.documentElement.style.setProperty('--af-bd', '#cbd5e1');
  }

  // Repair malformed case pages. Some case files never close Step 7 / the clinic
  // summary, so the SCA "Consultation Blueprint" ends up nested INSIDE the
  // (mode-hidden) clinic summary, and the SCA scorecard + reference cards get
  // trapped inside the collapsible Management step. Lift them out to page level
  // (order: Scorecard → Clinic summary → SCA summary) and add a section-nav link
  // for the scorecard so it reads as its own section under Management.
  (function repairCaseEnd(){
    const clinic = document.getElementById('sum-clinic');
    const sca = document.getElementById('sum-sca');
    const scorecard = document.querySelector('.scorecard-wrap');
    if (!clinic && !sca && !scorecard) return;

    // 1) Un-nest the SCA summary if it sits inside the clinic summary.
    if (clinic && sca && clinic.contains(sca)) clinic.parentNode.insertBefore(sca, clinic.nextSibling);

    // 2) Collect the end-of-case blocks (in desired page order). The scorecard
    //    carries its preceding sub-divider heading with it.
    const blocks = [];
    if (scorecard) {
      const head = scorecard.previousElementSibling;
      if (head && head.classList && head.classList.contains('sub-divider')) blocks.push(head);
      blocks.push(scorecard);
    }
    if (clinic) blocks.push(clinic);
    if (sca) blocks.push(sca);

    // 3) If any block is trapped inside a collapsible step, lift them all out to
    //    page level, just after that step, preserving order.
    let step = null;
    blocks.forEach(b => { const s = b.closest && b.closest('.step-wrap'); if (s) step = s; });
    if (step && step.parentNode) {
      const host = step.parentNode;
      let ref = step.nextSibling;
      blocks.forEach(node => { host.insertBefore(node, ref); ref = node.nextSibling; });
    }

    // 4) Give the scorecard a stable anchor id, and add a section-nav link for it
    //    right after Management (#s7), shown only in the SCA view.
    if (scorecard) {
      if (!scorecard.id) scorecard.id = 'sca-scorecard';
      const nav = document.querySelector('.tb-nav');
      if (nav && !nav.querySelector('a[href="#sca-scorecard"]')) {
        const a = document.createElement('a');
        a.href = '#sca-scorecard';
        a.className = 'sca-only';
        a.textContent = '📋 Scorecard';
        const mgmt = nav.querySelector('a[href="#s7"]');
        if (mgmt) mgmt.insertAdjacentElement('afterend', a); else nav.appendChild(a);
      }
      // 5) Make the scorecard collapsible (compressible) — header toggles the body,
      //    default collapsed so it reads as a heading you expand to use.
      if (!scorecard.dataset.collapsible) {
        const hdr = scorecard.querySelector('.scorecard-hdr');
        if (hdr) {
          scorecard.dataset.collapsible = '1';
          const cbody = document.createElement('div');
          cbody.className = 'sc-collapse-body';
          let n = hdr.nextSibling;
          while (n) { const nx = n.nextSibling; cbody.appendChild(n); n = nx; }
          scorecard.appendChild(cbody);
          const chev = document.createElement('span');
          chev.textContent = '▼';
          chev.style.cssText = 'margin-left:8px;color:#fff;font-size:12px;transition:transform .2s ease;flex-shrink:0';
          hdr.appendChild(chev);
          hdr.style.cursor = 'pointer';
          let collapsed = false;
          const setC = (c) => { collapsed = c; cbody.style.display = c ? 'none' : ''; chev.style.transform = c ? 'rotate(-90deg)' : ''; };
          setC(true);
          hdr.addEventListener('click', (e) => { if (e.target.closest('.sc-reset-btn')) return; setC(!collapsed); });
        }
      }
    }
  })();

  // Inject favicon (Option A — packaged at assets/logo.svg)
  if (!document.querySelector('link[rel="icon"]')) {
    const PRE = getPathPrefix();
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = PRE + 'assets/logo.svg';
    document.head.appendChild(link);
  }

  // Find activeId from legacy <aside class="sidebar" data-active-id="...">
  const legacy = document.querySelector('.sidebar');
  const activeId = legacy?.dataset.activeId || null;

  // Inject topnav as first child of body
  if (!RGP_EMBED && !document.querySelector('.rgp-nav')) {
    const header = document.createElement('header');
    header.className = 'rgp-nav';
    header.innerHTML = renderTopNav(activeId);
    document.body.insertBefore(header, document.body.firstChild);
    wireTopNav(header);
    applyNavOrder(getMode());
    // Backend mode: refresh profile + entitlement from the server, then re-render.
    if ((window.RGP_CONFIG||{}).workerUrl && RGPAuth && RGPAuth.refresh) {
      RGPAuth.refresh().then(() => { try { renderAuthState(); } catch(e){} try { window.RGPSync && RGPSync.start(); } catch(e){} }).catch(()=>{});
    } else {
      try { window.RGPSync && RGPSync.start(); } catch(e){}
    }
  }

  // Inject command palette modal
  injectPalette();
  // Inject auth modal
  injectAuthModal();

  // Inject global footer
  if (!RGP_EMBED) injectFooter();

  // Cookie / storage consent banner
  if (!RGP_EMBED) injectCookieBanner();

  // Add subtle shadow on scroll
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const nav = document.querySelector('.rgp-nav');
    if (nav) {
      if (y > 8 && lastY <= 8) nav.style.boxShadow = 'var(--shadow-1)';
      else if (y <= 8 && lastY > 8) nav.style.boxShadow = '';
    }
    lastY = y;
  }, { passive: true });
});

/* ============================================================
   PWA bootstrap — installable app + offline support.
   Runs on EVERY page (site.js is loaded site-wide). It:
     1. Resolves the site root from this script's own URL, so it
        works at any folder depth (root, /tools/, /tools/algorithms/,
        /cases/, /pages/) — more robust than getPathPrefix().
     2. Injects the web-app manifest + iOS/Android meta + icons
        into <head> if not already present.
     3. Registers the root-scoped service worker for offline use.
   ============================================================ */
(function setupPWA(){
  try {
    if (location.protocol !== 'http:' && location.protocol !== 'https:') return;

    // Locate this script to anchor all PWA paths to the site root.
    var sjs = document.currentScript ||
      Array.prototype.slice.call(document.querySelectorAll('script[src]'))
        .filter(function(s){ return /assets\/site\.js(\?|$)/.test(s.getAttribute('src') || ''); }).pop();
    if (!sjs) return;
    var ROOT = new URL('../', sjs.src);          // assets/ -> site root
    var at = function(p){ return new URL(p, ROOT).href; };

    var head = document.head || document.getElementsByTagName('head')[0];
    function ensure(selector, build){
      if (document.querySelector(selector)) return;
      head.appendChild(build());
    }
    function meta(name, content){
      var m = document.createElement('meta'); m.name = name; m.content = content; return m;
    }
    function linkEl(rel, href, extra){
      var l = document.createElement('link'); l.rel = rel; l.href = href;
      if (extra) Object.keys(extra).forEach(function(k){ l.setAttribute(k, extra[k]); });
      return l;
    }

    // Web app manifest
    ensure('link[rel="manifest"]', function(){ return linkEl('manifest', at('manifest.json')); });
    // Theme + iOS standalone behaviour
    ensure('meta[name="theme-color"]', function(){ return meta('theme-color', '#0c4a47'); });
    ensure('meta[name="apple-mobile-web-app-capable"]', function(){ return meta('apple-mobile-web-app-capable', 'yes'); });
    ensure('meta[name="mobile-web-app-capable"]', function(){ return meta('mobile-web-app-capable', 'yes'); });
    ensure('meta[name="apple-mobile-web-app-status-bar-style"]', function(){ return meta('apple-mobile-web-app-status-bar-style', 'black-translucent'); });
    ensure('meta[name="apple-mobile-web-app-title"]', function(){ return meta('apple-mobile-web-app-title', 'Reasoning GP'); });
    // Home-screen icon for iOS
    ensure('link[rel="apple-touch-icon"]', function(){ return linkEl('apple-touch-icon', at('assets/icons/apple-touch-icon.png')); });

    // Register the service worker (root scope) once the page is idle.
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function(){
        navigator.serviceWorker.register(at('service-worker.js'), { scope: ROOT.href })
          .catch(function(err){ console.warn('[PWA] service worker registration failed:', err); });
      });
    }
  } catch (err) {
    console.warn('[PWA] bootstrap skipped:', err);
  }
})();

/* ---- "Install app" affordance (Add to Home Screen) ----
   Shows a small, dismissible pill that installs the PWA. Android/Chromium use
   the captured beforeinstallprompt; iOS Safari (no such event) gets a short
   "tap Share → Add to Home Screen" instruction sheet. Hidden when already
   installed (standalone) or previously dismissed. */
(function(){
  if (window.__rgpInstall) return; window.__rgpInstall = 1;
  if (/[?&]embed=1/.test(location.search) || document.documentElement.hasAttribute('data-rgp-embed')) return;   // no install pill inside hub iframes
  var DISMISS_KEY = 'rgp-install-dismissed-v1';

  function standalone(){
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
           window.navigator.standalone === true;
  }
  function dismissed(){ try{ return localStorage.getItem(DISMISS_KEY)==='1'; }catch(e){ return false; } }
  function setDismissed(){ try{ localStorage.setItem(DISMISS_KEY,'1'); }catch(e){} }
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  var isSafari = isIOS && /safari/i.test(navigator.userAgent) && !/crios|fxios|edgios/i.test(navigator.userAgent);

  if (standalone() || dismissed()) return;

  var deferred = null, pill = null;

  function injectCss(){
    if (document.getElementById('rgp-install-css')) return;
    var s = document.createElement('style'); s.id='rgp-install-css';
    s.textContent =
      '.rgp-install{position:fixed;left:50%;transform:translateX(-50%) translateY(140%);bottom:calc(16px + env(safe-area-inset-bottom));z-index:9000;display:flex;align-items:center;gap:11px;'+
      'background:#0c4a47;color:#f3ede0;border-radius:14px;padding:11px 12px 11px 15px;box-shadow:0 14px 40px rgba(8,40,38,.4);max-width:calc(100vw - 24px);transition:transform .42s cubic-bezier(.2,.9,.3,1.2);font-family:inherit;}'+
      '.rgp-install.show{transform:translateX(-50%) translateY(0);}'+
      '.rgp-install .ri-ic{font-size:20px;line-height:1;flex:0 0 auto;}'+
      '.rgp-install .ri-tx{display:flex;flex-direction:column;line-height:1.25;min-width:0;}'+
      '.rgp-install .ri-tx b{font-size:13.5px;font-weight:700;}'+
      '.rgp-install .ri-tx small{font-size:11.5px;opacity:.82;}'+
      '.rgp-install .ri-go{flex:0 0 auto;font:inherit;font-size:13px;font-weight:700;background:#f3ede0;color:#0c4a47;border:none;border-radius:9px;padding:8px 13px;cursor:pointer;}'+
      '.rgp-install .ri-go:hover{background:#fff;}'+
      '.rgp-install .ri-x{flex:0 0 auto;background:transparent;border:none;color:#f3ede0;opacity:.7;font-size:19px;line-height:1;cursor:pointer;padding:4px;border-radius:7px;}'+
      '.rgp-install .ri-x:hover{opacity:1;background:rgba(255,255,255,.12);}'+
      '.rgp-ios-sheet{position:fixed;inset:0;z-index:9100;display:none;align-items:flex-end;background:rgba(8,30,28,.46);}'+
      '.rgp-ios-sheet.show{display:flex;}'+
      '.rgp-ios-card{background:var(--bg,#f6f2e9);color:var(--ink,#1b2b29);width:100%;border-radius:18px 18px 0 0;padding:22px 22px calc(22px + env(safe-area-inset-bottom));box-shadow:0 -10px 40px rgba(0,0,0,.25);}'+
      '.rgp-ios-card h4{margin:0 0 4px;font-size:17px;}'+
      '.rgp-ios-card p{margin:0 0 14px;font-size:13.5px;line-height:1.5;color:var(--ink-2,#3a4a48);}'+
      '.rgp-ios-step{display:flex;align-items:center;gap:11px;font-size:14px;padding:10px 0;border-top:1px solid rgba(0,0,0,.08);}'+
      '.rgp-ios-step .n{flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:#0c4a47;color:#f3ede0;display:grid;place-items:center;font-size:13px;font-weight:700;}'+
      '.rgp-ios-card .ri-done{margin-top:16px;width:100%;font:inherit;font-size:15px;font-weight:700;background:#0c4a47;color:#f3ede0;border:none;border-radius:12px;padding:13px;cursor:pointer;}';
    document.head.appendChild(s);
  }

  function shareGlyph(){
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0c4a47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M12 16V4"/><path d="M8 8l4-4 4 4"/><path d="M20 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5"/></svg>';
  }
  function iosSheet(){
    var w = document.createElement('div'); w.className='rgp-ios-sheet';
    w.innerHTML =
      '<div class="rgp-ios-card" role="dialog" aria-label="Install Reasoning GP">'+
        '<h4>Add Reasoning GP to your Home Screen</h4>'+
        '<p>Install it like an app — full screen, an icon on your home screen, and the pages you’ve opened work offline.</p>'+
        '<div class="rgp-ios-step"><span class="n">1</span><span>Tap the <b>Share</b> button '+shareGlyph()+' in Safari’s toolbar</span></div>'+
        '<div class="rgp-ios-step"><span class="n">2</span><span>Choose <b>Add to Home Screen</b></span></div>'+
        '<div class="rgp-ios-step"><span class="n">3</span><span>Tap <b>Add</b> — then open it from your home screen</span></div>'+
        '<button class="ri-done" type="button">Got it</button>'+
      '</div>';
    w.addEventListener('click', function(e){ if(e.target===w || e.target.classList.contains('ri-done')){ w.classList.remove('show'); } });
    document.body.appendChild(w);
    return w;
  }

  function show(kind){
    injectCss();
    if (pill) return;
    pill = document.createElement('div'); pill.className='rgp-install';
    pill.innerHTML =
      '<span class="ri-ic">📲</span>'+
      '<span class="ri-tx"><b>Install Reasoning GP</b><small>'+(kind==='ios'?'Add to your home screen':'Use it like an app, even offline')+'</small></span>'+
      '<button class="ri-go" type="button">Install</button>'+
      '<button class="ri-x" type="button" aria-label="Dismiss">×</button>';
    document.body.appendChild(pill);
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ pill.classList.add('show'); }); });

    var sheet = null;
    pill.querySelector('.ri-go').addEventListener('click', function(){
      if (kind==='ios'){ if(!sheet) sheet=iosSheet(); sheet.classList.add('show'); return; }
      if (deferred){ deferred.prompt(); deferred.userChoice.then(function(c){ if(c && c.outcome==='accepted'){ hide(); setDismissed(); } }); }
    });
    pill.querySelector('.ri-x').addEventListener('click', function(){ hide(); setDismissed(); });
  }
  function hide(){ if(pill){ pill.classList.remove('show'); var p=pill; pill=null; setTimeout(function(){ p.remove(); }, 450); } }

  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault(); deferred = e;
    if (!standalone() && !dismissed()) setTimeout(function(){ show('android'); }, 1600);
  });
  window.addEventListener('appinstalled', function(){ hide(); setDismissed(); });

  // iOS Safari never fires beforeinstallprompt — offer the manual route.
  if (isSafari && !standalone() && !dismissed()){
    if (document.readyState==='complete') setTimeout(function(){ show('ios'); }, 2200);
    else window.addEventListener('load', function(){ setTimeout(function(){ show('ios'); }, 2200); });
  }

  // Let any page trigger it explicitly (e.g. an "Install app" button).
  window.RGPInstall = function(){
    if (deferred){ deferred.prompt(); deferred.userChoice.then(function(c){ if(c&&c.outcome==='accepted'){ hide(); setDismissed(); } }); }
    else if (isSafari){ injectCss(); iosSheet().classList.add('show'); }
    else { show(isIOS?'ios':'android'); }
  };
})();

/* ---- Load the automatic CPD reading tracker (same /assets dir as this file) ---- */
(function(){
  if (window.__rgpCpdLoad) return; window.__rgpCpdLoad = 1;
  if (/[?&]embed=1/.test(location.search) || document.documentElement.hasAttribute('data-rgp-embed')) return;   // hub iframe — host page tracks CPD, avoid double-count
  var base = '', ss = document.getElementsByTagName('script');
  for (var i=0;i<ss.length;i++){ var m=(ss[i].src||'').match(/^(.*\/)(site|alg-nav)\.js(\?.*)?$/); if(m){ base=m[1]; break; } }
  var el = document.createElement('script'); el.src = base + 'cpd-tracker.js?v=1'; el.defer = true;
  document.head.appendChild(el);
  var cl = document.createElement('script'); cl.src = base + 'cite-links.js?v=1'; cl.defer = true;
  document.head.appendChild(cl);
})();

/* ---- Accessibility: skip-to-content link + visible keyboard focus (July 2026 a11y audit) ---- */
(function(){
  if (window.__rgpA11y) return; window.__rgpA11y = 1;
  function init(){
    // Global keyboard focus indicator (never shown for mouse clicks thanks to :focus-visible)
    var st = document.createElement('style'); st.id = 'rgp-a11y-css';
    st.textContent =
      'a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,[tabindex]:focus-visible{outline:2px solid #0e5c58;outline-offset:2px;border-radius:4px;}' +
      '.rgp-skip{position:absolute;left:12px;top:-48px;z-index:12000;background:#0c4a47;color:#f6f2e9;font:600 13.5px/1 "DM Sans",system-ui,sans-serif;padding:11px 16px;border-radius:0 0 10px 10px;text-decoration:none;transition:top .15s ease;}' +
      '.rgp-skip:focus{top:0;}';
    document.head.appendChild(st);
    // Skip link → first main content region
    var main = document.querySelector('main, .main, .tool-page, .alg-flow, .page-hero');
    if (main){
      if (!main.id) main.id = 'rgp-main';
      var a = document.createElement('a');
      a.className = 'rgp-skip'; a.href = '#' + main.id;
      a.textContent = 'Skip to content';
      a.addEventListener('click', function(){ main.setAttribute('tabindex','-1'); main.focus({preventScroll:false}); });
      document.body.insertBefore(a, document.body.firstChild);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
