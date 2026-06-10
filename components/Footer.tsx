'use client';
import Link from 'next/link';
import config from '@/lib/config';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#060F22', color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Top bar */}
      <div style={{ background: '#00B4D8', padding: '16px 24px', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: 14, fontWeight: 600, margin: 0 }}>
          Contracted to most major medical aids · Referrals Welcome · {config.practice.phoneDisplay}
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 20, color: 'white', marginBottom: 8 }}>
            Dr Nasief van der Schyff
          </div>
          <div style={{ fontSize: 11, color: '#00B4D8', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
            Specialist Gastroenterologist
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
            UCT-trained specialist offering comprehensive gastroenterology and endoscopy services in Cape Town.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</h4>
          {[['/', 'Home'], ['/about', 'About Dr Van der Schyff'], ['/services', 'Services'], ['/referrals', 'GP Referrals'], ['/appointments', 'Book Appointment'], ['/blog', 'Articles']].map(([href, label]) => (
            <Link key={href} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 14, marginBottom: 10, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00B4D8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}>
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <MapPin size={16} color="#00B4D8" style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14, lineHeight: 1.5 }}>UCT Private Academic Hospital<br />Observatory, Cape Town</span>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <MapPin size={16} color="#00B4D8" style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14, lineHeight: 1.5 }}>Cure Day Hospitals Foreshore<br />Cape Town</span>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Phone size={16} color="#00B4D8" />
              <a href={`tel:${config.practice.phone}`} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 14 }}>{config.practice.phoneDisplay}</a>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Mail size={16} color="#00B4D8" />
              <a href="mailto:{config.practice.email}" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 14 }}>{config.practice.email}</a>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Clock size={16} color="#00B4D8" style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14, lineHeight: 1.5 }}>Mon–Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>Services</h4>
          {['Gastroscopy', 'Colonoscopy', 'IBD Assessment', 'GERD & Reflux', 'Polyp Removal', 'Coeliac Assessment', 'Colorectal Screening', 'Advanced Endoscopy'].map(s => (
            <div key={s} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>{s}</div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', maxWidth: 1200, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
          © {new Date().getFullYear()} Dr Nasief van der Schyff. All rights reserved. HPCSA Registered.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            Information on this site is not a substitute for professional medical advice.
          </p>
          <DiamondDevsBadge />
        </div>
      </div>
    </footer>
  );
}

function DiamondDevsBadge() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }} className="dd-wrap">
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 20, padding: '4px 12px 4px 8px',
        cursor: 'default', fontSize: 11, color: 'rgba(255,255,255,0.5)',
        transition: 'all 0.2s',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(0,180,216,0.12)';
          e.currentTarget.style.borderColor = 'rgba(0,180,216,0.35)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
          const popup = e.currentTarget.nextElementSibling as HTMLElement;
          if (popup) popup.style.opacity = '1';
          if (popup) popup.style.transform = 'translateY(0)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
          const popup = e.currentTarget.nextElementSibling as HTMLElement;
          if (popup) popup.style.opacity = '0';
          if (popup) popup.style.transform = 'translateY(6px)';
        }}>
        {/* Diamond icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
          <line x1="12" y1="2" x2="12" y2="22"/>
          <line x1="2" y1="8.5" x2="22" y2="8.5"/>
          <line x1="2" y1="15.5" x2="22" y2="15.5"/>
        </svg>
        Powered by DiamondDevs
      </div>

      {/* Popup card */}
      <div style={{
        position: 'absolute', bottom: '130%', right: 0,
        background: '#0A1F44',
        border: '1px solid rgba(0,180,216,0.3)',
        borderRadius: 12, padding: '16px 20px',
        width: 220, boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
        opacity: 0, transform: 'translateY(6px)',
        transition: 'all 0.25s ease',
        pointerEvents: 'none',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            <line x1="12" y1="2" x2="12" y2="22"/>
            <line x1="2" y1="8.5" x2="22" y2="8.5"/>
            <line x1="2" y1="15.5" x2="22" y2="15.5"/>
          </svg>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>DiamondDevs</span>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: '0 0 12px' }}>
          Website designed & built by Almaaz Salie
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <a href={`mailto:${config.developer.email}`} style={{ fontSize: 11, color: '#00B4D8', textDecoration: 'none' }}>
            {config.developer.email}
          </a>
          <a href={`tel:${config.developer.phone}`} style={{ fontSize: 11, color: '#00B4D8', textDecoration: 'none' }}>
            {config.developer.phone}
          </a>
        </div>
        {/* Arrow */}
        <div style={{ position: 'absolute', bottom: -7, right: 18, width: 12, height: 12, background: '#0A1F44', border: '1px solid rgba(0,180,216,0.3)', transform: 'rotate(45deg)', borderTop: 'none', borderLeft: 'none' }} />
      </div>
    </div>
  );
}
