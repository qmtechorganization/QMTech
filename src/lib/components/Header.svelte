<script>
  import { locale, _ } from 'svelte-i18n';
  import { defaultLocale } from '../../locales/i18n';
  import { browser } from '$app/environment';

  let mobileNavOpen = false;
  let selectedLanguage = defaultLocale;

  // Load the current language from localStorage if available
  if (browser) {
    selectedLanguage = localStorage.getItem('selectedLanguage') || defaultLocale;
  }

  // Change language and store the preference in localStorage
  const changeLanguage = (lang) => {
    locale.set(lang);
    selectedLanguage = lang;
    if (browser) {
      localStorage.setItem('selectedLanguage', lang);
    }
mobileNavOpen = false;
  };
</script>

<div>
  <nav class="relative p-4 md:px-12 bg-black">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="/" class="inline-block">
          <p class="w-64 text-accent text-3xl">QM Tech</p>
        </a>
        <ul class="hidden lg:flex items-center gap-2">
          <li><a href="#services" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-md font-medium tracking-tight rounded-full">{$_('header.nav.services')}</a></li>
          <li><a href="#about-us" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-md font-medium tracking-tight rounded-full">{$_('header.nav.aboutUs')}</a></li>
          <li><a href="#faqs" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-md font-medium tracking-tight rounded-full">{$_('header.nav.faqs')}</a></li>
        </ul>
      </div>

      <!-- Language Selector for Desktop -->
      <div class="hidden lg:flex items-center gap-8">
        <select bind:value={selectedLanguage} on:change={(e) => changeLanguage(e.target.value)} class="py-2 px-3 text-sm text-white bg-black border border-gray-300 rounded-lg focus:outline-none">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>

        <a href="#getQuote" class="rounded-full border border-gray-200 bg-accent px-5 md:px-10 py-3 h-14 hover:bg-hover focus:ring-4 focus:ring-gray-200 hidden lg:inline-flex items-center justify-center gap-2 transition duration-200">
          <span class="text-sm font-semibold tracking-tight text-body">{$_('header.callToAction')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>

      <!-- Hamburger Menu Button for Mobile -->
      <a on:click={() => mobileNavOpen = !mobileNavOpen} href="#" class="lg:hidden">
        <svg class="navbar-burger text-white" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="28" fill="currentColor"></rect>
          <path d="M37 32H19M37 24H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
  </nav>

  <!-- Mobile Navigation Menu -->
  <div class={`fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
    <div on:click={() => mobileNavOpen = !mobileNavOpen} class="fixed inset-0 bg-black opacity-20"></div>
    <nav class="relative p-8 w-full h-full bg-body overflow-y-auto">
      <div class="flex items-center justify-between">
        <a href="#" class="inline-block">
          <p class="w-64 text-accent text-3xl">QM Tech</p>
        </a>
        <a on:click={() => mobileNavOpen = !mobileNavOpen} href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>

      <!-- Mobile Menu Links -->
      <ul class="flex flex-col gap-8 py-12">
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="#services" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-md font-medium tracking-tight rounded-full">{$_('header.nav.services')}</a></li>
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="#about-us" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-md font-medium tracking-tight rounded-full">{$_('header.nav.aboutUs')}</a></li>
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="#faqs" class="nav-menu inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-md font-medium tracking-tight rounded-full">{$_('header.nav.faqs')}</a></li>
      </ul>

      <!-- Get A Quote Button for Mobile -->
      <div class="flex flex-col gap-4">
        <a on:click={() => mobileNavOpen = !mobileNavOpen} href="#getQuote" class="rounded-full bg-accent px-5 py-3 h-14 hover:bg-hover focus:bg-hover focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200">
          <span class="text-white text-sm font-semibold tracking-tight">{$_('header.callToAction')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>

      <!-- Language Selector for Mobile Menu -->
      <div class="flex justify-center mt-8">
        <select bind:value={selectedLanguage} on:change={(e) => changeLanguage(e.target.value)} class="py-2 px-3 text-sm text-white bg-black border border-gray-300 rounded-lg focus:outline-none">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </nav>
  </div>
</div>
