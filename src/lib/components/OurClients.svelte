<script lang="ts">
    import { clientStore } from '$lib/stores/collentionsStore';
    
    let clients = [];
    
    $: clients = $clientStore;
    
    //$: {
      //  console.log('Clients in OurClients.svelte:', clients);
    //}
//flex-shrink-0
</script>

<section class="px-8 md:px-24 lg:py-10 content-center container mx-auto">
  <div class="flex flex-wrap -m-4">
    <div class="w-full lg:w-1/2 p-4">
      <h1 class="font-heading tracking-tight text-4xl font-medium max-w-2xl">
        <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
              <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div class="p-lg-5 ps-lg-0">
                  <p class="mb-4 pb-2 text-3xl text-center md:text-left">With years of experience in custom software development, we have worked with a wide range of industries and have the necessary expertise to deliver effective and scalable solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
    <div class="w-full lg:w-1/2 p-4">
      <div class="flex flex-wrap -m-4 mb-4">
        <div class="w-full sm:w-1/2 p-4 hidden">
          <div class=" bg-transparent border rounded-2xl py-8">
            <h2 class="font-heading tracking-tight text-6xl font-medium text-center mb-1">5</h2>
            <p class="tracking-tight text-body text-center">Years of experience</p>
          </div>
        </div>
        <div class="w-full  p-4">
          <div class="bg-transparent border-2 rounded-2xl py-8">
            <h2 class="font-heading tracking-tight text-6xl font-medium text-center mb-1">2</h2>
            <p class="tracking-tight text-body text-center">Projects completed</p>
          </div>
        </div>
      </div>
      <div class="bg-transparent border rounded-2xl py-8">
        <h2 class="font-heading tracking-tight text-6xl font-medium text-center mb-1">100%</h2>
        <p class="tracking-tight text-body text-center">Client satisfaction</p>
      </div>
    </div>
  </div>
</section>

<div class="px-8 md:px-24 py-2 container mx-auto px-4 hidden">
    <div class="flex flex-wrap -m-4">
      <div class="w-full lg:w-1/2 p-4 justify-center flex sm:justify-start">
        <h2 class="tracking-tight lg:my-auto max-w-xs text-6xl">
          Our clients
          <br>
        </h2>
      </div>
      <div class="w-full lg:w-1/2 p-4">
        <div class="flex flex-wrap -m-4">
          {#each clients as client}
            <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
              <img class="h-32 sm:h-40 lg:h-48 mx-auto object-contain" src="{client.url_logo}" alt="{client.name} logo">
            </div>
          {/each}
        </div>
      </div>
      
    </div>
  </div>