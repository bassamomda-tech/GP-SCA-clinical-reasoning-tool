/* Reasoning GP — universal "Back" button.
   Drops a small fixed back control on every tool page.
   Goes to the previous page (history) or falls back to the home page. */
(function(){
  if (window.__navBackDone) return;
  window.__navBackDone = true;

  function build(){
    if (document.getElementById('navBackBtn')) return;

    var btn = document.createElement('button');
    btn.id = 'navBackBtn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Go back to the previous page');
    btn.innerHTML = '<span aria-hidden="true">\u2190</span><span class="nb-txt">Back</span>';

    var s = btn.style;
    s.position = 'fixed';
    s.top = '14px';
    s.left = '14px';
    s.zIndex = '9999';
    s.display = 'inline-flex';
    s.alignItems = 'center';
    s.gap = '7px';
    s.font = '600 13.5px/1 "DM Sans", system-ui, sans-serif';
    s.padding = '9px 15px';
    s.borderRadius = '999px';
    s.border = '1px solid rgba(15,23,42,.14)';
    s.background = 'rgba(255,255,255,.95)';
    s.color = '#0c4a47';
    s.cursor = 'pointer';
    s.boxShadow = '0 2px 10px rgba(0,0,0,.10)';
    s.backdropFilter = 'blur(4px)';
    s.webkitBackdropFilter = 'blur(4px)';

    // Shift right if a sidebar toggle already sits in the top-left corner.
    if (document.querySelector('.sb-toggle')) { s.left = '60px'; }

    btn.addEventListener('mouseenter', function(){ btn.style.borderColor = '#0c4a47'; btn.style.background = '#fff'; });
    btn.addEventListener('mouseleave', function(){ btn.style.borderColor = 'rgba(15,23,42,.14)'; btn.style.background = 'rgba(255,255,255,.95)'; });

    btn.addEventListener('click', function(){
      // Prefer real history; otherwise fall back to a sensible home page.
      if (window.history.length > 1) {
        window.history.back();
        // If history.back() doesn't navigate (e.g. opened directly), fall back shortly after.
        var here = location.href;
        setTimeout(function(){ if (location.href === here) goHome(); }, 350);
      } else {
        goHome();
      }
    });

    function goHome(){
      var ref = document.referrer;
      if (ref) { try { if (new URL(ref).origin === location.origin) { location.href = ref; return; } } catch(e){} }
      location.href = '../index.html';
    }

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
