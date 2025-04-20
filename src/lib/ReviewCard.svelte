<script>
   
    import { hero , star } from '../assets';
    export let photo = hero;
    export let name = "Anonymous";
    export let role = "";
    export let comment = "";
    export let amount = 0; // Default to 0 stars
  </script>
  
  <div class="lg:max-w-[400px] min-h-[280px] max-lg:w-[320px] bg-white/10 rounded-lg max-md:rounded-3xl shadow-md p-6 mx-auto backdrop-blur-sm">
    <!-- Photo -->
    <div class="flex justify-center mb-4">
      <img 
        src={photo} 
        alt={name} 
        class="w-24 h-24 rounded-full object-cover border-4 border-white/20"
      />
    </div>
    
    <!-- Name & Role -->
    <div class="text-center mb-3">
      <h3 class="heading-3 font-semibold text-white">{name}</h3>
      {#if role}
        <p class="body-3 text-white/80">{role}</p>
      {/if}
    </div>
    
    <!-- Comment -->
    {#if comment}
      <p class="text-white/80 text-center body-2 leading-[1em] mb-4 italic">
        "{comment}"
      </p>
    {/if}
    
    <!-- Stars - only show if star > 0 -->
    {#if amount > 0}
      <div class="flex justify-center">
        {#each Array(5) as _, i}
          <img 
            src={star} 
            alt="star" 
            class="w-5 h-5 {i < amount ? 'opacity-100' : 'opacity-30'}"
          />
        {/each}
      </div>
    {/if}
  </div>