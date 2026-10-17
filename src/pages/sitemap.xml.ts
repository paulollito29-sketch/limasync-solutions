import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://limasync.com';
  const now = new Date();
  const lastMod = now.toISOString().split('T')[0];

  const pages = [
    {
      loc: `${siteUrl}/`,
      changefreq: 'weekly',
      priority: '1.0',
      translations: [
        { lang: 'es', url: `${siteUrl}/` },
        { lang: 'en', url: `${siteUrl}/en/` },
        { lang: 'x-default', url: `${siteUrl}/` },
      ],
    },
    {
      loc: `${siteUrl}/en/`,
      changefreq: 'weekly',
      priority: '0.8',
      translations: [
        { lang: 'es', url: `${siteUrl}/` },
        { lang: 'en', url: `${siteUrl}/en/` },
        { lang: 'x-default', url: `${siteUrl}/` },
      ],
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${page.translations
  .map(
    (t) => `    <xhtml:link rel="alternate" hreflang="${t.lang}" href="${t.url}"/>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};
