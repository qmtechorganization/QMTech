<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { _ } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';
  import { configStore } from '$lib/stores/configStore';

  $: isEs = $locale === 'es';
  $: whatsappDigits = ($configStore.whatsapp || '').replace(/\D/g, '');
  $: whatsappUrl = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(isEs ? 'Hola QM Tech, me gustaría una cotización para un sitio web.' : 'Hello QM Tech! I would like a quote for a website.')}`
    : '';

  let contactInView = false;

  onMount(() => {
    const target = document.getElementById('getQuote');
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      contactInView = entry.isIntersecting;
    }, { threshold: 0.2 });
    observer.observe(target);
    return () => observer.disconnect();
  });
</script>

<div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
  {#if whatsappUrl}
    <a
      href={whatsappUrl}
      target="_blank" rel="noopener noreferrer"
      aria-label={$_('floating.whatsapp')}
      in:fly={{ y: 26, duration: 500 }}
      class="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
      style="background-color:#25D366"
    >
      <span class="absolute inset-0 rounded-full opacity-70 group-hover:opacity-0" style="background-color:#25D366;animation:whatsapp-ping 2s ease-out infinite"></span>
      <span class="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
        <span class="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-300 ring-2 ring-white dark:ring-gray-900"></span>
      </span>
      <span class="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-gray-900 opacity-0 scale-90 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 dark:bg-gray-800 dark:text-white">
        {$_('floating.whatsapp')}
      </span>
      <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  {/if}
  {#if !contactInView}
    <a
      href="#getQuote"
      aria-label={$_('floating.email')}
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 200 }}
      class="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 ring-1 ring-gray-300 shadow-lg shadow-black/25 transition-all duration-300 hover:scale-110 active:scale-95 hover:text-accent dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:hover:text-green-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
    >
      <span class="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-gray-900 opacity-0 scale-90 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 dark:bg-gray-800 dark:text-white">
        {$_('floating.email')}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    </a>
  {/if}
</div>

<style>
  @keyframes whatsapp-ping {
    0% { transform: scale(1); opacity: 0.7; }
    70%, 100% { transform: scale(1.45); opacity: 0; }
  }
</style>
