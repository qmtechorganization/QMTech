// @ts-nocheck
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

export const ADMIN_COOKIE = 'qm_admin_token';

function getPocketBase() {
  return new PocketBase(env.PB_URL || 'https://qmtechbase.ezhostingit.com');
}

async function getClientForToken(token) {
  const pb = getPocketBase();
  pb.authStore.save(token);
  await pb.collection('_superusers').authRefresh();
  return pb;
}

export async function authenticateAdmin(token) {
  if (!token) return null;
  try {
    return (await getClientForToken(token)).authStore.model;
  } catch {
    return null;
  }
}

export async function requireAdmin(cookies) {
  const token = cookies.get(ADMIN_COOKIE);
  if (!token) {
    const error = new Error('Unauthorized');
    error.status = 401;
    throw error;
  }
  try {
    return await getClientForToken(token);
  } catch {
    const error = new Error('Unauthorized');
    error.status = 401;
    throw error;
  }
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
