/* Signal Library — navigation-only enhancement. No network, storage, or behavioral collection. */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (!menuButton || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const shouldOpen = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', shouldOpen);
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
    menuButton.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
})();
