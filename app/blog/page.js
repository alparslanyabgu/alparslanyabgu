import Link from 'next/link';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Blog',
  description: 'Tulpar Kurye blog. İstanbul kurye hizmetleri, teslimat ipuçları, sektör haberleri ve daha fazlası.',
};

// Blog yazıları - statik
const blogPosts = [
  {
    slug: 'istanbul-kurye-hizmeti-secerken-dikkat-edilmesi-gerekenler',
    title: 'İstanbul\'da Kurye Hizmeti Seçerken Dikkat Edilmesi Gerekenler',
    excerpt: 'Doğru kurye firmasını seçmek, işinizin başarısı için kritik önem taşır. İşte dikkat etmeniz gereken 5 önemli kriter.',
    date: '2025-06-15',
    category: 'Rehber',
    readTime: '5 dk'
  },
  {
    slug: 'moto-kurye-mi-arac-kurye-mi',
    title: 'Moto Kurye mi, Araç Kurye mi? Hangi Durumda Hangisi?',
    excerpt: 'Paketinizin boyutu, ağırlığı ve aciliyet durumuna göre doğru kurye türünü nasıl seçersiniz?',
    date: '2025-06-12',
    category: 'Bilgi',
    readTime: '4 dk'
  },
  {
    slug: 'istanbul-trafiginde-hizli-teslimat-sirlari',
    title: 'İstanbul Trafiğinde Hızlı Teslimatın Sırları',
    excerpt: 'Deneyimli kuryelerimizin İstanbul trafiğinde hızlı teslimat için kullandığı stratejiler.',
    date: '2025-06-10',
    category: 'Sektör',
    readTime: '6 dk'
  },
  {
    slug: 'e-ticaret-teslimat-sureleri-nasil-kisaltilir',
    title: 'E-ticaret Teslimat Süreleri Nasıl Kısaltılır?',
    excerpt: 'Online satışlarınızda müşteri memnuniyetini artırmak için teslimat optimizasyonu ipuçları.',
    date: '2025-06-08',
    category: 'E-ticaret',
    readTime: '7 dk'
  },
  {
    slug: 'kurumsal-kurye-hizmeti-avantajlari',
    title: 'Kurumsal Kurye Hizmeti Avantajları',
    excerpt: 'İşletmeniz için düzenli kurye hizmeti almanın finansal ve operasyonel avantajları.',
    date: '2025-06-05',
    category: 'Kurumsal',
    readTime: '5 dk'
  },
  {
    slug: 'evrak-kurye-hizmetinde-guvenlik',
    title: 'Evrak Kurye Hizmetinde Güvenlik Nasıl Sağlanır?',
    excerpt: 'Gizli ve önemli evraklarınızın güvenli teslimatı için alınan önlemler ve standartlar.',
    date: '2025-06-03',
    category: 'Güvenlik',
    readTime: '4 dk'
  },
  {
    slug: 'istanbul-bolge-sistemi-nasil-calisir',
    title: 'İstanbul Bölge Sistemi Nasıl Çalışır?',
    excerpt: '8 bölgeli fiyatlandırma sistemimizin mantığı ve size nasıl avantaj sağladığı.',
    date: '2025-06-01',
    category: 'Bilgi',
    readTime: '5 dk'
  },
  {
    slug: 'gece-kurye-hizmeti-ne-zaman-gerekli',
    title: 'Gece Kurye Hizmeti Ne Zaman Gerekli?',
    excerpt: 'Acil durumlar ve özel ihtiyaçlar için gece kurye hizmetinin kullanım senaryoları.',
    date: '2025-05-28',
    category: 'Hizmetler',
    readTime: '4 dk'
  },
  {
    slug: 'paket-hazirlama-ve-ambalaj-ipuclari',
    title: 'Paket Hazırlama ve Ambalaj İpuçları',
    excerpt: 'Gönderinizin hasarsız ulaşması için doğru paketleme teknikleri.',
    date: '2025-05-25',
    category: 'Rehber',
    readTime: '6 dk'
  },
  {
    slug: 'kurye-sektorunde-teknoloji-kullanimi',
    title: 'Kurye Sektöründe Teknoloji Kullanımı',
    excerpt: 'Modern kurye hizmetlerinde kullanılan teknolojiler ve gelecek trendleri.',
    date: '2025-05-22',
    category: 'Sektör',
    readTime: '8 dk'
  }
];

const categories = ['Tümü', 'Rehber', 'Bilgi', 'Sektör', 'E-ticaret', 'Kurumsal', 'Güvenlik', 'Hizmetler'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-tulpar-text mb-4">
            Blog
          </h1>
          <p className="text-xl text-tulpar-muted max-w-2xl mx-auto">
            Kurye sektörü, İstanbul teslimat ipuçları ve daha fazlası
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-sm bg-tulpar-surface border border-tulpar-turquoise/20 text-tulpar-text hover:border-tulpar-turquoise/50 cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-tulpar-surface border-tulpar-turquoise/10 hover:border-tulpar-turquoise/30 transition-all h-full group">
                <CardContent className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-tulpar-turquoise/20 text-tulpar-turquoise px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-tulpar-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-tulpar-text mb-3 group-hover:text-tulpar-turquoise transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-tulpar-muted text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-tulpar-turquoise/10">
                    <span className="text-xs text-tulpar-muted">{post.readTime} okuma</span>
                    <span className="text-tulpar-turquoise text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Oku <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}