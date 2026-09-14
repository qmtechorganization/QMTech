<script lang="ts">
  import { onMount } from 'svelte';

  export let value: number;
  export let suffix = '';
  export let duration = 1800;

  let displayed = 0;
  let el: HTMLElement;

  onMount(() => {
    if (!el || typeof IntersectionObserver === 'undefined') {
      displayed = value;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          displayed = Math.round(eased * value);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
  });
</script>

<span bind:this={el} class="block font-heading tracking-tight text-6xl font-medium text-center mb-1 text-accent">{displayed}{suffix}</span>