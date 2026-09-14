export function reveal(node: HTMLElement, opts: { delay?: number } = {}) {
  node.classList.add('reveal');
  if (opts.delay) {
    node.style.transitionDelay = `${opts.delay}ms`;
  }

  let observer: IntersectionObserver | null = null;

  if (typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('reveal-in');
            observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
  } else {
    node.classList.add('reveal-in');
  }

  return {
    destroy() {
      observer?.disconnect();
    },
  };
}