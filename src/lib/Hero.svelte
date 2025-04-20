<script>
  import {  IconBox, MainButton } from ".";
  import { hero } from "../assets";
  import { socmeds } from "../constants";
</script>

<section id="home"
  class="relative lg:min-h-screen bg-primary hero-section-padding flex flex-col items-center gap-[10px] md:pt-[80px] lg:pt-[20px]"
>
  <div class="section-container w-full">
    
    <div class="section-container w-full">
      <h1
        class="text-center text-[275px] max-lg:text-[140px] max-md:text-[70px] font-semibold leading-[1em]"
      >
        Hendra.Work
      </h1>

      <!-- <h1
      class="text-center font-alfa uppercase text-[275px] max-lg:text-[140px] max-md:text-[70px] font-semibold leading-[1em]"
    >
      Hendra
    </h1> -->

      <!-- bottom start -->
      <div
        class="flex items-center justify-between w-full -mt-[60px] max-lg:-mt-[24px] max-md:-mt-[10px] max-md:flex-col max-md:items-center"
      >
        <div
          class="flex flex-col gap-[32px] self-end max-w-[240px] max-lg:w-[220px] max-lg:gap-[16px] max-md:hidden md:pb-[24px]"
        >
          <h4 class="heading-4 ">
            Hello! I'm Hendra Juniardi, a creative product designer based in Indonesia.
          </h4>

          <a href="#project">
            <MainButton className="rounded-full max-lg:text-[16px] py-[10px] px-[24px] button-text w-fit"
              >See my projects</MainButton
            >
          </a>
        </div>

        <div class="p-[10px] bg-primary flex rounded-[48px] overflow-hidden">
          <img
            class="min-h-[440px] max-md:h-[360px] w-[400px] max-md:w-full rounded-[40px]"
            src={hero}
            alt="hero"
          />
        </div>

        <div class="flex gap-[10px] pb-[24px] self-end max-md:hidden">
          {#each socmeds as socmed (socmed)}
            <IconBox {...socmed} />
          {/each}
        </div>
      </div>
      <!-- bottom end -->

      <div class="flex flex-col items-center gap-[24px] w-full md:hidden">
        <div class="flex flex-col items-center gap-[10px] w-full">
          <h2 class="heading-4 text-center max-w-[300px]">
            Hello! I'm Hendra Juniardi, a creative product designer based in Indonesia.
          </h2>
          <a href="#project">
            <MainButton className="rounded-full py-[10px] px-[24px] button-text w-fit"
              >See my projects</MainButton
            >
          </a>
        </div>
        <div class="flex gap-[10px]">
          {#each socmeds as socmed (socmed)}
            <IconBox {...socmed} />
          {/each}
        </div>
      </div>
      <!-- mobile content end -->
    </div>
    <!-- mobile content start-->
  </div>
</section>
