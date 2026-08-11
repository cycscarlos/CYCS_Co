/**
 * CYCS & Co. — Swiper Hero v2.1
 * index.html: hero fullscreen con efecto fade
 */
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function initHeroSwiper() {
  /* ── HERO SLIDESHOW — fade fullscreen ── */
  const el = document.querySelector('.slideshow1');
  if (el && !el.classList.contains('swiper-initialized')) {
    const swiper = new Swiper('.slideshow1', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      grabCursor: false,
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    /* Autoplay solo mientras el hero es visible en pantalla */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
  }
}
