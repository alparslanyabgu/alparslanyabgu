import { Cookie } from 'lucide-react';

export const metadata = {
  title: 'Çerez Politikası',
  description: 'Tulpar Kurye çerez politikası. Web sitemizde kullanılan çerezler hakkında bilgi.',
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-6">
              <Cookie className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-3">
              Çerez Politikası
            </h1>
            <p className="text-tulpar-muted text-sm">
              Son güncelleme: Haziran 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-8 border border-tulpar-border shadow-sm space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Çerez Nedir?</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Çerezler, web sitelerinin tarayıcınıza gönderdiği küçük metin dosyalarıdır. 
                Bu dosyalar, site tercihlerinizi hatırlamak ve kullanıcı deneyimini iyileştirmek için kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Kullandığımız Çerez Türleri</h2>
              
              <div className="space-y-4">
                <div className="bg-tulpar-section p-4 rounded-lg border border-tulpar-border">
                  <h3 className="text-tulpar-primary font-medium mb-2">Zorunlu Çerezler</h3>
                  <p className="text-tulpar-muted text-sm">
                    Web sitesinin çalışması için gerekli temel çerezler. Devre dışı bırakılamazlar.
                  </p>
                </div>
                
                <div className="bg-tulpar-section p-4 rounded-lg border border-tulpar-border">
                  <h3 className="text-tulpar-primary font-medium mb-2">Performans Çerezleri</h3>
                  <p className="text-tulpar-muted text-sm">
                    Web sitesinin nasıl kullanıldığını anlamamza yardımcı olur. Anonim veriler toplar.
                  </p>
                </div>
                
                <div className="bg-tulpar-section p-4 rounded-lg border border-tulpar-border">
                  <h3 className="text-tulpar-primary font-medium mb-2">İşlevsellik Çerezleri</h3>
                  <p className="text-tulpar-muted text-sm">
                    Dil tercihi gibi seçimlerinizi hatırlamak için kullanılır.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Çerezleri Yönetme</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Tarayıcı ayarlarınızdan çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. 
                Ancak bazı çerezleri devre dışı bırakmak, web sitesinin düzgün çalışmasını engelleyebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">Daha Fazla Bilgi</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Çerez politikamız hakkında sorularınız için info@tulparkurye.com adresine ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}