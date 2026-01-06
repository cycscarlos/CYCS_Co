/**
 * Utils: Mouse Hover Effects for Gallery
 * Handles hover effects on gallery containers
 */

(function() {
  'use strict';

  const addListeners = (div) => {
    if (!div) return;
    
    div.addEventListener("mouseenter", () => {
      div.classList.add("hover");
    });
    div.addEventListener("mouseleave", () => {
      div.classList.remove("hover");
    });
  };

  const container = document.querySelector(".container");
  if (container) {
    addListeners(container);
  }

  const allGalleryContainer = document.querySelectorAll(".gallery-container");
  allGalleryContainer.forEach((galleryContainer) => {
    addListeners(galleryContainer);
  });
})();
