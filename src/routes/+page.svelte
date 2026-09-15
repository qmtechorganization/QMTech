<script lang="ts">
    import { onMount } from 'svelte';
    import { clientStore, servicesStore } from '$lib/stores/collentionsStore';
    import Header from "$lib/components/Header.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import WebOffers from "$lib/components/WebOffers.svelte";
    import Services from "$lib/components/Services.svelte";
    import Hosting from "$lib/components/Hosting.svelte";
    import HowWeWork from "$lib/components/HowWeWork.svelte";
    import OurClients from "$lib/components/OurClients.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import GetQuote from "$lib/components/GetQuote.svelte";
    import Faq from "$lib/components/Faq.svelte";
    import AboutUs from "$lib/components/AboutUs.svelte";
    import { pb } from "$lib/pocketobase";
    import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE, OG_IMAGE_ALT } from '$lib/seo';

    const pageTitle = 'QM Tech';
    const pageDescription = 'Crea la página web de tu negocio con QM Tech. Diseño web profesional en Rio Bravo, Reynosa y todo México: landing pages desde $5,000 MXN y sitios a medida. SEO, hosting y cotización gratis.';
    const pageUrl = SITE_URL + '/';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used in svelte:head JSON-LD template
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: pageUrl,
        description: SITE_DESCRIPTION,
        inLanguage: 'es-MX'
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used in svelte:head JSON-LD template
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            { '@type': 'Question', name: '¿Cuánto cuesta una página web en Rio Bravo o Reynosa?', acceptedAnswer: { '@type': 'Answer', text: 'Una landing page comienza desde $5,000 MXN y está en línea en 5 a 7 días. Un sitio web personalizado comienza desde $28,000 MXN y se publica en 3 a 5 semanas. Todos los precios son transparentes e incluyen configuración básica o completa de SEO.' } },
            { '@type': 'Question', name: '¿Cuánto tiempo toma publicar una página web?', acceptedAnswer: { '@type': 'Answer', text: 'Una landing page está en línea en 5 a 7 días. Un sitio web personalizado toma de 3 a 5 semanas, dependiendo del alcance.' } },
            { '@type': 'Question', name: '¿Necesito una landing page o un sitio web personalizado?', acceptedAnswer: { '@type': 'Answer', text: 'Una landing page es ideal para promociones, negocios locales y presencia en línea rápido. Un sitio web personalizado es la opción correcta cuando necesitas varias páginas, más contenido y margen para crecer.' } },
            { '@type': 'Question', name: '¿Ofrecen SEO con el desarrollo de páginas web?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los sitios web personalizados incluyen SEO completo (posicionamiento en Google), hosting y configuración de dominio. Las landing pages incluyen configuración básica de SEO.' } },
            { '@type': 'Question', name: '¿Cómo puedo comenzar con QM Tech?', acceptedAnswer: { '@type': 'Answer', text: 'Comienza enviándonos un mensaje por el formulario de cotización o WhatsApp. Analizamos tus necesidades, te damos una cotización gratuita y sin compromiso en menos de 24 horas y creamos un plan a tu medida.' } }
        ]
    };

    onMount(async () => {
        try {
            const clients = await pb.collection('clients').getFullList();
            clientStore.set(clients);

        } catch (error) {
            console.error('Failed to fetch client records:', error);
        }

        try {
            let services = await pb.collection('services').getFullList({
                sort: '+order'
            });
            servicesStore.set(services);

        } catch (error) {
            console.error('Failed to fetch services records:', error);
        }

    });
    </script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <link rel="canonical" href={pageUrl} />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content={OG_IMAGE} />
    <meta property="og:image:alt" content={OG_IMAGE_ALT} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={OG_IMAGE} />
    <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
</svelte:head>

<Header></Header>
<Hero></Hero>
<WebOffers></WebOffers>
<Services></Services>
<HowWeWork></HowWeWork>
<AboutUs></AboutUs>
<OurClients></OurClients>
<Hosting></Hosting>
<Faq></Faq>
<GetQuote></GetQuote>
<Footer></Footer>
