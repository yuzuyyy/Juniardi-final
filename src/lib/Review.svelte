<script>
    import { ReviewCard } from ".";
    import {reviews} from '../constants'
    import { hero } from '../assets'; // Make sure this path is correct
    import FadeIn from "./FadeIn.svelte";
    

 
  </script>
  
  <section class="bg-black section-padding">
    <div class="section-container flex flex-col gap-[40px]">
      <h2 class="heading-2 text-white">[What my clients say]</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {#each reviews as review}
        <FadeIn>

            <ReviewCard
              photo={review.photo}
              name={review.name}
              role={review.role}
              comment={review.comment}
              amount={review.amount}
            />
        </FadeIn>
        {/each}
      </div>
    </div>
  </section>