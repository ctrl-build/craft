# Craft Pub Website

A modern, responsive website for Craft Pub built with Next.js 16, React 19, and TypeScript.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## Build

To create a production build:

```bash
npm run build
```

## Deploy on Cloudflare Pages

This project is configured for deployment on Cloudflare Pages.

### Setup Instructions

1. **Connect Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project" and connect your GitHub repository

2. **Build Settings**
   - **Framework preset**: Next.js (Cloudflare will auto-detect)
   - **Build command**: `npm run build`
   - **Build output directory**: `.next` (auto-detected)
   - **Root directory**: `/` (root of repository)
   - **Node version**: 20.x or later (set in Environment Variables if needed)

3. **Environment Variables**
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in the Cloudflare Pages dashboard
   - Go to Settings → Environment Variables
   - Add the variable for Production, Preview, and Development environments

4. **Deploy**
   - Cloudflare will automatically build and deploy on every push to your main branch
   - Preview deployments are created for pull requests

### Local Testing with Wrangler

To test the Cloudflare Pages build locally:

```bash
# Install Wrangler globally (if not already installed)
npm install -g wrangler

# Build the project
npm run build

# Preview with Wrangler
npm run cf:preview
```

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - React components
- `/src/data` - Data files (menu data, etc.)
- `/public/assets` - Static assets (images, videos)

## Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Maps API** - Map integration (optional)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
