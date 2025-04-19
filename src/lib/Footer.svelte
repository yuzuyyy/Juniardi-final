<script>
    import { socmeds } from '../constants';
    import IconBox from './IconBox.svelte';

    const year = new Date().getFullYear();
</script>

<footer id="footer" class="section-padding bg-black text-white">
    <div class="section-container flex flex-col">
        <div class="flex justify-between max-md:flex-col items-center gap-[24px]">
            <h1 class="text-4xl font-alfa text-primary">Get in touch</h1>
            
            <div class="flex gap-[10px]">
                {#each socmeds as socmed}
                    <IconBox {...socmed} />
                {/each}
            </div>

           
        </div>  
        <div class="text-center md:text-right">
            <p>Made with Svelte by <span class="text-primary font-bold">Hendz</span></p>
            <p>{year}</p>
        </div>
    </div>
</footer>
