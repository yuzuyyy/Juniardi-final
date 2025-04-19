<script>
	import Marquee from 'svelte-fast-marquee';
    import { socmed1} from '../assets'

</script>


<div>

    <section class="bg-bgDark">
        <div class="w-full  py-2 lg:py-8 relative overflow-hidden section-container">
          <!-- Left fade -->
          <div class="absolute left-0 top-0 h-full w-[200px] z-10 bg-gradient-to-r from-black to-transparent"></div>
          
          <!-- Right fade -->
          <div class="absolute right-0 top-0 h-full w-[200px] z-10 bg-gradient-to-l from-black to-transparent"></div>
        
          <Marquee
            speed={60}
            class="w-full"
          >
            <!-- Quadrupled content (4 identical components) -->
            {#each Array(4) as _}
              <div class="flex items-center gap-4 mx-12">
                <img src={socmed1} alt="shuriken" class="w-10 h-10 max-md:w-6 max-md:h-6" />
                <p class="heading-1 max-md:text-[24px]  text-white">Featured work</p>
              </div>
            {/each}
          </Marquee>
        </div>
    </section>
  
  
  <style>
    /* Smooth transitions */
    .absolute {
      pointer-events: none; /* Allows clicking through the fade */
    }
  </style>
</div>
