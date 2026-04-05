/**
 * CYBERPUNK PORTFOLIO — JavaScript
 * Handles: custom cursor, mouse-tracking glow, text scramble,
 * hamburger menu, scroll reveals, header scroll state.
 */

(function () {
  'use strict';

  /* ── 1. CUSTOM CURSOR ── */
  const cursor = document.getElementById('customCursor');
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  if (cursor && !isTouchDevice) {
    let cursorX = 0;
    let cursorY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

    // Smooth cursor follow using rAF lerp
    function updateCursor() {
      const dx = cursorX - currentX;
      const dy = cursorY - currentY;
      currentX += dx * 0.15;
      currentY += dy * 0.15;
      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Hover state for interactive elements
    const hoverTargets = document.querySelectorAll(
      'a, button, .btn, .skill-card, .achievement-card, .avatar-frame'
    );
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  /* ── 2. MOUSE-TRACKING GLOW ON CARDS ── */
  const glowCards = document.querySelectorAll('.skill-card, .achievement-card');

  if (!isTouchDevice && glowCards.length > 0) {
    document.addEventListener('mousemove', (e) => {
      for (let i = 0; i < glowCards.length; i++) {
        const card = glowCards[i];
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
      }
    });
  }

  /* ── 3. TEXT SCRAMBLE (BRUTE-FORCE DECRYPT) ── */
  const heroNameEl = document.getElementById('heroName');

  if (heroNameEl) {
    const targetText = heroNameEl.dataset.text || heroNameEl.textContent.trim();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
    let iteration = 0;
    let interval = null;

    function runScramble() {
      iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        heroNameEl.textContent = targetText
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return targetText[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        iteration += 0.4;

        if (iteration >= targetText.length) {
          heroNameEl.textContent = targetText;
          clearInterval(interval);
        }
      }, 35);
    }

    // Run on page load
    window.addEventListener('load', runScramble);

    // Re-run on hover (desktop only)
    if (!isTouchDevice) {
      heroNameEl.addEventListener('mouseenter', runScramble);
    }
  }

  /* ── 4. HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when a link is clicked
    mobileNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── 5. SCROLL REVEAL (IntersectionObserver) ── */
  const revealSections = document.querySelectorAll('.section');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealSections.forEach((section) => revealObserver.observe(section));
  } else {
    // Fallback: show everything immediately
    revealSections.forEach((s) => s.classList.add('visible'));
  }

  /* ── 6. HEADER SCROLL STATE ── */
  const header = document.getElementById('siteHeader');

  if (header) {
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      lastScroll = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          if (lastScroll > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ── 7. SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
