<script>
    import { project1 } from "../assets";
    export let image = project1;
    export let title = "Title";
    export let description = "description";
  </script>
  
  <a href="/">
    <div
      class="relative p-[24px] min-h-[340px] min-w-[280px] max-lg:w-full rounded-[40px] overflow-hidden group flex flex-col justify-between max-md:rounded-2xl"
    >
      <img
        class="absolute inset-0 w-full h-full bg-cover group-hover:scale-125 transition-all ease-in-out duration-700"
        src={image}
        alt=""
      />
  
      <div></div>
      <div
        class="z-10 bg-white group-hover:bg-black backdrop-blur-3xl w-full shadow-3xl border-2 border-white/30 rounded-3xl flex flex-col py-[8px] px-[24px]  transition-all ease-in-out duration-700"
      >
        <h6 class="heading-6 text-black group-hover:text-white">{title}</h6>
        <p class="text-[14px] font-medium text-black/80 capitalize group-hover:text-white/80">
          {description}
        </p>
      </div>
    </div>
  </a>
  