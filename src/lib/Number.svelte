<script>
    import { onMount } from "svelte";
  
    export let number = "200";
    export let simbol = "+";
    export let text = "clients";
  
    let el; // DOM reference
    let current = 0;
    let observer;
    let hasAnimated = false;
  
    // Fungsi animasi hitung
    function countUp(target) {
      const duration = 2000;
      const startTime = performance.now();
  
      function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        current = Math.floor(progress * target);
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          current = target;
        }
      }
  
      requestAnimationFrame(animate);
    }
  
    onMount(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            countUp(+number);
            hasAnimated = true;
            observer.disconnect();
          }
        },
        {
          threshold: 0.5
        }
      );
  
      if (el) {
        observer.observe(el);
      }
    });
  </script>
  
  <div bind:this={el} class="flex flex-col max-md:items-center w-fit">
    <p class="text-[100px] max-lg:text-[64px] max-md:text-[40px] text-textMid font-bold  leading-[1em]">
      {current}<span class="text-primary">{simbol}</span>
    </p>
    <p class="text-textMid body-1 capitalize">{text}</p>
  </div>
  