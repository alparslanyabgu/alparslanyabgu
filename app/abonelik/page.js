import { Building2, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold mb-6">
            <Building2 className="w-8 h-8 text-tulpar-night" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-tulpar-text mb-6">
            Kurumsal Abonelik
          </h1>
          <p className="text-xl text-tulpar-muted max-w-2xl mx-auto">
            İşletmeniz için özel fiyatlar ve avantajlar. Düzenli kurye ihtiyaçlarınız için ideal çözüm.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-tulpar-surface border-tulpar-turquoise/10 text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-tulpar-turquoise/20 to-tulpar-gold/20 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-tulpar-turquoise" />
                  </div>
                  <h3 className="text-lg font-semibold text-tulpar-text mb-2">{benefit.title}</h3>
                  <p className="text-tulpar-muted text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-tulpar-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tulpar-text text-center mb-10">
            Tarife Karşılaştırması
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-tulpar-night border-tulpar-turquoise/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-tulpar-turquoise/20">
                      <th className="text-left p-4 text-tulpar-muted font-medium">Özellik</th>
                      <th className="text-center p-4 text-tulpar-muted font-medium">Peşin</th>
                      <th className="text-center p-4 text-tulpar-turquoise font-medium">Abone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-tulpar-turquoise/10">
                        <td className="p-4 text-tulpar-text">{row.feature}</td>
                        <td className="p-4 text-center text-tulpar-muted">{row.pesin}</td>
                        <td className="p-4 text-center text-tulpar-turquoise font-medium">{row.abone}</td>
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-tulpar-text mb-4">
            Kurumsal Müşteri Olmak İster Misiniz?
          </h2>
          <p className="text-tulpar-muted mb-8 max-w-xl mx-auto">
            Bizimle iletişime geçin, size özel teklif hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim">
              <Button size="lg" className="bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-bold">
                İletişime Geç
              </Button>
            </Link>
            <Link href="/ucret-hesapla">
              <Button size="lg" variant="outline" className="border-tulpar-turquoise/50 text-tulpar-turquoise hover:bg-tulpar-turquoise/10">
                Abone Fiyatlarını Gör
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}