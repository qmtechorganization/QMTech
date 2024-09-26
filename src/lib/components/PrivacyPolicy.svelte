<script>
    import { _ } from "svelte-i18n";
</script>

<section class="px-8 md:px-24 lg:py-10 container mx-auto">
    <h1 class="font-heading text-4xl mx-auto text-center font-medium">{$_('privacyPolicy.title')}</h1>
    <p class="mt-4">{$_('privacyPolicy.intro')}</p>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.purposesTitle')}</h2>
    <h3 class="font-semibold mt-4">{$_('privacyPolicy.purposesSecondaryTitle')}</h3>
    <ul class="list-disc pl-5 mt-2">
      {#each Object.values($_('privacyPolicy.primaryPurposes')) as purpose}
        <li>{purpose}</li>
      {/each}
    </ul>
    <h3 class="font-semibold mt-4">{$_('privacyPolicy.purposesSecondaryTitle')}</h3>
    <ul class="list-disc pl-5 mt-2">
      {#each Object.values($_('privacyPolicy.secondaryPurposes')) as purpose}
        <li>{purpose}</li>
      {/each}
    </ul>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.dataTitle')}</h2>
    <ul class="list-disc pl-5 mt-2">
      {#each Object.values($_('privacyPolicy.dataCollected')) as data}
        <li>{data}</li>
      {/each}
    </ul>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.rightsTitle')}</h2>
    <p>{$_('privacyPolicy.rightsIntro')}</p>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.responseTimeTitle')}</h2>
    <p>{$_('privacyPolicy.responseTime')}</p>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.responseMethodTitle')}</h2>
    <p>{$_('privacyPolicy.responseMethod')}</p>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.trackingTechTitle')}</h2>
    <p>{$_('privacyPolicy.trackingTechIntro')}</p>
    <ul class="list-disc pl-5 mt-2">
      {#each Object.values($_('privacyPolicy.trackingTechData')) as data}
        <li>{data}</li>
      {/each}
    </ul>
  
    <h2 class="mt-6 font-semibold">{$_('privacyPolicy.changesTitle')}</h2>
    <p>{$_('privacyPolicy.changesIntro')}</p>
  
    <p class="mt-6">{$_('privacyPolicy.lastUpdate')}</p>
  </section>