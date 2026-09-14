// @ts-nocheck
import { json } from '@sveltejs/kit';
import { requireAdmin } from '$lib/server/admin';

export async function GET({ cookies }) {
  try {
    const pb = await requireAdmin(cookies);
    return json({ email: pb.authStore.model.email });
  } catch {
    return json({ message: 'Unauthorized' }, { status: 401 });
  }
}
