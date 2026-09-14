import { writable } from "svelte/store";

export const clientStore = writable<Record<string, unknown>[]>([]);

export const servicesStore = writable<Record<string, unknown>[]>([]);

export const contactStore = writable<Record<string, unknown>[]>([]);
