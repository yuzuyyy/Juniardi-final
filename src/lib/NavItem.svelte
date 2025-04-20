<script>
  export let text = "Link";
  export let link = "#";
  export let black = false;
  import { isOpen } from "../stores/isOpen";

  function closeMenu() {
    isOpen.set(false);
  }
</script>

<a
  href={link}
  on:click={closeMenu}
  class={`relative body-1 font-bold capitalize transition-all duration-300 z-50
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300
    hover:after:scale-x-100
    ${black ? 'text-black hover:text-black/50 after:bg-black' : 'text-white hover:text-white/50 after:bg-primary'}`}
>
  {text}
</a>
