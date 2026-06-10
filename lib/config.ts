const config = {
  practice: {
    phone: process.env.NEXT_PUBLIC_PRACTICE_PHONE ?? '0721910835',
    phoneDisplay: process.env.NEXT_PUBLIC_PRACTICE_PHONE_DISPLAY ?? '072 191 0835',
    email: process.env.NEXT_PUBLIC_PRACTICE_EMAIL ?? 'nasief.vanderschyff@gmail.com',
    name: 'Dr Nasief van der Schyff',
    title: 'Specialist Gastroenterologist',
    hospital: 'UCT Private Academic Hospital',
    address: 'Anzio Road, Observatory, Cape Town, 7925',
  },
  booking: {
    bookemUrl: process.env.NEXT_PUBLIC_BOOKEM_EMBED_URL ?? '',
  },
  form: {
    formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '',
  },
  maps: {
    embedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? '',
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drnasiefgastro.co.za',
  },
  developer: {
    name: 'Almaaz Salie',
    brand: 'DiamondDevs',
    email: 'Almaaz.salie6@gmail.com',
    phone: '+27644273688',
  },
} as const;

export default config;
