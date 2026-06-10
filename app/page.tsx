'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Mail, BookOpen, Users, Award, Stethoscope, Activity, Shield, Clock } from 'lucide-react';

// ─── Animated counter ────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(to / 60);
      const t = setInterval(() => {
        start = Math.min(start + step, to);
        setVal(start);
        if (start >= to) clearInterval(t);
      }, 25);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <div ref={ref} style={{ display: 'inline' }}>{val}{suffix}</div>;
}

// ─── Fade-in on scroll ────────────────────────────────────
function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

const services = [
  { icon: <Activity size={26} />, title: 'Gastroscopy', desc: 'Upper GI endoscopy to examine the oesophagus, stomach and duodenum with precision.' },
  { icon: <Stethoscope size={26} />, title: 'Colonoscopy', desc: 'Full large bowel examination for cancer screening, polyp detection and IBD monitoring.' },
  { icon: <Shield size={26} />, title: 'IBD Assessment', desc: 'Comprehensive diagnosis and management of Crohn\'s disease and ulcerative colitis.' },
  { icon: <Activity size={26} />, title: 'GERD & Reflux', desc: 'Evidence-based evaluation and treatment of gastroesophageal reflux disease.' },
  { icon: <CheckCircle size={26} />, title: 'Polyp Removal', desc: 'Polypectomy during colonoscopy — early intervention for colorectal cancer prevention.' },
  { icon: <BookOpen size={26} />, title: 'Coeliac Assessment', desc: 'Definitive diagnosis and long-term management of coeliac disease.' },
];

const whyRefer = [
  { icon: <Users size={22} />, title: 'Collaborative Care', desc: 'Strong working relationships with GPs and specialists — your patients are always in the loop.' },
  { icon: <Clock size={22} />, title: 'Timely Feedback', desc: 'Clear, structured reports within 24 hours of procedure or consultation.' },
  { icon: <Award size={22} />, title: 'UCT-Trained Specialist', desc: '25+ years of clinical experience including a 3-year Gastroenterology fellowship at Groote Schuur.' },
  { icon: <Shield size={22} />, title: 'POPIA-Compliant Referrals', desc: 'Secure digital referral system. Scan the QR code on our referral page to refer in seconds.' },
];

