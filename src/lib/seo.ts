import { env } from '$env/dynamic/public';

export const SITE_URL = (env.PUBLIC_SITE_URL || 'https://www.tech.q-matters.com').replace(/\/+$/, '');

export const SITE_NAME = 'QM Tech';
export const SITE_NAME_FULL = 'QM Tech | Soluciones Web y Tecnología';
export const SITE_TAGLINE = 'Páginas Web en Rio Bravo y Reynosa';

export const SITE_DESCRIPTION =
	'Diseño y desarrollo de páginas web profesionales en Rio Bravo, Reynosa y todo México. Landing pages desde $5,000 MXN y sitios web personalizados desde $9,000 MXN. SEO, hosting y cotización gratis en menos de 24 horas.';

export const OG_IMAGE = `${SITE_URL}/images/QM-Logo.png`;
export const OG_IMAGE_ALT = 'QM Tech - Diseño de páginas web';

export const SOCIAL_LINKS = {
	facebook: 'https://www.facebook.com/profile.php?id=61566324561094&mibextid=ZbWKwL',
	instagram: 'https://www.instagram.com/q_matterstech?igsh=MWljamVseWx1ZnprNw==',
	linkedin: 'https://www.linkedin.com/in/tech-q-matters-947075329/',
};

export const CONTACT_EMAIL = 'contact@q-matters.com';
