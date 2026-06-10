'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import config from '@/lib/config';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/referrals', label: 'For GPs' },
  { href: '/blog', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On inner pages: always solid. On home: solid only after scroll.
  const isSolid = !isHome || scrolled;

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        background: isSolid ? 'rgba(10,31,68,0.97)' : 'transparent',
        backdropFilter: isSolid ? 'blur(12px)' : 'none',
        borderBottom: isSolid ? '1px solid rgba(0,180,216,0.15)' : 'none',
      }}
    >
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div>
            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 18, color: 'white', letterSpacing: 0.5, lineHeight: 1.1 }}>
              Dr Nasief van der Schyff
            </div>
            <div style={{ fontSize: 10, color: '#00B4D8', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>
              Gastroenterologist
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 14, fontWeight: 500, letterSpacing: 0.3, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00B4D8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }} className="hidden-mobile">
          <a href={`tel:${config.practice.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#00B4D8', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <Phone size={15} /> {config.practice.phoneDisplay}
          </a>
          <Link href="/appointments" style={{ background: '#00B4D8', color: 'white', padding: '10px 20px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0096B7')}
            onMouseLeave={e => (e.currentTarget.style.background = '#00B4D8')}>
            Book Appointment
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }} className="show-mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0A1F44', borderTop: '1px solid rgba(0,180,216,0.2)', padding: '16px 24px 24px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 0', fontSize: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/appointments" onClick={() => setOpen(false)}
            style={{ display: 'block', background: '#00B4D8', color: 'white', padding: '14px 20px', borderRadius: 6, textDecoration: 'none', fontSize: 15, fontWeight: 600, textAlign: 'center', marginTop: 16 }}>
            Book Appointment
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </header>
  );
}
