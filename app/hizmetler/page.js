import { Bike, Car, Zap, FileText, Package, Clock, Shield, MapPin, CheckCircle } from 'lucide-react';
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
    color: 'from-tulpar-turquoise to-teal-600'
  },
  {
    icon: Car,
    title: 'Araç Kurye',
    description: 'Büyük ve ağır paketler için araçlı teslimat hizmeti. Güvenli ve hasarsız taşıma.',
    features: ['Büyük paketler', 'Ağır yükler', 'Kırılacak eşyalar', 'Toplu teslimat'],
    color: 'from-tulpar-gold to-amber-600'
  },
  {
    icon: Zap,
    title: 'Acil / Express',
    description: 'Dakikalar içinde alım, en kısa sürede teslimat. Acil durumlar için öncelikli hizmet.',
    features: ['Anında alım', 'Öncelikli teslimat', '7/24 hizmet', 'Takip imkanı'],
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: FileText,
    title: 'Evrak Taşıma',
    description: 'Gizli ve önemli evraklarınızın güvenli teslimatı. Kurumsal güvence.',
    features: ['Gizlilik garantisi', 'Sigortalı teslimat', 'İmza karşılığı', 'Teslim belgesi'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Package,
    title: 'E-ticaret Teslimat',
    description: 'Online satışlarınız için entegre teslimat çözümü. Müşteri memnuniyeti odaklı.',
    features: ['API entegrasyonu', 'Toplu gönderi', 'Kapıda ödeme', 'İade yönetimi'],
    color: 'from-rose-500 to-pink-600'
  }
];

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-tulpar-text mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-tulpar-muted max-w-2xl mx-auto">
            İstanbul genelinde her türlü kurye ihtiyacınız için profesyonel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-tulpar-surface border-tulpar-turquoise/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-tulpar-text mb-4">
                        {service.title}
                      </h2>
                      <p className="text-tulpar-muted text-lg mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-tulpar-text">
                            <CheckCircle className="w-5 h-5 text-tulpar-turquoise" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Visual */}
                    <div className={`bg-gradient-to-br ${service.color} bg-opacity-10 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <service.icon className="w-32 h-32 text-white/20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-tulpar-turquoise/20 to-tulpar-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-tulpar-text mb-4">
            Hangi hizmeti seçeceğinizi bilmiyor musunuz?
          </h2>
          <p className="text-tulpar-muted mb-8">
            Ücret hesaplama aracımızla ihtiyacınıza uygun fiyatı anında öğrenin.
          </p>
          <Link href="/ucret-hesapla">
            <Button size="lg" className="bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-bold">
              Ücret Hesapla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}