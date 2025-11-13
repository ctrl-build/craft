# Cloudflare Pages Deployment Checklist

## Pre-Deployment Checklist

- [x] ✅ Next.js configuration updated for Cloudflare Pages
- [x] ✅ Environment variables documented (`.env.example`)
- [x] ✅ Cloudflare headers configured (`public/_headers`)
- [x] ✅ Redirects configured (`public/_redirects`)
- [x] ✅ Wrangler configuration added (`wrangler.toml`)
- [x] ✅ `.gitignore` updated
- [x] ✅ README updated with deployment instructions

## Required Environment Variables

Before deploying, make sure to set these in Cloudflare Pages:

1. **NEXT_PUBLIC_GOOGLE_MAPS_API_KEY**
   - Required for: Contact page map functionality
   - Get from: [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
   - Enable: "Maps JavaScript API" in your Google Cloud project

## Cloudflare Pages Setup

### Option 1: Git Integration (Recommended)

1. **Push code to Git repository**
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings:**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out` (Next.js static export outputs to 'out' directory)
   - **Root directory:** `/` (default)
   - **Node version:** 18 or higher

4. **Add Environment Variables:**
   - Go to **Settings** → **Environment variables**
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Set for: Production, Preview, and Development

5. **Deploy:**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy automatically

### Option 2: Wrangler CLI (Manual)

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=craft-pub
```

## Post-Deployment

1. **Verify deployment:**
   - Check that all pages load correctly
   - Test navigation between pages
   - Verify Google Maps loads on Contact page
   - Test forms and interactive elements

2. **Custom Domain (Optional):**
   - Go to **Custom domains** in Cloudflare Pages
   - Add your domain
   - Update DNS records as instructed

3. **Performance:**
   - Cloudflare automatically optimizes assets
   - Check PageSpeed Insights for performance metrics
   - Monitor in Cloudflare Analytics

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### Google Maps Not Loading

- Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set in environment variables
- Check API key restrictions in Google Cloud Console
- Ensure "Maps JavaScript API" is enabled

### Images Not Loading

- Verify images are in `public/assets/` directory
- Check file paths in components
- Ensure images are committed to Git

### Routing Issues

- Verify `public/_redirects` file is present
- Check that all routes are properly configured
- Test client-side navigation

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

