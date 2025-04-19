<script>
    import { ProjectCard, FadeIn } from ".";
    import { projects } from "../constants";
  
    // Ambil 4 project pertama untuk mobile
    $: mobileProject = projects.slice(0, 4);
  </script>
  
  <section id="project" class="bg-white/80 w-full section-padding">
    <div class="w-full flex flex-col gap-[40px] max-md:gap-[24px] section-container">
  
      <div>
        <h1 class="heading-2">[Showcase]</h1>
      </div>
  
      <!-- Grid untuk desktop -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full max-md:hidden">
        {#each projects as project, i}
          <FadeIn delay={i * 150} wait={300}>
            <ProjectCard {...project} />
          </FadeIn>
        {/each}
      </div>
  
      <!-- Grid untuk mobile, hanya tampilkan 4 project -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full md:hidden">
        {#each mobileProject as project, i}
          <FadeIn delay={i * 150} wait={300}>
            <ProjectCard {...project} />
          </FadeIn>
        {/each}
      </div>
  
    </div>
  </section>
  