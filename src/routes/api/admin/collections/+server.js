// @ts-nocheck
import { json } from '@sveltejs/kit';
import { requireAdmin } from '$lib/server/admin';

export async function GET({ cookies }) {
  try {
    const pb = await requireAdmin(cookies);
    const collections = await pb.collections.getFullList({ sort: 'name' });

    return json(collections
      .filter((collection) => collection.type !== 'auth' && !collection.name.startsWith('_'))
      .map(({ id, name, fields }) => ({ id, name, fields })));
  } catch (error) {
    return json({ message: error.message || 'Unable to load collections.' }, { status: error.status || 500 });
  }
}
