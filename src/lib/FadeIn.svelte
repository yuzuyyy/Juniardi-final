<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  export let delay: number = 0;
  export let duration: number = 500;
  export let wait: number = 200;

  let el: HTMLElement;
  let isVisible = false;
  let show = false;

  function fadeSlide(node: HTMLElement, opts = {}) {
    const { delay: d = delay, duration = 400, easing = cubicOut } = opts as {
      delay?: number;
      duration?: number;
      easing?: (t: number) => number;
    };

    return {
      delay: d,
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
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
  });
</script>

<div bind:this={el}>
  {#if show}
    <div in:fadeSlide={{ delay, duration }}>
      <slot />
    </div>
  {/if}
</div>

<style>
  div {
    will-change: opacity, transform;
  }
</style>
