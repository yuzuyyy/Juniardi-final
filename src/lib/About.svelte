<script>
    import { project1, project2 } from "../assets";
    import { stats } from "../constants";
    import { Number } from "./";
    import { FadeIn } from "./";
  </script>
  
  <section id="about" class="bg-bgDark section-padding">
    <div class="section-container flex flex-col lg:gap-[64px] gap-[24px] w-full">
      <div class="flex items-center justify-between w-full">
        {#each stats as stat}
          <FadeIn>
            <Number {...stat} />
          </FadeIn>
        {/each}
      </div>
  
      <!-- About Me -->
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-[24px]">
        <FadeIn>
          <div class="flex flex-col lg:min-h-[280px] h-fit pt-[16px] gap-[10px]">
            <h2 class="heading-2 text-white">[About me]</h2>
            <p class="body-1 text-white/80 md:max-lg:max-w-[480px]">
              Design, For me, goes beyond solving problems. It's about improving
              user experiences, striking the perfect balance between aesthetics
              and functionality, and even creating products that form emotional
              connections with users..
            </p>
            <p class="heading-5 text-white">Signature</p>
          </div>
        </FadeIn>
  
        <FadeIn delay={100}>
          <img
            class="grayscale max-h-[220px] w-full rounded-2xl"
            src={project1}
            alt={project2}
          />
        </FadeIn>
  
        <FadeIn delay={200}>
          <img
            class="grayscale max-h-[220px] w-full rounded-2xl"
            src={project2}
            alt={project1}
          />
        </FadeIn>
  
        <FadeIn>
          <div class="flex flex-col lg:min-h-[280px] h-fit pt-[16px] gap-[10px]">
            <h2 class="heading-2 text-white">[About me]</h2>
            <p class="body-1 text-white/80 md:max-lg:max-w-[480px]">
              Design, for me, goes beyond solving problems. It's about improving
              user experiences, striking the perfect balance between aesthetics
              and functionality, and even creating products that form emotional
              connections with users.
            </p>
            <p class="heading-5 text-white">Signature/</p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
  