import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Blog | Tulpar Kurye',
  description: 'İstanbul kurye hizmetleri, teslimat ipuçları, e-ticaret lojistik rehberleri ve sektör haberleri. Tulpar Kurye blog.',
};

const blogPosts = [
  {
    slug: 'istanbul-kurye-hizmeti-secerken-dikkat-edilmesi-gerekenler',
    title: 'İstanbul\'da Kurye Hizmeti Seçerken Dikkat Edilmesi Gerekenler',
    excerpt: 'İstanbul gibi büyük bir metropolde doğru kurye hizmeti seçmek, işinizin başarısı için kritik önem taşıyor. İşte dikkat etmeniz gereken 6 önemli kriter.',
    date: '2025-06-15',
    category: 'Rehber',
    readTime: '7 dk'
  },
  {
    slug: 'moto-kurye-mi-arac-kurye-mi',
    title: 'Moto Kurye mi, Araç Kurye mi? Hangi Durumda Hangisi?',
    excerpt: 'Her iki seçeneğin de kendine özgü avantajları var. Paketinizin boyutu, ağırlığı ve aciliyet durumuna göre doğru kurye türünü nasıl seçersiniz?',
    date: '2025-06-12',
    category: 'Bilgi',
    readTime: '6 dk'
  },
  {
    slug: 'istanbul-trafiginde-hizli-teslimat-sirlari',
    title: 'İstanbul Trafiğinde Hızlı Teslimatın Sırları',
    excerpt: 'TomTom Trafik Endeksi\'ne göre dünyanın en yoğun şehirlerinden birinde deneyimli kuryelerimizin kullandığı stratejiler ve altın saat taktikleri.',
    date: '2025-06-10',
    category: 'Sektör',
    readTime: '8 dk'
  },
  {
    slug: 'e-ticaret-teslimat-sureleri-nasil-kisaltilir',
    title: 'E-ticaret Teslimat Süreleri Nasıl Kısaltılır?',
    excerpt: 'Amazon\'un "aynı gün teslimat" standardı tüm sektörün beklentilerini yükseltti. Küçük ve orta ölçekli işletmeler bu beklentilere nasıl uyum sağlayabilir?',
    date: '2025-06-08',
    category: 'E-ticaret',
    readTime: '9 dk'
  },
  {
    slug: 'kurumsal-kurye-hizmeti-avantajlari',
    title: 'Kurumsal Kurye Hizmeti Avantajları: İşletmeniz İçin Neden Şart?',
    excerpt: 'KDV hariç özel fiyatlar, öncelikli kurye atama, sabit kurye avantajı ve daha fazlası. Kurumsal aboneliğin tüm avantajları.',
    date: '2025-06-05',
    category: 'Kurumsal',
    readTime: '7 dk'
  },
  {
    slug: 'evrak-kurye-hizmetinde-guvenlik',
    title: 'Evrak Kurye Hizmetinde Güvenlik: Belgeleriniz Güvende mi?',
    excerpt: 'Gizli sözleşmeler, finansal belgeler ve önemli evrakların güvenli teslimatı için alınan önlemler, KVKK uyumluluğu ve güvenlik protokolleri.',
    date: '2025-06-03',
    category: 'Güvenlik',
    readTime: '6 dk'
  },
  {
    slug: 'istanbul-bolge-sistemi-nasil-calisir',
    title: 'İstanbul 8 Bölge Sistemi: Fiyatlandırma Nasıl Çalışır?',
    excerpt: '8 bölgeli fiyatlandırma sistemimizin mantığı, bölge kapsamları ve örnek hesaplamalarla şeffaf fiyat politikamız.',
    date: '2025-06-01',
    category: 'Bilgi',
    readTime: '6 dk'
  },
  {
    slug: 'gece-kurye-hizmeti-ne-zaman-gerekli',
    title: 'Gece Kurye Hizmeti: Ne Zaman Gerekli, Nasıl Çalışır?',
    excerpt: 'Acil tıbbi malzeme, son dakika mahkeme evrakları, gece çalışan işletmeler... Gece kurye hizmetinin kullanım senaryoları ve fiyatlandırması.',
    date: '2025-05-28',
    category: 'Hizmetler',
    readTime: '5 dk'
  },
  {
    slug: 'paket-hazirlama-ve-ambalaj-ipuclari',
    title: 'Paket Hazırlama Rehberi: Gönderiniz Hasarsız Ulaşsın',
    excerpt: 'Profesyonel paketleme teknikleri, ürün türüne göre ambalaj önerileri ve yapılmaması gerekenler. Yılların deneyimiyle hazırlanmış kapsamlı rehber.',
    date: '2025-05-25',
    category: 'Rehber',
    readTime: '7 dk'
  },
  {
    slug: 'kurye-sektorunde-teknoloji-kullanimi',
    title: 'Kurye Sektöründe Teknoloji: 2025 ve Ötesi',
    excerpt: 'GPS takibi, yapay zeka destekli optimizasyon, drone teslimat, otonom araçlar ve akıllı kilitli kutular. Kurye sektöründe teknoloji devrimi.',
    date: '2025-05-22',
    category: 'Sektör',
    readTime: '10 dk'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-4">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-4">
            Blog
          </h1>
          <p className="text-tulpar-muted max-w-lg mx-auto">
            İstanbul kurye hizmetleri, teslimat ipuçları, e-ticaret lojistik rehberleri ve sektör haberleri
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-6xl mx-auto mb-10">
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <Card className="bg-white border-tulpar-border shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-tulpar-primary to-tulpar-primary-hover p-8 flex items-center justify-center min-h-[200px]">
                    <div className="text-center text-white">
                      <span className="text-6xl font-bold opacity-20">01</span>
                      <p className="text-sm mt-2 opacity-80">Öne Çıkan Yazı</p>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-tulpar-section text-tulpar-primary px-3 py-1 rounded-full font-medium">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-xs text-tulpar-muted">{blogPosts[0].readTime} okuma</span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-semibold text-tulpar-text mb-3 hover:text-tulpar-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-tulpar-muted mb-4">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-tulpar-muted flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString('tr-TR')}
                      </span>
                      <span className="text-tulpar-primary font-medium flex items-center gap-1">
                        Devamını Oku <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.slice(1).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-white border-tulpar-border shadow-sm hover:shadow-md transition-shadow h-full group">
                <CardContent className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-tulpar-section text-tulpar-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-tulpar-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-tulpar-text mb-3 group-hover:text-tulpar-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-tulpar-muted text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-tulpar-border">
                    <span className="text-xs text-tulpar-muted">{post.readTime} okuma</span>
                    <span className="text-tulpar-primary text-sm flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                      Oku <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card className="bg-gradient-to-r from-tulpar-primary to-tulpar-primary-hover border-0">
            <CardContent className="p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Kurye İhtiyacınız mı Var?</h3>
              <p className="text-white/80 mb-6">İstanbul'un her noktasına hızlı ve güvenilir teslimat</p>
              <Link href="/ucret-hesapla">
                <button className="bg-white text-tulpar-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Hemen Ücret Hesapla
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
