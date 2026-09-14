// @ts-nocheck
import { json } from '@sveltejs/kit';
import { getSuperuserClient, requireAdmin, assertManagedCollection } from '$lib/server/admin';

async function authorize(cookies, collection) {
  await requireAdmin(cookies);
  assertManagedCollection(collection);
  const pb = await getSuperuserClient();
  await pb.collections.getOne(collection);
  return pb;
}

export async function PATCH({ cookies, params, request }) {
  try {
    const pb = await authorize(cookies, params.collection);
    return json(await pb.collection(params.collection).update(params.id, await request.json()));
  } catch (error) {
    return json({ message: error.message || 'Unable to update record.' }, { status: error.status || 500 });
  }
}

export async function DELETE({ cookies, params }) {
  try {
    const pb = await authorize(cookies, params.collection);
    await pb.collection(params.collection).delete(params.id);
    return json({ success: true });
  } catch (error) {
    return json({ message: error.message || 'Unable to delete record.' }, { status: error.status || 500 });
  }
}
