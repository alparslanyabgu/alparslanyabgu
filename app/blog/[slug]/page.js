import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = {
  'istanbul-kurye-hizmeti-secerken-dikkat-edilmesi-gerekenler': {
    title: 'İstanbul\'da Kurye Hizmeti Seçerken Dikkat Edilmesi Gerekenler',
    date: '2025-06-15',
    category: 'Rehber',
    readTime: '5 dk',
    content: `
      <p>İstanbul gibi büyük bir şehirde doğru kurye hizmeti seçmek, işinizin başarısı için kritik önem taşır. Yanlış seçim, geciken teslimatlar, kaybolan paketler ve mutsuz müşteriler anlamına gelebilir.</p>
      
      <h2>1. Şeffaf Fiyatlandırma</h2>
      <p>Güvenilir bir kurye firması, fiyatlarını açıkça paylaşmalıdır. Gizli ücretler, sürpriz ek masraflar sizin için problem oluşturabilir. Tulpar Kurye olarak, ücret hesaplama aracımızla anında ve şeffaf fiyat sunuyoruz.</p>
      
      <h2>2. Bölge Kapsamı</h2>
      <p>İstanbul'un her bölgesine hizmet verilip verilmediğini kontrol edin. Bazı firmalar sadece belirli bölgelerde çalışır veya uç bölgeler için çok yüksek ücretler talep eder.</p>
      
      <h2>3. Teslimat Süresi Garantisi</h2>
      <p>Zaman hassasiyeti yüksek gönderiler için, firmanın teslimat süresi garantisi sunup sunmadığını öğrenin. Acil teslimat seçenekleri de önemli bir kriter.</p>
      
      <h2>4. İletişim Kolaylığı</h2>
      <p>Sorun yaşandığında firmaya kolayca ulaşabilmeniz gerekir. WhatsApp, telefon veya e-posta üzerinden hızlı iletişim sağlayan firmaları tercih edin.</p>
      
      <h2>5. Müşteri Yorumları</h2>
      <p>Diğer müşterilerin deneyimlerini inceleyin. Olumlu yorumlar ve referanslar, firmanın güvenilirliği hakkında fikir verir.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru kurye firmasını seçmek, uzun vadede zaman ve para tasarrufu sağlar. Tulpar Kurye olarak, İstanbul'un her köşesine şeffaf fiyat ve güvenilir hizmet sunuyoruz.</p>
    `
  },
  'moto-kurye-mi-arac-kurye-mi': {
    title: 'Moto Kurye mi, Araç Kurye mi? Hangi Durumda Hangisi?',
    date: '2025-06-12',
    category: 'Bilgi',
    readTime: '4 dk',
    content: `
      <p>Kurye hizmeti alırken en sık sorulan sorulardan biri: "Moto kurye mi, araç kurye mi kullanmalıyım?" Her iki seçeneğin de avantajları ve kullanım senaryoları vardır.</p>
      
      <h2>Moto Kurye Ne Zaman?</h2>
      <ul>
        <li><strong>Hafif paketler:</strong> 5 kg altı gönderiler için ideal</li>
        <li><strong>Evrak ve dosyalar:</strong> Hızlı ve ekonomik</li>
        <li><strong>Acil teslimatlar:</strong> Trafikte daha hızlı hareket</li>
        <li><strong>Kısa mesafeler:</strong> Şehir içi hızlı ulaşım</li>
      </ul>
      
      <h2>Araç Kurye Ne Zaman?</h2>
      <ul>
        <li><strong>Büyük paketler:</strong> Hacimli ve ağır gönderiler</li>
        <li><strong>Kırılacak eşyalar:</strong> Daha güvenli taşıma</li>
        <li><strong>Toplu teslimat:</strong> Birden fazla paket</li>
        <li><strong>Hava koşulları:</strong> Yağmur, kar gibi durumlarda</li>
      </ul>
      
      <h2>Fiyat Farkı</h2>
      <p>Araç kurye hizmeti, moto kuryeye göre yaklaşık 6 kat daha pahalıdır. Bu nedenle, ihtiyacınıza uygun seçimi yapmak önemli.</p>
      
      <h2>Önerimiz</h2>
      <p>Önce paketin boyutunu ve ağırlığını değerlendirin. Şüphedeyseniz, bize ulaşın - size en uygun çözümü önerelim.</p>
    `
  },
  'istanbul-trafiginde-hizli-teslimat-sirlari': {
    title: 'İstanbul Trafiğinde Hızlı Teslimatın Sırları',
    date: '2025-06-10',
    category: 'Sektör',
    readTime: '6 dk',
    content: `
      <p>İstanbul, dünyanın en yoğun trafikli şehirlerinden biri. Peki deneyimli kuryeler bu kaosu nasıl yönetiyor?</p>
      
      <h2>1. Saat Seçimi</h2>
      <p>Sabah 10:00-12:00 ve öğleden sonra 14:00-16:00 saatleri, trafik yoğunluğunun nispeten daha düşük olduğu dönemler.</p>
      
      <h2>2. Alternatif Rotalar</h2>
      <p>Ana arterlerin dışında bilinen yan yollar ve kısayollar, deneyimli kuryenin en büyük avantajıdır.</p>
      
      <h2>3. Bölge Bilgisi</h2>
      <p>Her bölgenin kendine özgü trafik pattern'leri vardır.</p>
      
      <h2>4. Teknoloji Kullanımı</h2>
      <p>Canlı trafik takibi yapan navigasyon uygulamaları, rota optimizasyonunda kritik rol oynar.</p>
    `
  },
  'e-ticaret-teslimat-sureleri-nasil-kisaltilir': {
    title: 'E-ticaret Teslimat Süreleri Nasıl Kısaltılır?',
    date: '2025-06-08',
    category: 'E-ticaret',
    readTime: '7 dk',
    content: `
      <p>Online alışverişte müşteri memnuniyetinin en önemli faktörlerinden biri teslimat süresi.</p>
      
      <h2>1. Yerel Kurye Ortaklığı</h2>
      <p>Şehir içi teslimatlar için yerel kurye firmalarıyla çalışmak, kargo firmalarına göre çok daha hızlı sonuçlar verir.</p>
      
      <h2>2. Sipariş İşleme Hızı</h2>
      <p>Sipariş alındıktan sonra paketleme ve kuryeye teslim süresini minimize edin.</p>
      
      <h2>3. Aynı Gün Teslimat</h2>
      <p>Müşterilerinize aynı gün teslimat seçeneği sunun.</p>
    `
  },
  'kurumsal-kurye-hizmeti-avantajlari': {
    title: 'Kurumsal Kurye Hizmeti Avantajları',
    date: '2025-06-05',
    category: 'Kurumsal',
    readTime: '5 dk',
    content: `
      <p>Düzenli kurye ihtiyacı olan işletmeler için kurumsal abonelik, önemli avantajlar sunar.</p>
      
      <h2>Finansal Avantajlar</h2>
      <ul>
        <li>KDV hariç özel fiyatlar</li>
        <li>Aylık fatura ile kolay muhasebe</li>
        <li>Toplu gönderi indirimleri</li>
      </ul>
      
      <h2>Operasyonel Avantajlar</h2>
      <ul>
        <li>Öncelikli kurye atama</li>
        <li>Özel iletişim hattı</li>
        <li>Esnek çalışma saatleri</li>
      </ul>
    `
  },
  'evrak-kurye-hizmetinde-guvenlik': {
    title: 'Evrak Kurye Hizmetinde Güvenlik Nasıl Sağlanır?',
    date: '2025-06-03',
    category: 'Güvenlik',
    readTime: '4 dk',
    content: `
      <p>Gizli sözleşmeler, finansal belgeler ve önemli evrakların teslimatında güvenlik kritik önemdedir.</p>
      
      <h2>Kurye Seçimi</h2>
      <p>Evrak teslimatı için deneyimli ve güvenilirliği kanıtlanmış kuryeler görevlendirilir.</p>
      
      <h2>İmza Karşılığı Teslim</h2>
      <p>Evraklar mutlaka yetkili kişiye imza karşılığı teslim edilir.</p>
    `
  },
  'istanbul-bolge-sistemi-nasil-calisir': {
    title: 'İstanbul Bölge Sistemi Nasıl Çalışır?',
    date: '2025-06-01',
    category: 'Bilgi',
    readTime: '5 dk',
    content: `
      <p>İstanbul'u 8 bölgeye ayırarak şeffaf ve adil fiyatlandırma sunuyoruz.</p>
      
      <h2>Bölge Mantığı</h2>
      <p>Bölgeler, coğrafi yakınlık ve trafik yoğunluğuna göre belirlendi.</p>
      
      <h2>Fiyat Hesaplama</h2>
      <p>Fiyat = Taban Ücret + Ek Ağırlık + Bekleme Süresi × Çarpanlar</p>
    `
  },
  'gece-kurye-hizmeti-ne-zaman-gerekli': {
    title: 'Gece Kurye Hizmeti Ne Zaman Gerekli?',
    date: '2025-05-28',
    category: 'Hizmetler',
    readTime: '4 dk',
    content: `
      <p>Gece kurye hizmeti, özel durumlar için sunulan premium hizmettir.</p>
      
      <h2>Kullanım Senaryoları</h2>
      <ul>
        <li>Acil tıbbi malzeme teslimatı</li>
        <li>Gece çalışan işletmelere teslimat</li>
        <li>Son dakika iş evrakları</li>
      </ul>
    `
  },
  'paket-hazirlama-ve-ambalaj-ipuclari': {
    title: 'Paket Hazırlama ve Ambalaj İpuçları',
    date: '2025-05-25',
    category: 'Rehber',
    readTime: '6 dk',
    content: `
      <p>Doğru paketleme, gönderinizin hasarsız ulaşmasının garantisidir.</p>
      
      <h2>Temel Kurallar</h2>
      <ul>
        <li>Paket içindeki boşlukları doldurun</li>
        <li>Kırılacak eşyaları ayrı ayrı sarın</li>
        <li>Su geçirmez ambalaj kullanın</li>
      </ul>
    `
  },
  'kurye-sektorunde-teknoloji-kullanimi': {
    title: 'Kurye Sektöründe Teknoloji Kullanımı',
    date: '2025-05-22',
    category: 'Sektör',
    readTime: '8 dk',
    content: `
      <p>Modern kurye hizmetleri, teknoloji ile dönüşüm geçiriyor.</p>
      
      <h2>Rota Optimizasyonu</h2>
      <p>Yapay zeka destekli algoritmalar, en hızlı ve ekonomik rotayı hesaplar.</p>
      
      <h2>Canlı Takip</h2>
      <p>GPS teknolojisi ile gönderinizin nerede olduğunu anında görebilirsiniz.</p>
    `
  }
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return { title: 'Yazı Bulunamadı' };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-tulpar-bg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center text-tulpar-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm Yazılar
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm bg-tulpar-section text-tulpar-primary px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-tulpar-muted text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="text-tulpar-muted text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-[28px] lg:text-[36px] font-semibold text-tulpar-text leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <article 
            className="bg-white rounded-xl p-8 border border-tulpar-border shadow-sm prose prose-lg max-w-none
              prose-headings:text-tulpar-text prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-tulpar-muted prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-tulpar-muted
              prose-strong:text-tulpar-text
              prose-a:text-tulpar-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ul:list-disc prose-ul:list-inside
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <footer className="mt-10 pt-8 border-t border-tulpar-border">
            <div className="flex items-center justify-between">
              <Link href="/blog">
                <Button variant="outline" className="border-tulpar-border text-tulpar-text hover:bg-tulpar-section">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Diğer Yazılar
                </Button>
              </Link>
              <Link href="/ucret-hesapla">
                <Button className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
                  Ücret Hesapla
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}