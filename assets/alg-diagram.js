/* Reasoning GP — Steps / Diagram view toggle (shared).
   Looks for .vt-btn buttons; persists the choice per-pathway.
   No-op on pages that have no toggle. */
(function () {
  var btns = document.querySelectorAll('.vt-btn');
  if (!btns.length) return;
  var file = (location.pathname.split('/').pop() || 'alg').replace(/\.html?$/, '');
  var KEY = 'rgp.alg.view.' + file;

  function setView(v, scroll) {
    document.body.classList.toggle('steps-mode', v === 'steps');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-selected', String(btns[i].dataset.view === v));
    }
    try { localStorage.setItem(KEY, v); } catch (e) {}
    if (scroll) window.scrollTo(0, 0);
  }

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () { setView(this.dataset.view, true); });
  }

  var saved = 'steps';
  try { saved = localStorage.getItem(KEY) || 'steps'; } catch (e) {}
  setView(saved, false);
})();
