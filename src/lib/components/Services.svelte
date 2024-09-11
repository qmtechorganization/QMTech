<script>
    
    import { servicesStore } from '$lib/stores/collentionsStore';
    
    let services = [];
    
    $: services = $servicesStore;

</script>

  <section id="services" class="pt-32 pb-2">
    <div class="container mx-auto px-4">
      <p class="tracking-tight mb-4 text-center">Our services</p>
      <h1 class="mb-20 tracking-tight font-heading text-4xl md:text-6xl text-center font-medium mb-18">We shape the life of tomorrow</h1>
      <div class="flex flex-wrap -m-4 mb-20">
        {#each services as service}
        <div class="w-full lg:w-1/3 p-4">
          <div class="border-gray-200 p-12 rounded-3xl h-full flex flex-col justify-between">
            <div>
              <img class="lg:h-28 h-20 mb-5" src="https://qmtechbase.ezhostingit.com/api/files/{service.collectionId}/{service.id}/{service.icon}" alt="Service Icon">
              <p class="text-xl tracking-tight font-semibold mb-4">{service.service_name}</p>
              <p class="text-gray-300 tracking-tight mb-12">{service.description}</p>
            </div>
            <a href="#getQuote" class="bg-accent h-14 w-1/2 rounded-full px-5 py-3 inline-flex items-center justify-center tracking-tight text-white font-semibold text-sm hover:bg-hover hover:text-body focus:bg-green-500 focus:ring-4 focus:ring-green-200 transition duration-200">
              Get Started
            </a>
          </div>
        </div>
      {/each}
      </div>
      <p class="tracking-tight text-center"></p>
    </div>
  </section>