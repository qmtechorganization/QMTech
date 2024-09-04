<script lang="ts">
    import { clientStore } from '$lib/stores/collentionsStore';
    
    let clients = [];
    
    $: clients = $clientStore;
    
    //$: {
      //  console.log('Clients in OurClients.svelte:', clients);
    //}
//flex-shrink-0
</script>

<div class="px-8 md:px-24 py-2 container mx-auto px-4">
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