import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
import { CONFIG_DEFAULTS } from '$lib/stores/configStore';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  const config = { ...CONFIG_DEFAULTS };

  if (!env.PB_EMAIL || !env.PB_PASSWORD) {
    return { config };
  }

  try {
    const pb = new PocketBase(env.PB_URL || 'https://qmtechbase.ezhostingit.com');
    await pb.collection('_superusers').authWithPassword(env.PB_EMAIL, env.PB_PASSWORD);
    const record = (await pb.collection('config').getFullList())[0];

    if (record) {
    for (const key of Object.keys(CONFIG_DEFAULTS) as Array<keyof typeof CONFIG_DEFAULTS>) {
        if (typeof record[key] === 'string' && record[key].trim() !== '') {
          config[key] = record[key];
        }
      }
    }
  } catch (error) {
    console.error('Failed to fetch config records:', error);
  }

  return { config };
};
