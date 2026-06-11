import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import config from '@/lib/config';

export const metadata: Metadata = {
  title: 'Book an Appointment | Gastroenterologist Cape Town',
  description: 'Book an appointment with Dr Nasief van der Schyff, specialist gastroenterologist at UCT Private Academic Hospital, Cape Town. Contracted to most medical aids.',
};

const BOOKEM_URL = process.env.NEXT_PUBLIC_BOOKEM_EMBED_URL ?? '';
const MAPS_URL = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? '';

export default function Appointments() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#00B4D8', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Appointments</div>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 52px)', color: 'white', marginBottom: 20 }}>Book a Consultation</h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto' }}>
          Online and in-person consultations available. Contracted to most major medical aids.
        </p>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="appt-grid">

          {/* Booking widget */}
          <div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: '#0A1F44', marginBottom: 8 }}>Online Booking</h2>
            <p style={{ fontSize: 15, color: '#64748B', marginBottom: 24 }}>Select a time that suits you — available slots update in real time.</p>

            <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0', minHeight: 500 }}>
              {BOOKEM_URL ? (
                <iframe
                  src={BOOKEM_URL}
                  width="100%"
                  height="600"
                  style={{ border: 0, display: 'block' }}
                  title="Book an appointment"
                />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, padding: 48, minHeight: 500, textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#E8F4FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={28} color="#1565C0" />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: '#0A1F44', marginBottom: 8 }}>Online booking coming soon</p>
                    <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, maxWidth: 280 }}>
                      In the meantime, please call or WhatsApp to book your appointment.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${config.practice.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp to Book
                  </a>
                  <a href="tel:0721910835" style={{ fontSize: 14, color: '#64748B', textDecoration: 'none' }}>
                    or call <strong style={{ color: '#0A1F44' }}>072 191 0835</strong>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact + info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: 'white', borderRadius: 16, padding: '32px 28px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A1F44', marginBottom: 20 }}>Contact the Practice</h3>
              {[
                { icon: <Phone size={18} color="#00B4D8" />, label: 'Phone / WhatsApp', val: '072 191 0835', href: `tel:${config.practice.phone}` },
                { icon: <Mail size={18} color="#00B4D8" />, label: 'Email', val: config.practice.email, href: `mailto:${config.practice.email}` },
                { icon: <MapPin size={18} color="#00B4D8" />, label: 'Location', val: 'UCT Private Academic Hospital, Observatory, Cape Town' },
                { icon: <Clock size={18} color="#00B4D8" />, label: 'Hours', val: 'Monday – Friday: 8:00 AM – 5:00 PM' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                  <div style={{ marginTop: 2 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: 15, color: '#0A1F44', textDecoration: 'none', fontWeight: 600 }}>{c.val}</a>
                    ) : (
                      <div style={{ fontSize: 15, color: '#0A1F44', fontWeight: 500 }}>{c.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#0A1F44', borderRadius: 16, padding: '28px', border: '1px solid rgba(0,180,216,0.2)' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 16 }}>What to Bring</h3>
              {['Medical aid card and details', 'Referral letter (from your GP)', 'Previous test results or scope reports', 'Current medication list', 'ID document'].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#00B4D8" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'white', borderRadius: 16, padding: '24px 28px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1F44', marginBottom: 12 }}>Medical Aids</h3>
              <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>
                Dr Van der Schyff is contracted to most major South African medical aids. Please contact the practice to confirm your specific scheme before your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: 380, background: '#E8F4FD', position: 'relative', overflow: 'hidden' }}>
        {MAPS_URL ? (
          <iframe
            src={MAPS_URL}
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
            <MapPin size={40} color="#1565C0" />
            <div style={{ fontSize: 16, fontWeight: 600, color: '#0A1F44' }}>UCT Private Academic Hospital</div>
            <div style={{ fontSize: 14, color: '#64748B' }}>Anzio Road, Observatory, Cape Town, 7925</div>
            <a href="https://maps.google.com/?q=UCT+Private+Academic+Hospital+Cape+Town" target="_blank" rel="noopener noreferrer"
              style={{ background: '#0A1F44', color: 'white', padding: '10px 24px', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: 14, marginTop: 8 }}>
              Open in Google Maps
            </a>
          </div>
        )}
      </section>

      <style>{`
        @media (max-width: 768px) {
          .appt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
