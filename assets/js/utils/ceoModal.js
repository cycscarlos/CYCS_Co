/**
 * CEO Modal — overlay autónomo sobre el index (opción 2).
 * Inyecta el contenido de assets/html/ceo.html como overlay sin cambiar la URL.
 */

import ceoImg from '../../img/ceo/logo1a.webp';

export function initCeoModal() {
  var link = document.querySelector('[data-ceo-modal]');
  if (!link || link.dataset.ceoInit) return;
  link.dataset.ceoInit = 'true';

  var overlay = null;

  function close() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }

  function open() {
    if (overlay) return;
    var url = import.meta.env.BASE_URL + 'assets/html/ceo.html';
    fetch(url)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        if (overlay) return;
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var backdrop = doc.querySelector('.ceo-backdrop');
        if (!backdrop) return;
        var img = backdrop.querySelector('.ceo-media img');
        if (img) img.src = ceoImg;
        document.body.appendChild(backdrop);
        overlay = backdrop;

        var closeBtn = backdrop.querySelector('.ceo-close');
        if (closeBtn) closeBtn.addEventListener('click', close);
        backdrop.addEventListener('click', function (e) {
          if (e.target === backdrop) close();
        });
        document.addEventListener('keydown', onKey);
      })
      .catch(function () {});
  }

  link.addEventListener('click', function (e) {
    e.preventDefault();
    open();
  });
}
