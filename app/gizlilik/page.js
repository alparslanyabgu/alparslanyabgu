import { Lock } from 'lucide-react';

export const metadata = {
  title: 'Gizlilik Politikası',
  description: 'Tulpar Kurye gizlilik politikası. Kişisel verilerinizin nasıl toplandığı ve kullanıldığı hakkında bilgi.',
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold mb-6">
              <Lock className="w-8 h-8 text-tulpar-night" />
            </div>
            <h1 className="text-4xl font-bold text-tulpar-text mb-4">
              Gizlilik Politikası
            </h1>
            <p className="text-tulpar-muted">
              Son güncelleme: Haziran 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-tulpar-surface rounded-xl p-8 border border-tulpar-turquoise/10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Giriş</h2>
              <p className="text-tulpar-muted">
                Tulpar Kurye olarak gizliliğinize önem veriyoruz. Bu politika, web sitemizi ve hizmetlerimizi 
                kullanırken toplanan bilgilerin nasıl kullanıldığını açıklar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Toplanan Bilgiler</h2>
              <p className="text-tulpar-muted mb-4">Hizmetlerimizi kullanırken aşağıdaki bilgiler toplanabilir:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-2">
                <li>Ad, soyad ve iletişim bilgileri</li>
                <li>Teslimat adresleri</li>
                <li>Sipariş geçmişi</li>
                <li>Cihaz ve tarayıcı bilgileri</li>
                <li>Çerez verileri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Bilgilerin Kullanımı</h2>
              <p className="text-tulpar-muted mb-4">Toplanan bilgiler aşağıdaki amaçlarla kullanılır:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-2">
                <li>Kurye hizmetlerinin sağlanması</li>
                <li>Müşteri desteği</li>
                <li>Hizmet iyileştirmeleri</li>
                <li>Yasal yükümlülükler</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Bilgi Güvenliği</h2>
              <p className="text-tulpar-muted">
                Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. 
                Ancak internet üzerinden hiçbir veri iletimi %100 güvenli değildir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Üçüncü Taraflar</h2>
              <p className="text-tulpar-muted">
                Kişisel bilgilerinizi, hizmet sağlayıcılarımız dışında üçüncü taraflarla paylaşmayız. 
                Hizmet sağlayıcılarımız da gizlilik standartlarımıza uymakla yükümlüdür.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">İletişim</h2>
              <p className="text-tulpar-muted">
                Gizlilik politikamız hakkında sorularınız için info@tulparkurye.com adresine ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}