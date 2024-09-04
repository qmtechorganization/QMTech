<script>
    let accordions = [
  {
    "title": "What web hosting plans do you offer?",
    "content": "We provide a range of web hosting plans, including shared, VPS, and dedicated hosting. Our hosting services are designed to be scalable, secure, and reliable, ensuring your website is always accessible and performs optimally.",
    "open": false
  },
  {
    "title": "Can you develop custom software for my business?",
    "content": "Yes, we specialize in custom software development tailored to meet your specific business needs. Whether you need a web application, mobile app, or complex enterprise software, our team of developers is here to help.",
    "open": false
  },
  {
    "title": "How do I purchase Microsoft 365 licenses through your service?",
    "content": "We offer Microsoft 365 licensing with flexible plans to suit your business requirements. Our team can assist you in selecting the right plan, managing licenses, and ensuring seamless integration with your existing IT infrastructure.",
    "open": false
  },
  {
    "title": "What kind of tech support do you provide?",
    "content": "Our tech support services include 24/7 remote assistance, on-site support, troubleshooting, and maintenance. We ensure that your IT systems run smoothly with minimal downtime, providing prompt and efficient solutions to any technical issues.",
    "open": false
  },
  {
    "title": "What is your Quality & Safety Software?",
    "content": "Our Quality & Safety Software is designed to help businesses manage compliance, track safety metrics, and ensure quality standards are met across all operations. It is customizable to fit the unique needs of your industry.",
    "open": false
  },
  {
    "title": "How can I get started with your services?",
    "content": "Getting started is easy! Simply contact us through our website or give us a call. We will discuss your needs, provide a quote, and create a tailored plan to ensure your business benefits from our expertise.",
    "open": false
  },
  {
    "title": "Do you offer ongoing maintenance and updates for the software you develop?",
    "content": "Yes, we provide ongoing maintenance and updates for all software we develop. Our support ensures that your software remains up-to-date, secure, and performs optimally as your business evolves.",
    "open": false
  },
  {
    "title": "What industries do you specialize in?",
    "content": "We have experience working with a variety of industries, including healthcare, finance, manufacturing, and retail. Our team understands the unique challenges of each sector and tailors our solutions to meet those specific needs.",
    "open": false
  },
  {
    "title": "Can I upgrade my service plan as my business grows?",
    "content": "Absolutely. Our services are designed to scale with your business. Whether you need more storage, additional features, or higher-tier support, we offer flexible upgrade options to accommodate your growth.",
    "open": false
  },
  {
    "title": "How secure are your hosting and software solutions?",
    "content": "Security is our top priority. Our hosting services include robust security measures such as firewalls, SSL certificates, and regular security audits. Our software solutions are developed with best practices in cybersecurity to protect your data and systems.",
    "open": false
  }
]
     
    function toggleAccordion(index) {
        accordions[index].open = !accordions[index].open;
    }
</script>

<section id="faqs" class="pt-24">
    <div class="container mx-auto px-4">
        <h1 class="font-heading tracking-tight text-center text-4xl md:text-6xl font-medium mb-12">FAQ</h1>
        <div class="rounded-2xl p-8 md:p-16 mb-12">
            {#each accordions as accordion, index}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="pb-8 border-b border-gray-100 mb-8 cursor-pointer" on:click={() => toggleAccordion(index)}>
                    <div class="flex items-center justify-between gap-4">
                        <p class="tracking-tight text-xl font-semibold">{accordion.title}</p>
                        <div class={accordion.open ? 'hidden' : 'bg-white hover:bg-orange-400 text-black hover:text-white transition duration-200 focus:bg-orange-400 focus:ring-4 focus:ring-orange-200 w-8 h-8 flex items-center justify-center rounded-full'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 4V8M8 8V12M8 8H12M8 8L4 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class={accordion.open ? 'bg-white hover:bg-orange-400 text-black hover:text-white transition duration-200 focus:bg-orange-400 focus:ring-4 focus:ring-orange-200 w-8 h-8 flex items-center justify-center rounded-full' : 'hidden'}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div class={`overflow-hidden transition-all duration-500 ${accordion.open ? 'h-auto' : 'h-0'}`}>
                        <p class="tracking-tight text-body max-w-3xl mt-4">{accordion.content}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
