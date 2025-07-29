<script>
    import { servicesStore } from '$lib/stores/collentionsStore';
    import { _ } from "svelte-i18n";

    let services = [];

    // Reactive declaration: services will update whenever $servicesStore changes
    $: services = $servicesStore;

    // State for controlling the modal's visibility
    let showModal = false;

    // Function to toggle the modal's visibility
    function toggleModal() {
        showModal = !showModal;
    }

    // Function to close the modal (e.g., when clicking outside or on a close button)
    function closeModal() {
        showModal = false;
    }
</script>

<section id="services" class="pt-32 px-8 md:px-24 pb-20 container mx-auto">
    <div class="">
        <p class="tracking-tight text-center mb-4">{$_('services.tagLine')}</p>
        <h1 class="mb-8 tracking-tight font-heading text-4xl md:text-6xl text-center font-medium ">{$_('services.headline')}</h1>
        <div class="flex flex-wrap">
            {#each services as service}
                <div class="w-full lg:w-1/3 py-4">
                    <div class="border-gray-200 p-4 sm:p-12 rounded-3xl h-full flex flex-col sm:justify-between">
                        <div class="justify-center">
                            <img class="lg:h-28 h-20 mx-auto sm:mx-0 mb-5" src="https://qmtechbase.ezhostingit.com/api/files/{service.collectionId}/{service.id}/{service.icon}" alt="Service Icon">
                            <p class="text-xl text-center sm:text-left tracking-tight font-semibold mb-4">{$_('services.service.'+service.serviceCode+'.header')}</p>
                            <p class="text-gray-300 text-center sm:text-left mx-auto sm:mx-0 tracking-tight mb-12">{$_('services.service.'+service.serviceCode+'.description')}</p>
                        </div>
                        <a href="#getQuote" class="bg-accent mx-auto sm:mx-0 h-14 w-1/2 rounded-full px-5 py-3 inline-flex items-center justify-center tracking-tight text-white font-semibold text-sm hover:bg-hover hover:text-body focus:bg-green-500 focus:ring-4 focus:ring-green-200 transition duration-200">
                            {$_('services.getStarted')}
                        </a>
                    </div>
                </div>
            {/each}
        </div>
        <div class="w-full lg:w-1/3 mx-auto mt-12 px-32 md:px-10">
        <p class="tracking-tight text-center justify-center"></p>
        <a href="/services.pdf" target="_blank" class="bg-accent hover:bg-hover h-16 border w-60 border-gray-200 rounded-full px-5 py-4 inline-flex items-center justify-center hover:text-body tracking-tight font-bold transition duration-200 text-body">{$_('services.viewAllServices')}</a>
        </div>


    </div>
</section>
