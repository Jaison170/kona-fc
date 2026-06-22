'use strict';

/* ---- Contact Form Validation ---- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.classList.add('is-invalid');
        valid = false;
      } else {
        el.classList.remove('is-invalid');
        el.classList.add('is-valid');
      }
    });

    const emailEl = document.getElementById('email');
    if (emailEl && emailEl.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailEl.value.trim())) {
        emailEl.classList.add('is-invalid');
        emailEl.classList.remove('is-valid');
        valid = false;
      }
    }

    if (valid) {
      contactForm.style.display = 'none';
      document.getElementById('form-success').classList.remove('d-none');
    }
  });

  contactForm.querySelectorAll('.form-control').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('is-invalid');
    });
  });
}

/* ---- News Search ---- */
const newsSearch = document.getElementById('news-search');
const newsCards = document.querySelectorAll('.news-card');

if (newsSearch && newsCards.length) {
  newsSearch.addEventListener('input', () => {
    const query = newsSearch.value.toLowerCase().trim();
    newsCards.forEach(card => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const text = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
      card.style.display = (title.includes(query) || text.includes(query)) ? '' : 'none';
    });
  });
}

/* ---- Navbar scroll shadow ---- */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar-kona');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(214,40,40,0.15)'
      : 'none';
  }
});