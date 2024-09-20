<script>
      import { _ } from "svelte-i18n";

    // Define any properties or data here if needed
    export let steps = [
        {
      number: '01',
      title: $_('howWeWork.step1.heading'),
      description: $_('howWeWork.step1.description'),
      image: '/images/howWeWork/analyze-the-idea.jpg'
    },
    {
      number: '02',
      title: $_('howWeWork.step2.heading'),
      description: $_('howWeWork.step2.description'),
      image: '/images/howWeWork/bring-the-idea.jpg'
    },
    {
      number: '03',
      title: $_('howWeWork.step3.heading'),
      description: $_('howWeWork.step3.description'),
      image: '/images/howWeWork/decide-execute.jpg'
    }
    ];
  </script>
  
  <section class="px-8 md:px-24 pt-32 pb-20 container mx-auto">
    <h1 class="font-heading tracking-tight text-4xl md:text-6xl font-medium text-center mb-4">{$_('howWeWork.headline')}</h1>
    <p class="tracking-tight text-center text-gray-300 text-lg mb-20">{$_('howWeWork.subheadline')}</p>
    <div class="flex flex-wrap -m-4">
      {#each steps as { number, title, description, image }}
        <div class="w-full lg:w-1/3 p-4">
          <div class="relative" style="height:518px;">
            <img class="absolute bg-black inset-0 w-full h-full object-cover rounded-2xl brightness-75" src={image} alt={title}>
            <div class="absolute top-8 right-8">
              <div class="bg-white rounded-full w-14 h-14 flex items-center justify-center">
                <p class="tracking-tight text-lg text-black font-semibold">{number}</p>
              </div>
            </div>
            <div class="absolute bottom-8 left-9 right-9 bg-body bg-opacity-60 p-3">
              <p class="tracking-tight text-white text-2xl font-semibold mb-2">{title}</p>
              <p class="tracking-tight text-white text-opacity-80 max-w-xs">{description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  