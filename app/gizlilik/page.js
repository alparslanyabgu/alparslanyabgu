import { Lock } from 'lucide-react';

export const metadata = {
  title: 'Gizlilik Politikası',
  description: 'Tulpar Kurye gizlilik politikası. Kişisel verilerinizin nasıl toplandığı ve kullanıldığı hakkında bilgi.',
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-6">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-3">
              Gizlilik Politikası
            </h1>
            <p className="text-tulpar-muted text-sm">
              Son güncelleme: Haziran 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-8 border border-tulpar-border shadow-sm space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Giriş</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Tulpar Kurye olarak gizliliğinize önem veriyoruz. Bu politika, web sitemizi ve hizmetlerimizi 
                kullanırken toplanan bilgilerin nasıl kullanıldığını açıklar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Toplanan Bilgiler</h2>
              <p className="text-tulpar-muted mb-3">Hizmetlerimizi kullanırken aşağıdaki bilgiler toplanabilir:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-1 ml-2">
                <li>Ad, soyad ve iletişim bilgileri</li>
                <li>Teslimat adresleri</li>
                <li>Sipariş geçmişi</li>
                <li>Cihaz ve tarayıcı bilgileri</li>
                <li>Çerez verileri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Bilgilerin Kullanımı</h2>
              <p className="text-tulpar-muted mb-3">Toplanan bilgiler aşağıdaki amaçlarla kullanılır:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-1 ml-2">
                <li>Kurye hizmetlerinin sağlanması</li>
                <li>Müşteri desteği</li>
                <li>Hizmet iyileştirmeleri</li>
                <li>Yasal yükümlülükler</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Bilgi Güvenliği</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. 
                Ancak internet üzerinden hiçbir veri iletimi %100 güvenli değildir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Üçüncü Taraflar</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Kişisel bilgilerinizi, hizmet sağlayıcılarımız dışında üçüncü taraflarla paylaşmayız. 
                Hizmet sağlayıcılarımız da gizlilik standartlarımıza uymakla yükümlüdür.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">İletişim</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Gizlilik politikamız hakkında sorularınız için info@tulparkurye.com adresine ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}