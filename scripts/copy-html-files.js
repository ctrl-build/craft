// Post-build script to prepare files for Cloudflare Pages
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../.next/server/app');
const targetDir = path.join(__dirname, '../.next');
const publicDir = path.join(__dirname, '../public');
const staticSourceDir = path.join(__dirname, '../.next/static');
const staticTargetDir = path.join(__dirname, '../.next/_next/static');

function copyHtmlFiles(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source directory ${src} does not exist. Skipping copy.`);
    return;
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Skip directories, only copy HTML files
      if (file !== 'segments' && file !== 'page') {
        copyHtmlFiles(srcPath, destPath);
      }
    } else if (file.endsWith('.html')) {
      // Copy HTML files to target directory
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${dest}`);
    }
  });
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source directory ${src} does not exist. Skipping.`);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy HTML files from .next/server/app to .next root
console.log('Copying HTML files...');
copyHtmlFiles(sourceDir, targetDir);

// Copy static assets to _next/static (so /_next/static paths work)
if (fs.existsSync(staticSourceDir)) {
  console.log('Copying static assets...');
  copyDirectory(staticSourceDir, staticTargetDir);
}

// Copy public directory contents to .next root (for /assets paths)
if (fs.existsSync(publicDir)) {
  console.log('Copying public assets...');
  const publicFiles = fs.readdirSync(publicDir);
  publicFiles.forEach((file) => {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(targetDir, file);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy _redirects and _routes.json to .next root
if (fs.existsSync(path.join(publicDir, '_routes.json'))) {
  fs.copyFileSync(
    path.join(publicDir, '_routes.json'),
    path.join(targetDir, '_routes.json')
  );
}

if (fs.existsSync(path.join(__dirname, '../_redirects'))) {
  fs.copyFileSync(
    path.join(__dirname, '../_redirects'),
    path.join(targetDir, '_redirects')
  );
}

console.log('Files prepared for Cloudflare Pages deployment.');

