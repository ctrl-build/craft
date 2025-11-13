# Fixing 404 Error on Cloudflare Pages

If you're getting a 404 error on `craft-pub.pages.dev`, follow these steps:

## Step 1: Verify Build Output Directory

In your Cloudflare Pages dashboard:

1. Go to your project → **Settings** → **Builds & deployments**
2. Check the **Build output directory** field
3. **It MUST be set to**: `.next` (not `out`, `build`, or `.vercel`)
4. If it's wrong, change it to `.next` and save

## Step 2: Check Build Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check the build logs:
   - Look for any errors
   - Verify the build completed successfully
   - Check if it says "Build successful"

## Step 3: Verify Build Command

In **Settings** → **Builds & deployments**:
- **Build command**: `npm run build`
- **Framework preset**: Next.js (should auto-detect)

## Step 4: Rebuild and Redeploy

1. Go to **Deployments** tab
2. Click the **Retry deployment** button (three dots menu)
3. Or trigger a new deployment by pushing a commit

## Step 5: Check Node Version

1. Go to **Settings** → **Environment Variables**
2. Add/verify: `NODE_VERSION` = `20` (if not already set)
3. This ensures Node.js 20.x is used for the build

## Step 6: Verify File Structure

The build should create:
- `.next/` directory with all built files
- `public/` directory with static assets
- All routes should be in `.next/server/app/`

## Common Issues

### Issue: Build Output Directory is Wrong
**Solution**: Set it to `.next` (exactly as shown, with the dot)

### Issue: Build Fails
**Solution**: 
- Check build logs for errors
- Verify all dependencies are in `package.json`
- Make sure Node version is 20.x

### Issue: Routes Not Found
**Solution**: 
- Verify `public/_routes.json` exists (we just added it)
- Check that all pages are in `src/app/` directory
- Ensure no custom routing conflicts

### Issue: Static Assets Not Loading
**Solution**:
- Verify all images are in `public/assets/` directory
- Check that paths in code use `/assets/...` (starting with `/`)

## Still Not Working?

If the issue persists:

1. **Check the actual deployment URL**: Make sure you're visiting the correct URL from the Cloudflare dashboard
2. **Try a custom domain**: Sometimes the `.pages.dev` subdomain has issues
3. **Contact Cloudflare Support**: They can check server-side configuration

## Alternative: Use Vercel (if Cloudflare continues to have issues)

If Cloudflare Pages continues to have issues with Next.js 16, consider:
- Vercel (native Next.js support)
- Or wait for `@cloudflare/next-on-pages` to support Next.js 16

