/**
 * Scroll-related functionality consolidation
 * Handles header background change, scroll up button, and active section highlighting
 */

(function() {
  'use strict';

  // Change background header on scroll
  function scrollHeader() {
    const header = document.getElementById("header");
    if (!header) return;
    
    // When the scroll is greater than 100 viewport height, add the scroll-header class
    if (window.scrollY >= 100) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }

  // Show scroll up button
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (!scrollUp) return;
    
    // When the scroll is higher than 200 viewport height, add the show-scroll class
    if (window.scrollY >= 200) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }

  // Scroll sections active links
  function scrollActive() {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      }
    });
  }

  // Combined scroll handler for performance
  function handleScroll() {
    scrollHeader();
    scrollUp();
    scrollActive();
  }

  // Use throttling for better performance
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
      setTimeout(() => { ticking = false; }, 16); // ~60fps
    }
  }

  // Initialize scroll listeners
  window.addEventListener("scroll", requestTick, { passive: true });
  
  // Initial call
  handleScroll();
})();

