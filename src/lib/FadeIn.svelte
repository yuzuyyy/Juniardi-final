<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
  
    export let delay = 0;       // delay animasi transition
    export let duration = 1000; // durasi animasi
    export let wait = 300;      // tambahan delay sebelum animasi dimulai
  
    let el;
    let isVisible = false;
    let show = false; // dipakai untuk menampilkan elemen setelah delay
  
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
      <div transition:fly={{ y: 20, opacity: 0, delay, duration }}>
        <slot />
      </div>
    {/if}
  </div>
  