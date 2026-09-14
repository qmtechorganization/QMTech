<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';
  import { configStore } from '$lib/stores/configStore';
  import { reveal } from '$lib/actions/reveal';

  $: isEs = $locale === 'es';
  $: landingPrice = isEs ? $configStore.priceLandingEs : $configStore.priceLandingEn;
  $: landingDelivery = isEs ? $configStore.deliveryLandingEs : $configStore.deliveryLandingEn;
  $: customDelivery = isEs ? $configStore.deliveryCustomEs : $configStore.deliveryCustomEn;

  $: faqParams = {
    faq9: { price: landingPrice, delivery: landingDelivery },
    faq10: { landingDelivery, customDelivery }
  };

  let accordions = [
    { title: 'faq.faqs.faq1.title', content: 'faq.faqs.faq1.content', open: false },
    { title: 'faq.faqs.faq2.title', content: 'faq.faqs.faq2.content', open: false },
    { title: 'faq.faqs.faq3.title', content: 'faq.faqs.faq3.content', open: false },
    { title: 'faq.faqs.faq4.title', content: 'faq.faqs.faq4.content', open: false },
    { title: 'faq.faqs.faq5.title', content: 'faq.faqs.faq5.content', open: false },
    { title: 'faq.faqs.faq6.title', content: 'faq.faqs.faq6.content', open: false },
    { title: 'faq.faqs.faq7.title', content: 'faq.faqs.faq7.content', open: false },
    { title: 'faq.faqs.faq8.title', content: 'faq.faqs.faq8.content', open: false },
    { title: 'faq.faqs.faq9.title', content: 'faq.faqs.faq9.content', paramsKey: 'faq9', open: false },
    { title: 'faq.faqs.faq10.title', content: 'faq.faqs.faq10.content', paramsKey: 'faq10', open: false },
    { title: 'faq.faqs.faq11.title', content: 'faq.faqs.faq11.content', open: false }
  ];

  function faqAnswer(key?: string): Record<string, string> {
    if (!key) return {};
    return (faqParams as unknown as Record<string, Record<string, string>>)[key];
  }

  function toggleAccordion(index: number) {
    accordions[index].open = !accordions[index].open;
  }
</script>

<section id="faqs" class="pt-24">
  <div class="container mx-auto px-4">
    <h1 class="font-heading tracking-tight text-center text-4xl md:text-6xl font-medium mb-12" use:reveal>FAQ</h1>
    <div class="rounded-2xl p-8 md:px16" use:reveal={{ delay: 120 }}>
      {#each accordions as accordion, index}
        <div class="pb-8 border-b border-gray-200 dark:border-white/10 mb-8 group">
          <button type="button" class="w-full text-left cursor-pointer" aria-expanded={accordion.open} on:click={() => toggleAccordion(index)}>
          <div class="flex items-center justify-between w-full gap-4">
            <p class="tracking-tight w-3/4 text-xl font-semibold transition-colors duration-200 group-hover:text-accent">{$_(accordion.title)}</p>
            <div class={accordion.open ? 'hidden' : 'bg-white hover:bg-accent text-body hover:text-white dark:bg-gray-800 transition duration-200 focus:bg-accent focus:ring-4 focus:ring-orange-200 w-8 h-8 flex items-center justify-center rounded-full scale-100 group-hover:scale-110'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 4V8M8 8V12M8 8H12M8 8L4 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div class={accordion.open ? 'bg-white hover:bg-accent text-body hover:text-white dark:bg-gray-800 transition duration-200 focus:bg-accent focus:ring-4 focus:ring-orange-200 w-8 h-8 flex items-center justify-center rounded-full scale-100 group-hover:scale-110' : 'hidden'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
          </button>
          <div class={`overflow-hidden transition-all duration-500 ${accordion.open ? 'h-auto' : 'h-0'}`}>
            <p class="tracking-tight text-body max-w-3xl mt-4">{$_(accordion.content, { values: faqAnswer(accordion.paramsKey) })}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
