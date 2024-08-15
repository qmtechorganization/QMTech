<script lang="ts">
    import { clientStore } from '$lib/stores/clientStore';
    
    let clients = [];
    
    $: clients = $clientStore;
    
    $: {
        console.log('Clients in OurClients.svelte:', clients);
    }

</script>

<div class="px-8 md:px-24 py-24 bg-white container mx-auto px-4">
    <div class="flex flex-wrap -m-4">
      <div class="w-full lg:w-1/2 p-4 justify-center flex sm:justify-start">
        <h2 class="tracking-tight text-black max-w-xs text-6xl">
          Our clients
          <br>
        </h2>
      </div>
      <div class="w-full lg:w-1/2 p-4">
        <div class="flex flex-wrap -m-4">
          
        {#each clients as client}
            <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
                <img class="h-12 mx-auto flex-shrink-0" src="{client.url_logo}" alt="">
             </div>
        {/each}

        </div>
      </div>
    </div>
  </div>