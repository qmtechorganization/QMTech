<script>
  import { pb } from '$lib/pocketobase';

  let name = '';
let email = '';
let service = '';
let message = '';
let howdydihoneypot = '';  // howdydihoneypot field

async function handleSubmit(event) {
  event.preventDefault();

  // If the howdydihoneypot field is filled, it's likely a bot
  if (howdydihoneypot !== '') {
    console.log('Bot detected, submission ignored.');
    return;  // Stop form submission
  }

  const payload = {
    name,
    email,
    service,
    message
  };

  try {
    const response = await fetch('https://qmtechapi.q-matters.com/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'New Quote Request',
        body: `

          - Name: ${payload.name}
          - Email: ${payload.email}
          - Service: ${payload.service}
          - Message: ${payload.message}
         
        `
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send the message.');
    }

    alert('Your message has been sent!');
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Failed to send the message.');
  }
}


  
</script>

<section id="getQuote" class="px-8 md:px-24 pt-10 bg-body relative overflow-hidden container mx-auto">
  <div class="container flex mx-auto ">
    <div class="flex flex-wrap  w-full">
      <div class="w-full lg:w-1/2 p-4">
        <div class="flex flex-col gap-10 h-full">
          <h1 class="font-heading tracking-tight text-white text-5xl md:text-6xl font-medium">
            Get a Free Quote
            <br>
          </h1>
          <p class="tracking-tight text-xl text-gray-200 max-w-lg">
            Our team of expert software developers is here to help you achieve your business goals by providing tailored solutions perfectly suited to your requirements.
          </p>
          <div class="relative overflow-hidden h-[30rem] w-full">
            <img class="absolute inset-0 md:w-[80%] w-full h-full object-cover object-center rounded-lg" src="/images/getQuote/getQuote.jpg" alt="Get Quote">
          </div>
        </div>
        
      </div>
      <div class="w-full lg:w-1/2 p-4">
        <div class="lg:pt-24">
          <form on:submit={handleSubmit}>
            <div class="max-w-2xl">
              <div class="flex flex-wrap -m-4 mb-3">
                <div class="w-full sm:w-1/2 p-4">
                  <label for="contact2-input1" class="block mb-3 text-sm font-medium tracking-tight text-white">Your name</label>
                  <input type="text" id="contact2-input1" bind:value={name} class="w-full px-6 py-4 bg-black text-white rounded-full border border-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-gray-200 outline-none transition duration-200" placeholder="Name" required>
                </div>
                <div class="w-full sm:w-1/2 p-4">
                  <label for="contact2-input2" class="block mb-3 text-sm font-medium tracking-tight text-white">Email</label>
                  <input type="email" id="contact2-input2" bind:value={email} class="w-full px-6 py-4 bg-black text-white rounded-full border border-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-gray-200 outline-none transition duration-200" placeholder="example@email.com" required>
                </div>
              </div>
          
              <!-- Service selection -->
              <div class="mb-4">
                <label for="forms4-input1" class="block mb-3 font-medium text-sm tracking-tight text-white">Service</label>
                <div class="relative">
                  <select id="forms4-input1" bind:value={service} class="appearance-none block p-4 w-full text-sm text-gray-500 placeholder-gray-500 outline-none border border-gray-900 focus:border-gray-300 focus:ring-4 focus:ring-orange-200 rounded-full transition duration-200 bg-black" required>
                    <option value="" disabled selected>Select the option</option>
                    <option value="Web Hosting">Web Hosting</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Microsoft 365">Microsoft 365</option>
                    <option value="Quality & Safety Software">Quality and Safety Software</option>
                    <option value="IT Tech Support">IT Tech Support</option>
                    <option value="General Inquiries">General Inquiries</option>
                  </select>
                </div>
              </div>
          
              <!-- howdydihoneypot field (hidden from users) -->
              <div style="display: none;">
                <label for="howdydihoneypot" class="hidden">Leave this field empty</label>
                <input type="text" id="howdydihoneypot" bind:value={howdydihoneypot}>
              </div>
          
              <!-- Message input -->
              <label for="contact2-input4" class="block mb-3 text-sm font-medium tracking-tight text-white">Message</label>
              <textarea id="contact2-input4" bind:value={message} rows="5" class="w-full px-6 py-4 bg-body text-white rounded-3xl resize-none mb-4 border border-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-gray-200 outline-none transition duration-200" placeholder="Write your message" required></textarea>
              
              <!-- Submit button -->
              <button type="submit" class="bg-accent w-full h-16 rounded-full py-4 inline-flex items-center justify-center gap-2 hover:bg-hover focus:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition duration-200 px-10">
                <span class="font-bold tracking-tight text-body">Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 6.66663H7.33333C4.38781 6.66663 2 9.05444 2 12V13.3333M14 6.66663L10 10.6666M14 6.66663L10 2.66663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>

  </div>
</section>
