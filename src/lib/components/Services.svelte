<script>
    import { servicesStore } from '$lib/stores/collentionsStore';
    import { _ } from "svelte-i18n";
    import { reveal } from '$lib/actions/reveal';

    let services = [];

    // Reactive declaration: services will update whenever $servicesStore changes
    $: services = $servicesStore;
</script>

<section id="services" class="pt-20 px-8 md:px-24 pb-10 container mx-auto bg-gray-50 dark:bg-white/[0.03]">
    <div class="mb-10" use:reveal>
        <p class="tracking-tight text-center mb-2 text-accent font-medium">{$_('services.tagLine')}</p>
        <h2 class="mb-2 tracking-tight font-heading text-3xl md:text-5xl text-center font-medium text-body">{$_('services.headline')}</h2>
    </div>
    <div class="flex flex-wrap -m-2">
        {#each services as service, index}
            <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                <a href="#getQuote" class="block h-full group bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-accent rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10" use:reveal={{ delay: index * 70 }}>
                    <img class="h-10 mb-3" src="https://qmtechbase.ezhostingit.com/api/files/{service.collectionId}/{service.id}/{service.icon}" alt="Service Icon">
                    <p class="text-body text-lg tracking-tight font-semibold mb-1">{$_('services.service.'+service.serviceCode+'.header')}</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm tracking-tight leading-relaxed">{$_('services.service.'+service.serviceCode+'.description')}</p>
                    <span class="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3 group-hover:translate-x-1 transition-transform duration-200">
                        {$_('services.getStarted')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                </a>
            </div>
        {/each}
    </div>
    <div class="mt-10 flex justify-center">
        <a href="/services.pdf" target="_blank" rel="noopener noreferrer"
           class="group flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-full text-sm font-bold tracking-tight text-body hover:bg-accent hover:text-white dark:hover:bg-accent transition-all duration-300">
            {$_('services.viewAllServices')}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    </div>
</section>
