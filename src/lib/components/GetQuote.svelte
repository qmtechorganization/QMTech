<script lang="ts">
  import { _ } from "svelte-i18n";
  import {pb} from '../pocketobase';
  import { reveal } from '$lib/actions/reveal';

  let name = '';
  let email = '';
  let service = '';
  let message = '';
  let howdydihoneypot = '';  // howdydihoneypot field

  let submitted = false;
  let submitError = false;

  const serviceOptions = [
    { value: 'Budget Landing Page', labelKey: 'quote.form.service.options.landing' },
    { value: 'Custom Website', labelKey: 'quote.form.service.options.customSite' },
    { value: 'Software Development', labelKey: 'quote.form.service.options.softDev' },
    { value: 'Web Development', labelKey: 'quote.form.service.options.webDev' },
    { value: 'Microsoft 365', labelKey: 'quote.form.service.options.micro365' },
    { value: 'Quality & Safety Software', labelKey: 'quote.form.service.options.qualitySSoftware' },
    { value: 'IT Tech Support', labelKey: 'quote.form.service.options.itTechSup' },
    { value: 'Web Hosting', labelKey: 'quote.form.service.options.webHosting' },
    { value: 'General Inquiries', labelKey: 'quote.form.service.options.generalInquiry' }
  ];

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    // If the howdydihoneypot field is filled, it's likely a bot
    if (howdydihoneypot !== '') {
      console.log('Bot detected, submission ignored.');
      return;  // Stop form submission
    }

    try {
      const data = {
        name: name,
        email: email,
        service: service,
        message: message
      };

      // Saving to the collection triggers the PB Hook automatically
      await pb.collection('quote').create(data);
      submitted = true;
      submitError = false;
    } catch (error) {
      console.error('Error sending message:', error);
      submitError = true;
    }
  }
</script>

<section id="getQuote" class="px-8 md:px-24 pt-10 pb-20 relative overflow-hidden container mx-auto bg-gray-50 dark:bg-white/[0.03]">
  <div class="container flex mx-auto">
    <div class="flex flex-wrap w-full">
      <div class="w-full lg:w-1/2 p-4">
        <div class="flex flex-col gap-6 h-full" use:reveal>
          <div>
            <h1 class="font-heading tracking-tight text-body text-5xl md:text-6xl font-medium mb-4">
              { $_('quote.heading') }
            </h1>
            <p class="tracking-tight text-xl text-gray-600 dark:text-gray-200 max-w-lg mb-4">
              {$_('quote.description')}
            </p>
            <p class="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/>
              </svg>
              {$_('quote.quickNote')}
            </p>
          </div>
          <div class="relative overflow-hidden h-[30rem] w-full mt-6">
            <img class="absolute inset-0 md:w-[80%] w-full h-full object-cover object-center rounded-lg" src="/images/getQuote/getQuote.jpg" alt="Cotización gratis de página web - QM Tech">
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 p-4">
        <div class="lg:pt-8" use:reveal={{ delay: 150 }}>
          {#if submitted}
            <div class="bg-green-600 bg-opacity-10 border border-green-500 rounded-3xl p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" class="mx-auto mb-4">
                <circle cx="12" cy="12" r="10" fill="#22C55E" fill-opacity="0.15"/>
                <path d="M8 12.5l2.5 2.5L16 9" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2 class="text-body text-3xl font-heading font-medium mb-2">{$_('quote.successTitle')}</h2>
              <p class="text-gray-600 dark:text-gray-300">{$_('quote.successMessage')}</p>
            </div>
          {:else}
            <form on:submit={handleSubmit}>
              {#if submitError}
                <div class="mb-6 bg-red-600 bg-opacity-10 border border-red-500 rounded-2xl px-6 py-4">
                  <p class="text-red-600 dark:text-red-300 tracking-tight">{$_('quote.errorMessage')}</p>
                </div>
              {/if}
              <div class="flex flex-wrap -m-4 mb-3">
                <div class="w-full sm:w-1/2 p-4">
                  <label for="contact2-input1" class="block mb-3 text-sm font-medium tracking-tight text-body">{$_('quote.form.name.label')}</label>
                  <input type="text" id="contact2-input1" bind:value={name} class="w-full px-6 py-4 bg-white text-body rounded-full border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:bg-black dark:text-white focus:ring-4 focus:ring-gray-200 outline-none transition duration-200" placeholder="{$_('quote.form.name.placeholder')}" required>
                </div>
                <div class="w-full sm:w-1/2 p-4">
                  <label for="contact2-input2" class="block mb-3 text-sm font-medium tracking-tight text-body">{$_('quote.form.email.label')}</label>
                  <input type="email" id="contact2-input2" bind:value={email} class="w-full px-6 py-4 bg-white text-body rounded-full border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:bg-black dark:text-white focus:ring-4 focus:ring-gray-200 outline-none transition duration-200" placeholder="example@email.com" required>
                </div>
              </div>

              <!-- Service selection -->
              <div class="mb-4">
                <label for="forms4-input1" class="block mb-3 font-medium text-sm tracking-tight text-body">{$_('quote.form.service.label')}</label>
                <div class="relative">
                  <select id="forms4-input1" bind:value={service} class="appearance-none block p-4 w-full text-sm text-body dark:text-white placeholder-gray-400 outline-none border border-gray-300 dark:border-gray-700 focus:border-gray-300 focus:ring-4 focus:ring-orange-200 rounded-full transition duration-200 bg-white dark:bg-black" required>
                    <option value="" disabled selected>{$_('quote.form.service.options.selectOption')}</option>
                    {#each serviceOptions as option}
                      <option value={option.value}>{$_(option.labelKey)}</option>
                    {/each}
                  </select>
                </div>
              </div>

              <!-- howdydihoneypot field (hidden from users) -->
              <div style="display: none;">
                <label for="howdydihoneypot" class="hidden">Leave this field empty</label>
                <input type="text" id="howdydihoneypot" bind:value={howdydihoneypot}>
              </div>

              <!-- Message input -->
              <label for="contact2-input4" class="block mb-3 text-sm font-medium tracking-tight text-body">{$_('quote.form.message.label')}</label>
              <textarea id="contact2-input4" bind:value={message} rows="5" class="w-full px-6 py-4 bg-white text-body dark:bg-black dark:text-white rounded-3xl resize-none mb-4 border border-gray-300 dark:border-gray-700 placeholder-gray-400 focus:ring-4 focus:ring-gray-200 outline-none transition duration-200" placeholder="{$_('quote.form.message.placeholder')}" required></textarea>
              <!-- Checkbox -->
              <div class="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  id="contact9-input9"
                  class="w-4 h-4 text-accent rounded border border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-gray-200 outline-none transition duration-200 mr-2"
                  required>
                <label for="contact9-input9" class="text-sm font-medium tracking-tight text-body">{$_('quote.form.privacyPolicyNotice')}
                  <a class="underline text-accent" href="/privacyPolicy">{$_('quote.form.seePolicy')}</a>
                </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="bg-accent w-full h-16 rounded-full py-4 inline-flex items-center justify-center gap-2 hover:bg-hover focus:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition duration-200 px-10 btn-shimmer">
                <span class="font-bold tracking-tight text-white">{$_('quote.form.submit')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 6.66663H7.33333C4.38781 6.66663 2 9.05444 2 12V13.3333M14 6.66663L10 10.6666M14 6.66663L10 2.66663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
