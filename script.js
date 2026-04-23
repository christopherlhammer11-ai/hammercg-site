// ── Nav scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile menu toggle ──
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Services dropdown toggle (click support for mobile + desktop) ──
document.querySelectorAll('.nav-dropdown > a').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    const parent = this.parentElement;
    const href = this.getAttribute('href');
    // If dropdown is already open and link has an anchor, navigate
    if (parent.classList.contains('open') && href && href !== '#') {
      parent.classList.remove('open');
      return; // let normal navigation happen
    }
    // Otherwise toggle the dropdown open/closed
    e.preventDefault();
    document.querySelectorAll('.nav-dropdown').forEach(d => {
      if (d !== parent) d.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
});
// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }
});

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });
});

// ── Scroll animations ──
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// ── Animate stat numbers on scroll ──
function animateValue(el, start, end, duration) {
  const startTime = performance.now();
  const suffix = el.textContent.replace(/[\d,\.]/g, '');
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * eased);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const text = num.textContent;
        const value = parseInt(text.replace(/[^0-9]/g, ''));
        if (value && !num.dataset.animated) {
          num.dataset.animated = 'true';
          animateValue(num, 0, value, 2000);
        }
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.hero-stats').forEach(el => statsObserver.observe(el));
