/* Signal Library — navigation-only enhancement. No network, storage, or behavioral collection. */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const shouldOpen = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', shouldOpen);
      menuButton.setAttribute('aria-expanded', String(shouldOpen));
      menuButton.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  }
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const selectTab = (tab) => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
    tab.closest('.bench-ui')?.setAttribute('data-active-skill', tab.dataset.skill);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      selectTab(tabs[nextIndex]);
    });
  });
})();
