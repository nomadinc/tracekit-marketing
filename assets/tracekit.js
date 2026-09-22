document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const menu = document.querySelector('.tk-menu');
  const mobileNav = document.querySelector('.tk-mobile-nav');
  if (menu && mobileNav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
      document.body.classList.toggle('tk-menu-open', !open);
    });
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
      document.body.classList.remove('tk-menu-open');
    }));
  }

  document.querySelectorAll('.journey-node').forEach((node) => {
    node.addEventListener('click', () => {
      const wasOpen = node.classList.contains('evidence-open');
      document.querySelectorAll('.journey-node.evidence-open').forEach((n) => n.classList.remove('evidence-open'));
      if (!wasOpen) node.classList.add('evidence-open');
    });
  });
});