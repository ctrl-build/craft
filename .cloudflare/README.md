# Cloudflare Pages Deployment

This project is configured for deployment on Cloudflare Pages.

## Environment Variables

Set the following environment variables in your Cloudflare Pages dashboard:

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Your Google Maps API key (optional, for map functionality)

## Build Settings

- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Node version**: 20.x or later

## Deployment

1. Connect your GitHub repository to Cloudflare Pages
2. Set the build command: `npm run build`
3. Set the build output directory: `.next`
4. Add environment variables in the Cloudflare dashboard
5. Deploy!

## Local Development with Wrangler

To test locally with Cloudflare:

```bash
npm install -g wrangler
wrangler pages dev .next
```

