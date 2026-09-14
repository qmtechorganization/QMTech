<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { locale } from 'svelte-i18n';
    import FloatingContact from "$lib/components/FloatingContact.svelte";
    import { configStore, CONFIG_DEFAULTS } from '$lib/stores/configStore';
    import {
        SITE_URL, SITE_NAME, OG_IMAGE,
        CONTACT_EMAIL, SOCIAL_LINKS
    } from '$lib/seo';

    export let data: { config?: typeof import('$lib/stores/configStore').CONFIG_DEFAULTS } = {};
    configStore.set(data.config ?? CONFIG_DEFAULTS);

    onMount(() => {
        return locale.subscribe((value) => {
            document.documentElement.lang = value === 'en' ? 'en' : 'es-MX';
        });
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used in svelte:head JSON-LD template
    const businessSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        image: OG_IMAGE,
        logo: `${SITE_URL}/images/QM-Logo.png`,
        email: CONTACT_EMAIL,
        description: 'Diseño y desarrollo de páginas web, landing pages, desarrollo de software y hosting en Rio Bravo, Reynosa y todo México.',
        priceRange: '$$',
        areaServed: ['Rio Bravo', 'Reynosa', 'Tamaulipas', 'México'],
        sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin],
        makesOffer: [
            { '@type': 'Offer', name: 'Landing page económica', price: '5000', priceCurrency: 'MXN', description: 'Página de una sola página, apta para móvil, en línea en 5 a 7 días.' },
            { '@type': 'Offer', name: 'Sitio web personalizado', price: '28000', priceCurrency: 'MXN', description: 'Sitio web a medida con varias páginas, en línea en 3 a 5 semanas.' }
        ]
    };
</script>

  <svelte:head>
    <meta name="author" content={SITE_NAME} />
    <meta property="og:site_name" content={SITE_NAME} />
    <link rel="alternate" hreflang="es-MX" href={SITE_URL} />
    <link rel="alternate" hreflang="x-default" href={SITE_URL} />
    <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
  </svelte:head>

  <slot />
  {#if $page.url.pathname !== '/admin'}
    <FloatingContact />
  {/if}
