<script>
    import { onMount } from "svelte";
    import "../app.css";
    import FloatingContact from "$lib/components/FloatingContact.svelte";
    import { configStore, CONFIG_DEFAULTS } from '$lib/stores/configStore';
    import { pb } from "$lib/pocketobase";

    onMount(async () => {
        try {
            const records = await pb.collection('config').getFullList();
            const config = records[0];
            if (config) {
                const merged = { ...CONFIG_DEFAULTS };
                for (const key of Object.keys(CONFIG_DEFAULTS)) {
                    if (typeof config[key] === 'string' && config[key].trim() !== '') {
                        merged[key] = config[key];
                    }
                }
                configStore.set(merged);
            }
        } catch (error) {
            console.error('Failed to fetch config records:', error);
        }
    });
  </script>

  <slot />
  <FloatingContact />