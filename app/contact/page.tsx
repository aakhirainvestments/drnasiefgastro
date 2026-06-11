'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
const MAPS_URL = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? '';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) return;
    if (!FORMSPREE_ID) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#00B4D8', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</div>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 52px)', color: 'white', marginBottom: 20 }}>Contact the Practice</h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto' }}>
          We&apos;re here to help. Reach out for appointments, referrals, or any queries.
        </p>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="contact-grid">
          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: <Phone size={22} color="#00B4D8" />, title: 'Phone / WhatsApp', lines: ['072 191 0835'], href: 'tel:0721910835' },
              { icon: <Mail size={22} color="#00B4D8" />, title: 'Email', lines: ['nasief.vanderschyff@gmail.com'], href: 'mailto:nasief.vanderschyff@gmail.com' },
              { icon: <MapPin size={22} color="#00B4D8" />, title: 'UCT Private Academic Hospital', lines: ['Anzio Road, Observatory', 'Cape Town, Western Cape, 7925'] },
              { icon: <MapPin size={22} color="#00B4D8" />, title: 'Cure Day Hospitals Foreshore', lines: ['021 442 9243', 'ddc@ctmg.co.za'], href: 'tel:0214429243' },
              { icon: <Clock size={22} color="#00B4D8" />, title: 'Practice Hours', lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Weekends: Closed'] },
            ].map((c, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 16, padding: '28px', border: '1px solid #E2E8F0', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#F0F7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#94A3B8', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 8 }}>{c.title}</div>
                  {c.lines.map((l, j) => c.href && j === 0 ? (
                    <a key={j} href={c.href} style={{ display: 'block', fontSize: 16, color: '#0A1F44', fontWeight: 600, textDecoration: 'none' }}>{l}</a>
                  ) : (
                    <div key={j} style={{ fontSize: 15, color: '#475569' }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div style={{ background: 'white', borderRadius: 20, padding: '40px', border: '1px solid #E2E8F0' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={32} color="#16A34A" />
                </div>
                <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 24, color: '#0A1F44', marginBottom: 8 }}>Message Sent</h2>
                <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.7 }}>Thank you for getting in touch. We&apos;ll respond within 1 business day.</p>
                <button onClick={() => { setForm({ name: '', email: '', phone: '', message: '' }); setStatus('idle'); }}
                  style={{ marginTop: 24, background: 'transparent', border: '2px solid #0A1F44', color: '#0A1F44', padding: '10px 24px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 26, color: '#0A1F44', marginBottom: 8 }}>Send a Message</h2>
                <p style={{ fontSize: 14, color: '#64748B', marginBottom: 28 }}>For non-urgent queries. We&apos;ll respond within 1 business day.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '0xx xxx xxxx' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 15, color: '#0A1F44', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 6 }}>Message / Reason for Contact</label>
                    <textarea
                      rows={4}
                      placeholder="I would like to book an appointment / enquire about..."
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 15, color: '#0A1F44', outline: 'none', fontFamily: 'DM Sans, sans-serif', resize: 'vertical', boxSizing: 'border-box' }}
                    />
                  </div>
                  {status === 'error' && (
                    <p style={{ fontSize: 13, color: '#DC2626', background: '#FEF2F2', padding: '10px 14px', borderRadius: 8 }}>
                      Something went wrong. Please try again or call 072 191 0835 directly.
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                    style={{ background: status === 'sending' ? '#64748B' : '#0A1F44', color: 'white', padding: '14px 28px', borderRadius: 8, border: 'none', fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'all 0.2s', fontFamily: 'DM Sans, sans-serif' }}
                    onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#12326B'; }}
                    onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.background = '#0A1F44'; }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center' }}>For urgent medical concerns, please call 072 191 0835 directly.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <div style={{ height: 420, background: '#E8F4FD', position: 'relative', overflow: 'hidden' }}>
        {MAPS_URL ? (
          <iframe
            src={MAPS_URL}
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
            <MapPin size={40} color="#1565C0" />
            <div style={{ fontSize: 16, fontWeight: 600, color: '#0A1F44' }}>UCT Private Academic Hospital</div>
            <div style={{ fontSize: 14, color: '#64748B' }}>Anzio Road, Observatory, Cape Town</div>
            <a href="https://maps.google.com/?q=UCT+Private+Academic+Hospital+Cape+Town" target="_blank" rel="noopener noreferrer"
              style={{ background: '#0A1F44', color: 'white', padding: '10px 24px', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: 14, marginTop: 8 }}>
              Open in Google Maps
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
