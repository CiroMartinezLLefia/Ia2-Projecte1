/* ============================================================
   Vimeo clone — IA2 Project 1 (M0615)
   Vanilla JavaScript — interactions only
============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileNav.hidden = !isOpen;
    });
  }

  // AI accordion — swap video on select
  const aiItems = document.querySelectorAll('#aiAccordion .ai-item');
  const aiVideo = document.getElementById('aiVideo');
  aiItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      aiItems.forEach((b) => {
        b.classList.remove('active');
        const t = b.querySelector('.ai-toggle');
        if (t) t.textContent = '+';
      });
      btn.classList.add('active');
      const t = btn.querySelector('.ai-toggle');
      if (t) t.textContent = '−';
      const src = btn.getAttribute('data-video');
      if (src && aiVideo && aiVideo.src !== src) {
        aiVideo.src = src;
        aiVideo.play().catch(() => { /* autoplay blocked — ignore */ });
      }
    });
  });

  // Pause card videos when off-screen to save bandwidth
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll('.card-video video').forEach((v) => observer.observe(v));
  }
});
