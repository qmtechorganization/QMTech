<script>
  import { _ } from "svelte-i18n";
</script>

<section id="about-us" class="pt-40 pb-10 md:pb-32 px-8 md:px-24 container flex flex-col-reverse md:flex-col mx-auto px-4">
    <div class="flex flex-wrap -m-4 md:mb-16">
      <div class="hidden lg:block lg:w-1/3 p-4">
        <img class="rounded-2xl object-cover w-full" style="height:335px;" src="/images/aboutUs/aboutUs1.jpg" alt="">
      </div>
      <div class="w-full mt-12 lg:w-2/3 p-4">
        <img class="rounded-2xl object-cover w-full" style="height:422px;" src="/images/aboutUs/aboutUs2.jpg" alt="">
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="w-full lg:w-1/3 p-4">
        <p class="tracking-tight mb-4">{$_('aboutUs.tagLine')}</p>
        <h1 class="tracking-tight font-heading text-4xl md:text-6xl font-medium">{$_('aboutUs.headline')}</h1>
      </div>
      <div class="w-full lg:w-2/3 p-4">
        <div class="flex flex-wrap -m-4">
          <div class="w-full lg:w-1/2 p-4">
            <div class="pt-6 border-t border-black">
              <p class="text-lg">{$_('aboutUs.content.part1')}</p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-4">
            <div class="pt-6 border-t border-black">
              <p class="text-lg">{$_('aboutUs.content.part2')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>