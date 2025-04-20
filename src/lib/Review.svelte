<script>
    import { ReviewCard } from ".";
    import { reviews } from "../constants";
    import { hero } from "../assets"; // Make sure this path is correct
    import FadeIn from "./FadeIn.svelte";
    import Marquee from "svelte-fast-marquee";
</script>

<section class="bg-black section-padding">
    <div class="section-container flex flex-col gap-[40px]">
        <h2 class="heading-2 text-white">[What my clients say]</h2>

        <!-- ticker -->
        <div class="flex flex-col max-md:gap-[40px]">

            <div class="w-full py-2 lg:py-8 relative overflow-hidden section-container ">
                <!-- Left fade -->
                <div
                  class="absolute left-0 top-0 h-full w-[200px] max-md:w-[60px] z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"
                ></div>
            
                <!-- Right fade -->
                <div
                  class="absolute right-0 top-0 h-full w-[200px] max-md:w-[60px] z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"
                ></div>
            
                <Marquee pauseOnHover speed={60} class="w-full gap-2">
                  {#each Array(2) as _, i}
                    <!-- Loop isi logos 4x agar marquee panjang dan mulus -->
                    {#each reviews as review}
                      <div class="flex items-center mx-6">
                        <ReviewCard {...review}/>
                      </div>
                    {/each}
                  {/each}
                </Marquee>
              </div>

              <div class="w-full py-2 lg:py-8 relative overflow-hidden section-container -mt-3 ">
                <!-- Left fade -->
                <div
                  class="absolute left-0 top-0 h-full w-[200px] max-md:w-[60px] z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"
                ></div>
            
                <!-- Right fade -->
                <div
                  class="absolute right-0 top-0 h-full w-[200px] max-md:w-[60px] z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"
                ></div>
            
                <Marquee pauseOnHover speed={60} direction={"right"} class="w-full gap-2">
                  {#each Array(2) as _, i}
                    <!-- Loop isi logos 4x agar marquee panjang dan mulus -->
                    {#each reviews as review}
                      <div class="flex items-center mx-6">
                        <ReviewCard {...review}/>
                      </div>
                    {/each}
                  {/each}
                </Marquee>
              </div>

              
        </div>

        <!-- mobile grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] hidden">
            {#each reviews.slice(0,4) as review}
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
