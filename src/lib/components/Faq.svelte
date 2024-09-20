<script>
  import { _ } from "svelte-i18n";
    let accordions = [
  {
    "title": $_('faq.faqs.faq1.title'),
    "content": $_('faq.faqs.faq1.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq2.title'),
    "content": $_('faq.faqs.faq2.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq3.title'),
    "content": $_('faq.faqs.faq3.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq4.title'),
    "content": $_('faq.faqs.faq4.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq5.title'),
    "content": $_('faq.faqs.faq5.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq6.title'),
    "content": $_('faq.faqs.faq6.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq7.title'),
    "content": $_('faq.faqs.faq7.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq8.title'),
    "content": $_('faq.faqs.faq8.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq7.title'),
    "content": $_('faq.faqs.faq7.content'),
    "open": false
  },
  {
    "title": $_('faq.faqs.faq8.title'),
    "content": $_('faq.faqs.faq8.title'),
    "open": false
  }
]
     
    function toggleAccordion(index) {
        accordions[index].open = !accordions[index].open;
    }
</script>

<section id="faqs" class="pt-24">
    <div class="container mx-auto px-4">
        <h1 class="font-heading tracking-tight text-center text-4xl md:text-6xl font-medium mb-12">FAQ</h1>
        <div class="rounded-2xl p-8 md:px16">
            {#each accordions as accordion, index}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="pb-8 border-b border-gray-100 mb-8 cursor-pointer" on:click={() => toggleAccordion(index)}>
                    <div class="flex items-center justify-between w-full gap-4">
                        <p class="tracking-tight w-3/4 text-xl font-semibold">{accordion.title}</p>
                        <div class={accordion.open ? 'hidden' : 'bg-white hover:bg-accent text-black hover:text-white transition duration-200 focus:bg-accent focus:ring-4 focus:ring-orange-200 w-8 h-8 flex items-center justify-center rounded-full'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 4V8M8 8V12M8 8H12M8 8L4 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class={accordion.open ? 'bg-white hover:bg-accent text-black hover:text-white transition duration-200 focus:bg-accent focus:ring-4 focus:ring-orange-200 w-8 h-8 flex items-center justify-center rounded-full' : 'hidden'}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div class={`overflow-hidden transition-all duration-500 ${accordion.open ? 'h-auto' : 'h-0'}`}>
                        <p class="tracking-tight text-body max-w-3xl mt-4">{accordion.content}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
