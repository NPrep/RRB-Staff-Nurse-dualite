import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock data import since we can't easily import TS files in a simple node script without compilation
// In a real CI/CD, this would import the actual data files
const pillarPages = [
  "rrb-staff-nurse-notification",
  "rrb-staff-nurse-syllabus",
  "rrb-staff-nurse-eligibility",
  "rrb-staff-nurse-exam-date",
  "rrb-staff-nurse-application-form",
  "rrb-staff-nurse-admit-card",
  "rrb-staff-nurse-cut-off",
  "rrb-staff-nurse-result",
  "rrb-nursing-superintendent-recruitment"
];

const blogPosts = [
  "how-to-crack-rrb-staff-nurse-exam",
  "rrb-staff-nurse-previous-year-questions",
  "rrb-staff-nurse-vs-aiims-norcet"
];

const generateSitemap = () => {
  const baseUrl = "https://rrbstaffnurse.in";
  const date = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url><loc>${baseUrl}/</loc><lastmod>${date}</lastmod><priority>1.0</priority></url>
  <url><loc>${baseUrl}/about</loc><lastmod>${date}</lastmod><priority>0.5</priority></url>
  <url><loc>${baseUrl}/contact</loc><lastmod>${date}</lastmod><priority>0.5</priority></url>
  <url><loc>${baseUrl}/blog</loc><lastmod>${date}</lastmod><priority>0.8</priority></url>
`;

  pillarPages.forEach(slug => {
    xml += `  <url><loc>${baseUrl}/${slug}</loc><lastmod>${date}</lastmod><priority>0.9</priority></url>\n`;
  });

  blogPosts.forEach(slug => {
    xml += `  <url><loc>${baseUrl}/blog/${slug}</loc><lastmod>${date}</lastmod><priority>0.7</priority></url>\n`;
  });

  xml += `</urlset>`;

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const publicDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(publicDir)){
      fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
