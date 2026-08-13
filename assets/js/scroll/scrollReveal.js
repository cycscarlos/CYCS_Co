/**
 * Scroll Reveal Animation
 * Handles scroll reveal animations using ScrollReveal library
 */

import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 4800,
  });

  // En móvil (<= 768px) las secciones quedan estáticas: el translateX
  // horizontal desborda el viewport y genera scroll horizontal.
  const isDesktop = window.matchMedia("(min-width: 769px)").matches;

  // Reveal animations from left
  sr.reveal(`.galeria`, {
    origin: isDesktop ? "left" : "bottom",
    distance: isDesktop ? "60px" : "0px",
    interval: 100,
  });

  // Reveal animations from right
  sr.reveal(`.clients`, {
    origin: isDesktop ? "right" : "bottom",
    distance: isDesktop ? "60px" : "0px",
    interval: 100,
  });
}







