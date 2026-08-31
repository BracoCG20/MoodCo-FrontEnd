import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
};

export const initScrollAnimations = () => {
  // Solo inicializar si el usuario NO ha pedido reducir animaciones
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll('[data-animate-section]');

  sections.forEach((section) => {
    const animatableElements = section.querySelectorAll('[data-animate-element]');

    if (animatableElements.length === 0) return;

    // Estado inicial
    gsap.set(animatableElements, {
      y: 40,
      opacity: 0,
      filter: 'blur(10px)',
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%', 
      once: true,
      onEnter: () => {
        gsap.to(animatableElements, {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });
      },
    });
  });
};
