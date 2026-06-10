import { defineConfig } from 'tinacms';

export default defineConfig({
  // Your Tina Cloud details — fill these in after creating account at app.tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH ?? 'main',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [

      // ── Blog Posts ───────────────────────────────────────
      {
        name: 'post',
        label: 'Blog Articles',
        path: 'content/posts',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'tag', label: 'Category (e.g. IBD, Colonoscopy)', required: true },
          { type: 'datetime', name: 'date', label: 'Publish Date', required: true },
          { type: 'string', name: 'readTime', label: 'Read Time (e.g. 5 min read)' },
          { type: 'string', name: 'intro', label: 'Introduction Paragraph', ui: { component: 'textarea' }, required: true },
          { type: 'rich-text', name: 'body', label: 'Article Body', isBody: true },
          { type: 'boolean', name: 'published', label: 'Published (visible on site)' },
        ],
      },

      // ── Practice Info ────────────────────────────────────
      {
        name: 'practice',
        label: 'Practice Information',
        path: 'content/practice',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'doctorName', label: 'Doctor Name' },
          { type: 'string', name: 'title', label: 'Title / Speciality' },
          { type: 'string', name: 'phone', label: 'Phone Number' },
          { type: 'string', name: 'email', label: 'Email Address' },
          {
            type: 'object', name: 'hospitals', label: 'Practice Locations',
            list: true,
            fields: [
              { type: 'string', name: 'name', label: 'Hospital Name' },
              { type: 'string', name: 'address', label: 'Address' },
              { type: 'string', name: 'phone', label: 'Direct Phone (optional)' },
            ],
          },
          { type: 'string', name: 'hours', label: 'Practice Hours' },
          { type: 'string', name: 'medicalAids', label: 'Medical Aids Note', ui: { component: 'textarea' } },
        ],
      },

      // ── Homepage Content ─────────────────────────────────
      {
        name: 'homepage',
        label: 'Homepage Content',
        path: 'content/homepage',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'heroHeadline', label: 'Hero Headline' },
          { type: 'string', name: 'heroSubtitle', label: 'Hero Subtitle', ui: { component: 'textarea' } },
          { type: 'string', name: 'heroBadge', label: 'Hero Badge Text (e.g. Now Accepting Referrals)' },
          { type: 'image', name: 'doctorPhoto', label: "Doctor's Photo" },
          {
            type: 'object', name: 'stats', label: 'Statistics',
            list: true,
            fields: [
              { type: 'number', name: 'value', label: 'Number' },
              { type: 'string', name: 'suffix', label: 'Suffix (e.g. +, %)' },
              { type: 'string', name: 'label', label: 'Label' },
            ],
          },
          { type: 'string', name: 'googleReviewLink', label: 'Google Business Review Link' },
        ],
      },

    ],
  },
});
