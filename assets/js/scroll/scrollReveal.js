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

  // Reveal animations from left
  sr.reveal(`.galeria`, {
    origin: "left",
    interval: 100,
  });

  // Reveal animations from right
  sr.reveal(`.clients`, {
    origin: "right",
    interval: 100,
  });
}







