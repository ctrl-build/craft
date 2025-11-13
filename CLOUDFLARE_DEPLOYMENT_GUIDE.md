# Cloudflare Pages Deployment Guide - Fix 404 Error

## Critical Settings in Cloudflare Dashboard

Go to your Cloudflare Pages project → **Settings** → **Builds & deployments**

### Required Settings:

1. **Framework preset**: `Next.js` (should auto-detect)
2. **Build command**: `npm run build`
3. **Build output directory**: `.next` ⚠️ **MUST BE EXACTLY THIS**
4. **Root directory**: `/` (leave empty or set to `/`)
5. **Node version**: Set to `20` in Environment Variables

## Why You're Getting 404

The 404 error typically happens because:

1. **Build output directory is wrong** - It must be `.next` (not `out`, `build`, or `.vercel`)
2. **Build failed** - Check the deployment logs
3. **Files not in expected location** - Next.js 16 puts files in `.next/server/app/`

## Solution: Verify Build Output

After the build completes, Cloudflare should find:
- `.next/server/app/index.html` (homepage)
- `.next/server/app/contact.html`
- `.next/server/app/meniuri.html`
- etc.

## If Still Not Working

### Option 1: Check Build Logs
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check if build completed successfully
4. Look for any errors about missing files

### Option 2: Try Static Export (Alternative)

If the above doesn't work, we can configure Next.js for static export:

```typescript
// next.config.ts
output: 'export'
```

But this requires changes to the code (no server-side features).

### Option 3: Contact Cloudflare Support

If the build succeeds but pages don't load, it might be a Cloudflare Pages configuration issue on their end.

## Current Configuration

- ✅ Build command: `npm run build`
- ✅ Build output: `.next`
- ✅ Routing files: `public/_routes.json` and `_redirects`
- ✅ All pages are static (pre-rendered)

## Next Steps

1. **Verify in Dashboard**: Check that build output directory is exactly `.next`
2. **Check Build Logs**: Ensure build completed without errors
3. **Retry Deployment**: Click "Retry deployment" after fixing settings
4. **Check URL**: Make sure you're visiting the correct `.pages.dev` URL from the dashboard

