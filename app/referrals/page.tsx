'use client';
import { Phone, Mail, FileText, Clock, Shield, Users, CheckCircle } from 'lucide-react';


export default function Referrals() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#00B4D8', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>For GPs & Specialists</div>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 52px)', color: 'white', marginBottom: 20, lineHeight: 1.15 }}>
          Gastro & Endoscopy<br />Referrals Welcome
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto 40px' }}>
          Partner with a dedicated gastroenterologist who places patient care and clear communication first. Referral feedback within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:0721910835" style={{ background: '#00B4D8', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Phone size={16} /> Call 072 191 0835
          </a>
          <a href="mailto:nasief.vanderschyff@gmail.com" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 15, border: '2px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mail size={16} /> Email Referral
          </a>
        </div>
      </section>

      {/* Why refer */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 36, color: '#0A1F44', marginBottom: 48, textAlign: 'center' }}>Why Your Patients Are in Good Hands</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 64 }}>
            {[
              { icon: <Users size={24} />, title: 'Collaborative', desc: 'Strong working relationships with GPs. Your patient is cared for as a team.' },
              { icon: <Clock size={24} />, title: 'Timely Feedback', desc: 'Clear, structured procedure and consultation reports within 24 hours.' },
              { icon: <Shield size={24} />, title: 'POPIA Compliant', desc: 'All patient data handled securely in line with SA data protection law.' },
              { icon: <FileText size={24} />, title: 'Comprehensive', desc: 'From routine gastroscopy to complex IBD and advanced therapeutic endoscopy.' },
            ].map((w, i) => (
              <div key={i} style={{ background: '#F5F7FA', borderRadius: 16, padding: '32px 24px', border: '1px solid transparent', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00B4D8'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,180,216,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: '#0A1F44', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00B4D8', marginBottom: 20 }}>
                  {w.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A1F44', marginBottom: 10 }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Services accepted */}
          <div style={{ background: '#F5F7FA', borderRadius: 20, padding: '40px 40px' }}>
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 26, color: '#0A1F44', marginBottom: 32 }}>Referrals Accepted For</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {['Gastroscopy (Upper GI Endoscopy)', 'Colonoscopy', 'IBD Assessment & Management', 'GERD & Reflux Evaluation', 'Abdominal Pain Investigation', 'Polyp Detection & Removal', 'Coeliac Disease Assessment', 'Colorectal Cancer Screening', 'Advanced Therapeutic Endoscopy', 'Open Access Endoscopy', 'Polypectomy', 'Diagnostic Biopsy'].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#00B4D8" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: '#475569' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QR + Contact */}
      <section style={{ background: '#0A1F44', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 36, color: 'white', marginBottom: 16 }}>Referring Is Easy</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 48 }}>Three ways to send a referral — choose what works best for you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { num: '01', title: 'QR Code', desc: 'Scan the QR code on our referral flyer to submit in seconds. Secure & POPIA-compliant.' },
              { num: '02', title: 'Phone / WhatsApp', desc: 'Call or WhatsApp 072 191 0835 to refer a patient or discuss a case.' },
              { num: '03', title: 'Email', desc: 'Send referral details and any relevant history to nasief.vanderschyff@gmail.com' },
            ].map((m, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '32px 24px', border: '1px solid rgba(0,180,216,0.2)' }}>
                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 40, color: '#00B4D8', marginBottom: 16 }}>{m.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'white', marginBottom: 10 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
