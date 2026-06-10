import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, GraduationCap, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Dr Nasief van der Schyff | Specialist Gastroenterologist Cape Town',
  description: 'Learn about Dr Nasief van der Schyff — UCT-trained gastroenterologist with 25+ years of clinical experience, former HOD at Victoria Hospital, and Senior Lecturer at UCT.',
};

export default function About() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#00B4D8', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>About</div>
          <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', marginBottom: 20, lineHeight: 1.15 }}>
            Dr Nasief van der Schyff
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
            Specialist Physician & Medical Gastroenterologist<br />UCT Private Academic Hospital · Groote Schuur Hospital
          </p>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 32, color: '#0A1F44', marginBottom: 24 }}>Biography</h2>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, marginBottom: 20 }}>
              Dr Nasief van der Schyff is a highly experienced clinician and Specialist Physician with subspecialty training in Medical Gastroenterology. He currently practises at Groote Schuur Hospital and UCT Private Academic Hospital, offering a focused, sub-specialist gastroenterology service.
            </p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, marginBottom: 20 }}>
              He completed his undergraduate medical training at the University of Cape Town in 2000 and qualified as a Specialist Physician in 2009 following training in both the United Kingdom and Stellenbosch University / Tygerberg Hospital. He later completed a 3-year fellowship in Medical Gastroenterology at UCT / Groote Schuur Hospital in 2025.
            </p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, marginBottom: 20 }}>
              Dr Van der Schyff served as Head of the Department of Medicine at Victoria Hospital for over a decade and has been a Senior Lecturer at UCT since 2010. Over his career he has contributed to the training of thousands of medical students, interns, medical officers and registrars.
            </p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85 }}>
              His leadership contributions have been recognised with the Lead SA Award and the Western Cape Provincial Innovation and Leadership Award. He co-founded the Victoria Internal Medicine Research Initiative (VIMRI) and has contributed to multiple peer-reviewed publications.
            </p>
          </div>

          <div>
            {/* Qualifications */}
            <div style={{ background: '#F5F7FA', borderRadius: 16, padding: '32px 28px', marginBottom: 24 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                <GraduationCap size={22} color="#1565C0" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A1F44' }}>Qualifications</h3>
              </div>
              {[
                { year: '2000', q: 'MBChB, University of Cape Town' },
                { year: '2009', q: 'Specialist Physician (MMed Internal Medicine)' },
                { year: '2009', q: 'MPhil Emergency Medicine' },
                { year: '2025', q: 'Fellowship in Medical Gastroenterology, UCT/GSH' },
                { year: 'Current', q: 'MPhil Gastroenterology (in progress)' },
              ].map((q, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 16, marginBottom: 16, borderBottom: i < 4 ? '1px solid #E2E8F0' : 'none' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#00B4D8', letterSpacing: 0.5, minWidth: 54, paddingTop: 2 }}>{q.year}</div>
                  <div style={{ fontSize: 14, color: '#475569', lineHeight: 1.5 }}>{q.q}</div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div style={{ background: '#F5F7FA', borderRadius: 16, padding: '32px 28px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                <Award size={22} color="#1565C0" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A1F44' }}>Awards & Recognition</h3>
              </div>
              {['Lead SA Award', 'Western Cape Provincial Innovation and Leadership Award', 'VIMRI Co-Founder', 'Senior Lecturer — UCT, since 2010', 'Long-standing College Examiner'].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00B4D8', marginTop: 6, flexShrink: 0 }} />
                  <div style={{ fontSize: 14, color: '#475569' }}>{a}</div>
                </div>
              ))}
            </div>

            {/* Practice Locations */}
            <div style={{ background: '#F5F7FA', borderRadius: 16, padding: '32px 28px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                <GraduationCap size={22} color="#1565C0" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A1F44' }}>Practice Locations</h3>
              </div>
              {[
                { name: 'UCT Private Academic Hospital', detail: 'Anzio Road, Observatory, Cape Town · Groote Schuur Hospital' },
                { name: 'Cure Day Hospitals Foreshore', detail: '021 442 9243 · ddc@ctmg.co.za' },
              ].map((loc, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00B4D8', marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>{loc.name}</div>
                    <div style={{ fontSize: 13, color: '#94A3B8' }}>{loc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section style={{ padding: '80px 24px', background: '#0A1F44' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <BookOpen size={32} color="#00B4D8" style={{ marginBottom: 20 }} />
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 36, color: 'white', marginBottom: 20 }}>Academic & Research Interests</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 48, lineHeight: 1.8 }}>
            Dr Van der Schyff&apos;s research focuses on advancing the evidence base for gastroenterological care in the South African context.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {['Advanced Therapeutic Endoscopy', 'Inflammatory Bowel Disease', 'Gastroesophageal Reflux Disease (GERD)', 'Colorectal Cancer Screening', 'Medical Education & Training', 'Healthcare Leadership'].map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 16px', border: '1px solid rgba(0,180,216,0.2)' }}>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.5 }}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 36, color: '#0A1F44', marginBottom: 16 }}>Ready to Book a Consultation?</h2>
        <p style={{ fontSize: 16, color: '#64748B', marginBottom: 32 }}>Contracted to most major medical aids. Referrals welcome from GPs and specialists.</p>
        <Link href="/appointments" style={{ background: '#00B4D8', color: 'white', padding: '16px 36px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Book Appointment <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
