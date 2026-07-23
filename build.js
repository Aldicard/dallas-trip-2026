// Inlines Leaflet CSS+JS, the two brand fonts, and the hero images into the
// HTML template, then writes the final self-contained file(s). Keeping every
// asset inline is what lets dallas-trip.html work offline / as an email attachment.
const fs = require('fs');
const path = require('path');

const read = (p) => fs.readFileSync(path.join(__dirname, p), 'utf8');
const b64  = (p) => fs.readFileSync(path.join(__dirname, p)).toString('base64');

const leafletCss = read('vendor/leaflet/leaflet.css');
const leafletJs  = read('vendor/leaflet/leaflet.js');
const template   = read('template.html');

// Brand fonts — variable woff2 latin subsets, declared across the full weight
// range so every Fraunces/Inter weight resolves from one file per family.
const interB64    = b64('vendor/fonts/inter-latin.woff2');
const frauncesB64 = b64('vendor/fonts/fraunces-latin.woff2');
const fontsCss = `
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(data:font/woff2;base64,${interB64}) format('woff2')}
@font-face{font-family:'Fraunces';font-style:normal;font-weight:100 900;font-display:swap;src:url(data:font/woff2;base64,${frauncesB64}) format('woff2')}`;

// Hero images (already optimized ~45 KB each) as data URIs.
const heroDay   = 'data:image/jpeg;base64,' + b64('vendor/img/hero_day.jpg');
const heroNight = 'data:image/jpeg;base64,' + b64('vendor/img/hero_night.jpg');

const result = template
  .replace('<!--LEAFLET_CSS-->', leafletCss)
  .replace('/*LEAFLET_JS*/', leafletJs)
  .replace('/*FONTS_CSS*/', fontsCss)
  .replace(/HERO_DAY_B64/g, heroDay)
  .replace(/HERO_NIGHT_B64/g, heroNight);

// dallas-trip.html — for emailing/texting as a standalone attachment
const out = path.join(__dirname, 'dallas-trip.html');
fs.writeFileSync(out, result, 'utf8');
console.log('Built', out, '— size:', Math.round(result.length/1024) + 'KB');

// index.html — identical copy, served automatically by GitHub Pages at the repo root
const indexOut = path.join(__dirname, 'index.html');
fs.writeFileSync(indexOut, result, 'utf8');
console.log('Built', indexOut, '— size:', Math.round(result.length/1024) + 'KB');
