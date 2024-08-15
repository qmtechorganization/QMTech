<script lang="ts">
    import { onMount } from 'svelte';
    import PocketBase from "pocketbase";
    import { clientStore } from '$lib/stores/clientStore';
    import Header from "$lib/components/Header.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Services from "$lib/components/Services.svelte";
    import Hosting from "$lib/components/Hosting.svelte";
    import HowWeWork from "$lib/components/HowWeWork.svelte";
    import OurClients from "$lib/components/OurClients.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import GetQuote from "$lib/components/GetQuote.svelte";
    import Faq from "$lib/components/Faq.svelte";
    import AboutUs from "$lib/components/AboutUs.svelte";
    
    const pb = new PocketBase('https://qmtechbase.ezhostingit.com');
    
    onMount(async () => {
        try {
            const clients = await pb.collection('clients').getFullList();
            console.log('Fetched clients:', clients);
            clientStore.set(clients);
        } catch (error) {
            console.error('Failed to fetch client records:', error);
        }
    });
    </script>
    
    <!-- Your component template here -->

<Header></Header>
<Hero></Hero>
<Services></Services>
<Hosting></Hosting>
<HowWeWork></HowWeWork>
<AboutUs></AboutUs>
<OurClients></OurClients>
<GetQuote></GetQuote>
<Faq></Faq>
<Footer></Footer>