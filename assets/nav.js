// Active nav link
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

// Dark mode toggle
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  const nav = document.querySelector('nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.textContent = theme === 'dark' ? '☀ light' : '◑ dark';

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀ light' : '◑ dark';
  });

  nav.appendChild(btn);
})();
