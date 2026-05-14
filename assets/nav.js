// Highlight active nav link based on current page
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (
      (href === '/' && (path === '/' || path.endsWith('index.html') && !path.includes('/blog') && !path.includes('/projects') && !path.includes('/about'))) ||
      (href !== '/' && path.includes(href.replace('../', '/')))
    ) {
      a.classList.add('active');
    }
  });
})();
