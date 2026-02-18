/* ============================================================
   FORMA Interior Design — JavaScript
   Университет Туран, Алматы
   ============================================================ */

// ── NAV scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile menu toggle ──
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '70px';
  links.style.right = '24px';
  links.style.background = 'var(--cream)';
  links.style.padding = '24px';
  links.style.gap = '20px';
  links.style.boxShadow = '0 8px 32px rgba(24,20,15,0.12)';
  links.style.border = '1px solid var(--sand)';
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(
  '.about, .about-title, .about-text, .card, .service, .step, .contact-info, .contact-form, blockquote, .quote-awards, .section-head'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── Form submit ──
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  const btn = e.target.querySelector('button[type=submit]');

  btn.textContent = 'Отправляем...';
  btn.disabled = true;

  setTimeout(() => {
    success.style.display = 'block';
    btn.textContent = '✓ Заявка отправлена';
    btn.style.background = 'var(--accent)';
  }, 1200);
}

// ── Smooth anchor scroll ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Cursor glow (desktop only) ──
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(184,124,76,0.06) 0%, transparent 70%);
    pointer-events: none; z-index: 9999; transform: translate(-50%,-50%);
    transition: left 0.4s ease, top 0.4s ease;
  `;
  document.body.appendChild(glow);

  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

console.log('%cFORMA Design Studio', 'font-size:20px; font-family:serif; color:#b87c4c');
console.log('%cУчебный проект · Университет Туран · Алматы', 'font-size:11px; color:#8a7f72');
