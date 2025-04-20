<script>
    import { highlight1, highlight2, hw, project1, project2, vision } from "../assets";
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
            class="grayscale aspect-video rounded-3xl max-h-[240px] w-full rounded-2xl"
            src={hw}
            alt={hw}
          />
        </FadeIn>
  
        <FadeIn delay={200}>
          <img
            class="grayscale aspect-video rounded-3xl max-h-[240px] w-full rounded-2xl"
            src={vision}
            alt={vision}
          />
        </FadeIn>
  
        <FadeIn>
          <div class="flex flex-col lg:min-h-[280px] h-fit pt-[16px] gap-[10px]">
            <h2 class="heading-2 text-white">[Vision]</h2>
            <p class="body-1 text-white/80 md:max-lg:max-w-[480px]">
              To create design experiences that are not only visually captivating, but also meaningful, functional, and capable of connecting people with technology in a harmonious way.
            </p>
            
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
  