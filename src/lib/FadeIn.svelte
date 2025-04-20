<script>
  import { onMount } from 'svelte';
  import { slide, fade } from 'svelte/transition';

  export let delay = 0;       // delay animasi transition
  export let duration = 1000; // durasi animasi
  export let wait = 300;      // tambahan delay sebelum animasi dimulai

  let el;
  let isVisible = false;
  let show = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          await new Promise((res) => setTimeout(res, wait));
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
    <div transition:fade={{ delay, duration }}>
      <div transition:slide={{ delay, duration }}>
        <slot />
      </div>
    </div>
  {/if}
</div>
