'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


const services = [
  {
    title: 'Gastroscopy (Upper GI Endoscopy)',
    tag: 'Endoscopy',
    desc: 'A gastroscopy uses a thin, flexible camera (endoscope) passed through the mouth to examine the oesophagus, stomach, and duodenum. It is used to investigate symptoms such as heartburn, swallowing difficulties, abdominal pain, and unexplained anaemia.',
    uses: ['Heartburn and reflux investigation', 'Swallowing difficulties (dysphagia)', 'Upper abdominal pain', 'Unexplained iron-deficiency anaemia', 'Coeliac disease confirmation'],
  },
  {
    title: 'Colonoscopy',
    tag: 'Endoscopy',
    desc: 'A colonoscopy examines the entire large bowel (colon and rectum) using a flexible camera. It is the gold standard for colorectal cancer screening and the investigation of bowel symptoms such as bleeding, change in bowel habit, and IBD monitoring.',
    uses: ['Colorectal cancer screening', 'Rectal bleeding investigation', 'Change in bowel habit', 'IBD monitoring and biopsy', 'Polyp detection and removal'],
  },
  {
    title: 'IBD Assessment & Management',
    tag: 'Inflammatory Bowel Disease',
    desc: 'Dr Van der Schyff has a specialist interest in the management of Crohn\'s disease and ulcerative colitis. He provides comprehensive assessment, endoscopic monitoring, and evidence-based medical management including biological therapies.',
    uses: ['Crohn\'s disease', 'Ulcerative colitis', 'Microscopic colitis', 'Disease activity monitoring', 'Biological therapy initiation'],
  },
  {
    title: 'GERD & Reflux Evaluation',
    tag: 'Reflux',
    desc: 'Gastroesophageal reflux disease (GERD) is one of the most common GI conditions. Beyond lifestyle advice, specialist evaluation identifies complications such as Barrett\'s oesophagus and guides appropriate long-term management.',
    uses: ['Persistent heartburn', 'Barrett\'s oesophagus surveillance', 'Chest pain investigation', 'PPI-refractory reflux', 'Laryngopharyngeal reflux'],
  },
  {
    title: 'Polyp Detection & Removal',
    tag: 'Prevention',
    desc: 'Colorectal polyps are the precursors to colorectal cancer. Detecting and removing polyps during colonoscopy (polypectomy) is one of the most effective preventative interventions in medicine.',
    uses: ['Polypectomy', 'Adenoma surveillance', 'High-risk polyp removal', 'Post-polypectomy surveillance scheduling'],
  },
  {
    title: 'Coeliac Disease Assessment',
    tag: 'Coeliac',
    desc: 'Coeliac disease is an immune-mediated condition triggered by gluten. Diagnosis requires both blood tests and upper GI endoscopy with duodenal biopsy. Dr Van der Schyff provides definitive diagnosis and ongoing management.',
    uses: ['Diagnostic gastroscopy with biopsy', 'Serology interpretation', 'Gluten-free diet guidance', 'Long-term surveillance'],
  },
  {
    title: 'Colorectal Cancer Screening',
    tag: 'Prevention',
    desc: 'Colorectal cancer is highly preventable when detected early. Dr Van der Schyff offers risk-stratified screening programmes based on family history, age, and individual risk factors.',
    uses: ['Average-risk screening from age 45', 'High-risk and hereditary syndromes', 'Faecal immunochemical testing (FIT)', 'Post-treatment surveillance'],
  },
  {
    title: 'Advanced Therapeutic Endoscopy',
    tag: 'Advanced',
    desc: 'Beyond diagnostic endoscopy, Dr Van der Schyff performs a range of advanced therapeutic procedures for the management of complex GI conditions.',
    uses: ['Advanced polypectomy', 'Haemostasis of bleeding lesions', 'Dilation of strictures', 'Open access endoscopy', 'Diagnostic biopsy programmes'],
  },
];

export default function Services() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#00B4D8', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Scope of Practice</div>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 52px)', color: 'white', marginBottom: 20 }}>Specialist Services</h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto' }}>
          Comprehensive gastroenterology and endoscopy services at UCT Private Academic Hospital, Cape Town.
        </p>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 20, padding: '40px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start', border: '1px solid #E2E8F0', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.4)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div>
                <span style={{ background: '#E8F4FD', color: '#1565C0', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 4, letterSpacing: 0.8, textTransform: 'uppercase', display: 'inline-block', marginBottom: 16 }}>{s.tag}</span>
                <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 26, color: '#0A1F44', marginBottom: 16, lineHeight: 1.2 }}>{s.title}</h2>
                <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#94A3B8', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Indications include</div>
                {s.uses.map((u, j) => (
                  <div key={j} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00B4D8', marginTop: 5, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: '#475569', lineHeight: 1.5 }}>{u}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <p style={{ fontSize: 16, color: '#64748B', marginBottom: 24 }}>Not sure if you need a referral? Contact the practice to discuss.</p>
          <Link href="/appointments" style={{ background: '#0A1F44', color: 'white', padding: '16px 36px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
