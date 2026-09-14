<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { COLLECTION_PRESENTATION, collectionLabel } from '$lib/admin/collectionConfig';

  type Field = {
    name: string;
    type: string;
    required?: boolean;
    system?: boolean;
    options?: { values?: string[] };
    mimeTypes?: string[];
  };

  type Collection = { name: string; id: string; fields: Field[] };
  type RecordData = { id: string; [key: string]: unknown };

  const PER_PAGE = 50;

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
  let page = 1;
  let totalPages = 1;
  let totalItems = 0;
  let selectedRecord: RecordData | null = null;
  let formData: Record<string, unknown> = {};
  let fileData: Record<string, File> = {};
  let saving = false;
  let showModal = false;

  $: editableFields = selectedCollection?.fields.filter(
    (field) => !field.system && !['id', 'created', 'updated'].includes(field.name)
  ) || [];
  $: configuredTableFields = COLLECTION_PRESENTATION[selectedCollection?.name || '']?.tableFields || [];
  $: tableFields = configuredTableFields
    .map((name) => editableFields.find((field) => field.name === name))
    .filter((field): field is Field => Boolean(field));

  async function api(path: string, options: { method?: string; body?: string | FormData; headers?: Record<string, string> } = {}) {
    try {
      const response = await fetch(path, {
        ...options,
        headers: options.body instanceof FormData
          ? options.headers
          : { 'content-type': 'application/json', ...(options.headers || {}) }
      });
      let body;
      try { body = await response.json(); } catch { body = null; }
      if (!response.ok) {
        if (response.status === 401) authenticated = false;
        throw new Error(body?.message || `Request failed (${response.status}).`);
      }
      return body;
    } catch (networkError) {
      if (networkError instanceof TypeError) {
        throw new Error('Network error. Check your connection and try again.');
      }
      throw networkError;
    }
  }

  async function fetchRecords(collection: Collection, target = 1) {
    error = '';
    try {
      const result = await api(`/api/admin/records/${encodeURIComponent(collection.name)}?page=${target}&perPage=${PER_PAGE}`);
      records = result.items;
      page = result.page;
      totalPages = result.totalPages;
      totalItems = result.totalItems;
    } catch (requestError) {
      error = requestError instanceof Error ? requestError.message : 'Unable to load records.';
    }
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
    page = 1;
    totalPages = 1;
    totalItems = 0;
    selectedCollection = null;
    selectedRecord = null;
    formData = {};
    fileData = {};
    error = '';
    showModal = false;
  }

  async function selectCollection(collection: Collection) {
    selectedCollection = collection;
    selectedRecord = null;
    formData = {};
    fileData = {};
    showModal = false;
    records = [];
    page = 1;
    totalPages = 1;
    totalItems = 0;
    await fetchRecords(collection, 1);
  }

  function loadPage(target: number) {
    if (!selectedCollection || target < 1 || target > totalPages) return;
    return fetchRecords(selectedCollection, target);
  }

  function newRecord() {
    selectedRecord = null;
    formData = {};
    fileData = {};
    error = '';
    showModal = true;
  }

  function editRecord(record: RecordData) {
    selectedRecord = record;
    formData = {};
    fileData = {};
    for (const field of editableFields) {
      if (field.type === 'file') continue;
      formData[field.name] = record[field.name] ?? defaultValue(field);
    }
    showModal = true;
  }

  function defaultValue(field: Field) {
    if (field.type === 'bool') return false;
    if (field.type === 'number') return 0;
    return '';
  }

  function updateField(name: string, value: unknown) {
    formData = { ...formData, [name]: value };
  }

  function handleCheckbox(event: Event, name: string) {
    updateField(name, (event.currentTarget as HTMLInputElement).checked);
  }

  function handleSelect(event: Event, name: string) {
    updateField(name, (event.currentTarget as HTMLSelectElement).value);
  }

  function handleInput(event: Event, field: Field) {
    const value = (event.currentTarget as HTMLInputElement | HTMLTextAreaElement).value;
    updateField(field.name, field.type === 'number' ? Number(value) : value);
  }

  function handleFile(event: Event, name: string) {
    const file = (event.currentTarget as HTMLInputElement).files?.[0];
    if (file) fileData = { ...fileData, [name]: file };
  }

  function fieldValue(field: Field) {
    return formData[field.name] ?? defaultValue(field);
  }

  function fieldLabel(field: Field) {
    return COLLECTION_PRESENTATION[selectedCollection?.name || '']?.fieldLabels?.[field.name] || field.name;
  }

  function displayValue(value: unknown) {
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  }

  async function saveRecord() {
    if (!selectedCollection) return;
    error = '';
    saving = true;
    try {
      const path = `/api/admin/records/${encodeURIComponent(selectedCollection.name)}`;
      const payload = new FormData();
      for (const field of editableFields) {
        if (field.type === 'file') continue;
        const value = formData[field.name];
        if (value !== undefined && value !== null && value !== '') {
          payload.append(field.name, String(value));
        }
      }
      for (const [name, file] of Object.entries(fileData)) payload.append(name, file);
      const saved = selectedRecord
        ? await api(`${path}/${selectedRecord.id}`, { method: 'PATCH', body: payload })
        : await api(path, { method: 'POST', body: payload });
      await selectCollection(selectedCollection);
      showModal = false;
      selectedRecord = saved;
    } catch (requestError) {
      error = requestError instanceof Error ? requestError.message : 'Unable to save record.';
    } finally {
      saving = false;
    }
  }

  async function deleteRecord(record: RecordData) {
    if (!selectedCollection || !confirm('Delete this record?')) return;
    error = '';
    try {
      await api(`/api/admin/records/${encodeURIComponent(selectedCollection.name)}/${record.id}`, { method: 'DELETE' });
      await selectCollection(selectedCollection);
    } catch (requestError) {
      error = requestError instanceof Error ? requestError.message : 'Unable to delete record.';
    }
  }

  onMount(checkSession);
