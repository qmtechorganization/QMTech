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

export async function GET({ cookies, params, url }) {
  try {
    const pb = await authorize(cookies, params.collection);
    const page = Number(url.searchParams.get('page') || 1);
    const perPage = Number(url.searchParams.get('perPage') || 50);
    return json(await pb.collection(params.collection).getList(page, perPage, { sort: '-created' }));
  } catch (error) {
    return json({ message: error.message || 'Unable to load records.' }, { status: error.status || 500 });
  }
}

export async function POST({ cookies, params, request }) {
  try {
    const pb = await authorize(cookies, params.collection);
    return json(await pb.collection(params.collection).create(await request.json()), { status: 201 });
  } catch (error) {
    return json({ message: error.message || 'Unable to create record.' }, { status: error.status || 500 });
  }
}
