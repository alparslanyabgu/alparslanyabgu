import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = {
  'istanbul-kurye-hizmeti-secerken-dikkat-edilmesi-gerekenler': {
    title: 'İstanbul\'da Kurye Hizmeti Seçerken Dikkat Edilmesi Gerekenler',
    date: '2025-06-15',
    category: 'Rehber',
    readTime: '7 dk',
    content: `
      <p class="lead">İstanbul, 16 milyonu aşkın nüfusuyla Türkiye'nin en büyük ve en hareketli şehri. Böyle bir metropolde doğru kurye hizmeti seçmek, işinizin başarısı için kritik önem taşıyor. Yanlış seçim; geciken teslimatlar, kaybolan paketler ve mutsuz müşteriler anlamına gelebilir.</p>
      
      <h2>1. Şeffaf ve Net Fiyatlandırma</h2>
      <p>Güvenilir bir kurye firması, fiyatlarını açıkça paylaşmalıdır. "Fiyat görüşülür" veya "arayınız" gibi belirsiz ifadeler, genellikle gizli ücretlerin habercisidir.</p>
      <p><strong>Tulpar Kurye farkı:</strong> Web sitemizde bulunan ücret hesaplama aracıyla, teslimat ücretinizi saniyeler içinde öğrenebilirsiniz. Bölge bazlı fiyatlandırma sistemimiz, tam şeffaflık sunar.</p>
      
      <h2>2. İstanbul Bölge Kapsamı</h2>
      <p>İstanbul'un her bölgesine hizmet verilip verilmediğini mutlaka kontrol edin. Bazı firmalar sadece Avrupa yakasında çalışırken, bazıları Anadolu yakası için ekstra ücret talep eder.</p>
      <p><strong>Dikkat edilecekler:</strong></p>
      <ul>
        <li>Avrupa ve Anadolu yakası kapsamı</li>
        <li>Uç bölgelere (Silivri, Tuzla, Çatalca) teslimat</li>
        <li>Bölgeler arası geçiş ücretleri</li>
      </ul>
      
      <h2>3. Teslimat Süresi ve Garantisi</h2>
      <p>Zaman hassasiyeti yüksek gönderiler için, firmanın teslimat süresi garantisi sunup sunmadığını öğrenin.</p>
      <p><strong>Sorulması gereken sorular:</strong></p>
      <ul>
        <li>Aynı gün teslimat mümkün mü?</li>
        <li>Acil teslimat için ek ücret var mı?</li>
        <li>Gecikme durumunda tazminat politikası nedir?</li>
      </ul>
      
      <h2>4. İletişim Kolaylığı</h2>
      <p>Sorun yaşandığında firmaya kolayca ulaşabilmeniz gerekir. WhatsApp, telefon veya e-posta üzerinden hızlı iletişim sağlayan firmaları tercih edin.</p>
      <p><strong>Tulpar Kurye avantajı:</strong> 7/24 WhatsApp destek hattımız üzerinden anında iletişim kurabilirsiniz.</p>
      
      <h2>5. Müşteri Yorumları ve Referanslar</h2>
      <p>Diğer müşterilerin deneyimlerini inceleyin. Google yorumları, sosyal medya paylaşımları ve referanslar, firmanın güvenilirliği hakkında fikir verir.</p>
      
      <h2>6. Sigorta ve Güvenlik</h2>
      <p>Değerli gönderileriniz için sigortanın olup olmadığını sorun. Kayıp veya hasar durumunda tazminat politikası önemli bir kriterdir.</p>
      
      <h2>Sonuç</h2>
      <p>Doğru kurye firmasını seçmek, uzun vadede zaman ve para tasarrufu sağlar. Tulpar Kurye olarak, İstanbul'un her köşesine şeffaf fiyat ve güvenilir hizmet sunuyoruz. Mitolojik kanatlı atımız Tulpar gibi, gönderilerinizi hızla yerine ulaştırıyoruz.</p>
    `
  },
  'moto-kurye-mi-arac-kurye-mi': {
    title: 'Moto Kurye mi, Araç Kurye mi? Hangi Durumda Hangisi?',
    date: '2025-06-12',
    category: 'Bilgi',
    readTime: '6 dk',
    content: `
      <p class="lead">Kurye hizmeti alırken en sık sorulan sorulardan biri: "Moto kurye mi, araç kurye mi kullanmalıyım?" Her iki seçeneğin de kendine özgü avantajları var. İşte doğru seçimi yapmanız için bilmeniz gerekenler.</p>
      
      <h2>Moto Kurye: Hız ve Ekonomi</h2>
      <p>İstanbul trafiğinde moto kuryeler, araçların giremediği yollardan geçerek büyük zaman avantajı sağlar.</p>
      
      <h3>Moto Kurye Ne Zaman Tercih Edilmeli?</h3>
      <ul>
        <li><strong>Hafif paketler:</strong> 5 kg altı, küçük boyutlu gönderiler</li>
        <li><strong>Evrak ve dosyalar:</strong> A4 boyutunda zarf ve dosyalar</li>
        <li><strong>Acil teslimatlar:</strong> Trafikte hızlı manevra kabiliyeti</li>
        <li><strong>Kısa mesafe teslimatlar:</strong> Aynı bölge içi gönderiler</li>
        <li><strong>Küçük e-ticaret paketleri:</strong> Aksesuar, kozmetik, telefon kılıfı vb.</li>
      </ul>
      
      <p><strong>Moto kurye limitleri:</strong> Maksimum 30x30x30 cm boyut, 5 kg ağırlık</p>
      
      <h2>Araç Kurye: Kapasite ve Güvenlik</h2>
      <p>Büyük ve ağır paketler, kırılacak eşyalar veya kötü hava koşullarında araç kurye en doğru tercih.</p>
      
      <h3>Araç Kurye Ne Zaman Tercih Edilmeli?</h3>
      <ul>
        <li><strong>Büyük paketler:</strong> 5 kg üzeri, hacimli gönderiler</li>
        <li><strong>Kırılacak eşyalar:</strong> Cam, elektronik cihazlar, antika</li>
        <li><strong>Toplu teslimat:</strong> Birden fazla paket tek seferde</li>
        <li><strong>Kötü hava koşulları:</strong> Yağmur, kar, aşırı sıcak</li>
        <li><strong>Değerli eşyalar:</strong> Mücevher, sanat eseri</li>
        <li><strong>Gıda teslimatı:</strong> Sıcak/soğuk zincir gerektiren ürünler</li>
      </ul>
      
      <h2>Fiyat Karşılaştırması</h2>
      <p>Araç kurye hizmeti, moto kuryeye göre yaklaşık <strong>6 kat</strong> daha yüksek ücretlendirilir. Bunun nedenleri:</p>
      <ul>
        <li>Yakıt maliyeti farkı</li>
        <li>Araç bakım giderleri</li>
        <li>Taşıma kapasitesi ve güvenlik</li>
        <li>Sigorta maliyetleri</li>
      </ul>
      
      <h2>İstanbul Trafiğinde Karar Verirken</h2>
      <p>İstanbul trafiği göz önüne alındığında:</p>
      <ul>
        <li><strong>Yoğun saatlerde:</strong> Moto kurye 2-3 kat daha hızlı</li>
        <li><strong>Boğaz geçişlerinde:</strong> Her iki tip için de zaman planlaması önemli</li>
        <li><strong>Kısa mesafelerde:</strong> Moto kurye kesinlikle daha avantajlı</li>
      </ul>
      
      <h2>Önerimiz</h2>
      <p>Karar vermekte zorlanıyorsanız, şu soruları kendinize sorun:</p>
      <ol>
        <li>Paketim 5 kg'dan ağır mı?</li>
        <li>Boyutu 30x30x30 cm'den büyük mü?</li>
        <li>Kırılabilir veya hassas bir ürün mü?</li>
        <li>Birden fazla paket mi göndereceğim?</li>
      </ol>
      <p>Bu sorulardan herhangi birine "Evet" cevabı verdiyseniz, araç kurye tercih edin. Tüm cevaplar "Hayır" ise moto kurye size yeter.</p>
    `
  },
  'istanbul-trafiginde-hizli-teslimat-sirlari': {
    title: 'İstanbul Trafiğinde Hızlı Teslimatın Sırları',
    date: '2025-06-10',
    category: 'Sektör',
    readTime: '8 dk',
    content: `
      <p class="lead">İstanbul, TomTom Trafik Endeksi'ne göre dünyanın en yoğun trafikli şehirlerinden biri. Ortalama bir İstanbullu, yılda 140 saatini trafikte geçiriyor. Peki deneyimli kuryeler bu kaosu nasıl yönetiyor?</p>
      
      <h2>1. Altın Saat Stratejisi</h2>
      <p>İstanbul trafiğini yıllardır analiz eden ekibimiz, en optimal teslimat saatlerini belirledi:</p>
      <ul>
        <li><strong>Sabah 06:00-08:00:</strong> Trafik henüz yoğunlaşmadan (erken kuşlar için)</li>
        <li><strong>Sabah 10:00-12:00:</strong> Mesai başlangıç trafiği dağıldı</li>
        <li><strong>Öğleden sonra 14:00-16:00:</strong> Öğle molası sonrası, akşam trafiği öncesi</li>
        <li><strong>Akşam 20:00-22:00:</strong> İş çıkış trafiği sona erdi</li>
      </ul>
      
      <p><strong>Kaçınılması gereken saatler:</strong> 08:00-09:30 ve 17:30-19:30 (pik trafik saatleri)</p>
      
      <h2>2. Bölge Bazlı Rota Optimizasyonu</h2>
      <p>Her bölgenin kendine özgü trafik karakteristiği var:</p>
      
      <h3>Avrupa Yakası</h3>
      <ul>
        <li><strong>Beşiktaş-Şişli hattı:</strong> Sahil yolu yerine Büyükdere Caddesi</li>
        <li><strong>Bakırköy-Bahçelievler:</strong> E-5 yerine iç yollar</li>
        <li><strong>Fatih-Sultanahmet:</strong> Tramvay hattı paralelinde değil, alternatif sokaklardan</li>
      </ul>
      
      <h3>Anadolu Yakası</h3>
      <ul>
        <li><strong>Kadıköy-Üsküdar:</strong> Sahil yolu sabahları kabus, öğlen rahat</li>
        <li><strong>Ataşehir-Ümraniye:</strong> TEM yerine ara bağlantı yolları</li>
        <li><strong>Maltepe-Kartal:</strong> E-5 alternatifi olarak Bağdat Caddesi iç yolları</li>
      </ul>
      
      <h2>3. Boğaz Geçişi Taktikleri</h2>
      <p>Avrupa-Anadolu geçişleri için en kritik kararlardan biri köprü seçimi:</p>
      <ul>
        <li><strong>15 Temmuz Şehitler Köprüsü:</strong> Beşiktaş-Üsküdar için ideal</li>
        <li><strong>FSM Köprüsü:</strong> Kuzey bölgeler (Sarıyer-Beykoz) için</li>
        <li><strong>Yavuz Sultan Selim:</strong> Uç bölgeler (Silivri-Şile) için mantıklı</li>
        <li><strong>Avrasya Tüneli:</strong> Kazlıçeşme-Göztepe hattında en hızlı</li>
        <li><strong>Marmaray:</strong> Moto kuryeler için alternatif değil</li>
      </ul>
      
      <h2>4. Teknoloji Kullanımı</h2>
      <p>Modern kurye hizmetlerinde teknoloji kritik rol oynuyor:</p>
      <ul>
        <li><strong>Canlı trafik uygulamaları:</strong> Google Maps, Yandex Navigasyon</li>
        <li><strong>IBB Trafik:</strong> Belediye kameraları ve anlık yoğunluk verileri</li>
        <li><strong>Waze:</strong> Kullanıcı raporlarıyla güncel bilgi</li>
        <li><strong>Rota optimizasyon yazılımları:</strong> Çoklu teslimat planlaması</li>
      </ul>
      
      <h2>5. Hava Durumu Faktörü</h2>
      <p>İstanbul'da hava durumu trafiği dramatik şekilde etkiler:</p>
      <ul>
        <li><strong>Yağmur:</strong> Trafik %40-60 yavaşlar, ek süre planla</li>
        <li><strong>Kar:</strong> Bazı yollar kapanabilir, alternatif rotalar şart</li>
        <li><strong>Lodos:</strong> Köprüler kapanabilir, tünel alternatifi düşün</li>
      </ul>
      
      <h2>6. Yerel Bilgi Avantajı</h2>
      <p>GPS'in bilemeyeceği bilgiler:</p>
      <ul>
        <li>Hangi sokaklar tek yön?</li>
        <li>Nerelerde pazar kuruluyor?</li>
        <li>Hangi saatlerde okul trafiği var?</li>
        <li>Nerede yol çalışması yapılıyor?</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>İstanbul trafiğinde hızlı teslimat, deneyim, teknoloji ve stratejik planlamanın birleşimiyle mümkün. Tulpar Kurye olarak, yılların deneyimini en son teknolojiyle birleştiriyoruz.</p>
    `
  },
  'e-ticaret-teslimat-sureleri-nasil-kisaltilir': {
    title: 'E-ticaret Teslimat Süreleri Nasıl Kısaltılır?',
    date: '2025-06-08',
    category: 'E-ticaret',
    readTime: '9 dk',
    content: `
      <p class="lead">Online alışverişte müşteri memnuniyetinin en önemli faktörlerinden biri teslimat süresi. Amazon'un "aynı gün teslimat" standardı, tüm e-ticaret sektörünün beklentilerini yükseltti. Peki küçük ve orta ölçekli işletmeler bu beklentilere nasıl uyum sağlayabilir?</p>
      
      <h2>1. Yerel Kurye Ortaklığı</h2>
      <p>Şehir içi teslimatlar için büyük kargo firmalarına güvenmek yerine, yerel kurye firmaları ile çalışmak çok daha hızlı sonuçlar verir.</p>
      
      <h3>Yerel Kurye Avantajları:</h3>
      <ul>
        <li><strong>Aynı gün teslimat:</strong> Sabah verilen sipariş, akşama teslim</li>
        <li><strong>Esnek saatler:</strong> Müşterinin uygun olduğu saatte teslimat</li>
        <li><strong>Düşük hasar oranı:</strong> Daha az aktarma, daha az hasar riski</li>
        <li><strong>Kişisel hizmet:</strong> Müşteriye özel notlar, hediye paketleme</li>
      </ul>
      
      <h2>2. Sipariş İşleme Optimizasyonu</h2>
      <p>Teslimat süresi sadece kurye hızına bağlı değil. İç süreçleriniz de kritik öneme sahip.</p>
      
      <h3>Optimize Edilecek Adımlar:</h3>
      <ul>
        <li><strong>Sipariş onayı:</strong> Otomatik onay sistemi (ödeme alındı = sipariş onaylandı)</li>
        <li><strong>Stok yönetimi:</strong> Gerçek zamanlı stok takibi ile "stokta yok" sürprizlerini önleyin</li>
        <li><strong>Paketleme istasyonu:</strong> Hazır paket malzemeleri, standart paketleme süreci</li>
        <li><strong>Kurye çağırma:</strong> Tek tıkla kurye çağırma entegrasyonu</li>
      </ul>
      
      <p><strong>Hedef:</strong> Sipariş gelişinden kuryeye teslime kadar maksimum 2 saat</p>
      
      <h2>3. Cut-off Saatleri Belirleme</h2>
      <p>Müşterilerinize net teslimat taahhütleri verin:</p>
      <ul>
        <li><strong>14:00'a kadar sipariş = Aynı gün teslimat</strong></li>
        <li><strong>14:00 sonrası sipariş = Ertesi gün teslimat</strong></li>
        <li><strong>Hafta sonu siparişleri = Pazartesi teslimat</strong></li>
      </ul>
      
      <h2>4. Mikro Depo Stratejisi</h2>
      <p>İstanbul'un farklı bölgelerinde küçük stok noktaları oluşturmak, teslimat sürelerini dramatik şekilde kısaltır.</p>
      
      <h3>Örnek Senaryo:</h3>
      <p>Ana deponuz Esenyurt'ta. Kadıköy'den gelen siparişi ana depodan göndermek yerine, Ataşehir'deki mikro deponuzdan gönderirseniz:</p>
      <ul>
        <li>Mesafe: 35 km → 5 km</li>
        <li>Teslimat süresi: 3 saat → 45 dakika</li>
        <li>Kurye maliyeti: %40 düşüş</li>
      </ul>
      
      <h2>5. Teknoloji Entegrasyonları</h2>
      <p>E-ticaret platformunuzu kurye servisiyle entegre edin:</p>
      <ul>
        <li><strong>API entegrasyonu:</strong> Otomatik kurye çağırma</li>
        <li><strong>Takip linki paylaşımı:</strong> Müşteriye otomatik bildirim</li>
        <li><strong>Teslimat kanıtı:</strong> Fotoğraflı teslimat onayı</li>
        <li><strong>Geri bildirim toplama:</strong> Teslimat sonrası müşteri anketi</li>
      </ul>
      
      <h2>6. Müşteri İletişimi</h2>
      <p>Hızlı teslimat kadar, müşterinin bilgilendirilmesi de önemli:</p>
      <ul>
        <li><strong>Sipariş onay SMS/e-postası</strong></li>
        <li><strong>Kurye yola çıktı bildirimi</strong></li>
        <li><strong>Tahmini varış saati</strong></li>
        <li><strong>Teslimat tamamlandı onayı</strong></li>
      </ul>
      
      <h2>7. Özel Günler için Planlama</h2>
      <p>Yoğun dönemlerde (11.11, Black Friday, yılbaşı) ek kurye kapasitesi ayırtın:</p>
      <ul>
        <li>Normal dönemin 3-5 katı sipariş beklentisi</li>
        <li>Ek paketleme personeli</li>
        <li>Uzatılmış cut-off saatleri için ek ücret</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>E-ticarette hızlı teslimat artık bir lüks değil, zorunluluk. Tulpar Kurye olarak, e-ticaret işletmelerine özel kurumsal çözümler sunuyoruz. Aynı gün teslimat, API entegrasyonu ve rekabetçi fiyatlarla işinizi büyütün.</p>
    `
  },
  'kurumsal-kurye-hizmeti-avantajlari': {
    title: 'Kurumsal Kurye Hizmeti Avantajları: İşletmeniz İçin Neden Şart?',
    date: '2025-06-05',
    category: 'Kurumsal',
    readTime: '7 dk',
    content: `
      <p class="lead">Düzenli kurye ihtiyacı olan işletmeler için tek seferlik hizmet almak yerine kurumsal abonelik, ciddi avantajlar sunar. Peki kurumsal kurye hizmeti tam olarak nedir ve işletmenize nasıl fayda sağlar?</p>
      
      <h2>Kurumsal Kurye Hizmeti Nedir?</h2>
      <p>Kurumsal kurye hizmeti, işletmelerin düzenli teslimat ihtiyaçlarını karşılamak üzere tasarlanmış, özel fiyatlandırma ve öncelikli hizmet içeren bir abonelik modelidir.</p>
      
      <h2>Finansal Avantajlar</h2>
      
      <h3>1. KDV Hariç Özel Fiyatlar</h3>
      <p>Bireysel müşterilere uygulanan KDV dahil fiyatlar yerine, kurumsal müşterilere KDV hariç özel tarifeler uygulanır.</p>
      <p><strong>Örnek hesaplama:</strong></p>
      <ul>
        <li>Bireysel fiyat: 30 TL (KDV dahil)</li>
        <li>Kurumsal fiyat: 18 TL (KDV hariç)</li>
        <li>Tasarruf: %40</li>
      </ul>
      
      <h3>2. Aylık Fatura ile Kolay Muhasebe</h3>
      <p>Her teslimat için ayrı fatura yerine, ay sonunda tek fatura. Muhasebe departmanınız için büyük kolaylık.</p>
      
      <h3>3. Hacim İndirimleri</h3>
      <p>Aylık teslimat sayınız arttıkça, birim fiyatınız düşer:</p>
      <ul>
        <li>0-50 teslimat: Standart fiyat</li>
        <li>51-100 teslimat: %5 indirim</li>
        <li>101-200 teslimat: %10 indirim</li>
        <li>200+ teslimat: Özel fiyat teklifi</li>
      </ul>
      
      <h2>Operasyonel Avantajlar</h2>
      
      <h3>1. Öncelikli Kurye Atama</h3>
      <p>Yoğun saatlerde bile kurumsal müşterilerimize öncelik veriyoruz. Kurye bekleme süreniz minimize edilir.</p>
      
      <h3>2. Sabit Kurye Avantajı</h3>
      <p>İsterseniz size özel sabit kurye atayabiliriz. Bu kurye:</p>
      <ul>
        <li>İşletmenizi ve müşterilerinizi tanır</li>
        <li>Özel talimatlarınızı bilir</li>
        <li>Güven ilişkisi oluşur</li>
      </ul>
      
      <h3>3. Esnek Çalışma Saatleri</h3>
      <p>Standart çalışma saatleri dışında da hizmet alabilirsiniz. Erken sabah veya geç akşam teslimatları için ek ücret olmadan planlama yapılır.</p>
      
      <h3>4. Özel İletişim Hattı</h3>
      <p>Kurumsal müşterilerimize özel WhatsApp grubu veya Telegram kanalı üzerinden anlık iletişim imkanı.</p>
      
      <h2>Hangi İşletmeler İçin İdeal?</h2>
      <ul>
        <li><strong>E-ticaret siteleri:</strong> Günlük yüzlerce sipariş</li>
        <li><strong>Hukuk büroları:</strong> Mahkeme evrakları, noter işlemleri</li>
        <li><strong>Muhasebe ofisleri:</strong> Vergi beyannameleri, belgeler</li>
        <li><strong>Sağlık sektörü:</strong> Numune taşıma, ilaç teslimatı</li>
        <li><strong>Restoran ve kafeler:</strong> Hammadde temini</li>
        <li><strong>Reklamajansları:</strong> Baskı materyalleri</li>
      </ul>
      
      <h2>Başvuru Süreci</h2>
      <ol>
        <li>İletişim formunu doldurun veya bizi arayın</li>
        <li>Aylık tahmini teslimat sayınızı belirtin</li>
        <li>Size özel teklif hazırlayalım</li>
        <li>Sözleşme imzalayın</li>
        <li>Hemen kullanmaya başlayın</li>
      </ol>
      
      <h2>Sonuç</h2>
      <p>Ayda 10'dan fazla kurye kullanıyorsanız, kurumsal geçiş sizin için avantajlı. Tulpar Kurye kurumsal hizmetleri hakkında bilgi almak için bizimle iletişime geçin.</p>
    `
  },
  'evrak-kurye-hizmetinde-guvenlik': {
    title: 'Evrak Kurye Hizmetinde Güvenlik: Belgeleriniz Güvende mi?',
    date: '2025-06-03',
    category: 'Güvenlik',
    readTime: '6 dk',
    content: `
      <p class="lead">Gizli sözleşmeler, finansal belgeler, mahkeme evrakları ve kimlik belgeleri... Bu tür hassas evrakların teslimatında güvenlik hayati önem taşır. Peki profesyonel evrak kurye hizmeti nasıl çalışır ve güvenliği nasıl sağlanır?</p>
      
      <h2>Evrak Kurye Hizmeti Nedir?</h2>
      <p>Evrak kurye hizmeti, özel ve gizli belgelerin güvenli bir şekilde A noktasından B noktasına taşınmasını sağlayan premium kurye hizmetidir. Normal kurye hizmetinden farklı olarak, ekstra güvenlik protokolleri uygulanır.</p>
      
      <h2>Güvenlik Protokolleri</h2>
      
      <h3>1. Kurye Seçimi ve Eğitimi</h3>
      <p>Evrak teslimatı için sadece deneyimli ve güvenilirliği kanıtlanmış kuryeler görevlendirilir:</p>
      <ul>
        <li>Minimum 2 yıl kurye deneyimi</li>
        <li>Sabıka kaydı sorgulaması</li>
        <li>Gizlilik sözleşmesi imzası</li>
        <li>Özel eğitim programı</li>
      </ul>
      
      <h3>2. Güvenli Paketleme</h3>
      <p>Evraklar özel güvenlik zarflarıyla paketlenir:</p>
      <ul>
        <li>Kurcalamaya dayanıklı zarflar</li>
        <li>Seri numaralı mühürler</li>
        <li>Açılma göstergeli bantlar</li>
        <li>Su geçirmez koruma</li>
      </ul>
      
      <h3>3. Takip ve İzleme</h3>
      <p>Evrakınızın her hareketi kayıt altında:</p>
      <ul>
        <li>Alım anında fotoğraflı kayıt</li>
        <li>GPS ile canlı takip</li>
        <li>Teslim anında imza ve fotoğraf</li>
        <li>Tüm kayıtların dijital arşivlenmesi</li>
      </ul>
      
      <h3>4. İmza Karşılığı Teslim</h3>
      <p>Evraklar mutlaka yetkili kişiye imza karşılığı teslim edilir:</p>
      <ul>
        <li>Kimlik kontrolü</li>
        <li>Islak imza</li>
        <li>Teslim fotoğrafı</li>
        <li>Teslim saati kaydı</li>
      </ul>
      
      <h2>Hangi Evraklar İçin Kullanılır?</h2>
      <ul>
        <li><strong>Hukuki belgeler:</strong> Mahkeme evrakları, noter belgeleri, sözleşmeler</li>
        <li><strong>Finansal belgeler:</strong> Çek, senet, banka evrakları</li>
        <li><strong>Kimlik belgeleri:</strong> Pasaport, ehliyet, kimlik kartı</li>
        <li><strong>Tıbbi belgeler:</strong> Hasta dosyaları, rapor, sonuçlar</li>
        <li><strong>Kurumsal belgeler:</strong> Gizli sözleşmeler, ihale evrakları</li>
      </ul>
      
      <h2>KVKK Uyumluluğu</h2>
      <p>Tulpar Kurye olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na tam uyum sağlıyoruz:</p>
      <ul>
        <li>Kişisel veri işleme politikamız mevcuttur</li>
        <li>Veriler sadece teslimat amacıyla kullanılır</li>
        <li>Teslimat sonrası kişisel veriler silinir</li>
        <li>Çalışanlarımız KVKK eğitimi almıştır</li>
      </ul>
      
      <h2>Acil Evrak Teslimatı</h2>
      <p>Mahkeme süreleri, noter randevuları beklemez. Acil evrak teslimatı için:</p>
      <ul>
        <li>1 saat içinde kurye gönderimi</li>
        <li>Öncelikli rota planlaması</li>
        <li>Anlık durum bildirimi</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Önemli evraklarınızı rastgele bir kuryeye teslim etmeyin. Tulpar Kurye'nin güvenli evrak teslimat hizmetiyle belgeleriniz emin ellerde.</p>
    `
  },
  'istanbul-bolge-sistemi-nasil-calisir': {
    title: 'İstanbul 8 Bölge Sistemi: Fiyatlandırma Nasıl Çalışır?',
    date: '2025-06-01',
    category: 'Bilgi',
    readTime: '6 dk',
    content: `
      <p class="lead">Tulpar Kurye olarak İstanbul'u 8 bölgeye ayırarak şeffaf ve adil bir fiyatlandırma sistemi oluşturduğumuzu biliyor musunuz? Bu yazıda bölge sistemimizi ve fiyatlandırma mantığımızı detaylıca açıklıyoruz.</p>
      
      <h2>Neden Bölge Sistemi?</h2>
      <p>İstanbul, coğrafi olarak çok geniş bir alana yayılmış, 39 ilçeden oluşan devasa bir metropol. Tek tip fiyatlandırma yerine bölge bazlı sistem:</p>
      <ul>
        <li>Kısa mesafe teslimatlar için adaletli fiyat</li>
        <li>Uzun mesafeler için gerçekçi maliyet hesabı</li>
        <li>Müşteriye şeffaflık</li>
        <li>Kuryeye adil ücret</li>
      </ul>
      
      <h2>8 Bölge ve Kapsadığı İlçeler</h2>
      
      <h3>Bölge 1 - Merkez (Avrupa)</h3>
      <p>Beyoğlu, Şişli, Beşiktaş merkez bölgeleri</p>
      
      <h3>Bölge 2 - Kuzey Avrupa</h3>
      <p>Sarıyer, Eyüpsultan kuzey kısımları</p>
      
      <h3>Bölge 3 - Batı Avrupa</h3>
      <p>Bakırköy, Bahçelievler, Bağcılar, Küçükçekmece</p>
      
      <h3>Bölge 4 - Uzak Batı</h3>
      <p>Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece</p>
      
      <h3>Bölge 5 - Merkez (Anadolu)</h3>
      <p>Kadıköy, Üsküdar, Ataşehir merkez</p>
      
      <h3>Bölge 6 - Tarihi Yarımada</h3>
      <p>Fatih, Eminönü, Sultanahmet</p>
      
      <h3>Bölge 7 - Kuzey Anadolu</h3>
      <p>Beykoz, Çekmeköy kuzey kısımları</p>
      
      <h3>Bölge 8 - Güney Anadolu</h3>
      <p>Kartal, Pendik, Tuzla, Maltepe güneyi</p>
      
      <h2>Fiyat Hesaplama Formülü</h2>
      <p>Toplam ücret şu bileşenlerden oluşur:</p>
      
      <h3>1. Taban Ücret</h3>
      <p>Her bölge çifti için sabit bir taban ücret belirlenir. Örneğin:</p>
      <ul>
        <li>Bölge 1 → Bölge 1 (aynı bölge): 25 TL</li>
        <li>Bölge 1 → Bölge 5 (yakası geçiş): 40 TL</li>
        <li>Bölge 4 → Bölge 8 (uç noktalar): 70 TL</li>
      </ul>
      
      <h3>2. Ağırlık/Hacim Ücreti</h3>
      <p>İlk 1 kg veya 1 dm³ taban ücrete dahildir. Sonrası için:</p>
      <ul>
        <li>Her ek kg veya dm³: +2.50 TL</li>
        <li>Ağırlık ve hacimden büyük olan baz alınır</li>
      </ul>
      
      <h3>3. Bekleme Ücreti</h3>
      <p>Kurye bekleme süresi:</p>
      <ul>
        <li>İlk 5 dakika: Ücretsiz</li>
        <li>Sonraki her dakika: +2.50 TL</li>
      </ul>
      
      <h3>4. Zaman Çarpanları</h3>
      <ul>
        <li><strong>Gündüz (09:00-18:00):</strong> Normal fiyat (x1)</li>
        <li><strong>Akşam (18:00-21:00):</strong> x2 çarpan</li>
        <li><strong>Gece (21:00-24:00):</strong> x3 çarpan</li>
      </ul>
      
      <h3>5. Araç Kurye Çarpanı</h3>
      <p>Moto kurye yerine araç kurye tercih edilirse: x6 çarpan</p>
      
      <h2>Örnek Hesaplama</h2>
      <p><strong>Senaryo:</strong> Kadıköy'den (Bölge 5) Beylikdüzü'ne (Bölge 4), 3 kg paket, akşam 19:00, moto kurye</p>
      <ul>
        <li>Taban ücret (B5→B4): 60 TL</li>
        <li>Ek ağırlık (2 kg × 2.50): 5 TL</li>
        <li>Ara toplam: 65 TL</li>
        <li>Akşam çarpanı (x2): 130 TL</li>
        <li><strong>Toplam: 130 TL (KDV dahil)</strong></li>
      </ul>
      
      <h2>Tarife Seçenekleri</h2>
      <ul>
        <li><strong>Peşin (KDV Dahil):</strong> Bireysel müşteriler için</li>
        <li><strong>Abone (KDV Hariç):</strong> Kurumsal müşteriler için indirimli tarifeler</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Bölge sistemimiz sayesinde, tam olarak ne ödeyeceğinizi önceden bilirsiniz. Sürpriz ücret yok, gizli masraf yok. Ücret hesaplama aracımızı kullanarak hemen fiyat öğrenin!</p>
    `
  },
  'gece-kurye-hizmeti-ne-zaman-gerekli': {
    title: 'Gece Kurye Hizmeti: Ne Zaman Gerekli, Nasıl Çalışır?',
    date: '2025-05-28',
    category: 'Hizmetler',
    readTime: '5 dk',
    content: `
      <p class="lead">Gece kurye hizmeti, mesai saatleri dışında acil teslimat ihtiyaçlarını karşılayan premium bir hizmettir. Peki hangi durumlarda gece kuryeye ihtiyaç duyulur ve bu hizmet nasıl çalışır?</p>
      
      <h2>Gece Kurye Hizmeti Nedir?</h2>
      <p>Gece kurye, akşam 21:00 ile gece yarısı 00:00 arasında yapılan teslimatları kapsar. Normal mesai saatlerinin dışında olduğu için x3 çarpan uygulanır.</p>
      
      <h2>Kimler Gece Kurye Kullanır?</h2>
      
      <h3>1. Sağlık Sektörü</h3>
      <ul>
        <li>Acil tıbbi malzeme teslimatı</li>
        <li>Laboratuvar numunesi taşıma</li>
        <li>Acil ilaç temini</li>
        <li>Tıbbi cihaz servisi</li>
      </ul>
      
      <h3>2. Hukuk Büroları</h3>
      <ul>
        <li>Son dakika mahkeme evrakları</li>
        <li>Gece nöbetçi noter işlemleri</li>
        <li>Acil sözleşme imzaları</li>
      </ul>
      
      <h3>3. Medya ve Basın</h3>
      <ul>
        <li>Son dakika haberleri için görsel/video teslimatı</li>
        <li>Baskıya gidecek materyaller</li>
        <li>Canlı yayın ekipmanı</li>
      </ul>
      
      <h3>4. Gece Çalışan İşletmeler</h3>
      <ul>
        <li>Restoranlar ve kafeler</li>
        <li>Oteller ve konaklama tesisleri</li>
        <li>Gece kulüpleri ve eğlence mekanları</li>
        <li>7/24 çalışan fabrikalar</li>
      </ul>
      
      <h3>5. Kişisel Acil Durumlar</h3>
      <ul>
        <li>Unutulan önemli eşyalar</li>
        <li>Acil belge ihtiyacı</li>
        <li>Seyahat öncesi eksik evraklar</li>
      </ul>
      
      <h2>Gece Kurye Fiyatlandırması</h2>
      <p>Gece kurye hizmeti için normal ücretin 3 katı uygulanır. Bunun nedenleri:</p>
      <ul>
        <li>Mesai dışı çalışma primi</li>
        <li>Gece çalışan kurye sayısının sınırlılığı</li>
        <li>Ek güvenlik önlemleri</li>
        <li>Aciliyet ve öncelik</li>
      </ul>
      
      <h2>Gece Kurye Çağırma Süreci</h2>
      <ol>
        <li>WhatsApp veya telefon ile iletişime geçin</li>
        <li>Teslimat detaylarını paylaşın</li>
        <li>Müsait kurye ataması yapılır (ortalama 15-30 dk)</li>
        <li>Kurye geldiğinde paketinizi teslim edin</li>
        <li>Canlı takip ile teslimatı izleyin</li>
      </ol>
      
      <h2>Dikkat Edilecekler</h2>
      <ul>
        <li>Gece kuryesi önceden planlanamaz, acil durumlar içindir</li>
        <li>Müsaitlik durumuna göre hizmet verilir</li>
        <li>Bazı bölgelerde gece hizmeti verilmeyebilir</li>
        <li>Güvenlik nedeniyle adres detayları net olmalıdır</li>
      </ul>
      
      <h2>Alternatif: Akşam Kurye</h2>
      <p>Acil değilse, akşam 18:00-21:00 arası teslimatı tercih edin. x2 çarpan ile daha ekonomik bir seçenek.</p>
      
      <h2>Sonuç</h2>
      <p>Gece kurye hizmeti, gerçek acil durumlar için tasarlanmış premium bir hizmettir. Tulpar Kurye olarak, gecenin hangi saatinde olursa olsun İstanbul'un her köşesine ulaşıyoruz.</p>
    `
  },
  'paket-hazirlama-ve-ambalaj-ipuclari': {
    title: 'Paket Hazırlama Rehberi: Gönderiniz Hasarsız Ulaşsın',
    date: '2025-05-25',
    category: 'Rehber',
    readTime: '7 dk',
    content: `
      <p class="lead">Doğru paketleme, gönderinizin hasarsız ulaşmasının garantisidir. Yılların deneyimiyle oluşturduğumuz bu rehberde, profesyonel paketleme tekniklerini paylaşıyoruz.</p>
      
      <h2>Temel Paketleme Kuralları</h2>
      
      <h3>1. Doğru Kutu Seçimi</h3>
      <ul>
        <li>Ürüne uygun boyutta kutu seçin (çok büyük = hareket riski)</li>
        <li>Sağlam, ezilmemiş kutular kullanın</li>
        <li>İkinci el kutuları kontrol edin (nem, yırtık)</li>
        <li>Ağır ürünler için çift cidarlı kutu tercih edin</li>
      </ul>
      
      <h3>2. İç Dolgu Malzemeleri</h3>
      <p>Boşlukları doldurmak için kullanılabilecek malzemeler:</p>
      <ul>
        <li><strong>Balonlu naylon:</strong> Kırılacak eşyalar için ideal</li>
        <li><strong>Kraft kağıt:</strong> Ekonomik ve çevre dostu</li>
        <li><strong>Köpük parçaları:</strong> Hafif ama hacimli ürünler için</li>
        <li><strong>Hava yastıkları:</strong> Profesyonel ambalaj çözümü</li>
      </ul>
      
      <h3>3. Bantlama Teknikleri</h3>
      <ul>
        <li>H şeklinde bantlama (üst ve alt tüm kenarlar)</li>
        <li>En az 5 cm genişliğinde koli bandı</li>
        <li>Köşeleri ekstra bantla güçlendirin</li>
        <li>Streç film ile son kat koruma</li>
      </ul>
      
      <h2>Ürün Türüne Göre Paketleme</h2>
      
      <h3>Elektronik Cihazlar</h3>
      <ul>
        <li>Orijinal kutusunda gönderin (varsa)</li>
        <li>Anti-statik poşet kullanın</li>
        <li>Pilleri çıkarın veya bantlayın</li>
        <li>Ekranları balonlu naylonla sarın</li>
        <li>"KIRILACILAR" etiketi yapıştırın</li>
      </ul>
      
      <h3>Cam ve Seramik</h3>
      <ul>
        <li>Her parçayı ayrı ayrı sarın</li>
        <li>En az 5 cm kalınlığında dolgu</li>
        <li>Kutunun içinde hareket etmemeli</li>
        <li>"CAM - DİKKAT" etiketi</li>
        <li>Kutunun üstünü işaretleyin (bu taraf yukarı)</li>
      </ul>
      
      <h3>Giyim ve Tekstil</h3>
      <ul>
        <li>Poşet içinde gönderin (nem koruması)</li>
        <li>Kırışmasın diye düzgün katlayın</li>
        <li>Ağır aksesuarları ayrı paketleyin</li>
      </ul>
      
      <h3>Gıda Ürünleri</h3>
      <ul>
        <li>Soğuk zincir gerekiyorsa buzlu termos kutu</li>
        <li>Sızdırmazlık için çift poşet</li>
        <li>Ezilme riski varsa sert kutu</li>
        <li>Son kullanma tarihini kontrol edin</li>
      </ul>
      
      <h3>Evrak ve Belgeler</h3>
      <ul>
        <li>Zarfın içinde katlanmayacak şekilde yerleştirin</li>
        <li>Karton destekli zarf kullanın</li>
        <li>Su geçirmez poşetle koruyun</li>
        <li>Önemli evraklar için taahhütlü gönderim</li>
      </ul>
      
      <h2>Etiketleme İpuçları</h2>
      <ul>
        <li>Gönderici ve alıcı bilgilerini net yazın</li>
        <li>Telefon numarası mutlaka ekleyin</li>
        <li>Eski etiketleri çıkarın veya kapatın</li>
        <li>Barkod varsa görünür bırakın</li>
        <li>Özel talimatları etikete yazın</li>
      </ul>
      
      <h2>Yapılmaması Gerekenler</h2>
      <ul>
        <li>❌ Gazete kağıdı kullanmak (mürekkep bulaşır)</li>
        <li>❌ Poşet yerine kutu için seloteyp kullanmak</li>
        <li>❌ Ürünü çok sıkı sarmak (basınç hasarı)</li>
        <li>❌ Kutunun ağırlık limitini aşmak</li>
        <li>❌ Köşeleri açık bırakmak</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>İyi paketlenmiş bir gönderi, hem sizin hem de alıcının mutluluğu demek. Paketleme konusunda emin değilseniz, bize sorun - size rehberlik edelim.</p>
    `
  },
  'kurye-sektorunde-teknoloji-kullanimi': {
    title: 'Kurye Sektöründe Teknoloji: 2025 ve Ötesi',
    date: '2025-05-22',
    category: 'Sektör',
    readTime: '10 dk',
    content: `
      <p class="lead">Kurye sektörü, son 10 yılda teknoloji ile büyük bir dönüşüm geçirdi. GPS takibi, mobil uygulamalar ve yapay zeka destekli optimizasyon, teslimat deneyimini kökten değiştirdi. Peki gelecekte bizi neler bekliyor?</p>
      
      <h2>Mevcut Teknolojiler</h2>
      
      <h3>1. GPS ve Canlı Takip</h3>
      <p>Artık gönderinizin nerede olduğunu saniye saniye izleyebilirsiniz:</p>
      <ul>
        <li>Gerçek zamanlı konum bilgisi</li>
        <li>Tahmini varış süresi hesaplaması</li>
        <li>Rota görselleştirme</li>
        <li>Müşteriye otomatik bildirim</li>
      </ul>
      
      <h3>2. Mobil Uygulamalar</h3>
      <p>Hem kuryeler hem müşteriler için hayatı kolaylaştıran uygulamalar:</p>
      <ul>
        <li><strong>Kurye uygulaması:</strong> Sipariş alma, navigasyon, teslimat onayı</li>
        <li><strong>Müşteri uygulaması:</strong> Sipariş verme, takip, değerlendirme</li>
        <li><strong>İşletme paneli:</strong> Raporlama, fatura, yönetim</li>
      </ul>
      
      <h3>3. Rota Optimizasyonu</h3>
      <p>Yapay zeka destekli algoritmalar, en verimli rotaları hesaplar:</p>
      <ul>
        <li>Çoklu teslimat planlaması</li>
        <li>Trafik verisi entegrasyonu</li>
        <li>Dinamik rota güncelleme</li>
        <li>Yakıt ve zaman tasarrufu</li>
      </ul>
      
      <h3>4. Dijital Ödeme Sistemleri</h3>
      <ul>
        <li>Kapıda kredi kartı ile ödeme</li>
        <li>QR kod ile ödeme</li>
        <li>Uygulama içi cüzdan</li>
        <li>Kurumsal faturalama entegrasyonu</li>
      </ul>
      
      <h3>5. Teslimat Kanıtı (POD)</h3>
      <p>Dijital teslimat kanıtı sistemleri:</p>
      <ul>
        <li>Elektronik imza</li>
        <li>Fotoğraflı teslimat onayı</li>
        <li>Zaman damgası</li>
        <li>Konum doğrulama</li>
      </ul>
      
      <h2>Yükselen Trendler</h2>
      
      <h3>1. Drone ile Teslimat</h3>
      <p>Dünya genelinde test aşamasında olan drone teslimatı:</p>
      <ul>
        <li>Kısa mesafeli, hafif paketler için ideal</li>
        <li>Trafik sorunu yok</li>
        <li>Kırsal alanlarda avantaj</li>
        <li>Türkiye'de henüz yasal düzenleme bekleniyor</li>
      </ul>
      
      <h3>2. Otonom Araçlar</h3>
      <p>Sürücüsüz teslimat araçları:</p>
      <ul>
        <li>Amazon Scout, Nuro gibi robotlar</li>
        <li>Gece teslimatları için potansiyel</li>
        <li>İnsan kaynağı maliyetinden tasarruf</li>
        <li>7/24 kesintisiz hizmet imkanı</li>
      </ul>
      
      <h3>3. Akıllı Kilitli Kutular</h3>
      <p>Temassız teslimat için akıllı kutular:</p>
      <ul>
        <li>Apartman girişlerinde ortak kutu</li>
        <li>Tek kullanımlık şifre ile açılış</li>
        <li>Soğutucu özellikli modeller</li>
        <li>Alıcı evde olmasa da güvenli teslimat</li>
      </ul>
      
      <h3>4. Blockchain ve Şeffaflık</h3>
      <p>Tedarik zinciri takibi için blockchain:</p>
      <ul>
        <li>Değiştirilemez teslimat kaydı</li>
        <li>Sahtecilik önleme</li>
        <li>Uluslararası gönderi takibi</li>
        <li>Akıllı sözleşmeler ile otomatik ödeme</li>
      </ul>
      
      <h3>5. Yapay Zeka ve Tahminleme</h3>
      <p>AI destekli karar verme:</p>
      <ul>
        <li>Talep tahmini</li>
        <li>Dinamik fiyatlandırma</li>
        <li>Kurye atama optimizasyonu</li>
        <li>Müşteri davranış analizi</li>
      </ul>
      
      <h2>Çevresel Sürdürülebilirlik</h2>
      <p>Teknoloji, çevre dostu teslimat için de kullanılıyor:</p>
      <ul>
        <li><strong>Elektrikli araçlar:</strong> Sıfır emisyon teslimat</li>
        <li><strong>Rota optimizasyonu:</strong> Daha az yakıt tüketimi</li>
        <li><strong>Konsolidasyon:</strong> Birden fazla paketi tek seferde</li>
        <li><strong>Geri dönüşümlü ambalaj:</strong> Dijital takipli iade sistemi</li>
      </ul>
      
      <h2>Tulpar Kurye'de Teknoloji</h2>
      <p>Biz de teknolojiyi yakından takip ediyoruz:</p>
      <ul>
        <li>Online ücret hesaplama sistemi</li>
        <li>WhatsApp üzerinden sipariş ve takip</li>
        <li>GPS destekli kurye takibi</li>
        <li>Dijital teslimat kanıtı</li>
        <li>E-fatura entegrasyonu</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Teknoloji, kurye sektörünü her geçen gün daha hızlı, güvenilir ve şeffaf hale getiriyor. Tulpar Kurye olarak, bu gelişmeleri yakından takip ediyor ve hizmetlerimize entegre ediyoruz. Gelecek, heyecan verici!</p>
    `
  }
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return { title: 'Yazı Bulunamadı' };
  }

  return {
    title: `${post.title} | Tulpar Kurye Blog`,
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
            <div className="flex items-center gap-4 mb-4 flex-wrap">
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
            className="bg-white rounded-xl p-6 lg:p-10 border border-tulpar-border shadow-sm prose prose-lg max-w-none
              prose-headings:text-tulpar-text prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
              prose-h2:text-xl prose-h2:lg:text-2xl
              prose-h3:text-lg prose-h3:lg:text-xl prose-h3:text-tulpar-text/90
              prose-p:text-tulpar-muted prose-p:leading-relaxed prose-p:mb-4
              prose-p.lead:text-lg prose-p.lead:text-tulpar-text prose-p.lead:font-medium prose-p.lead:leading-relaxed
              prose-li:text-tulpar-muted prose-li:my-1
              prose-strong:text-tulpar-text prose-strong:font-semibold
              prose-a:text-tulpar-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box */}
          <div className="mt-10 bg-gradient-to-r from-tulpar-primary to-tulpar-primary-hover rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-xl font-semibold mb-2">Hemen Teslimat Ücretini Öğrenin</h3>
            <p className="text-white/80 mb-4">İstanbul'un her noktasına hızlı ve güvenilir kurye hizmeti.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ucret-hesapla">
                <Button className="bg-white text-tulpar-primary hover:bg-white/90 font-medium">
                  Ücret Hesapla
                </Button>
              </Link>
              <Link href="https://wa.me/905339298308" target="_blank">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-8 border-t border-tulpar-border">
            <div className="flex items-center justify-between">
              <Link href="/blog">
                <Button variant="outline" className="border-tulpar-border text-tulpar-text hover:bg-tulpar-section">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Diğer Yazılar
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  İletişime Geç
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