export default function Home() {
  const [heroVis, setHeroVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVis(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0A1F44 0%, #12326B 50%, #0A1F44 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: 72 }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'rgba(0,180,216,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(21,101,192,0.1)', pointerEvents: 'none' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,180,216,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', width: '100%', position: 'relative', zIndex: 1 }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,180,216,0.15)', border: '1px solid rgba(0,180,216,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#00B4D8', fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}>Now Accepting Referrals</span>
              </div>
            </div>

            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.2s' }}>
              <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 58px)', color: 'white', lineHeight: 1.1, marginBottom: 8 }}>
                Dr Nasief<br />van der Schyff
              </h1>
              <div style={{ fontSize: 18, color: '#00B4D8', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24 }}>
                Specialist Gastroenterologist
              </div>
            </div>

            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.35s' }}>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
                Delivering expert digestive care with precision and compassion. Trained at UCT and Groote Schuur Hospital, practising at UCT Private Academic Hospital, Cape Town.
              </p>
            </div>

            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.45s', display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              <Link href="/appointments" style={{ background: '#00B4D8', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0096B7'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#00B4D8'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Book Appointment <ArrowRight size={16} />
              </Link>
              <Link href="/referrals" style={{ background: 'transparent', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '2px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00B4D8'; e.currentTarget.style.color = '#00B4D8'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'white'; }}>
                Refer a Patient
              </Link>
            </div>

            {/* Credential pills */}
            <div style={{ opacity: heroVis ? 1 : 0, transition: 'opacity 0.6s ease 0.6s', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['MMed Internal Medicine', 'MPhil Emergency Med', 'UCT Senior Lecturer', 'HPCSA Registered'].map(c => (
                <span key={c} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '4px 12px', color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Photo placeholder + floating cards */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.8s ease 0.3s' }} className="hero-photo-wrap">
            {/* Main photo frame */}
            <div style={{ width: 340, height: 420, borderRadius: 24, background: 'linear-gradient(145deg, rgba(0,180,216,0.15), rgba(21,101,192,0.1))', border: '1px solid rgba(0,180,216,0.25)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              {/* Replace the below div with an <img> tag once you have the photo */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'rgba(0,180,216,0.2)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Stethoscope size={40} color="rgba(0,180,216,0.5)" />
                </div>
                <p style={{ fontSize: 13, textAlign: 'center', maxWidth: 200 }}>Replace with<br />Dr Van der Schyff&apos;s photo</p>
              </div>
              {/* Name card at bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(10,31,68,0.9)', backdropFilter: 'blur(8px)', padding: '16px 20px' }}>
                <div style={{ fontFamily: 'DM Serif Display, serif', color: 'white', fontSize: 16 }}>Dr Nasief van der Schyff</div>
                <div style={{ color: '#00B4D8', fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>Specialist Gastroenterologist · UCT</div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div style={{ position: 'absolute', top: 20, left: -20, background: 'white', borderRadius: 12, padding: '12px 18px', boxShadow: '0 8px 30px rgba(0,0,0,0.25)', animation: 'float1 4s ease-in-out infinite' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#0A1F44', fontFamily: 'DM Serif Display, serif' }}>25+</div>
              <div style={{ fontSize: 11, color: '#64748B', fontWeight: 600, letterSpacing: 0.5 }}>Years Experience</div>
            </div>
            <div style={{ position: 'absolute', bottom: 80, right: -30, background: 'white', borderRadius: 12, padding: '12px 18px', boxShadow: '0 8px 30px rgba(0,0,0,0.25)', animation: 'float2 4s ease-in-out infinite' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#0A1F44', fontFamily: 'DM Serif Display, serif' }}>UCT</div>
              <div style={{ fontSize: 11, color: '#64748B', fontWeight: 600, letterSpacing: 0.5 }}>Fellowship Trained</div>
            </div>
            <div style={{ position: 'absolute', top: '45%', right: -40, background: '#00B4D8', borderRadius: 12, padding: '12px 18px', boxShadow: '0 8px 30px rgba(0,180,216,0.35)', animation: 'float3 5s ease-in-out infinite' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'white', fontFamily: 'DM Serif Display, serif' }}>✓</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: 0.5 }}>Most Medical Aids</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: heroVis ? 1 : 0, transition: 'opacity 1s ease 1s' }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(0,180,216,0.8))', animation: 'scrollDown 2s ease-in-out infinite' }} />
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section style={{ background: '#0A1F44', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="stats-grid">
          {[
            { num: 25, suf: '+', label: 'Years Experience' },
            { num: 15, suf: '+', label: 'Years UCT Lecturer' },
            { num: 10, suf: '+', label: 'Years HOD Victoria Hospital' },
            { num: 100, suf: '%', label: 'Patient-Focused Care' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '16px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 36, color: '#00B4D8', fontWeight: 400, lineHeight: 1 }}>
                <Counter to={s.num} suffix={s.suf} />
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section style={{ padding: '100px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: '#00B4D8', fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12 }}>Scope of Practice</div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 46px)', color: '#0A1F44', marginBottom: 16 }}>Specialist Services</h2>
            <p style={{ fontSize: 17, color: '#64748B', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Comprehensive gastroenterology from routine endoscopy to complex GI conditions — all under one specialist.
            </p>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div style={{ background: 'white', borderRadius: 16, padding: '32px 28px', transition: 'all 0.3s', cursor: 'default', border: '1px solid transparent' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(0,180,216,0.3)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; el.style.borderColor = 'transparent'; }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'linear-gradient(135deg, #E8F4FD, #C8E6F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1565C0', marginBottom: 20 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 20, color: '#0A1F44', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1565C0', textDecoration: 'none', fontWeight: 700, fontSize: 15, border: '2px solid #1565C0', padding: '12px 28px', borderRadius: 8, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1565C0'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1565C0'; }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────── */}
      <section style={{ background: '#0A1F44', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', background: 'rgba(0,180,216,0.04)', clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }} className="about-grid">
          <FadeIn>
            <div style={{ fontSize: 12, color: '#00B4D8', fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 16 }}>About Dr Van der Schyff</div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'white', marginBottom: 24, lineHeight: 1.2 }}>
              25 Years of Clinical<br />Excellence at UCT
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              A highly experienced Specialist Physician with subspecialty training in Medical Gastroenterology, Dr Van der Schyff completed his undergraduate training at UCT in 2000. He qualified as a Specialist Physician in 2009 and completed a 3-year Gastroenterology fellowship at UCT/Groote Schuur Hospital in 2025.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 36 }}>
              Former Head of the Department of Medicine at Victoria Hospital for over a decade, Senior Lecturer at UCT since 2010, and recipient of the Lead SA Award and Western Cape Provincial Innovation and Leadership Award.
            </p>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00B4D8', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0096B7'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#00B4D8'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Full Biography <ArrowRight size={16} />
            </Link>
          </FadeIn>

          <FadeIn delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'MMed Internal Medicine', sub: 'Stellenbosch University / Tygerberg Hospital' },
                { title: 'MPhil Emergency Medicine', sub: 'Advanced postgraduate qualification' },
                { title: 'Gastroenterology Fellowship', sub: 'UCT / Groote Schuur Hospital, 2025' },
                { title: 'Lead SA Award', sub: 'Recognition for healthcare leadership' },
                { title: 'Western Cape Innovation Award', sub: 'Provincial recognition for excellence' },
                { title: 'VIMRI Co-Founder', sub: 'Victoria Internal Medicine Research Initiative' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '16px 20px', border: '1px solid rgba(0,180,216,0.15)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,180,216,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,180,216,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(0,180,216,0.15)'; }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4D8', marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 2 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY REFER ─────────────────────────────────────── */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: '#00B4D8', fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12 }}>For GPs & Specialists</div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 46px)', color: '#0A1F44', marginBottom: 16 }}>Why Refer to Dr Van der Schyff?</h2>
            <p style={{ fontSize: 17, color: '#64748B', maxWidth: 540, margin: '0 auto' }}>A referral partner who communicates clearly, responds promptly, and keeps your patients at the centre.</p>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28, marginBottom: 64 }}>
            {whyRefer.map((w, i) => (
              <FadeIn key={w.title} delay={i * 100}>
                <div style={{ padding: '32px 28px', borderRadius: 16, border: '1px solid #E8F4FD', background: '#F5F7FA', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,180,216,0.12)'; e.currentTarget.style.borderColor = '#00B4D8'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E8F4FD'; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: '#0A1F44', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00B4D8', marginBottom: 20 }}>
                    {w.icon}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A1F44', marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Referral CTA */}
          <FadeIn>
            <div style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', borderRadius: 20, padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: 'white', marginBottom: 8 }}>Ready to Refer?</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>Secure, POPIA-compliant referrals — scan the QR code or contact us directly.</p>
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/referrals" style={{ background: '#00B4D8', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Refer a Patient <ArrowRight size={16} />
                </Link>
                <a href="tel:0721910835" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone size={16} /> 072 191 0835
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────── */}
      <section style={{ padding: '100px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: '#00B4D8', fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12 }}>Patient Education</div>
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#0A1F44' }}>Articles & Insights</h2>
            </div>
            <Link href="/blog" style={{ color: '#1565C0', textDecoration: 'none', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
              View All Articles <ArrowRight size={15} />
            </Link>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { tag: 'Colonoscopy', title: 'What to Expect During Your Colonoscopy', desc: 'A step-by-step guide covering preparation, the procedure itself, and recovery — so you arrive informed and confident.', date: 'Dec 2024' },
              { tag: 'IBD', title: 'Managing Inflammatory Bowel Disease', desc: 'Understanding the difference between Crohn\'s disease and ulcerative colitis, and the latest evidence-based treatment options.', date: 'Nov 2024' },
              { tag: 'GERD', title: 'Beyond Heartburn: Understanding GERD', desc: 'Gastroesophageal reflux disease affects millions. Learn when lifestyle changes are enough — and when specialist input is needed.', date: 'Oct 2024' },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ height: 8, background: 'linear-gradient(90deg, #0A1F44, #00B4D8)' }} />
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                      <span style={{ background: '#E8F4FD', color: '#1565C0', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>{p.tag}</span>
                      <span style={{ fontSize: 12, color: '#94A3B8' }}>{p.date}</span>
                    </div>
                    <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 20, color: '#0A1F44', marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                    <Link href="/blog" style={{ color: '#00B4D8', textDecoration: 'none', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ───────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#0A1F44' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ fontSize: 12, color: '#00B4D8', fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 16 }}>Patient Feedback</div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: 'white', marginBottom: 16 }}>
              Share Your Experience
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
              Your feedback helps other patients find the right care. If you&apos;ve visited the practice, we&apos;d be grateful for a Google review.
            </p>

            {/* Star display */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 32 }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="32" height="32" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'white', color: '#0A1F44',
                padding: '16px 32px', borderRadius: 10,
                textDecoration: 'none', fontWeight: 700, fontSize: 16,
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'; }}
            >
              {/* Google G icon */}
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leave a Google Review
            </a>

            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 20 }}>
              Once your Google Business Profile is live, replace the link above with your actual review URL.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#0A1F44', marginBottom: 16 }}>Ready to Get Started?</h2>
            <p style={{ fontSize: 17, color: '#64748B', marginBottom: 40, lineHeight: 1.7 }}>
              Book an appointment, or get in touch with the practice for any queries. Contracted to most major medical aids.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/appointments" style={{ background: '#0A1F44', color: 'white', padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#12326B'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0A1F44'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Book Appointment <ArrowRight size={16} />
              </Link>
              <a href="mailto:nasief.vanderschyff@gmail.com" style={{ background: 'white', color: '#0A1F44', padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8, border: '2px solid #0A1F44', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F5F7FA'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}>
                <Mail size={16} /> Email the Practice
              </a>
            </div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:0721910835" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', textDecoration: 'none', fontSize: 14 }}>
                <Phone size={16} color="#00B4D8" /> 072 191 0835
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', fontSize: 14 }}>
                <MapPin size={16} color="#00B4D8" /> UCT Private Academic Hospital, Observatory
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(0.9); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes scrollDown { 0% { opacity: 0; height: 0; } 50% { opacity: 1; height: 40px; } 100% { opacity: 0; height: 40px; } }

        /* ── Mobile ───────────────────────────────────────── */
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px 20px !important; }
          .hero-photo-wrap { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }

          /* Services grid — single column on small screens */
          section > div > div[style*="repeat(auto-fit, minmax(280px"] {
            grid-template-columns: 1fr !important;
          }
          /* About credentials list — full width */
          section > div > div[style*="repeat(auto-fit, minmax(240px"] {
            grid-template-columns: 1fr !important;
          }
          /* Blog grid */
          section > div > div[style*="repeat(auto-fill, minmax(320px"] {
            grid-template-columns: 1fr !important;
          }
          /* Referral CTA flex → column */
          div[style*="justifyContent: 'space-between'"] {
            flex-direction: column !important;
            text-align: center !important;
          }
          /* Services detail page — single col */
          div[style*="repeat(auto-fit, minmax(200px"] {
            grid-template-columns: 1fr !important;
          }
          /* Services page two-col cards */
          div[style*="1fr 1fr"][style*="gap: 48"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 24px !important;
          }
          /* Research grid */
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          /* Stats bar */
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* ── Tablet ───────────────────────────────────────── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid { gap: 32px !important; }
          .hero-photo-wrap > div { width: 280px !important; height: 360px !important; }
        }
      `}</style>
    </div>
  );
}

// ── MapPin for contact ──
function MapPin({ size, color }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
