### QM Tech

SvelteKit marketing site for QM Tech.

#### Development

```bash
npm ci
npm run dev
```

Copy `.env.example` to `.env` and set `PB_EMAIL` and `PB_PASSWORD` if the private PocketBase `config` collection should provide live pricing and contact settings. The application falls back to built-in defaults when those credentials are absent.

Run `npm run setup-config` with the PocketBase admin credentials to create or secure the `config` collection. Its list and view rules are private; the server layout reads it using the PocketBase credentials.

The SMTP variables are reserved for the future email endpoint and are not used by the current quote flow, which submits directly to PocketBase.

#### Admin panel

The `/admin` route authenticates against PocketBase's existing `_superusers` collection. Use a PocketBase superuser account to sign in. Data operations run server-side, and credentials/tokens are never exposed to page JavaScript. The panel discovers all non-system base collections automatically and supports creating, editing, and deleting records as JSON.

