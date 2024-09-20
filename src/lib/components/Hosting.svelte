<script>
  import { _ } from "svelte-i18n";
</script>

<section class="px-4 md:px-24 lg:py-10 content-center container mx-auto">
    <div class="container flex flex-wrap mx-auto -m-4">
      <div class="w-full lg:w-1/3 p-4">
        <p class="tracking-tight text-green-400 font-medium mb-6">{$_('webHosting.tagline')}</p>
        <h1 class="font-heading tracking-tight text-4xl md:text-6xl font-medium mb-6 max-w-xs md:max-w-lg">{$_('webHosting.header')}</h1>
        <p class="tracking-tight text-body text-lg max-w-md mb-12 lg:mb-32">{$_('webHosting.subheader')}</p>
        <div class="w-full h-px bg-gray-200 mb-14"></div>
        <p class="flex items-center tracking-tight text-lg font-semibold mb-2">
          {$_('webHosting.protected')} <img class="w-24 ml-6 mb-4" src="/images/CF_logo_stacked_whitetype.png" alt="cloudflare">
      </p>
      
      </div>
      <div class="w-full lg:w-2/3 p-4">
        <div class="flex lg:justify-end">
          <div class="overflow-x-auto ">
            <div class="flex lg:flex-row flex-col gap-6">
              <div class="lg:w-80 w-full flex-shrink-0">
                <div class="rounded-2xl border border-gray-100 p-7 rounded-4xl">
                  <p class="tracking-tight text-lg font-semibold text-center">
                    {$_('webHosting.starterPack.title')} <br>
                  </p>
                  <p class="tracking-tight text-gray-500 text-center mb-7">{$_('webHosting.starterPack.subtitle')}</p>
                  <ul class="flex flex-col gap-4 mb-8">
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">
                        {$_('webHosting.starterPack.perks.websites')} <br>
                      </span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="size-10">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.email')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.ssl')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.bandwith')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.migration')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.ddosProtection')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.firewall')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.nameservers')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.starterPack.perks.scanner')}</span>
                    </li>
                  </ul>
                  <a href="#getQuote" class="bg-accent hover:bg-hover h-16 w-full border border-gray-200 rounded-full px-5 py-4 inline-flex items-center justify-center hover:text-body tracking-tight font-bold transition duration-200 text-body">{$_('webHosting.getStarted')}</a>
                </div>
              </div>
              <div class="lg:w-80 w-full flex-shrink-0">
                <div class="rounded-2xl border border-gray-100 p-7 rounded-4xl">
                  <p class="tracking-tight text-lg font-semibold text-center">{$_('webHosting.smallBusiness.title')}</p>
                  <p class="tracking-tight text-gray-500 text-center mb-7">{$_('webHosting.smallBusiness.subtitle')}</p>
                  <ul class="flex flex-col gap-4 mb-8">
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.websites')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="size-10">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.email')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.ssl')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.bandwith')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.migration')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.ddosProtection')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.firewall')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.nameservers')}</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none" class="">
                        <path d="M4.16667 10.8333L7.50001 14.1666L15.8333 5.83325" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span class="tracking-tight font-medium">{$_('webHosting.smallBusiness.perks.scanner')}</span>
                    </li>
                  </ul>
                  <a href="#getQuote" class="bg-accent h-16 w-full border border-gray-200 rounded-full px-5 py-4 inline-flex items-center justify-center hover:bg-hover hover:text-body focus:bg-gray-100 focus:ring-4 focus:ring-gray-200 tracking-tight font-bold transition duration-200 text-body">{$_('webHosting.getStarted')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>