</script>

<svelte:head>
  <title>QM Tech Admin</title>
  <meta name="robots" content="noindex, nofollow" />
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
  <main class="min-h-screen bg-[#f6f7f8] text-gray-900 dark:bg-[#101211] dark:text-white">
    <header class="border-b border-gray-200 bg-white dark:border-white/10 dark:bg-[#171a18]">
      <div class="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <div class="flex items-center gap-3"><div class="grid h-9 w-9 place-items-center rounded-xl bg-accent font-bold text-white">Q</div><div><p class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">QM Tech</p><h1 class="font-heading text-xl font-semibold">Content manager</h1></div></div>
        <div class="flex items-center gap-3 text-sm"><ThemeToggle /><span class="hidden text-gray-500 sm:inline dark:text-gray-300">{adminEmail}</span><button class="rounded-lg border border-gray-300 px-3 py-2 font-medium hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-white/10" on:click={logout}>Sign out</button></div>
      </div>
    </header>

    <div class="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-6 lg:flex-row lg:px-8">
      <aside class="w-full shrink-0 lg:w-60">
        <div class="rounded-2xl border border-gray-200 bg-white p-3 dark:border-white/10 dark:bg-[#171a18] lg:sticky lg:top-6">
          <div class="mb-3 px-3 pt-2"><p class="text-xs font-bold uppercase tracking-widest text-gray-400">Manage</p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Collections</p></div>
          <nav class="flex gap-1 overflow-x-auto lg:block lg:space-y-1">
            {#each collections as collection}
              <button class={`whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-sm font-medium transition lg:block lg:w-full ${selectedCollection?.name === collection.name ? 'bg-accent text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10'}`} on:click={() => selectCollection(collection)}>{collectionLabel(collection.name)}</button>
            {/each}
          </nav>
        </div>
      </aside>

      <section class="min-w-0 flex-1">
        {#if error}<div class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300">{error}</div>{/if}
        <div class="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div><p class="mb-1 text-sm text-gray-500 dark:text-gray-400">Collection</p><h2 class="font-heading text-3xl font-semibold">{selectedCollection ? collectionLabel(selectedCollection.name) : 'Select a collection'}</h2></div>
          <button class="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95" on:click={newRecord} disabled={!selectedCollection}>+ New record</button>
        </div>

        {#if selectedCollection}
          <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#171a18]">
            <div class="overflow-x-auto">
              <table class="w-full min-w-[720px] text-left text-sm">
                <thead class="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
                  <tr><th class="w-16 px-5 py-4">#</th>{#each tableFields as field}<th class="px-5 py-4">{fieldLabel(field)}</th>{/each}<th class="px-5 py-4 text-right">Actions</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-white/10">
                  {#if records.length === 0}
                    <tr><td colspan={tableFields.length + 2} class="px-5 py-12 text-center text-gray-500">No records found.</td></tr>
                  {:else}
                    {#each records as record, index}
                      <tr class="transition hover:bg-gray-50 dark:hover:bg-white/[0.03]">
                        <td class="px-5 py-4 text-gray-400">{(page - 1) * PER_PAGE + index + 1}</td>
                        {#each tableFields as field}<td class="max-w-[15rem] truncate px-5 py-4 font-medium">{displayValue(record[field.name])}</td>{/each}
                        <td class="whitespace-nowrap px-5 py-4 text-right"><button class="mr-3 font-semibold text-accent hover:underline" on:click={() => editRecord(record)}>Edit</button><button class="font-semibold text-red-600 hover:underline" on:click={() => deleteRecord(record)}>Delete</button></td>
                      </tr>
                    {/each}
                  {/if}
                </tbody>
              </table>
            </div>
            {#if totalPages > 1 || totalItems > 0}
              <div class="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 px-5 py-4 dark:border-white/10">
                <p class="text-sm text-gray-500 dark:text-gray-400">{totalItems} record{totalItems === 1 ? '' : 's'}</p>
                {#if totalPages > 1}
                  <div class="flex items-center gap-2 text-sm">
                    <button type="button" class="rounded-lg border border-gray-300 px-3 py-2 font-medium disabled:opacity-40 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-white/10" disabled={page <= 1} on:click={() => loadPage(page - 1)}>Previous</button>
                    <span class="px-2 text-gray-500 dark:text-gray-400">Page {page} of {totalPages}</span>
                    <button type="button" class="rounded-lg border border-gray-300 px-3 py-2 font-medium disabled:opacity-40 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-white/10" disabled={page >= totalPages} on:click={() => loadPage(page + 1)}>Next</button>
                  </div>
                {/if}
              </div>
            {/if}
          </div>

        {/if}
      </section>
    </div>
  </main>
{/if}

{#if authenticated && showModal && selectedCollection}
  <div class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8">
    <form class="my-auto w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#171a18]" on:submit|preventDefault={saveRecord}>
      <div class="mb-6 flex items-start justify-between gap-4 border-b border-gray-200 pb-5 dark:border-white/10">
        <div><p class="text-xs font-bold uppercase tracking-wider text-accent">{selectedRecord ? 'Edit record' : 'New record'}</p><h2 class="mt-1 font-heading text-2xl font-semibold">{collectionLabel(selectedCollection.name)}</h2></div>
        <button type="button" aria-label="Close" class="grid h-9 w-9 place-items-center rounded-full text-2xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10" on:click={() => showModal = false}>×</button>
      </div>
      <div class="grid max-h-[65vh] gap-5 overflow-y-auto px-1 md:grid-cols-2">
        {#each editableFields as field}
          <div class={field.type === 'editor' || field.type === 'json' ? 'md:col-span-2' : ''}>
            <label class="mb-2 block text-sm font-semibold" for={`modal-field-${field.name}`}>{fieldLabel(field)}{#if field.required}<span class="ml-1 text-red-500">*</span>{/if}</label>
            {#if field.type === 'bool'}
              <label class="flex h-11 items-center gap-3 rounded-xl border border-gray-300 px-4 dark:border-gray-700"><input id={`modal-field-${field.name}`} type="checkbox" checked={Boolean(fieldValue(field))} on:change={(event) => handleCheckbox(event, field.name)} class="h-4 w-4 accent-green-600"><span class="text-sm">Enabled</span></label>
            {:else if field.type === 'file'}
              <input id={`modal-field-${field.name}`} type="file" accept={field.mimeTypes?.join(',')} on:change={(event) => handleFile(event, field.name)} class="block w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 text-sm dark:border-gray-700">
              {#if selectedRecord?.[field.name]}<p class="mt-1 text-xs text-gray-500">Current file: {displayValue(selectedRecord[field.name])}</p>{/if}
            {:else if field.type === 'select' && field.options?.values}
              <select id={`modal-field-${field.name}`} value={String(fieldValue(field))} on:change={(event) => handleSelect(event, field.name)} class="h-11 w-full rounded-xl border border-gray-300 bg-transparent px-3 dark:border-gray-700"><option value="">Select...</option>{#each field.options.values as option}<option value={option}>{option}</option>{/each}</select>
            {:else if field.type === 'editor' || field.type === 'json'}
              <textarea id={`modal-field-${field.name}`} value={String(fieldValue(field))} on:input={(event) => handleInput(event, field)} rows="5" class="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 font-mono text-sm dark:border-gray-700"></textarea>
            {:else}
              <input id={`modal-field-${field.name}`} type={field.type === 'number' ? 'number' : field.type === 'email' ? 'email' : 'text'} value={String(fieldValue(field))} on:input={(event) => handleInput(event, field)} class="h-11 w-full rounded-xl border border-gray-300 bg-transparent px-3 dark:border-gray-700">
            {/if}
          </div>
        {/each}
      </div>
      <div class="mt-6 flex justify-end gap-3 border-t border-gray-200 pt-5 dark:border-white/10"><button type="button" class="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold dark:border-gray-700" on:click={() => showModal = false}>Cancel</button><button type="submit" class="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-50" disabled={saving}>{saving ? 'Saving...' : selectedRecord ? 'Save changes' : 'Create record'}</button></div>
    </form>
  </div>
{/if}
