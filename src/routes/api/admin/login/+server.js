// @ts-nocheck
import { json } from '@sveltejs/kit';
import {
  ADMIN_COOKIE,
  adminCookieOptions
} from '$lib/server/admin';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

export async function POST({ request, cookies }) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return json({ message: 'Email and password are required.' }, { status: 400 });
  }

  try {
    const pb = new PocketBase(env.PB_URL || 'https://qmtechbase.ezhostingit.com');
    await pb.collection('_superusers').authWithPassword(email, password);
    cookies.set(ADMIN_COOKIE, pb.authStore.token, adminCookieOptions());
    return json({ email: pb.authStore.model.email });
  } catch {
    return json({ message: 'Invalid admin credentials.' }, { status: 401 });
  }
}
