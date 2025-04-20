<script>
    import { NavItem } from ".";
    import { navItems } from "../constants";
    import MainButton from "./MainButton.svelte";
    import ToggleMenu from "./ToggleMenu.svelte";
    import { isOpen } from "../stores/isOpen";
    import { slide, fade } from 'svelte/transition';

    $: $isOpen;
</script>

<nav class="fixed z-50 bg-primary w-full top-0 padding-x py-[10px]">
    <div class="relative section-container flex items-center justify-between">
        <div class="flex lg:min-w-[120px] ">
            <a href="/" class="font-alfa text-3xl uppercase">hw</a>
        </div>

        <!-- Desktop Nav -->
        <div class="flex items-center gap-[60px] text-normal max-md:hidden  rounded-full">
            {#each navItems as item}
                <NavItem black={true} {...item} />
            {/each}
        </div>

        <!-- Right buttons -->
        <div class="flex items-center gap-4">
            <MainButton
                className="rounded-full py-[5px] px-[16px] body-2 w-fit max-md:hidden"
            >
                Contact me
            </MainButton>
            <ToggleMenu />
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if $isOpen}
        <div class="fixed inset-0 top-[80px] z-40 flex justify-center md:hidden h-fit">
            <div
                in:slide
                out:fade
                class="rounded-3xl bg-black text-white w-full max-w-[400px] flex flex-col items-center gap-6 p-6 shadow-lg"
            >
                {#each navItems as item}
                    <NavItem {...item} />
                {/each}
                <MainButton className="bg-primary font-bold  body-1 w-full py-4">
                    <span class="text-black">Contact me</span>
                </MainButton>
            </div>
        </div>
    {/if}
</nav>
