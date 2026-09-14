// @ts-nocheck
import { json } from '@sveltejs/kit';
import { requireAdmin } from '$lib/server/admin';

export async function GET({ cookies }) {
  try {
    const admin = await requireAdmin(cookies);
    return json({ email: admin.email });
  } catch {
    return json({ message: 'Unauthorized' }, { status: 401 });
  }
}
