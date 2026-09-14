<script>
      import { _ } from "svelte-i18n";
      import { reveal } from "$lib/actions/reveal";

    // Define any properties or data here if needed
    export let steps = [
        {
      number: '01',
      title: 'howWeWork.step1.heading',
      description: 'howWeWork.step1.description',
      image: '/images/howWeWork/analyze-the-idea.jpg'
    },
    {
      number: '02',
      title: 'howWeWork.step2.heading',
      description: 'howWeWork.step2.description',
      image: '/images/howWeWork/bring-the-idea.jpg'
    },
    {
      number: '03',
      title: 'howWeWork.step3.heading',
      description: 'howWeWork.step3.description',
      image: '/images/howWeWork/decide-execute.jpg'
    }
    ];
  </script>
  
  <section class="px-8 md:px-24 pt-32 pb-20 container mx-auto">
    <h1 class="font-heading tracking-tight text-4xl md:text-6xl font-medium text-center mb-4" use:reveal>{$_('howWeWork.headline')}</h1>
    <p class="tracking-tight text-center text-gray-600 dark:text-gray-300 text-lg mb-20" use:reveal={{ delay: 100 }}>{$_('howWeWork.subheadline')}</p>
    <div class="flex flex-wrap -m-4">
      {#each steps as { number, title, description, image }, index}
        <div class="w-full lg:w-1/3 p-4" use:reveal={{ delay: index * 100 }}>
          <div class="relative group overflow-hidden rounded-2xl" style="height:518px;">
            <img class="absolute bg-black inset-0 w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" src={image} alt={title}>
            <div class="absolute top-8 right-8">
              <div class="bg-white rounded-full w-14 h-14 flex items-center justify-center">
                <p class="tracking-tight text-lg text-black font-semibold">{number}</p>
              </div>
            </div>
            <div class="absolute bottom-8 left-9 right-9 bg-black bg-opacity-60 p-3">
              <p class="tracking-tight text-white text-2xl font-semibold mb-2">{$_(title)}</p>
              <p class="tracking-tight text-white text-opacity-80 max-w-xs">{$_(description)}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  