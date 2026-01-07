/**
 * Component Loader for CYCS & Co. Website
 * Loads reusable HTML components into pages
 */
(function() {
  'use strict';

  /**
   * Loads a component HTML file and inserts it into the target element
   * @param {string} componentPath - Path to the component HTML file
   * @param {string} targetSelector - CSS selector for the target element
   */
  function loadComponent(componentPath, targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) {
      console.warn('Component loader: Target element not found:', targetSelector);
      return;
    }

    fetch(componentPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        target.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading component:', componentPath, error);
      });
  }

  /**
   * Initialize component loading when DOM is ready
   */
  function init() {
    // Load header if placeholder exists
    const headerPlaceholder = document.querySelector('[data-component="header"]');
    if (headerPlaceholder) {
      const basePath = window.location.pathname.includes('/assets/html/') ? '../' : './';
      loadComponent(basePath + 'assets/html/components/header.html', '[data-component="header"]');
    }

    // Load footer if placeholder exists
    const footerPlaceholder = document.querySelector('[data-component="footer"]');
    if (footerPlaceholder) {
      const basePath = window.location.pathname.includes('/assets/html/') ? '../' : './';
      loadComponent(basePath + 'assets/html/components/footer.html', '[data-component="footer"]');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();



