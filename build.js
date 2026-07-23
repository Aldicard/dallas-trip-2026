// Inlines Leaflet CSS+JS into the HTML template, writes final file(s)
const fs = require('fs');
const path = require('path');

const leafletCss = fs.readFileSync(path.join(__dirname, 'vendor/leaflet/leaflet.css'), 'utf8');
const leafletJs  = fs.readFileSync(path.join(__dirname, 'vendor/leaflet/leaflet.js'),  'utf8');
const template   = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

const result = template
  .replace('<!--LEAFLET_CSS-->', leafletCss)
  .replace('/*LEAFLET_JS*/', leafletJs);

// dallas-trip.html — for emailing/texting as a standalone attachment
const out = path.join(__dirname, 'dallas-trip.html');
fs.writeFileSync(out, result, 'utf8');
console.log('Built', out, '— size:', Math.round(result.length/1024) + 'KB');

// index.html — identical copy, served automatically by GitHub Pages at the repo root
const indexOut = path.join(__dirname, 'index.html');
fs.writeFileSync(indexOut, result, 'utf8');
console.log('Built', indexOut, '— size:', Math.round(result.length/1024) + 'KB');
