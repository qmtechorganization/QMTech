import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

export const defaultLocale = 'en'

register('en', () => import('./en.json'))
register('es', () => import('./es.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? localStorage.getItem('selectedLanguage') : defaultLocale,
})