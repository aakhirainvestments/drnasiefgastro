import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Dr Nasief van der Schyff | Gastroenterologist Cape Town',
    template: '%s | Dr Nasief van der Schyff',
  },
  description: 'Dr Nasief van der Schyff is a specialist gastroenterologist and physician at UCT Private Academic Hospital, Cape Town. Offering gastroscopy, colonoscopy, IBD, GERD, and advanced endoscopy. Referrals welcome. Contracted to most medical aids.',
  keywords: ['gastroenterologist Cape Town', 'gastroscopy Cape Town', 'colonoscopy Cape Town', 'IBD specialist Cape Town', 'Dr Nasief van der Schyff', 'UCT gastroenterologist', 'endoscopy Cape Town', 'GERD specialist Cape Town'],
  authors: [{ name: 'Dr Nasief van der Schyff' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://drnasiefgastro.co.za',
    siteName: 'Dr Nasief van der Schyff - Gastroenterologist',
    title: 'Dr Nasief van der Schyff | Specialist Gastroenterologist Cape Town',
    description: 'Specialist gastroenterologist at UCT Private Academic Hospital. Advanced endoscopy, IBD, GERD & more. Referrals welcome.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Nasief van der Schyff | Gastroenterologist Cape Town',
    description: 'Specialist gastroenterologist at UCT Private Academic Hospital, Cape Town.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://drnasiefgastro.co.za',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physician',
              name: 'Dr Nasief van der Schyff',
              description: 'Specialist Physician and Medical Gastroenterologist',
              url: 'https://drnasiefgastro.co.za',
              telephone: '+27721910835',
              email: 'nasief.vanderschyff@gmail.com',
              medicalSpecialty: 'Gastroenterology',
              alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Cape Town' },
              worksFor: [
                { '@type': 'Hospital', name: 'UCT Private Academic Hospital', address: { '@type': 'PostalAddress', streetAddress: 'Anzio Road, Observatory', addressLocality: 'Cape Town', addressRegion: 'Western Cape', addressCountry: 'ZA' } },
                { '@type': 'Hospital', name: 'Groote Schuur Hospital' },
              ],
              address: { '@type': 'PostalAddress', streetAddress: 'UCT Private Academic Hospital, Anzio Road', addressLocality: 'Observatory, Cape Town', addressRegion: 'Western Cape', postalCode: '7925', addressCountry: 'ZA' },
              geo: { '@type': 'GeoCoordinates', latitude: -33.9395, longitude: 18.4659 },
              openingHours: 'Mo-Fr 08:00-17:00',
              priceRange: '$$',
              hasMap: 'https://maps.google.com/?q=UCT+Private+Academic+Hospital+Cape+Town',
              award: ['Lead SA Award', 'Western Cape Provincial Innovation and Leadership Award'],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
