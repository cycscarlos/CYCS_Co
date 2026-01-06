/**
 * Utils: Form Reset on Unload
 * Resets all forms when page is unloaded
 */

(function() {
  'use strict';

  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
})();
