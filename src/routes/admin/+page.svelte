<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  type Collection = { name: string; id: string; fields: Record<string, unknown>[] };
  type RecordData = { id: string; [key: string]: unknown };

  let email = '';
  let password = '';
  let adminEmail = '';
  let loginError = '';
  let error = '';
  let loading = false;
  let authenticated = false;
  let collections: Collection[] = [];
  let selectedCollection: Collection | null = null;
  let records: RecordData[] = [];
  let selectedRecord: RecordData | null = null;
  let recordJson = '{}';

  async function api(path: string, options: { method?: string; body?: string; headers?: Record<string, string> } = {}) {
    const response = await fetch(path, {
      ...options,
      headers: { 'content-type': 'application/json', ...(options.headers || {}) }
    });
    const body = await response.json();
    if (!response.ok) throw new Error(body.message || 'Request failed.');
    return body;
  }

  async function loadCollections() {
    collections = await api('/api/admin/collections');
    if (collections.length > 0) await selectCollection(collections[0]);
  }

  async function checkSession() {
    try {
      const session = await api('/api/admin/session');
      authenticated = true;
      adminEmail = session.email;
      await loadCollections();
    } catch {
      authenticated = false;
    }
  }

  async function login() {
    loginError = '';
    loading = true;
    try {
      const session = await api('/api/admin/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      authenticated = true;
      adminEmail = session.email;
      password = '';
      await loadCollections();
    } catch (requestError) {
      loginError = requestError instanceof Error ? requestError.message : 'Login failed.';
    } finally {
      loading = false;
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    authenticated = false;
    collections = [];
    records = [];
    selectedRecord = null;
  }

  async function selectCollection(collection: Collection) {
    selectedCollection = collection;
    selectedRecord = null;
    error = '';
    try {
      const result = await api(`/api/admin/records/${encodeURIComponent(collection.name)}`);
      records = result.items;
      if (records.length > 0) selectRecord(records[0]);
      else recordJson = '{}';
    } catch (requestError) {
      error = requestError instanceof Error ? requestError.message : 'Unable to load records.';
    }
  }

  function selectRecord(record: RecordData) {
    selectedRecord = record;
    recordJson = JSON.stringify(record, null, 2);
  }

  function newRecord() {
    selectedRecord = null;
    recordJson = '{}';
    error = '';
  }

  async function saveRecord() {
    error = '';
    if (!selectedCollection) return;
    try {
      const data = JSON.parse(recordJson);
      const path = `/api/admin/records/${encodeURIComponent(selectedCollection.name)}`;
      const saved = selectedRecord
        ? await api(`${path}/${selectedRecord.id}`, { method: 'PATCH', body: JSON.stringify(data) })
        : await api(path, { method: 'POST', body: JSON.stringify(data) });
      await selectCollection(selectedCollection);
      selectRecord(saved);
    } catch (requestError) {
      error = requestError instanceof Error && requestError.message.includes('JSON')
        ? 'Record must contain valid JSON.'
        : requestError instanceof Error ? requestError.message : 'Unable to save record.';
    }
  }

  async function deleteRecord() {
    if (!selectedRecord || !confirm('Delete this record?')) return;
    if (!selectedCollection) return;
    error = '';
    try {
      await api(`/api/admin/records/${encodeURIComponent(selectedCollection.name)}/${selectedRecord.id}`, { method: 'DELETE' });
      await selectCollection(selectedCollection);
    } catch (requestError) {
      error = requestError instanceof Error ? requestError.message : 'Unable to delete record.';
    }
  }

  onMount(checkSession);
</script>

<svelte:head>
  <title>QM Tech Admin</title>
</svelte:head>

{#if !authenticated}
  <main class="min-h-screen bg-body px-6 py-16 text-body">
    <form class="mx-auto max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-white/5" on:submit|preventDefault={login}>
      <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">QM Tech</p>
      <h1 class="mb-8 font-heading text-4xl font-medium">Admin panel</h1>
      {#if loginError}<p class="mb-5 rounded-xl bg-red-500/10 px-4 py-3 text-red-600">{loginError}</p>{/if}
      <label class="mb-2 block text-sm font-medium" for="admin-email">Email</label>
      <input id="admin-email" class="mb-5 w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 dark:border-gray-700" type="email" bind:value={email} required>
      <label class="mb-2 block text-sm font-medium" for="admin-password">Password</label>
      <input id="admin-password" class="mb-6 w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 dark:border-gray-700" type="password" bind:value={password} required>
      <button class="w-full rounded-full bg-accent px-5 py-3 font-semibold text-white" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
    </form>
  </main>
{:else}
  <main class="min-h-screen bg-body px-6 py-8 text-body md:px-12">
    <header class="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div><p class="text-sm font-semibold uppercase tracking-widest text-accent">QM Tech</p><h1 class="font-heading text-4xl font-medium">Admin panel</h1></div>
      <div class="flex items-center gap-4 text-sm"><ThemeToggle /><span>{adminEmail}</span><button class="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-700" on:click={logout}>Sign out</button></div>
    </header>

    {#if error}<p class="mb-5 rounded-xl bg-red-500/10 px-4 py-3 text-red-600">{error}</p>{/if}
    <div class="grid gap-6 lg:grid-cols-[16rem_1fr]">
      <aside class="rounded-2xl border border-gray-200 p-4 dark:border-white/10">
        <div class="mb-3 flex items-center justify-between"><h2 class="font-semibold">Collections</h2></div>
        <div class="space-y-1">
          {#each collections as collection}
            <button class={`block w-full rounded-lg px-3 py-2 text-left text-sm ${selectedCollection?.name === collection.name ? 'bg-accent text-white' : 'hover:bg-gray-100 dark:hover:bg-white/10'}`} on:click={() => selectCollection(collection)}>{collection.name}</button>
          {/each}
        </div>
      </aside>

      <section class="grid gap-6 xl:grid-cols-[18rem_1fr]">
        <div class="rounded-2xl border border-gray-200 p-4 dark:border-white/10">
          <div class="mb-4 flex items-center justify-between"><h2 class="font-semibold">{selectedCollection?.name || 'Records'}</h2><button class="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white" on:click={newRecord}>New</button></div>
          <div class="space-y-1">
            {#each records as record}
              <button class={`block w-full truncate rounded-lg px-3 py-2 text-left text-sm ${selectedRecord?.id === record.id ? 'bg-gray-200 dark:bg-white/20' : 'hover:bg-gray-100 dark:hover:bg-white/10'}`} on:click={() => selectRecord(record)}>{record.name || record.title || record.email || record.id}</button>
            {/each}
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 p-5 dark:border-white/10">
          <div class="mb-4 flex items-center justify-between"><h2 class="font-semibold">{selectedRecord ? 'Edit record' : 'New record'}</h2>{#if selectedRecord}<button class="text-sm text-red-600" on:click={deleteRecord}>Delete</button>{/if}</div>
          <p class="mb-3 text-sm text-gray-500">Edit the record as JSON. PocketBase field names and types are preserved.</p>
          <textarea class="min-h-[32rem] w-full rounded-xl border border-gray-300 bg-transparent p-4 font-mono text-sm dark:border-gray-700" bind:value={recordJson} spellcheck="false"></textarea>
          <button class="mt-4 rounded-full bg-accent px-6 py-3 font-semibold text-white" on:click={saveRecord} disabled={!selectedCollection}>Save record</button>
        </div>
      </section>
    </div>
  </main>
{/if}
