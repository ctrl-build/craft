// Post-build script to copy HTML files to root for Cloudflare Pages
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../.next/server/app');
const targetDir = path.join(__dirname, '../.next');

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

// Copy HTML files from .next/server/app to .next root
copyHtmlFiles(sourceDir, targetDir);

console.log('HTML files copied for Cloudflare Pages deployment.');

