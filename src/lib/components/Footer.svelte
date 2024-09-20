<script>
    import { _ } from "svelte-i18n";
</script>

<div class="py-8">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-center sm:justify-between flex-wrap gap-8 pb-12 border-b border-gray-100 mb-12">
        <a href="#heroHome" class="inline-block">
          <p class="text-accent text-3xl">QM Tech</p>
        </a>        
        <ul class="flex gap-5 flex-wrap text-">
          <li><a href="#services" class="text-body tracking-tight hover:text-hover transition duration-200">{$_('header.nav.services')}</a></li>
          <li><a href="#about-us" class="text-body tracking-tight hover:text-hover transition duration-200">{$_('header.nav.aboutUs')}</a></li>
          <li><a href="#faqs" class="text-body tracking-tight hover:text-hover transition duration-200">{$_('header.nav.faqs')}</a></li>
        </ul>
        <div class="flex flex-wrap gap-6 items-center">
          <a href="https://www.instagram.com/q_matterstech?igsh=MWljamVseWx1ZnprNw==" class="text-gray-400 hover:text-gray-500 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-.25a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" fill="currentColor"/>
            </svg>            
          </a>
          <a href="https://www.linkedin.com/in/tech-q-matters-947075329/" class="text-gray-400 hover:text-gray-500 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewbox="0 0 24 24" fill="none">
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566324561094&mibextid=ZbWKwL" class="text-gray-400 hover:text-gray-500 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewbox="0 0 94 94" fill="none">
              <path d="M89,0H5C2.239,0,0,2.239,0,5v84c0,2.761,2.239,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M66.93,21.364 l-7.226,0.003c-5.664,0-6.761,2.692-6.761,6.643v8.711h13.511L66.45,50.365H52.943v35.012H38.852V50.365H27.07V36.721h11.782 V26.659c0-11.677,7.133-18.036,17.548-18.036L66.93,8.64V21.364z" fill="currentColor"></path>            </svg>
          </a>
          
          
        </div>
      </div>
      <p class="tracking-tight text-center text-gray-600 text-sm">{$_('footer.copy')}</p>
    </div>
  </div>