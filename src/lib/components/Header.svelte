<script lang="ts">
  import { locale, _ } from 'svelte-i18n';
  import { defaultLocale } from '../../locales/i18n';
  import { browser } from '$app/environment';
  import ThemeToggle from './ThemeToggle.svelte';

  let mobileNavOpen = false;
  let selectedLanguage = defaultLocale;

  // Load the current language from localStorage if available
  if (browser) {
    selectedLanguage = localStorage.getItem('selectedLanguage') || defaultLocale;
  }

  // Change language and store the preference in localStorage
  const changeLanguage = (lang: string) => {
    locale.set(lang);
    selectedLanguage = lang;
    if (browser) {
      localStorage.setItem('selectedLanguage', lang);
    }
mobileNavOpen = false;
  };

  const handleLanguageChange = (event: Event) => {
    changeLanguage((event.currentTarget as HTMLSelectElement).value);
  };
</script>

<div>
  <nav class="relative p-4 md:px-12 bg-body border-b border-gray-200 dark:border-white/10">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="/" class="inline-block">
          <p class="w-64 text-accent text-3xl">QM Tech</p>
        </a>
        <ul class="hidden lg:flex items-center text-2xl gap-2">
          <li><a href="/" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.home')}</a></li>
          <li><a href="/#services" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.services')}</a></li>
          <li><a href="/#about-us" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.aboutUs')}</a></li>
          <li><a href="/#faqs" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.faqs')}</a></li>
        </ul>
      </div>

      <!-- Language Selector for Desktop -->
      <div class="hidden lg:flex items-center gap-4">
        <select bind:value={selectedLanguage} on:change={handleLanguageChange} class="py-2 px-3 text-sm text-body bg-body border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>

        <ThemeToggle />

        <a href="#getQuote" class="btn-shimmer rounded-full border border-gray-200 bg-accent px-5 md:px-10 py-3 h-14 hover:bg-hover focus:ring-4 focus:ring-gray-200 hidden lg:inline-flex items-center justify-center gap-2 transition duration-200">
          <span class="text-sm font-semibold tracking-tight text-white">{$_('header.callToAction')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>

      <!-- Hamburger Menu Button for Mobile -->
      <div class="lg:hidden flex items-center gap-4">
        <ThemeToggle />
        <button type="button" on:click={() => mobileNavOpen = !mobileNavOpen} class="lg:hidden">
          <svg class="navbar-burger text-accent" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="currentColor"></rect>
            <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation Menu -->
  <div class={`fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <button type="button" aria-label="Close menu" on:click={() => mobileNavOpen = !mobileNavOpen} class="fixed inset-0 bg-gray-900 opacity-20"></button>
    <nav class="relative p-8 w-full h-full bg-body overflow-y-auto">
      <div class="flex items-center justify-between">
        <a href="/" class="inline-block">
          <p class="w-64 text-accent text-3xl">QM Tech</p>
        </a>
        <button type="button" aria-label="Close menu" on:click={() => mobileNavOpen = !mobileNavOpen}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Links -->
      <ul class="flex flex-col gap-8 py-12">
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="/" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.home')}</a></li>
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="/#services" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.services')}</a></li>
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="/#about-us" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.aboutUs')}</a></li>
        <li><a on:click={() => mobileNavOpen = !mobileNavOpen} href="/#faqs" class="nav-menu inline-block py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 text-body text-md font-medium tracking-tight rounded-full">{$_('header.nav.faqs')}</a></li>
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
        <select bind:value={selectedLanguage} on:change={handleLanguageChange} class="py-2 px-3 text-sm text-body bg-body border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  </div>
</div>
