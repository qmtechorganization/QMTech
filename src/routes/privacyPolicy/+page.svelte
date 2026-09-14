<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import PrivacyPolicy from "$lib/components/PrivacyPolicy.svelte";
    import { SITE_URL, SITE_NAME } from '$lib/seo';

    const pageUrl = SITE_URL + '/privacyPolicy';
 </script>

<svelte:head>
    <title>Aviso de Privacidad | {SITE_NAME}</title>
    <meta name="description" content="Aviso de privacidad de QM Tech. Conoce cómo protegemos y utilizamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares." />
    <link rel="canonical" href={pageUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:title" content={'Aviso de Privacidad | ' + SITE_NAME} />
    <meta property="og:description" content="Conoce cómo QM Tech protege y utiliza tus datos personales." />
</svelte:head>


<Header></Header>
<PrivacyPolicy></PrivacyPolicy>
<Footer></Footer>