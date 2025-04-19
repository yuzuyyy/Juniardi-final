<script>
    import { MainButton, ProjectCard,FadeIn } from ".";
    import { projects } from "../constants";
    // import FadeIn
  </script>
  
  <section id="project" class="bg-white/80 w-full section-padding">
    <div class="w-full flex flex-col gap-[40px] max-md:gap-[24px] section-container">
  
      <div>
        <!-- <MainButton className="w-fit button-text ">Become a client</MainButton> -->
        <h1 class="heading-2 ">[Showcase]</h1>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
        {#each projects as project, i}
          <FadeIn delay={i * 150} wait={300}>
            <ProjectCard {...project} />
          </FadeIn>
        {/each}
      </div>
  
     
  
    </div>
  </section>
  