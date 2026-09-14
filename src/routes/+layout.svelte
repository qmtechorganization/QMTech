<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';
    import FloatingContact from "$lib/components/FloatingContact.svelte";
    import { configStore, CONFIG_DEFAULTS } from '$lib/stores/configStore';

    export let data: { config?: typeof import('$lib/stores/configStore').CONFIG_DEFAULTS } = {};
    configStore.set(data.config ?? CONFIG_DEFAULTS);
</script>

  <slot />
  {#if $page.url.pathname !== '/admin'}
    <FloatingContact />
  {/if}
