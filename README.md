# Craft Pub - Next.js Website

A modern, responsive website for Craft Pub built with Next.js, React, and TypeScript.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Get your Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis).

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Cloudflare Pages

This project is configured for deployment on Cloudflare Pages.

#### Setup Steps:

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Connect your Git repository

3. **Configure Build Settings:**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out` (Next.js static export outputs to 'out' directory)
   - **Root directory:** `/` (leave as default)

4. **Add Environment Variables:**
   - In Cloudflare Pages settings, go to **Environment variables**
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your API key
   - Make sure it's available for **Production**, **Preview**, and **Development**

5. **Deploy:**
   - Cloudflare will automatically build and deploy on every push to your main branch
   - Preview deployments are created for pull requests

#### Manual Deployment (using Wrangler CLI):

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy .next
```

### Alternative: Vercel

You can also deploy to Vercel:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
craft/
├── public/           # Static assets (images, videos)
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   └── data/         # Data files (menu data, etc.)
├── next.config.ts    # Next.js configuration
├── wrangler.toml     # Cloudflare configuration
└── package.json      # Dependencies
```

## Features

- 🎨 Modern, responsive design
- 🚀 Optimized for performance
- 📱 Mobile-first approach
- 🗺️ Google Maps integration
- 📋 Interactive menu system
- 🎬 Video backgrounds
- ✨ Smooth animations and transitions

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** CSS Modules + Custom CSS
- **Fonts:** Google Fonts (Cormorant Garamond, Inter)
- **Deployment:** Cloudflare Pages

## License

© 2025 CRAFT. All rights reserved.
