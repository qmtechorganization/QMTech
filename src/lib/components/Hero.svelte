<script>
    let mobileNavOpen = false;
  </script>
  

<section class="px-4 md:px-20 pb-16 bg-no-repeat bg-cover relative pt-24 lg:bg-center bg-right bg-black bg-blend-overlay bg-opacity-60" style="background-image: url('https://static.shuffle.dev/uploads/files/ec/ec578d7e076a0dfd4b92738b77ade3a71968172c/3860.jpg')">
    <div x-data="{ mobileNavOpen: false }">
      <div :class="{'hidden': !mobileNavOpen}" class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
        <div x-on:click.prevent="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-black opacity-20"></div>
        <nav class="relative p-8 w-full h-full bg-white overflow-y-auto">
          <div class="flex items-center justify-between">
            <a href="#" class="inline-block">
              <img class="h-7" src="consulty-assets/logos/consulty-logo2.svg" alt="">
            </a>
            <a x-on:click.prevent="mobileNavOpen = !mobileNavOpen" href="#">
              <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
          <ul class="flex flex-col gap-12 py-12">
            <li>
              <a href="#" class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium tracking-tight">Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewbox="0 0 17 16" fill="none">
                    <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li><a href="#" class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full">Case Studies</a></li>
            <li><a href="#" class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full">Support</a></li>
            <li>
              <a href="#" class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium tracking-tight">Resources</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewbox="0 0 17 16" fill="none">
                    <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
          <div class="flex flex-col gap-4">
            <a href="#" class="rounded-full border border-gray-700 px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center transition duration-200 text-sm font-semibold tracking-tight">Sign In</a>
            <a href="#" class="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200">
              <span class="text-white text-sm font-semibold tracking-tight">Get A Free Consultation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
                <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <h1 class="font-heading tracking-tight text-white text-center text-5xl md:text-7xl max-w-lg md:max-w-5xl mx-auto mb-6 font-bold">"Tailored Tech Solutions for Your Success"</h1>
    <p class="text-white tracking-tight mb-10 text-center text-xl text-opacity-80 max-w-xl mx-auto">From custom applications to efficient management systems, we support you at every step to ensure your technology meets your needs and drives your company's success.</p>
    <div class="flex flex-wrap justify-center gap-4 mb-32">
      <a href="#" class="bg-orange-500 h-16 rounded-full px-6 py-4 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200">
        <span class="text-white font-bold tracking-tight">Get A Free Consultation</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
          <path d="M14 6.66667H7.33333C4.38781 6.66667 2 9.05449 2 12V13.3333M14 6.66667L10 10.6667M14 6.66667L10 2.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/3">
        <a href="#" class="inline-block w-full py-3 border-b-2 border-white">
          <p class="text-white font-semibold">Custom Software Development</p>
        </a>
      </div>
      <div class="w-full lg:w-1/3">
        <a href="#" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold lg:text-center">Web Development</p>
        </a>
      </div>
      <div class="w-full lg:w-1/3">
        <a href="#" class="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
          <p class="text-white font-semibold lg:text-right">IT Technical Support</p>
        </a>
      </div>
    </div>
  </section>