const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  alert('This is a demo form. Please connect an email or form service before publishing to receive messages.');
});
