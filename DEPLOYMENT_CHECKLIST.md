# Cloudflare Pages Deployment Checklist

## ✅ Pre-Deployment Configuration

- [x] Updated `next.config.ts` for Cloudflare Pages compatibility
- [x] Created `wrangler.toml` configuration file
- [x] Updated `package.json` with Cloudflare deployment scripts
- [x] Created `.env.example` for environment variables documentation
- [x] Updated `README.md` with deployment instructions

## 📋 Before Deploying

### 1. Environment Variables
Set these in Cloudflare Pages dashboard (Settings → Environment Variables):

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (optional - only if using Google Maps)

### 2. Build Settings in Cloudflare Dashboard

When creating/editing your Cloudflare Pages project:

- **Framework preset**: Next.js (auto-detected)
- **Build command**: `npm run build`
- **Build output directory**: `.next` (auto-detected)
- **Root directory**: `/` (root of repository)
- **Node version**: 20.x (set in Environment Variables if needed)

### 3. Verify Build Locally

Test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

## 🚀 Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages**
   - Click **Create a project**
   - Connect your GitHub repository
   - Select the repository and branch

3. **Configure Build Settings**
   - Cloudflare should auto-detect Next.js
   - Verify build command: `npm run build`
   - Verify output directory: `.next`

4. **Add Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` if needed
   - Set for Production, Preview, and Development

5. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy automatically
   - Your site will be available at `your-project.pages.dev`

## 🔍 Post-Deployment

- [ ] Verify all pages load correctly
- [ ] Test navigation links
- [ ] Verify forms work (Contact, Reservation)
- [ ] Check Google Maps integration (if enabled)
- [ ] Test on mobile devices
- [ ] Verify all images and videos load
- [ ] Check console for any errors

## 📝 Custom Domain (Optional)

To add a custom domain:

1. Go to your Cloudflare Pages project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow DNS configuration instructions

## 🛠️ Troubleshooting

### Build Fails
- Check Node version (should be 20.x)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Verify variables are set for the correct environment (Production/Preview)
- Redeploy after adding new variables

### Images Not Loading
- Verify images are in `/public` directory
- Check image paths in components
- Ensure static assets are properly referenced

## 📚 Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Pages Environment Variables](https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables)

