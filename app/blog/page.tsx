'use client';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';


const posts = [
  { slug: 'colonoscopy-what-to-expect', tag: 'Colonoscopy', date: 'December 2024', title: 'What to Expect During Your Colonoscopy', excerpt: 'A step-by-step guide covering bowel preparation, the procedure itself, sedation, and recovery — so you arrive informed and confident.' },
  { slug: 'understanding-ibd', tag: 'IBD', date: 'November 2024', title: 'Understanding Inflammatory Bowel Disease', excerpt: 'Crohn\'s disease and ulcerative colitis are lifelong but manageable conditions. This article explains the differences, symptoms, and treatment options.' },
  { slug: 'gerd-beyond-heartburn', tag: 'GERD', date: 'October 2024', title: 'Beyond Heartburn: When to See a Gastroenterologist', excerpt: 'Occasional heartburn is common, but persistent reflux can cause serious complications. Learn when lifestyle changes are enough — and when you need specialist input.' },
  { slug: 'colorectal-cancer-screening', tag: 'Prevention', date: 'September 2024', title: 'Colorectal Cancer Screening: Who Needs It and When', excerpt: 'Colorectal cancer is one of the most preventable cancers when caught early. A guide to screening recommendations and what a colonoscopy can detect.' },
  { slug: 'coeliac-disease-guide', tag: 'Coeliac', date: 'August 2024', title: 'A Practical Guide to Coeliac Disease', excerpt: 'Coeliac disease is more common than many people realise. This guide covers diagnosis, the role of endoscopy, and living well on a gluten-free diet.' },
  { slug: 'what-is-gastroscopy', tag: 'Gastroscopy', date: 'July 2024', title: 'What Is a Gastroscopy and Do I Need One?', excerpt: 'A gastroscopy lets your doctor see inside your oesophagus, stomach, and duodenum. Find out when it\'s recommended and what the procedure involves.' },
];

const tags = ['All', 'Colonoscopy', 'Gastroscopy', 'IBD', 'GERD', 'Prevention', 'Coeliac'];

export default function Blog() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#00B4D8', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Patient Education</div>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 52px)', color: 'white', marginBottom: 20 }}>Articles & Insights</h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 500, margin: '0 auto' }}>
          Evidence-based information on GI health from Dr Van der Schyff&apos;s practice.
        </p>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Tag filter - static display, JS filtering can be added */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
            {tags.map((t, i) => (
              <span key={t} style={{ padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', background: i === 0 ? '#0A1F44' : 'white', color: i === 0 ? 'white' : '#475569', border: '1px solid', borderColor: i === 0 ? '#0A1F44' : '#E2E8F0', transition: 'all 0.2s' }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {posts.map((p) => (
              <article key={p.slug} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s', border: '1px solid transparent' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'transparent'; }}>
                <div style={{ height: 6, background: 'linear-gradient(90deg, #0A1F44, #00B4D8)' }} />
                <div style={{ padding: '28px 28px 24px' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ background: '#E8F4FD', color: '#1565C0', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>{p.tag}</span>
                    <span style={{ fontSize: 12, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12} />{p.date}</span>
                  </div>
                  <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 22, color: '#0A1F44', marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h2>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.75, marginBottom: 20 }}>{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} style={{ color: '#00B4D8', textDecoration: 'none', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
