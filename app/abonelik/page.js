import { Building2, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Kurumsal Abonelik',
  description: 'Tulpar Kurye kurumsal abonelik avantajları. KDV hariç özel fiyatlar, öncelikli hizmet, aylık faturalama.',
};

const benefits = [
  {
    icon: Star,
    title: 'Özel Fiyatlandırma',
    description: 'KDV hariç abone tarifesi ile daha uygun fiyatlar.'
  },
  {
    icon: Zap,
    title: 'Öncelikli Hizmet',
    description: 'Kurumsal müşterilerimize öncelikli kurye atama.'
  },
  {
    icon: Shield,
    title: 'Faturalı Ödeme',
    description: 'Aylık fatura ile kolay muhasebe takibi.'
  },
  {
    icon: Clock,
    title: 'Esnek Çalışma',
    description: 'Özel anlaşmalı çalışma saatleri ve bölgeler.'
  }
];

const comparison = [
  { feature: 'Taban Fiyat (Aynı Bölge)', pesin: '25 ₺', abone: '14 ₺' },
  { feature: 'KDV', pesin: 'Dahil', abone: 'Hariç' },
  { feature: 'Ek Kg/Dm³ Ücreti', pesin: '2.50 ₺', abone: '2.00 ₺' },
  { feature: 'Bekleme (dk)', pesin: '2.50 ₺', abone: '2.00 ₺' },
  { feature: 'Öncelik', pesin: 'Normal', abone: 'Yüksek' },
  { feature: 'Ödeme', pesin: 'Anında', abone: 'Aylık Fatura' },
];

export default function AbonelikPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-6">
            <Building2 className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-4">
            Kurumsal Abonelik
          </h1>
          <p className="text-tulpar-muted max-w-xl mx-auto">
            İşletmeniz için özel fiyatlar ve avantajlar. Düzenli kurye ihtiyaçlarınız için ideal çözüm.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-tulpar-border shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-tulpar-section flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-tulpar-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-tulpar-text mb-2">{benefit.title}</h3>
                  <p className="text-tulpar-muted text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-tulpar-section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-tulpar-text text-center mb-10">
            Tarife Karşılaştırması
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-tulpar-border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-tulpar-border bg-tulpar-section">
                      <th className="text-left p-4 text-tulpar-muted font-medium text-sm">Özellik</th>
                      <th className="text-center p-4 text-tulpar-muted font-medium text-sm">Peşin</th>
                      <th className="text-center p-4 text-tulpar-primary font-medium text-sm">Abone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-tulpar-border last:border-b-0">
                        <td className="p-4 text-tulpar-text text-sm">{row.feature}</td>
                        <td className="p-4 text-center text-tulpar-muted text-sm">{row.pesin}</td>
                        <td className="p-4 text-center text-tulpar-primary font-medium text-sm">{row.abone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-tulpar-text mb-4">
            Kurumsal Müşteri Olmak İster Misiniz?
          </h2>
          <p className="text-tulpar-muted mb-8 max-w-md mx-auto">
            Bizimle iletişime geçin, size özel teklif hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim">
              <Button size="lg" className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
                İletişime Geç
              </Button>
            </Link>
            <Link href="/ucret-hesapla">
              <Button size="lg" variant="outline" className="border-tulpar-border text-tulpar-text hover:bg-tulpar-section">
                Abone Fiyatlarını Gör
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}