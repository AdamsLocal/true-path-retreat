/* ============================================================
   True Path Retreat — app.js
   Handles: sticky nav, mobile nav toggle, form submission
============================================================ */

(function () {
  'use strict';

  /* ---- Sticky nav on scroll ---- */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });


  /* ---- Mobile nav toggle ---- */
  var navToggle  = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
  });

  /* Close when a mobile link is tapped */
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Close when tapping outside the nav */
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) closeMenu();
  });


  /* ---- Application form — async Netlify submit ---- */
  var form        = document.getElementById('application-form');
  var formSuccess = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Client-side validation */
    var valid = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
      /* Basic email format check */
      if (field.type === 'email' && field.value.trim()) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
          field.classList.add('error');
          valid = false;
        }
      }
    });

    if (!valid) {
      /* Scroll to first error */
      var firstError = form.querySelector('.error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    /* Submit to Netlify Forms */
    var data = new URLSearchParams(new FormData(form)).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    })
      .then(function (res) {
        /* Check HTTP status — 4xx/5xx should not show success */
        if (!res.ok) throw new Error('Server error ' + res.status);
        form.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function () {
        /* Fallback: native POST (still works with Netlify) */
        form.submit();
      });
  });

  /* Clear error state on input */
  form.querySelectorAll('.form-input').forEach(function (field) {
    field.addEventListener('input', function () {
      field.classList.remove('error');
    });
  });

})();
