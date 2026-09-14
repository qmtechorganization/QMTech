// @ts-nocheck
import { json } from '@sveltejs/kit';
import { getSuperuserClient, requireAdmin } from '$lib/server/admin';

export async function GET({ cookies }) {
  try {
    await requireAdmin(cookies);
    const pb = await getSuperuserClient();
    const collections = await pb.collections.getFullList({ sort: 'name' });

    return json(collections
      .filter((collection) => collection.type !== 'auth' && !collection.name.startsWith('_'))
      .map(({ id, name, fields }) => ({ id, name, fields })));
  } catch (error) {
    return json({ message: error.message || 'Unable to load collections.' }, { status: error.status || 500 });
  }
}
