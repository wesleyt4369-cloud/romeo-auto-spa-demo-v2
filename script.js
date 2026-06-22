// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Before/after compare slider
const compareRange = document.getElementById('compareRange');
const compareBefore = document.getElementById('compareBefore');
const compareDivider = document.getElementById('compareDivider');

function updateCompare(value) {
  compareBefore.style.clipPath = 'inset(0 ' + (100 - value) + '% 0 0)';
  compareDivider.style.left = value + '%';
}

if (compareRange) {
  updateCompare(compareRange.value);
  compareRange.addEventListener('input', (e) => updateCompare(e.target.value));
}

// Demo contact form — no backend wired up.
// To make this live: connect to Formspree, a Vercel serverless function,
// or any form backend, and replace this handler.
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = "This is a demo — connect a form backend (Formspree, Resend, etc.) before going live.";
  note.style.color = "#FF4B2E";
});
