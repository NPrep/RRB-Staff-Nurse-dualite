import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const pages = [
  'rrb-staff-nurse-notification',
  'rrb-staff-nurse-vacancy',
  'rrb-staff-nurse-eligibility',
  'rrb-staff-nurse-age-limit',
  'rrb-staff-nurse-exam-pattern',
  'rrb-staff-nurse-salary',
  'rrb-staff-nurse-selection-process',
  'rrb-staff-nurse-application-process',
  'rrb-staff-nurse-admit-card',
  'rrb-staff-nurse-faq'
];

const generateSitemap = () => {
  const baseUrl = 'https://rrbstaffnurse.in';
  const date = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <url><loc>${baseUrl}/</loc><lastmod>${date}</lastmod><priority>1.0</priority></url>\n`;

  pages.forEach((slug) => {
    xml += `  <url><loc>${baseUrl}/${slug}</loc><lastmod>${date}</lastmod><priority>0.9</priority></url>\n`;
  });

  xml += '</urlset>';

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const publicDir = path.join(__dirname, '../public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
