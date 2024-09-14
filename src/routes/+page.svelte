<script lang="ts">
    import { onMount } from 'svelte';
    import { clientStore, servicesStore } from '$lib/stores/collentionsStore';
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
    import { pb } from "$lib/pocketobase";
    
    onMount(async () => {
        try {
            const clients = await pb.collection('clients').getFullList();
            //console.log('Fetched clients:', clients);
            clientStore.set(clients);
        
        } catch (error) {
            console.error('Failed to fetch client records:', error);
        }

        try {
            let services = await pb.collection('services').getFullList({
                sort: '+order'
            });
            //console.log('Fetched Services:', services);
            servicesStore.set(services);

        } catch (error) {
            console.error('Failed to fetch services records:', error);
        }

    });
    </script>
    

<Header></Header>
<Hero></Hero>
<Services></Services>
<Hosting></Hosting>
<AboutUs></AboutUs>
<OurClients></OurClients>
<HowWeWork></HowWeWork>
<GetQuote></GetQuote>
<Faq></Faq>
<Footer></Footer>