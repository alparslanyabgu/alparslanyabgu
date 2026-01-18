import { Bike, Car, Zap, FileText, Package, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Hizmetlerimiz',
  description: 'Tulpar Kurye hizmetleri: Moto kurye, araç kurye, acil teslimat, evrak taşıma, e-ticaret teslimat. İstanbul genelinde profesyonel kurye hizmeti.',
};

const services = [
  {
    icon: Bike,
    title: 'Moto Kurye',
    description: 'İstanbul trafiğinde en hızlı teslimat yöntemi. Hafif paketler ve evraklar için ideal.',
    features: ['Aynı gün teslimat', 'Trafik avantajı', '1-5 kg arası paketler', 'Evrak ve dosyalar'],
  },
  {
    icon: Car,
    title: 'Araç Kurye',
    description: 'Büyük ve ağır paketler için araçlı teslimat hizmeti. Güvenli ve hasarsız taşıma.',
    features: ['Büyük paketler', 'Ağır yükler', 'Kırılacak eşyalar', 'Toplu teslimat'],
  },
  {
    icon: Zap,
    title: 'Acil / Express',
    description: 'Dakikalar içinde alım, en kısa sürede teslimat. Acil durumlar için öncelikli hizmet.',
    features: ['Anında alım', 'Öncelikli teslimat', '7/24 hizmet', 'Takip imkanı'],
  },
  {
    icon: FileText,
    title: 'Evrak Taşıma',
    description: 'Gizli ve önemli evraklarınızın güvenli teslimatı. Kurumsal güvence.',
    features: ['Gizlilik garantisi', 'Sigortalı teslimat', 'İmza karşılığı', 'Teslim belgesi'],
  },
  {
    icon: Package,
    title: 'E-ticaret Teslimat',
    description: 'Online satışlarınız için entegre teslimat çözümü. Müşteri memnuniyeti odaklı.',
    features: ['API entegrasyonu', 'Toplu gönderi', 'Kapıda ödeme', 'İade yönetimi'],
  }
];

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-tulpar-muted max-w-xl mx-auto">
            İstanbul genelinde her türlü kurye ihtiyacınız için profesyonel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-tulpar-border shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-tulpar-section flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-tulpar-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-tulpar-text mb-2">
                        {service.title}
                      </h2>
                      <p className="text-tulpar-muted mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-tulpar-text">
                            <CheckCircle className="w-4 h-4 text-tulpar-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tulpar-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-tulpar-text mb-4">
            Hangi hizmeti seçeceğinizi bilmiyor musunuz?
          </h2>
          <p className="text-tulpar-muted mb-8">
            Ücret hesaplama aracımızla ihtiyacınıza uygun fiyatı anında öğrenin.
          </p>
          <Link href="/ucret-hesapla">
            <Button size="lg" className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
              Ücret Hesapla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}