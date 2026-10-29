/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO — script.js
   Vanilla JavaScript for navigation, animations, and interactivity
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── DOM References ───
  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const navLinks    = document.getElementById('navLinks');
  const backToTop   = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const yearSpan    = document.getElementById('currentYear');
  const navItems    = document.querySelectorAll('.nav-link');
  const sections    = document.querySelectorAll('.section');
  const reveals     = document.querySelectorAll('.reveal');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');


  // ═══════════════════════════════════════════════
  // 1. CURRENT YEAR IN FOOTER
  // ═══════════════════════════════════════════════
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }


  // ═══════════════════════════════════════════════
  // 2. MOBILE NAVIGATION TOGGLE
  // ═══════════════════════════════════════════════
  function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Close mobile menu when a link is clicked
  navItems.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      toggleMenu();
    }
  });


  // ═══════════════════════════════════════════════
  // 3. NAVBAR SCROLL EFFECT
  // ═══════════════════════════════════════════════
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }


  // ═══════════════════════════════════════════════
  // 4. ACTIVE NAV LINK ON SCROLL
  // ═══════════════════════════════════════════════
  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var sectionTop    = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId     = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navItems.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }


  // ═══════════════════════════════════════════════
  // 5. BACK TO TOP BUTTON
  // ═══════════════════════════════════════════════
  function handleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ═══════════════════════════════════════════════
  // 6. SCROLL REVEAL ANIMATIONS
  // ═══════════════════════════════════════════════
  // Using Intersection Observer for performant scroll-based animations
  var revealObserver = null;

  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed (animation is one-way)
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    reveals.forEach(function (el) {
      el.classList.add('active');
    });
  }


  // ═══════════════════════════════════════════════
  // 7. PROJECT FILTERING
  // ═══════════════════════════════════════════════
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      projectCards.forEach(function (card) {
        var category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.display = '';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  // ═══════════════════════════════════════════════
  // 8. CONTACT FORM VALIDATION
  // ═══════════════════════════════════════════════
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;

      // Name validation
      var nameInput = document.getElementById('name');
      var nameError = document.getElementById('nameError');
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        nameInput.classList.add('error');
        isValid = false;
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
      }

      // Email validation
      var emailInput = document.getElementById('email');
      var emailError = document.getElementById('emailError');
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email.';
        emailInput.classList.add('error');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('error');
        isValid = false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
      }

      // Subject validation
      var subjectInput = document.getElementById('subject');
      var subjectError = document.getElementById('subjectError');
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please enter a subject.';
        subjectInput.classList.add('error');
        isValid = false;
      } else {
        subjectError.textContent = '';
        subjectInput.classList.remove('error');
      }

      // Message validation
      var messageInput = document.getElementById('message');
      var messageError = document.getElementById('messageError');
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please enter your message.';
        messageInput.classList.add('error');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters.';
        messageInput.classList.add('error');
        isValid = false;
      } else {
        messageError.textContent = '';
        messageInput.classList.remove('error');
      }

      // If valid, show success (replace with actual form submission)
      if (isValid) {
        var submitBtn = contactForm.querySelector('button[type="submit"]');
        var originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '✓ Message Sent!';
        submitBtn.disabled = true;
        submitBtn.style.background = '#22c55e';

        // Reset form after 3 seconds
        setTimeout(function () {
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }
    });

    // Clear error on input
    var formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(function (input) {
      input.addEventListener('input', function () {
        input.classList.remove('error');
        var errorSpan = document.getElementById(input.id + 'Error');
        if (errorSpan) {
          errorSpan.textContent = '';
        }
      });
    });
  }


  // ═══════════════════════════════════════════════
  // 9. SCROLL EVENT HANDLER (THROTTLED)
  // ═══════════════════════════════════════════════
  var ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleNavbarScroll();
        updateActiveLink();
        handleBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once on load
  handleNavbarScroll();
  updateActiveLink();
  handleBackToTop();

})();

