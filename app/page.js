'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Bike, 
  Car, 
  Zap, 
  FileText, 
  Package,
  ArrowRight,
  Clock,
  Shield,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TulparLogo } from '@/components/TulparLogo';

// Hizmet Kartları
const services = [
  {
    icon: Bike,
    title: 'Moto Kurye',
    description: 'Trafikte hızlı teslimat. İstanbul içi aynı gün.',
  },
  {
    icon: Car,
    title: 'Araç Kurye',
    description: 'Büyük paketler için araçlı teslimat hizmeti.',
  },
  {
    icon: Zap,
    title: 'Acil / Express',
    description: 'Dakikalar içinde alım, en hızlı teslimat.',
  },
  {
    icon: FileText,
    title: 'Evrak Taşıma',
    description: 'Güvenli ve gizli evrak teslimatı.',
  },
  {
    icon: Package,
    title: 'E-ticaret Teslimat',
    description: 'Online satışlarınız için entegre teslimat.',
  }
];

// Nasıl Çalışır Adımları
const steps = [
  {
    number: '1',
    title: 'Fiyat Hesapla',
    description: 'Alım ve teslim bölgelerini seçin, anında fiyat öğrenin.'
  },
  {
    number: '2',
    title: 'Sipariş Ver',
    description: 'WhatsApp veya telefon ile sipariş oluşturun.'
  },
  {
    number: '3',
    title: 'Teslimat',
    description: 'Kuryemiz paketinizi alır ve teslim eder.'
  }
];

// Neden Tulpar
const benefits = [
  {
    icon: Clock,
    title: 'Hızlı Teslimat',
    description: 'İstanbul içi aynı gün teslimat garantisi.'
  },
  {
    icon: Shield,
    title: 'Şeffaf Fiyat',
    description: 'Gizli ücret yok. Hesapladığınız fiyat, ödediğiniz fiyat.'
  },
  {
    icon: MapPin,
    title: 'İstanbul Uzmanlığı',
    description: 'Her bölgeyi biliriz. 8 bölge, tek fiyat sistemi.'
  }
];

// SSS
const faqs = [
  {
    question: 'Minimum paket ağırlığı nedir?',
    answer: 'Taban ücrete 1 kg veya 1 dm³ dahildir. Üzeri için ek ücret uygulanır.'
  },
  {
    question: 'Gece teslimatı yapıyor musunuz?',
    answer: 'Evet, 7/24 hizmet veriyoruz. Akşam ve gece tarifelerimiz mevcuttur.'
  },
  {
    question: 'Kurumsal abonelik avantajı nedir?',
    answer: 'KDV hariç özel fiyatlar ve öncelikli hizmet avantajı sunuyoruz.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-tulpar-bg">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tulpar Icon */}
            <div className="flex justify-center mb-8">
              <TulparLogo className="w-16 h-16" />
            </div>
            
            {/* Headline */}
            <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-6 leading-tight">
              İstanbul Genelinde Güvenilir Kurye Hizmeti
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-tulpar-muted mb-10 max-w-xl mx-auto">
              Şeffaf fiyatlandırma, zamanında teslimat. 
              İstanbul'un her noktasına profesyonel kurye hizmeti.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ucret-hesapla">
                <Button size="lg" className="w-full sm:w-auto bg-tulpar-primary hover:bg-tulpar-primary-hover text-white font-medium px-8">
                  <Calculator className="w-5 h-5 mr-2" />
                  Ücret Hesapla
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-tulpar-border text-tulpar-text hover:bg-tulpar-section px-8">
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-tulpar-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-tulpar-text mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-tulpar-muted max-w-xl mx-auto">
              Her türlü kurye ihtiyacınız için profesyonel çözümler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-tulpar-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-tulpar-section flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-tulpar-primary" />
                  </div>
                  <h3 className="text-tulpar-text font-semibold mb-2">{service.title}</h3>
                  <p className="text-tulpar-muted text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/hizmetler">
              <Button variant="outline" className="border-tulpar-border text-tulpar-text hover:bg-white">
                Tüm Hizmetler
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-tulpar-text mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-tulpar-muted">
              3 kolay adımda kurye hizmeti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tulpar-section border border-tulpar-border flex items-center justify-center">
                  <span className="text-2xl font-semibold text-tulpar-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-tulpar-text mb-2">{step.title}</h3>
                <p className="text-tulpar-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tulpar */}
      <section className="py-20 bg-tulpar-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-tulpar-text mb-4">
              Neden Tulpar?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white border border-tulpar-border">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-tulpar-section flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-tulpar-primary" />
                </div>
                <h3 className="text-lg font-semibold text-tulpar-text mb-3">{benefit.title}</h3>
                <p className="text-tulpar-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold text-tulpar-text mb-4">
                Sıkça Sorulan Sorular
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-tulpar-section border border-tulpar-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-tulpar-bg transition-colors"
                  >
                    <span className="font-medium text-tulpar-text">{faq.question}</span>
                    <ChevronRight className={`w-5 h-5 text-tulpar-muted transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-tulpar-muted text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tulpar-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-tulpar-text mb-4">
            Hemen Başlayın
          </h2>
          <p className="text-tulpar-muted mb-8 max-w-md mx-auto">
            Kurye ihtiyacınız mı var? Hemen fiyat hesaplayın.
          </p>
          <Link href="/ucret-hesapla">
            <Button size="lg" className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white font-medium px-10">
              <Calculator className="w-5 h-5 mr-2" />
              Ücret Hesapla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}