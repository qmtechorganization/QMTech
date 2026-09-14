export type CollectionPresentation = {
  label: string;
  tableFields: string[];
  fieldLabels?: Record<string, string>;
};

export const COLLECTION_PRESENTATION: Record<string, CollectionPresentation> = {
  clients: {
    label: 'Clients',
    tableFields: ['name', 'website', 'url_logo', 'thumbnail'],
    fieldLabels: { url_logo: 'Logo URL' }
  },
  config: {
    label: 'Site configuration',
    tableFields: ['whatsapp', 'contactEmail', 'priceLandingEn', 'priceLandingEs'],
    fieldLabels: { contactEmail: 'Contact email' }
  },
  medias: {
    label: 'Media library',
    tableFields: ['name', 'media']
  },
  quote: {
    label: 'Quote requests',
    tableFields: ['name', 'email', 'service', 'message']
  },
  services: {
    label: 'Services',
    tableFields: ['service_name', 'serviceCode', 'order', 'icon'],
    fieldLabels: { service_name: 'Service name', serviceCode: 'Service code' }
  }
};

export const collectionLabel = (name: string) => COLLECTION_PRESENTATION[name]?.label || name;
