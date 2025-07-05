# pilolo-realtime-app

A Next.js 13+ app with Supabase realtime chat, a Mapbox-powered map page, live SVG clock widget, and playful UI elements. Deploy-ready for Vercel!

## Features

- **Next.js 13+** using the new `app` directory routing
- **Supabase** integration with realtime chat (Postgres changes and/or broadcast)
- **Mapbox**-powered interactive map page
- **Splash/loading screen** before map loads
- **SVG clock widget** (live ticking) in the top left
- **User icon** top right
- **DIG FOR TREASURE** button at bottom center
- **Vercel**-ready (`vercel.json`, `next.config.js`)
- **.env.local** support for secret keys

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/booleanlambda/pilolo-realtime-app.git
cd pilolo-realtime-app
pnpm install # or yarn or npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase and Mapbox keys.

```bash
cp .env.local.example .env.local
```

| Variable                        | Description                  |
|----------------------------------|------------------------------|
| NEXT_PUBLIC_SUPABASE_URL        | Your Supabase project URL    |
| NEXT_PUBLIC_SUPABASE_ANON_KEY   | Your Supabase anon key       |
| NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN | Your Mapbox access token     |

### 3. Run Locally

```bash
pnpm dev # or yarn dev or npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project)

## Structure

- `/app` - Next.js app directory
- `/components` - UI components (Clock, Splash, etc)
- `/lib` - Supabase client
- `/pages` and `/public` - Static assets
- `vercel.json` & `next.config.js` - Vercel & Next.js configs

## Chat Realtime

- Uses Supabase Realtime (Postgres changes or Broadcast)

## Map

- Powered by Mapbox GL JS
- Loading splash until map is ready
- Live SVG clock always visible
- "DIG FOR TREASURE" button at bottom center

---

MIT License
