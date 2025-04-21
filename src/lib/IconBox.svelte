<script>
    import { socmed1 } from '../assets'; // pastikan path-nya benar
  
    export let link = '#';        // default link
    export let icon = socmed1;    // default icon
  </script>
  
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img
      class="size-[40px] rounded-2xl hover:rotate-[360deg] transition-all ease-in-out duration-700 bg-black  p-2"
      src={icon}
      alt="Social Icon"
    />
  </a>
  