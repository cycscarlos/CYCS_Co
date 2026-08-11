/**
 * CYCS & Co. — Swiper v2.2 (páginas de servicio)
 * Maneja múltiples instancias de .slideshow2 como fondo (view-bg)
 */
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';

export function initServiceSwipers() {
  var slides = document.querySelectorAll('.swiper.slideshow2');
  if (!slides.length) return;

  slides.forEach(function (el, i) {
    if (el.classList.contains('swiper-initialized')) return;

    var uid = 'slideshow2-' + i;
    el.classList.add(uid);

    var swiper = new Swiper('.' + uid, {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    /* Autoplay solo cuando el fondo es visible (patrón del hero) */
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  });
}
