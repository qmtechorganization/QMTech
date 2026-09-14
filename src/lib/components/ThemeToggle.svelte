<script>
  import { theme } from '$lib/stores/theme';
</script>

<button
  type="button"
  on:click={() => theme.update((t) => (t === 'dark' ? 'light' : 'dark'))}
  class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-body text-body flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200"
  aria-label="Toggle theme">
  {#if $theme === 'dark'}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {/if}
</button>