<script>
    import { _ } from "svelte-i18n";
    let mobileNavOpen = false;
  </script>
  

<section id="heroHome" class="px-4 md:px-20 pb-16 bg-no-repeat bg-cover relative pt-24 lg:bg-center bg-right bg-black bg-blend-overlay bg-opacity-60" style="background-image: url('https://static.shuffle.dev/uploads/files/ec/ec578d7e076a0dfd4b92738b77ade3a71968172c/3860.jpg')">
  
    <h1 class="font-heading tracking-tight text-white text-center text-5xl md:text-7xl max-w-lg md:max-w-5xl mx-auto mb-6 font-bold">"{$_('hero.headline')}"</h1>
    <p class="text-white tracking-tight mb-10 text-center text-xl text-opacity-80 max-w-xl mx-auto">{$_('hero.subheadline')}</p>
    <div class="flex flex-wrap justify-center gap-4 mb-32">
      <a href="#getQuote" class="bg-accent h-16 rounded-full px-6 py-4 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-hover focus:bg-green-500 focus:ring-4 focus:ring-green-200 transition duration-200">
        <span class="text-white font-bold tracking-tight">{$_('hero.callToAction')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
          <path d="M14 6.66667H7.33333C4.38781 6.66667 2 9.05449 2 12V13.3333M14 6.66667L10 10.6667M14 6.66667L10 2.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/3">
        <a href="#services" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold">{$_('hero.customSoftDev')}</p>
        </a>
      </div>
      <div class="w-full lg:w-1/3">
        <a href="#services" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold lg:text-center">{$_('hero.webDev')}</p>
        </a>
      </div>
      <div class="w-full lg:w-1/3">
        <a href="#services" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold lg:text-right">{$_('hero.itTechSup')}</p>
        </a>
      </div>
    </div>
  </section>