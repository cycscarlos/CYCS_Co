/**
 * Swiper Configuration Consolidation
 * Handles all Swiper slider initializations
 */

(function() {
  'use strict';

  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  // Main slideshow with coverflow effect (index.html)
  const slideshow1 = document.querySelector(".slideshow1");
  if (slideshow1) {
    new Swiper(".slideshow1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      },
    });
  }

  // Secondary slideshow with fraction pagination (if exists)
  const slideshow2 = document.querySelector(".slideshow2");
  if (slideshow2) {
    new Swiper(".slideshow2", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  }
})();


