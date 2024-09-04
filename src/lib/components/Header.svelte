<script>
    let mobileNavOpen = false;
  </script>
  
  <div>
    <nav class="relative p-4 bg-black">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="#" class="inline-block">
            <p class="w-64 text-lime-500 text-3xl">QM Tech</p>
          </a>
          <ul class="hidden lg:flex items-center gap-2">
            <li><a href="#services" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-sm font-medium tracking-tight rounded-full">Services</a></li>
            <li><a href="#our-work" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-sm font-medium tracking-tight rounded-full">Our Work</a></li>
            <li><a href="#about-us" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-sm font-medium tracking-tight rounded-full">About Us</a></li>
            <li><a href="#faqs" class="nav-menu">FAQs</a></li>
          </ul>
        </div>
        <a href="#getQuote" class="rounded-full border border-gray-200 bg-white px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 hidden lg:inline-flex items-center justify-center gap-2 transition duration-200">
          <span class="text-sm font-semibold tracking-tight text-black">Get A Quote</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <a on:click={() => mobileNavOpen = !mobileNavOpen} href="#" class="lg:hidden">
          <svg class="navbar-burger text-white" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="currentColor"></rect>
            <path d="M37 32H19M37 24H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </nav>
    <div class={`fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
      <div on:click={() => mobileNavOpen = !mobileNavOpen} class="fixed inset-0 bg-black opacity-20"></div>
      <nav class="relative p-8 w-full h-full bg-white overflow-y-auto">
        <div class="flex items-center justify-between">
          <a href="#" class="inline-block">
            <img class="h-7" src="consulty-assets/logos/consulty-logo2.svg" alt="">
          </a>
          <a on:click={() => mobileNavOpen = !mobileNavOpen} href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
        <ul class="flex flex-col gap-12 py-12">
          <li>
            <a href="#" class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium tracking-tight">Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </a>
          </li>
        </ul>
        <div class="flex flex-col gap-4">
          <a href="#" class="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200">
            <span class="text-white text-sm font-semibold tracking-tight">Get A Free Consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </div>
  