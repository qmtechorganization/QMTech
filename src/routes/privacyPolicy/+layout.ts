import { browser } from '$app/environment';
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import { defaultLocale } from '../../locales/i18n';


export const load: LayoutLoad = async () => {
	if (browser) {
		// Check if a language is already stored in localStorage
		const storedLang = localStorage.getItem('selectedLanguage');
		if (storedLang) {
			// If we have a stored language, use it
			locale.set(storedLang);
			console.log(storedLang);
		} else {
			// Otherwise, fall back to the browser language and store it
			locale.set(defaultLocale);
			localStorage.setItem('selectedLanguage', defaultLocale); // Persist the language
		}
	}
	await waitLocale(); // Wait until the locale is ready
};
