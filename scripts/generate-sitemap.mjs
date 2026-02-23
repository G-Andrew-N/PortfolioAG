import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env');
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');

const fallbackSiteUrl = 'https://gathuto.vercel.app';

async function readEnvFile() {
  try {
    const content = await readFile(envPath, 'utf8');
    const entries = content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'));

    const parsed = {};
    for (const entry of entries) {
      const separator = entry.indexOf('=');
      if (separator === -1) {
        continue;
      }

      const key = entry.slice(0, separator).trim();
      const value = entry.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
      parsed[key] = value;
    }

    return parsed;
  } catch {
    return {};
  }
}

function normalizeSiteUrl(siteUrl) {
  return siteUrl.replace(/\/$/, '');
}

function toUrlPath(baseUrl, routePath) {
  if (routePath === '/') {
    return `${baseUrl}/`;
  }

  return `${baseUrl}${routePath.startsWith('/') ? routePath : `/${routePath}`}`;
}

async function generateSitemap() {
  const envFromFile = await readEnvFile();
  const envSiteUrl = process.env.VITE_SITE_URL || envFromFile.VITE_SITE_URL;
  const siteUrl = normalizeSiteUrl(envSiteUrl || fallbackSiteUrl);

  const routes = ['/'];

  const urls = routes
    .map((routePath) => `  <url>\n    <loc>${toUrlPath(siteUrl, routePath)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${routePath === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await writeFile(sitemapPath, xml, 'utf8');
  console.log(`Sitemap generated at ${sitemapPath} with base URL: ${siteUrl}`);
}

generateSitemap();