(function () {
  const targets = document.querySelectorAll('[data-include]');
  if (!targets.length) return;

  targets.forEach(async el => {
    const src = el.getAttribute('data-include');
    try {
      const res = await fetch(src, { credentials: 'omit', cache: 'no-cache' });
      if (!res.ok) throw new Error(res.status);
      el.outerHTML = await res.text(); // replace placeholder with fetched HTML
    } catch (e) {
      console.warn('Include failed:', src, e);
    }
  });
})();
