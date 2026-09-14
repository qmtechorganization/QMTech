// @ts-nocheck
import { json } from '@sveltejs/kit';
import { requireAdmin, assertManagedCollection } from '$lib/server/admin';

async function authorize(cookies, collection) {
  const pb = await requireAdmin(cookies);
  assertManagedCollection(collection);
  await pb.collections.getOne(collection);
  return pb;
}

export async function GET({ cookies, params, url }) {
  try {
    const pb = await authorize(cookies, params.collection);
    const page = Math.max(1, Number(url.searchParams.get('page') || 1));
    const perPage = Math.min(100, Math.max(1, Number(url.searchParams.get('perPage') || 50)));
    const query = { sort: '-created' };
    try {
      return json(await pb.collection(params.collection).getList(page, perPage, query));
    } catch (error) {
      if (error.status !== 400) throw error;
      return json(await pb.collection(params.collection).getList(page, perPage, {}));
    }
  } catch (error) {
    return json({ message: error.message || 'Unable to load records.' }, { status: error.status || 500 });
  }
}

export async function POST({ cookies, params, request }) {
  try {
    const pb = await authorize(cookies, params.collection);
    const body = request.headers.get('content-type')?.includes('multipart/form-data')
      ? await request.formData()
      : await request.json();
    return json(await pb.collection(params.collection).create(body), { status: 201 });
  } catch (error) {
    return json({ message: error.message || 'Unable to create record.' }, { status: error.status || 500 });
  }
}
