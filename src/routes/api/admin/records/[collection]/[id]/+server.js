// @ts-nocheck
import { json } from '@sveltejs/kit';
import { requireAdmin, assertManagedCollection } from '$lib/server/admin';

async function authorize(cookies, collection) {
  const pb = await requireAdmin(cookies);
  assertManagedCollection(collection);
  await pb.collections.getOne(collection);
  return pb;
}

export async function PATCH({ cookies, params, request }) {
  try {
    const pb = await authorize(cookies, params.collection);
    const body = request.headers.get('content-type')?.includes('multipart/form-data')
      ? await request.formData()
      : await request.json();
    const result = await pb.collection(params.collection).update(params.id, body);
    return json(result);
  } catch (error) {
    return json({
      message: error.message || 'Unable to update record.',
      debug: {
        status: error.status,
        data: error.data,
        response: error.response,
        original: error.originalError ? (error.originalError.message || String(error.originalError)).slice(0, 800) : null
      }
    }, { status: error.status || 500 });
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
