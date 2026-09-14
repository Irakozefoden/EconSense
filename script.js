const navToggle = document.getElementById('navToggle');
const navClose  = document.getElementById('navClose');
const mainNav   = document.getElementById('mainNav');
const header    = document.querySelector('.site-header');

const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
document.body.appendChild(backdrop);

function openNav() {
  mainNav.classList.add('open');
  navToggle.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  mainNav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.contains('open') ? closeNav() : openNav();
  });
  if (navClose) navClose.addEventListener('click', closeNav);
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  backdrop.addEventListener('click', closeNav);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
}

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}
