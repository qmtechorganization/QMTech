<script>
  import { _ } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';
  import { configStore } from '$lib/stores/configStore';
  import { reveal } from '$lib/actions/reveal';

  $: isEs = $locale === 'es';
  $: landingPrice = isEs ? $configStore.priceLandingEs : $configStore.priceLandingEn;
  $: customPrice = isEs ? $configStore.priceCustomEs : $configStore.priceCustomEn;
  $: landingDelivery = isEs ? $configStore.deliveryLandingEs : $configStore.deliveryLandingEn;
  $: customDelivery = isEs ? $configStore.deliveryCustomEs : $configStore.deliveryCustomEn;

  const landingPerks = [
    'webOffers.landing.perks.perk1',
    'webOffers.landing.perks.perk2',
    'webOffers.landing.perks.perk3',
    'webOffers.landing.perks.perk4',
    'webOffers.landing.perks.perk5',
    'webOffers.landing.perks.perk6'
  ];

  const customPerks = [
    'webOffers.custom.perks.perk1',
    'webOffers.custom.perks.perk2',
    'webOffers.custom.perks.perk3',
    'webOffers.custom.perks.perk4',
    'webOffers.custom.perks.perk5',
    'webOffers.custom.perks.perk6'
  ];
</script>

<section id="web-offers" class="px-8 md:px-24 pt-32 pb-20 container mx-auto">
  <div class="mb-14" use:reveal>
    <p class="tracking-tight text-center mb-4 font-medium text-accent">{$_('webOffers.tagLine')}</p>
    <h1 class="mb-4 font-heading tracking-tight text-body text-4xl md:text-6xl text-center font-medium">{$_('webOffers.headline')}</h1>
    <p class="text-gray-600 dark:text-gray-300 text-center tracking-tight text-xl max-w-2xl mx-auto">{$_('webOffers.subheadline')}</p>
  </div>

  <div class="flex flex-wrap -m-4 items-stretch">
    <div class="w-full lg:w-1/2 p-4">
      <div class="bg-white text-body dark:bg-[#141714] rounded-3xl p-8 md:p-12 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/10" use:reveal={{ delay: 100 }}>
        <p class="tracking-tight font-semibold uppercase tracking-wider text-sm text-accent mb-6">{$_('webOffers.landing.badge')}</p>
        <h2 class="font-heading text-3xl md:text-4xl font-medium mb-2">{$_('webOffers.landing.title')}</h2>
        <p class="mb-2 text-3xl font-bold text-accent">{landingPrice}</p>
        <p class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {landingDelivery}
        </p>
        <ul class="flex flex-col gap-3 mb-10">
          {#each landingPerks as perk}
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="mt-0.5 flex-shrink-0">
                <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="tracking-tight">{$_(perk)}</span>
            </li>
          {/each}
        </ul>
        <a href="#getQuote" class="btn-shimmer mt-auto bg-accent hover:bg-hover h-14 rounded-full inline-flex items-center justify-center gap-2 font-bold tracking-tight text-white hover:text-white hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-accent transition duration-200">
          {$_('webOffers.landing.cta')}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66663H7.33333C4.38781 6.66663 2 9.05444 2 12V13.3333M14 6.66663L10 10.6666M14 6.66663L10 2.66663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="w-full lg:w-1/2 p-4">
      <div class="bg-white text-body dark:bg-[#141714] rounded-3xl p-8 md:p-12 h-full flex flex-col border-4 border-accent relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/20" use:reveal={{ delay: 200 }}>
        <p class="tracking-tight font-semibold uppercase tracking-wider text-sm text-accent mb-6">{$_('webOffers.custom.badge')}</p>
        <h2 class="font-heading text-3xl md:text-4xl font-medium mb-2">{$_('webOffers.custom.title')}</h2>
        <p class="mb-2 text-3xl font-bold text-accent">{customPrice}</p>
        <p class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {customDelivery}
        </p>
        <ul class="flex flex-col gap-3 mb-10">
          {#each customPerks as perk}
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="mt-0.5 flex-shrink-0">
                <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="tracking-tight">{$_(perk)}</span>
            </li>
          {/each}
        </ul>
        <a href="#getQuote" class="btn-shimmer mt-auto bg-gray-900 dark:bg-accent hover:bg-hover h-14 rounded-full inline-flex items-center justify-center gap-2 font-bold tracking-tight text-white hover:text-white hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-accent transition duration-200">
          {$_('webOffers.custom.cta')}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66663H7.33333C4.38781 6.66663 2 9.05444 2 12V13.3333M14 6.66663L10 10.6666M14 6.66663L10 2.66663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
</div>
</section>