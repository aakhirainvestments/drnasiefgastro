import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const posts: Record<string, {
  tag: string; date: string; readTime: string;
  title: string; intro: string;
  sections: { heading: string; body: string }[];
}> = {
  'colonoscopy-what-to-expect': {
    tag: 'Colonoscopy', date: 'December 2024', readTime: '5 min read',
    title: 'What to Expect During Your Colonoscopy',
    intro: 'A colonoscopy is one of the most effective tools for detecting and preventing colorectal cancer. If your doctor has recommended one, you may be wondering what the experience involves. This guide walks you through each stage — from preparation to recovery — so you can arrive feeling informed and confident.',
    sections: [
      { heading: 'Bowel Preparation', body: 'The day before your colonoscopy, you will follow a clear liquid diet and take a prescribed bowel preparation solution. This clears the colon so your gastroenterologist can see the lining clearly. The preparation is the part most patients find challenging, but it is essential for an accurate examination. Follow your specific prep instructions carefully — poor preparation can mean the procedure needs to be repeated.' },
      { heading: 'On the Day', body: 'You will need someone to drive you to and from the procedure, as you will receive sedation. On arrival, nursing staff will take your details, place an IV line, and answer any last questions. The procedure itself typically takes 20–45 minutes. You will receive deep conscious sedation, meaning you will be comfortable and relaxed but able to breathe independently.' },
      { heading: 'During the Procedure', body: 'A thin, flexible camera (colonoscope) is gently passed through the rectum and guided through the entire large bowel. Dr Van der Schyff will examine the bowel lining carefully, looking for polyps, inflammation, or any abnormality. If polyps are found, they are often removed on the spot — a painless process called polypectomy.' },
      { heading: 'Recovery', body: 'After the procedure you will rest in the recovery area for 30–60 minutes while the sedation wears off. You may feel mild bloating from the gas used during the examination — this passes quickly. You can eat normally once home. Dr Van der Schyff will discuss his findings with you before you leave, and a written report will follow.' },
      { heading: 'When to Contact the Practice', body: 'Complications from colonoscopy are rare. Contact the practice if you experience significant abdominal pain, heavy rectal bleeding, or fever within 48 hours of the procedure.' },
    ],
  },
  'understanding-ibd': {
    tag: 'IBD', date: 'November 2024', readTime: '6 min read',
    title: 'Understanding Inflammatory Bowel Disease',
    intro: 'Inflammatory bowel disease (IBD) is a term that covers two main conditions — Crohn\'s disease and ulcerative colitis. Both involve chronic inflammation of the digestive tract, but they differ in important ways. Understanding your condition is an essential part of managing it well.',
    sections: [
      { heading: "Crohn's Disease vs Ulcerative Colitis", body: "Ulcerative colitis affects only the colon (large bowel) and always involves the rectum. Inflammation is continuous and confined to the inner lining. Crohn's disease can affect any part of the digestive tract from mouth to anus, often in patches, and can involve the full thickness of the bowel wall. This distinction matters because it influences both the symptoms you experience and the treatment approach." },
      { heading: 'Symptoms', body: 'Common symptoms of both conditions include persistent diarrhoea, abdominal pain, rectal bleeding, fatigue, and unintended weight loss. IBD can also cause symptoms outside the gut — affecting the joints, skin, and eyes. Because symptoms overlap with other conditions, accurate diagnosis through endoscopy and biopsy is essential.' },
      { heading: 'Diagnosis', body: 'Diagnosis involves a combination of blood tests, stool tests, colonoscopy with biopsy, and sometimes imaging such as MRI or CT. A colonoscopy allows Dr Van der Schyff to see the extent and pattern of inflammation and take small tissue samples for laboratory analysis.' },
      { heading: 'Treatment Options', body: 'IBD is a lifelong condition, but most patients can achieve and maintain remission with the right treatment. Options range from anti-inflammatory medications (aminosalicylates, corticosteroids) to immunomodulators and, for moderate-to-severe disease, biological therapies. The goal is to induce remission, maintain it, and prevent complications.' },
      { heading: 'Living Well with IBD', body: 'With appropriate management, most people with IBD live full and active lives. Regular follow-up, endoscopic monitoring, and an open relationship with your specialist are key. Dietary adjustments and stress management can also help, though they do not replace medical treatment.' },
    ],
  },
  'gerd-beyond-heartburn': {
    tag: 'GERD', date: 'October 2024', readTime: '4 min read',
    title: 'Beyond Heartburn: When to See a Gastroenterologist for Reflux',
    intro: 'Heartburn — that burning sensation in the chest after eating — is extremely common and usually harmless. But when reflux becomes frequent, persistent, or starts affecting your quality of life, it may signal gastroesophageal reflux disease (GERD), and specialist input is warranted.',
    sections: [
      { heading: 'What Is GERD?', body: 'GERD occurs when stomach acid repeatedly flows back into the oesophagus, irritating its lining. Unlike occasional heartburn, GERD is a chronic condition that requires consistent management. Without treatment, it can cause complications including oesophagitis (inflammation), strictures, and Barrett\'s oesophagus — a precancerous change in the oesophageal lining.' },
      { heading: 'Symptoms to Take Seriously', body: "Most people recognise heartburn, but GERD can also present as regurgitation, difficulty swallowing, a chronic cough, hoarseness, or a sensation of a lump in the throat. If you're experiencing any of these more than twice a week, or if symptoms persist despite antacids or PPIs (proton pump inhibitors), see a specialist." },
      { heading: 'When Is an Endoscopy Needed?', body: "A gastroscopy (upper GI endoscopy) is recommended if you have alarm symptoms such as difficulty swallowing, unexplained weight loss, or anaemia; if you're over 50 with new or worsening symptoms; or if you've had long-standing reflux and need to exclude Barrett's oesophagus." },
      { heading: "Barrett's Oesophagus", body: "Barrett's oesophagus develops in a minority of people with chronic GERD. The normal lining of the oesophagus changes to a type more resistant to acid, but this change carries a small increased risk of oesophageal cancer. Regular endoscopic surveillance allows early detection of any further changes." },
      { heading: 'Treatment', body: 'Management combines lifestyle changes (diet, weight management, avoiding late meals, elevating the head of the bed) with medication. PPIs are the mainstay of medical treatment. For selected patients, endoscopic or surgical options may be appropriate. Dr Van der Schyff will tailor a management plan to your specific situation.' },
    ],
  },
  'colorectal-cancer-screening': {
    tag: 'Prevention', date: 'September 2024', readTime: '5 min read',
    title: 'Colorectal Cancer Screening: Who Needs It and When',
    intro: 'Colorectal cancer is the third most common cancer worldwide — but it is also one of the most preventable. When caught early, survival rates are excellent. Screening finds cancer before symptoms develop, and colonoscopy can actually prevent cancer by removing precancerous polyps.',
    sections: [
      { heading: 'Why Screening Matters', body: 'Most colorectal cancers develop from polyps — small growths on the bowel lining that take years to become malignant. Removing polyps during colonoscopy interrupts this process entirely. This makes colonoscopy unique among cancer screening tools: it is both diagnostic and preventive in the same procedure.' },
      { heading: 'Who Should Be Screened?', body: 'Average-risk individuals should begin screening at age 45. Higher-risk individuals — those with a family history of colorectal cancer or polyps, personal history of IBD, or known hereditary syndromes such as Lynch syndrome or FAP — should start earlier and be screened more frequently.' },
      { heading: 'Screening Options', body: 'Colonoscopy every 10 years is the gold standard for average-risk patients. Faecal immunochemical testing (FIT) is a non-invasive stool test that can be done annually at home — a positive result requires a follow-up colonoscopy. CT colonography is an alternative for patients who cannot tolerate standard colonoscopy.' },
      { heading: 'What Happens If a Polyp Is Found?', body: "Most polyps are benign and removed safely during the colonoscopy. The type and size of polyp found will determine your future surveillance schedule — your gastroenterologist will advise you on when your next colonoscopy is recommended. Don't let concern about finding something stop you from screening: finding a polyp is exactly the point." },
    ],
  },
  'coeliac-disease-guide': {
    tag: 'Coeliac', date: 'August 2024', readTime: '5 min read',
    title: 'A Practical Guide to Coeliac Disease',
    intro: 'Coeliac disease affects approximately 1 in 100 people, yet many remain undiagnosed for years. It is not a food intolerance or allergy — it is an autoimmune condition triggered by gluten that causes real, measurable damage to the small bowel. The good news: with proper diagnosis and dietary management, most people do very well.',
    sections: [
      { heading: 'What Is Coeliac Disease?', body: 'When someone with coeliac disease consumes gluten — a protein found in wheat, barley, and rye — their immune system attacks the lining of the small intestine. Over time, this damages the villi (tiny finger-like projections that absorb nutrients), leading to malabsorption of key vitamins and minerals.' },
      { heading: 'Symptoms', body: 'Symptoms vary widely. Classic presentation includes diarrhoea, bloating, and weight loss, but many patients have subtler symptoms: fatigue, anaemia, bone pain, mouth ulcers, or skin rash (dermatitis herpetiformis). Some people are diagnosed incidentally through blood tests. This variability is why coeliac disease is often missed or mistaken for IBS.' },
      { heading: 'Diagnosis', body: 'Diagnosis requires blood tests (tTG-IgA antibodies) followed by a gastroscopy with duodenal biopsy — the gold standard. It is essential to continue eating gluten during the diagnostic process, as a gluten-free diet before testing can produce false-negative results. Do not start a gluten-free diet before your endoscopy.' },
      { heading: 'Treatment', body: 'The only treatment for coeliac disease is a strict, lifelong gluten-free diet. This means avoiding all wheat, barley, and rye, and being vigilant about cross-contamination. Most people experience significant improvement within weeks of starting the diet. Follow-up blood tests and repeat endoscopy confirm mucosal healing.' },
      { heading: 'Long-Term Monitoring', body: 'Regular follow-up is important. People with untreated or poorly controlled coeliac disease are at higher risk of nutritional deficiencies, osteoporosis, and — in rare cases — intestinal lymphoma. With good adherence to a gluten-free diet and appropriate monitoring, these risks are substantially reduced.' },
    ],
  },
  'what-is-gastroscopy': {
    tag: 'Gastroscopy', date: 'July 2024', readTime: '4 min read',
    title: 'What Is a Gastroscopy and Do I Need One?',
    intro: 'A gastroscopy — also called an upper GI endoscopy — is a procedure that lets your doctor look directly inside your oesophagus, stomach, and the first part of the small intestine (duodenum). It is one of the most commonly performed endoscopic procedures and provides information that scans and blood tests simply cannot.',
    sections: [
      { heading: 'What Does It Involve?', body: 'A thin, flexible camera (gastroscope) is passed through your mouth and guided gently down into your upper digestive tract. You will receive a local anaesthetic throat spray and sedation, so the procedure is comfortable. It typically takes 10–20 minutes. You will be able to breathe normally throughout.' },
      { heading: 'When Is a Gastroscopy Recommended?', body: 'Common reasons for a gastroscopy include: persistent heartburn or reflux not responding to medication, difficulty swallowing (dysphagia), unexplained upper abdominal pain, nausea or vomiting, unexplained iron-deficiency anaemia, investigation for coeliac disease, surveillance of Barrett\'s oesophagus, or follow-up after treatment of peptic ulcers.' },
      { heading: 'What Can Be Found?', body: 'A gastroscopy can identify peptic ulcers, gastritis (inflammation of the stomach lining), oesophagitis, Barrett\'s oesophagus, coeliac disease (via duodenal biopsy), H. pylori infection, and — importantly — early cancers of the oesophagus and stomach. Biopsies can be taken painlessly during the procedure.' },
      { heading: 'Preparation', body: 'You will need to fast for 6 hours before the procedure (no food or milk; clear fluids up to 2 hours before, unless otherwise instructed). You will need someone to drive you home if you have sedation. Wear comfortable, loose clothing. Bring a list of your current medications.' },
      { heading: 'Is It Safe?', body: 'Gastroscopy is a very safe procedure. Serious complications are rare. You may experience mild throat discomfort or bloating afterwards, which settles quickly. Dr Van der Schyff will discuss the findings with you before you leave the procedure area.' },
    ],
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 32, color: '#0A1F44' }}>Article not found</h1>
        <Link href="/blog" style={{ color: '#00B4D8', textDecoration: 'none', fontWeight: 600 }}>← Back to Articles</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', paddingTop: 72 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #12326B)', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, marginBottom: 28 }}>
            <ArrowLeft size={15} /> Back to Articles
          </Link>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <span style={{ background: 'rgba(0,180,216,0.2)', color: '#00B4D8', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 4, letterSpacing: 0.8, textTransform: 'uppercase' }}>{post.tag}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={13} />{post.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={13} />{post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: 'white', lineHeight: 1.2, marginBottom: 24 }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,180,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00B4D8', fontSize: 16, fontWeight: 700 }}>N</div>
            <div>
              <div style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>Dr Nasief van der Schyff</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Specialist Gastroenterologist · UCT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: '64px 24px 80px', background: 'white' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Intro */}
          <p style={{ fontSize: 18, color: '#334155', lineHeight: 1.85, marginBottom: 40, fontWeight: 400, borderLeft: '3px solid #00B4D8', paddingLeft: 20 }}>
            {post.intro}
          </p>

          {/* Sections */}
          {post.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 24, color: '#0A1F44', marginBottom: 14 }}>{s.heading}</h2>
              <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85 }}>{s.body}</p>
            </div>
          ))}

          {/* Disclaimer */}
          <div style={{ background: '#F0F7FF', borderRadius: 12, padding: '20px 24px', marginTop: 48, border: '1px solid #C8E6F7' }}>
            <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#0A1F44' }}>Medical disclaimer:</strong> This article is for general educational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for diagnosis and treatment specific to your situation.
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: '#0A1F44', borderRadius: 16, padding: '36px', marginTop: 48, textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 24, color: 'white', marginBottom: 10 }}>Have questions about your GI health?</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>Book a consultation with Dr Van der Schyff at UCT Private Academic Hospital.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/appointments" style={{ background: '#00B4D8', color: 'white', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>Book Appointment</Link>
              <Link href="/blog" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.2)' }}>More Articles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
