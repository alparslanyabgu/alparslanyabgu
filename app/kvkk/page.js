import { Shield } from 'lucide-react';

export const metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Tulpar Kurye KVKK kapsamında kişisel verilerin korunması hakkında aydınlatma metni.',
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-3">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-tulpar-muted text-sm">
              Son güncelleme: Haziran 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-8 border border-tulpar-border shadow-sm space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">1. Veri Sorumlusu</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Tulpar Kurye ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
                kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">2. İşlenen Kişisel Veriler</h2>
              <p className="text-tulpar-muted mb-3">Hizmetlerimizi sunarken aşağıdaki kişisel veriler işlenebilir:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-1 ml-2">
                <li>Kimlik bilgileri (ad, soyad)</li>
                <li>İletişim bilgileri (telefon, e-posta, adres)</li>
                <li>İşlem güvenliği bilgileri (IP adresi, tarayıcı bilgileri)</li>
                <li>Teslimat bilgileri (alıcı/gönderici adresleri)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">3. İşleme Amaçları</h2>
              <p className="text-tulpar-muted mb-3">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-1 ml-2">
                <li>Kurye hizmetlerinin sunulması</li>
                <li>Sipariş ve teslimat yönetimi</li>
                <li>Müşteri iletişimi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Hizmet kalitesinin artırılması</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">4. Veri Aktarımı</h2>
              <p className="text-tulpar-muted leading-relaxed">
                Kişisel verileriniz, yasal yükümlülükler çerçevesinde yetkili kamu kurum ve kuruluşlarına, 
                hizmet sağlayıcılarımıza ve iş ortaklarımıza aktarılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">5. Haklarınız</h2>
              <p className="text-tulpar-muted mb-3">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc list-inside text-tulpar-muted space-y-1 ml-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen veriler hakkında bilgi talep etme</li>
                <li>İşleme amacını öğrenme</li>
                <li>Verilerin düzeltilmesini veya silinmesini talep etme</li>
                <li>İşlemenin kısıtlanmasını talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-tulpar-text mb-3">6. İletişim</h2>
              <p className="text-tulpar-muted leading-relaxed">
                KVKK kapsamındaki talepleriniz için info@tulparkurye.com adresine e-posta gönderebilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}