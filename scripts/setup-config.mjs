import PocketBase from 'pocketbase';

// Usage:
//   PB_URL=https://qmtechbase.ezhostingit.com PB_EMAIL=you@admin PB_PASSWORD=... node scripts/setup-config.mjs
// (or define these in your shell / env file)

const PB_URL = process.env.PB_URL || 'https://qmtechbase.ezhostingit.com';
const PB_EMAIL = process.env.PB_EMAIL;
const PB_PASSWORD = process.env.PB_PASSWORD;

if (!PB_EMAIL || !PB_PASSWORD) {
  console.error('Missing PB_EMAIL / PB_PASSWORD environment variables.');
  process.exit(1);
}

const DEFAULTS = {
  whatsapp: '',
  contactEmail: '',
  priceLandingEn: '$299 USD',
  priceLandingEs: '$5,000 MXN',
  priceCustomEn: '$1,500 USD',
  priceCustomEs: '$28,000 MXN',
  deliveryLandingEn: 'Live in 5–7 days',
  deliveryLandingEs: 'En línea en 5–7 días',
  deliveryCustomEn: 'Live in 3–5 weeks',
  deliveryCustomEs: 'En línea en 3–5 semanas',
};

const COLLECTION_NAME = 'config';

const pb = new PocketBase(PB_URL);

async function main() {
  await pb.collection('_superusers').authWithPassword(PB_EMAIL, PB_PASSWORD);

  let collection;
  try {
    collection = await pb.collections.getOne(COLLECTION_NAME);
  } catch {
    collection = null;
  }

  if (!collection) {
    collection = await pb.collections.create({
      name: COLLECTION_NAME,
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: Object.keys(DEFAULTS).map((name) => ({
        name,
        type: 'text',
        required: false,
      })),
    });
    console.log(`Collection "${COLLECTION_NAME}" created.`);
  } else {
    await pb.collections.update(collection.id, {
      listRule: null,
      viewRule: null,
    });
    console.log(`Collection "${COLLECTION_NAME}" already exists.`);
  }

  const existing = await pb.collection(COLLECTION_NAME).getFullList();
  if (existing.length === 0) {
    const record = await pb.collection(COLLECTION_NAME).create({ ...DEFAULTS });
    console.log(`Config record created with id "${record.id}".`);
  } else {
    console.log('Config record already exists, skipping. Edit it in the PocketBase admin.');
  }

  console.log('Done.');
}

main().catch((error) => {
  console.error('Setup failed:', error);
  process.exit(1);
});
