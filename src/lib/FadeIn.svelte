<script>
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  export let duration = 500;
  export let wait = 200;

  let el;
  let isVisible = false;
  let show = false;

  // Custom transition: fade + slide ringan
  function fadeSlide(node, { delay = 0, duration = 400, easing = cubicOut }) {
    return {
      delay,
      duration,
      easing,
      css: t => `
        opacity: ${t};
        transform: translateY(${(1 - t) * 15}px);
      `
    };
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          await new Promise(res => setTimeout(res, wait));
          show = true;
          observer.disconnect(); // ⛔ stop observing setelah animasi pertama
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
  });
</script>

<div bind:this={el}>
  {#if show}
    <div in:fadeSlide={{ duration }}>
      <slot />
    </div>
  {/if}
</div>

<style>
  div {
    will-change: opacity, transform;
  }
</style>
