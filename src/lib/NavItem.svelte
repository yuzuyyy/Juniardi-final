<script>
    export let text = "Link";
    export let link = "#";
    import { isOpen } from "../stores/isOpen";
  
    function closeMenu() {
      isOpen.set(false);
    }
  </script>
  
  <a
    href={link}
    on:click={closeMenu}
    class="relative body-1 lg:font-normal font-bold capitalize text-white transition-all duration-300 z-50
           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
           after:bg-primary after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300
           hover:after:scale-x-100 hover:text-white/50"
  >
    {text}
  </a>
  