<script>
    // Define any properties or data here if needed
    export let steps = [
        {
      number: '01',
      title: 'Bring the Idea',
      description: 'Share your tech challenge or vision with us, and we’ll craft a roadmap to achieve it.',
      image: '/images/howWeWork/analyze-the-idea.jpg'
    },
    {
      number: '02',
      title: 'We Analyze',
      description: 'Our experts dive deep into your requirements, analyzing every aspect to ensure the best solution.',
      image: '/images/howWeWork/bring-the-idea.jpg'
    },
    {
      number: '03',
      title: 'You Decide, We Execute',
      description: 'Once you approve the plan, our team delivers precise execution, turning your vision into reality.',
      image: '/images/howWeWork/decide-execute.jpg'
    }
    ];
  </script>
  
  <section class="px-8 md:px-24 pt-32 pb-20 container mx-auto">
    <h1 class="font-heading tracking-tight text-4xl md:text-6xl font-medium text-center mb-4">Get started with 3 steps</h1>
    <p class="tracking-tight text-center text-gray-300 text-lg mb-20">It is easy to start a project with us</p>
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
  
  