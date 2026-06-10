import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import config from '@/lib/config';

export const metadata: Metadata = {
  title: 'Book an Appointment | Gastroenterologist Cape Town',
  description: 'Book an appointment with Dr Nasief van der Schyff, specialist gastroenterologist at UCT Private Academic Hospital, Cape Town. Contracted to most medical aids.',
};

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
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {/* Booking widget */}
          <div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: '#0A1F44', marginBottom: 8 }}>Online Booking</h2>
            <p style={{ fontSize: 15, color: '#64748B', marginBottom: 24 }}>Select a time that suits you — available slots update in real time.</p>
            {/* Bookem embed — replace YOUR_BOOKEM_URL with actual Bookem embed link */}
            <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0', minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, padding: 40 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#E8F4FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={28} color="#1565C0" />
              </div>
              <p style={{ fontSize: 15, color: '#475569', textAlign: 'center', maxWidth: 320 }}>
                <strong>Bookem integration goes here.</strong><br />Replace this placeholder with your Bookem embed iframe once your account is set up.
              </p>
              <code style={{ fontSize: 12, color: '#94A3B8', background: '#F5F7FA', padding: '8px 16px', borderRadius: 6 }}>
                {'<iframe src="https://bookem.com/your-practice" />'}
              </code>
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

      {/* Map placeholder */}
      <section style={{ height: 350, background: '#E8F4FD', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
          <MapPin size={40} color="#1565C0" />
          <div style={{ fontSize: 16, fontWeight: 600, color: '#0A1F44' }}>UCT Private Academic Hospital</div>
          <div style={{ fontSize: 14, color: '#64748B' }}>Anzio Road, Observatory, Cape Town, 7925</div>
          <a href="https://maps.google.com/?q=UCT+Private+Academic+Hospital+Cape+Town" target="_blank" rel="noopener noreferrer"
            style={{ background: '#0A1F44', color: 'white', padding: '10px 24px', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: 14, marginTop: 8 }}>
            Open in Google Maps
          </a>
        </div>
        {/* TODO: Replace with Google Maps embed iframe */}
      </section>
    </div>
  );
}

