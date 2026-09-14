// @ts-nocheck
import { json } from '@sveltejs/kit';
import { ADMIN_COOKIE } from '$lib/server/admin';

export function POST({ cookies }) {
  cookies.delete(ADMIN_COOKIE, { path: '/' });
  return json({ success: true });
}
