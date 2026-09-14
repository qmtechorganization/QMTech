import { writable } from 'svelte/store';

export const CONFIG_DEFAULTS = {
  whatsapp: '',
  contactEmail: '',
  priceLandingEn: '$299 USD',
  priceLandingEs: '$5,000 MXN',
  priceCustomEn: '$1,500 USD',
  priceCustomEs: '$28,000 MXN',
  deliveryLandingEn: 'Live in 5–7 days',
  deliveryLandingEs: 'En línea en 5–7 días',
  deliveryCustomEn: 'Live in 3–5 weeks',
  deliveryCustomEs: 'En línea en 3–5 semanas',
};

export const configStore = writable({ ...CONFIG_DEFAULTS });