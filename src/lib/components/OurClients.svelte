<script lang="ts">
    import { clientStore } from '$lib/stores/collentionsStore';
    import { _ } from "svelte-i18n";
    import { reveal } from '$lib/actions/reveal';
    import CountUp from '$lib/components/CountUp.svelte';
    
    let clients = [];
    
    $: clients = $clientStore;
      
</script>

<section class="px-8 md:px-24 lg:py-10 content-center container mx-auto bg-gray-50 dark:bg-white/[0.03]">
  <div class="flex flex-wrap -m-4">
    <div class="w-full lg:w-1/2 p-4">
      <h1 class="font-heading tracking-tight text-4xl font-medium max-w-2xl">
        <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
              <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div class="p-lg-5 ps-lg-0" use:reveal>
                  <p class="mb-4 pb-2 text-3xl text-center md:text-left">{$_('clients.content')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
    <div class="w-full lg:w-1/2 p-4">
      <div class="flex flex-wrap -m-4 mb-4" use:reveal={{ delay: 120 }}>
        <div class="w-full sm:w-1/2 p-4">
          <div class="bg-transparent border rounded-2xl py-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
            <CountUp value={5} />
            <p class="tracking-tight text-body text-center">{$_('clients.years')}</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-4">
          <div class="bg-transparent border-2 rounded-2xl py-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
            <CountUp value={clients.length} />
            <p class="tracking-tight text-body text-center">{$_('clients.projects')}</p>
          </div>
        </div>
      </div>
      <div class="bg-transparent border rounded-2xl py-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
        <CountUp value={100} suffix="%" />
        <p class="tracking-tight text-body text-center">{$_('clients.satisfaction')}</p>
      </div>
    </div>
  </div>
</section>