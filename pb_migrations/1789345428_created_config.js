migrate(
  (app) => {
    const collection = new Collection({
      name: 'config',
      type: 'base',
       listRule: null,
       viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'whatsapp', type: 'text', required: false },
        { name: 'contactEmail', type: 'text', required: false },
        { name: 'priceLandingEn', type: 'text', required: false },
        { name: 'priceLandingEs', type: 'text', required: false },
        { name: 'priceCustomEn', type: 'text', required: false },
        { name: 'priceCustomEs', type: 'text', required: false },
        { name: 'deliveryLandingEn', type: 'text', required: false },
        { name: 'deliveryLandingEs', type: 'text', required: false },
        { name: 'deliveryCustomEn', type: 'text', required: false },
        { name: 'deliveryCustomEs', type: 'text', required: false }
      ],
      indexes: []
    });

    app.save(collection);

    const record = new Record(collection);
    record.set('whatsapp', '');
    record.set('contactEmail', '');
    record.set('priceLandingEn', '$299 USD');
    record.set('priceLandingEs', '$5,000 MXN');
    record.set('priceCustomEn', '$1,500 USD');
    record.set('priceCustomEs', '$28,000 MXN');
    record.set('deliveryLandingEn', 'Live in 5–7 days');
    record.set('deliveryLandingEs', 'En línea en 5–7 días');
    record.set('deliveryCustomEn', 'Live in 3–5 weeks');
    record.set('deliveryCustomEs', 'En línea en 3–5 semanas');
    app.save(record);

    return app;
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('config');
    return app.delete(collection);
  }
);
