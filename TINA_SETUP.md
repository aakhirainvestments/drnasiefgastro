# TinaCMS Setup Guide

TinaCMS lets Dr Van der Schyff (or you) log in and edit content visually — no code needed.

## Step 1: Create a Tina Cloud Account
1. Go to https://app.tina.io
2. Sign up (free)
3. Click "New Project"
4. Connect your GitHub repo (drnasiefgastro-website)
5. Copy your **Client ID** and **Token**

## Step 2: Add Environment Variables
In Vercel → Settings → Environment Variables, add:
- `NEXT_PUBLIC_TINA_CLIENT_ID` → paste your Client ID
- `TINA_TOKEN` → paste your Token
- `NEXT_PUBLIC_TINA_BRANCH` → `main`

## Step 3: Update Build Command
In Vercel → Settings → Build & Output:
- Build Command: `npx tinacms build && next build`
- (or just `next build` for now until Tina is configured)

## Step 4: Access the CMS
Once live, go to: `https://drnasiefgastro.co.za/admin`
- Log in with your Tina Cloud account
- You can now edit:
  - **Blog Articles** — write, publish, unpublish
  - **Practice Information** — phone, email, hospital locations
  - **Homepage Content** — hero text, stats, doctor's photo
  - **Google Review Link** — update when GBP is live

## What Dr Van der Schyff Can Edit Himself
With his own Tina Cloud login (you invite him as a collaborator):
- Write and publish blog articles
- Update his bio or credentials
- Change office hours
- Upload a new profile photo

## Content Files Location
All content lives in the `/content/` folder on GitHub:
- `/content/posts/` — blog articles (MDX format)
- `/content/practice/info.json` — practice details
- `/content/homepage/main.json` — homepage content
