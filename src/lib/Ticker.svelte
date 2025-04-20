<script>
  import Marquee from "svelte-fast-marquee";
  import { socmed1 } from "../assets";
  import { logos } from "../constants";
</script>

<section class="bg-bgDark">
  <div class="w-full py-2 lg:py-8 relative overflow-hidden section-container">
    <!-- Left fade -->
    <div
      class="absolute left-0 top-0 h-full w-[200px] z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"
    ></div>

    <!-- Right fade -->
    <div
      class="absolute right-0 top-0 h-full w-[200px] z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"
    ></div>

    <Marquee speed={60} class="w-full gap-12">
      {#each Array(2) as _, i}
        <!-- Loop isi logos 4x agar marquee panjang dan mulus -->
        {#each logos as logo}
          <div class="flex items-center gap-12">
            <img class="h-12 mx-12 aspect-video object-cover" src={logo} alt="logo {i}" />
          </div>
        {/each}
      {/each}
    </Marquee>
  </div>
</section>
