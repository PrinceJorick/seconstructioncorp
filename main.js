document.addEventListener('DOMContentLoaded', function() {
  
  /* ═══════════════════════════════════════════════
     HAMBURGER MENU TOGGLE
     ═══════════════════════════════════════════════ */
  const burger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = mobileNav.querySelectorAll('a');
  
  if (burger && mobileNav) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ═══════════════════════════════════════════════
     NAVBAR SCROLL SHADOW
     ═══════════════════════════════════════════════ */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ═══════════════════════════════════════════════
     FORM SUBMISSION FEEDBACK
     ═══════════════════════════════════════════════ */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      
      btn.textContent = 'Message Sent!';
      btn.style.background = 'var(--green-800)';
      
      setTimeout(function() {
        btn.textContent = origText;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ═══════════════════════════════════════════════
     SCROLL REVEAL ANIMATIONS
     ═══════════════════════════════════════════════ */
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length > 0) {
    const revealOptions = {
      threshold: 0,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  }
});
