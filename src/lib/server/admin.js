// @ts-nocheck
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

export const ADMIN_COOKIE = 'qm_admin_token';

function getPocketBase() {
  return new PocketBase(env.PB_URL || 'https://qmtechbase.ezhostingit.com');
}

export async function authenticateAdmin(token) {
  if (!token) return null;

  const pb = getPocketBase();
  pb.authStore.save(token);

  try {
    await pb.collection('_superusers').authRefresh();
    return pb.authStore.model;
  } catch {
    return null;
  }
}

export async function requireAdmin(cookies) {
  const model = await authenticateAdmin(cookies.get(ADMIN_COOKIE));
  if (!model) {
    const error = new Error('Unauthorized');
    error.status = 401;
    throw error;
  }
  return model;
}

export async function getSuperuserClient() {
  const pb = getPocketBase();
  if (!env.PB_EMAIL || !env.PB_PASSWORD) {
    throw new Error('PB_EMAIL and PB_PASSWORD are required for admin operations.');
  }
  await pb.collection('_superusers').authWithPassword(env.PB_EMAIL, env.PB_PASSWORD);
  return pb;
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8
  };
}

export function assertManagedCollection(name) {
  if (!name || name.startsWith('_')) {
    const error = new Error('This collection cannot be managed from the panel.');
    error.status = 400;
    throw error;
  }
}
