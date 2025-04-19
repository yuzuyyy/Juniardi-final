<script>
    import { menu, close } from "../assets";
    import { isOpen } from "../stores/isOpen";
    import { slide, fade } from 'svelte/transition';

    function handleToggle() {
        isOpen.update(n => !n);
    }

    $: $isOpen;
</script>

<button class="md:hidden relative size-[40px]" on:click={handleToggle}>
    {#if $isOpen}
        <img
            src={close}
            alt="close icon"
            in:slide={{ duration: 250 }}
            out:fade={{ duration: 200 }}
            class="absolute inset-0 size-full"
        />
    {:else}
        <img
            src={menu}
            alt="menu icon"
            in:slide={{ duration: 250 }}
            out:fade={{ duration: 200 }}
            class="absolute inset-0 size-full"
        />
    {/if}
</button>
