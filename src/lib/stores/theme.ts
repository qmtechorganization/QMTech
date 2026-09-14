import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const stored = browser ? localStorage.getItem('theme') : null;
const initial = stored === 'dark' ? 'dark' : 'light';

export const theme = writable(initial);

if (browser) {
  theme.subscribe((value) => {
    document.documentElement.classList.toggle('dark', value === 'dark');
    localStorage.setItem('theme', value);
  });
}