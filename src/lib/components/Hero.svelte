<script lang="ts">
    import { _ } from "svelte-i18n";
    import { locale } from "svelte-i18n";
    import { configStore } from "$lib/stores/configStore";
    import { reveal } from "$lib/actions/reveal";

    $: isEs = $locale === 'es';
    $: landingPrice = isEs ? $configStore.priceLandingEs : $configStore.priceLandingEn;
    $: customPrice = isEs ? $configStore.priceCustomEs : $configStore.priceCustomEn;
    $: priceHookValues = { landing: landingPrice, custom: customPrice } as Record<string, string>;
</script>
<section id="heroHome" class="px-4 md:px-20 pb-16 bg-no-repeat bg-cover relative pt-32 lg:bg-center bg-right bg-black bg-blend-overlay bg-opacity-60" style="background-image: url('/images/3860.jpg')">

    <h1 class="relative font-heading tracking-tight text-white text-center text-5xl md:text-7xl max-w-lg md:max-w-5xl mx-auto mb-6 font-bold" use:reveal>{$_('hero.headline')}</h1>
    <p class="relative text-white tracking-tight mb-4 text-center text-xl text-opacity-80 max-w-2xl mx-auto" use:reveal={{ delay: 100 }}>{$_('hero.subheadline')}</p>
    <p class="relative text-green-300 font-semibold tracking-tight text-center text-lg mb-10" use:reveal={{ delay: 180 }}>{$_('hero.priceHook', { values: priceHookValues })}</p>

    <div class="relative flex flex-wrap justify-center gap-4 mb-12" use:reveal={{ delay: 260 }}>
      <a href="#getQuote" class="btn-shimmer relative bg-accent h-16 rounded-full px-8 py-4 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-hover hover:text-white hover:scale-[1.03] active:scale-[0.98] focus:bg-green-500 focus:ring-4 focus:ring-green-200 transition duration-200">
        <span class="text-white font-bold tracking-tight">{$_('hero.callToAction')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
          <path d="M14 6.66667H7.33333C4.38781 6.66667 2 9.05449 2 12V13.3333M14 6.66667L10 10.6667M14 6.66667L10 2.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
      <a href="#web-offers" class="h-16 rounded-full px-8 py-4 inline-flex items-center justify-center tracking-tight border-2 border-white border-opacity-40 hover:border-opacity-100 hover:bg-white/10 text-white font-bold transition duration-200">
        <span>{$_('hero.seePricing')}</span>
      </a>
    </div>

    <div class="relative flex flex-wrap justify-center gap-x-10 gap-y-3 mb-20 mx-auto max-w-4xl" use:reveal={{ delay: 340 }}>
      <p class="text-white/80 text-sm inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        {$_('hero.trustSatisfaction')}
      </p>
      <p class="text-white/80 text-sm inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        {$_('hero.trustDelivery')}
      </p>
      <p class="text-white/80 text-sm inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        {$_('hero.trustSupport')}
      </p>
    </div>

    <div class="relative flex flex-wrap">
      <div class="w-full lg:w-1/2">
        <a href="#web-offers" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold">{$_('hero.landingLink')}</p>
        </a>
      </div>
      <div class="w-full lg:w-1/2">
        <a href="#web-offers" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold lg:text-right">{$_('hero.customLink')}</p>
        </a>
      </div>
    </div>
  </section>