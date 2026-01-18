const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tulparkurye.com';

export default function sitemap() {
  const staticPages = [
    '',
    '/hizmetler',
    '/ucret-hesapla',
    '/bolgeler',
    '/abonelik',
    '/blog',
    '/iletisim',
    '/kvkk',
    '/gizlilik',
    '/cerez-politikasi',
  ];

  const blogSlugs = [
    'istanbul-kurye-hizmeti-secerken-dikkat-edilmesi-gerekenler',
    'moto-kurye-mi-arac-kurye-mi',
    'istanbul-trafiginde-hizli-teslimat-sirlari',
    'e-ticaret-teslimat-sureleri-nasil-kisaltilir',
    'kurumsal-kurye-hizmeti-avantajlari',
    'evrak-kurye-hizmetinde-guvenlik',
    'istanbul-bolge-sistemi-nasil-calisir',
    'gece-kurye-hizmeti-ne-zaman-gerekli',
    'paket-hazirlama-ve-ambalaj-ipuclari',
    'kurye-sektorunde-teknoloji-kullanimi',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page === '/ucret-hesapla' ? 0.9 : 0.8,
  }));

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls];
}